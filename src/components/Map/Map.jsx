import React, { useState } from "react";
import { Map, GoogleApiWrapper, Marker } from "google-maps-react";

const MapWithSearch = (props) => {
  const [searchInput, setSearchInput] = useState("");
  const [markerPosition, setMarkerPosition] = useState(null);

  const handlePlaceChanged = () => {
    const { google } = props;
    const autocomplete = new google.maps.places.Autocomplete(
      document.getElementById("locationInput")
    );
    autocomplete.addListener("place_changed", () => {
      const place = autocomplete.getPlace();
      if (place.geometry) {
        setMarkerPosition({
          lat: place.geometry.location.lat(),
          lng: place.geometry.location.lng(),
        });
      }
    });
  };

  const handleMapClick = (mapProps, map, clickEvent) => {
    const { latLng } = clickEvent;
    const { google } = props;
    const geocoder = new google.maps.Geocoder();
    geocoder.geocode({ location: latLng }, (results, status) => {
      if (status === "OK" && results[0]) {
        setSearchInput(results[0].formatted_address);
        setMarkerPosition({
          lat: latLng.lat(),
          lng: latLng.lng(),
        });
      }
    });
  };

  return (
    <div>
      <input
        id="locationInput"
        type="text"
        value={searchInput}
        onChange={(e) => setSearchInput(e.target.value)}
        placeholder="Введіть назву місця"
        onBlur={handlePlaceChanged}
      />
      <Map
        google={props.google}
        onClick={handleMapClick}
        initialCenter={{
          lat: 0,
          lng: 0,
        }}
        zoom={12}
      >
        {markerPosition && <Marker position={markerPosition} />}
      </Map>
    </div>
  );
};

export default GoogleApiWrapper({
  apiKey: "AIzaSyAGBDc2zDC74VOpsc7V38JMFe2uZvMrnnM",
})(MapWithSearch);
