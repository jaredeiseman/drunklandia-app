import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DetailDealsPage } from './detail-deals';

@NgModule({
  declarations: [
    DetailDealsPage,
  ],
  imports: [
    IonicPageModule.forChild(DetailDealsPage),
  ],
})
export class DetailDealsPageModule {}
