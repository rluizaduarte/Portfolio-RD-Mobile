import { ScrollView, StyleSheet, Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { cores, espacos } from "@/constants/theme";
import { atividadesAcademicas, formacao, linhaDoTempo } from "@/data/experiencias";
import Titulo from "@/components/Titulo";
import LinhaDoTempo from "@/components/LinhaDoTempo";

export default function Academica() {
  return (
    <ScrollView style={styles.tela} contentContainerStyle={styles.conteudo}>
      <Titulo pequeno="ONDE ESTUDO" grande="Formação" />

      <View style={styles.cardFormacao}>
        <View style={styles.linhaFormacao}>
          <Ionicons name="school" size={26} color={cores.laranja} />
          <View style={styles.textosFormacao}>
            <Text style={styles.curso}>{formacao.curso}</Text>
            <Text style={styles.instituicao}>{formacao.instituicao}</Text>
          </View>
        </View>
        <View style={styles.rodapeFormacao}>
          <Text style={styles.periodoFormacao}>{formacao.periodo}</Text>
          <View style={styles.cr}>
            <Text style={styles.textoCr}>CR {formacao.cr}</Text>
          </View>
        </View>
      </View>

      <View style={styles.secao}>
        <Text style={styles.subtitulo}>Minha trajetória</Text>
        <LinhaDoTempo itens={linhaDoTempo} />
      </View>

      <View style={styles.secao}>
        <Text style={styles.subtitulo}>Atividades</Text>
        {atividadesAcademicas.map((atividade) => (
          <View key={atividade.titulo} style={styles.cardAtividade}>
            <View style={styles.iconeAtividade}>
              <Ionicons name={atividade.icone} size={22} color={cores.laranja} />
            </View>
            <View style={styles.textosAtividade}>
              <Text style={styles.tituloAtividade}>{atividade.titulo}</Text>
              <Text style={styles.periodoAtividade}>{atividade.periodo}</Text>
              <Text style={styles.descricaoAtividade}>{atividade.descricao}</Text>
            </View>
          </View>
        ))}
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
    paddingBottom: 40,
  },
  cardFormacao: {
    backgroundColor: cores.escuro,
    borderRadius: espacos.raio,
    padding: espacos.card,
  },
  linhaFormacao: {
    flexDirection: "row",
    gap: 14,
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
  rodapeFormacao: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 16,
    paddingTop: 14,
    borderTopWidth: 1,
    borderTopColor: cores.escuroBorda,
  },
  periodoFormacao: {
    color: cores.textoClaro,
    fontSize: 13,
  },
  cr: {
    backgroundColor: cores.laranja,
    borderRadius: 20,
    paddingVertical: 4,
    paddingHorizontal: 12,
  },
  textoCr: {
    color: cores.branco,
    fontWeight: "800",
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
  cardAtividade: {
    flexDirection: "row",
    gap: 14,
    backgroundColor: cores.branco,
    borderRadius: espacos.raio,
    borderWidth: 1,
    borderColor: cores.bordaClara,
    borderLeftWidth: 4,
    borderLeftColor: cores.laranja,
    padding: 16,
    marginBottom: 12,
  },
  iconeAtividade: {
    width: 42,
    height: 42,
    borderRadius: 21,
    backgroundColor: cores.laranjaSuave,
    alignItems: "center",
    justifyContent: "center",
  },
  textosAtividade: {
    flex: 1,
  },
  tituloAtividade: {
    color: cores.texto,
    fontWeight: "700",
    fontSize: 16,
  },
  periodoAtividade: {
    color: cores.laranja,
    fontSize: 12,
    fontWeight: "700",
    marginTop: 2,
  },
  descricaoAtividade: {
    color: cores.textoCinza,
    fontSize: 14,
    lineHeight: 21,
    marginTop: 6,
  },
});
