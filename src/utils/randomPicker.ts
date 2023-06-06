export class RandomPicker<T extends unknown[]> {
  pool: T[] = [];
  borderIdx: number = 0;

  constructor(items: T[]) {
    this.init(items);
  }

  resetPool = (items: T[]) => {
    this.init(items);
  };

  private init = (items: T[]) => {
    this.pool = items;
    this.borderIdx = items.length;
  };

  pick = () => {
    if (this.borderIdx === 0) {
      this.borderIdx = this.pool.length;
    }

    const idx = Math.floor(Math.random() * this.borderIdx);
    const picked = this.pool[idx];

    console.log(picked, this.pool, this.borderIdx);
    this.removeFromPool(idx);
    return picked;
  };

  private removeFromPool = (idx: number) => {
    const temp = this.pool[idx];
    this.pool[idx] = this.pool[--this.borderIdx];
    this.pool[this.borderIdx] = temp;
  };
}
