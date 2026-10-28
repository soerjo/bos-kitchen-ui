'use client';

import React, { useEffect, useRef, useState } from 'react';

interface CountUpProps {
  to: number;
  from?: number;
  duration?: number;
  className?: string;
  format?: 'locale' | 'integer' | 'decimal';
  suffix?: string;
  prefix?: string;
}

export function CountUp({
  to,
  from = 0,
  duration = 2,
  className = '',
  format = 'integer',
  suffix = '',
  prefix = '',
}: CountUpProps) {
  const [count, setCount] = useState(from);
  const ref = useRef<HTMLSpanElement>(null);
  const [hasStarted, setHasStarted] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting && !hasStarted) {
          setHasStarted(true);
        }
      },
      { threshold: 0.1 },
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [hasStarted]);

  useEffect(() => {
    if (!hasStarted) return;

    let startTime: number | null = null;
    let animationFrameId: number;

    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
      const easeOut = 1 - Math.pow(1 - progress, 3);
      const current = from + (to - from) * easeOut;

      setCount(current);

      if (progress < 1) {
        animationFrameId = requestAnimationFrame(step);
      } else {
        setCount(to);
      }
    };

    animationFrameId = requestAnimationFrame(step);
    return () => cancelAnimationFrame(animationFrameId);
  }, [hasStarted, from, to, duration]);

  const formatValue = (val: number) => {
    if (format === 'decimal') {
      return val.toFixed(1);
    }
    if (format === 'locale') {
      return Math.floor(val).toLocaleString('id-ID');
    }
    return Math.floor(val).toString();
  };

  return (
    <span ref={ref} className={className}>
      {prefix}
      {formatValue(count)}
      {suffix}
    </span>
  );
}
