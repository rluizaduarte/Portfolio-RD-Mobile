import { StyleSheet, Text, View } from "react-native";
import { cores } from "@/constants/theme";

type Props = {
  texto: string;
};

export default function Tag({ texto }: Props) {
  return (
    <View style={styles.tag}>
      <Text style={styles.texto}>{texto}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  tag: {
    backgroundColor: cores.laranjaSuave,
    borderRadius: 20,
    paddingVertical: 4,
    paddingHorizontal: 10,
  },
  texto: {
    color: cores.laranja,
    fontSize: 12,
    fontWeight: "700",
  },
});
