type Child = {
  text: string;
  type: string;
  bold?: boolean;
};

type Descricao = {
  children: Child[];
};

type FotoPerfil = {
  data: {
    attributes: {
      url: string;
    };
  };
};

type Diferencial = {
  id: number;
  diferencial: string;
};

export type DataAbout = {
  id: number;
  attributes: {
    descricao: Descricao[];
    fotoPerfil: FotoPerfil;
    diferencial: Diferencial[];
  };
};
