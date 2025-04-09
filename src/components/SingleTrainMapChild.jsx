import React, { useEffect, useRef, useState } from "react";
import mapboxgl from "mapbox-gl";
import Marker from "./Marker";
import Popup from "./Popup";

const mapbox_api = import.meta.env.VITE_MAPBOX_API_KEY;

const SingleTrainMapChild = ({ newItem, lng, lat }) => {
  const [mapIsLoaded, setMapIsLoaded] = useState(false);

  const mapContainerRef = useRef();
  const mapRef = useRef();

  useEffect(() => {
    mapboxgl.accessToken = mapbox_api;
    mapRef.current = new mapboxgl.Map({
      container: mapContainerRef.current,
      style: "mapbox://styles/nutshell4122/cm973h8c900eq01qlejc57zh6",
      center: [lng, lat], // starting position [lng, lat]
      zoom: 6, // starting zoom
    });

    return () => {
      setMapIsLoaded(true);
      mapRef.current.remove();
    };
  }, [lng, lat]);

  return (
    <>
      <div className="h-full w-full map-container" ref={mapContainerRef} />
      <Marker
        key={newItem.trainNumber}
        map={mapRef.current}
        item={newItem}
        isActive={false}
      />
    </>
  );
};

export default SingleTrainMapChild;
