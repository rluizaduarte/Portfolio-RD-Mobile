import { Pressable, StyleSheet, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { cores } from "@/constants/theme";

type Props = {
  texto: string;
  icone: keyof typeof Ionicons.glyphMap;
  onPress: () => void;
  variante?: "cheio" | "contorno";
};

export default function Botao({ texto, icone, onPress, variante = "cheio" }: Props) {
  const cheio = variante === "cheio";
  const corTexto = cheio ? cores.branco : cores.laranja;

  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [
        styles.botao,
        cheio ? styles.cheio : styles.contorno,
        pressed && styles.pressionado,
      ]}
    >
      <Ionicons name={icone} size={18} color={corTexto} />
      <Text style={[styles.texto, { color: corTexto }]}>{texto}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  botao: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
    paddingVertical: 12,
    paddingHorizontal: 18,
    borderRadius: 30,
    borderWidth: 1.5,
  },
  cheio: {
    backgroundColor: cores.laranja,
    borderColor: cores.laranja,
  },
  contorno: {
    backgroundColor: "transparent",
    borderColor: cores.laranja,
  },
  pressionado: {
    opacity: 0.75,
    transform: [{ scale: 0.97 }],
  },
  texto: {
    fontWeight: "700",
    fontSize: 15,
  },
});
