import { Redirect } from 'expo-router';

export default function Index() {
  // Redirects the user from the root '/' to the tabs layout
  return <Redirect href="/(tabs)/home" />;
}