import { COLORS, FONT_SIZE, LAYOUT } from "@/constants";
import { StyleSheet, View } from "react-native";
import { AppText } from "../ui/AppText";
import IconButton from "../ui/IconButton";

interface PostScreenHeaderProps {
  title: string;
  onClose?: () => void;
  onBack?: () => void;
}

export default function PostScreenHeader({ title, onClose, onBack }: PostScreenHeaderProps) {
  return (
    <View style={styles.header}>
      <View style={styles.left}>
        {onBack && <IconButton icon="arrow-back" onPress={onBack} />}
        <AppText variant="medium" style={styles.title}>{title}</AppText>
      </View>
      {onClose && <IconButton icon="close" onPress={onClose} />}
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: LAYOUT.horizontalPadding,
  },
  left: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  title: {
    color: COLORS.text,
    fontSize: FONT_SIZE.xl,
  },
});