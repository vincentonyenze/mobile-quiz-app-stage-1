import React from 'react';
import { View, Text } from 'react-native';
import { Question, Answer } from '@/types';

interface ReviewItemProps {
  question: Question;
  answer: Answer;
  index: number;
}

export const ReviewItem: React.FC<ReviewItemProps> = ({
  question,
  answer,
  index,
}) => {
  const isCorrect = answer.isCorrect;
  const userAnswer = answer.selectedAnswer;
  
  return (
    <View className="bg-gray-200 rounded-xl p-5 mb-4 shadow-md">
      <View className="flex-row items-center mb-3">
        <View
          className={`w-8 h-8 rounded-full items-center justify-center mr-3 ${
            isCorrect ? 'bg-green-100' : 'bg-red-100'
          }`}
        >
          <Text className={`text-lg font-bold ${isCorrect ? 'text-green-600' : 'text-red-600'}`}>
            {isCorrect ? '✓' : '✗'}
          </Text>
        </View>
        <Text className="flex-1 text-base font-semibold text-gray-800">
          Question {index + 1}
        </Text>
      </View>
      
      <Text className="text-gray-800 mb-3 text-base leading-6">
        {question.question}
      </Text>
      
      {userAnswer !== null && (
        <View className="mb-2">
          <Text className="text-sm text-gray-600 mb-1">Your Answer:</Text>
          <Text className={`text-base ${isCorrect ? 'text-green-700' : 'text-red-700'}`}>
            {question.options[userAnswer]}
          </Text>
        </View>
      )}
      
      {!isCorrect && (
        <View>
          <Text className="text-sm text-gray-600 mb-1">Correct Answer:</Text>
          <Text className="text-base text-green-700">
            {question.options[question.correctAnswer]}
          </Text>
        </View>
      )}
    </View>
  );
};