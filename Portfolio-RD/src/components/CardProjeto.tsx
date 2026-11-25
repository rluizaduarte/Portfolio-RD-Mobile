import {
  Image,
  Linking,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { cores, espacos } from "@/constants/theme";
import { Projeto } from "@/data/projetos";
import Tag from "./Tag";

type Props = {
  projeto: Projeto;
  aberto: boolean;
  onPress: () => void;
};

export default function CardProjeto({ projeto, aberto, onPress }: Props) {
  return (
    <Pressable
      onPress={onPress}
      style={[styles.card, aberto && styles.cardAberto]}
    >
      <Image source={projeto.imagem} style={styles.imagem} />

      <View style={styles.corpo}>
        <View style={styles.cabecalho}>
          <Text style={styles.titulo}>{projeto.titulo}</Text>
          <Ionicons
            name={aberto ? "chevron-up" : "chevron-down"}
            size={20}
            color={aberto ? cores.laranja : cores.textoClaro}
          />
        </View>

        {aberto && (
          <View>
            <Text style={styles.descricao}>{projeto.descricao}</Text>

            <View style={styles.tags}>
              {projeto.tags.map((tag) => (
                <Tag key={tag} texto={tag} />
              ))}
            </View>

            <View style={styles.links}>
              <Pressable
                style={styles.link}
                onPress={() => Linking.openURL(projeto.github)}
              >
                <Ionicons name="logo-github" size={18} color={cores.laranja} />
                <Text style={styles.textoLink}>GitHub</Text>
              </Pressable>

              {projeto.site && (
                <Pressable
                  style={styles.link}
                  onPress={() => Linking.openURL(projeto.site!)}
                >
                  <Ionicons
                    name="open-outline"
                    size={18}
                    color={cores.laranja}
                  />
                  <Text style={styles.textoLink}>Ver site</Text>
                </Pressable>
              )}
            </View>
          </View>
        )}
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: cores.escuroCard,
    borderRadius: espacos.raio,
    borderWidth: 1.5,
    borderColor: cores.escuroBorda,
    overflow: "hidden",
    marginBottom: 18,
  },
  cardAberto: {
    borderColor: cores.laranja,
  },
  imagem: {
    width: "100%",
    height: 170,
    resizeMode: "cover",
  },
  corpo: {
    padding: espacos.card,
  },
  cabecalho: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  titulo: {
    color: cores.branco,
    fontSize: 19,
    fontWeight: "700",
  },
  descricao: {
    color: cores.textoClaro,
    fontSize: 14,
    lineHeight: 22,
    marginTop: 12,
  },
  tags: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 6,
    marginTop: 14,
  },
  links: {
    flexDirection: "row",
    gap: 20,
    marginTop: 16,
  },
  link: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
  },
  textoLink: {
    color: cores.laranja,
    fontWeight: "700",
  },
});
