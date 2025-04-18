import { useEffect, useRef } from "react";
import mapboxgl from "mapbox-gl";
import { useNavigate } from "react-router-dom";
import { format } from "date-fns";

const Popup = ({ map, activeItem }) => {
  const popupRef = useRef();
  const navigate = useNavigate();

  useEffect(() => {
    if (!map || !activeItem) return;

    const lng = activeItem?.trainLocations[0]?.location[0];
    const lat = activeItem?.trainLocations[0]?.location[1];
    const speed = activeItem?.trainLocations[0]?.speed;
    const time = activeItem?.trainLocations[0]?.timestamp;
    const trainNum = activeItem?.trainNumber;
    const trainName = activeItem?.trainType?.name;
    const trainType = activeItem?.trainType?.trainCategory?.name;

    const handleClick = () => {
      const formattedDate = time ? format(time, "dd/MM/yyyy") : "";
      navigate(`/my-train?trainNum=${trainNum}&date=${formattedDate}`);
    };

    const el = document.createElement("div");
    el.className = "portal-content w-full px-4 py-2 h-fit bg-vrgray rounded-lg";
    el.innerHTML = `
      <div class="flex flex-col gap-4">
        <div class="flex start gap-x-2"><strong>Time:</strong> <span>${new Date(
          time
        ).toLocaleString()}</span></div>
        <div class="flex start gap-x-2"><strong>Name:</strong> <span>${trainName}-${trainNum}</span></div>
        <div class="flex start gap-x-2"><strong>Type:</strong> <span>${trainType}</span></div>
        <div class="flex start gap-x-2"><strong>Speed:</strong> <span>${speed}</span></div>
        <div class="flex start gap-x-2"><strong>Longitude:</strong> <span>${lng}</span></div>
        <div class="flex start gap-x-2"><strong>Latitude:</strong> <span>${lat}</span></div>
        <div id="learn-more" class="flex start gap-x-2 cursor-pointer text-blue-400 underline hover:text-blue-600">
          <strong>Learn More</strong>
        </div>
      </div>
    `;

    el.querySelector("#learn-more").addEventListener("click", handleClick);

    popupRef.current = new mapboxgl.Popup({ closeOnClick: false, offset: 20 })
      .setLngLat([lng, lat])
      .setDOMContent(el)
      .addTo(map);

    return () => {
      popupRef.current?.remove();
    };
  }, [map, activeItem, navigate]);

  return null;
};

export default Popup;
