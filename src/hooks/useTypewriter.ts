import { useState, useEffect, useCallback } from 'react';

interface UseTypewriterProps {
  words: string[];
  typingSpeed?: number;
  deletingSpeed?: number;
  delayBetweenWords?: number;
}

export function useTypewriter({
  words,
  typingSpeed = 100,
  deletingSpeed = 50,
  delayBetweenWords = 2000,
}: UseTypewriterProps) {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [isWaiting, setIsWaiting] = useState(false);

  const nextWord = useCallback(() => {
    setSelectedIndex((current) => (current + 1) % words.length);
  }, [words.length]);

  useEffect(() => {
    let timeout: NodeJS.Timeout;

    const currentWord = words[selectedIndex];

    if (isWaiting) {
      timeout = setTimeout(() => {
        setIsWaiting(false);
        setIsDeleting(true);
      }, delayBetweenWords);
      return () => clearTimeout(timeout);
    }

    if (isDeleting) {
      if (text === '') {
        setIsDeleting(false);
        nextWord();
        return;
      }

      timeout = setTimeout(() => {
        setText(text.slice(0, -1));
      }, deletingSpeed);
      return () => clearTimeout(timeout);
    }

    if (text === currentWord) {
      setIsWaiting(true);
      return;
    }

    timeout = setTimeout(() => {
      setText(currentWord.slice(0, text.length + 1));
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [text, isDeleting, isWaiting, selectedIndex, words, typingSpeed, deletingSpeed, delayBetweenWords, nextWord]);

  return text;
}