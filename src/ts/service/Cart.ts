import Buyable from "../domain/Buyable";

export default class Cart {
  private _items: Buyable[] = [];

  add(item: Buyable): void {
    this._items.push(item);
  }

  get items(): Buyable[] {
    return [...this._items];
  }

  /**
   * Calculates the total purchase amount with the given discount percentage.
   *
   * @param {number} discount - The discount percentage to be applied
   * @return {number} The total purchase amount after applying the discount
   */
  purchaseSum(discount: number = 0): number {
    discount = discount >= 0 && discount <= 100 ? 1 - discount / 100 : 1 - 0;
    let total: number = 0;
    this._items.forEach((item) => {
      total += item.price * discount;
    });
    return total;
  }
  /**
   * Removes the specified item from the list of items.
   *
   * @param {Buyable} item - the item to be removed
   * @return {void}
   */
  removeCartItem(item: Buyable): void {
    this._items = this._items.filter((i) => i.id !== item.id);
  }
}
