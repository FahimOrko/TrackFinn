import React, { useEffect, useRef, useState } from "react";
import mapboxgl from "mapbox-gl";
import Marker from "./Marker";
import Popup from "./Popup";

const mapbox_api = import.meta.env.VITE_MAPBOX_API_KEY;

const AllTrainsMap = ({ data }) => {
  const trainsData = data;
  const [mapIsLoaded, setMapIsLoaded] = useState(false);

  const mapContainerRef = useRef();
  const mapRef = useRef();

  // marker customs

  const [activeItem, setActiveItem] = useState();
  const handleMarkerClick = (item) => {
    setActiveItem(item);
  };

  useEffect(() => {
    mapboxgl.accessToken = mapbox_api;
    mapRef.current = new mapboxgl.Map({
      container: mapContainerRef.current,
      style: "mapbox://styles/nutshell4122/cm973h8c900eq01qlejc57zh6",
      center: [25.7482, 61.9241], // starting position [lng, lat]
      zoom: 6, // starting zoom
    });

    return () => {
      setMapIsLoaded(true);
      mapRef.current.remove();
    };
  }, []);

  return (
    <>
      {mapIsLoaded &&
        mapRef?.current &&
        trainsData?.map((item) => {
          return (
            <Marker
              key={item.trainNumber}
              map={mapRef.current}
              item={item}
              isActive={activeItem?.trainNumber === item.trainNumber}
              onClick={handleMarkerClick}
            />
          );
        })}
      {mapIsLoaded && mapRef?.current && (
        <Popup map={mapRef.current} activeItem={activeItem} />
      )}
      <div className="h-[65dvh] w-full map-container" ref={mapContainerRef} />
    </>
  );
};

export default AllTrainsMap;
