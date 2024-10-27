export const getHeaderOffset = () => {
  if (window.innerWidth > 1024) {
    return -150;
  }

  if (window.innerWidth > 768) {
    return -100;
  }

  return -70;
};
