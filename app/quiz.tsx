import { NavigationButtons } from "@/components/NavigationButtons";
import { QuestionCard } from "@/components/QuestionCard";
import { Timer } from "@/components/Timer";
import { useQuiz } from "@/contexts/QuizContext";
import { useQuizTimer } from "@/hooks/useQuizTimer";
import { useRouter } from "expo-router";
import React, { useCallback } from "react";
import { Text, View } from "react-native";
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
    <View className="flex-1 bg-gradient-to-br from-blue-600 to-purple-700">
      <View
        
        className="flex-1 bg-[#1e3a8a]"
      >
        <SafeAreaView className="flex-1">
          <View className="flex-1 px-5 py-4">
            {/* Progress Bar */}
            <View className="mb-6">
              <View className="flex-row justify-between items-center mb-2">
                <Text className="text-white/90 font-semibold text-sm">
                  Question {currentIndex + 1} of {questions.length}
                </Text>
                <Text className="text-white/90 font-semibold text-sm">
                  {Math.round(((currentIndex + 1) / questions.length) * 100)}%
                </Text>
              </View>
              <View className="h-2 bg-white/20 rounded-full overflow-hidden">
                <View 
                  className="h-full bg-white rounded-full"
                  style={{ width: `${((currentIndex + 1) / questions.length) * 100}%` }}
                />
              </View>
            </View>

            {/* Timer */}
            <Timer timeLeft={timeLeft} totalTime={QUESTION_TIME} />

            {/* Question Card */}
            <View className="flex-1 justify-center py-4">
              <QuestionCard
                question={currentQuestion}
                currentAnswer={currentAnswer}
                onAnswerSelect={selectAnswer}
                questionNumber={currentIndex + 1}
              />
            </View>

            {/* Navigation Buttons */}
            <View className="pb-2">
              <NavigationButtons
                onPrevious={() => {
                  prev();
                  resetTimer();
                }}
                onNext={handleNext}
                isPreviousDisabled={currentIndex === 0}
                isLastQuestion={currentIndex === questions.length - 1}
              />
            </View>
          </View>
        </SafeAreaView>
      </View>
    </View>
  );
}
