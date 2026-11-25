export type ItemLinhaDoTempo = {
  ano: string;
  texto: string;
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
