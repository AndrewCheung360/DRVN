import { AppText } from "@/components/ui/AppText";
import { StyleSheet, View } from "react-native";
import ProfileIcon from "./ProfileIcon";

interface ProfileHeaderProps {
  name: string;
  handle: string;
  imageUrl?: string;
}

export default function ProfileHeader({ name, handle, imageUrl }: ProfileHeaderProps) {
  return (
    <View style={styles.container}>
      <ProfileIcon imageUrl={imageUrl} />
      <View style={styles.textContainer}>
        <AppText variant="semiBold" style={styles.name}>{name}</AppText>
        <AppText variant="regular" style={styles.handle}>@{handle}</AppText>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal: 24,
    gap: 16,
  },
  textContainer: {
    gap: 4,
  },
  name: {
    fontSize: 20,
    color: "#f5f5f5",
  },
  handle: {
    fontSize: 14,
    color: "#f5f5f5",
    opacity: 0.7,
  },
});