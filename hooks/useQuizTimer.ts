import { useState, useEffect } from 'react';

export const useQuizTimer = (
  initialTime: number,
  isActive: boolean,
  onTimeUp: () => void
) => {
  const [timeLeft, setTimeLeft] = useState(initialTime);

  useEffect(() => {
    if (isActive && timeLeft > 0) {
      const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
      return () => clearTimeout(timer);
    } else if (isActive && timeLeft === 0) {
      onTimeUp();
    }
  }, [timeLeft, isActive]);

  const resetTimer = () => setTimeLeft(initialTime);

  return { timeLeft, resetTimer };
};