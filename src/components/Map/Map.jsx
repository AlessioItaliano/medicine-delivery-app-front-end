import { useState, useEffect } from "react";
import { GoogleMap, useJsApiLoader, Marker } from "@react-google-maps/api";
import Loader from "components/Loader";

const Map = ({ onCoordinatesChange }) => {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "AIzaSyAGBDc2zDC74VOpsc7V38JMFe2uZvMrnnM",
  });

  const [currentPosition, setCurrentPosition] = useState(null);
  const [hasLoadedPosition, setHasLoadedPosition] = useState(false);

  useEffect(() => {
    if (!hasLoadedPosition && navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const userPosition = {
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          };
          setCurrentPosition(userPosition);
          onCoordinatesChange(userPosition);
          setHasLoadedPosition(true);
        },
        (error) => {
          console.error("Error getting current position:", error);
        }
      );
    }
  }, [hasLoadedPosition, onCoordinatesChange]);

  const handleMarkerDragEnd = (e) => {
    const newCoordinates = {
      lat: e.latLng.lat(),
      lng: e.latLng.lng(),
    };
    setCurrentPosition(newCoordinates);
    onCoordinatesChange(newCoordinates);
  };

  return !isLoaded ? (
    <Loader />
  ) : (
    <GoogleMap
      mapContainerStyle={{ width: "400px", height: "400px" }}
      zoom={17}
      center={currentPosition}
    >
      {currentPosition !== null && (
        <Marker
          position={currentPosition}
          title="Your Location"
          draggable={true}
          onDragEnd={handleMarkerDragEnd}
        />
      )}
    </GoogleMap>
  );
};

export default Map;
