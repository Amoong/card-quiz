export function createRandomPicker<T extends unknown>(
  itemList: readonly T[]
): () => T {
  return () => {
    const idx = Math.floor(Math.random() * itemList.length);
    return itemList[idx];
  };
}
