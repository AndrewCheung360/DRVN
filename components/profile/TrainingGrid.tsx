import { LAYOUT } from "@/constants";
import { StyleSheet, View } from "react-native";
import TrainingCard from "./TrainingCard";

interface TrainingItem {
  imageUrl: string;
  day: string;
  description: string;
}

interface TrainingGridProps {
  items: TrainingItem[];
}

export default function TrainingGrid({ items }: TrainingGridProps) {
  return (
    <View style={styles.grid}>
      {items.map((item, index) => (
        <TrainingCard 
          key={index}
          imageUrl={item.imageUrl}
          day={item.day}
          description={item.description}
        />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    paddingHorizontal: LAYOUT.horizontalPadding,
    gap: LAYOUT.gridGap,
  },
});