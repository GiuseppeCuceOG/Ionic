import { Component, OnInit, Inject } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Dish } from '../../shared/dish';
import { DishProvider } from '../../providers/dish/dish';
import { Promotion } from '../../shared/promotion';
import { PromotionProvider } from '../../providers/promotion/promotion';
import { Leader } from '../../shared/leader';
import { LeaderProvider } from '../../providers/leader/leader';
import { baseURL } from '../../shared/baseurl';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage implements OnInit{

  dish: Dish;
  promotion: Promotion;
  leader: Leader;
  dishErrMess: string;
  promoErrMess: string;
  leadErrMess: string;

  constructor(public navCtrl: NavController,
  	private dishservice: DishProvider,
  	private promotionservice: PromotionProvider,
  	private leaderservice: LeaderProvider,
  	@Inject('BaseURL') private BaseURL) {

  }

  ngOnInit() {
  	this.dishservice.getFeaturedDish()
  		.subscribe(
  			dish => this.dish = dish,
  			errmess => this.dishErrMess = <any>errmess
  		);
  	this.promotionservice.getFeaturedPromotion()
  		.subscribe(
  			promo => this.promotion = promo,
  			errmess => this.promoErrMess = <any>errmess
  		);
   	this.leaderservice.getFeaturedLeader()
  		.subscribe(
  			lead => this.leader = lead,
  			errmess => this.leadErrMess = <any>errmess
  		);
  }

}
