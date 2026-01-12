import { COLORS, SPACING } from "@/constants";
import { StyleSheet, TextInput, TextInputProps, View, ViewStyle } from "react-native";
import { AppText } from "./AppText";

interface AppInputProps extends Omit<TextInputProps, "style"> {
  label?: string;
  style?: ViewStyle;
  inputStyle?: TextInputProps["style"];
}

export default function AppInput({ label, style, inputStyle, ...props }: AppInputProps) {
  return (
    <View style={[styles.container, style]}>
      {label && <AppText variant="regular" style={styles.label}>{label}</AppText>}
      <TextInput
        style={[styles.input, inputStyle]}
        placeholderTextColor={COLORS.textInput}
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
    fontSize: 14,
    color: COLORS.textInput,
  },
  input: {
    borderWidth: 1,
    borderColor: COLORS.border,
    backgroundColor: COLORS.textInputBackground,
    padding: SPACING.lg,
    fontSize: 16,
    color: COLORS.text,
    fontFamily: "GeistMono-Regular",
  },
});