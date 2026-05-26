import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, RotateCcw, CheckCircle2 } from 'lucide-react';
import { useDhikrCounter } from '@/hooks/useDhikrCounter';

interface DhikrCounterProps {
  title: string;
  description: string;
  target?: number;
  icon?: React.ReactNode;
  counterKey: string;
}

export default function DhikrCounter({
  title,
  description,
  target = 1000,
  icon,
  counterKey,
}: DhikrCounterProps) {
  const { count, increment, reset, isLoaded } = useDhikrCounter(counterKey);
  const [isAnimating, setIsAnimating] = useState(false);
  const [justCompleted, setJustCompleted] = useState(false);

  const progress = Math.min(count / target, 1);
  const circumference = 2 * Math.PI * 54;
  const offset = circumference * (1 - progress);
  const isComplete = count >= target;

  const handleIncrement = () => {
    const wasComplete = isComplete;
    increment();
    setIsAnimating(true);
    if (!wasComplete && count + 1 >= target) {
      setJustCompleted(true);
      setTimeout(() => setJustCompleted(false), 2000);
    }
    setTimeout(() => setIsAnimating(false), 150);
  };

  const handleReset = () => {
    if (window.confirm('هل تريد إعادة تعيين هذا العداد؟')) {
      reset();
      setJustCompleted(false);
    }
  };

  if (!isLoaded) {
    return (
      <div className="arafah-card p-6 animate-pulse">
        <div className="h-5 bg-muted rounded w-1/2 mb-3" />
        <div className="h-3 bg-muted rounded w-full mb-6" />
        <div className="flex justify-center mb-6">
          <div className="w-32 h-32 rounded-full bg-muted" />
        </div>
        <div className="h-10 bg-muted rounded" />
      </div>
    );
  }

  return (
    <div className="arafah-card p-6 flex flex-col gap-5">
      <div className="flex items-start gap-3">
        {icon && <span className="text-2xl mt-0.5">{icon}</span>}
        <div className="flex-1 min-w-0">
          <h3 className="arafah-heading text-lg truncate">{title}</h3>
          <p className="text-xs text-muted-foreground leading-relaxed line-clamp-2">
            {description}
          </p>
        </div>
      </div>

      <div className="flex flex-col items-center gap-2">
        <div className="relative w-32 h-32">
          <svg className="w-full h-full -rotate-90" viewBox="0 0 120 120">
            <circle
              cx="60" cy="60" r="54"
              fill="none"
              stroke="oklch(0.9 0.005 90)"
              strokeWidth="6"
            />
            <motion.circle
              cx="60" cy="60" r="54"
              fill="none"
              stroke="url(#progressGradient)"
              strokeWidth="6"
              strokeLinecap="round"
              strokeDasharray={circumference}
              initial={false}
              animate={{ strokeDashoffset: offset }}
              transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
            />
            <defs>
              <linearGradient id="progressGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="oklch(0.42 0.15 145)" />
                <stop offset="100%" stopColor="oklch(0.67 0.16 75)" />
              </linearGradient>
            </defs>
          </svg>
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <motion.span
              className="text-3xl font-bold"
              style={{ color: 'var(--accent)' }}
              animate={isAnimating ? { scale: [1, 1.15, 1] } : { scale: 1 }}
              transition={{ duration: 0.2 }}
            >
              {count.toLocaleString('ar-SA')}
            </motion.span>
            <span className="text-[10px] text-muted-foreground mt-0.5">
              من {target.toLocaleString('ar-SA')}
            </span>
          </div>
        </div>

        <div className="w-full h-1.5 rounded-full bg-muted overflow-hidden">
          <motion.div
            className="h-full rounded-full"
            style={{
              background: 'linear-gradient(90deg, var(--primary), var(--accent))',
            }}
            initial={false}
            animate={{ width: `${progress * 100}%` }}
            transition={{ duration: 0.5, ease: [0.23, 1, 0.32, 1] }}
          />
        </div>
      </div>

      <div className="flex gap-2">
        <motion.button
          onClick={handleIncrement}
          className="arafah-counter-btn flex-1 py-2.5 flex items-center justify-center gap-2 text-sm"
          whileTap={{ scale: 0.96 }}
        >
          <Plus size={16} />
          إضافة
        </motion.button>
        <button
          onClick={handleReset}
          className="px-3 py-2.5 rounded-lg border border-border text-muted-foreground hover:text-foreground hover:border-foreground/30 transition-colors duration-150 flex items-center justify-center"
          title="إعادة تعيين العداد"
        >
          <RotateCcw size={16} />
        </button>
      </div>

      <AnimatePresence>
        {isComplete && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="overflow-hidden"
          >
            <div className={`flex items-center justify-center gap-2 py-2 px-3 rounded-lg text-sm font-medium ${
              justCompleted ? 'arafah-pulse' : ''
            }`}
            style={{
              backgroundColor: 'oklch(0.42 0.15 145 / 0.1)',
              color: 'var(--primary)',
              border: '1px solid oklch(0.42 0.15 145 / 0.2)',
            }}>
              <CheckCircle2 size={16} />
              تم إكمال العدد المستهدف
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <p className="text-[10px] text-muted-foreground/60 text-center">
        يُحفظ التقدم تلقائياً
      </p>
    </div>
  );
}
