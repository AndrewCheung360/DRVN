import { AppText } from "@/components/ui/AppText";
import { COLORS, FONT_SIZE } from "@/constants";
import Slider from "@react-native-community/slider";
import { StyleSheet, View } from "react-native";

interface SliderInputProps {
  value: number;
  onValueChange: (value: number) => void;
  min: number;
  max: number;
  minLabel?: string;
  maxLabel?: string;
  step?: number;
}

export function SliderInput({
  value,
  onValueChange,
  min,
  max,
  minLabel,
  maxLabel,
  step = 1,
}: SliderInputProps) {
  return (
    <View style={styles.container}>
      <Slider
        style={styles.slider}
        minimumValue={min}
        maximumValue={max}
        value={value}
        onValueChange={onValueChange}
        step={step}
        minimumTrackTintColor={COLORS.text}
        maximumTrackTintColor={COLORS.border}
        thumbTintColor={COLORS.text}
      />
      <View style={styles.labelsRow}>
        <AppText variant="regular" style={styles.label}>{minLabel}</AppText>
        <AppText variant="regular" style={styles.value}>{value}</AppText>
        <AppText variant="regular" style={styles.label}>{maxLabel}</AppText>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 8,
  },
  slider: {
    width: "100%",
    height: 32,
  },
  labelsRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 4,
    width: "100%",
  },
  label: {
    color: COLORS.text,
    fontSize: FONT_SIZE.sm,
    flex: 0,
    textAlign: "left"
  },
  value: {
    color: COLORS.text,
    fontSize: FONT_SIZE.sm,
    textAlign: "center",
    flex: 1,
  },
});