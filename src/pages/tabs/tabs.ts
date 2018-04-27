import { Component } from '@angular/core';

import { MapPage } from '../map/map';
import { FavoritesPage } from '../favorites/favorites';
import { SettingsPage } from '../settings/settings';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  map = MapPage;
  favorites = FavoritesPage;
  settings = SettingsPage;

  constructor() {

  }
}
