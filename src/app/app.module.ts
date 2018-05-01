import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { MapPage } from '../pages/map/map';
import { SettingsPage } from '../pages/settings/settings';
import { FavoritesPage } from '../pages/favorites/favorites';

import { AgmCoreModule } from '@agm/core';
import { AuthProvider } from '../providers/auth/auth';

import { env } from '../environment';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { LoginPage } from '../pages/login/login';

@NgModule({
  declarations: [
    MyApp,
    TabsPage,
    MapPage,
    SettingsPage,
    FavoritesPage,
    LoginPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AgmCoreModule.forRoot({
      apiKey: env.googleMapsAPIKey
    }),
    HttpClientModule,
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    TabsPage,
    MapPage,
    SettingsPage,
    FavoritesPage,
    LoginPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AuthProvider,
    HttpClientModule,
  ]
})
export class AppModule {}
