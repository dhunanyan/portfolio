export const handleSmoothScroll = (event: MouseEvent) => {
  const target = event.target as HTMLAnchorElement;

  if (target.tagName !== 'A' || !target.getAttribute('href')?.startsWith('#')) {
    return;
  }

  event.preventDefault();

  const targetId = target.getAttribute('href')!.slice(1);
  const targetElement = document.getElementById(targetId);

  if (!targetElement) return;

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
