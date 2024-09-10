type Child = {
  text: string;
  type: string;
  bold?: boolean;
};

type Descricao = {
  children: Child[];
};

export type DataItem = {
  id: number;
  attributes: {
    createdAt: string;
    updatedAt: string;
    descricao: Descricao[];
    linkWhatsapp: string;
    tituloPrincipal: string;
    tituloPrincipalDestaque: string;
    publishedAt: string;
  };
};
