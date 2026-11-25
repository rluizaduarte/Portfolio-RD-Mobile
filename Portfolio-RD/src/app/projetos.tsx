import { useState } from "react";
import { LayoutAnimation, ScrollView, StyleSheet, Text } from "react-native";
import { cores, espacos } from "@/constants/theme";
import { projetos } from "@/data/projetos";
import Titulo from "@/components/Titulo";
import CardProjeto from "@/components/CardProjeto";
import Rodape from "@/components/Rodape";

export default function Projetos() {
  const [aberto, setAberto] = useState<number | null>(null);

  function alternar(indice: number) {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    setAberto(aberto === indice ? null : indice);
  }

  return (
    <ScrollView style={styles.tela} contentContainerStyle={styles.conteudo}>
      <Titulo pequeno="O QUE EU JÁ CONSTRUÍ" grande="Projetos" escuro />
      <Text style={styles.dica}>Toque em um projeto para ver os detalhes.</Text>

      {projetos.map((projeto, indice) => (
        <CardProjeto
          key={projeto.titulo}
          projeto={projeto}
          aberto={aberto === indice}
          onPress={() => alternar(indice)}
        />
      ))}

      <Rodape />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  tela: {
    flex: 1,
    backgroundColor: cores.escuro,
  },
  conteudo: {
    padding: espacos.tela,
    paddingBottom: 20,
  },
  dica: {
    color: cores.textoClaro,
    marginTop: -10,
    marginBottom: 20,
  },
});
