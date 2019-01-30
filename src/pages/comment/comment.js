var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { Validators, FormBuilder } from '@angular/forms';
/**
 * Generated class for the CommentPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var CommentPage = /** @class */ (function () {
    function CommentPage(navCtrl, navParams, viewCtrl, formBuilder) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.formBuilder = formBuilder;
        this.commenting = this.formBuilder.group({
            author: ['', Validators.required],
            rating: 5,
            comment: ['', Validators.required]
        });
    }
    CommentPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad CommentPage');
    };
    CommentPage.prototype.dismiss = function () {
        this.comment = this.commenting.value;
        this.viewCtrl.dismiss(this.comment);
    };
    CommentPage.prototype.onSubmit = function () {
        /*this.comment = this.commenting.value;
        var event = new Date();
        this.comment.date = event.toISOString();
        this.dish.comments.push(this.comment);*/
        this.dismiss();
    };
    CommentPage = __decorate([
        IonicPage(),
        Component({
            selector: 'page-comment',
            templateUrl: 'comment.html',
        }),
        __metadata("design:paramtypes", [NavController,
            NavParams,
            ViewController,
            FormBuilder])
    ], CommentPage);
    return CommentPage;
}());
export { CommentPage };
//# sourceMappingURL=comment.js.map