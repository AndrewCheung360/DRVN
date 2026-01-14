import { FriendCard } from "@/components/home/friends/FriendCard";
import AppInput from "@/components/ui/AppInput";
import { AppText } from "@/components/ui/AppText";
import IconButton from "@/components/ui/IconButton";
import Spacer from "@/components/ui/Spacer";
import { COLORS, FONT_SIZE, LAYOUT, SPACING } from "@/constants";
import { useRouter } from "expo-router";
import { StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function FriendsScreen() {
  const router = useRouter();
  const handleViewProfile = () => {
    // Handle navigation or logic here
    console.log("View Profile pressed!");
  };

  return (
    <SafeAreaView style={styles.safeArea} edges={["top"]}>
      <View style={styles.container}>
        <View style={styles.header}>
          <IconButton icon="arrow-back" onPress={() => router.back()} />
          <AppText variant="medium" style={styles.title}>Friends</AppText>
          <View style={styles.placeholder} />
        </View>

        <Spacer size={SPACING.xxl} />

        <View style={styles.content}>
          <AppInput placeholder="Search friends..." style={{ marginBottom: SPACING.lg }} />

          <FriendCard
            userName="Jane Doe"
            handle="janedoe"
            sport="Running"
            streak={7}
            lastActive="2 hours ago"
            onViewProfile={handleViewProfile}
          />
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
    // Removed paddingTop, SafeAreaView handles it
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