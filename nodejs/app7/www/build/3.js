webpackJsonp([3],{

/***/ 407:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageModule", function() { return HomePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(124);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home__ = __webpack_require__(408);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var HomePageModule = /** @class */ (function () {
    function HomePageModule() {
    }
    HomePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__home__["a" /* HomePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__home__["a" /* HomePage */]),
            ],
        })
    ], HomePageModule);
    return HomePageModule;
}());

//# sourceMappingURL=home.module.js.map

/***/ }),

/***/ 408:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(124);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_holdings_holdings__ = __webpack_require__(240);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/*
 * step 1: ionic g page AddHolding
 * step 2: ionic g provider Holdings
 * step 3: create home.module.ts file
 *
*/
var HomePage = /** @class */ (function () {
    function HomePage(navCtrl, holdingsProvider) {
        this.navCtrl = navCtrl;
        this.holdingsProvider = holdingsProvider;
    }
    HomePage.prototype.ionViewDidLoad = function () {
        this.holdingsProvider.loadHoldings();
    };
    HomePage.prototype.addHolding = function () {
        this.navCtrl.push('AddHoldingPage');
    };
    HomePage.prototype.goToCryptonator = function () {
        window.open('https://www.cryptonator.com/api', '_system');
    };
    HomePage.prototype.refreshPrices = function (refresher) {
        this.holdingsProvider.fetchPrices(refresher);
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"C:\Users\swb\Documents\Projects\JS\ionic\app7\src\pages\home\home.html"*/'<ion-header>\n  <ion-navbar color="primary">\n    <ion-title>\n      FullArrayCrypto\n    </ion-title>\n    <ion-buttons end>\n        <button ion-button icon-only (click)="addHolding()"><ion-icon name="add"></ion-icon></button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n \n<ion-content>\n \n    <div class="message" *ngIf="!holdingsProvider.holdings.length">\n \n        <p><strong>cryptoPWA</strong> is a <strong>P</strong>rogressive <strong>W</strong>eb <strong>A</strong>pplication that allows you to keep track of the approximate worth of your cryptocurency portfolio.</p>\n \n        <p>A PWA is like a normal application from the app store, but you can access it directly through the web. You may also add this page to your home screen to launch it like your other applications.</p>\n \n        <p>No account required, just hit the button below to start tracking your coins in whatever currency you wish!</p>\n \n        <button ion-button full (click)="addHolding()" color="primary">Add Coins</button>\n \n    </div>\n \n    <ion-refresher *ngIf="holdingsProvider.holdings.length" (ionRefresh)="refreshPrices($event)">\n        <ion-refresher-content></ion-refresher-content>\n    </ion-refresher>\n	<p class="warning-message" *ngIf="holdingsProvider.pricesUnavailable">Could not fetch rates. Make sure you are connected to the Internet or try again later.</p>\n    <ion-list no-lines>\n \n        <ion-item-sliding *ngFor="let holding of holdingsProvider.holdings">\n \n          <ion-item class="holding">\n            <p><strong>{{holding.crypto}}/{{holding.currency}}</strong></p>\n            <p class="amount"><strong>Coins:</strong> {{holding.amount}} <strong>Value:</strong> {{holding.value}}</p>\n            <p *ngIf="holding.value > 0" class="value">{{holding.amount * holding.value}}</p>\n          </ion-item>\n \n          <ion-item-options>\n            <button ion-button icon-only color="danger" (click)="holdingsProvider.removeHolding(holding)"><ion-icon name="trash"></ion-icon></button>\n          </ion-item-options>\n \n        </ion-item-sliding>\n \n    </ion-list>\n \n</ion-content>\n \n<ion-footer padding>\n \n    <p><strong>Disclaimer:</strong> Do not use this application to make investment decisions. Displayed prices may not reflect actual prices.</p>\n \n</ion-footer>'/*ion-inline-end:"C:\Users\swb\Documents\Projects\JS\ionic\app7\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__providers_holdings_holdings__["a" /* HoldingsProvider */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ })

});
//# sourceMappingURL=3.js.map