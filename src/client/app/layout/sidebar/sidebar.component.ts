import { Component, OnInit } from '@angular/core';
import { SidebarQuery } from '../../../biz/redux/layout/sidebar/sidebar.query';
import { SidebarActions } from '../../../biz/redux/layout/sidebar/sidebar.actions';

@Component({
  moduleId: module.id,
  selector: 'tm-siderbar',
  templateUrl: 'sidebar.component.html',
  styleUrls: ['sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  isOpened: boolean;

  constructor(private _sidebarQuery: SidebarQuery, private _sidebarActions: SidebarActions) {}

  ngOnInit() {
    this._sidebarQuery.rxSidebar().subscribe(sidebar => {
      this.isOpened = sidebar.result;
    });
  }

  close() {
    this._sidebarActions.close();
  }
}
