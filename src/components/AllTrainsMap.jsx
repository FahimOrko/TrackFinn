import React, { useEffect, useRef, useState } from "react";
import mapboxgl from "mapbox-gl";
import Marker from "./Marker";
import Popup from "./Popup";

const mapbox_api = import.meta.env.VITE_MAPBOX_API_KEY;

const AllTrainsMap = ({ data }) => {
  const [mapIsLoaded, setMapIsLoaded] = useState(false);
  const mapContainerRef = useRef();
  const mapRef = useRef();

  const [activeItem, setActiveItem] = useState();
  const handleMarkerClick = (item) => {
    setActiveItem(item);
  };

  useEffect(() => {
    mapboxgl.accessToken = mapbox_api;

    const map = new mapboxgl.Map({
      container: mapContainerRef.current,
      style: "mapbox://styles/nutshell4122/cm973h8c900eq01qlejc57zh6",
      center: [25.7482, 61.9241], // Finland center
      zoom: 5,
    });

    mapRef.current = map;

    map.on("load", () => {
      setMapIsLoaded(true);
    });

    return () => {
      map.remove();
    };
  }, []);

  return (
    <div className="h-[70dvh] w-full px-6 py-10 md:px-10 md:py-10">
      <div className="h-full w-full rounded-md shadow-sm border-8  border-vrgreenDark transition-all duration-300 focus:outline-none hover:ring hover:ring-vrgreenDark">
        <div className="h-full w-full map-container " ref={mapContainerRef} />

        {mapIsLoaded &&
          mapRef.current &&
          data?.map((item) => (
            <Marker
              key={item.trainNumber}
              map={mapRef.current}
              item={item}
              isActive={activeItem?.trainNumber === item.trainNumber}
              onClick={handleMarkerClick}
            />
          ))}

        {mapIsLoaded && mapRef.current && activeItem && (
          <Popup map={mapRef.current} activeItem={activeItem} />
        )}
      </div>
    </div>
  );
};

export default AllTrainsMap;
