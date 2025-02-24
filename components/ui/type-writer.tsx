import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const phrases = [
  "Create beautiful websites and apps in seconds",
  "Build full-stack applications instantly",
  "Design stunning user interfaces effortlessly",
  "Deploy production-ready code seamlessly"
];

export function TypeWriter() {
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  
  useEffect(() => {
    const typeSpeed = isDeleting ? 50 : 100;
    const currentPhrase = phrases[currentPhraseIndex];
    
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (currentText === currentPhrase) {
          // Wait before starting to delete
          setTimeout(() => setIsDeleting(true), 2000);
          return;
        }
        setCurrentText(currentPhrase.slice(0, currentText.length + 1));
      } else {
        if (currentText === '') {
          setIsDeleting(false);
          setCurrentPhraseIndex((current) => (current + 1) % phrases.length);
          return;
        }
        setCurrentText(currentText.slice(0, currentText.length - 1));
      }
    }, typeSpeed);

    return () => clearTimeout(timeout);
  }, [currentText, isDeleting, currentPhraseIndex]);

  return (
    <div className="h-[2.5em] flex items-center justify-center">
      <motion.div
        key={currentText}
        initial={{ opacity: 0.5 }}
        animate={{ opacity: 1 }}
        className="text-xl md:text-2xl text-gray-300 relative"
      >
        {currentText}
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 1, 0] }}
          transition={{ repeat: Infinity, duration: 0.8 }}
          className="absolute -right-[4px] top-0 h-full w-[2px] bg-accent"
        />
      </motion.div>
    </div>
  );
}