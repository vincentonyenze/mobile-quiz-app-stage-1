import { ReviewItem } from "@/components/ReviewItem";
import { useQuiz } from "@/contexts/QuizContext";
import { useRouter } from "expo-router";
import React from "react";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function ReviewScreen() {
  const router = useRouter();
  const { questions, answers, resetQuiz } = useQuiz();

  return (
    <SafeAreaView className="flex-1 bg-gray-100">
      <ScrollView className="flex-1 px-4 py-6">
        <View className="bg-white rounded-2xl p-6 mb-6 shadow-md">
          <Text className="text-2xl font-bold text-gray-800 mb-2">
            Answer Review
          </Text>
          <Text className="text-gray-600">
            Score: {answers.filter((a) => a.isCorrect).length} /{" "}
            {questions.length}
          </Text>
        </View>

        {questions.map((question, index) => {
          const answer = answers.find((a) => a.questionId === question.id) || {
            questionId: question.id,
            selectedAnswer: null,
            isCorrect: false,
          };
          return (
            <ReviewItem
              key={question.id}
              question={question}
              answer={answer}
              index={index}
            />
          );
        })}

        <TouchableOpacity
          onPress={() => {
            resetQuiz();
            router.replace("/");
          }}
          className="bg-blue-600 py-4 rounded-xl mb-8"
        >
          <Text className="text-white text-center font-bold text-lg">
            Back to Home
          </Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}
