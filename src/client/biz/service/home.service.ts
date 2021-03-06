/**
 * Created by mayajuni on 2016-08-08.
 */
import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/of';
import {Home} from '../models/home.model';

/**
 * This class provides the NameList service with methods to read names and add names.
 */
@Injectable()
export class HomeService {
    constructor(private http: Http) {}

    search(): Observable<Home[]> {
        return this.http.get('/assets/data.json')
            .map((res: Response) => res.json());
    }
}

