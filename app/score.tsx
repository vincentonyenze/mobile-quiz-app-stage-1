import { useQuiz } from "@/contexts/QuizContext";
import {
  calculatePercentage,
  calculateScore,
  getScoreMessage,
} from "@/utils/scoreCalculator";
import { useRouter } from "expo-router";
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function ScoreScreen() {
  const router = useRouter();
  const { answers, questions, resetQuiz } = useQuiz();
  const score = calculateScore(answers);
  const percentage = calculatePercentage(score, questions.length);

  return (
    <SafeAreaView className="flex-1 bg-gradient-to-br from-blue-500 to-purple-600">
      <View className="flex-1 justify-center items-center px-6">
        <View className="bg-white rounded-3xl p-8 w-full max-w-md shadow-2xl">
          <Text className="text-3xl font-bold text-center text-gray-800 mb-2">
            Quiz Complete!
          </Text>
          <Text className="text-lg text-center text-gray-600 mb-6">
            {getScoreMessage(score)}
          </Text>

          <View className="items-center mb-8">
            <View className="w-40 h-40 rounded-full bg-blue-100 items-center justify-center mb-4">
              <Text className="text-6xl font-bold text-blue-600">{score}</Text>
              <Text className="text-xl text-gray-600">
                / {questions.length}
              </Text>
            </View>
            <Text className="text-2xl font-semibold text-gray-800">
              {percentage.toFixed(0)}% Correct
            </Text>
          </View>

          <TouchableOpacity
            onPress={() => router.replace("/review")}
            className="bg-blue-600 py-4 rounded-xl mb-3"
          >
            <Text className="text-white text-center font-bold text-lg">
              Review Answers
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => {
              resetQuiz();
              router.replace("/");
            }}
            className="bg-gray-700 py-4 rounded-xl"
          >
            <Text className="text-white text-center font-bold text-lg">
              Retake Quiz
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}
