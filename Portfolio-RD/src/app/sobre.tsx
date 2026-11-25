import { ScrollView, StyleSheet, Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { cores, espacos } from "@/constants/theme";
import { habilidades, tecnologiasDoApp } from "@/data/tecnologias";
import Titulo from "@/components/Titulo";

export default function Sobre() {
  return (
    <ScrollView style={styles.tela} contentContainerStyle={styles.conteudo}>
      <Titulo pequeno="OI, EU SOU A RIELLY..." grande="Sobre mim" />
      <Text style={styles.paragrafo}>
        Sou estudante de Ciência da Computação na UNICAP e gosto de transformar ideias em software
        que funciona, de projetos web até pesquisa científica. A curiosidade é o que me move, seja
        competindo em maratonas de programação ou estudando um problema novo de pesquisa.
      </Text>
      <Text style={styles.paragrafo}>
        Hoje faço estágio com testes automatizados, participo de iniciação científica com grafos e
        treino programação competitiva.
      </Text>

      <View style={styles.secao}>
        <Titulo pequeno="COMO ESTE APP FOI FEITO" grande="Tecnologias" />
        {tecnologiasDoApp.map((tecnologia) => (
          <View key={tecnologia.nome} style={styles.cardTecnologia}>
            <View style={styles.iconeTecnologia}>
              <Ionicons name={tecnologia.icone} size={22} color={cores.laranja} />
            </View>
            <View style={styles.textosTecnologia}>
              <Text style={styles.nomeTecnologia}>{tecnologia.nome}</Text>
              <Text style={styles.descricaoTecnologia}>{tecnologia.descricao}</Text>
            </View>
          </View>
        ))}
      </View>

      <View style={styles.secao}>
        <Titulo pequeno="O QUE EU SEI USAR" grande="Habilidades" />
        {habilidades.map((grupo) => (
          <View key={grupo.titulo} style={styles.grupo}>
            <Text style={styles.tituloGrupo}>{grupo.titulo}</Text>
            <View style={styles.chips}>
              {grupo.itens.map((item) => (
                <View key={item.nome} style={styles.chip}>
                  {item.icone ? (
                    <Ionicons name={item.icone} size={16} color={cores.texto} />
                  ) : (
                    <View style={styles.pontinho} />
                  )}
                  <Text style={styles.textoChip}>{item.nome}</Text>
                </View>
              ))}
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
  paragrafo: {
    color: cores.textoCinza,
    fontSize: 16,
    lineHeight: 26,
    marginBottom: 12,
  },
  secao: {
    marginTop: 32,
  },
  cardTecnologia: {
    flexDirection: "row",
    gap: 14,
    backgroundColor: cores.branco,
    borderRadius: espacos.raio,
    borderWidth: 1,
    borderColor: cores.bordaClara,
    padding: 14,
    marginBottom: 10,
  },
  iconeTecnologia: {
    width: 44,
    height: 44,
    borderRadius: 12,
    backgroundColor: cores.laranjaSuave,
    alignItems: "center",
    justifyContent: "center",
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
    lineHeight: 19,
    marginTop: 2,
  },
  grupo: {
    marginBottom: 20,
  },
  tituloGrupo: {
    color: cores.laranja,
    fontWeight: "700",
    letterSpacing: 1,
    textTransform: "uppercase",
    fontSize: 13,
    marginBottom: 10,
  },
  chips: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 8,
  },
  chip: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
    backgroundColor: cores.branco,
    borderWidth: 1.5,
    borderColor: cores.bordaClara,
    borderRadius: 10,
    paddingVertical: 8,
    paddingHorizontal: 12,
  },
  pontinho: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: cores.laranja,
  },
  textoChip: {
    color: cores.texto,
    fontWeight: "600",
  },
});
