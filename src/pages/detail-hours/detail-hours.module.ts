import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DetailHoursPage } from './detail-hours';

@NgModule({
  declarations: [
    DetailHoursPage,
  ],
  imports: [
    IonicPageModule.forChild(DetailHoursPage),
  ],
})
export class DetailHoursPageModule {}
