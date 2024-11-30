import { useState, useEffect } from 'react';

export default function TypeWriter() {
  const phrases = [
    "i am a software engineer",
    "i am a business student",
    "i love to draw",
    "i am a huge Drake fan"
  ];
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
          setTimeout(() => {}, 2000); // Wait before deleting
        }
      } else {
        setCurrentPhrase(current.substring(0, currentPhrase.length - 1));
        
        if (currentPhrase === '') {
          setIsDeleting(false);
          setCurrentIndex((prev) => (prev + 1) % phrases.length);
        }
      }
    }, isDeleting ? 50 : 150);

    return () => clearTimeout(timer);
  }, [currentPhrase, currentIndex, isDeleting]);

  return (
    <span className="text-indigo-600">
      {currentPhrase}
      <span className="animate-pulse">|</span>
    </span>
  );
}