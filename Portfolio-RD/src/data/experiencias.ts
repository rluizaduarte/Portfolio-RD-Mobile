import { Ionicons } from "@expo/vector-icons";

type NomeIcone = keyof typeof Ionicons.glyphMap;

export type ItemLinhaDoTempo = {
  ano: string;
  texto: string;
};

export type Atividade = {
  titulo: string;
  periodo: string;
  descricao: string;
  icone: NomeIcone;
};

export type Experiencia = {
  cargo: string;
  empresa: string;
  periodo: string;
  atual: boolean;
  itens: string[];
  tags: string[];
};

export const formacao = {
  curso: "Bacharelado em Ciência da Computação",
  instituicao: "Universidade Católica de Pernambuco (UNICAP)",
  periodo: "2024 – 2028 (previsão)",
  cr: "9,57",
};

export const linhaDoTempo: ItemLinhaDoTempo[] = [
  { ano: "2023", texto: "Primeiro contato com programação" },
  { ano: "2024", texto: "Início da graduação em Ciência da Computação" },
  { ano: "2025.1", texto: "Primeira entrega de projeto para um cliente real" },
  {
    ano: "2025.2",
    texto: "Entrada no grupo de programação competitiva e primeira Maratona de Programação da SBC",
  },
  { ano: "2026.1", texto: "2ª fase da Maratona Feminina de Programação (MFP) na Unicamp" },
  { ano: "2026.2", texto: "Aprovada no PIBIC FACEPE" },
  { ano: "Agora", texto: "Cursando o 5º período" },
];

export const atividadesAcademicas: Atividade[] = [
  {
    titulo: "Iniciação Científica — Grupo MLEX",
    periodo: "ago/2025 – atual",
    descricao:
      "Pesquisa sobre algoritmos em grafos para ordenar transações bancárias usadas na análise de lavagem de dinheiro, com dados da Polícia Civil de Pernambuco (PCPE).",
    icone: "flask-outline",
  },
  {
    titulo: "Programação Competitiva",
    periodo: "2025 – atual",
    descricao:
      "Estudo de algoritmos e estruturas de dados. Finalista da Maratona Feminina de Programação (MFP 2025) e participante da Maratona SBC 2025 (fases 0 e 1).",
    icone: "trophy-outline",
  },
  {
    titulo: "Instrutora de C++",
    periodo: "Minicurso",
    descricao:
      "Co-instrutora do minicurso de 4 horas \"Introdução à Lógica de Programação com C++\", preparando material e exercícios para iniciantes.",
    icone: "school-outline",
  },
];

export const experienciasProfissionais: Experiencia[] = [
  {
    cargo: "Estagiária de Engenharia de Software",
    empresa: "Queen Pitch",
    periodo: "jun/2026 – atual",
    atual: true,
    itens: [
      "Desenvolvo e mantenho testes automatizados End-to-End com Cypress.",
      "Participo do time ágil com Scrum: dailies e cerimônias da sprint.",
      "Valido a qualidade de aplicações web feitas em React, Next.js e Node.js.",
      "Trabalho com APIs REST, ambientes em nuvem e fluxo de trabalho com Git.",
    ],
    tags: ["Cypress", "TypeScript", "React", "Next.js", "Node.js", "Docker", "AWS", "MongoDB"],
  },
  {
    cargo: "Líder de Equipe — ExtratorPDF",
    empresa: "Exército Brasileiro (5º CTA)",
    periodo: "ago/2025 – nov/2025",
    atual: false,
    itens: [
      "Liderei a equipe de desenvolvimento em um projeto com o 5º Centro de Telemática de Área.",
      "Desenvolvemos um app desktop em Python com interface gráfica para extrair dados de PDFs.",
      "Usei a biblioteca PyMuPDF para otimizar o processamento dos documentos.",
      "Coordenei as decisões técnicas e a divisão das tarefas.",
    ],
    tags: ["Python", "PyMuPDF", "Liderança"],
  },
];
