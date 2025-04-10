import React, { useEffect, useRef, useState } from "react";
import mapboxgl from "mapbox-gl";

const mapbox_api = import.meta.env.VITE_MAPBOX_API_KEY;

const SingleTrainMapChild = ({ newItem, lng, lat }) => {
  const [mapIsLoaded, setMapIsLoaded] = useState(false);
  const mapContainerRef = useRef();
  const mapRef = useRef();
  const markerRef = useRef();

  useEffect(() => {
    mapboxgl.accessToken = mapbox_api;

    // Initialize the map
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

    // Cleanup map on component unmount
    return () => {
      map.remove();
    };
  }, [lng, lat]);

  // Handle marker updates on map when new data is provided
  useEffect(() => {
    if (mapIsLoaded && mapRef.current && newItem) {
      // Remove the old marker if exists
      if (markerRef.current) {
        markerRef.current.remove();
      }

      // Create and add new marker to the map using the Marker component
      const el = document.createElement("div");
      el.className = `flex items-center justify-center px-2 py-2 rounded-full border-4 border-vrgreenDark text-sm font-bold ${
        newItem.isActive
          ? "bg-vrgrayDark text-vrgray"
          : "bg-vrgray text-vrgrayDark"
      }`;

      el.innerText = `${newItem.trainType?.name}-${newItem.trainNumber}`;
      el.addEventListener("click", () => {
        console.log("Marker clicked!", newItem);
      });

      const marker = new mapboxgl.Marker(el)
        .setLngLat([lng, lat])
        .addTo(mapRef.current);

      markerRef.current = marker;
    }
  }, [mapIsLoaded, newItem, lng, lat]);

  return (
    <>
      <div className="h-full w-full map-container" ref={mapContainerRef} />
    </>
  );
};

export default SingleTrainMapChild;
