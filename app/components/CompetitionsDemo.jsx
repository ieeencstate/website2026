'use client';

import { motion } from 'framer-motion';
import { Trophy, Zap, Target } from 'lucide-react';

export default function CompetitionsDemo() {
  const trophies = [
    { Icon: Trophy, color: '#FFD700', delay: 0, position: { x: '20%', y: '30%' } },
    { Icon: Trophy, color: '#C0C0C0', delay: 0.3, position: { x: '50%', y: '20%' } },
    { Icon: Trophy, color: '#CD7F32', delay: 0.6, position: { x: '80%', y: '30%' } },
  ];

  const elements = [
    { Icon: Zap, delay: 0.2, position: { x: '30%', y: '70%' } },
    { Icon: Target, delay: 0.5, position: { x: '70%', y: '70%' } },
  ];

  return (
    <div className="w-full h-full rounded-2xl relative overflow-hidden" style={{ backgroundColor: '#1a1a1a' }}>
      {trophies.map(({ Icon, color, delay, position }, index) => (
        <motion.div
          key={`trophy-${index}`}
          initial={{ opacity: 0, y: 50, scale: 0 }}
          animate={{ 
            opacity: 1, 
            y: 0, 
            scale: [1, 1.2, 1],
          }}
          transition={{
            delay: delay,
            duration: 0.8,
            repeat: Infinity,
            repeatDelay: 3,
          }}
          style={{
            position: 'absolute',
            left: position.x,
            top: position.y,
            transform: 'translate(-50%, -50%)',
          }}
        >
          <Icon size={48} color={color} />
        </motion.div>
      ))}
      
      {elements.map(({ Icon, delay, position }, index) => (
        <motion.div
          key={`element-${index}`}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ 
            opacity: [0.5, 1, 0.5], 
            scale: [1, 1.3, 1],
            rotate: [0, 360],
          }}
          transition={{
            delay: delay,
            duration: 2,
            repeat: Infinity,
            ease: 'linear',
          }}
          style={{
            position: 'absolute',
            left: position.x,
            top: position.y,
            transform: 'translate(-50%, -50%)',
          }}
        >
          <Icon size={32} color="#ffffff" />
        </motion.div>
      ))}

      {/* Animated particles */}
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={`particle-${i}`}
          initial={{ 
            x: Math.random() * 400,
            y: Math.random() * 300,
            opacity: 0,
          }}
          animate={{
            x: Math.random() * 400,
            y: Math.random() * 300,
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: 3 + Math.random() * 2,
            repeat: Infinity,
            delay: i * 0.3,
          }}
          style={{
            position: 'absolute',
            width: '4px',
            height: '4px',
            backgroundColor: '#ffffff',
            borderRadius: '50%',
          }}
        />
      ))}
    </div>
  );
}

