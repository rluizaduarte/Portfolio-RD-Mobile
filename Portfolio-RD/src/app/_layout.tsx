import { Tabs } from "expo-router";
import { cores } from "@/constants/theme";

export default function RootLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: cores.laranja,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{ title: "Home", headerShown: false }}
      />
      <Tabs.Screen name="sobre" options={{ title: "Sobre" }} />
      <Tabs.Screen name="projetos" options={{ title: "Projetos" }} />
    </Tabs>
  );
}
