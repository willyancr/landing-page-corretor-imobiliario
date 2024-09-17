type Child = {
  text: string;
  type: string;
  bold?: boolean;
};

type Descricao = {
  type: "paragraph" | "heading";
  level: number;
  children: Child[];
};

type Capa = {
  data: {
    attributes: {
      url: string;
    };
  };
};

type Foto = {
  id: number;
  attributes: {
    url: string;
  };
};

type Galeria = {
  data: Foto[];
};

type Comodidade = {
  id: number;
  comodidade: string;
};

type Categoria = {
  data: {
    attributes: {
      nome: string;
      slug: string;
    };
  };
};

export type DataRealState = {
  id: number;
  attributes: {
    titulo: string;
    slug: string;
    metragem: number;
    quartos: number;
    banheiros: number;
    descricao: Descricao[];
    comodidade: Comodidade[];
    preco: number;
    destaque: boolean;
    tipoImoveis: string;
    capa: Capa;
    galeria: Galeria;
    categoria: Categoria;
  };
};
