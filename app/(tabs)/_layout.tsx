import { FontAwesome } from "@expo/vector-icons";
import { Tabs } from "expo-router";
import { blue } from "react-native-reanimated/lib/typescript/reanimated2/Colors";

export default function () {
  return (
    <Tabs  screenOptions={{ tabBarActiveTintColor: "blue", headerShown:false }}>
      <Tabs.Screen
        name="index"
        options={{
          title: "For You",
          tabBarIcon: ({ color }) => (
            <FontAwesome name="home" size={28} color={color} />
          ),
        }}
      ></Tabs.Screen>
      <Tabs.Screen
        name="explore"
        options={{
          title: "Explore",
          tabBarIcon: ({ color }) => (
            <FontAwesome name="search" size={28} color={color} />
          ),
        }}
      ></Tabs.Screen>
      <Tabs.Screen
        name="account"
        options={{
          title: "Account",
          tabBarIcon: ({ color }) => (
            <FontAwesome name="user" size={28} color={color} />
          ),
        }}
      ></Tabs.Screen>
   
    </Tabs>
  );
}
