export const getUserGeoLocation = () => {
  return new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(
      geoCode => {
        resolve(geoCode);
      },
      error => {
        reject(error);
      },
    );
  });
};
