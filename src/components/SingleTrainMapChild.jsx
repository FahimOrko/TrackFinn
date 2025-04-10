import React, { useEffect, useRef, useState } from "react";
import mapboxgl from "mapbox-gl";
import Marker from "./Marker";

const mapbox_api = import.meta.env.VITE_MAPBOX_API_KEY;

const SingleTrainMapChild = ({ newItem, lng, lat }) => {
  const [mapIsLoaded, setMapIsLoaded] = useState(false);

  const mapContainerRef = useRef();
  const mapRef = useRef();

  useEffect(() => {
    mapboxgl.accessToken = mapbox_api;

    const map = new mapboxgl.Map({
      container: mapContainerRef.current,
      style: "mapbox://styles/nutshell4122/cm973h8c900eq01qlejc57zh6",
      center: [lng, lat],
      zoom: 6,
    });

    mapRef.current = map;

    map.on("load", () => {
      setMapIsLoaded(true);
    });

    return () => {
      map.remove();
    };
  }, [lng, lat]);

  return (
    <>
      <div className="h-full w-full map-container" ref={mapContainerRef} />
      {mapIsLoaded && mapRef.current && (
        <Marker
          key={newItem.trainNumber}
          map={mapRef.current}
          item={newItem}
          isActive={false}
        />
      )}
    </>
  );
};

export default SingleTrainMapChild;
