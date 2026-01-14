import HomeScreenHeader from "@/components/home/HomeScreenHeader";
import MotivationCard from "@/components/shared/MotivationCard";
import AppInput from "@/components/ui/AppInput";
import { AppText } from "@/components/ui/AppText";
import Button from "@/components/ui/Button";
import IconButton from "@/components/ui/IconButton";
import Spacer from "@/components/ui/Spacer";
import { COLORS } from "@/constants";
import { useRouter } from "expo-router";
import { StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function HomeScreen() {
  const router = useRouter();

  const handlePress = () => {
    console.log("Button pressed!");
  };

  return (
    <SafeAreaView style={styles.safeArea} edges={["top"]}>
      <View style={styles.container}>
        <HomeScreenHeader 
          title="DRVN"
          subtitle="12 day streak"
          onFriendsPress={() => router.push("/(tabs)/home/friends")}
        />
        <Spacer size={48} />

        <MotivationCard 
          motivation="I want to become the best version of myself and inspire others along the way." 
        />

        <Spacer size={48} />

        <AppText variant="medium" style={{ fontSize: 20, marginLeft: 24 }}>Today&apos;s Training</AppText>

        <Spacer size={64} />
        <Button title="Get Started" onPress={handlePress} />
        <IconButton icon="add" onPress={handlePress} />
        <AppInput placeholder="Enter name" />
        <AppInput 
          label="Username" 
          placeholder="Enter username"
          style={{ marginHorizontal: 24 }}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: COLORS.background, 
  },
  container: {
    flex: 1,
  },
});