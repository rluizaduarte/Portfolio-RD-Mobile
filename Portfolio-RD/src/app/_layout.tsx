import { Tabs } from "expo-router/js-tabs";
import { StatusBar } from "expo-status-bar";
import { Ionicons } from "@expo/vector-icons";
import { cores } from "@/constants/theme";

type NomeIcone = keyof typeof Ionicons.glyphMap;

function icone(nome: NomeIcone) {
  return ({ color, size }: { color: string; size: number }) => (
    <Ionicons name={nome} color={color} size={size} />
  );
}

export default function RootLayout() {
  return (
    <>
      <StatusBar style="light" />
      <Tabs
        screenOptions={{
          headerStyle: { backgroundColor: cores.escuro },
          headerTintColor: cores.branco,
          headerTitleStyle: { fontWeight: "700" },
          headerShadowVisible: false,
          tabBarStyle: {
            backgroundColor: cores.escuro,
            borderTopColor: cores.escuroBorda,
          },
          tabBarActiveTintColor: cores.laranja,
          tabBarInactiveTintColor: "#8a8a8a",
          tabBarLabelStyle: { fontSize: 10, fontWeight: "600" },
        }}
      >
        <Tabs.Screen
          name="index"
          options={{ title: "Home", headerShown: false, tabBarIcon: icone("home-outline") }}
        />
        <Tabs.Screen
          name="sobre"
          options={{ title: "Sobre", tabBarIcon: icone("person-outline") }}
        />
        <Tabs.Screen
          name="academica"
          options={{ title: "Acadêmica", tabBarIcon: icone("school-outline") }}
        />
        <Tabs.Screen
          name="profissional"
          options={{ title: "Profissional", tabBarIcon: icone("briefcase-outline") }}
        />
        <Tabs.Screen
          name="projetos"
          options={{ title: "Projetos", tabBarIcon: icone("code-slash-outline") }}
        />
        <Tabs.Screen
          name="jogo"
          options={{ title: "Jogo", tabBarIcon: icone("game-controller-outline") }}
        />
      </Tabs>
    </>
  );
}
