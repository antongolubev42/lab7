import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the LeinstercountiesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-leinstercounties',
  templateUrl: 'leinstercounties.html',
})
export class LeinstercountiesPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  counties: string[] = ["Carlow", "Dublin", "Kildare",
  "Kilkenny", "Laois", "Longford", "Louth", "Meath",
  "Offaly", "Westmeath", "Wexford", "Wicklow"]
  
  ionViewDidLoad() {
    console.log('ionViewDidLoad LeinstercountiesPage');
  }

}
