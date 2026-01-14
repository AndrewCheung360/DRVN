import { AppText } from "@/components/ui/AppText";
import { COLORS } from "@/constants";
import { StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function ReflectionScreen() {
  return (
    <SafeAreaView style={styles.safeArea} edges={["top"]}>
      <AppText variant="medium" style={styles.text}>
        reflection
      </AppText>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: COLORS.background,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: COLORS.text,
    fontSize: 24,
  },
});