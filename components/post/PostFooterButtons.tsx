import { COLORS, LAYOUT, SPACING } from "@/constants";
import { StyleSheet, View } from "react-native";
import Button from "../ui/Button";

interface PostFooterButtonsProps {
  cancelText?: string;
  confirmText?: string;
  onCancel: () => void;
  onConfirm: () => void;
  confirmDisabled?: boolean;
}

export default function PostFooterButtons({
  cancelText = "Cancel",
  confirmText = "Continue",
  onCancel,
  onConfirm,
  confirmDisabled = false,
}: PostFooterButtonsProps) {
  return (
    <View style={styles.footer}>
      <Button
        title={cancelText}
        variant="outline"
        onPress={onCancel}
        style={styles.button}
      />
      <Button
        title={confirmText}
        variant="primary"
        onPress={onConfirm}
        disabled={confirmDisabled}
        style={styles.button}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  footer: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: LAYOUT.horizontalPadding,
    borderTopWidth: 1,
    borderTopColor: COLORS.border,
    gap: SPACING.lg,
  },
  button: {
    flex: 1,
  },
});