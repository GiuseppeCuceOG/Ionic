import { Component, OnInit, Inject } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Leader } from '../../shared/leader';
import { LeaderProvider } from '../../providers/leader/leader';
import { baseURL } from '../../shared/baseurl';

/**
 * Generated class for the AboutPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-about',
  templateUrl: 'about.html',
})
export class AboutPage {
  
  leader: Leader[];
  errMess: string;

  constructor(public navCtrl: NavController,
  	public navParams: NavParams,
  	private leaderservice: LeaderProvider,
  	@Inject('BaseURL') private BaseURL) {
  }

  ngOnInit() {
  	this.leaderservice.getLeaders()
  		.subscribe(
  			lead => this.leader = lead,
  			err => this.errMess = err
  		)
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AboutPage');
  }

}
