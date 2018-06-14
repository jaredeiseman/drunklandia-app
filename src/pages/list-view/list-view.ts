import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RestaurantProvider } from '../../providers/restaurant/restaurant';
import { BarDetailPage } from '../bar-detail/bar-detail';
import { AuthProvider } from '../../providers/auth/auth';

/**
 * Generated class for the ListViewPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-list-view',
  templateUrl: 'list-view.html',
})
export class ListViewPage {

  restaurants: any[];

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private restaurantSvc: RestaurantProvider,
              private authSvc: AuthProvider) {
  }

  ionViewDidLoad() {
    this.getRestaurants()
    this.authSvc.getMyFavorites();
  }

  getRestaurants(): void {
    this.restaurantSvc.getRestaurants().then(res => {
      this.restaurants = res.results;
    }).catch(err => { console.log(err); });
  }

  restaurantClicked(restaurant): void {
    this.navCtrl.push(BarDetailPage, {
      restaurant: restaurant
    });
  }

}
