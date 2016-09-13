import { Component } from '@angular/core';
import { VocaMobileService } from '../../biz/index';


@Component({
  moduleId: module.id,
  selector: 'voca-mobile',
  templateUrl: 'vocamobile.component.html',
  styleUrls: ['vocamobile.component.css']
})
export class VocaMobileComponent {
  word:string;

  constructor(private _vocaMobileService: VocaMobileService) {
    // _vocaMobileService.search().subscribe(data => console.log(data));
    _vocaMobileService.search('good').subscribe(data => console.log(data));
  }
};
