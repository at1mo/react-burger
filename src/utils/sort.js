export const sortDesc = (firstItem, secondItem) => {
  let firstItemLower = firstItem.type.toLowerCase(),
      secondItemLower = secondItem.type.toLowerCase();
  if (firstItemLower > secondItemLower) {
    return -1;
  }
  if (firstItemLower < secondItemLower) {
    return 1;
  }
  return 0;
};
