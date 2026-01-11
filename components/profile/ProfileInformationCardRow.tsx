import { StyleSheet, View } from "react-native";
import ProfileInformationCard from "./ProfileInformationCard";

type ValueSize = "large" | "small";

interface CardData {
  label: string;
  value: string;
  valueSize?: ValueSize;
}

interface ProfileInformationCardRowProps {
  cards: CardData[];
}

export default function ProfileInformationCardRow({ cards }: ProfileInformationCardRowProps) {
  return (
    <View style={styles.row}>
      {cards.map((card, index) => (
        <ProfileInformationCard 
          key={index} 
          label={card.label} 
          value={card.value} 
          valueSize={card.valueSize}
        />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    marginHorizontal: 24,
    gap: 16,
  },
});