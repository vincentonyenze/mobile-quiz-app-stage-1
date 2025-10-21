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
    <View className="flex-row justify-between gap-3">
      <TouchableOpacity
        onPress={onPrevious}
        disabled={isPreviousDisabled}
        activeOpacity={0.8}
        className={`flex-1 py-4 rounded-2xl border-2 ${
          isPreviousDisabled 
          ? 'bg-white/20 border-white/20' 
          : 'bg-white/10 border-white/30'
        }`}
      >
        <Text
          className={`text-center font-bold text-base ${
            isPreviousDisabled ? 'text-white/40' : 'text-white'
          }`}
        >
           Previous
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={onNext}
        activeOpacity={0.8}
        className="flex-1 bg-gray-100 py-5 rounded-2xl"
      >
        <Text className="text-blue-600 text-center font-bold text-base">
          {isLastQuestion ? 'Finish Quiz' : 'Next'}
        </Text>
      </TouchableOpacity>
    </View>
  );
};