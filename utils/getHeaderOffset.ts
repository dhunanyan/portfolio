export const getHeaderOffset = () => {
  const width = typeof window === 'undefined' ? 1280 : window.innerWidth;

  if (width > 1024) {
    return -150;
  }

  if (width > 768) {
    return -100;
  }

  return -70;
};
