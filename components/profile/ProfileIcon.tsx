import { AppText } from "@/components/ui/AppText";
import { COLORS, FONT_SIZE } from "@/constants";
import { Image, StyleSheet, View } from "react-native";

interface ProfileIconProps {
  imageUrl?: string;
}

export default function ProfileIcon({ imageUrl }: ProfileIconProps) {
  return (
    <View style={styles.container}>
      {imageUrl ? (
        <Image source={{ uri: imageUrl }} style={styles.image} />
      ) : (
        <AppText style={styles.initial}>?</AppText>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 64,
    height: 64,
    borderRadius: 32,
    borderWidth: 2,
    borderColor: COLORS.border,
    backgroundColor: COLORS.cardBackgroundHover,
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: 30,
  },
  initial: {
    fontSize: FONT_SIZE.xxxl,
    color: COLORS.text,
    lineHeight: 28,
    textAlign: "center",
  },
});