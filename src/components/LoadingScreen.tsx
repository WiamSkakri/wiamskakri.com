import React, { useState, useEffect } from 'react';

interface LoadingScreenProps {
  onComplete: () => void;
}

export function LoadingScreen({ onComplete }: LoadingScreenProps) {
  const [text, setText] = useState('');
  const message = "Here, Grandpa will take care of you...";
  const [isComplete, setIsComplete] = useState(false);
  const [opacity, setOpacity] = useState(1);

  useEffect(() => {
    let currentIndex = 0;
    let typingTimer: NodeJS.Timeout;

    const typeText = () => {
      if (currentIndex < message.length) {
        setText(message.slice(0, currentIndex + 1));
        currentIndex++;
        typingTimer = setTimeout(typeText, 100);
      } else {
        setIsComplete(true);
      }
    };

    typingTimer = setTimeout(typeText, 500);

    return () => clearTimeout(typingTimer);
  }, []);

  useEffect(() => {
    let fadeTimer: NodeJS.Timeout;
    
    if (isComplete) {
      fadeTimer = setTimeout(() => {
        setOpacity(0);
      }, 1500);

      const completeTimer = setTimeout(() => {
        onComplete();
      }, 2000);

      return () => {
        clearTimeout(fadeTimer);
        clearTimeout(completeTimer);
      };
    }
  }, [isComplete, onComplete]);

  return (
    <div 
      className="fixed inset-0 bg-black flex items-center justify-center z-50 transition-opacity duration-500"
      style={{ opacity }}
    >
      <div className="text-2xl md:text-4xl text-white font-mono">
        {text}
        <span className="animate-pulse">|</span>
      </div>
    </div>
  );
}