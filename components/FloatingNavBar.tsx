import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import React from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";

export default function FloatingNavBar({ current }) {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => router.push("/dashboard")}
        style={[styles.iconWrap, current === "dashboard" && styles.active]}
      >
        <Ionicons
          name="home"
          size={26}
          color={current === "dashboard" ? "#4b7bec" : "#222"}
        />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => router.push("/InstalledApps")}
        style={[styles.iconWrap, current === "InstalledApps" && styles.active]}
      >
        <MaterialCommunityIcons
          name="apps"
          size={26}
          color={current === "InstalledApps" ? "#4b7bec" : "#222"}
        />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => router.push("/PermissionsOverview")}
        style={[
          styles.iconWrap,
          current === "PermissionsOverview" && styles.active,
        ]}
      >
        <MaterialCommunityIcons
          name="shield-check"
          size={26}
          color={current === "PermissionsOverview" ? "#4b7bec" : "#222"}
        />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    left: 20,
    right: 20,
    bottom: 15,
    flexDirection: "row",
    justifyContent: "space-around",
    backgroundColor: "#fff",
    borderRadius: 32,
    padding: 12,
    elevation: 8,
    shadowColor: "#222",
    shadowOpacity: 0.1,
    shadowRadius: 12,
    shadowOffset: { width: 0, height: 4 },
    zIndex: 100,
  },
  iconWrap: {
    padding: 8,
    borderRadius: 50,
  },
  active: {
    backgroundColor: "#e6f0fd",
  },
});
