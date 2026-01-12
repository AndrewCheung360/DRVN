import { AppText } from "@/components/ui/AppText";
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
    marginHorizontal: 24,
    borderWidth: 1,
    borderColor: "#f5f5f51A",
    backgroundColor: "rgba(255, 255, 255, 0.03)",
    padding: 25,
    gap: 8,
  },
  label: {
    fontSize: 12,
    color: "#f5f5f5",
  },
  motivation: {
    fontSize: 14,
    color: "#f5f5f5",
  },
});