import MediaPicker from "@/components/post/MediaPicker";
import PostFooterButtons from "@/components/post/PostFooterButtons";
import PostScreenHeader from "@/components/post/PostScreenHeader";
import AppInput from "@/components/ui/AppInput";
import Spacer from "@/components/ui/Spacer";
import { COLORS, FONT_SIZE, LAYOUT, SPACING } from "@/constants";
import { useRouter } from "expo-router";
import { useState } from "react";
import {
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StatusBar,
  StyleSheet,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function PostScreen() {
  const [description, setDescription] = useState("");
  const router = useRouter();

  const handleContinue = () => {
    router.push("/(tabs)/post/reflection");
  };

  return (
    <SafeAreaView style={styles.safeArea} edges={["top"]}>
      <StatusBar barStyle="light-content" backgroundColor={COLORS.background} />
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.keyboardView}
      >
        <View style={styles.headerWrapper}>
          <PostScreenHeader 
            title="New Post" 
            onClose={() => console.log("Close pressed")} 
          />
        </View>
        <ScrollView contentContainerStyle={styles.scrollViewContent}>
          <MediaPicker onPress={() => console.log("Add media pressed")} />

          <Spacer size={SPACING.xxl} />

          <AppInput
            label="WHAT YOU WORKED ON (OPTIONAL)"
            placeholder="Describe your training session..."
            multiline
            value={description}
            onChangeText={setDescription}
            inputStyle={styles.textInput}
            labelStyle={styles.inputLabel}
            style={styles.input}
          />
        </ScrollView>

        <PostFooterButtons
          onCancel={() => console.log("Cancel pressed")}
          onConfirm={handleContinue}
        />
      </KeyboardAvoidingView>
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
  },
  keyboardView: {
    flex: 1,
  },
  headerWrapper: {
    backgroundColor: COLORS.background,
    zIndex: 1,
  },
  scrollViewContent: {
    flexGrow: 1,
    paddingTop: SPACING.xxl,
  },
  input: {
    paddingHorizontal: LAYOUT.horizontalPadding,
  },
  inputLabel: {
    color: COLORS.text,
    fontSize: FONT_SIZE.sm,
  },
  textInput: {
    height: 120,
    textAlignVertical: "top",
    fontSize: FONT_SIZE.md,
    color: COLORS.textInput
  },
});