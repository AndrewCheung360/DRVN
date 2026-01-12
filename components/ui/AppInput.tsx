import { COLORS, FONT_SIZE, SPACING } from "@/constants";
import { StyleSheet, TextInput, TextInputProps, TextStyle, View, ViewStyle } from "react-native";
import { AppText } from "./AppText";

interface AppInputProps extends Omit<TextInputProps, "style"> {
  label?: string;
  style?: ViewStyle;
  inputStyle?: TextInputProps["style"];
  labelStyle?: TextStyle;
}

export default function AppInput({ label, style, inputStyle, labelStyle, ...props }: AppInputProps) {
  return (
    <View style={[styles.container, style]}>
      {label && <AppText variant="regular" style={[styles.label, labelStyle]}>{label}</AppText>}
      <TextInput
        style={[styles.input, inputStyle]}
        placeholderTextColor={COLORS.textInput}
        selectionColor={COLORS.text}
        {...props}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    gap: SPACING.sm,
  },
  label: {
    fontSize: FONT_SIZE.sm,
    color: COLORS.text,
  },
  input: {
    borderWidth: 1,
    borderColor: COLORS.border,
    backgroundColor: COLORS.textInputBackground,
    paddingVertical: SPACING.md,
    paddingHorizontal: SPACING.lg,
    fontSize: FONT_SIZE.lg,
    color: COLORS.text,
    fontFamily: "GeistMono-Regular",
  },
});