import { Component, Inject } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController, ActionSheetController, ModalController } from 'ionic-angular';
import { Dish } from '../../shared/dish';
import { Comment } from '../../shared/comment';
import { CommentPage } from '../comment/comment';
import { FavoriteProvider } from '../../providers/favorite/favorite';

/**
 * Generated class for the DishdetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-dishdetail',
  templateUrl: 'dishdetail.html',
})
export class DishdetailPage {
  
  dish: Dish;
  comment: Comment;
  errMess: string;
  avgstars: string;
  numcomments: number;
  favorite: boolean = false;

  constructor(public navCtrl: NavController,
  	public navParams: NavParams,
  	private actionCtrl: ActionSheetController,
  	@Inject('BaseURL') private BaseURL,
  	private favoriteservice: FavoriteProvider,
  	private toastCtrl: ToastController,
  	private modalCtrl: ModalController) {

  	this.dish = navParams.get('dish');
  	this.favorite = this.favoriteservice.isFavorite(this.dish.id);
  	this.numcomments = this.dish.comments.length;
  	let total = 0;
  	this.dish.comments.forEach(comment => total += comment.rating);
  	this.avgstars = (total/this.numcomments).toFixed(2);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DishdetailPage');
  }

  addToFavorites() {
  	console.log('Adding to Favorites', this.dish.id);
  	this.favorite = this.favoriteservice.addFavorite(this.dish.id);
  	this.toastCtrl.create({
  		message: 'Dish ' + this.dish.id + ' added as a favorite successfully',
  		position: 'middle',
  		duration: 3000
  	}).present();
  }

  openComment() {
    let modal = this.modalCtrl.create(CommentPage);
    modal.onDidDismiss(comment => this.insertComment(comment));
    modal.present();
  }

  insertComment(comment: Comment) {
    this.comment = comment;    
    this.comment.date = new Date().toISOString();
    this.dish.comments.push(this.comment);
  }

  triggerActionSheets() {
  	const actionSheet = this.actionCtrl.create({
  		title: 'Select Actions',
  		buttons: [
  			{
  				text: 'Add to Favorites',
  				handler: () => {
  					this.addToFavorites();
  				}
  			},
  			{
  				text: 'Add your Comment',
  				handler: () => {
  					this.openComment();
  				}
  			},
  			{
  				text: 'Cancel',
  				role: 'cancel',
  				handler: () => {
  					console.log('Cancel clicked');
  				}
  			}
  		]
  	});
  	actionSheet.present();
  }

}
