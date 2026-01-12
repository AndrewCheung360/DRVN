import { COLORS, FONT_SIZE, LAYOUT, SPACING } from "@/constants";
import { StyleSheet, View } from "react-native";
import { AppText } from "../ui/AppText";
import IconButton from "../ui/IconButton";

interface HomeScreenHeaderProps {
  title: string;
  subtitle: string;
  onFriendsPress: () => void;
}

export default function HomeScreenHeader({ title, subtitle, onFriendsPress }: HomeScreenHeaderProps) {
  return (
    <View style={styles.header}>
      <View style={styles.textContainer}>
        <AppText variant="medium" style={styles.title}>{title}</AppText>
        <AppText variant="regular" style={styles.subtitle}>{subtitle}</AppText>
      </View>
      <IconButton icon="people" onPress={onFriendsPress} style={styles.iconButton} />
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    paddingLeft: LAYOUT.horizontalPadding,
    paddingTop: SPACING.xxl,
  },
  textContainer: {
    gap: SPACING.sm,
  },
  title: {
    color: COLORS.text,
    fontSize: FONT_SIZE.xxl,
  },
  subtitle: {
    color: COLORS.text,
    fontSize: FONT_SIZE.md,
  },
  iconButton: {
    paddingTop: 0, // Removes padding added by IconButton component
    paddingRight: LAYOUT.horizontalPadding,
  },
});