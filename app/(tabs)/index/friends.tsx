import { AppText } from "@/components/ui/AppText";
import IconButton from "@/components/ui/IconButton";
import Spacer from "@/components/ui/Spacer";
import { COLORS, FONT_SIZE, LAYOUT, SPACING } from "@/constants";
import { useRouter } from "expo-router";
import { StyleSheet, View } from "react-native";

export default function FriendsScreen() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <IconButton icon="arrow-back" onPress={() => router.back()} />
        <AppText variant="medium" style={styles.title}>Friends</AppText>
        <View style={styles.placeholder} />
      </View>

      <Spacer size={SPACING.xxl} />

      <View style={styles.content}>
        <AppText variant="regular" style={styles.text}>
          Friends list coming soon
        </AppText>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
    paddingTop: SPACING.xxl,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: LAYOUT.horizontalPadding,
  },
  title: {
    color: COLORS.text,
    fontSize: FONT_SIZE.xl,
  },
  placeholder: {
    width: 36,
  },
  content: {
    flex: 1,
    paddingHorizontal: LAYOUT.horizontalPadding,
  },
  text: {
    color: COLORS.text,
    fontSize: FONT_SIZE.lg,
  },
});