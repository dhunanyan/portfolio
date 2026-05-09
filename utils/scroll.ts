export const smoothScrollTo = (selector: string) => {
  document.querySelector(selector)?.scrollIntoView({ behavior: 'smooth' });
};

export const createSmoothScrollClickHandler = (
  selector: string,
  onBeforeScroll?: () => void
) => {
  return (event: { preventDefault: () => void }) => {
    event.preventDefault();
    onBeforeScroll?.();
    smoothScrollTo(selector);
  };
};
