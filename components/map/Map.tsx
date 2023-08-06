// import React, { useState, useEffect, useRef, Fragment } from "react";
// import {
//   MapContainer,
//   TileLayer,
//   Marker,
//   Popup,
//   Polyline,
//   useMapEvents,
// } from "react-leaflet";
// import L, { Layer } from "leaflet";
// import "leaflet.awesome-markers";
// import "leaflet-routing-machine";
// import { DefaultIcons } from "../map-icons/DefaultIcons";

// import startMap from "../image/mapicon.webp";

// function LocationMap() {
//   const [startLocation, setStartLocation] = useState(null);
//   const [destination, setDestination] = useState(null);
//   const [showRoute, setShowRoute] = useState(false);
//   const [path, setPath] = useState([]);
//   const [disableMapClick, setDisableMapClick] = useState(false);
//   const mapRef = useRef(null);
//   const position = [35.72994, 771.493692];

//   const customIcon = L.icon({
//     iconUrl: require("../image/map.jpg"),
//     iconSize: [45, 45],
//   });

//   console.log(mapRef);

//   const LocationMarker = () => {
//     const map = useMapEvents({
//       click(e) {
//         if (!disableMapClick) {
//           const { lat, lng } = e.latlng;
//           if (!startLocation) {
//             setStartLocation([lat, lng]);
//             mapRef.current.setView([lat, lng], 18);
//           } else {
//             setDestination([lat, lng]);
//             mapRef.current.setView([lat, lng], 18);
//           }
//         }
//       },
//     });

//     return null;
//   };

//   useEffect(() => {
//     navigator.geolocation.getCurrentPosition(
//       (position) => {
//         // مرکز نقشه را بر اساس لوکیشن کاربر تنظیم کنید
//         const { latitude, longitude } = position.coords;

//         if (!startLocation && !destination) {
//           mapRef.current.setView([latitude, longitude], 18);
//         }

//         L.popup()
//           .setLatLng([latitude, longitude])
//           .setContent("شما اینجا هستید -- مبدأ")
//           .openOn(mapRef.current);
//       },
//       (error) => {
//         console.log(error);
//       }
//     );
//   }, []);

//   useEffect(() => {
//     if (mapRef.current && startLocation && destination) {
//       const control = L.Routing.control({
//         waypoints: [
//           L.latLng(startLocation[0], startLocation[1]),
//           L.latLng(destination[0], destination[1]),
//         ],
//       }).addTo(mapRef.current);

//       setShowRoute(true);
//       setDisableMapClick(true);

//       return () => {
//         if (control) {
//           control.remove();
//         }
//       };
//     }
//   }, [startLocation, destination]);

//   const startLocationCloseHandler = () => {
//     setStartLocation(null);
//     setDisableMapClick(false);
//   };

//   const destinationCloseHandler = () => {
//     setDestination(null);
//     setDisableMapClick(false);
//   };

//   const handleBackClick = () => {
//     if (destination) {
//       setDestination(null);
//     } else if (startLocation) {
//       setStartLocation(null);
//     }
//   };

//   const polylineStyle = {
//     color: "red", // رنگ خط
//     weight: 5, // ضخامت خط
//     opacity: 0.7, // شفافیت خط
//     dashArray: "10, 5", // الگوی خط
//   };

//   const routingOptions = {
//     waypoints: [startLocation, destination],
//     routeWhileDragging: true,
//     show: true,
//     autoRoute: true,
//     lineOptions: {
//       styles: [{ color: '#red', opacity: 0.6, weight: 8 }],
//     },
//   };

//   return (
//     <div className="w-screen max-h-[500px] py-24 bg-gradient-to-r from-[#b7eafd] to-[#c2d4fc]">
//       <div className="container mx-auto rounded-xl w-full h-full">
//       <MapContainer
//         className="z-0 relative"
//         ref={mapRef}
//         center={mapRef.current || position}
//         zoom={18}
//         scrollWheelZoom={true}
//       >
//         <LocationMarker />
//         <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

//         {startLocation && (
//           <Marker icon={DefaultIcons} position={startLocation}>
//             <Popup>مبدأ</Popup>
//           </Marker>
//         )}

//         {destination && (
//           <Marker icon={customIcon} position={destination}>
//             <Popup>مقصد</Popup>
//           </Marker>
//         )}

//         {!startLocation && (
//           <div
//             style={{
//               position: "absolute",
//               top: "50%",
//               left: "50%",
//               transform: "translate(-50%, -50%)",
//               zIndex: 999,
//             }}
//           >
//             <span className="text-bold text-xl">مبدأ</span>
//             <img
//               src={startMap}
//               alt="pointer"
//               style={{ width: "50px", height: "50px", cursor: "pointer" }}
//             />
//           </div>
//         )}

//         {!destination && startLocation && (
//           <div
//             style={{
//               position: "absolute",
//               top: "50%",
//               left: "50%",
//               transform: "translate(-50%, -50%)",
//               zIndex: 999,
//             }}
//           >
//             <span className="text-bold text-xl">مقصد</span>
//             <img
//               src={startMap}
//               alt="pointer"
//               style={{ width: "50px", height: "50px", cursor: "pointer" }}
//             />
//           </div>
//         )}

//         {showRoute && (
//           <Polyline pathOptions={routingOptions} positions={path} />
//         )}
//       </MapContainer>
//       </div>

//       {startLocation && (
//         // <LayerGroup>
//         <div className="absolute w-3/4 md:w-2/4 lg:w-1/4 p-4 rounded bg-white shadow-lg fixed bottom-[4%] right-[5%] z-50">
//           <span
//             onClick={startLocationCloseHandler}
//             className="text-lg text-red-500 cursor-pointer"
//           >
//             X
//           </span>
//           <p className="flex items-center justify-around">
//             <span>Lat : {startLocation[0].toFixed(2)}</span>
//             <span>Lng : {startLocation[1].toFixed(2)}</span>
//             <p className="text-lg mr-4">مبدأ</p>
//           </p>
//         </div>
//         // </LayerGroup>
//       )}

//       {destination && (
//         // <LayerGroup>
//         <div className="absolute w-3/4 md:w-2/4 lg:w-1/4 p-4 rounded bg-white shadow-lg fixed bottom-[15%] right-[5%] z-50">
//           <span
//             onClick={destinationCloseHandler}
//             className="text-lg text-red-500 cursor-pointer"
//           >
//             X
//           </span>
//           <p className="flex items-center justify-around">
//             <span>Lat : {destination[0].toFixed(2)}</span>
//             <span>Lng : {destination[1].toFixed(2)}</span>
//             <p className="text-lg mr-4">مقصد</p>
//           </p>
//         </div>
//         // </LayerGroup>
//       )}
//     </div>
//   );
// }

// export default LocationMap;

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

import { DefaultIcons } from "../icons/DefaultIcons";
import marker from "../image/map.jpg";

import React from "react";

const Map = () => {
  const position = [35.76917674049078, 51.45888020206589];

  const customIcon = new L.Icon({
    iconUrl: "https://creazilla-store.fra1.digitaloceanspaces.com/icons/3432298/map-icon-md.png",
    iconSize: [35, 40], // ابعاد ایکون (عرض و ارتفاع) به پیکسل
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
