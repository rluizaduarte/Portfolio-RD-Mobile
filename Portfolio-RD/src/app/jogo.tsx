import { useState } from "react";
import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { cores, espacos } from "@/constants/theme";
import { Palavra, palavras } from "@/data/palavras";
import Forca from "@/components/Forca";
import Botao from "@/components/Botao";

const MAX_ERROS = 6;
const ALFABETO = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

function sortearPalavra(anterior?: Palavra): Palavra {
  let nova = palavras[Math.floor(Math.random() * palavras.length)];
  while (anterior && nova.palavra === anterior.palavra) {
    nova = palavras[Math.floor(Math.random() * palavras.length)];
  }
  return nova;
}

export default function Jogo() {
  const [atual, setAtual] = useState<Palavra>(() => sortearPalavra());
  const [tentativas, setTentativas] = useState<string[]>([]);
  const [vitorias, setVitorias] = useState(0);
  const [derrotas, setDerrotas] = useState(0);

  const letrasDaPalavra = atual.palavra.split("");
  const erros = tentativas.filter((letra) => !atual.palavra.includes(letra)).length;
  const venceu = letrasDaPalavra.every((letra) => tentativas.includes(letra));
  const perdeu = erros >= MAX_ERROS;
  const acabou = venceu || perdeu;

  function chutar(letra: string) {
    if (acabou || tentativas.includes(letra)) return;

    const novasTentativas = [...tentativas, letra];
    setTentativas(novasTentativas);

    const novosErros = novasTentativas.filter((l) => !atual.palavra.includes(l)).length;
    const ganhou = letrasDaPalavra.every((l) => novasTentativas.includes(l));

    if (ganhou) setVitorias(vitorias + 1);
    else if (novosErros >= MAX_ERROS) setDerrotas(derrotas + 1);
  }

  function novoJogo() {
    setAtual(sortearPalavra(atual));
    setTentativas([]);
  }

  function corDaTecla(letra: string) {
    if (!tentativas.includes(letra)) return styles.tecla;
    if (atual.palavra.includes(letra)) return [styles.tecla, styles.teclaCerta];
    return [styles.tecla, styles.teclaErrada];
  }

  return (
    <ScrollView style={styles.tela} contentContainerStyle={styles.conteudo}>
      <View style={styles.placar}>
        <View style={styles.itemPlacar}>
          <Ionicons name="trophy" size={16} color={cores.verde} />
          <Text style={styles.textoPlacar}>{vitorias}</Text>
        </View>
        <View style={styles.vidas}>
          {Array.from({ length: MAX_ERROS }).map((_, i) => (
            <Ionicons
              key={i}
              name={i < MAX_ERROS - erros ? "heart" : "heart-outline"}
              size={18}
              color={cores.laranja}
            />
          ))}
        </View>
        <View style={styles.itemPlacar}>
          <Ionicons name="skull" size={16} color={cores.vermelho} />
          <Text style={styles.textoPlacar}>{derrotas}</Text>
        </View>
      </View>

      <Forca erros={erros} />

      <View style={styles.dica}>
        <Ionicons name="bulb-outline" size={16} color={cores.laranja} />
        <Text style={styles.textoDica}>{atual.dica}</Text>
      </View>

      <View style={styles.palavra}>
        {letrasDaPalavra.map((letra, i) => {
          const mostrar = tentativas.includes(letra) || perdeu;
          const faltou = perdeu && !tentativas.includes(letra);
          return (
            <View key={i} style={styles.espacoLetra}>
              <Text style={[styles.letra, faltou && styles.letraFaltou]}>
                {mostrar ? letra : ""}
              </Text>
            </View>
          );
        })}
      </View>

      {acabou ? (
        <View style={[styles.resultado, venceu ? styles.resultadoVitoria : styles.resultadoDerrota]}>
          <Text style={styles.tituloResultado}>{venceu ? "Você acertou! 🎉" : "Não foi dessa vez!"}</Text>
          <Text style={styles.textoResultado}>
            {venceu
              ? `Você descobriu a palavra com ${erros} ${erros === 1 ? "erro" : "erros"}.`
              : `A palavra era ${atual.palavra}.`}
          </Text>
          <Botao texto="Jogar novamente" icone="refresh" onPress={novoJogo} />
        </View>
      ) : (
        <View style={styles.teclado}>
          {ALFABETO.map((letra) => (
            <Pressable
              key={letra}
              onPress={() => chutar(letra)}
              disabled={tentativas.includes(letra)}
              style={corDaTecla(letra)}
            >
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
  placar: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: cores.escuroCard,
    borderRadius: espacos.raio,
    paddingVertical: 10,
    paddingHorizontal: 16,
    marginBottom: 24,
  },
  itemPlacar: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
  },
  textoPlacar: {
    color: cores.branco,
    fontWeight: "800",
    fontSize: 16,
  },
  vidas: {
    flexDirection: "row",
    gap: 3,
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
  letraFaltou: {
    color: cores.vermelho,
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
    padding: 20,
  },
  resultadoVitoria: {
    borderColor: cores.verde,
    backgroundColor: "rgba(76,175,122,0.1)",
  },
  resultadoDerrota: {
    borderColor: cores.vermelho,
    backgroundColor: "rgba(229,72,77,0.1)",
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
