import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ConnaughtPage } from './connaught';
import { ConnaughtcountiesPage } from '../connaughtcounties/connaughtcounties';

@NgModule({
  declarations: [
    ConnaughtPage,ConnaughtcountiesPage    
  ],
  imports: [
    IonicPageModule.forChild(ConnaughtPage),
  ],
})
export class ConnaughtPageModule {}
