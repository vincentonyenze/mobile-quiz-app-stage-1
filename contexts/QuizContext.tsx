import { quizQuestions } from "@/constants/quizData";
import { Answer, Question } from "@/types";
import React, { createContext, useContext, useMemo, useState } from "react";

interface QuizContextValue {
  questions: Question[];
  currentIndex: number;
  answers: Answer[];
  startQuiz: () => void;
  resetQuiz: () => void;
  selectAnswer: (answerIndex: number) => void;
  next: () => void;
  prev: () => void;
}

const QuizContext = createContext<QuizContextValue | undefined>(undefined);

export const QuizProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [answers, setAnswers] = useState<Answer[]>([]);

  const startQuiz = () => {
    setCurrentIndex(0);
    setAnswers([]);
  };

  const resetQuiz = () => {
    setCurrentIndex(0);
    setAnswers([]);
  };

  const selectAnswer = (answerIndex: number) => {
    const question = quizQuestions[currentIndex];
    const nextAnswers = [...answers];
    const existing = nextAnswers.findIndex((a) => a.questionId === question.id);
    const answer: Answer = {
      questionId: question.id,
      selectedAnswer: answerIndex,
      isCorrect: answerIndex === question.correctAnswer,
    };
    if (existing >= 0) nextAnswers[existing] = answer;
    else nextAnswers.push(answer);
    setAnswers(nextAnswers);
  };

  const next = () => {
    setCurrentIndex((idx) => (idx < quizQuestions.length - 1 ? idx + 1 : idx));
  };

  const prev = () => {
    setCurrentIndex((idx) => (idx > 0 ? idx - 1 : idx));
  };

  const value = useMemo(
    () => ({
      questions: quizQuestions,
      currentIndex,
      answers,
      startQuiz,
      resetQuiz,
      selectAnswer,
      next,
      prev,
    }),
    [currentIndex, answers, selectAnswer]
  );

  return <QuizContext.Provider value={value}>{children}</QuizContext.Provider>;
};

export const useQuiz = (): QuizContextValue => {
  const ctx = useContext(QuizContext);
  if (!ctx) throw new Error("useQuiz must be used within QuizProvider");
  return ctx;
};
