import { GoogleMap, Marker, useLoadScript } from "@react-google-maps/api";
import React from "react";

const mapContantStyle = {
  height: "400px",
  width: "100%",
};

interface MapProps {
  latitude: number;
  longitude: number;
}

const GOOGLE_MAPS_API_KEY = process.env
  .NEXT_PUBLIC_GOOGLE_MAPS_API_KEY as string;

export default function Map({ latitude, longitude }: MapProps) {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: GOOGLE_MAPS_API_KEY,
  });

  const center = React.useMemo(
    () => ({ lat: latitude, lng: longitude }),
    [latitude, longitude],
  );

  if (loadError) return <div>Erro ao carregar o mapa</div>;
  if (!isLoaded) return <div>Carregando o mapa...</div>;

  return (
    <GoogleMap mapContainerStyle={mapContantStyle} zoom={15} center={center}>
      <Marker position={center} />
    </GoogleMap>
  );
}
