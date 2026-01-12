import AppInput from "@/components/ui/AppInput";
import Button from "@/components/ui/Button";
import IconButton from "@/components/ui/IconButton";
import { StyleSheet, View } from "react-native";

export default function Index() {
  const handlePress = () => {
    console.log("Button pressed!");
  };

  return (
    <View style={styles.container}>
      <Button title="Get Started" onPress={handlePress} />
      <IconButton icon="add" onPress={handlePress} />
      <AppInput placeholder="Enter name" />
      <AppInput 
        label="Username" 
        placeholder="Enter username"
        style={{ marginHorizontal: 24 }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
});