import { AppText } from "@/components/ui/AppText";
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
    borderColor: "#f5f5f51A",
    backgroundColor: "rgba(255, 255, 255, 0.1)",
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: 30,
  },
  initial: {
    fontSize: 24,
    color: "#f5f5f5",
    lineHeight: 28,
    textAlign: "center",
  },
});