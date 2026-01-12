import { AppText } from "@/components/ui/AppText";
import { COLORS, LAYOUT, SPACING } from "@/constants";
import { Ionicons } from "@expo/vector-icons";
import { StyleSheet, TouchableOpacity, View } from "react-native";

interface MediaPickerProps {
  onPress: () => void;
}

export default function MediaPicker({ onPress }: MediaPickerProps) {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <View style={styles.content}>
        <Ionicons name="image-outline" size={40} color={COLORS.text} style={styles.icon} />
        <AppText variant="regular" style={styles.text}>Add photo or video</AppText>
        <AppText variant="regular" style={styles.subText}>Max 1 minute video</AppText>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 300,
    marginHorizontal: LAYOUT.horizontalPadding,
    backgroundColor: COLORS.cardBackgroundLight,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 2,
    borderColor: COLORS.border,
  },
  content: {
    alignItems: "center",
  },
  icon: {
    marginBottom: SPACING.sm,
    opacity: 0.7,
  },
  text: {
    color: COLORS.text,
    fontSize: 16,
    marginBottom: SPACING.xs,
  },
  subText: {
    color: COLORS.text,
    fontSize: 12,
  },
});