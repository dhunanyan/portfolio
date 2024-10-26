const getTargetElement = (event?: MouseEvent, targetID?: string) => {
  if (targetID) {
    return document.getElementById(targetID);
  }

  if (!event) {
    return null;
  }

  const target = event.target as HTMLAnchorElement;

  if (target.tagName !== 'A' || !target.getAttribute('href')?.startsWith('#')) {
    return;
  }

  const targetId = target.getAttribute('href')!.slice(1);
  const targetElement = document.getElementById(targetId);

  return targetElement;
};

export const handleSmoothScroll = ({
  event,
  targetID,
}: {
  event?: MouseEvent;
  targetID?: string;
}) => {
  const targetElement = getTargetElement(event, targetID);

  if (!targetElement) {
    return;
  }

  const headerElement = document.querySelector('header#header') as HTMLElement;
  const headerOffset = headerElement ? headerElement.offsetHeight : 0;

  const elementPosition =
    targetElement.getBoundingClientRect().top + window.scrollY;
  const top = elementPosition - headerOffset;

  window.scrollTo({
    top,
    behavior: 'smooth',
  });
};
