export interface Question {
    id: number;
    question: string;
    options: string[];
    correctAnswer: number;
    category: string;
  }
  
  export interface Answer {
    questionId: number;
    selectedAnswer: number | null;
    isCorrect: boolean;
  }
  
  export type Screen = 'home' | 'quiz' | 'score' | 'review';