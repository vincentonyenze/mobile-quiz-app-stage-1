import React from 'react';
import { View, Text } from 'react-native';

interface TimerProps {
  timeLeft: number;
  totalTime: number;
}

export const Timer: React.FC<TimerProps> = ({ timeLeft, totalTime }) => {
  const percentage = (timeLeft / totalTime) * 100;
  const isWarning = percentage <= 30;
  
  return (
    <View className="mb-6">
      <View className="flex-row justify-between mb-2">
        <Text className="text-gray-600 font-medium">Time Remaining</Text>
        <Text className={`font-bold ${isWarning ? 'text-red-500' : 'text-blue-600'}`}>
          {timeLeft}s
        </Text>
      </View>
      <View className="h-2 bg-gray-200 rounded-full overflow-hidden">
        <View 
          className={`h-full ${isWarning ? 'bg-red-500' : 'bg-blue-500'}`}
          style={{ width: `${percentage}%` }}
        />
      </View>
    </View>
  );
};