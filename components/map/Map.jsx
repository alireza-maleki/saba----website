import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  Polyline,
  useMapEvents,
} from "react-leaflet";
import L, { Layer } from "leaflet";
import "leaflet.awesome-markers";
import "leaflet-routing-machine";

import React from "react";
import Image from "next/image";

const Map = () => {
  const position = [35.76947674049078, 51.45888020206589];

  const customIcon = new L.Icon({
    iconUrl: "/images/map/map.png",
    iconSize: [60, 60], // ابعاد ایکون (عرض و ارتفاع) به پیکسل
    iconAnchor: [16, 32], // نقطه‌ای روی ایکون که به نقطه مارکر اشاره می‌کند
    popupAnchor: [0, -32], // نقطه‌ای روی ایکون که نشانگر محل پاپ‌آپ است
  });

  return (
    <div className="w-screen max-h-[700px] py-24 bg-gradient-to-r from-[#b7eafd] to-[#c2d4fc]">
      <div className="container mx-auto w-[94%] md:w-2/3 h-full drop-shadow-2xl">
        <MapContainer
          className="rounded-[30px]"
          center={position}
          zoom={17}
          scrollWheelZoom={true}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={position} icon={customIcon}>
            <Popup>لوکیشن شرکت</Popup>
          </Marker>
        </MapContainer>
      </div>
    </div>
  );
};

export default Map;
