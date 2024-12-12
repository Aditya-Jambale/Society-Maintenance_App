import { motion } from 'framer-motion';
import { cn } from '../../utils/cn';

interface CardProps {
  className?: string;
  children: React.ReactNode;
  variant?: 'glass' | 'solid';
}

export function Card({ className, children, variant = 'solid' }: CardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      whileHover={{ translateY: -5 }}
      className={cn(
        'rounded-xl p-6 transition-all duration-300',
        variant === 'glass' ? 'glass-card' : 'bg-white shadow-lg hover:shadow-xl',
        className
      )}
    >
      {children}
    </motion.div>
  );
}