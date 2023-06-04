export function getRandom<T extends unknown>(itemList: readonly T[]): T {
  const idx = Math.floor(Math.random() * itemList.length);
  return itemList[idx];
}
