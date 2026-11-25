import { ScrollView, StyleSheet, Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { cores, espacos } from "@/constants/theme";
import { experienciasProfissionais } from "@/data/experiencias";
import Titulo from "@/components/Titulo";
import Tag from "@/components/Tag";

export default function Profissional() {
  return (
    <ScrollView style={styles.tela} contentContainerStyle={styles.conteudo}>
      <Titulo pequeno="ONDE JÁ TRABALHEI" grande="Carreira" escuro />

      {experienciasProfissionais.map((experiencia) => (
        <View key={experiencia.cargo} style={styles.card}>
          <View style={styles.topoCard}>
            <View style={styles.iconeEmpresa}>
              <Ionicons name="briefcase" size={22} color={cores.laranja} />
            </View>
            <View style={styles.textosTopo}>
              <Text style={styles.cargo}>{experiencia.cargo}</Text>
              <Text style={styles.empresa}>{experiencia.empresa}</Text>
            </View>
          </View>

          <View style={styles.linhaPeriodo}>
            <Ionicons name="calendar-outline" size={14} color={cores.textoClaro} />
            <Text style={styles.periodo}>{experiencia.periodo}</Text>
            {experiencia.atual && (
              <View style={styles.selo}>
                <View style={styles.pontoVerde} />
                <Text style={styles.textoSelo}>Atual</Text>
              </View>
            )}
          </View>

          {experiencia.itens.map((item) => (
            <View key={item} style={styles.itemLista}>
              <Ionicons name="checkmark-circle" size={16} color={cores.laranja} />
              <Text style={styles.textoItem}>{item}</Text>
            </View>
          ))}

          <View style={styles.tags}>
            {experiencia.tags.map((tag) => (
              <Tag key={tag} texto={tag} />
            ))}
          </View>
        </View>
      ))}
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
  card: {
    backgroundColor: cores.escuroCard,
    borderRadius: espacos.raio,
    borderWidth: 1,
    borderColor: cores.escuroBorda,
    padding: espacos.card,
    marginBottom: 18,
  },
  topoCard: {
    flexDirection: "row",
    gap: 14,
    alignItems: "center",
  },
  iconeEmpresa: {
    width: 46,
    height: 46,
    borderRadius: 12,
    backgroundColor: cores.laranjaSuave,
    alignItems: "center",
    justifyContent: "center",
  },
  textosTopo: {
    flex: 1,
  },
  cargo: {
    color: cores.branco,
    fontSize: 17,
    fontWeight: "700",
  },
  empresa: {
    color: cores.laranja,
    fontWeight: "600",
    marginTop: 2,
  },
  linhaPeriodo: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
    marginTop: 14,
    marginBottom: 12,
  },
  periodo: {
    color: cores.textoClaro,
    fontSize: 13,
  },
  selo: {
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
    marginLeft: 8,
    backgroundColor: "rgba(76,175,122,0.15)",
    borderRadius: 20,
    paddingVertical: 2,
    paddingHorizontal: 8,
  },
  pontoVerde: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: cores.verde,
  },
  textoSelo: {
    color: cores.verde,
    fontSize: 12,
    fontWeight: "700",
  },
  itemLista: {
    flexDirection: "row",
    gap: 8,
    marginBottom: 8,
  },
  textoItem: {
    flex: 1,
    color: cores.textoClaro,
    fontSize: 14,
    lineHeight: 20,
  },
  tags: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 6,
    marginTop: 8,
  },
});
