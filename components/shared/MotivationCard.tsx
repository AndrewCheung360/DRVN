import { AppText } from "@/components/ui/AppText";
import { COLORS, FONT_SIZE, LAYOUT } from "@/constants";
import { StyleSheet, View } from "react-native";

interface MotivationCardProps {
  motivation: string;
}

export default function MotivationCard({ motivation }: MotivationCardProps) {
  return (
    <View style={styles.card}>
      <AppText variant="regular" style={styles.label}>YOUR MOTIVATION</AppText>
      <AppText variant="regular" style={styles.motivation}>{motivation}</AppText>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    minHeight: 153,
    marginHorizontal: LAYOUT.horizontalPadding,
    borderWidth: 1,
    borderColor: COLORS.border,
    backgroundColor: COLORS.cardBackground,
    padding: 25,
    gap: 8,
  },
  label: {
    fontSize: FONT_SIZE.sm,
    color: COLORS.text,
  },
  motivation: {
    fontSize: FONT_SIZE.md,
    color: COLORS.text,
  },
});