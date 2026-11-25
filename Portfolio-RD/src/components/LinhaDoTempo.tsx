import { useEffect, useRef } from "react";
import { Animated, StyleSheet, Text, View } from "react-native";
import { cores } from "@/constants/theme";
import { ItemLinhaDoTempo } from "@/data/experiencias";

type ItemProps = {
  item: ItemLinhaDoTempo;
  indice: number;
};

function Item({ item, indice }: ItemProps) {
  const aparecer = useRef(new Animated.Value(0)).current;
  const agora = item.ano === "Agora";

  useEffect(() => {
    Animated.timing(aparecer, {
      toValue: 1,
      duration: 500,
      delay: indice * 120,
      useNativeDriver: true,
    }).start();
  }, [aparecer, indice]);

  const subir = aparecer.interpolate({ inputRange: [0, 1], outputRange: [24, 0] });

  return (
    <Animated.View style={[styles.item, { opacity: aparecer, transform: [{ translateY: subir }] }]}>
      <View style={[styles.bolinha, agora && styles.bolinhaAgora]} />
      <Text style={[styles.ano, agora && styles.anoAgora]}>{item.ano}</Text>
      <Text style={[styles.texto, agora && styles.textoAgora]}>{item.texto}</Text>
    </Animated.View>
  );
}

type Props = {
  itens: ItemLinhaDoTempo[];
};

export default function LinhaDoTempo({ itens }: Props) {
  return (
    <View style={styles.container}>
      <View style={styles.trilho} />
      {itens.map((item, indice) => (
        <Item key={item.ano} item={item} indice={indice} />
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
    backgroundColor: "#F9A27F",
    borderWidth: 3,
    borderColor: cores.claro,
  },
  bolinhaAgora: {
    left: -33,
    top: 2,
    width: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: cores.laranja,
  },
  ano: {
    color: cores.laranja,
    fontWeight: "700",
    fontSize: 15,
  },
  anoAgora: {
    fontSize: 22,
    fontWeight: "800",
  },
  texto: {
    color: cores.textoCinza,
    fontSize: 14,
    lineHeight: 20,
    marginTop: 2,
  },
  textoAgora: {
    color: cores.texto,
    fontWeight: "600",
  },
});
