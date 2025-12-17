// src/utils/keyboard.ts
export const horizontalCarouselKeyNav = (e: React.KeyboardEvent<HTMLDivElement | HTMLUListElement>) => {
  const focusable = Array.from(e.currentTarget.querySelectorAll('[tabindex="0"]')) as HTMLElement[];
  const index = focusable.indexOf(document.activeElement as HTMLElement);

  if (e.key === 'ArrowRight' && index < focusable.length - 1) {
    focusable[index + 1].focus();
    focusable[index + 1].scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
  } else if (e.key === 'ArrowLeft' && index > 0) {
    focusable[index - 1].focus();
    focusable[index - 1].scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
  }
};
