import { AppText } from "@/components/ui/AppText";
import { COLORS, FONT_SIZE } from "@/constants";
import { StyleSheet, View } from "react-native";

type ValueSize = "large" | "small";

interface ProfileInformationCardProps {
  label: string;
  value: string;
  valueSize?: ValueSize;
}

export default function ProfileInformationCard({ 
  label, 
  value, 
  valueSize = "large" 
}: ProfileInformationCardProps) {
  return (
    <View style={styles.card}>
      <AppText variant="regular" style={styles.label}>{label}</AppText>
      <AppText 
        variant="regular" 
        style={[styles.value, valueSize === "large" ? styles.valueLarge : styles.valueSmall]} 
        numberOfLines={2}
      >
        {value}
      </AppText>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    flex: 1,
    height: 106,
    borderWidth: 1,
    borderColor: COLORS.border,
    backgroundColor: COLORS.cardBackgroundLight,
    padding: 20,
    gap: 8,
  },
  label: {
    fontSize: FONT_SIZE.sm,
    color: COLORS.text,
  },
  value: {
    color: COLORS.text,
  },
  valueLarge: {
    fontSize: FONT_SIZE.xxl,
  },
  valueSmall: {
    fontSize: FONT_SIZE.md,
  },
});