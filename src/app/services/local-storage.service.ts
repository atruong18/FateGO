import { Injectable } from '@angular/core';
import { Item } from '../models/drop';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor() { }

  public dropPinItemNames = new LocalStorage<string[]>('pinned_drop_items');

}

class LocalStorage<T> {
  private key: string;

  constructor(key: string) {
    this.key = key;
  }
  get value(): T {
    const v = localStorage.getItem(this.key);
    return v ? JSON.parse(v) : undefined;
  }
  set value(value: T) {
    localStorage.setItem(this.key, JSON.stringify(value));
  }
}