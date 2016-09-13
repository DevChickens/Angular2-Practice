/**
 * Created by mayajuni on 2016-08-08.
 */
import { Injectable } from '@angular/core';
import { Jsonp, URLSearchParams, Http } from '@angular/http';
// import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/of';


@Injectable()
export class VocaMobileService {
  constructor(private _http: Http, private _jsonp: Jsonp) { }

  search(word: string) {
    console.log('hm?');
    let params = new URLSearchParams();
    // let url = 'https://glosbe.com/gapi/translate?from=eng&dest=kor&format=json&phrase=from&pretty=true&callback=JSONP_CALLBACK';
    params.set('from', 'eng');
    params.set('dest', 'kor');
    params.set('phrase', word); // the user's search value
    params.set('pretty', 'true');
    params.set('format', 'json');
    params.set('callback', 'JSONP_CALLBACK');

    let url = 'https://glosbe.com/gapi/translate';

    return this._jsonp
      .get(url, { search: params })
      .map(response => response.json());
  }
}

