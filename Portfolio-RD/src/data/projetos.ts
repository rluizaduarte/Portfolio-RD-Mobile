import { ImageSourcePropType } from "react-native";

export type Projeto = {
  titulo: string;
  imagem: ImageSourcePropType;
  descricao: string;
  tags: string[];
  github: string;
  site?: string;
};

export const projetos: Projeto[] = [
  {
    titulo: "Qina Design",
    imagem: require("@/assets/images/projetos/qina-design.png"),
    descricao:
      "Projeto integrador desenvolvido com a empresa Qina Design: um sistema para atualizar e gerenciar o status dos pedidos, com login autenticado. O front-end usa React, Vite e TypeScript e o back-end é uma API em NestJS com Prisma e PostgreSQL.",
    tags: [
      "React",
      "Vite",
      "TypeScript",
      "NestJS",
      "Prisma",
      "PostgreSQL",
      "JWT",
    ],
    github: "https://github.com/rluizaduarte/QinaDesign",
    site: "https://qinadesign.vercel.app/login",
  },
  {
    titulo: "Massa Mia",
    imagem: require("@/assets/images/projetos/massa-mia.png"),
    descricao:
      "Projeto acadêmico que transformou o sistema de uma pizzaria, antes um programa Java no terminal, em uma aplicação web completa. Os donos acompanham vendas, eventos e relatórios, e os funcionários registram pedidos e agendam eventos, tudo salvo em um banco na nuvem.",
    tags: ["Java", "Web", "Banco na nuvem"],
    github: "https://github.com/rluizaduarte/Massa-Mia",
    site: "https://massa-mia.vercel.app/",
  },
  {
    titulo: "Jogo da Forca",
    imagem: require("@/assets/images/projetos/jogo-da-forca.png"),
    descricao:
      "Jogo da forca clássico feito em React, com palavra sorteada de uma lista com mais de 30 opções, teclado na tela, registro das letras já usadas e telas de vitória e derrota. Uma versão em React Native está na aba Jogo deste app!",
    tags: ["React", "TypeScript", "Jogo"],
    github:
      "https://github.com/rluizaduarte/Programacao-Web-e-Mobile/tree/main/jogo-da-forca",
    site: "https://jogo-da-forca-ten-kappa.vercel.app/",
  },
];
