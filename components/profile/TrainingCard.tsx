import { AppText } from "@/components/ui/AppText";
import { COLORS, FONT_SIZE, LAYOUT } from "@/constants";
import { Image, StyleSheet, useWindowDimensions, View } from "react-native";

interface TrainingCardProps {
  imageUrl: string;
  day: string;
  description: string;
}

export default function TrainingCard({ imageUrl, day, description }: TrainingCardProps) {
  const { width: screenWidth } = useWindowDimensions();
  const cardWidth = (screenWidth - (LAYOUT.horizontalPadding * 2) - LAYOUT.gridGap) / 2;

  return (
    <View style={[styles.container, { width: cardWidth }]}>
      <Image 
        source={{ uri: imageUrl }} 
        style={[styles.image, { width: cardWidth, height: cardWidth }]} 
      />
      <View style={[styles.caption, { width: cardWidth, height: LAYOUT.captionHeight }]}>
        <AppText variant="regular" style={styles.day}>{day}</AppText>
        <AppText variant="regular" style={styles.description} numberOfLines={2}>
          {description}
        </AppText>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
  image: {
    backgroundColor: "rgba(255, 255, 255, 0.05)",
  },
  caption: {
    borderWidth: 1,
    borderColor: COLORS.border,
    backgroundColor: COLORS.cardBackground,
    padding: 12,
    gap: 8,
    overflow: "hidden",
  },
  day: {
    fontSize: FONT_SIZE.sm,
    color: COLORS.text,
    lineHeight: 14,
  },
  description: {
    fontSize: FONT_SIZE.md,
    color: COLORS.text,
    lineHeight: 18,
    flex: 1,
  },
});