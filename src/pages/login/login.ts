import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { AuthProvider } from '../../providers/auth/auth';
import { TabsPage } from '../tabs/tabs';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  username: string;
  password: string;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private authSvc: AuthProvider,
              private alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  private handleLoginFormSubmission():void {
    const credentials = {
      username: this.username.toLowerCase(),
      password: this.password
    }
    this.authSvc.login(credentials, () => {
      if (this.authSvc.isAuthenticated()) {
        this.navCtrl.push(TabsPage);
      } else {
        this.handleLoginFailure();
      }
    });
  }

  private handleLoginFailure() {
    const alert = this.alertCtrl.create({
      title: 'Login failed',
      subTitle: 'The credentials you provided were incorrect',
      buttons: ['Dismiss']
    });
    alert.present();
  }

}
