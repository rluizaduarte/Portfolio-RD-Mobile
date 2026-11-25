import { ScrollView, StyleSheet, Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { cores, espacos } from "@/constants/theme";
import { tecnologiasDoApp } from "@/data/tecnologias";
import Titulo from "@/components/Titulo";

export default function Sobre() {
  return (
    <ScrollView style={styles.tela} contentContainerStyle={styles.conteudo}>
      <Titulo pequeno="OI, EU SOU A RIELLY..." grande="Sobre mim" />
      <Text style={styles.paragrafo}>
        Sou estudante de Ciência da Computação na UNICAP e gosto de transformar
        ideias em software que funciona, de projetos web até pesquisa
        científica.
      </Text>

      <View style={styles.secao}>
        <Titulo pequeno="COMO ESTE APP FOI FEITO" grande="Tecnologias" />
        {tecnologiasDoApp.map((tecnologia) => (
          <View key={tecnologia.nome} style={styles.cardTecnologia}>
            <Ionicons name={tecnologia.icone} size={22} color={cores.laranja} />
            <View style={styles.textosTecnologia}>
              <Text style={styles.nomeTecnologia}>{tecnologia.nome}</Text>
              <Text style={styles.descricaoTecnologia}>
                {tecnologia.descricao}
              </Text>
            </View>
          </View>
        ))}
      </View>

      <View style={styles.secao}>
        <Titulo pequeno="O QUE EU SEI USAR" grande="Habilidades" />
        <Text style={styles.paragrafo}>Em construção...</Text>
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
  paragrafo: {
    color: cores.textoCinza,
    fontSize: 16,
    lineHeight: 26,
  },
  secao: {
    marginTop: 32,
  },
  cardTecnologia: {
    flexDirection: "row",
    gap: 14,
    backgroundColor: cores.branco,
    borderRadius: espacos.raio,
    padding: 14,
    marginBottom: 10,
  },
  textosTecnologia: {
    flex: 1,
  },
  nomeTecnologia: {
    color: cores.texto,
    fontWeight: "700",
    fontSize: 16,
  },
  descricaoTecnologia: {
    color: cores.textoCinza,
    fontSize: 13,
  },
});
