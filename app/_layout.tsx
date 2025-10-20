import { QuizProvider } from "@/contexts/QuizContext";
import { Stack } from "expo-router";
import "../global.css";

export default function RootLayout() {
  return (
    <QuizProvider>
      <Stack screenOptions={{ headerShown: false }} />
    </QuizProvider>
  );
}
