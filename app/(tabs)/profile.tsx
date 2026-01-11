import MotivationCard from "@/components/MotivationCard";
import ProfileHeader from "@/components/profile/ProfileHeader";
import ProfileInformationCardRow from "@/components/profile/ProfileInformationCardRow";
import Spacer from "@/components/ui/Spacer";
import { StyleSheet, View } from "react-native";

export default function ProfileScreen() {
  return (
    <View style={styles.container}>
      <ProfileHeader 
        name="Ryan C" 
        handle="ryanc" 
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
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    paddingTop: 32,
  },
});