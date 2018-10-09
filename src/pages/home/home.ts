import { Component, ViewChild,ElementRef } from '@angular/core';
import { NavController, Platform } from 'ionic-angular';
import { ListPage } from '../list/list';
import  { MapPage } from '../map/map';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  tab1Root: any = MapPage;
  tab2Root: any = ListPage;

  constructor(public navCtrl: NavController) {

  }

}
