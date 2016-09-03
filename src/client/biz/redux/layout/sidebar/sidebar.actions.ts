import { Injectable } from '@angular/core';
import { Store, Action } from '@ngrx/store';
import { SidebarState } from './sidebar.state';

@Injectable()
export class SidebarActions {
  static OPEN = '[siderbar] Open';
  static CLOSE = '[siderbar] Close';
  static TOGGLE = '[siderbar] Toggle';
  constructor(private store: Store<SidebarState>) { }

  open() {
    const action: Action = {
      type: SidebarActions.OPEN,
      payload: true
    };

    this.store.dispatch(action);
  }

  close() {
    const action: Action = {
      type: SidebarActions.CLOSE,
      payload: false
    };

    this.store.dispatch(action);
  }

  toggle() {
    const action: Action = {
      type: SidebarActions.TOGGLE
    };

    this.store.dispatch(action);
  }


}
