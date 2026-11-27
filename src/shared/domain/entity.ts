import type { UniqueId } from './unique-id.vo.js';

export class Entity {
  protected constructor(readonly id: UniqueId) {}

  equals(other?: Entity): boolean {
    if (other === undefined) {
      return false;
    }

    if (other.constructor !== this.constructor) {
      return false;
    }

    return this.id.equals(other.id);
  }
}
