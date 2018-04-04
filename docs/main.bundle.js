webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_root_slide_root_slide_component__ = __webpack_require__("./src/app/components/root-slide/root-slide.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    { path: '', redirectTo: '/slide/1', pathMatch: 'full' },
    { path: 'slide/:id', component: __WEBPACK_IMPORTED_MODULE_2__components_root_slide_root_slide_component__["a" /* RootSlideComponent */] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forRoot(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<app-search></app-search>\n\n<app-controls\n  (addSlide)=\"onAddSlide($event)\"\n  [slide]=\"slides[currentSlideId - 1]\"\n  (editSlide)=\"onEditSlide($event)\"\n>\n</app-controls>\n\n<app-sidebar\n  [currentSlideId]=\"currentSlideId\"\n  [slides]=\"slides\"\n  (onDeleteSlide)=\"onDeleteSlide($event)\"\n>\n</app-sidebar>\n\n<div class=\"content\">\n  <router-outlet></router-outlet>\n</div>\n<app-footer [currentSlideId]=\"currentSlideId\" [slides]=\"slides.length\" ></app-footer>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_slide_service__ = __webpack_require__("./src/app/services/slide.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AppComponent = /** @class */ (function () {
    function AppComponent(router, slideService) {
        this.router = router;
        this.slideService = slideService;
        this.slides = [];
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.getSlides();
        this.router.events.subscribe(function (event) {
            if (event instanceof __WEBPACK_IMPORTED_MODULE_2__angular_router__["d" /* RoutesRecognized */]) {
                _this.currentSlideId = Number(event.state.root.firstChild.params.id);
            }
        });
    };
    AppComponent.prototype.getSlides = function () {
        var _this = this;
        this.slideService.getSlides()
            .subscribe(function (slides) { return _this.slides = slides; });
    };
    AppComponent.prototype.onDeleteSlide = function (slide) {
        this.slides = this.slides.filter(function (h) { return h !== slide; });
        this.slideService.deleteSlide(slide).subscribe();
        if (slide.id === this.currentSlideId) {
            this.router.navigate(["/slide/" + this.slides[0].id]);
        }
    };
    AppComponent.prototype.onAddSlide = function () {
        var _this = this;
        var newId = this.slides[this.slides.length - 1].id + 1;
        var defaultSlide = {
            id: newId,
            title: "Slide" + newId,
            template: "<p>Slide" + newId + "</p>"
        };
        this.slideService.addSlide(defaultSlide)
            .subscribe(function (slide) {
            _this.slides.push(slide);
        });
    };
    AppComponent.prototype.onEditSlide = function (slide) {
        this.slideService.updateSlide(slide);
        document.getElementsByClassName('content-slide')[0].innerHTML = slide.template;
    };
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_1__services_slide_service__["a" /* SlideService */]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular_in_memory_web_api__ = __webpack_require__("./node_modules/angular-in-memory-web-api/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__in_memory_data_service__ = __webpack_require__("./src/app/in-memory-data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_routing_app_routing_module__ = __webpack_require__("./src/app/app-routing/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_common_footer_footer_component__ = __webpack_require__("./src/app/components/common/footer/footer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_common_sidebar_sidebar_component__ = __webpack_require__("./src/app/components/common/sidebar/sidebar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_common_search_search_component__ = __webpack_require__("./src/app/components/common/search/search.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_root_slide_root_slide_component__ = __webpack_require__("./src/app/components/root-slide/root-slide.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__services_slide_service__ = __webpack_require__("./src/app/services/slide.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__directives_template_directive__ = __webpack_require__("./src/app/directives/template.directive.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_controls_controls_component__ = __webpack_require__("./src/app/components/controls/controls.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_8__components_common_footer_footer_component__["a" /* FooterComponent */],
                __WEBPACK_IMPORTED_MODULE_9__components_common_sidebar_sidebar_component__["a" /* SidebarComponent */],
                __WEBPACK_IMPORTED_MODULE_10__components_common_search_search_component__["a" /* SearchComponent */],
                __WEBPACK_IMPORTED_MODULE_13__directives_template_directive__["a" /* TemplateDirective */],
                __WEBPACK_IMPORTED_MODULE_11__components_root_slide_root_slide_component__["a" /* RootSlideComponent */],
                __WEBPACK_IMPORTED_MODULE_14__components_controls_controls_component__["a" /* ControlsComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_6__app_routing_app_routing_module__["a" /* AppRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_6__app_routing_app_routing_module__["a" /* AppRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["c" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                // The HttpClientInMemoryWebApiModule module intercepts HTTP requests
                // and returns simulated server responses.
                // Remove it when a real server is ready to receive requests.
                __WEBPACK_IMPORTED_MODULE_4_angular_in_memory_web_api__["a" /* HttpClientInMemoryWebApiModule */].forRoot(__WEBPACK_IMPORTED_MODULE_5__in_memory_data_service__["a" /* InMemoryDataService */] //, { dataEncapsulation: false }
                )
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_12__services_slide_service__["a" /* SlideService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/common/footer/footer.component.css":
/***/ (function(module, exports) {

module.exports = ".footer {\n  height: 60px;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: space-evenly;\n      -ms-flex-pack: space-evenly;\n          justify-content: space-evenly;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  background: rgba(226,226,226,.5);\n  text-transform: uppercase;\n  position: fixed;\n  width: 100%;\n  bottom: 0;\n  left: 0;\n  font-size: 16px;\n}\n\nbutton {\n  width: 100px;\n  height: 50px;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-transition: .5s ease;\n  transition: .5s ease;\n  -webkit-box-shadow: 0 10px 6px -6px #777;\n          box-shadow: 0 10px 6px -6px #777;\n  border: 1px solid rgba(226,226,226,.5);\n  outline: none;\n  padding: 0;\n  background: none;\n}\n\n.button:hover {\n  cursor: pointer;\n  background: rgba(226,226,226,.5);\n}\n"

/***/ }),

/***/ "./src/app/components/common/footer/footer.component.html":
/***/ (function(module, exports) {

module.exports = "<footer>\n<div class=\"footer\" *ngIf=\"currentSlideId !== null && slides\">\n  <button (click)=\"goBack()\" [disabled]=\"currentSlideId === 1\">\n    <- Prev\n  </button>\n  <div>\n    {{currentSlideId}} / {{slides}}\n  </div>\n  <button routerLink=\"/slide/{{currentSlideId + 1}}\" [disabled]=\"currentSlideId === slides\">\n    Next ->\n  </button>\n</div>\n</footer>\n"

/***/ }),

/***/ "./src/app/components/common/footer/footer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var FooterComponent = /** @class */ (function () {
    function FooterComponent(location) {
        this.location = location;
    }
    FooterComponent.prototype.goBack = function () {
        this.location.back();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Number)
    ], FooterComponent.prototype, "currentSlideId", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Number)
    ], FooterComponent.prototype, "slides", void 0);
    FooterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-footer',
            template: __webpack_require__("./src/app/components/common/footer/footer.component.html"),
            styles: [__webpack_require__("./src/app/components/common/footer/footer.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common__["f" /* Location */]])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/components/common/search/search.component.css":
/***/ (function(module, exports) {

module.exports = ".search {\n  position: fixed;\n  width: 200px;\n  height: 75px;\n  background: rgba(226,226,226,.5);\n  padding-bottom: 0;\n  -webkit-transition: .5s ease;\n  transition: .5s ease;\n  top: 25px;\n  right: 25px;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: space-evenly;\n      -ms-flex-pack: space-evenly;\n          justify-content: space-evenly;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n}\n\n.search-result {\n  width: 200px;\n  list-style: none;\n  margin: 0;\n  padding: 0;\n  position: fixed;\n  top: 115px;\n  right: 25px;\n  background: rgba(226,226,226,.5);\n}\n\n.search-slide {\n  padding: 10px;\n  -webkit-transition: .5s ease;\n  transition: .5s ease;\n  border: 1px solid rgba(226,226,226,.5);\n}\n\n.search-slide:hover {\n  -webkit-box-shadow: 0 10px 6px -6px #777;\n          box-shadow: 0 10px 6px -6px #777;\n  cursor: pointer;\n}\n"

/***/ }),

/***/ "./src/app/components/common/search/search.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"search\">\n  <label for=\"search\">Type Title</label>\n  <input #searchBox type=\"text\" name=\"search\" id=\"search\" (keyup)=\"search(searchBox.value)\" (focusout)=\"onFocusLeave()\">\n\n  <ul class=\"search-result\" *ngIf=\"focus\">\n    <li *ngFor=\"let slide of slides | async\" routerLink=\"/slide/{{slide.id}}\" class=\"search-slide\">\n      {{slide.title}}\n    </li>\n  </ul>\n</div>\n"

/***/ }),

/***/ "./src/app/components/common/search/search.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__ = __webpack_require__("./node_modules/rxjs/_esm5/Subject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_operators__ = __webpack_require__("./node_modules/rxjs/_esm5/operators.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_slide_service__ = __webpack_require__("./src/app/services/slide.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SearchComponent = /** @class */ (function () {
    function SearchComponent(slideService) {
        this.slideService = slideService;
        this.searchTerms = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__["a" /* Subject */]();
    }
    // Push a search term into the observable stream.
    SearchComponent.prototype.search = function (term) {
        this.focus = true;
        this.searchTerms.next(term);
    };
    SearchComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.slides = this.searchTerms.pipe(
        // wait 300ms after each keystroke before considering the term
        Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__["b" /* debounceTime */])(300), 
        // ignore new term if same as previous term
        Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__["c" /* distinctUntilChanged */])(), 
        // switch to new search observable each time the term changes
        Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__["d" /* switchMap */])(function (term) { return _this.slideService.searchSlides(term); }));
    };
    SearchComponent.prototype.onFocusLeave = function () {
        this.focus = false;
    };
    SearchComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-search',
            template: __webpack_require__("./src/app/components/common/search/search.component.html"),
            styles: [__webpack_require__("./src/app/components/common/search/search.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__services_slide_service__["a" /* SlideService */]])
    ], SearchComponent);
    return SearchComponent;
}());



/***/ }),

/***/ "./src/app/components/common/sidebar/sidebar.component.css":
/***/ (function(module, exports) {

module.exports = ".sidebar {\n  position: fixed;\n  width: 200px;\n  height: calc(100% - 30px);\n  background: rgba(226,226,226,.5);\n  padding: 30px 10px;\n  padding-bottom: 0;\n  -webkit-transition: .5s ease;\n  transition: .5s ease;\n  top: 0;\n  left: 0;\n}\n\n.slides-container {\n  width: 100%;\n  height: 100%;\n  padding: 0;\n  margin: 0;\n  list-style: none;\n  overflow-y: scroll;\n}\n\n.slide {\n  position: relative;\n  width: 100%;\n  height: 100px;\n  margin-bottom: 25px;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  background: #ffff;\n  -webkit-transition: .5s ease;\n  transition: .5s ease;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  outline: none;\n  -webkit-box-shadow: 0 10px 6px -6px #777;\n          box-shadow: 0 10px 6px -6px #777;\n  border: 1px solid rgba(226,226,226,.5);\n}\n\n.slide:hover {\n  cursor: pointer;\n  background: rgba(226,226,226,.5);\n}\n\n.slide--current {\n  background: rgba(226,226,226,.5);\n}\n\n.slide--current p {\n  margin-bottom: 0;\n}\n\n.delete {\n  width: 25px;\n  height: 25px;\n  line-height: 25px;\n  position: absolute;\n  right: 0;\n  top: 5px;\n  text-align: center;\n  -webkit-transition: .5s ease;\n  transition: .5s ease;\n}\n\n.delete:hover {\n  background: rgba(226, 0, 5, 0.5);\n}\n"

/***/ }),

/***/ "./src/app/components/common/sidebar/sidebar.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"sidebar\">\n  <ul class=\"slides-container\" *ngIf=\"slides\">\n    <li\n      *ngFor=\"let slide of slides\"\n      [ngClass]=\"{\n      'slide':true,\n      'slide--current':currentSlideId === slide.id\n      }\"\n      routerLink=\"/slide/{{slide.id}}\"\n    >\n      <span class=\"delete\" (click)=\"deleteHandler(slide)\">X</span>\n      {{slide.id - 1}}. {{slide.title}}\n      <p *ngIf=\"currentSlideId === slide.id\">\n        Current Slide\n      </p>\n    </li>\n  </ul>\n</div>\n"

/***/ }),

