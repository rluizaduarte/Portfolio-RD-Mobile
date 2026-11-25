import { Button, Image, StyleSheet, Text, View } from "react-native";
import { cores } from "@/constants/theme";

export default function Home() {
  return (
    <View style={styles.tela}>
      <Image
        source={require("../assets/images/avatar.jpg")}
        style={styles.avatar}
      />

      <Text style={styles.nome}>Rielly Duarte</Text>
      <Text style={styles.subtitulo}>Estudante de Ciência da Computação</Text>

      <View style={styles.botoes}>
        <Button title="Download CV" color={cores.laranja} />
        <Button title="Contato" color={cores.laranja} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  tela: {
    flex: 1,
    backgroundColor: cores.escuro,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  avatar: {
    width: 160,
    height: 160,
    borderRadius: "50%",
    marginBottom: 20,
  },
  nome: {
    color: cores.branco,
    fontSize: "42px",
    fontWeight: "bold",
  },
  subtitulo: {
    color: cores.branco,
    fontSize: 18,
    marginTop: 8,
  },
  botoes: {
    flexDirection: "row",
    gap: 12,
    marginTop: 24,
  },
});
