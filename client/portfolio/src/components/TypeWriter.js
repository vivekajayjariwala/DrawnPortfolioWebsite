import { useState, useEffect, useMemo } from 'react';

export default function TypeWriter() {
  const phrases = useMemo(() => [
    "I'm a fourth year software engineering student at Western University",
    "I'm also completing a business degree at Ivey Business School",
    "In my spare time, I love drawing and discovering new music"
  ], []);

  const [currentPhrase, setCurrentPhrase] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      const current = phrases[currentIndex];
      
      if (!isDeleting) {
        setCurrentPhrase(current.substring(0, currentPhrase.length + 1));
        
        if (currentPhrase === current) {
          setIsDeleting(true);
          setTimeout(() => {}, 2000); // Pause at the end of phrase
        }
      } else {
        setCurrentPhrase(current.substring(0, currentPhrase.length - 1));
        
        if (currentPhrase === '') {
          setIsDeleting(false);
          setCurrentIndex((prev) => (prev + 1) % phrases.length);
        }
      }
    }, isDeleting ? 50 : 100); // Slightly faster typing speed

    return () => clearTimeout(timer);
  }, [currentPhrase, currentIndex, isDeleting, phrases]);

  return (
    <span className="text-white">
      {currentPhrase}
      <span className="animate-pulse">|</span>
    </span>
  );
}