/***/ "./src/app/components/common/sidebar/sidebar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SidebarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SidebarComponent = /** @class */ (function () {
    function SidebarComponent() {
        this.onDeleteSlide = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
    }
    SidebarComponent.prototype.deleteHandler = function (slide) {
        this.onDeleteSlide.emit(slide);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Number)
    ], SidebarComponent.prototype, "currentSlideId", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Array)
    ], SidebarComponent.prototype, "slides", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* Output */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */])
    ], SidebarComponent.prototype, "onDeleteSlide", void 0);
    SidebarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-sidebar',
            template: __webpack_require__("./src/app/components/common/sidebar/sidebar.component.html"),
            styles: [__webpack_require__("./src/app/components/common/sidebar/sidebar.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], SidebarComponent);
    return SidebarComponent;
}());



/***/ }),

/***/ "./src/app/components/controls/controls.component.css":
/***/ (function(module, exports) {

module.exports = ".controls {\n  width: 140px;\n  height: 75px;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-pack: distribute;\n      justify-content: space-around;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  position: fixed;\n  top: 25px;\n  right: 250px;\n}\n\n.control-button {\n  width: 50px;\n  height: 50px;\n  font-size: 30px;\n  padding: 0;\n  margin: 0;\n  border: 0;\n  background: rgba(226,226,226,.5);\n  border-radius: 25px;\n  -webkit-transition: .5s ease;\n  transition: .5s ease;\n  outline: none;\n}\n\nbutton:hover {\n  -webkit-box-shadow: 0 10px 6px -6px #777;\n          box-shadow: 0 10px 6px -6px #777;\n  cursor: pointer;\n}\n\n.edit-window {\n  width: 600px;\n  height: 420px;\n  padding: 15px;\n  background: rgba(226,226,226,1);\n  position: fixed;\n  top: calc(50% - 210px);\n  left: calc(50% - 300px);\n  z-index: 10;\n}\n\n.edit-container {\n  margin-bottom: 25px;\n}\n\n.input-field, .edit-container {\n  width: 100%;\n}\n\n.input-field {\n  margin-top: 10px;\n}\n\n.edit-button {\n  width: 100px;\n  height: 50px;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-transition: .5s ease;\n  transition: .5s ease;\n  -webkit-box-shadow: 0 10px 6px -6px #777;\n          box-shadow: 0 10px 6px -6px #777;\n  border: 1px solid rgba(226,226,226,.5);\n  outline: none;\n  padding: 0;\n  background: none;\n}\n\n.edit-button:hover {\n  cursor: pointer;\n  background: rgba(226,226,226,.5);\n}\n\n.edit-buttons {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-pack: distribute;\n      justify-content: space-around;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  margin-bottom: 0;\n}\n\n.glass {\n  width: 100%;\n  height: 100%;\n  background: rgba(0,0,0,0.7);\n  z-index: 1;\n  position: fixed;\n  top:0;\n  left: 0;\n}\n\n.warning {\n  color: red;\n  position: absolute;\n  bottom: 48px;\n  left: 15px;\n}\n"

/***/ }),

