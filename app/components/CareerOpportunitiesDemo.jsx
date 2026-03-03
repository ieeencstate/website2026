'use client';

import { motion } from 'framer-motion';
import { Linkedin, Briefcase, Users, TrendingUp } from 'lucide-react';

export default function CareerOpportunitiesDemo() {
  const icons = [
    { Icon: Linkedin, delay: 0 },
    { Icon: Briefcase, delay: 0.2 },
    { Icon: Users, delay: 0.4 },
    { Icon: TrendingUp, delay: 0.6 },
  ];

  return (
    <div className="w-full h-full rounded-2xl flex items-center justify-center" style={{ backgroundColor: '#1a1a1a' }}>
      <div className="grid grid-cols-2 gap-8 p-8">
        {icons.map(({ Icon, delay }, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              delay: delay,
              duration: 0.5,
              repeat: Infinity,
              repeatType: 'reverse',
              repeatDelay: 2,
            }}
            className="flex flex-col items-center justify-center"
          >
            <div
              className="rounded-full p-4 mb-2"
              style={{
                backgroundColor: '#00629B',
                border: '2px solid #ffffff',
              }}
            >
              <Icon size={32} color="#ffffff" />
            </div>
            <motion.div
              className="h-1 bg-white rounded-full"
              initial={{ width: 0 }}
              animate={{ width: '60px' }}
              transition={{
                delay: delay + 0.3,
                duration: 0.5,
                repeat: Infinity,
                repeatType: 'reverse',
                repeatDelay: 2,
              }}
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
}

