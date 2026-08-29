import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface CartItem {
  name: string;
  image: string;
  color: string;
  colorCode: string;
  storage: string;
  price: number;
  quantity: number;
  selected: boolean;
}

const STORAGE_KEY = 'techshop_cart';

@Injectable({ providedIn: 'root' })
export class CartService {
  private itemsSubject = new BehaviorSubject<CartItem[]>(this.loadFromStorage());
  items$ = this.itemsSubject.asObservable();

  private get items(): CartItem[] {
    return this.itemsSubject.value;
  }

  private loadFromStorage(): CartItem[] {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      return raw ? JSON.parse(raw) : [];
    } catch {
      return [];
    }
  }

  private commit(items: CartItem[]) {
    this.itemsSubject.next(items);
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
    } catch {
      // localStorage unavailable (private mode, quota, etc.) — cart just won't survive a reload
    }
  }

  addToCart(newItem: CartItem) {
    const items = this.items.map(item => ({ ...item }));
    const existing = items.find(
      item => item.name === newItem.name && item.color === newItem.color && item.storage === newItem.storage
    );
    if (existing) {
      existing.quantity += newItem.quantity;
    } else {
      items.push({ ...newItem });
    }
    this.commit(items);
  }

  updateQuantity(index: number, delta: number) {
    const items = this.items.map(item => ({ ...item }));
    if (!items[index]) return;
    items[index].quantity = Math.max(1, items[index].quantity + delta);
    this.commit(items);
  }

  removeItem(index: number) {
    this.commit(this.items.filter((_, i) => i !== index));
  }

  toggleSelected(index: number) {
    const items = this.items.map(item => ({ ...item }));
    if (!items[index]) return;
    items[index].selected = !items[index].selected;
    this.commit(items);
  }

  getTotal(items: CartItem[]): number {
    return items.filter(item => item.selected).reduce((sum, item) => sum + item.price * item.quantity, 0);
  }

  clearSelected() {
    this.commit(this.items.filter(item => !item.selected));
  }
}
