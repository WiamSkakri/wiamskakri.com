import React from 'react';
import { useTypewriter } from '../hooks/useTypewriter';

interface TypewriterTextProps {
  words: string[];
  className?: string;
}

export function TypewriterText({ words, className = '' }: TypewriterTextProps) {
  const text = useTypewriter({
    words,
    typingSpeed: 100,
    deletingSpeed: 50,
    delayBetweenWords: 2000,
  });

  return (
    <span className={className}>
      {text}
      <span className="animate-pulse">|</span>
    </span>
  );
}