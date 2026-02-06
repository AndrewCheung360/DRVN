import ProfileHeader from "@/components/profile/ProfileHeader";
import ProfileInformationCardRow from "@/components/profile/ProfileInformationCardRow";
import TrainingGrid from "@/components/profile/TrainingGrid";
import MotivationCard from "@/components/shared/MotivationCard";
import { AppText } from "@/components/ui/AppText";
import IconButton from "@/components/ui/IconButton";
import Spacer from "@/components/ui/Spacer";
import { COLORS, FONT_SIZE, LAYOUT } from "@/constants";
import { router, useLocalSearchParams, useNavigation } from "expo-router";
import { useEffect, useState } from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

/**
 * Screen for viewing another user's profile, matching the main profile layout.
 */
export default function OtherProfileScreen() {
  const { id, returnTo } = useLocalSearchParams();
  const navigation = useNavigation();

  // Hide tab bar when this screen mounts, show it when it unmounts
  useEffect(() => {
    const parent = navigation.getParent();
    if (parent) {
      parent.setOptions({
        tabBarStyle: { display: "none" }
      });
    }

    return () => {
      if (parent) {
        parent.setOptions({
          tabBarStyle: { display: "flex" }
        });
      }
    };
  }, [navigation]);

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
        {/* Header with back button */}
      <View style={styles.header}>
        <IconButton icon="arrow-back" 
        onPress={() => {
          if (returnTo) {
            const returnPath = Array.isArray(returnTo) ? returnTo[0] : returnTo;
            router.push(returnPath as any);
          } else {
            router.back();
          }
        }}
        />
        <AppText variant="medium" style={{color: COLORS.text, fontSize: FONT_SIZE.md}}>Back</AppText>
        {/* Placeholder for alignment */}
        <View style={styles.placeholder} /> 
      </View>
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
  header: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: LAYOUT.horizontalPadding,
  },
  placeholder: {
    width: 36,
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