import { useState } from "react";
import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import { cores, espacos } from "@/constants/theme";
import { palavras } from "@/data/palavras";
const ALFABETO = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
export default function Jogo() {
  const [atual] = useState(
    palavras[Math.floor(Math.random() * palavras.length)],
  );
  const [tentativas, setTentativas] = useState<string[]>([]);

  const erros = tentativas.filter(
    (letra) => !atual.palavra.includes(letra),
  ).length;

  function chutar(letra: string) {
    setTentativas([...tentativas, letra]);
  }

  return (
    <ScrollView style={styles.tela} contentContainerStyle={styles.conteudo}>
      <Text style={styles.erros}>Erros: {erros}</Text>
      <Text style={styles.dica}>Dica: {atual.dica}</Text>

      <View style={styles.palavra}>
        {atual.palavra.split("").map((letra, i) => (
          <Text key={i} style={styles.letra}>
            {tentativas.includes(letra) ? letra : "_"}
          </Text>
        ))}
      </View>

      <View style={styles.teclado}>
        {ALFABETO.map((letra) => (
          <Pressable
            key={letra}
            onPress={() => chutar(letra)}
            style={styles.tecla}
          >
            <Text style={styles.textoTecla}>{letra}</Text>
          </Pressable>
        ))}
      </View>
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
  erros: {
    color: cores.branco,
    fontSize: 16,
    fontWeight: "700",
  },
  dica: {
    color: cores.textoClaro,
    marginTop: 8,
  },
  palavra: {
    flexDirection: "row",
    justifyContent: "center",
    gap: 8,
    marginVertical: 30,
  },
  letra: {
    color: cores.branco,
    fontSize: 28,
    fontWeight: "800",
  },
  teclado: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: 6,
  },
  tecla: {
    width: 36,
    height: 44,
    borderRadius: 8,
    backgroundColor: cores.escuroCard,
    alignItems: "center",
    justifyContent: "center",
  },
  textoTecla: {
    color: cores.branco,
    fontWeight: "700",
    fontSize: 16,
  },
});
