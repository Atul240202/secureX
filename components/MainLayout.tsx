import React from "react";
import { SafeAreaView, StyleSheet, View } from "react-native";
import AppHeader from "./AppHeader";
import FloatingNavBar from "./FloatingNavBar";

export default function MainLayout({ children, current, activeTime }) {
  return (
    <SafeAreaView style={styles.safe}>
      <AppHeader activeTime={activeTime} />
      <View style={styles.content}>{children}</View>
      <FloatingNavBar current={current} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: "#f9fafb" },
  content: { flex: 1, paddingBottom: 80 }, // Space for nav bar
});
