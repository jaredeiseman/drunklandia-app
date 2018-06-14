import { Component, Input } from '@angular/core';

/**
 * Generated class for the AmenityIconComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'amenity-icon',
  templateUrl: 'amenity-icon.html'
})
export class AmenityIconComponent {

  @Input() type: string;

  constructor() { }

}
