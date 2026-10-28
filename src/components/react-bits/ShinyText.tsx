'use client';

import React from 'react';

interface ShinyTextProps {
  text: string;
  className?: string;
  speed?: number;
}

export function ShinyText({ text, className = '', speed = 3 }: ShinyTextProps) {
  return (
    <span
      className={`inline-block bg-clip-text text-transparent bg-gradient-to-r from-primary via-[#ffdbca] to-primary bg-[length:200%_auto] animate-shimmer ${className}`}
      style={{
        animationDuration: `${speed}s`,
      }}
    >
      {text}
    </span>
  );
}
