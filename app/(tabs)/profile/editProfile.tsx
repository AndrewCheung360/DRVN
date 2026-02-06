import AppInput from "@/components/ui/AppInput";
import { AppText } from "@/components/ui/AppText";
import { EditInfoButton } from "@/components/ui/EditInfoButton";
import Spacer from "@/components/ui/Spacer";
import { COLORS, FONT_SIZE, LAYOUT } from "@/constants";
import { useRouter } from "expo-router";
import { useState } from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
// import IconSymbol from "@/components/ui/icon-symbol"; // Replace with your camera icon component

export default function EditProfileScreen() {
  const router = useRouter();
  const [displayName, setDisplayName] = useState("You");
  const [username, setUsername] = useState("@you");

  const handleSave = () => {
    // Save logic here
    router.back();
  };

  const handleCancel = () => {
    router.back();
  };

  return (
    <SafeAreaView style={styles.safeArea} edges={["top"]}>
      <View style={styles.container}>
        <Spacer size={32} />
        <TouchableOpacity onPress={router.back} style={styles.backButton}>
          <AppText variant="regular" style={styles.backArrow}>←</AppText>
        </TouchableOpacity>
        <AppText variant="medium" style={styles.title}>Edit Profile</AppText>
        <Spacer size={32} />

        <AppText variant="regular" style={styles.sectionLabel}>PROFILE PICTURE</AppText>
        <View style={styles.profilePicContainer}>
          <View style={styles.profilePicCircle}>
            {/* Replace IconSymbol with your camera icon */}
            {/* <IconSymbol name="camera" size={32} color={COLORS.text} style={styles.cameraIcon} /> */}
          </View>
        </View>
        <AppText variant="regular" style={styles.picHint}>
          Click the camera icon to change your profile picture
        </AppText>
        <Spacer size={32} />

        <AppText variant="regular" style={styles.sectionLabel}>DISPLAY NAME</AppText>
        <AppInput
          value={displayName}
          onChangeText={setDisplayName}
          inputStyle={styles.input}
          placeholder="You"
        />
        <AppText variant="regular" style={styles.inputHint}>
          This is how your name appears to other athletes
        </AppText>
        <Spacer size={24} />

        <AppText variant="regular" style={styles.sectionLabel}>USERNAME</AppText>
        <AppInput
          value={username}
          onChangeText={setUsername}
          inputStyle={styles.input}
          placeholder="@you"
        />
        <AppText variant="regular" style={styles.inputHint}>
          Your unique identifier in the DRVN community
        </AppText>
        <Spacer size={40} />

        <EditInfoButton
          title="✓ Save Changes"
          onPress={handleSave}
          style={styles.saveButton}
          textStyle={styles.saveText}
        />
        <Spacer size={16} />
        <EditInfoButton
          title="Cancel"
          onPress={handleCancel}
          style={styles.cancelButton}
          textStyle={styles.cancelText}
        />
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
    paddingHorizontal: LAYOUT.horizontalPadding,
  },
  backButton: {
    position: "absolute",
    top: 32,
    left: LAYOUT.horizontalPadding,
    zIndex: 1,
  },
  backArrow: {
    fontSize: FONT_SIZE.lg,
    color: COLORS.text,
  },
  title: {
    alignSelf: "center",
    fontSize: FONT_SIZE.lg,
    color: COLORS.text,
    marginBottom: 8,
  },
  sectionLabel: {
    fontSize: FONT_SIZE.sm,
    color: COLORS.text,
    marginBottom: 8,
    marginTop: 16,
  },
  profilePicContainer: {
    alignItems: "center",
    marginBottom: 8,
  },
  profilePicCircle: {
    width: 120,
    height: 120,
    borderRadius: 60,
    borderWidth: 1,
    borderColor: COLORS.text,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "transparent",
  },
  cameraIcon: {
    position: "absolute",
    bottom: 8,
    right: 8,
  },
  picHint: {
    alignSelf: "center",
    fontSize: FONT_SIZE.sm,
    color: COLORS.text,
    marginBottom: 16,
  },
  input: {
    fontSize: FONT_SIZE.md,
    color: COLORS.text,
    backgroundColor: COLORS.cardBackground,
    borderColor: COLORS.border,
    borderWidth: 1,
    borderRadius: 0,
    marginBottom: 0,
  },
  inputHint: {
    fontSize: FONT_SIZE.sm,
    color: COLORS.text,
    marginTop: 4,
    marginBottom: 8,
  },
  saveButton: {
    alignSelf: "center",
    marginTop: 24,
  },
  saveText: {
    color: COLORS.text,
    fontSize: FONT_SIZE.md,
  },
  cancelButton: {
    alignSelf: "center",
    marginTop: 8,
  },
  cancelText: {
    color: COLORS.text,
    fontSize: FONT_SIZE.md,
  },
});