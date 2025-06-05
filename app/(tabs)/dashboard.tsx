import { useRouter } from "expo-router";
import React from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { dashboardData } from "../data/dashboardData";

const iconMap: Record<string, string> = {
  camera: "camera",
  chat: "chat",
  map: "map",
  bank: "bank",
  calculator: "calculator",
};

export default function DashboardScreen({ navigation }) {
  const summary = dashboardData;
  const router = useRouter();
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>
        <Icon name="shield-outline" size={28} color="#4b7bec" /> SecurX
      </Text>
      <Text style={styles.subtitle}>Mobile Security Dashboard</Text>

      <View style={styles.cardsRow}>
        <View style={styles.card}>
          <Icon name="cellphone" size={28} color="#4b7bec" />
          <Text style={styles.cardNumber}>{summary.totalApps}</Text>
          <Text style={styles.cardLabel}>Installed Apps</Text>
        </View>
        <View style={[styles.card, styles.cardDanger]}>
          <Icon name="alert-circle-outline" size={28} color="#eb3b5a" />
          <Text style={[styles.cardNumber, { color: "#eb3b5a" }]}>
            {summary.riskApps}
          </Text>
          <Text style={styles.cardLabel}>Risk Apps</Text>
        </View>
      </View>

      <View style={styles.timeCard}>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Icon name="clock-outline" size={24} color="#20bf6b" />
          <Text style={{ marginLeft: 8, fontSize: 18, fontWeight: "600" }}>
            {summary.dailyScreenTime}
          </Text>
        </View>
        <View style={styles.todayTag}>
          <Text style={styles.todayText}>Today</Text>
        </View>
      </View>

      <View style={styles.usageCard}>
        <Text style={styles.usageTitle}>Top 5 Most Used Apps</Text>
        {summary.mostUsedApps.map((app) => (
          <View key={app.name} style={styles.usageRow}>
            <Icon
              name={iconMap[app.icon]}
              size={22}
              color="#333"
              style={{ width: 30 }}
            />
            <Text style={{ flex: 1 }}>{app.name}</Text>
            <View style={styles.usageBarContainer}>
              <View
                style={[
                  styles.usageBar,
                  { width: `${(app.usageMinutes / 240) * 100}%` },
                ]}
              />
            </View>
            <Text style={{ width: 40, textAlign: "right" }}>
              {app.usageMinutes}m
            </Text>
          </View>
        ))}
      </View>

      <View style={styles.bottomRow}>
        <TouchableOpacity
          style={styles.bottomButton}
          onPress={() => router.push("/InstalledApps")}
        >
          <Icon name="shield-outline" size={20} color="#4b7bec" />
          <Text style={styles.bottomBtnText}>View All Apps</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.bottomButton, styles.bottomButtonGreen]}
          onPress={() => router.push("/PermissionsOverview")}
        >
          <Icon name="alert-circle-outline" size={20} color="#20bf6b" />
          <Text style={[styles.bottomBtnText, { color: "#20bf6b" }]}>
            Permissions
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { padding: 20, backgroundColor: "#f9fafb", minHeight: "100%" },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#222",
    marginTop: 16,
    textAlign: "center",
  },
  subtitle: {
    fontSize: 15,
    color: "#888",
    textAlign: "center",
    marginBottom: 24,
  },
  cardsRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  card: {
    flex: 1,
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 18,
    marginHorizontal: 6,
    alignItems: "center",
    elevation: 2,
  },
  cardDanger: { borderColor: "#eb3b5a", borderWidth: 1 },
  cardNumber: {
    fontSize: 28,
    fontWeight: "bold",
    marginVertical: 5,
    color: "#222",
  },
  cardLabel: { fontSize: 15, color: "#555" },
  timeCard: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 18,
    marginBottom: 20,
    elevation: 2,
  },
  todayTag: {
    backgroundColor: "#f1f2f6",
    borderRadius: 12,
    paddingVertical: 3,
    paddingHorizontal: 12,
  },
  todayText: { color: "#888", fontSize: 13 },
  usageCard: {
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 18,
    marginBottom: 22,
    elevation: 2,
  },
  usageTitle: { fontWeight: "bold", fontSize: 16, marginBottom: 10 },
  usageRow: { flexDirection: "row", alignItems: "center", marginVertical: 7 },
  usageBarContainer: {
    flex: 1,
    height: 7,
    backgroundColor: "#eaeaea",
    borderRadius: 5,
    marginHorizontal: 10,
  },
  usageBar: { height: 7, borderRadius: 5, backgroundColor: "#222" },
  bottomRow: {
    flexDirection: "row",
    marginTop: 12,
    justifyContent: "space-between",
  },
  bottomButton: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 16,
    flex: 1,
    marginHorizontal: 6,
    borderWidth: 1,
    borderColor: "#eaeaea",
    justifyContent: "center",
  },
  bottomButtonGreen: { backgroundColor: "#eafaf1", borderColor: "#20bf6b" },
  bottomBtnText: {
    marginLeft: 7,
    color: "#4b7bec",
    fontWeight: "bold",
    fontSize: 15,
  },
});
