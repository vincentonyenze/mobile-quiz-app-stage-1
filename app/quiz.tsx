import { NavigationButtons } from "@/components/NavigationButtons";
import { QuestionCard } from "@/components/QuestionCard";
import { Timer } from "@/components/Timer";
import { useQuiz } from "@/contexts/QuizContext";
import { useQuizTimer } from "@/hooks/useQuizTimer";
import { useRouter } from "expo-router";
import React, { useCallback } from "react";
import { ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const QUESTION_TIME = 30;

export default function QuizScreen() {
  const router = useRouter();
  const { questions, currentIndex, selectAnswer, next, prev, answers } =
    useQuiz();
  const { timeLeft, resetTimer } = useQuizTimer(QUESTION_TIME, true, () =>
    handleNext()
  );

  const currentQuestion = questions[currentIndex];
  const currentAnswer =
    answers.find((a) => a.questionId === currentQuestion.id)?.selectedAnswer ??
    null;

  const handleNext = useCallback(() => {
    if (currentIndex < questions.length - 1) {
      next();
      resetTimer();
    } else {
      router.replace("/score");
    }
  }, [currentIndex, questions.length, next, resetTimer, router]);

  return (
    <SafeAreaView className="flex-1 bg-gray-100">
      <ScrollView className="flex-1 px-4 py-6">
        <Timer timeLeft={timeLeft} totalTime={QUESTION_TIME} />

        <QuestionCard
          question={currentQuestion}
          currentAnswer={currentAnswer}
          onAnswerSelect={selectAnswer}
          questionNumber={currentIndex + 1}
        />

        <NavigationButtons
          onPrevious={() => {
            prev();
            resetTimer();
          }}
          onNext={handleNext}
          isPreviousDisabled={currentIndex === 0}
          isLastQuestion={currentIndex === questions.length - 1}
        />
      </ScrollView>
    </SafeAreaView>
  );
}
