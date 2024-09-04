import FeatureItem from "./feature-item";

export default function PropertyFeaturesList() {
  return (
    <div className="space-y-5">
      <h1 className="text-2xl font-medium">Comodidades da propriedade</h1>

      <ul className="flex flex-wrap gap-20">
        <div className="space-y-2">
          <FeatureItem title="Aquecimento central" />
          <FeatureItem title="Ar condicionado central" />
          <FeatureItem title="Jardim" />
          <FeatureItem title="Lavanderia" />
          <FeatureItem title="Piscina" />
        </div>

        <div className="space-y-2">
          <FeatureItem title="Wifi" />
          <FeatureItem title="Garagem 6 vagas" />
          <FeatureItem title="Cameras de segurança" />
          <FeatureItem title="Home Theatre" />
        </div>
      </ul>
    </div>
  );
}
