import { Component } from '@angular/core';
import { SidebarActions } from '../../../biz/redux/layout/sidebar/sidebar.actions';

@Component({
  moduleId: module.id,
  selector: 'tm-header',
  templateUrl: 'header.component.html',
  styleUrls: ['header.component.css']
})
export class HeaderComponent {
  constructor(private _sidebarActions: SidebarActions) {}

  openSiderbar() {
    this._sidebarActions.open();
  }
}
