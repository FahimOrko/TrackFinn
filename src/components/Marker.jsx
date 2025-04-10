// src/components/Marker.js
import { useEffect, useRef } from "react";
import mapboxgl from "mapbox-gl";

const Marker = ({ map, item, isActive, onClick }) => {
  const markerRef = useRef();

  const lng = item?.trainLocations?.[0]?.location?.[0];
  const lat = item?.trainLocations?.[0]?.location?.[1];
  const trainNum = item?.trainNumber;
  const trainName = item?.trainType?.name;

  useEffect(() => {
    if (!map || !lng || !lat) return;

    const el = document.createElement("div");
    el.className = `flex items-center justify-center px-2 py-2 rounded-full border-4 border-vrgreenDark text-sm font-bold ${
      isActive ? "bg-vrgrayDark text-vrgray" : "bg-vrgray text-vrgrayDark"
    }`;

    el.innerText = `${trainName}-${trainNum}`;
    el.addEventListener("click", () => onClick(item));

    if (map.isStyleLoaded()) {
      markerRef.current = new mapboxgl.Marker(el)
        .setLngLat([lng, lat])
        .addTo(map);
    }

    return () => {
      markerRef.current?.remove();
    };
  }, [map, lng, lat, trainName, trainNum, isActive, item, onClick]);

  return null;
};

export default Marker;
