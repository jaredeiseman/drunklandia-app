import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { env } from '../../environment';

/*
  Generated class for the RestaurantProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class RestaurantProvider {

  baseURI: string = env.apiEndpoint + 'restaurant';

  constructor(public http: HttpClient) {}

  public getRestaurants(): Promise<any> {
    return this.http.get(this.baseURI).toPromise();
  }

  public getAmenities(restaurantId: number): Promise<any> {
    return this.http.get(`${this.baseURI}_amenities?restaurant_id=${restaurantId}`).toPromise();
  }

}
