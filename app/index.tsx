import { useRouter } from "expo-router";
import React from "react";
import { ImageBackground, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
const HOME_BG = require("../assets/images/Simple-And-Fresh-Knowledge-Contest-Poster.jpeg");

// Home screen only; navigation uses expo-router
const TechTriviaApp: React.FC = () => {
  const router = useRouter();
  return (
    <SafeAreaView className="flex-1" key="home">
      <ImageBackground source={HOME_BG} resizeMode="cover" className="flex-1">
        <View className="flex-1 bg-black/50">
          <View className="flex-1 justify-end px-6 pb-10">
            <View className="mb-8">
              <Text className="text-4xl font-extrabold text-white mb-2">
                Tech Trivia Quiz
              </Text>
              <Text className="text-base text-gray-200">
                Test your technology knowledge!
              </Text>
            </View>

            <View className="bg-white/90 rounded-2xl p-5 mb-6">
              <View className="flex-row items-center mb-2">
                <View className="w-2 h-2 rounded-full bg-amber-500 mr-3" />
                <Text className="text-gray-800 flex-1">
                  10 multiple choice questions
                </Text>
              </View>
              <View className="flex-row items-center mb-2">
                <View className="w-2 h-2 rounded-full bg-amber-500 mr-3" />
                <Text className="text-gray-800 flex-1">
                  30 seconds per question
                </Text>
              </View>
              <View className="flex-row items-center">
                <View className="w-2 h-2 rounded-full bg-amber-500 mr-3" />
                <Text className="text-gray-800 flex-1">
                  Review answers and see your score
                </Text>
              </View>
            </View>

            <TouchableOpacity
              onPress={() => router.push("/quiz")}
              className="bg-amber-600 py-4 rounded-xl shadow-lg active:opacity-90"
            >
              <Text className="text-white text-center font-bold text-lg">
                Start Quiz
              </Text>
            </TouchableOpacity>

            <View className="mt-6 items-center">
              <Text className="text-amber-200">Developed by Vincent</Text>
            </View>
          </View>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

export default TechTriviaApp;
