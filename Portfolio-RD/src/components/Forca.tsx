import { StyleSheet, View } from "react-native";
import { cores } from "@/constants/theme";

type Props = {
  erros: number;
};

export default function Forca({ erros }: Props) {
  return (
    <View style={styles.container}>
      <View style={styles.base} />
      <View style={styles.poste} />
      <View style={styles.viga} />
      <View style={styles.corda} />

      {erros >= 1 && <View style={styles.cabeca} />}
      {erros >= 2 && <View style={styles.corpo} />}
      {erros >= 3 && <View style={[styles.membro, styles.bracoEsquerdo]} />}
      {erros >= 4 && <View style={[styles.membro, styles.bracoDireito]} />}
      {erros >= 5 && <View style={[styles.membro, styles.pernaEsquerda]} />}
      {erros >= 6 && <View style={[styles.membro, styles.pernaDireita]} />}
    </View>
  );
}

const madeira = "rgba(255,255,255,0.85)";

const styles = StyleSheet.create({
  container: {
    width: 200,
    height: 220,
    alignSelf: "center",
  },
  base: {
    position: "absolute",
    bottom: 0,
    left: 10,
    width: 120,
    height: 6,
    borderRadius: 3,
    backgroundColor: madeira,
  },
  poste: {
    position: "absolute",
    left: 50,
    top: 0,
    width: 6,
    height: 220,
    borderRadius: 3,
    backgroundColor: madeira,
  },
  viga: {
    position: "absolute",
    left: 50,
    top: 0,
    width: 98,
    height: 6,
    borderRadius: 3,
    backgroundColor: madeira,
  },
  corda: {
    position: "absolute",
    left: 144,
    top: 0,
    width: 4,
    height: 30,
    backgroundColor: madeira,
  },
  cabeca: {
    position: "absolute",
    left: 126,
    top: 30,
    width: 40,
    height: 40,
    borderRadius: 20,
    borderWidth: 4,
    borderColor: cores.laranja,
  },
  corpo: {
    position: "absolute",
    left: 144,
    top: 70,
    width: 4,
    height: 60,
    borderRadius: 2,
    backgroundColor: cores.laranja,
  },
  membro: {
    position: "absolute",
    width: 4,
    borderRadius: 2,
    backgroundColor: cores.laranja,
  },
  bracoEsquerdo: {
    left: 129.5,
    top: 76.7,
    height: 45,
    transform: [{ rotate: "40deg" }],
  },
  bracoDireito: {
    left: 158.5,
    top: 76.7,
    height: 45,
    transform: [{ rotate: "-40deg" }],
  },
  pernaEsquerda: {
    left: 131.5,
    top: 126.6,
    height: 50,
    transform: [{ rotate: "30deg" }],
  },
  pernaDireita: {
    left: 156.5,
    top: 126.6,
    height: 50,
    transform: [{ rotate: "-30deg" }],
  },
});