/***/ "./src/app/components/controls/controls.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"controls\">\n  <button class=\"control-button\" (click)=\"addHandler()\" [disabled]=\"isCreatingSlide\">+</button>\n  <button class=\"control-button\" (click)=\"toggleEditWindow(true)\">✎</button>\n</div>\n\n<div class=\"glass\" *ngIf=\"isEdit\" (click)=\"closeEditWindow()\"></div>\n\n<form class=\"edit-window\" *ngIf=\"isEdit\" #slideForm=\"ngForm\">\n  <div class=\"edit-container\">\n    <label for=\"edit-slide-title\">Title</label>\n    <input\n      class=\"input-field\"\n      type=\"text\"\n      name=\"title\"\n      id=\"edit-slide-title\"\n      [(ngModel)]=\"slide.title\"\n      required\n      #title=\"ngModel\"\n    >\n  </div>\n\n  <div class=\"edit-container\">\n    <label for=\"edit-slide-template\">Template</label>\n    <textarea\n      class=\"input-field\"\n      id=\"edit-slide-template\"\n      rows=\"15\"\n      [(ngModel)]=\"slide.template\"\n      name=\"template\"\n      #template=\"ngModel\"\n      required\n    >\n    </textarea>\n  </div>\n\n  <p class=\"warning\" *ngIf=\"slideForm.invalid\">All fields must containt at least 1 symbol</p>\n\n  <div class=\"edit-container edit-buttons\">\n    <button\n      class=\"edit-button\"\n      type=\"button\"\n      (click)=\"saveSlider()\"\n      [disabled]=\"slideForm.invalid\"\n    >\n      Save\n    </button>\n    <button class=\"edit-button\" (click)=\"closeEditWindow()\">Cancel</button>\n  </div>\n</form>\n"

