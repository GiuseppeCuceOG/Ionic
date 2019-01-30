var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { DishProvider } from '../dish/dish';
import { Storage } from '@ionic/storage';
import 'rxjs/add/operator/map';
/*
  Generated class for the FavoriteProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var FavoriteProvider = /** @class */ (function () {
    function FavoriteProvider(http, dishservice, storage) {
        var _this = this;
        this.http = http;
        this.dishservice = dishservice;
        this.storage = storage;
        console.log('Hello FavoriteProvider Provider');
        this.favorites = [];
        storage.get('favorites').then(function (favorites) {
            if (favorites) {
                console.log(favorites);
                _this.favorites = favorites;
            }
            else {
                console.log('Favorites not defined');
            }
        });
    }
    FavoriteProvider.prototype.addFavorite = function (id) {
        if (!this.isFavorite(id)) {
            this.favorites.push(id);
            this.storage.set('favorites', this.favorites);
        }
        return true;
    };
    FavoriteProvider.prototype.isFavorite = function (id) {
        return this.favorites.some(function (el) { return el === id; });
    };
    FavoriteProvider.prototype.getFavorites = function () {
        var _this = this;
        return this.dishservice.getDishes()
            .map(function (dishes) { return dishes.filter(function (dish) { return _this.favorites.some(function (el) { return el === dish.id; }); }); });
    };
    FavoriteProvider.prototype.deleteFavorite = function (id) {
        var index = this.favorites.indexOf(id);
        if (index >= 0) {
            this.favorites.splice(index, 1);
            this.storage.set('favorites', this.favorites);
            return this.getFavorites();
        }
        else {
            console.log('Delete non-existant favorite', id);
            return Observable.throw('Deleting non-existant favorite' + id);
        }
    };
    FavoriteProvider = __decorate([
        Injectable(),
        __metadata("design:paramtypes", [Http,
            DishProvider,
            Storage])
    ], FavoriteProvider);
    return FavoriteProvider;
}());
export { FavoriteProvider };
//# sourceMappingURL=favorite.js.map