import { Answer } from '@/types';

export const calculateScore = (answers: Answer[]): number => {
  return answers.filter(a => a.isCorrect).length;
};

export const getScoreMessage = (score: number): string => {
  if (score >= 8) return "Outstanding! 🎉";
  if (score >= 6) return "Great Job! 👏";
  if (score >= 4) return "Good Effort! 👍";
  return "Keep Learning! 📚";
};

export const calculatePercentage = (score: number, total: number): number => {
  return (score / total) * 100;
};