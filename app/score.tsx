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
    <SafeAreaView className="flex-1" style={{ backgroundColor: "#1e3a8a" }}>
      <View className="flex-1 justify-center items-center px-6">
        <View className="bg-white rounded-3xl p-8 w-full max-w-md shadow-2xl">
          <View className="items-center mb-6">
            <Text className="text-4xl font-bold text-center text-gray-800 mb-2">
              🎉 Quiz Complete!
            </Text>
            <Text className="text-lg text-center text-gray-600 mb-4">
              {getScoreMessage(score)}
            </Text>
          </View>

          <View className="items-center mb-8">
            <View className="w-32 h-32 rounded-full bg-amber-100 items-center justify-center mb-4 shadow-lg">
              <Text className="text-5xl font-bold text-amber-600">{score}</Text>
              <Text className="text-lg text-amber-700 font-semibold">
                / {questions.length}
              </Text>
            </View>
            <Text className="text-2xl font-bold text-gray-800 mb-2">
              {percentage.toFixed(0)}% Correct
            </Text>
            <View className="w-full bg-gray-200 rounded-full h-3 mb-2">
              <View
                className="bg-amber-500 h-3 rounded-full"
                style={{ width: `${percentage}%` }}
              />
            </View>
            <Text className="text-sm text-gray-600">
              {score >= 8
                ? "Outstanding performance! 🌟"
                : score >= 6
                ? "Great job! Keep it up! 👏"
                : score >= 4
                ? "Good effort! Practice more! 👍"
                : "Keep learning and improving! 📚"}
            </Text>
          </View>

          <TouchableOpacity
            onPress={() => router.replace("/review")}
            className="bg-amber-600 py-4 rounded-xl mb-4 shadow-lg"
          >
            <Text className="text-white text-center font-bold text-lg">
              📋 Review Answers
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => {
              resetQuiz();
              router.replace("/");
            }}
            className="bg-gray-700 py-4 rounded-xl shadow-lg"
          >
            <Text className="text-white text-center font-bold text-lg">
              🔄 Retake Quiz
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}
