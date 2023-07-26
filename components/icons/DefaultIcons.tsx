import L from "leaflet";
import iconUrl from "../image/map.jpg";

const { iconSize, shadowSize, iconAnchor, popupAnchor, tooltopAnchor } =
  L.Marker.prototype.options.icon.options;

export const DefaultIcons = L.icon({
  iconUrl,
  iconSize,
  shadowSize,
  iconAnchor,
  popupAnchor,
  tooltopAnchor,
});
