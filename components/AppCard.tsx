import { View, Text } from "react-native";

type AppCardProps = {
  name: string;
  usageMinutes: number;
  permissions: string[];
  riskScore: number;
};

export default function AppCard({
  name,
  usageMinutes,
  permissions,
  riskScore,
}: AppCardProps) {
  const riskColor = riskScore > 7 ? "red" : riskScore > 4 ? "orange" : "green";

  return (
    <View
      style={{
        padding: 16,
        marginVertical: 8,
        borderRadius: 12,
        backgroundColor: "#fff",
        shadowColor: "#000",
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 2,
      }}
    >
      <Text style={{ fontSize: 18, fontWeight: "bold" }}>{name}</Text>
      <Text style={{ marginTop: 4 }}>Usage: {usageMinutes} mins</Text>
      <Text style={{ marginTop: 4 }}>
        Permissions: {permissions.join(", ")}
      </Text>
      <Text style={{ marginTop: 4, color: riskColor }}>
        Privacy Risk Score: {riskScore.toFixed(1)}
      </Text>
    </View>
  );
}
