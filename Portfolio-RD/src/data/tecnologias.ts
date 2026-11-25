import { Ionicons } from "@expo/vector-icons";

type NomeIcone = keyof typeof Ionicons.glyphMap;

export type Tecnologia = {
  nome: string;
  descricao: string;
  icone: NomeIcone;
};

export const tecnologiasDoApp: Tecnologia[] = [
  {
    nome: "React Native",
    descricao: "Base do app: componentes nativos como View, Text, Image e ScrollView.",
    icone: "logo-react",
  },
  {
    nome: "Expo",
    descricao: "Executa o app no celular pelo Expo Go.",
    icone: "phone-portrait-outline",
  },
  {
    nome: "Expo Router",
    descricao: "Navegação entre as telas usando abas.",
    icone: "navigate-outline",
  },
  {
    nome: "TypeScript",
    descricao: "Tipagem dos dados do app.",
    icone: "code-slash-outline",
  },
];
