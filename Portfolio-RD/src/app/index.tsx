import { Image, Linking, Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Href, useRouter } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { cores } from "@/constants/theme";
import Botao from "@/components/Botao";
import Rodape from "@/components/Rodape";

const LINK_CV = "https://github.com/rluizaduarte/Portfolio-RD/blob/main/portfolio/public/Rielly-CV.pdf";
const EMAIL = "riellycontato@gmail.com";

type Atalho = {
  titulo: string;
  icone: keyof typeof Ionicons.glyphMap;
  rota: Href;
};

const atalhos: Atalho[] = [
  { titulo: "Sobre", icone: "person-outline", rota: "/sobre" },
  { titulo: "Acadêmica", icone: "school-outline", rota: "/academica" },
  { titulo: "Profissional", icone: "briefcase-outline", rota: "/profissional" },
  { titulo: "Projetos", icone: "code-slash-outline", rota: "/projetos" },
  { titulo: "Jogo", icone: "game-controller-outline", rota: "/jogo" },
];

export default function Home() {
  const router = useRouter();

  function abrirCurriculo() {
    Linking.openURL(LINK_CV);
  }

  function enviarEmail() {
    const assunto = encodeURIComponent("Contato pelo portfólio");
    const corpo = encodeURIComponent("Olá, Rielly! Vi seu portfólio e...");
    Linking.openURL(`mailto:${EMAIL}?subject=${assunto}&body=${corpo}`);
  }

  return (
    <SafeAreaView style={styles.tela} edges={["top"]}>
      <ScrollView contentContainerStyle={styles.conteudo} showsVerticalScrollIndicator={false}>
        <View style={styles.topo}>
          <View style={styles.avatarBorda}>
            <Image source={require("@/assets/images/avatar.jpg")} style={styles.avatar} />
          </View>

          <Text style={styles.ola}>OLÁ, EU SOU</Text>
          <Text style={styles.nome}>Rielly Duarte</Text>
          <Text style={styles.subtitulo}>Estudante de Ciência da Computação</Text>

          <View style={styles.infos}>
            <View style={styles.info}>
              <Ionicons name="location-outline" size={14} color={cores.laranja} />
              <Text style={styles.textoInfo}>Recife - PE</Text>
            </View>
            <View style={styles.info}>
              <Ionicons name="school-outline" size={14} color={cores.laranja} />
              <Text style={styles.textoInfo}>UNICAP • 5º período</Text>
            </View>
          </View>

          <View style={styles.botoes}>
            <Botao texto="Currículo" icone="document-text-outline" onPress={abrirCurriculo} />
            <Botao texto="Contato" icone="mail-outline" onPress={enviarEmail} variante="contorno" />
          </View>
        </View>

        <Text style={styles.explore}>Explore o app</Text>
        <View style={styles.grade}>
          {atalhos.map((atalho) => (
            <Pressable
              key={atalho.titulo}
              onPress={() => router.push(atalho.rota)}
              style={({ pressed }) => [styles.atalho, pressed && styles.atalhoPressionado]}
            >
              <Ionicons name={atalho.icone} size={26} color={cores.laranja} />
              <Text style={styles.textoAtalho}>{atalho.titulo}</Text>
            </Pressable>
          ))}
        </View>

        <Rodape />
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
    paddingTop: 40,
  },
  topo: {
    alignItems: "center",
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
    fontSize: 13,
  },
  nome: {
    color: cores.branco,
    fontSize: 42,
    fontWeight: "800",
    marginTop: 4,
  },
  subtitulo: {
    color: cores.textoClaro,
    fontSize: 18,
    marginTop: 6,
    textAlign: "center",
  },
  infos: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: 10,
    marginTop: 18,
  },
  info: {
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
    backgroundColor: cores.escuroCard,
    borderRadius: 20,
    paddingVertical: 6,
    paddingHorizontal: 12,
  },
  textoInfo: {
    color: cores.textoClaro,
    fontSize: 12,
  },
  botoes: {
    flexDirection: "row",
    gap: 12,
    marginTop: 28,
  },
  explore: {
    color: cores.branco,
    fontSize: 18,
    fontWeight: "700",
    marginTop: 44,
    marginBottom: 14,
    paddingHorizontal: 20,
  },
  grade: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 12,
    paddingHorizontal: 20,
  },
  atalho: {
    width: "47%",
    flexGrow: 1,
    backgroundColor: "rgba(38,38,38,0.9)",
    borderWidth: 1,
    borderColor: cores.escuroBorda,
    borderRadius: 14,
    paddingVertical: 20,
    alignItems: "center",
    gap: 8,
  },
  atalhoPressionado: {
    borderColor: cores.laranja,
  },
  textoAtalho: {
    color: cores.branco,
    fontWeight: "600",
  },
});
