import { StyleSheet, Text, View } from "react-native";
import { cores } from "@/constants/theme";

type Props = {
  pequeno: string;
  grande: string;
  escuro?: boolean;
};

export default function Titulo({ pequeno, grande, escuro = false }: Props) {
  return (
    <View style={styles.container}>
      <Text style={styles.pequeno}>{pequeno}</Text>
      <Text style={[styles.grande, { color: escuro ? cores.branco : cores.texto }]}>{grande}</Text>
      <View style={styles.linha} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 24,
  },
  pequeno: {
    color: cores.laranja,
    fontWeight: "700",
    fontSize: 13,
    letterSpacing: 1.5,
    marginBottom: 4,
  },
  grande: {
    fontSize: 32,
    fontWeight: "800",
  },
  linha: {
    width: 48,
    height: 4,
    borderRadius: 2,
    backgroundColor: cores.laranja,
    marginTop: 10,
  },
});
