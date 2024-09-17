type Foto = {
  data: {
    attributes: {
      url: string;
    };
  };
};

export type DataFooter = {
  id: number;
  attributes: {
    Endereco: string;
    Cidade: string;
    CEP: string;
    Instagram: string;
    WhatsApp: string;
    Youtube: string;
    TwitterX: string;
    Logo: Foto;
  };
};
