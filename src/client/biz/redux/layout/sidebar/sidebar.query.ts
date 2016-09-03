import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { SidebarState } from './sidebar.state';
import { Observable } from 'rxjs';

@Injectable()
export class SidebarQuery {
  constructor(private _store: Store<SidebarState>) {}

  rxSidebar(): Observable<any> {
    return this._store.select('sidebar');
  }
}
