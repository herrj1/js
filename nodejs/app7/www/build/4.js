webpackJsonp([4],{

/***/ 405:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddHoldingPageModule", function() { return AddHoldingPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(124);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__add_holding__ = __webpack_require__(406);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var AddHoldingPageModule = /** @class */ (function () {
    function AddHoldingPageModule() {
    }
    AddHoldingPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__add_holding__["a" /* AddHoldingPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__add_holding__["a" /* AddHoldingPage */]),
            ],
        })
    ], AddHoldingPageModule);
    return AddHoldingPageModule;
}());

//# sourceMappingURL=add-holding.module.js.map

/***/ }),

/***/ 406:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddHoldingPage; });
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



var AddHoldingPage = /** @class */ (function () {
    function AddHoldingPage(navCtrl, holdingsProvider) {
        this.navCtrl = navCtrl;
        this.holdingsProvider = holdingsProvider;
        this.cryptoUnavailable = false;
        this.checkingValidity = false;
    }
    AddHoldingPage.prototype.addHolding = function () {
        var _this = this;
        this.cryptoUnavailable = false;
        this.noConnection = false;
        this.checkingValidity = true;
        var holding = {
            crypto: this.cryptoCode,
            currency: this.displayCurrency,
            amount: this.amountHolding || 0
        };
        this.holdingsProvider.verifyHolding(holding).subscribe(function (result) {
            _this.checkingValidity = false;
            if (result.success) {
                _this.holdingsProvider.addHolding(holding);
                _this.navCtrl.pop();
            }
            else {
                _this.cryptoUnavailable = true;
            }
        }, function (err) {
            _this.checkingValidity = false;
            _this.checkingValidity = false;
        });
    };
    AddHoldingPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-add-holding',template:/*ion-inline-start:"C:\Users\swb\Documents\Projects\JS\ionic\app7\src\pages\add-holding\add-holding.html"*/'<ion-header>\n \n  <ion-navbar color="primary">\n    <ion-title>Add Holding</ion-title>\n  </ion-navbar>\n \n</ion-header>\n \n \n<ion-content padding>\n \n    <div class="message">\n \n        <p>To add a holding you will need to supply the appropriate symbol for the cryptocurrency, and the symbol for the currency you would like to display the values in.</p>\n \n        <p><strong>Note:</strong> Listed prices are estimated. Rates may vary significantly across different exchanges.</p>\n \n    </div>\n \n \n    <ion-list>\n \n        <ion-item>\n            <ion-label stacked>Crypto Code</ion-label>\n            <ion-input [(ngModel)]="cryptoCode" placeholder="(e.g. BTC, LTC, ETH)" type="text"></ion-input>\n        </ion-item>\n \n        <ion-item>\n            <ion-label stacked>Display Currency Code</ion-label>\n            <ion-input [(ngModel)]="displayCurrency" placeholder="(e.g. USD, CAD, AUD)" type="text"></ion-input>\n        </ion-item>\n \n        <ion-item>\n            <ion-label stacked>Amount Holding</ion-label>\n            <ion-input [(ngModel)]="amountHolding" type="number"></ion-input>\n        </ion-item>\n \n    </ion-list>  \n \n    <button ion-button full (click)="addHolding()" [disabled]="checkingValidity">Add Holding <ion-spinner *ngIf="checkingValidity"></ion-spinner></button>\n \n    <p class="error-message" *ngIf="cryptoUnavailable">Sorry, that combination is not currently available. Make sure to only include a single code.</p>\n	\n	<p class="error-message" *ngIf="noConnection">Sorry, you need to be online to add new holdings.</p>\n \n</ion-content>\n \n<ion-footer padding>\n \n    <p><strong>Note:</strong> This web application allows you to track your Cryptocurrency without creating an account. This means that all data is stored locally, and may be permanently deleted without warning.</p>\n \n</ion-footer>'/*ion-inline-end:"C:\Users\swb\Documents\Projects\JS\ionic\app7\src\pages\add-holding\add-holding.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__providers_holdings_holdings__["a" /* HoldingsProvider */]])
    ], AddHoldingPage);
    return AddHoldingPage;
}());

//# sourceMappingURL=add-holding.js.map

/***/ })

});
//# sourceMappingURL=4.js.map