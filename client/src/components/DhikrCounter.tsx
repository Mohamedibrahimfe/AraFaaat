import { useState } from 'react';
import { Plus, RotateCcw } from 'lucide-react';
import { useDhikrCounter } from '@/hooks/useDhikrCounter';

interface DhikrCounterProps {
  title: string;
  description: string;
  target?: number;
  icon?: React.ReactNode;
  delay?: number;
  counterKey: string; // Unique key for Local Storage
}

export default function DhikrCounter({
  title,
  description,
  target = 1000,
  icon,
  delay = 0,
  counterKey,
}: DhikrCounterProps) {
  const { count, increment, reset, isLoaded } = useDhikrCounter(counterKey);
  const [isAnimating, setIsAnimating] = useState(false);

  const handleIncrement = () => {
    increment();
    setIsAnimating(true);
    setTimeout(() => setIsAnimating(false), 150);
  };

  const handleReset = () => {
    if (window.confirm('هل تريد إعادة تعيين هذا العداد؟')) {
      reset();
    }
  };

  const progress = (count / target) * 100;

  // Show skeleton while loading from Local Storage
  if (!isLoaded) {
    return (
      <div className="arafah-card p-6 flex flex-col gap-4 animate-pulse">
        <div className="h-6 bg-gray-200 rounded w-1/2" />
        <div className="h-4 bg-gray-200 rounded w-full" />
        <div className="h-16 bg-gray-200 rounded" />
      </div>
    );
  }

  return (
    <div
      className={`arafah-card p-6 flex flex-col gap-4 arafah-stagger-${Math.min(Math.ceil(delay / 80) + 1, 5)}`}
      style={{ animationDelay: `${delay}ms` }}
    >
      {/* Header */}
      <div className="flex items-start gap-3">
        {icon && <div className="text-2xl mt-1">{icon}</div>}
        <div className="flex-1">
          <h3 className="arafah-heading text-lg">{title}</h3>
          <p className="text-sm text-muted-foreground mt-1">{description}</p>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="w-full">
        <div className="flex justify-between items-center mb-2">
          <span className="text-xs text-muted-foreground">التقدم</span>
          <span className="text-xs font-semibold text-primary">
            {count} / {target}
          </span>
        </div>
        <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-primary to-accent transition-all duration-300"
            style={{ width: `${Math.min(progress, 100)}%` }}
          />
        </div>
      </div>

      {/* Counter Display */}
      <div className="text-center py-4">
        <div
          className={`text-5xl font-bold arafah-gold-accent transition-all duration-150 ${
            isAnimating ? 'scale-110' : 'scale-100'
          }`}
        >
          {count.toLocaleString('ar-SA')}
        </div>
      </div>

      {/* Buttons */}
      <div className="flex gap-2">
        <button
          onClick={handleIncrement}
          className="arafah-counter-btn flex-1 py-3 flex items-center justify-center gap-2"
        >
          <Plus size={18} />
          إضافة
        </button>
        <button
          onClick={handleReset}
          className="px-4 py-3 rounded-lg border border-gray-300 text-foreground hover:bg-gray-50 transition-colors duration-150 flex items-center justify-center"
          title="إعادة تعيين العداد"
        >
          <RotateCcw size={18} />
        </button>
      </div>

      {/* Completion Message */}
      {count >= target && (
        <div className="text-center py-2 bg-green-50 rounded-lg border border-green-200 arafah-pulse">
          <p className="text-sm font-semibold text-green-700">
            ✓ تم إكمال العدد المستهدف
          </p>
        </div>
      )}

      {/* Save Indicator */}
      <div className="text-center">
        <p className="text-xs text-muted-foreground">
          💾 يتم حفظ التقدم تلقائياً
        </p>
      </div>
    </div>
  );
}
