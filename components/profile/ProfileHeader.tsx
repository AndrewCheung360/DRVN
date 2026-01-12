import { AppText } from "@/components/ui/AppText";
import { COLORS, FONT_SIZE, LAYOUT } from "@/constants";
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
    marginHorizontal: LAYOUT.horizontalPadding,
    gap: LAYOUT.gridGap,
  },
  textContainer: {
    gap: 4,
  },
  name: {
    fontSize: FONT_SIZE.xxl,
    color: COLORS.text,
  },
  handle: {
    fontSize: FONT_SIZE.md,
    color: COLORS.text,
    opacity: 0.7,
  },
});