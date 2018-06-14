import { Component } from '@angular/core';

import { MapPage } from '../map/map';
import { FavoritesPage } from '../favorites/favorites';
import { SettingsPage } from '../settings/settings';
import { ListViewPage } from '../list-view/list-view';
import { LoginPage } from '../login/login';

import { AuthProvider } from '../../providers/auth/auth';
import { NavController } from 'ionic-angular';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  map = MapPage;
  favorites = FavoritesPage;
  settings = SettingsPage;
  listView = ListViewPage;

  constructor(private authSvc: AuthProvider, private navCtrl: NavController) {

  }

  ionViewCanEnter(): boolean {
    const authed = this.authSvc.isAuthenticated();
    if (!authed) this.navCtrl.push(LoginPage);
    return true;
  }
}
