import ProfileHeader from "@/components/profile/ProfileHeader";
import ProfileInformationCardRow from "@/components/profile/ProfileInformationCardRow";
import TrainingGrid from "@/components/profile/TrainingGrid";
import MotivationCard from "@/components/shared/MotivationCard";
import { AppText } from "@/components/ui/AppText";
import Spacer from "@/components/ui/Spacer";
import { ScrollView, StyleSheet } from "react-native";

export default function ProfileScreen() {
  return (
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
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
  },
  content: {
    paddingTop: 32,
    paddingBottom: 40,
  },
  sectionTitle: {
    fontSize: 16,
    color: "#f5f5f5",
    marginHorizontal: 24,
  },
});