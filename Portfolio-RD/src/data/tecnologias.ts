import { Ionicons } from "@expo/vector-icons";

type NomeIcone = keyof typeof Ionicons.glyphMap;

export type Tecnologia = {
  nome: string;
  descricao: string;
  icone: NomeIcone;
};

export type GrupoHabilidades = {
  titulo: string;
  itens: { nome: string; icone?: NomeIcone }[];
};

export const tecnologiasDoApp: Tecnologia[] = [
  {
    nome: "React Native",
    descricao: "Base do app: componentes nativos como View, Text, Image, ScrollView e Pressable.",
    icone: "logo-react",
  },
  {
    nome: "Expo (SDK 57)",
    descricao: "Cria, executa e testa o app no celular pelo Expo Go, sem configurar Android Studio.",
    icone: "phone-portrait-outline",
  },
  {
    nome: "Expo Router",
    descricao: "Navegação baseada em arquivos: cada tela é um arquivo dentro de src/app, organizadas em abas.",
    icone: "navigate-outline",
  },
  {
    nome: "TypeScript",
    descricao: "Tipagem dos dados (projetos, experiências e palavras do jogo) para evitar erros.",
    icone: "code-slash-outline",
  },
  {
    nome: "@expo/vector-icons",
    descricao: "Ícones Ionicons usados nas abas, botões e cards.",
    icone: "sparkles-outline",
  },
  {
    nome: "Animated API",
    descricao: "Animações do fundo da Home e da linha do tempo, usando o driver nativo.",
    icone: "pulse-outline",
  },
  {
    nome: "Linking",
    descricao: "Abre links externos: GitHub, sites dos projetos, currículo e e-mail.",
    icone: "link-outline",
  },
  {
    nome: "Safe Area Context",
    descricao: "Mantém o conteúdo longe do notch e da barra de status.",
    icone: "phone-landscape-outline",
  },
  {
    nome: "useState e useEffect",
    descricao: "Hooks do React para controlar o jogo da forca, os cards abertos e as animações.",
    icone: "git-network-outline",
  },
  {
    nome: "EAS Update",
    descricao: "Publicação do app com atualização over-the-air, acessível pelo QR Code.",
    icone: "cloud-upload-outline",
  },
];

export const habilidades: GrupoHabilidades[] = [
  {
    titulo: "Linguagens",
    itens: [
      { nome: "C" },
      { nome: "C++" },
      { nome: "Python", icone: "logo-python" },
      { nome: "JavaScript", icone: "logo-javascript" },
      { nome: "TypeScript" },
    ],
  },
  {
    titulo: "Web e Mobile",
    itens: [
      { nome: "HTML5", icone: "logo-html5" },
      { nome: "CSS3", icone: "logo-css3" },
      { nome: "React", icone: "logo-react" },
      { nome: "React Native", icone: "logo-react" },
      { nome: "Next.js" },
      { nome: "Node.js", icone: "logo-nodejs" },
    ],
  },
  {
    titulo: "Ferramentas",
    itens: [
      { nome: "Git", icone: "git-branch-outline" },
      { nome: "Docker", icone: "logo-docker" },
      { nome: "Cypress" },
      { nome: "Figma", icone: "logo-figma" },
      { nome: "Jira" },
    ],
  },
  {
    titulo: "Metodologias e idiomas",
    itens: [
      { nome: "Scrum" },
      { nome: "Kanban" },
      { nome: "Português (nativo)" },
      { nome: "Inglês (avançado)" },
    ],
  },
];
