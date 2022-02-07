export const wait = (milliSeconds = 0) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve();
    }, milliSeconds);
  });
};
