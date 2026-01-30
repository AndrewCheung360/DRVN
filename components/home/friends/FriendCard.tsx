import { AppText } from "@/components/ui/AppText";
import Button from "@/components/ui/Button";
import Spacer from "@/components/ui/Spacer";
import { COLORS, FONT_SIZE } from "@/constants";
import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { StyleSheet, View } from "react-native";

interface FriendCardProps {
  userName: string;
  handle: string;
  sport: string;
  streak: number;
  lastActive: string;
  onViewProfile: () => void;
}

export function FriendCard({
  userName,
  handle,
  sport,
  streak,
  lastActive,
  onViewProfile,
}: FriendCardProps) {
  return (
    <View style={styles.cardContainer}>
      {/* Top Section: Avatar and Info */}
      <View style={styles.profileSection}>
        <View style={styles.avatarInfoWrapper}>
          <View style={styles.avatarCircle} />
          <View style={styles.mainInfo}>
            <AppText variant="medium" style={[styles.nameText, styles.infoGap]}>{userName}</AppText>
            <AppText style={[styles.handleText, styles.infoGap]}>@{handle}</AppText>
            <AppText style={styles.sportText}>{sport}</AppText>
          </View>
        </View>
        <View style={styles.streakBadge}>
          <Ionicons name="flame-outline" size={14} color="#fff" />
          <AppText style={styles.streakCount}>{streak}</AppText>
        </View>
      </View>

      <Spacer size={12} />

      {/* Bottom Section: Footer Actions */}
      <View style={styles.footer}>
        <AppText style={styles.activeStatus}>
          Last active: {lastActive}
        </AppText>
        <Button
          title="View Profile"
          onPress={onViewProfile}
          style={styles.viewProfileButton}
          variant="plain"
          textStyle={{ fontSize: FONT_SIZE.md }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  cardContainer: {
    backgroundColor: COLORS.background,
    padding: 16,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: COLORS.border,
    marginBottom: 12,
  },
  profileSection: {
    flexDirection: "row",
    alignItems: "flex-start",
    position: "relative",
    justifyContent: "space-between",
  },
  avatarInfoWrapper: {
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
  },
  avatarCircle: {
    width: 48,
    height: 48,
    borderRadius: 24,
    borderWidth: 2,
    borderColor: COLORS.border,
    backgroundColor: COLORS.background,
    marginRight: 16,
  },
  mainInfo: {
    flex: 1,
    justifyContent: "center",
  },
  infoGap: {
    marginBottom: 4,
  },
  nameText: {
    fontSize: FONT_SIZE.lg,
    marginBottom: 2,
  },
  handleText: {
    fontSize: FONT_SIZE.md,
    color: COLORS.text,
    marginBottom: 4,
  },
  sportText: {
    fontSize: FONT_SIZE.md,
    color: COLORS.text,
  },
  streakBadge: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#222",
    borderRadius: 8,
    paddingHorizontal: 8,
    paddingVertical: 2,
    height: 24,
    position: "absolute",
    top: 0,
    right: 0,
  },
  streakCount: {
    marginLeft: 4,
    fontSize: FONT_SIZE.sm,
    color: COLORS.text,
  },
  footer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingTop: 12,
    borderTopWidth: 1,
    borderTopColor: COLORS.border,
  },
  activeStatus: {
    fontSize: FONT_SIZE.sm,
    color: COLORS.text,
  },
  viewProfileButton: {
    paddingHorizontal: 0,
    minWidth: 0,
  },
});