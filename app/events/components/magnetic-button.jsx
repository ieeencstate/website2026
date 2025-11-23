'use client';

import { useRef } from 'react';
import { useTheme } from '../hooks/use-theme';

export function MagneticButton({
  children,
  className = '',
  variant = 'primary',
  size = 'default',
  onClick,
}) {
  const { theme } = useTheme();
  const ref = useRef(null);
  const positionRef = useRef({ x: 0, y: 0 });
  const rafRef = useRef();

  const handleMouseMove = (e) => {
    if (!ref.current) return;

    const rect = ref.current.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;

    positionRef.current = { x: x * 0.15, y: y * 0.15 };

    if (rafRef.current) cancelAnimationFrame(rafRef.current);
    rafRef.current = requestAnimationFrame(() => {
      if (ref.current) {
        ref.current.style.transform = `translate3d(${positionRef.current.x}px, ${positionRef.current.y}px, 0)`;
      }
    });
  };

  const handleMouseLeave = () => {
    positionRef.current = { x: 0, y: 0 };
    if (rafRef.current) cancelAnimationFrame(rafRef.current);
    rafRef.current = requestAnimationFrame(() => {
      if (ref.current) {
        ref.current.style.transform = 'translate3d(0px, 0px, 0)';
      }
    });
  };

  const variants = {
    primary: theme === 'dark'
      ? 'bg-white text-black hover:bg-white/90 backdrop-blur-md hover:scale-[1.02] active:scale-[0.98] transition-all duration-500'
      : 'bg-black text-white hover:bg-black/90 backdrop-blur-md hover:scale-[1.02] active:scale-[0.98] transition-all duration-500',
    secondary: theme === 'dark'
      ? 'bg-white text-black hover:bg-white/90 backdrop-blur-xl border border-white hover:border-white transition-all duration-500'
      : 'bg-black text-white hover:bg-black/90 backdrop-blur-xl border border-black hover:border-black transition-all duration-500',
    ghost: theme === 'dark'
      ? 'bg-transparent text-white hover:bg-white/10 backdrop-blur-sm transition-all duration-500'
      : 'bg-transparent text-black hover:bg-black/5 backdrop-blur-sm transition-all duration-500',
  };

  const sizes = {
    default: 'px-6 py-2.5 text-sm',
    lg: 'px-8 py-3.5 text-base',
  };

  return (
    <button
      ref={ref}
      onClick={onClick}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`
        relative overflow-hidden rounded-full font-medium
        transition-all duration-300 ease-out will-change-transform
        ${variants[variant]}
        ${sizes[size]}
        ${className}
      `}
      style={{
        transform: 'translate3d(0px, 0px, 0)',
        contain: 'layout style paint',
      }}
    >
      <span className="relative z-10">{children}</span>
    </button>
  );
}

