export const getLatAndLon = async () => {
  let lat, lon;
  if ("geolocation" in navigator) {
    navigator?.geolocation.getCurrentPosition((pos) => {
      const { latitude, longitude } = pos.coords;
      lat = latitude;
      lon = longitude;
      //   return { latitude, longitude };
    });
  }
  return { lat, lon };
};
