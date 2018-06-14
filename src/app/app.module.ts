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
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { LoginPage } from '../pages/login/login';
import { RestaurantProvider } from '../providers/restaurant/restaurant';
import { ListViewPage } from '../pages/list-view/list-view';
import { BarDetailPage } from '../pages/bar-detail/bar-detail';
import { PipesModule } from '../pipes/pipes.module';
import { PhoneNumberPipe } from '../pipes/phone-number/phone-number';
import { AmenityIconComponent } from '../components/amenity-icon/amenity-icon';
import { TokenInterceptor } from '../providers/auth/token.interceptor';

@NgModule({
  declarations: [
    MyApp,
    TabsPage,
    MapPage,
    SettingsPage,
    FavoritesPage,
    LoginPage,
    ListViewPage,
    BarDetailPage,
    AmenityIconComponent
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AgmCoreModule.forRoot({
      apiKey: env.googleMapsAPIKey
    }),
    HttpClientModule,
    PipesModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    TabsPage,
    MapPage,
    SettingsPage,
    FavoritesPage,
    LoginPage,
    ListViewPage,
    BarDetailPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AuthProvider,
    HttpClientModule,
    RestaurantProvider,
    PhoneNumberPipe,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    }
  ]
})
export class AppModule {}
