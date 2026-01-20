import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MyserviceService {
  serviceproperty = 'My Service Component';

  constructor() { }

  showTodayDate() {
    let ndate = new Date();
    return ndate;
  }
}
