import { useEffect, useRef } from "react";
import mapboxgl from "mapbox-gl";

const Popup = ({ map, activeItem }) => {
  const popupRef = useRef();
  const containerRef = useRef(document.createElement("div"));

  const speed = activeItem?.trainLocations[0].speed;
  const time = activeItem?.trainLocations[0].timestamp;
  const lng = activeItem?.trainLocations[0].location[0];
  const lat = activeItem?.trainLocations[0].location[1];
  const trainNum = activeItem?.trainNumber;
  const trainName = activeItem?.trainType.name;
  const trainType = activeItem?.trainType.trainCategory.name;

  useEffect(() => {
    if (!map) return;

    popupRef.current = new mapboxgl.Popup({
      closeOnClick: false,
      offset: 20,
    });

    return () => {
      popupRef.current?.remove();
    };
  }, [map]);

  useEffect(() => {
    if (!activeItem || !popupRef.current) return;

    const container = containerRef.current;
    container.className = "w-full px-4 py-2 h-fit bg-vrgray rounded-lg";

    container.innerHTML = `
      <div class="flex flex-col gap-4">
        <div class="flex start gap-x-2">
          <strong>Time :</strong> <span>${new Date(
            time
          ).toLocaleString()}</span>
        </div>
        <div class="flex start gap-x-2">
          <strong>Name :</strong> <span>${trainName}-${trainNum}</span>
        </div>
        <div class="flex start gap-x-2">
          <strong>Type :</strong> <span>${trainType}</span>
        </div>
        <div class="flex start gap-x-2">
          <strong>Speed :</strong> <span>${speed}</span>
        </div>
        <div class="flex start gap-x-2">
          <strong>Longitude :</strong> <span>${lng}</span>
        </div>
        <div class="flex start gap-x-2">
          <strong>Latitude :</strong> <span>${lat}</span>
        </div>
      </div>
    `;

    popupRef.current
      .setLngLat({ lng, lat })
      .setDOMContent(container)
      .addTo(map);
  }, [activeItem, lng, lat, map, speed, time, trainName, trainNum, trainType]);

  return null; // No JSX needed
};

export default Popup;
