import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class DataService {

  // inject the http service into the constructor
  constructor() {
    console.log('data service connected...');
  }

}
