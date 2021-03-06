import { Http } from '@angular/http';
import { Response } from '@angular/http';
import { Leader } from '../../shared/leader';
import { baseURL } from '../../shared/baseurl';
import { ProcessHttpmsgProvider } from '../process-httpmsg/process-httpmsg';
import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/delay';
import 'rxjs/add/operator/catch';

/*
  Generated class for the LeaderProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class LeaderProvider {

  constructor(public http: Http,
  	private processHttpmsgService: ProcessHttpmsgProvider) {
    console.log('Hello LeaderProvider Provider');
  }

  getLeaders(): Observable<Leader[]> {
  	return this.http.get(baseURL + 'leadership')
  		.map(res => {
  			return this.processHttpmsgService.extractData(res)
  		})
  		.catch(error => { 
  			return this.processHttpmsgService.handleError(error)
  		});
  }

  getLeader(id: number): Observable<Leader> {
 	return this.http.get(baseURL + 'leadership/' + id)
  		.map(res => {
  			return this.processHttpmsgService.extractData(res)
  		})
  		.catch(error => { 
  			return this.processHttpmsgService.handleError(error)
  		});
  }

  getFeaturedLeader(): Observable<Leader> {
 	return this.http.get(baseURL + 'leadership?featured=true')
  		.map(res => {
  			return this.processHttpmsgService.extractData(res)[0]
  		})
  		.catch(error => { 
  			return this.processHttpmsgService.handleError(error)
  		});
  }

}
