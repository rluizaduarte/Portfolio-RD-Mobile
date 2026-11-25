import { ScrollView, StyleSheet, Text } from "react-native";
import { cores } from "@/constants/theme";

export default function Sobre() {
  return (
    <ScrollView style={styles.tela} contentContainerStyle={styles.conteudo}>
      <Text style={styles.pequeno}>OI, EU SOU A RIELLY...</Text>
      <Text style={styles.titulo}>Sobre mim</Text>
      <Text style={styles.paragrafo}>
        Sou estudante de Ciência da Computação na UNICAP e gosto de transformar
        ideias em software que funciona.
      </Text>

      <Text style={styles.titulo}>Tecnologias</Text>
      <Text style={styles.paragrafo}>React Native, Expo, Expo Router...</Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  tela: {
    flex: 1,
    backgroundColor: cores.claro,
  },
  conteudo: {
    padding: 20,
  },
  pequeno: {
    color: cores.laranja,
    fontWeight: "700",
    letterSpacing: 1.5,
  },
  titulo: {
    color: cores.texto,
    fontSize: 32,
    fontWeight: "800",
    marginBottom: 12,
  },
  paragrafo: {
    color: cores.textoCinza,
    fontSize: 16,
    lineHeight: 26,
    marginBottom: 24,
  },
});
