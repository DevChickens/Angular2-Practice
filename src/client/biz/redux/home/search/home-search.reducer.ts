import {HomeSearchState} from './home-search.state';
import {ActionReducer, Action} from '@ngrx/store';
import {HomeSearchActions} from './home-search.actions';

const initialState: HomeSearchState = [];

export const homeSearchReducer: ActionReducer<HomeSearchState> = (state = initialState, action: Action): HomeSearchState => {
  switch (action.type) {
    case HomeSearchActions.SEARCH:
      return !action.payload ? state : action.payload;
    default:
      return state;
  }
};
