import { Question } from "@/types";
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";

interface QuestionCardProps {
  question: Question;
  currentAnswer: number | null;
  onAnswerSelect: (answer: number) => void;
  questionNumber: number;
}


// colors={['#f59e0b', '#3b82f6']}
//     start={{ x: 0, y: 0 }}
//     end={{ x: 1, y: 1 }}

export const QuestionCard: React.FC<QuestionCardProps> = ({
  question,
  currentAnswer,
  onAnswerSelect,
  questionNumber,
}) => {
  const optionLetters = ["A", "B", "C", "D"];

  return (
    <View 
    className="flex-1 p-6 shadow-2xl "
    >
      {/* Category Badge */}
      <View className="mb-5">
        <View className="inline-flex self-start bg-amber-100 px-4 py-2 rounded-full mb-4">
          <Text className="text-amber-700 font-bold text-xs uppercase tracking-wide">
            {question.category}
          </Text>
        </View>

        {/* Question Text */}

        {/* <Text className="text-lg font-bold text-gray-800 mb-1">
          Question {questionNumber} of 10
        </Text> */}
        <Text className="text-2xl font-bold text-gray-200 leading-8 mb-2">
          {question.question}
        </Text>
      </View>

      {/* Options */}

      <View className="space-y-3">
        {question.options.map((option, index) => {
          const isSelected = currentAnswer === index;
          return (
            <TouchableOpacity
              key={index}
              onPress={() => onAnswerSelect(index)}
              activeOpacity={0.7}
              className={`p-5 rounded-2xl border-2 ${
                isSelected
                  ? "bg-amber-500 border-amber-500"
                  : " border-gray-200"
              }`}
            >
              <View className="flex-row items-center">
                {/* Option Letter */}
                <View
                  className={`w-10 h-10 rounded-xl border-2 mr-3 items-center justify-center ${
                    isSelected
                      ? "bg-white"
                      : " border-2 border-gray-300"
                  }`}
                >
                  <Text
                    className={`text-lg font-bold ${
                      isSelected ? "text-amber-500" : "text-gray-200"
                    }`}
                  >
                    {optionLetters[index]}
                  </Text>
                  {/* {isSelected && (
                  <View className="w-3 h-3 bg-white rounded-full" />
                )} */}
                </View>

                {/* Option Text */}
                <Text
                  className={`flex-1 text-base leading-6 ${
                    isSelected ? "text-white font-semibold" : "text-gray-100"
                  }`}
                >
                  {option}
                </Text>

                {/* Checkmark for selected */}

                {isSelected && (
                  <View className="ml-2">
                    <View className="w-6 h-6 bg-white rounded-full items-center justify-center">
                      <Text className="text-amber-500 font-bold">✓</Text>
                    </View>
                  </View>
                )}
              </View>
            </TouchableOpacity>
          );
        })}
      </View>

      {/* Helper Text */}
      <Text className="text-gray-200 text-sm text-center mt-5">
        Select the best answer
      </Text>
    </View>
  );
};
