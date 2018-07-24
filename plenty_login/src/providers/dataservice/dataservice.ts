import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from "rxjs/Observable";
import { Subject } from 'rxjs';
import 'rxjs/add/observable/of';
import { PlthttpProvider } from './../plthttp/plthttp';

@Injectable()
export class DataserviceProvider {

  constructor(
    public http: HttpClient,
    private httpService: PlthttpProvider
  ) {
    console.log('Hello DataserviceProvider Provider');
  }

  // MODELS //
  

  // STREAMS //
  private pageTitleSubject: Subject<string> = new Subject<string>();
  public pageTitleStream: Observable<string> = this.pageTitleSubject.asObservable();

  private menuOptionsSubject: Subject<string> = new Subject<string>();
  public menuOptionsStream: Observable<string> = this.menuOptionsSubject.asObservable();

  private currentProjecGuidtSubject: Subject<string> = new Subject<string>();
  public currentProjecGuidStream: Observable<string> = this.currentProjecGuidtSubject.asObservable();

  private currentRetailercGuidtSubject: Subject<string> = new Subject<string>();
  public currentRetailerGuidStream: Observable<string> = this.currentRetailercGuidtSubject.asObservable();



}
