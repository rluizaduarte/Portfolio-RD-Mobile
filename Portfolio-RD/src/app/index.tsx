import {
  Alert,
  Image,
  Linking,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { cores } from "@/constants/theme";
import Botao from "@/components/Botao";

const EMAIL = "riellycontato@gmail.com";

export default function Home() {
  function abrirCurriculo() {
    Alert.alert("Currículo", "Em breve!");
  }

  function enviarEmail() {
    Linking.openURL(`mailto:${EMAIL}`);
  }

  return (
    <SafeAreaView style={styles.tela}>
      <ScrollView contentContainerStyle={styles.conteudo}>
        <View style={styles.avatarBorda}>
          <Image
            source={require("@/assets/images/avatar.jpg")}
            style={styles.avatar}
          />
        </View>

        <Text style={styles.ola}>OLÁ, EU SOU</Text>
        <Text style={styles.nome}>Rielly Duarte</Text>
        <Text style={styles.subtitulo}>Estudante de Ciência da Computação</Text>

        <View style={styles.botoes}>
          <Botao
            texto="Currículo"
            icone="document-text-outline"
            onPress={abrirCurriculo}
          />
          <Botao
            texto="Contato"
            icone="mail-outline"
            onPress={enviarEmail}
            variante="contorno"
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  tela: {
    flex: 1,
    backgroundColor: cores.escuro,
  },
  conteudo: {
    alignItems: "center",
    paddingTop: 60,
    paddingHorizontal: 20,
  },
  avatarBorda: {
    padding: 5,
    borderRadius: 100,
    borderWidth: 2,
    borderColor: cores.laranja,
    marginBottom: 24,
  },
  avatar: {
    width: 170,
    height: 170,
    borderRadius: 85,
  },
  ola: {
    color: cores.laranja,
    fontWeight: "700",
    letterSpacing: 2,
  },
  nome: {
    color: cores.branco,
    fontSize: 42,
    fontWeight: "800",
  },
  subtitulo: {
    color: cores.textoClaro,
    fontSize: 18,
    marginTop: 6,
  },
  botoes: {
    flexDirection: "row",
    gap: 12,
    marginTop: 28,
  },
});
