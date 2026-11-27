import { isDeepStrictEqual } from 'node:util';

export abstract class ValueObject<Props extends object> {
  protected readonly props: Props;

  protected constructor(props: Props) {
    this.props = Object.freeze({ ...props });
  }

  equals(other?: ValueObject<Props>): boolean {
    if (other === undefined) {
      return false;
    }

    if (other.constructor !== this.constructor) {
      return false;
    }

    return isDeepStrictEqual(this.props, other.props);
  }
}
