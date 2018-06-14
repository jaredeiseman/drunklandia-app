import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RestaurantProvider } from '../../providers/restaurant/restaurant';
import { AuthProvider } from '../../providers/auth/auth';

/**
 * Generated class for the BarDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-bar-detail',
  templateUrl: 'bar-detail.html',
})
export class BarDetailPage {

  restaurant;
  amenities;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private restaurantSvc: RestaurantProvider,
              private authSvc: AuthProvider) {
  }

  ionViewDidLoad() {
    this.restaurant = this.navParams.data.restaurant;
    this.getAmenities();
    console.log(this.restaurant);
  }

  getAmenities():void {
    this.restaurantSvc.getAmenities(this.restaurant.id).then(res => {
      this.amenities = res.results;
      console.log(this.amenities);
    })
  }

  toggleFavorite(): void {
    const currentFavorites = this.authSvc.favorites;
    const restaurantId = this.restaurant.id;
    const newFavorites = currentFavorites.includes(restaurantId)
                       ? currentFavorites.filter(item => item !== restaurantId)
                       : currentFavorites.concat([restaurantId]);
    console.log(newFavorites);
    this.authSvc.updateMyFavorites(newFavorites);

  }

}
