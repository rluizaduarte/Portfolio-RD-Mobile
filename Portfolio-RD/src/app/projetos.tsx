import { StyleSheet, Text, View } from "react-native";
import { cores } from "@/constants/theme";

export default function Projetos() {
  return (
    <View style={styles.tela}>
      <Text style={styles.titulo}>Projetos</Text>
      <Text style={styles.texto}>Em construção...</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  tela: {
    flex: 1,
    backgroundColor: cores.escuro,
    alignItems: "center",
    justifyContent: "center",
  },
  titulo: {
    color: cores.branco,
    fontSize: 32,
    fontWeight: "800",
  },
  texto: {
    color: cores.branco,
    marginTop: 8,
  },
});
