import React from "react";
import { View, Text, Button } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Link } from "expo-router";

export default function account() {
  return (
    <SafeAreaView>
      <Text>Account</Text>
      <Link href="/accountinfo">
        <Text>Account Info</Text>
      </Link>
    </SafeAreaView>
  );
}
