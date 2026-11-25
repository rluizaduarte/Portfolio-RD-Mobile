import { StyleSheet, Text, View } from "react-native";
import { cores } from "@/constants/theme";
import { ItemLinhaDoTempo } from "@/data/experiencias";

type Props = {
  itens: ItemLinhaDoTempo[];
};

export default function LinhaDoTempo({ itens }: Props) {
  return (
    <View style={styles.container}>
      <View style={styles.trilho} />
      {itens.map((item) => (
        <View key={item.ano} style={styles.item}>
          <View style={styles.bolinha} />
          <Text style={styles.ano}>{item.ano}</Text>
          <Text style={styles.texto}>{item.texto}</Text>
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingLeft: 30,
  },
  trilho: {
    position: "absolute",
    left: 6,
    top: 8,
    bottom: 8,
    width: 2,
    backgroundColor: cores.laranja,
    opacity: 0.25,
  },
  item: {
    paddingBottom: 22,
  },
  bolinha: {
    position: "absolute",
    left: -30,
    top: 4,
    width: 14,
    height: 14,
    borderRadius: 7,
    backgroundColor: cores.laranja,
  },
  ano: {
    color: cores.laranja,
    fontWeight: "700",
    fontSize: 15,
  },
  texto: {
    color: cores.textoCinza,
    fontSize: 14,
    marginTop: 2,
  },
});