/***/ }),

/***/ "./src/app/components/controls/controls.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ControlsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__root_slide_slide__ = __webpack_require__("./src/app/components/root-slide/slide.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ControlsComponent = /** @class */ (function () {
    function ControlsComponent() {
        this.addSlide = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
        this.editSlide = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
    }
    ControlsComponent.prototype.ngAfterContentChecked = function () {
        if (!this.slideCopy && this.slide)
            this.slideCopy = Object.assign({}, this.slide);
    };
    ControlsComponent.prototype.addHandler = function () {
        var _this = this;
        this.isCreatingSlide = true;
        this.addSlide.emit(null);
        setTimeout(function () { return _this.isCreatingSlide = false; }, 500);
    };
    ControlsComponent.prototype.toggleEditWindow = function (value) {
        this.isEdit = value;
    };
    ControlsComponent.prototype.closeEditWindow = function () {
        this.toggleEditWindow(false);
        this.slide = Object.assign({}, this.slideCopy);
    };
    ControlsComponent.prototype.saveSlider = function () {
        this.toggleEditWindow(false);
        this.slideCopy = Object.assign({}, this.slide);
        this.editSlide.emit(this.slide);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__root_slide_slide__["a" /* Slide */])
    ], ControlsComponent.prototype, "slide", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* Output */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */])
    ], ControlsComponent.prototype, "addSlide", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* Output */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */])
    ], ControlsComponent.prototype, "editSlide", void 0);
    ControlsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-controls',
            template: __webpack_require__("./src/app/components/controls/controls.component.html"),
            styles: [__webpack_require__("./src/app/components/controls/controls.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ControlsComponent);
    return ControlsComponent;
}());



