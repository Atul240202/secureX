import { View, ScrollView, Text } from "react-native";
import { mockApps } from "@/services/mockData";
import AppCard from "@/components/AppCard";

export default function DashboardScreen() {
  return (
    <ScrollView style={{ flex: 1, padding: 16, backgroundColor: "#f3f4f6" }}>
      <Text style={{ fontSize: 24, fontWeight: "bold", marginBottom: 16 }}>
        App Usage & Privacy Dashboard
      </Text>
      {mockApps.map((app) => (
        <AppCard
          key={app.package}
          name={app.name}
          usageMinutes={app.usageMinutes}
          permissions={app.permissions}
          riskScore={app.riskScore}
        />
      ))}
    </ScrollView>
  );
}
