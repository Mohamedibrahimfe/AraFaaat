import { useState, useEffect } from 'react';

interface DhikrCounterState {
  count: number;
  lastUpdated: number;
}

/**
 * Custom hook for managing dhikr counter state with Local Storage persistence
 * Automatically saves and restores counter values
 */
export function useDhikrCounter(counterKey: string, initialValue: number = 0) {
  const [count, setCount] = useState<number>(initialValue);
  const [isLoaded, setIsLoaded] = useState(false);

  // Load from Local Storage on mount
  useEffect(() => {
    try {
      const stored = localStorage.getItem(`dhikr_${counterKey}`);
      if (stored) {
        const data: DhikrCounterState = JSON.parse(stored);
        setCount(data.count);
      }
    } catch (error) {
      console.error(`Failed to load counter ${counterKey}:`, error);
    }
    setIsLoaded(true);
  }, [counterKey]);

  // Save to Local Storage whenever count changes
  useEffect(() => {
    if (!isLoaded) return;

    try {
      const data: DhikrCounterState = {
        count,
        lastUpdated: Date.now(),
      };
      localStorage.setItem(`dhikr_${counterKey}`, JSON.stringify(data));
    } catch (error) {
      console.error(`Failed to save counter ${counterKey}:`, error);
    }
  }, [count, counterKey, isLoaded]);

  const increment = () => setCount(prev => prev + 1);
  const reset = () => setCount(0);

  return { count, increment, reset, isLoaded };
}