/***/ }),

/***/ "./src/app/components/root-slide/root-slide.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/root-slide/root-slide.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"content-slide\" *ngIf=\"slide\" appTemplate={{slide.template}}>\n  Root Slide\n</div>\n<div class=\"loader\" *ngIf=\"!slide\"></div>\n"

/***/ }),

/***/ "./src/app/components/root-slide/root-slide.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RootSlideComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__slide__ = __webpack_require__("./src/app/components/root-slide/slide.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_slide_service__ = __webpack_require__("./src/app/services/slide.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var RootSlideComponent = /** @class */ (function () {
    function RootSlideComponent(route, router, slideService) {
        this.route = route;
        this.router = router;
        this.slideService = slideService;
    }
    RootSlideComponent.prototype.ngOnInit = function () {
        this.initCurrentSlide();
        this.getSlide();
    };
    RootSlideComponent.prototype.ngDoCheck = function () {
        var id = this.slideService.getParamFromRoute(this.route, 'id');
        if (id !== this.currentSlideId) {
            this.currentSlideId = id;
            this.getSlide();
        }
    };
    ;
    RootSlideComponent.prototype.getSlide = function () {
        var _this = this;
        this.slideService.getSlide(this.currentSlideId)
            .subscribe(function (slide) { return _this.slide = slide; }, function (error) { return _this.router.navigate(["/slide/" + (_this.currentSlideId + 1)]); });
    };
    RootSlideComponent.prototype.initCurrentSlide = function () {
        this.currentSlideId = this.slideService.getParamFromRoute(this.route, 'id');
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2__slide__["a" /* Slide */])
    ], RootSlideComponent.prototype, "slide", void 0);
    RootSlideComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-slide',
            template: __webpack_require__("./src/app/components/root-slide/root-slide.component.html"),
            styles: [__webpack_require__("./src/app/components/root-slide/root-slide.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_3__services_slide_service__["a" /* SlideService */]])
    ], RootSlideComponent);
    return RootSlideComponent;
}());



/***/ }),

/***/ "./src/app/components/root-slide/slide.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Slide; });
var Slide = /** @class */ (function () {
    function Slide() {
    }
    return Slide;
}());



/***/ }),

