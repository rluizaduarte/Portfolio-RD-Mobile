import { ScrollView, StyleSheet, Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { cores, espacos } from "@/constants/theme";
import { formacao, linhaDoTempo } from "@/data/experiencias";
import Titulo from "@/components/Titulo";
import LinhaDoTempo from "@/components/LinhaDoTempo";

export default function Academica() {
  return (
    <ScrollView style={styles.tela} contentContainerStyle={styles.conteudo}>
      <Titulo pequeno="FORMAÇÃO" grande="Experiência Acadêmica" />

      <View style={styles.cardFormacao}>
        <Ionicons name="school" size={26} color={cores.laranja} />
        <View style={styles.textosFormacao}>
          <Text style={styles.curso}>{formacao.curso}</Text>
          <Text style={styles.instituicao}>{formacao.instituicao}</Text>
          <Text style={styles.instituicao}>
            {formacao.periodo} • CR {formacao.cr}
          </Text>
        </View>
      </View>

      <View style={styles.secao}>
        <Text style={styles.subtitulo}>Minha trajetória</Text>
        <LinhaDoTempo itens={linhaDoTempo} />
      </View>

      <View style={styles.secao}>
        <Text style={styles.subtitulo}>Atividades</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  tela: {
    flex: 1,
    backgroundColor: cores.claro,
  },
  conteudo: {
    padding: espacos.tela,
  },
  cardFormacao: {
    flexDirection: "row",
    gap: 14,
    backgroundColor: cores.escuro,
    borderRadius: espacos.raio,
    padding: espacos.card,
  },
  textosFormacao: {
    flex: 1,
  },
  curso: {
    color: cores.branco,
    fontSize: 17,
    fontWeight: "700",
  },
  instituicao: {
    color: cores.textoClaro,
    fontSize: 14,
    marginTop: 4,
  },
  secao: {
    marginTop: 32,
  },
  subtitulo: {
    color: cores.texto,
    fontSize: 22,
    fontWeight: "800",
    marginBottom: 18,
  },
});
