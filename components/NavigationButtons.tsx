import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';

interface NavigationButtonsProps {
  onPrevious: () => void;
  onNext: () => void;
  isPreviousDisabled: boolean;
  isLastQuestion: boolean;
}

export const NavigationButtons: React.FC<NavigationButtonsProps> = ({
  onPrevious,
  onNext,
  isPreviousDisabled,
  isLastQuestion,
}) => {
  return (
    <View className="flex-row justify-between mt-6 mb-8">
      <TouchableOpacity
        onPress={onPrevious}
        disabled={isPreviousDisabled}
        className={`flex-1 mr-2 py-4 rounded-xl ${
          isPreviousDisabled ? 'bg-gray-300' : 'bg-gray-700'
        }`}
      >
        <Text
          className={`text-center font-semibold ${
            isPreviousDisabled ? 'text-gray-500' : 'text-white'
          }`}
        >
          Previous
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={onNext}
        className="flex-1 ml-2 bg-blue-600 py-4 rounded-xl"
      >
        <Text className="text-white text-center font-semibold">
          {isLastQuestion ? 'Finish' : 'Next'}
        </Text>
      </TouchableOpacity>
    </View>
  );
};