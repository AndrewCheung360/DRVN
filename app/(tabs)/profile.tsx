import ProfileHeader from "@/components/profile/ProfileHeader";
import ProfileInformationCardRow from "@/components/profile/ProfileInformationCardRow";
import TrainingGrid from "@/components/profile/TrainingGrid";
import MotivationCard from "@/components/shared/MotivationCard";
import { AppText } from "@/components/ui/AppText";
import Spacer from "@/components/ui/Spacer";
import { COLORS, FONT_SIZE, LAYOUT } from "@/constants";
import { ScrollView, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function ProfileScreen() {
  return (
    <SafeAreaView style={styles.safeArea} edges={["top"]}>
      <ScrollView 
        style={styles.container} 
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
      >
        <ProfileHeader 
          name="Nickname" 
          handle="nickname_handle" 
          imageUrl={undefined}
        />
        <Spacer size={16} />
        <ProfileInformationCardRow 
          cards={[
            { label: "Streak", value: "12", valueSize: "large" },
            { label: "Posts", value: "45", valueSize: "large" },
            { label: "Sport", value: "Track & Field", valueSize: "small" },
          ]} 
        />
        <Spacer size={32} />
        <MotivationCard 
          motivation="I want to become the best version of myself and inspire others along the way." 
        />
        <Spacer size={48} />
        <AppText variant="medium" style={styles.sectionTitle}>Training History</AppText>
        <Spacer size={24} />
        <TrainingGrid 
          items={[
            { imageUrl: "https://picsum.photos/200", day: "Monday", description: "Chest and triceps stress test stress test stress test" },
            { imageUrl: "https://picsum.photos/200", day: "Tuesday", description: "Back and biceps" },
            { imageUrl: "https://picsum.photos/200", day: "Wednesday", description: "Legs and core" },
            { imageUrl: "https://picsum.photos/200", day: "Thursday", description: "Shoulders" },
          ]}
        />
        <Spacer size={40} />
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
    // Remove paddingTop here, SafeAreaView handles it
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