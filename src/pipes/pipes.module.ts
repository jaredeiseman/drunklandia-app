import { NgModule } from '@angular/core';
import { PhoneNumberPipe } from './phone-number/phone-number';
@NgModule({
	declarations: [PhoneNumberPipe],
	imports: [],
	exports: [PhoneNumberPipe]
})
export class PipesModule {}
