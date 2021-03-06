import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { EmailComposer } from '@ionic-native/email-composer';
import { CallNumber } from '@ionic-native/call-number';

/**
 * Generated class for the ContactPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html',
})
export class ContactPage {

  constructor(
  	public navCtrl: NavController,
  	public navParams: NavParams,
  	private emailComposer: EmailComposer,
    private callNumber: CallNumber) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ContactPage');
  }

  sendEmail() {

  	let email = {
  		to: 'giuseppecuce.og@gmail.com',
  		subject: '[ConFusion]: Query',
  		body: 'Dear Peppe',
  		isHtml: true
  	};

  	this.emailComposer.open(email);
  }

  callRestaurant() {
    this.callNumber.callNumber("1800101010", true)
      .then(res => console.log("Launched dialer", res))
      .catch(err => console.log("Error launching dialer", err))
  }

}
