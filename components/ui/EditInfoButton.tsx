import { AppText } from "@/components/ui/AppText";
import { COLORS, FONT_SIZE } from "@/constants";
import { StyleSheet, TextStyle, TouchableOpacity, ViewStyle } from "react-native";

export interface EditInfoButtonProps {
  /** Button label */
  title: string;
  /** Called when the button is pressed */
  onPress: () => void;
  /** Optional style override for the button */
  style?: ViewStyle;
  /** Optional style override for the text */
  textStyle?: TextStyle;
  /** Disable the button */
  disabled?: boolean;
}

/**
 * A small, borderless button that auto-sizes to its text.
 */
export function EditInfoButton({
  title,
  onPress,
  style,
  textStyle,
  disabled = false,
}: EditInfoButtonProps) {
  return (
    <TouchableOpacity
      style={[styles.button, style]}
      onPress={onPress}
      disabled={disabled}
      activeOpacity={0.7}
      accessibilityRole="button"
    >
      <AppText
        variant="regular"
        style={[styles.text, textStyle, disabled && styles.disabledText]}
      >
        {title}
      </AppText>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    alignSelf: "flex-start", // Shrinks to fit text
    backgroundColor: "transparent",
    borderWidth: 0,
    paddingVertical: 4,
    paddingHorizontal: 8,
  },
  text: {
    color: COLORS.text, // Make sure COLORS.accent exists in constants/index.ts
    fontSize: FONT_SIZE.sm,
  },
  disabledText: {
    opacity: 0.5,
  },
});