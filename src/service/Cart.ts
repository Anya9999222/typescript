import Buyable from "../domain/Byuable";

export default class Cart {
    _items: Buyable[] = [];
    
    add(item: Buyable): void {
        this._items.push(item);
    }
    
    get items(): Buyable[] {
        return [...this._items];
    }

    calculateCost(): number {
        const totalCost = this._items.reduce((acc, item) => {
            return acc + item.price
        }, 0)
        return totalCost
    }

    calculateCostWithDiscount(percent: number): number {
        const fullPrice = this.calculateCost();
        return fullPrice - (fullPrice / 100 * percent)
    }

    deleteItem(id: number): void {
        this._items = this._items.filter(item => item.id !== id)
    }
}
    