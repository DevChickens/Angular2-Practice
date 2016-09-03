import { Component, OnInit, ViewChild } from '@angular/core';
import { HomeSearchState } from '../../biz/redux/home/search/home-search.state';
import { HomeSearchQuery } from '../../biz/redux/home/search/home-search.query';
import { HomeSearchActions } from '../../biz/redux/home/search/home-search.actions';
import { ModalComponent } from '../../tdk/modal/modal.component';

/**
 * This class represents the lazy loaded HomeComponent.
 */
@Component({
  moduleId: module.id,
  selector: 'sd-home',
  templateUrl: 'home.component.html',
  styleUrls: ['home.component.css']
})
export class HomeComponent implements OnInit {
  homes: HomeSearchState;
  @ViewChild('myModal')
  myModal: ModalComponent;

  constructor(private _homeAction: HomeSearchActions, private _homeQuery: HomeSearchQuery) {
  }

  /**
   * Get the names OnInit
   */
  ngOnInit() {
    this.getNames();
    this._homeQuery.getHomes()
      .subscribe(homes => {
        this.homes = homes;
      });
  }

  getNames() {
    this._homeAction.search();
  }

  test() {
    this.myModal.close();
  }
}
