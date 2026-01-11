import ProfileInformationCardRow from "@/components/profile/ProfileInformationCardRow";
import { StyleSheet, View } from "react-native";

export default function ProfileScreen() {
  return (
    <View style={styles.container}>
      <ProfileInformationCardRow 
        cards={[
          { label: "Streak", value: "12", valueSize: "large" },
          { label: "Posts", value: "45", valueSize: "large" },
          { label: "Sport", value: "Track & Field", valueSize: "small" },
        ]} 
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    paddingTop: 60,
  },
});