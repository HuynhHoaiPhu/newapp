import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
  public age = 10;
  constructor() { }
IncreaseAge() {
  this.age++;
}
Descrease() {
  this.age--;
}
}
