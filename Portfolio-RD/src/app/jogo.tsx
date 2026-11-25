import { useState } from "react";
import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { cores, espacos } from "@/constants/theme";
import { Palavra, palavras } from "@/data/palavras";
import Forca from "@/components/Forca";
import Botao from "@/components/Botao";

const MAX_ERROS = 6;
const ALFABETO = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

function sortearPalavra(): Palavra {
  return palavras[Math.floor(Math.random() * palavras.length)];
}

export default function Jogo() {
  const [atual, setAtual] = useState<Palavra>(sortearPalavra());
  const [tentativas, setTentativas] = useState<string[]>([]);

  const letrasDaPalavra = atual.palavra.split("");
  const erros = tentativas.filter((letra) => !atual.palavra.includes(letra)).length;
  const venceu = letrasDaPalavra.every((letra) => tentativas.includes(letra));
  const perdeu = erros >= MAX_ERROS;
  const acabou = venceu || perdeu;

  function chutar(letra: string) {
    if (acabou) return;
    setTentativas([...tentativas, letra]);
  }

  function novoJogo() {
    setAtual(sortearPalavra());
  }

  function corDaTecla(letra: string) {
    if (!tentativas.includes(letra)) return styles.tecla;
    if (atual.palavra.includes(letra)) return [styles.tecla, styles.teclaCerta];
    return [styles.tecla, styles.teclaErrada];
  }

  return (
    <ScrollView style={styles.tela} contentContainerStyle={styles.conteudo}>
      <Text style={styles.erros}>
        Erros: {erros}/{MAX_ERROS}
      </Text>

      <Forca erros={erros} />

      <View style={styles.dica}>
        <Ionicons name="bulb-outline" size={16} color={cores.laranja} />
        <Text style={styles.textoDica}>{atual.dica}</Text>
      </View>

      <View style={styles.palavra}>
        {letrasDaPalavra.map((letra, i) => (
          <View key={i} style={styles.espacoLetra}>
            <Text style={styles.letra}>{tentativas.includes(letra) ? letra : ""}</Text>
          </View>
        ))}
      </View>

      {acabou ? (
        <View style={styles.resultado}>
          <Text style={styles.tituloResultado}>{venceu ? "Você acertou!" : "Você perdeu!"}</Text>
          <Text style={styles.textoResultado}>A palavra era {atual.palavra}.</Text>
          <Botao texto="Jogar novamente" icone="refresh" onPress={novoJogo} />
        </View>
      ) : (
        <View style={styles.teclado}>
          {ALFABETO.map((letra) => (
            <Pressable key={letra} onPress={() => chutar(letra)} style={corDaTecla(letra)}>
              <Text style={styles.textoTecla}>{letra}</Text>
            </Pressable>
          ))}
        </View>
      )}
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
    paddingBottom: 40,
  },
  erros: {
    color: cores.branco,
    fontWeight: "700",
    fontSize: 16,
    textAlign: "center",
    marginBottom: 20,
  },
  dica: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 6,
    marginTop: 24,
  },
  textoDica: {
    color: cores.textoClaro,
    fontSize: 14,
    fontStyle: "italic",
  },
  palavra: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: 6,
    marginTop: 18,
    marginBottom: 26,
  },
  espacoLetra: {
    width: 26,
    borderBottomWidth: 3,
    borderBottomColor: cores.laranja,
    alignItems: "center",
  },
  letra: {
    color: cores.branco,
    fontSize: 24,
    fontWeight: "800",
    height: 32,
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
    borderWidth: 1,
    borderColor: cores.escuroBorda,
    alignItems: "center",
    justifyContent: "center",
  },
  teclaCerta: {
    backgroundColor: cores.verde,
    borderColor: cores.verde,
  },
  teclaErrada: {
    opacity: 0.3,
  },
  textoTecla: {
    color: cores.branco,
    fontWeight: "700",
    fontSize: 16,
  },
  resultado: {
    alignItems: "center",
    gap: 10,
    borderRadius: espacos.raio,
    borderWidth: 1.5,
    borderColor: cores.laranja,
    padding: 20,
  },
  tituloResultado: {
    color: cores.branco,
    fontSize: 22,
    fontWeight: "800",
  },
  textoResultado: {
    color: cores.textoClaro,
    fontSize: 15,
    marginBottom: 6,
  },
});
