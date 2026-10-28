'use client';

import React from 'react';
import { motion } from 'motion/react';

interface SplitTextProps {
  text: string;
  className?: string;
  delay?: number;
  highlightWords?: string[];
  highlightClassName?: string;
}

export function SplitText({
  text,
  className = '',
  delay = 0.05,
  highlightWords = [],
  highlightClassName = 'text-primary italic',
}: SplitTextProps) {
  const words = text.split(' ');

  return (
    <span className={`inline-block ${className}`}>
      {words.map((word, i) => {
        const isHighlighted = highlightWords.some((hw) => word.toLowerCase().includes(hw.toLowerCase()));

        return (
          <motion.span
            key={i}
            initial={{ opacity: 0, y: 15, filter: 'blur(8px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            transition={{
              duration: 0.6,
              delay: i * delay,
              ease: [0.2, 0.65, 0.3, 0.9],
            }}
            className={`inline-block mr-[0.28em] ${isHighlighted ? highlightClassName : ''}`}
          >
            {word}
          </motion.span>
        );
      })}
    </span>
  );
}
