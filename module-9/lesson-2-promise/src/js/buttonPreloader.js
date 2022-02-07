export const createPreloaderActions = btnRef => {
  return {
    el: btnRef,
    enablePreloader() {
      btnRef.classList.add('loading');
    },
    disablePreloader() {
      btnRef.classList.remove('loading');
    },
  };
};
