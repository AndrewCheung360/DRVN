import { AppText } from "@/components/ui/AppText";
import { EditInfoButton } from "@/components/ui/EditInfoButton";
import { COLORS, FONT_SIZE, LAYOUT } from "@/constants";
import React, { useEffect, useState } from "react";
import { StyleSheet, View } from "react-native";
import AppInput from "../ui/AppInput";
import Spacer from "../ui/Spacer";

interface MotivationCardProps {
  motivation: string;
  /** If provided, shows an edit button and calls this when pressed */
  onEditPress?: () => void;
  /** Called when the motivation is saved */
  onSave?: (newMotivation: string) => void;
}

export default function MotivationCard({
  motivation,
  onEditPress,
  onSave,
}: MotivationCardProps) {
  const [isEditing, setIsEditing] = useState(false);
  const [editValue, setEditValue] = useState(motivation);

  useEffect(() => {
    if (!isEditing) setEditValue(motivation);
  }, [motivation, isEditing]);

  const handleEdit = () => {
    setEditValue(motivation);
    setIsEditing(true);
    onEditPress?.();
  };

  const handleSave = () => {
    if (onSave) onSave(editValue.trim());
    setIsEditing(false);
  };

  const handleCancel = () => {
    setEditValue(motivation);
    setIsEditing(false);
  };

  return (
    <View style={styles.card}>
      <AppText variant="regular" style={styles.label}>
        YOUR MOTIVATION
      </AppText>
      {isEditing ? (
        <>
          <View style={{ paddingHorizontal: LAYOUT.horizontalPadding }}>
            <AppInput
              value={editValue}
              onChangeText={setEditValue}
              inputStyle={styles.input} // No paddingHorizontal here
              multiline
              autoFocus
              placeholder="Enter your motivation"
            />
          </View>
          <Spacer size={12} />
          <View style={styles.buttonRow}>
            <EditInfoButton
              title="Save"
              onPress={handleSave}
              style={styles.actionButton}
              textStyle={styles.saveText}
              disabled={editValue.trim() === ""}
            />
            <EditInfoButton
              title="Cancel"
              onPress={handleCancel}
              style={styles.actionButton}
              textStyle={styles.cancelText}
            />
          </View>
        </>
      ) : (
        <>
          <AppText variant="regular" style={styles.motivation}>
            {motivation}
          </AppText>
          {onEditPress && (
            <EditInfoButton
              title="Edit Motivation"
              onPress={handleEdit}
              style={styles.editButton}
              textStyle={styles.editButtonText}
            />
          )}
        </>
      )}
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
    paddingTop: 25,
    paddingBottom: 25,
    gap: 8,
  },
  label: {
    fontSize: FONT_SIZE.sm,
    color: COLORS.text,
    paddingHorizontal: LAYOUT.horizontalPadding,
  },
  motivation: {
    fontSize: FONT_SIZE.md,
    color: COLORS.text,
    paddingHorizontal: LAYOUT.horizontalPadding,
  },
  input: {
    minHeight: 60,
    fontSize: FONT_SIZE.md,
    color: COLORS.text,
    backgroundColor: COLORS.cardBackground,
    textAlignVertical: "top",
    paddingHorizontal : 8
  },
  buttonRow: {
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
    gap: 8,
    paddingHorizontal: LAYOUT.horizontalPadding,
  },
  actionButton: {
    marginTop: 0,
  },
  saveText: {
    color: COLORS.text,
    fontSize: FONT_SIZE.sm,
  },
  cancelText: {
    color: COLORS.text,
    fontSize: FONT_SIZE.sm,
  },
  editButton: {
    alignSelf: "flex-end",
    marginTop: 8,
    marginRight: LAYOUT.horizontalPadding,
  },
  editButtonText: {
    color: COLORS.text,
    fontSize: FONT_SIZE.sm,
  },
});