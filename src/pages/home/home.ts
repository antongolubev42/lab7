import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  OpenUlsterpage(){
    this.navCtrl.push('UlsterPage');
  }

  OpenLeinsterPage(){
    this.navCtrl.push('LeinsterPage');
  }

  OpenMunsterPage(){
    this.navCtrl.push('MunsterPage');
  }

  OpenConnaughtPage(){
    this.navCtrl.push('ConnaughtPage');
  }
}
