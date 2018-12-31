import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { Comment } from '../../shared/comment';
import { Dish } from '../../shared/dish';

/**
 * Generated class for the CommentPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-comment',
  templateUrl: 'comment.html',
})
export class CommentPage {

  commenting: FormGroup;
  comment: Comment;
  dish: Dish;

  constructor(public navCtrl: NavController,
  	public navParams: NavParams,
  	public viewCtrl: ViewController,
  	private formBuilder: FormBuilder) {
	  	this.commenting = this.formBuilder.group({
	  		author: ['', Validators.required],
	  		rating: 5,
	  		comment: ['', Validators.required]
	  	});
  }

	ionViewDidLoad() {
    	console.log('ionViewDidLoad CommentPage');
  	}

  	dismiss() {
  		this.comment = this.commenting.value;
  		this.viewCtrl.dismiss(this.comment);
  	}

	onSubmit() {
	    /*this.comment = this.commenting.value;
	    var event = new Date();
	    this.comment.date = event.toISOString();
	    this.dish.comments.push(this.comment);*/
	  	this.dismiss();
	}

}
