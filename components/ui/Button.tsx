import { AppText } from "@/components/ui/AppText";
import { COLORS, FONT_SIZE, LAYOUT } from "@/constants";
import { ActivityIndicator, StyleSheet, TextStyle, TouchableOpacity, ViewStyle } from "react-native";

type ButtonVariant = "primary" | "secondary" | "outline" | "plain";

interface ButtonProps {
  title: string;
  onPress: () => void;
  variant?: ButtonVariant;
  disabled?: boolean;
  loading?: boolean;
  style?: ViewStyle;
  textStyle?: TextStyle;
}

export default function Button({
  title,
  onPress,
  variant = "primary",
  disabled = false,
  loading = false,
  style,
  textStyle,
}: ButtonProps) {
  return (
    <TouchableOpacity
      style={[
        styles.button,
        styles[variant],
        disabled && styles.disabled,
        style,
      ]}
      onPress={onPress}
      disabled={disabled || loading}
      activeOpacity={0.7}
    >
      {loading ? (
        <ActivityIndicator color="#f5f5f5" />
      ) : (
        <AppText 
          variant="regular" 
          style={[styles.text, textStyle]}
        >
          {title}
        </AppText>
      )}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    paddingVertical: 14,
    paddingHorizontal: LAYOUT.horizontalPadding,
    borderRadius: 0,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderColor: COLORS.border,
  },
  primary: {
    backgroundColor: "transparent",
  },
  secondary: {
    backgroundColor: "#6c757d",
  },
  outline: {
    backgroundColor: "transparent",
  },
  disabled: {
    opacity: 0.5,
  },
  text: {
    fontSize: FONT_SIZE.lg,
    color: COLORS.text,
  },
  plain: {
    backgroundColor: "transparent",
    borderWidth: 0,
    borderColor: "transparent",
  },
});