import { useEffect, useRef } from "react";
import mapboxgl from "mapbox-gl";

const Marker = ({ map, item, isActive, onClick }) => {
  const markerRef = useRef();
  const elRef = useRef(document.createElement("div"));

  const lng = item?.trainLocations[0].location[0];
  const lat = item?.trainLocations[0].location[1];
  const trainNum = item?.trainNumber;
  const trainName = item?.trainType.name;

  useEffect(() => {
    if (!lng || !lat) return;

    const el = elRef.current;

    el.className = `flex items-center justify-center px-2 py-2 rounded-full border-4 text-sm font-bold cursor-pointer transition-colors ${
      isActive
        ? "bg-vrgrayDark text-vrgray border-vrgreenDark"
        : "bg-vrgray text-vrgrayDark border-vrgreenDark"
    }`;

    el.innerText = `${trainName}-${trainNum}`;
    el.onclick = () => onClick(item);

    markerRef.current = new mapboxgl.Marker(el)
      .setLngLat([lng, lat])
      .addTo(map);

    return () => {
      markerRef.current?.remove();
    };
  }, [map, lng, lat, item, isActive, onClick, trainName, trainNum]);

  return null; // No JSX, since it's all DOM-based now
};

export default Marker;
