const fetchAddressFromCoordinates = async (coordinate) => {
  const { lat, lng } = coordinate;
  const apiKey = "AIzaSyAGBDc2zDC74VOpsc7V38JMFe2uZvMrnnM";
  const url = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lng}&key=${apiKey}`;

  try {
    const response = await fetch(url);
    const data = await response.json();
    if (data.status === "OK") {
      return data.results[0].formatted_address;
    } else {
      console.error("Error fetching address:", data.status);
      return null;
    }
  } catch (error) {
    console.error("Error fetching address:", error);
    return null;
  }
};

export default fetchAddressFromCoordinates;
