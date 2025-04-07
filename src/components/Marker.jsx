import { useEffect, useRef } from "react";
import mapboxgl from "mapbox-gl";
import { createPortal } from "react-dom";

const Marker = ({ map, item, isActive, onClick }) => {
  const markerRef = useRef();
  const contentRef = useRef(document.createElement("div"));

  //   itme data
  const speed = item?.trainLocations[0].speed;
  const lng = item?.trainLocations[0].location[0];
  const lat = item?.trainLocations[0].location[1];
  const trainNum = item?.trainNumber;
  const trainName = item?.trainType.name;
  const trainType = item?.trainType.trainCategory.name;

  useEffect(() => {
    markerRef.current = new mapboxgl.Marker(contentRef.current)
      .setLngLat([lng, lat])
      .addTo(map);

    return () => {
      markerRef.current.remove();
    };
  }, [lng, lat, map]);

  return (
    <>
      {createPortal(
        <div
          onClick={() => onClick(item)}
          className={`flex items-center justify-center px-2 py-2 rounded-full  border-4 border-vrgreenDark  text-sm font-bold ${
            isActive
              ? " bg-vrgrayDark text-vrgray"
              : "  bg-vrgray text-vrgrayDark"
          }`}
        >
          {trainName + "-" + trainNum}
        </div>,
        contentRef.current
      )}
    </>
  );
};

export default Marker;
