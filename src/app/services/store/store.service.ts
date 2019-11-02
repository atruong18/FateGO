import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class StoreService {
  
}

class Store<T> {
  private defaultVal: T;
  private subject: BehaviorSubject<T>;

  constructor(defaultVal: T) {
    this.defaultVal = defaultVal;
    this.subject = new BehaviorSubject<T>(defaultVal);
  }
  get observable$(): Observable<T> {
    return this.subject.pipe(map(v => this.clean(v)));
  }
  get value(): T {
    return this.subject.getValue();
  }
  set value(val: T) {
    this.subject.next(val);
  }
  public reset(): void {
    this.subject.next(this.defaultVal);
  }
  public dispose(): void {
    this.reset();
  }

  private clean(val: T): T {
    return val ? JSON.parse(JSON.stringify(val)) : undefined;
  }
}
