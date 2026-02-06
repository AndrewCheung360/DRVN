import { Stack } from "expo-router";

export default function ProfileLayout() {
  return (
    <Stack 
      screenOptions={{ headerShown: false }}
      // Explicitly set the initial route
      initialRouteName="index"
    >
      <Stack.Screen name="index" />
      <Stack.Screen name="editProfile" />
    </Stack>
  );
}