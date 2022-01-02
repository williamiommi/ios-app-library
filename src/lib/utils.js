export const getCenterBox = (el) => {
  const box = el.getBoundingClientRect();
  return {
    x: (box.left + box.right) / 2,
    y: (box.top + box.bottom) / 2,
  }
}