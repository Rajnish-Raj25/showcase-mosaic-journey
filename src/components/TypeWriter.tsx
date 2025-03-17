
import { useState, useEffect } from 'react';

interface TypeWriterProps {
  words: string[];
  typingSpeed?: number;
  deletingSpeed?: number;
  delayBetweenWords?: number;
  className?: string;
}

export default function TypeWriter({
  words,
  typingSpeed = 150,
  deletingSpeed = 100,
  delayBetweenWords = 1500,
  className = "text-primary/90 font-medium"
}: TypeWriterProps) {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  
  useEffect(() => {
    let timeout: number;
    
    if (isDeleting) {
      if (currentText === '') {
        setIsDeleting(false);
        setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
        timeout = window.setTimeout(() => {}, delayBetweenWords);
      } else {
        timeout = window.setTimeout(() => {
          setCurrentText(currentText.slice(0, -1));
        }, deletingSpeed);
      }
    } else {
      const word = words[currentWordIndex];
      if (currentText === word) {
        timeout = window.setTimeout(() => {
          setIsDeleting(true);
        }, delayBetweenWords);
      } else {
        timeout = window.setTimeout(() => {
          setCurrentText(word.slice(0, currentText.length + 1));
        }, typingSpeed);
      }
    }
    
    return () => window.clearTimeout(timeout);
  }, [currentText, currentWordIndex, isDeleting, words, typingSpeed, deletingSpeed, delayBetweenWords]);
  
  return (
    <span className={`${className} inline-block`}>
      {currentText}
      <span className="typing-effect">&nbsp;</span>
    </span>
  );
}
