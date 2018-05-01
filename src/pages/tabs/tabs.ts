import { Component } from '@angular/core';

import { MapPage } from '../map/map';
import { FavoritesPage } from '../favorites/favorites';
import { SettingsPage } from '../settings/settings';
import { AuthProvider } from '../../providers/auth/auth';
import { LoginPage } from '../login/login';
import { NavController } from 'ionic-angular';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  map = MapPage;
  favorites = FavoritesPage;
  settings = SettingsPage;

  constructor(private authSvc: AuthProvider, private navCtrl: NavController) {

  }

  ionViewCanEnter(): boolean {
    const authed = this.authSvc.isAuthenticated();
    if (!authed) this.navCtrl.push(LoginPage);
    return true;
  }
}
