import { Slot } from "expo-router";
import { View, Text } from "react-native";

export default function RootLayout() {
  return (
    <>
      <View style={{ backgroundColor: "black" }}>
        <Text style={{ color: "white" }}>Go Back</Text>
      </View>
      <Slot />
    </>
  );
}