/***/ "./src/app/directives/template.directive.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TemplateDirective; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TemplateDirective = /** @class */ (function () {
    function TemplateDirective(el) {
        this.el = el;
    }
    TemplateDirective.prototype.ngOnInit = function () {
        this.changeTemplate();
    };
    TemplateDirective.prototype.changeTemplate = function () {
        this.el.nativeElement.innerHTML = this.template;
    };
    TemplateDirective.prototype.ngOnChanges = function (changes) {
        if (changes.template.previousValue && changes.template.currentValue !== changes.template.previousValue) {
            this.changeTemplate();
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])('appTemplate'),
        __metadata("design:type", String)
    ], TemplateDirective.prototype, "template", void 0);
    TemplateDirective = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["s" /* Directive */])({
            selector: '[appTemplate]'
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */]])
    ], TemplateDirective);
    return TemplateDirective;
}());



/***/ }),

/***/ "./src/app/in-memory-data.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InMemoryDataService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__slider_templates_templates__ = __webpack_require__("./src/app/slider-templates/templates.ts");

var InMemoryDataService = /** @class */ (function () {
    function InMemoryDataService() {
    }
    InMemoryDataService.prototype.createDb = function () {
        var slides = [
            {
                id: 1,
                title: 'План',
                template: Object(__WEBPACK_IMPORTED_MODULE_0__slider_templates_templates__["a" /* getTemplate */])(0)
            },
            {
                id: 2,
                title: 'О фреймворке',
                template: Object(__WEBPACK_IMPORTED_MODULE_0__slider_templates_templates__["a" /* getTemplate */])(1)
            },
            {
                id: 3,
                title: 'Возможности',
                template: Object(__WEBPACK_IMPORTED_MODULE_0__slider_templates_templates__["a" /* getTemplate */])(2)
            }
        ];
        return { slides: slides };
    };
    return InMemoryDataService;
}());



/***/ }),

/***/ "./src/app/services/slide.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SlideService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_observable_of__ = __webpack_require__("./node_modules/rxjs/_esm5/observable/of.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_operators__ = __webpack_require__("./node_modules/rxjs/_esm5/operators.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var httpOptions = {
    headers: new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["d" /* HttpHeaders */]({ 'Content-Type': 'application/json' })
};
var SlideService = /** @class */ (function () {
    function SlideService(http) {
        this.http = http;
        this.slidesUrl = 'api/slides'; // URL to web api
    }
    /** Getting param from route */
    SlideService.prototype.getParamFromRoute = function (route, param) {
        return param === 'id' ? +route.snapshot.paramMap.get(param) : route.snapshot.paramMap.get(param);
    };
    /** GET slides from the server */
    SlideService.prototype.getSlides = function () {
        var _this = this;
        return this.http.get(this.slidesUrl)
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["e" /* tap */])(function (slides) { return _this.log("fetched slides"); }), Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["a" /* catchError */])(this.handleError('getSlides', [])));
    };
    //////// Save methods //////////
    /** POST: add a new slide to the server */
    SlideService.prototype.addSlide = function (slide) {
        var _this = this;
        return this.http.post(this.slidesUrl, slide, httpOptions).pipe(Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["e" /* tap */])(function (slide) { return _this.log("added slide w/ id=" + slide.id); }), Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["a" /* catchError */])(this.handleError('addSlide')));
    };
    /** DELETE: delete the slide from the server */
    SlideService.prototype.deleteSlide = function (slide) {
        var _this = this;
        var id = typeof slide === 'number' ? slide : slide.id;
        var url = this.slidesUrl + "/" + id;
        return this.http.delete(url, httpOptions).pipe(Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["e" /* tap */])(function (_) { return _this.log("deleted slide id=" + id); }), Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["a" /* catchError */])(this.handleError('deleteSlide')));
    };
    /** PUT: update the slide on the server */
    SlideService.prototype.updateSlide = function (slide) {
        var _this = this;
        return this.http.put(this.slidesUrl, slide, httpOptions).pipe(Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["e" /* tap */])(function (_) { return _this.log("updated slide id=" + slide.id); }), Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["a" /* catchError */])(this.handleError('updateSlide')));
    };
    /* GET slides whose name contains search term */
    SlideService.prototype.searchSlides = function (term) {
        var _this = this;
        if (!term.trim()) {
            // if not search term, return empty slide array.
            return Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_observable_of__["a" /* of */])([]);
        }
        return this.http.get("api/slides/?title=" + term).pipe(Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["e" /* tap */])(function (_) { return _this.log("found slides matching \"" + term + "\""); }), Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["a" /* catchError */])(this.handleError('searchSlides', [])));
    };
    /** GET slide by id. Return `undefined` when id not found */
    SlideService.prototype.getSlide = function (id) {
        var _this = this;
        var url = this.slidesUrl + "/" + id;
        return this.http.get(url).pipe(Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["e" /* tap */])(function (_) { return _this.log("fetched slide id=" + id); })
        // catchError(this.handleError<Slide>(`getSlide id=${id}`)),
        );
    };
    /**
     * Handle Http operation that failed.
     * Let the app continue.
     * @param operation - name of the operation that failed
     * @param result - optional value to return as the observable result
     */
    SlideService.prototype.handleError = function (operation, result) {
        var _this = this;
        if (operation === void 0) { operation = 'operation'; }
        return function (error) {
            // throw 'test';
            // TODO: send the error to remote logging infrastructure
            console.error(error); // log to console instead
            // TODO: better job of transforming error for user consumption
            _this.log(operation + " failed: " + error.message);
            // Let the app keep running by returning an empty result.
            return Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_observable_of__["a" /* of */])(result);
        };
    };
    /** Log a SlideService */
    SlideService.prototype.log = function (message) {
        console.log('SlideService: ' + message);
    };
    SlideService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */]])
    ], SlideService);
    return SlideService;
}());



