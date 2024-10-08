type Child = {
  text: string;
  type: string;
  bold?: boolean;
};

type Descricao = {
  children: Child[];
};

type Foto = {
  data: {
    attributes: {
      url: string;
    };
  };
};

export type DataHome = {
  id: number;
  attributes: {
    descricao: Descricao[];
    linkWhatsapp: string;
    tituloPrincipal: string;
    tituloPrincipalDestaque: string;
    foto1: Foto;
    foto2: Foto;
  };
};
