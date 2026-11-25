import { Linking, Pressable, StyleSheet, Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { cores } from "@/constants/theme";

export default function Rodape() {
  return (
    <View style={styles.rodape}>
      <Text style={styles.texto}>© 2026 Rielly Duarte</Text>
      <Pressable
        style={styles.link}
        onPress={() => Linking.openURL("https://github.com/rluizaduarte")}
      >
        <Ionicons name="logo-github" size={18} color={cores.textoClaro} />
        <Text style={styles.texto}>GitHub</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  rodape: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 18,
    paddingHorizontal: 20,
    marginTop: 32,
    borderTopWidth: 1,
    borderTopColor: cores.escuroBorda,
  },
  link: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
  },
  texto: {
    color: cores.textoClaro,
    fontSize: 13,
  },
});