/***/ }),

/***/ "./src/app/slider-templates/templates.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getTemplate; });
var templates = [
    "<div class=\"center\">\n    <h1>\n      \u0421\u043E\u0437\u0434\u0430\u043D\u0438\u0435 \u043F\u0440\u0438\u043B\u043E\u0436\u0435\u043D\u0438\u044F \u043D\u0430 Angular 5\n    </h1>\n    <img src=\"https://photos-5.dropbox.com/t/2/AACSUBYzhJAc1T3qfQpX8s0B9bGvSO_lv4QAzf9alXQEtw/12/389942751/png/32x32/1/_/1/2/angular2.png/EIabzo0DGKcCIAcoBw/ye_YtgvZ7bcuBBW1zzDnjVQyX3wVG8VQgUuPMP8HTig?preserve_transparency=1&size=1600x1200&size_mode=3\" alt=\"\" width=\"200\">\n    <p>\u0410\u043C\u0438\u043D\u043E\u0432 \u0420\u0443\u0441\u0442\u0430\u043C</p>\n    <p>Frontend-developer</p>\n  </div>\n  <br>\n  <ol>\n    <li>\u041E \u0444\u0440\u0435\u0439\u043C\u0432\u043E\u0440\u043A\u0435</li>\n    <li>\u0412\u043E\u0437\u043C\u043E\u0436\u043D\u043E\u0441\u0442\u0438 \u0444\u0440\u0435\u0439\u043C\u0432\u043E\u0440\u043A\u0430\n      <ol>\n        <li>CLI</li>\n        <li>\u041D\u0430\u0441\u043B\u0435\u0434\u0438\u0435 \u043F\u0435\u0440\u0432\u043E\u0433\u043E \u0430\u043D\u0433\u0443\u043B\u0430\u0440\u0430</li>\n        <li>\u041D\u043E\u0432\u044B\u0435 \u0444\u0438\u0448\u0435\u0447\u043A\u0438</li>\n      </ol>\n    </li>\n    <li>\u041E\u043F\u0438\u0441\u0430\u043D\u0438\u0435 \u0434\u0430\u043D\u043D\u043E\u0433\u043E \u043F\u0440\u0438\u043B\u043E\u0436\u0435\u043D\u0438\u044F</li>\n    <li>\u041F\u0440\u043E\u0431\u043B\u0435\u043C\u044B \u0441 \u043A\u043E\u0442\u043E\u0440\u044B\u043C\u0438 \u0441\u0442\u043E\u043B\u043A\u043D\u0443\u043B\u0441\u044F</li>\n    <li>\u0412\u043A\u0443\u0441\u043D\u043E\u0441\u0442\u0438 \u0438 \u043D\u0435 \u043E\u0447\u0435\u043D\u044C \u043E\u0442 \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u043D\u0438\u044F \u0430\u043D\u0433\u0443\u043B\u0430\u0440\u0430</li>\n    <li>\u0413\u0434\u0435 \u0438 \u043A\u0430\u043A \u0435\u0433\u043E \u0441\u043B\u0435\u0434\u0443\u0435\u0442 \u043F\u0440\u0438\u043C\u0435\u043D\u044F\u0442\u044C</li>\n  </ol>",
    "<div class=\"center flex-box\">\n  <img src=\"https://photos-5.dropbox.com/t/2/AABwRcEDuWHEG67fT5Nb1wiX6nkbFwBScDOnaEre5ruMKQ/12/389942751/png/32x32/1/_/1/2/1_grk7btEn0OJEQRKgG2Qs2A.png/EIabzo0DGKcCIAcoBw/BRe-SjFpMZl6_lhQwWRPOFlbnnU2kdOnylDPvMXNSMw?preserve_transparency=1&size=1600x1200&size_mode=3\" width=\"250\" alt=\"\">\n  <br>\n  <img src=\"https://photos-5.dropbox.com/t/2/AACNv5-3K0mndJI5hDBHpLPZYZrqVOZkHQB3W4qggl5z1g/12/389942751/png/32x32/1/_/1/2/angular-pyramid-alpha.png/EIabzo0DGKcCIAcoBw/9LIMi6dJGLRBeI7KRqxmuGAa6fdzINKV4p6XG_CkRmM?preserve_transparency=1&size=1600x1200&size_mode=3\" width=\"250\" alt=\"\">\n  <br>\n  <img src=\"https://photos-6.dropbox.com/t/2/AADSQSVEk8IyWW-4VFeNpT9VyjSwA6ti6MAzcTYbJD-HUQ/12/389942751/png/32x32/1/_/1/2/sencha-extjs.png/EIabzo0DGKcCIAcoBw/amT5Rzi7bHMBatFRDTlBXfA21aKejQL35ZL9bi0pOlM?preserve_transparency=1&size=1600x1200&size_mode=3\" width=\"350\" alt=\"\">\n  <br>\n  <img src=\"https://www.dropbox.com/pri/get/images/cli-logo.svg?_subject_uid=389942751&raw=1&size=1600x1200&size_mode=3&w=AAARnZaDsOUizILh0GEr8YNawj4tkCiyR2UrQw75x-HtxQ\" width=\"300\" alt=\"\">\n  </div>",
    "<h1>\u041A\u043E\u0433\u0434\u0430 \u043F\u0440\u043E\u0447\u0435\u043B \u0432\u0441\u044E \u0434\u043E\u043A\u0443\u043C\u0435\u043D\u0442\u0430\u0446\u0438\u044E</h1>\n<div class=\"center flex-box\">\n  <img width=\"250\" src=\"https://photos-3.dropbox.com/t/2/AACgUb2tj3DkgnewWyhJT6OujLaE4d5sS1OdVSvdUdl1pA/12/389942751/png/32x32/1/_/1/2/export.png/EIabzo0DGKcCIAcoBw/YpfnaR-m_AbGG1b5reCkhYtdaH14xIBkGDlnSogeiL4?preserve_transparency=1&size=1600x1200&size_mode=3\" alt=\"\">\n</div>\n<br>\n<div>\n  <h1>\u041D\u0430\u0441\u043B\u0435\u0434\u0438\u0435 \u043F\u0435\u0440\u0432\u043E\u0433\u043E \u0430\u043D\u0433\u0443\u043B\u0430\u0440\u0430</h1>\n  <p>\u0422\u0435\u043F\u0435\u0440\u044C \u0432 \u043A\u0430\u0447\u0435\u0441\u0442\u0432\u0435 \u0441\u0430\u0445\u0430\u0440\u0430 \u043D\u0430\u0434\u043E \u043F\u0438\u0441\u0430\u0442\u044C <b>*</b></p>\n  <p>\u0427\u0442\u043E\u0431\u044B \u0431\u044B\u043B\u043E \u0442\u0430\u043A:</p>\n  <pre>\n    <code>\n       &lt;div *ngIf=\"hero\" class=\"name\"&gt;{{hero.name}}&lt;/div&gt;\n    </code>\n  </pre>\n    <p>\u0410 \u043D\u0435 \u0442\u0430\u043A:</p>\n  <pre>\n    <code>\n      &lt;ng-template [ngIf]=\"hero\"&gt;\n        &lt;div class=\"name\">{{hero.name}}&lt;/div&gt;\n      &lt;/ng-template&gt;\n    </code>\n  </pre>\n</div>"
];
var getTemplate = function (value) {
    return templates[value];
};


/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map