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
import { baseURL } from '../../shared/baseurl';
import { ProcessHttpmsgProvider } from '../process-httpmsg/process-httpmsg';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/delay';
import 'rxjs/add/operator/catch';
/*
  Generated class for the PromotionProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var PromotionProvider = /** @class */ (function () {
    function PromotionProvider(http, processHttpmsgService) {
        this.http = http;
        this.processHttpmsgService = processHttpmsgService;
        console.log('Hello PromotionProvider Provider');
    }
    PromotionProvider.prototype.getPromotions = function () {
        var _this = this;
        return this.http.get(baseURL + 'promotions')
            .map(function (res) {
            return _this.processHttpmsgService.extractData(res);
        })
            .catch(function (error) {
            return _this.processHttpmsgService.handleError(error);
        });
    };
    PromotionProvider.prototype.getPromotion = function (id) {
        var _this = this;
        return this.http.get(baseURL + 'promotions/' + id)
            .map(function (res) {
            return _this.processHttpmsgService.extractData(res);
        })
            .catch(function (error) {
            return _this.processHttpmsgService.handleError(error);
        });
    };
    PromotionProvider.prototype.getFeaturedPromotion = function () {
        var _this = this;
        return this.http.get(baseURL + 'promotions?featured=true')
            .map(function (res) {
            return _this.processHttpmsgService.extractData(res)[0];
        })
            .catch(function (error) {
            return _this.processHttpmsgService.handleError(error);
        });
    };
    PromotionProvider = __decorate([
        Injectable(),
        __metadata("design:paramtypes", [Http,
            ProcessHttpmsgProvider])
    ], PromotionProvider);
    return PromotionProvider;
}());
export { PromotionProvider };
//# sourceMappingURL=promotion.js.map