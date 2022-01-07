export const getCenterBox = (el) => {
  const box = el.getBoundingClientRect();
  return {
    x: (box.left + box.right) / 2,
    y: (box.top + box.bottom) / 2,
  };
};

export const getCenterPointsDifference = (startingCoordinates, finalCoordinates) => ({
  x: (startingCoordinates.x - finalCoordinates.x) * -1,
  y: (startingCoordinates.y - finalCoordinates.y) * -1,
});
