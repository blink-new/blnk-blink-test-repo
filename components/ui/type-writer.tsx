import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const phrases = [
  "Building beautiful apps at lightspeed ⚡️",
  "Crafting pixel-perfect interfaces 🎨",
  "Writing clean, scalable code 🚀",
  "Turning your ideas into reality ✨"
];

export function TypeWriter() {
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  
  useEffect(() => {
    const typeSpeed = isDeleting ? 30 : 50; // Faster typing speed
    const currentPhrase = phrases[currentPhraseIndex];
    
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (currentText === currentPhrase) {
          setTimeout(() => setIsDeleting(true), 1500);
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
    <div className="h-[2.5em] flex items-center justify-center relative">
      {/* Gradient background effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 blur-xl" />
      
      {/* Text container */}
      <motion.div
        key={currentText}
        initial={{ opacity: 0.5, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.2 }}
        className="text-xl md:text-3xl font-mono relative"
      >
        {/* Glowing text effect */}
        <span className="relative">
          <span className="absolute inset-0 blur-sm text-blue-400/50">{currentText}</span>
          <span className="relative text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400">
            {currentText}
          </span>
        </span>

        {/* Animated cursor */}
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 1, 0] }}
          transition={{ 
            repeat: Infinity, 
            duration: 0.8,
            ease: "linear"
          }}
          className="absolute -right-[4px] top-0 h-full w-[3px] bg-gradient-to-b from-blue-400 via-purple-400 to-pink-400"
        />

        {/* Highlight effect */}
        <motion.div
          className="absolute inset-0 bg-white/5 rounded-lg"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.5 }}
        />
      </motion.div>
    </div>
  );
}