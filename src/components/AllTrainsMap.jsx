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
      zoom: 6,
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
    <>
      <div className="h-[65dvh] w-full map-container" ref={mapContainerRef} />

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
    </>
  );
};

export default AllTrainsMap;
