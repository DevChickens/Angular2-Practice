/**
 * Created by mayajuni on 2016-08-11.
 */
import {Observable} from 'rxjs';
import {Injectable} from '@angular/core';
import {HomeSearchState} from './home-search.state';
import {Store} from '@ngrx/store';

@Injectable()
export class HomeSearchQuery {
  constructor(private _store: Store<HomeSearchState>) {}

  getHomes(): Observable<any> {
    return this._store.select('mdHomeSearch');
  }
}
