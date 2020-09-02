import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Label } from 'ng2-charts';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
 
  barChartLabels: Label[];
  
  constructor(private httpService: HttpClient) {
  }

 getPieChatData() {
  return this.httpService.get('./assets/piechart.json')
 }

 getUserData() {
   return this.httpService.get('./assets/usertable.json')
 }

 getHierarcchicalData() {
   return this.httpService.get('./assets/hierarchicalData.json')
 }

}
