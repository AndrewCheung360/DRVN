import { HomePost } from "@/components/home/HomePost";
import HomeScreenHeader from "@/components/home/HomeScreenHeader";
import MotivationCard from "@/components/shared/MotivationCard";
import { AppText } from "@/components/ui/AppText";
import Spacer from "@/components/ui/Spacer";
import { COLORS, FONT_SIZE, SPACING } from "@/constants";
import { useRouter } from "expo-router";
import { ScrollView, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function HomeScreen() {
  const router = useRouter();

  const handlePress = () => {
    console.log("Button pressed!");
  };

  return (
    <SafeAreaView style={styles.safeArea} edges={["top"]}>
      <ScrollView contentContainerStyle={styles.container} showsVerticalScrollIndicator={false}>
        <HomeScreenHeader 
          title="DRVN"
          subtitle="12 day streak"
          onFriendsPress={() => router.push("/(tabs)/home/friends")}
        />
        <Spacer size={SPACING.xxxl} />

        <MotivationCard 
          motivation="I want to become the best version of myself and inspire others along the way." 
        />

        <Spacer size={SPACING.xxxl} />

        <AppText variant="medium" style={{ fontSize: FONT_SIZE.xxl, marginLeft: 24 }}>Today&apos;s Training</AppText>

        <Spacer size={SPACING.xxl} />

        {/* Example HomePost */}
        <HomePost
          name="Alex Morgan"
          sport="Soccer"
          hours={2}
          streak={12}
          imageUrl="https://placehold.co/600x400?text=Training+Photo"
          caption="Great session today! Focused on endurance and teamwork."
          onFirstAction={() => console.log("Like pressed")}
          onSecondAction={() => console.log("Comment pressed")}
          firstActionLabel="Props"
          secondActionLabel="Comment" effortRating={0} enjoymentRating={0}        />

      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: COLORS.background, 
  },
  container: {
    paddingBottom: SPACING.xxl,
  },
});