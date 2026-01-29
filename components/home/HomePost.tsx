import { AppText } from "@/components/ui/AppText";
import Button from "@/components/ui/Button";
import Spacer from "@/components/ui/Spacer";
import { COLORS, FONT_SIZE, LAYOUT, SPACING } from "@/constants";
import { Image, StyleSheet, View } from "react-native";

export interface HomePostProps {
  name: string;
  sport: string;
  hours: number;
  streak: number;
  imageUrl: string;
  caption: string;
  effortRating: number;
  enjoymentRating: number;
  onFirstAction: () => void;
  onSecondAction: () => void;
  firstActionLabel: string;
  secondActionLabel: string;
}

/**
 * HomePost displays a user's activity post with header, image, caption, info row, and footer actions.
 */
export function HomePost({
  name,
  sport,
  hours,
  streak,
  imageUrl,
  caption,
  effortRating,
  enjoymentRating,
  onFirstAction,
  onSecondAction,
  firstActionLabel,
  secondActionLabel,
}: HomePostProps) {
  return (
    <View style={styles.post}>
      <View style={styles.innerContent}>
        {/* Header */}
        <View style={styles.headerRow}>
          <View style={styles.headerLeft}>
            <AppText variant="medium" style={styles.name}>{name}</AppText>
            <AppText variant="regular" style={styles.sport}>{sport} • {hours} hrs</AppText>
          </View>
          <View style={styles.headerRight}>
            <AppText variant="semiBold" style={styles.streakLabel}>🔥 Streak</AppText>
            <AppText variant="medium" style={styles.streakCount}>{streak}</AppText>
          </View>
        </View>

        <Spacer size={SPACING.md} />
      </View>

      {/* Main Image (no padding) */}
      <Image source={{ uri: imageUrl }} style={styles.image} resizeMode="cover" />

      <View style={styles.innerContent}>
        <Spacer size={SPACING.sm} />

        {/* Caption */}
        <AppText variant="regular" style={styles.caption}>{caption}</AppText>

        <Spacer size={SPACING.md} />

        {/* Info Row */}
        <View style={styles.infoRow}>
          <View style={styles.infoColumn}>
            <AppText variant="regular" style={styles.infoLabel}>Effort</AppText>
            <AppText variant="regular" style={styles.infoValue}>{effortRating}/10</AppText>
          </View>
          <View style={styles.infoColumn}>
            <AppText variant="regular" style={styles.infoLabel}>Enjoyment</AppText>
            <AppText variant="regular" style={styles.infoValue}>{enjoymentRating}/10</AppText>
          </View>
        </View>

        <Spacer size={SPACING.md} />

        {/* Footer Buttons */}
        <View style={styles.footerRow}>
          <Button title={firstActionLabel} onPress={onFirstAction} style={styles.button} />
          <Button title={secondActionLabel} onPress={onSecondAction} style={styles.button} />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  post: {
    backgroundColor: COLORS.cardBackgroundHover,
    marginBottom: SPACING.xl,
    marginHorizontal: LAYOUT.horizontalPadding,
    borderRadius: 16,
    overflow: "hidden",
  },
  innerContent: {
    padding: SPACING.lg,
  },
  headerRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  headerLeft: {
    flex: 1,
  },
  name: {
    fontSize: FONT_SIZE.md,
    color: COLORS.text,
  },
  sport: {
    fontSize: FONT_SIZE.sm,
    color: COLORS.text,
    marginTop: 2,
  },
  headerRight: {
    alignItems: "flex-end",
    minWidth: 56,
  },
  streakLabel: {
    fontSize: FONT_SIZE.sm,
    color: COLORS.text,
  },
  streakCount: {
    fontSize: FONT_SIZE.lg,
    color: COLORS.text,
    marginTop: 2,
  },
  image: {
    width: "100%",
    aspectRatio: 16 / 9,
    backgroundColor: COLORS.border,
  },
  caption: {
    color: COLORS.text,
    fontSize: FONT_SIZE.md,
    marginTop: 2,
  },
  infoRow: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    marginTop: 2,
  },
  infoColumn: {
    alignItems: "flex-start",
    marginRight: SPACING.xl,
  },
  infoLabel: {
    color: COLORS.text,
    fontSize: FONT_SIZE.sm,
    marginBottom: 2,
  },
  infoValue: {
    color: COLORS.text,
    fontSize: FONT_SIZE.md,
    fontWeight: "bold",
  },
  footerRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  button: {
    flex: 1,
  },
});