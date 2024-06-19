import { useLocalSearchParams } from "expo-router";
import { Text, View } from "react-native";

export default function Collection({ route }: { route: any }) {
  const { name } = route.params;

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>Collection {name}</Text>
    </View>
  );
}
