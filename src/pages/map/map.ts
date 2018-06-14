import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RestaurantProvider } from '../../providers/restaurant/restaurant';
import { Restaurant } from '../../models/restaurant.model';

/**
 * Generated class for the MapPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-map',
  templateUrl: 'map.html',
})
export class MapPage {

  restaurants: any = [];

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private mapSvc: RestaurantProvider) {
  }

  ionViewDidLoad() {
    this.mapSvc.getRestaurants().then(res => {
      this.restaurants = res.results.map((restaurant) => {
        return new Restaurant(restaurant);
      });
      console.log(this.restaurants);
    }).catch(err => {
      console.log(err);
    });
  }

  parseResults() {
    // return this.restaurants.map(restaurant => {
    //   let new = Object.assign({}, restaurant);
    // });
  }

}
