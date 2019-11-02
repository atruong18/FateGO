import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';

export enum State {
  Init,
  ItemDrop_SelectPin
}

@Injectable({
  providedIn: 'root'
})
export class ActionService {

  private notifierSubject = new BehaviorSubject<Action>({ state: State.Init });

  get action$(): Observable<Action> {
    return this.notifierSubject.asObservable();
  }

  constructor() { }

  public trigger(action: Action): void {
    this.notifierSubject.next(action);
  }
  public get<P>(state: State): Observable<P> {
    return this.action$.pipe(
      filter(n => n.state === state),
      map(n => n.payload)
    );
  }
}

export interface Action {
  state: State;
  payload?: any;
}
