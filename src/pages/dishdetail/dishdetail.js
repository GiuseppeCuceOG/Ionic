var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
import { Component, Inject } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController, ActionSheetController, ModalController } from 'ionic-angular';
import { CommentPage } from '../comment/comment';
import { FavoriteProvider } from '../../providers/favorite/favorite';
/**
 * Generated class for the DishdetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var DishdetailPage = /** @class */ (function () {
    function DishdetailPage(navCtrl, navParams, actionCtrl, BaseURL, favoriteservice, toastCtrl, modalCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.actionCtrl = actionCtrl;
        this.BaseURL = BaseURL;
        this.favoriteservice = favoriteservice;
        this.toastCtrl = toastCtrl;
        this.modalCtrl = modalCtrl;
        this.favorite = false;
        this.dish = navParams.get('dish');
        this.favorite = this.favoriteservice.isFavorite(this.dish.id);
        this.numcomments = this.dish.comments.length;
        var total = 0;
        this.dish.comments.forEach(function (comment) { return total += comment.rating; });
        this.avgstars = (total / this.numcomments).toFixed(2);
    }
    DishdetailPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad DishdetailPage');
    };
    DishdetailPage.prototype.addToFavorites = function () {
        console.log('Adding to Favorites', this.dish.id);
        this.favorite = this.favoriteservice.addFavorite(this.dish.id);
        this.toastCtrl.create({
            message: 'Dish ' + this.dish.id + ' added as a favorite successfully',
            position: 'middle',
            duration: 3000
        }).present();
    };
    DishdetailPage.prototype.openComment = function () {
        var _this = this;
        var modal = this.modalCtrl.create(CommentPage);
        modal.onDidDismiss(function (comment) { return _this.insertComment(comment); });
        modal.present();
    };
    DishdetailPage.prototype.insertComment = function (comment) {
        this.comment = comment;
        this.comment.date = new Date().toISOString();
        this.dish.comments.push(this.comment);
    };
    DishdetailPage.prototype.triggerActionSheets = function () {
        var _this = this;
        var actionSheet = this.actionCtrl.create({
            title: 'Select Actions',
            buttons: [
                {
                    text: 'Add to Favorites',
                    handler: function () {
                        _this.addToFavorites();
                    }
                },
                {
                    text: 'Add your Comment',
                    handler: function () {
                        _this.openComment();
                    }
                },
                {
                    text: 'Cancel',
                    role: 'cancel',
                    handler: function () {
                        console.log('Cancel clicked');
                    }
                }
            ]
        });
        actionSheet.present();
    };
    DishdetailPage = __decorate([
        IonicPage(),
        Component({
            selector: 'page-dishdetail',
            templateUrl: 'dishdetail.html',
        }),
        __param(3, Inject('BaseURL')),
        __metadata("design:paramtypes", [NavController,
            NavParams,
            ActionSheetController, Object, FavoriteProvider,
            ToastController,
            ModalController])
    ], DishdetailPage);
    return DishdetailPage;
}());
export { DishdetailPage };
//# sourceMappingURL=dishdetail.js.map