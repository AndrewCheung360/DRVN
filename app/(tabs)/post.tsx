import MediaPicker from "@/components/post/MediaPicker";
import PostFooterButtons from "@/components/post/PostFooterButtons";
import PostScreenHeader from "@/components/post/PostScreenHeader";
import AppInput from "@/components/ui/AppInput";
import Spacer from "@/components/ui/Spacer";
import { COLORS, FONT_SIZE, LAYOUT, SPACING } from "@/constants";
import { useState } from "react";
import {
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StatusBar,
  StyleSheet,
  View,
} from "react-native";

export default function PostScreen() {
  const [description, setDescription] = useState("");

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor={COLORS.background} />
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.keyboardView}
      >
        <ScrollView contentContainerStyle={styles.scrollViewContent}>
          <PostScreenHeader 
            title="New Post" 
            onClose={() => console.log("Close pressed")} 
          />

          <Spacer size={SPACING.xxl} />

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
          onConfirm={() => console.log("Continue pressed")}
        />
      </KeyboardAvoidingView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  keyboardView: {
    flex: 1,
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