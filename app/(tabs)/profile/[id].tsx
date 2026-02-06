import ProfileHeader from "@/components/profile/ProfileHeader";
import ProfileInformationCardRow from "@/components/profile/ProfileInformationCardRow";
import TrainingGrid from "@/components/profile/TrainingGrid";
import MotivationCard from "@/components/shared/MotivationCard";
import { AppText } from "@/components/ui/AppText";
import Spacer from "@/components/ui/Spacer";
import { COLORS, FONT_SIZE, LAYOUT } from "@/constants";
import { useLocalSearchParams } from "expo-router";
import { useState } from "react";
import { ScrollView, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

/**
 * Screen for viewing another user's profile, matching the main profile layout.
 */
export default function OtherProfileScreen() {
  const { id } = useLocalSearchParams();

  // TODO: Replace with real backend data
  const [motivation, setMotivation] = useState(
    "This is your friend's motivation statement."
  );

  // Mock profile data for demonstration
  const mockProfile = {
    name: "Friend Name",
    handle: `friend_${id}`,
    imageUrl: "https://placehold.co/100x100",
    streak: "8",
    posts: "22",
    sport: "Soccer",
    trainings: [
      { imageUrl: "https://picsum.photos/200", day: "Monday", description: "Cardio & agility" },
      { imageUrl: "https://picsum.photos/200", day: "Wednesday", description: "Strength training" },
      { imageUrl: "https://picsum.photos/200", day: "Friday", description: "Recovery & stretching" },
    ],
  };

  return (
    <SafeAreaView style={styles.safeArea} edges={["top"]}>
      <ScrollView 
        style={styles.container} 
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
      >
        <ProfileHeader 
          name={mockProfile.name} 
          handle={mockProfile.handle} 
          imageUrl={mockProfile.imageUrl}
        />
        <Spacer size={16} />
        {/* Edit button hidden for other profiles */}
        <ProfileInformationCardRow 
          cards={[
            { label: "Streak", value: mockProfile.streak, valueSize: "large" },
            { label: "Posts", value: mockProfile.posts, valueSize: "large" },
            { label: "Sport", value: mockProfile.sport, valueSize: "small" },
          ]} 
        />
        <Spacer size={32} />
        <MotivationCard 
          motivation={motivation}
        />
        <Spacer size={48} />
        <AppText variant="medium" style={styles.sectionTitle}>Training History</AppText>
        <Spacer size={24} />
        <TrainingGrid 
          items={mockProfile.trainings}
        />
        <Spacer size={40} />
        <AppText variant="regular" style={{ textAlign: "center" }}>
          Viewing profile for user: {id}
        </AppText>
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
    flex: 1,
    backgroundColor: COLORS.background,
  },
  content: {
    paddingTop: 32,
    paddingBottom: 40,
  },
  sectionTitle: {
    fontSize: FONT_SIZE.lg,
    color: COLORS.text,
    marginHorizontal: LAYOUT.horizontalPadding,
  },
});