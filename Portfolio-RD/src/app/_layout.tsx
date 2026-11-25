import { Tabs } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { Ionicons } from "@expo/vector-icons";
import { cores } from "@/constants/theme";

export default function RootLayout() {
  return (
    <>
      <StatusBar style="light" />
      <Tabs
        screenOptions={{
          headerStyle: { backgroundColor: cores.escuro },
          headerTintColor: cores.branco,
          tabBarStyle: { backgroundColor: cores.escuro },
          tabBarActiveTintColor: cores.laranja,
        }}
      >
        <Tabs.Screen
          name="index"
          options={{
            title: "Home",
            headerShown: false,
            tabBarIcon: ({ color }) => (
              <Ionicons name="home-outline" size={22} color={color} />
            ),
          }}
        />
        <Tabs.Screen
          name="sobre"
          options={{
            title: "Sobre",
            tabBarIcon: ({ color }) => (
              <Ionicons name="person-outline" size={22} color={color} />
            ),
          }}
        />
        <Tabs.Screen
          name="academica"
          options={{
            title: "Acadêmica",
            tabBarIcon: ({ color }) => (
              <Ionicons name="school-outline" size={22} color={color} />
            ),
          }}
        />
        <Tabs.Screen
          name="profissional"
          options={{
            title: "Profissional",
            tabBarIcon: ({ color }) => (
              <Ionicons name="briefcase-outline" size={22} color={color} />
            ),
          }}
        />
        <Tabs.Screen
          name="projetos"
          options={{
            title: "Projetos",
            tabBarIcon: ({ color }) => (
              <Ionicons name="code-slash-outline" size={22} color={color} />
            ),
          }}
        />
        <Tabs.Screen
          name="jogo"
          options={{
            title: "Jogo",
            tabBarIcon: ({ color }) => (
              <Ionicons
                name="game-controller-outline"
                size={22}
                color={color}
              />
            ),
          }}
        />
      </Tabs>
    </>
  );
}
