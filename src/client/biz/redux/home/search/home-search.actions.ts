import {Injectable} from '@angular/core';
import {HomeSearchState} from './home-search.state';
import {HomeService} from '../../../service/home.service';
import {Action, Store} from '@ngrx/store';

@Injectable()
export class HomeSearchActions {
  static SEARCH = '[Home] Get';
  constructor(
    private _store: Store<HomeSearchState>,
    private _homeService: HomeService
  ) { }

  search() {
    const action: Action = {
      type: HomeSearchActions.SEARCH
    };
    const homes$ = this._homeService.search();

    homes$.subscribe((homes) => {
      action.payload = homes;
      this._store.dispatch(action);
    });
  }
}
