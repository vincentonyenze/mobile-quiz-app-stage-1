import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Question } from '@/types';

interface QuestionCardProps {
  question: Question;
  currentAnswer: number | null;
  onAnswerSelect: (answer: number) => void;
  questionNumber: number;
}

export const QuestionCard: React.FC<QuestionCardProps> = ({
  question,
  currentAnswer,
  onAnswerSelect,
  questionNumber,
}) => {
  return (
    <View className="bg-white rounded-2xl p-6 shadow-lg">
      <View className="mb-4">
        <Text className="text-sm text-blue-600 font-semibold mb-2">
          {question.category}
        </Text>
        <Text className="text-lg font-bold text-gray-800 mb-1">
          Question {questionNumber} of 10
        </Text>
        <Text className="text-xl text-gray-900 leading-7">
          {question.question}
        </Text>
      </View>

      <View className="space-y-3">
        {question.options.map((option, index) => (
          <TouchableOpacity
            key={index}
            onPress={() => onAnswerSelect(index)}
            className={`p-4 rounded-xl border-2 ${
              currentAnswer === index
                ? 'bg-blue-50 border-blue-500'
                : 'bg-gray-50 border-gray-200'
            }`}
          >
            <View className="flex-row items-center">
              <View
                className={`w-6 h-6 rounded-full border-2 mr-3 items-center justify-center ${
                  currentAnswer === index
                    ? 'bg-blue-500 border-blue-500'
                    : 'bg-white border-gray-300'
                }`}
              >
                {currentAnswer === index && (
                  <View className="w-3 h-3 bg-white rounded-full" />
                )}
              </View>
              <Text
                className={`flex-1 text-base ${
                  currentAnswer === index ? 'text-blue-900 font-semibold' : 'text-gray-700'
                }`}
              >
                {option}
              </Text>
            </View>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};