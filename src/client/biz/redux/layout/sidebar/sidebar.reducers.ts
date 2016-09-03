import { SidebarState } from './sidebar.state';
import { ActionReducer, Action } from '@ngrx/store';
import { SidebarActions } from './sidebar.actions';

const intialState: SidebarState = {
  result: false
};

export const sidebarReducer: ActionReducer<SidebarState> = (state = intialState, action: Action): SidebarState => {
  switch (action.type) {
    case SidebarActions.OPEN:
      return {result: action.payload};
    case SidebarActions.CLOSE:
      return {result: action.payload};
    case SidebarActions.TOGGLE:
      return {result: !state.result};


    default:
      return state;
  }
};

