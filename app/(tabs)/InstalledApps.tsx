import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { internalAppDetails } from "../data/mockData";

const iconMap = {
  camera: "📷",
  chat: "💬",
  map: "🗺️",
  bank: "🏦",
  calculator: "🔢",
};

const riskColors = {
  High: { bg: "#fde8e8", color: "#d32f2f" },
  Medium: { bg: "#fff9c4", color: "#f9a825" },
  Low: { bg: "#e8f5e9", color: "#388e3c" },
};

export default function InstalledApps() {
  const [search, setSearch] = useState("");
  const navigation = useNavigation();

  const filteredApps = Object.values(internalAppDetails).filter((app) =>
    app.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton}>
          <Text style={styles.backText}>←</Text>
        </TouchableOpacity>
        <Text style={styles.title}>Installed Apps</Text>
      </View>
      <TextInput
        style={styles.searchInput}
        placeholder="Search apps..."
        value={search}
        onChangeText={setSearch}
      />
      <View style={styles.appList}>
        {filteredApps.map((app) => (
          <TouchableOpacity
            key={app.id}
            style={styles.appCard}
            onPress={() =>
              navigation.navigate("InternalAppDetailsScreen", {
                appName: app.id,
              })
            }
          >
            <Text style={styles.appIcon}>{iconMap[app.icon]}</Text>
            <View style={styles.appInfo}>
              <View style={styles.appNameRow}>
                <Text style={styles.appName}>{app.name}</Text>
                <Text
                  style={{
                    ...styles.riskTag,
                    backgroundColor: riskColors[app.risk].bg,
                    color: riskColors[app.risk].color,
                  }}
                >
                  {app.risk} Risk
                </Text>
              </View>
              <Text style={styles.description}>{app.description}</Text>
              <View style={styles.metaRow}>
                <Text style={styles.metaText}>
                  {app.permissions.length} permissions
                </Text>
                <Text style={styles.metaText}>• {app.usage.lastUsed}</Text>
              </View>
            </View>
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: "#f9fafb",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 16,
  },
  backButton: {
    padding: 8,
    borderRadius: 999,
    backgroundColor: "#f3f4f6",
    marginRight: 10,
  },
  backText: {
    fontSize: 18,
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
  },
  searchInput: {
    width: "100%",
    padding: 10,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#e5e7eb",
    fontSize: 15,
    marginBottom: 16,
  },
  appList: {
    gap: 16,
  },
  appCard: {
    flexDirection: "row",
    gap: 12,
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 14,
    padding: 16,
    marginBottom: 12,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 1,
  },
  appIcon: {
    fontSize: 30,
    marginRight: 8,
  },
  appInfo: {
    flex: 1,
  },
  appNameRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 4,
  },
  appName: {
    fontWeight: "600",
    fontSize: 15,
    marginRight: 8,
  },
  riskTag: {
    fontSize: 12,
    fontWeight: "600",
    borderRadius: 999,
    paddingHorizontal: 8,
    paddingVertical: 2,
  },
  description: {
    fontSize: 13,
    color: "#757575",
  },
  metaRow: {
    flexDirection: "row",
    gap: 10,
    marginTop: 2,
  },
  metaText: {
    fontSize: 12,
    color: "#bdbdbd",
  },
});
