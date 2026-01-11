import { AppText } from "@/components/ui/AppText";
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
    borderColor: "rgba(245, 245, 245, 0.1)",
    backgroundColor: "rgba(255, 255, 255, 0.05)",
    padding: 20,
    gap: 8,
  },
  label: {
    fontSize: 12,
    color: "#f5f5f5",
  },
  value: {
    color: "#f5f5f5",
  },
  valueLarge: {
    fontSize: 20,
  },
  valueSmall: {
    fontSize: 14,
  },
});