import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import mapboxgl from "mapbox-gl";

const Popup = ({ map, activeItem }) => {
  // a ref to hold the popup instance
  const popupRef = useRef();
  // a ref for an element to hold the popup's content
  const contentRef = useRef(document.createElement("div"));

  // active item data
  const speed = activeItem?.trainLocations[0].speed;
  const time = activeItem?.trainLocations[0].timestamp;
  const lng = activeItem?.trainLocations[0].location[0];
  const lat = activeItem?.trainLocations[0].location[1];
  const trainNum = activeItem?.trainNumber;
  const trainName = activeItem?.trainType.name;
  const trainType = activeItem?.trainType.trainCategory.name;

  // instantiate the popup on mount, remove it on unmount
  useEffect(() => {
    if (!map) return;

    // create a new popup instance, but do not set its location or content yet
    popupRef.current = new mapboxgl.Popup({
      closeOnClick: false,
      offset: 20,
    });

    return () => {
      popupRef.current.remove();
    };
  }, [map]);

  // when activeItem changes, set the popup's location and content, and add it to the map
  useEffect(() => {
    if (!activeItem) return;

    popupRef.current
      .setLngLat({ lng, lat }) // set its position using activeItem's geometry
      .setHTML(contentRef.current.outerHTML) // use contentRef's `outerHTML` to set the content of the popup
      .addTo(map); // add the popup to the map
  }, [activeItem, map, lng, lat]);

  // use a react portal to render the content to show in the popup, assigning it to contentRef
  return (
    <>
      {createPortal(
        <div className="portal-content w-full px-4 py-2 h-fit bg-vrgray rounded-lg">
          <div className="flex flex-col gap-4">
            <div className="flex start gap-x-2">
              <strong>Time : </strong>
              <span>{new Date(time).toLocaleString()}</span>
            </div>
            <div className="flex start gap-x-2">
              <strong>Name : </strong>
              <span>{trainName + "-" + trainNum}</span>
            </div>
            <div className="flex start gap-x-2">
              <strong>Type : </strong>
              <span>{trainType}</span>
            </div>
            <div className="flex start gap-x-2">
              <strong>Speed : </strong>
              <span>{speed}</span>
            </div>
            <div className="flex start gap-x-2">
              <strong>Longitude : </strong>
              <span>{lng}</span>
            </div>
            <div className="flex start gap-x-2">
              <strong>Latitude : </strong>
              <span>{lat}</span>
            </div>
          </div>
        </div>,
        contentRef.current
      )}
    </>
  );
};

export default Popup;
