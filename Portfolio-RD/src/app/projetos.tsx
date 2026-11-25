import { useState } from "react";
import { ScrollView, StyleSheet } from "react-native";
import { cores, espacos } from "@/constants/theme";
import { projetos } from "@/data/projetos";
import Titulo from "@/components/Titulo";
import CardProjeto from "@/components/CardProjeto";

export default function Projetos() {
  const [aberto, setAberto] = useState(false);

  return (
    <ScrollView style={styles.tela} contentContainerStyle={styles.conteudo}>
      <Titulo pequeno="O QUE EU JÁ CONSTRUÍ" grande="Projetos" escuro />

      {projetos.map((projeto) => (
        <CardProjeto
          key={projeto.titulo}
          projeto={projeto}
          aberto={aberto}
          onPress={() => setAberto(!aberto)}
        />
      ))}
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
  },
});
