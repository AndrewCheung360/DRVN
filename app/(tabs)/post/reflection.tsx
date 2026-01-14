import { SliderInput } from "@/components/post/reflection/SliderInput";
import AppInput from "@/components/ui/AppInput";
import { AppText } from "@/components/ui/AppText";
import Button from "@/components/ui/Button";
import IconButton from "@/components/ui/IconButton";
import Spacer from "@/components/ui/Spacer";
import { COLORS, FONT_SIZE, LAYOUT, SPACING } from "@/constants";
import { useRouter } from "expo-router";
import { useState } from "react";
import { Image, ScrollView, StyleSheet, Switch, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function ReflectionScreen() {
  const [reflection, setReflection] = useState("");
  const [effort, setEffort] = useState(5);
  const [enjoyment, setEnjoyment] = useState(5);
  const [wentWell, setWentWell] = useState("");
  const [needsWork, setNeedsWork] = useState("");
  const [share, setShare] = useState(false);
  const router = useRouter();

  return (
    <SafeAreaView style={styles.safeArea} edges={["top"]}>
      <ScrollView contentContainerStyle={styles.content}>
        {/* Header Row */}
        <View style={styles.headerRow}>
          <IconButton icon="arrow-back" onPress={() => router.back()} />
          <AppText variant="medium" style={styles.title}>Reflect on Today</AppText>
        </View>
        <AppText style={styles.subtitle}>
          Quick reflection helps you track patterns and improve over time.
        </AppText>

        {/* Placeholder for image/video */}
        <View style={styles.placeholderMedia}>
          {/* Replace with actual image/video when available */}
          <Image
            source={{ uri: "https://placehold.co/600x200?text=Media+Placeholder" }}
            style={styles.placeholderImage}
            resizeMode="cover"
          />
        </View>

        <AppText variant="regular" style={styles.mediaCaption}>
          This is the caption from prev screen
        </AppText>

        <Spacer size={SPACING.xl} />

        {/* Effort Level Slider */}
        <AppText variant="regular" style={styles.label}>EFFORT LEVEL</AppText>
        <SliderInput
          value={effort}
          onValueChange={setEffort}
          min={1}
          max={10}
          minLabel="Easy"
          maxLabel="Max"
        />

        <Spacer size={SPACING.lg} />

        {/* Enjoyment Slider */}
        <AppText variant="regular" style={styles.label}>ENJOYMENT</AppText>
        <SliderInput
          value={enjoyment}
          onValueChange={setEnjoyment}
          min={1}
          max={10}
          minLabel="Rough"
          maxLabel="Great"
        />

        <Spacer size={SPACING.xl} />

        {/* What went well */}
        <View style={styles.inputSection}>
          <AppText variant="regular" style={styles.inputLabel}>WHAT WENT WELL?</AppText>
          <AppInput
            value={wentWell}
            onChangeText={setWentWell}
            placeholder="What felt good or went better than expected?"
            style={styles.sectionInput}
            inputStyle={styles.sectionInputText}
            multiline
          />
        </View>

        <Spacer size={SPACING.lg} />

        {/* What needs work */}
        <View style={styles.inputSection}>
          <AppText variant="regular" style={styles.inputLabel}>WHAT NEEDS WORK?</AppText>
          <AppInput
            value={needsWork}
            onChangeText={setNeedsWork}
            placeholder="What do you want to improve next time?"
            style={styles.sectionInput}
            inputStyle={styles.sectionInputText}
            multiline
          />
        </View>

        <Spacer size={SPACING.lg} />

        {/* Share Toggle */}
        <View style={styles.shareRow}>
          <View>
            <AppText variant="regular">Share reflection with friends</AppText>
            <AppText style={styles.shareDescription}>
              Your friends can see your insights
            </AppText>
          </View>
          <Switch value={share} onValueChange={setShare} />
        </View>

        <Spacer size={SPACING.xl} />

        <Button title="Share" onPress={() => { /* handle share */ }} />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  content: {
    paddingHorizontal: LAYOUT.horizontalPadding,
    paddingBottom: SPACING.xxl,
  },
  headerRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 0,
    gap: 8,
  },
  title: {
    fontSize: FONT_SIZE.xl,
    color: COLORS.text,
    marginLeft: 8,
  },
  subtitle: {
    color: COLORS.text,
    fontSize: FONT_SIZE.sm,
    marginBottom: SPACING.md,
    marginTop: 8,
  },
  placeholderMedia: {
    width: "100%",
    aspectRatio: 398.5 / 298.5,
    backgroundColor: COLORS.border,
    borderRadius: 8,
    overflow: "hidden",
    marginBottom: SPACING.xl,
    justifyContent: "center",
    alignItems: "center",
  },
  placeholderImage: {
    width: "100%",
    height: "100%",
  },
  mediaCaption: {
    color: COLORS.text,
    fontSize: FONT_SIZE.sm,
    textAlign: "center",
    marginBottom: SPACING.xl,
  },
  label: {
    color: COLORS.text,
    fontSize: FONT_SIZE.sm,
    marginBottom: 4,
  },
  inputSection: {
    width: "100%",
    marginBottom: 0,
  },
  inputLabel: {
    color: COLORS.text,
    fontSize: FONT_SIZE.sm,
    marginBottom: 4,
    marginLeft: 4,
  },
  sectionInput: {
    minHeight: 64,
    borderWidth: 1,
    borderColor: COLORS.border,
    backgroundColor: COLORS.background,
    marginBottom: 0,
  },
  sectionInputText: {
    color: COLORS.text,
    fontSize: FONT_SIZE.md,
  },
  shareRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: SPACING.lg,
  },
  shareDescription: {
    color: COLORS.text,
    fontSize: FONT_SIZE.sm,
  },
});