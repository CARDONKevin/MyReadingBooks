(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _components_manga_manga_presentation_manga_presentation_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/manga/manga-presentation/manga-presentation.component */ "./src/app/components/manga/manga-presentation/manga-presentation.component.ts");
/* harmony import */ var _control_authentification_authentification_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./control/authentification/authentification.component */ "./src/app/control/authentification/authentification.component.ts");
/* harmony import */ var _components_manga_all_listing_all_listing_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/manga/all-listing/all-listing.component */ "./src/app/components/manga/all-listing/all-listing.component.ts");
/* harmony import */ var _components_manga_read_chapter_read_chapter_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/manga/read-chapter/read-chapter.component */ "./src/app/components/manga/read-chapter/read-chapter.component.ts");
/* harmony import */ var _components_book_book_listing_book_listing_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/book/book-listing/book-listing.component */ "./src/app/components/book/book-listing/book-listing.component.ts");
/* harmony import */ var _components_book_book_chapters_book_chapters_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/book/book-chapters/book-chapters.component */ "./src/app/components/book/book-chapters/book-chapters.component.ts");
/* harmony import */ var _components_studio_creation_studio_creation_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/studio-creation/studio-creation.component */ "./src/app/components/studio-creation/studio-creation.component.ts");
/* harmony import */ var _guards_authentication_guard__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./guards/authentication.guard */ "./src/app/guards/authentication.guard.ts");











var routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: _control_authentification_authentification_component__WEBPACK_IMPORTED_MODULE_4__["AuthentificationComponent"] },
    { path: 'mangas', canActivate: [_guards_authentication_guard__WEBPACK_IMPORTED_MODULE_10__["AuthenticationGuard"]], component: _components_manga_all_listing_all_listing_component__WEBPACK_IMPORTED_MODULE_5__["AllListingComponent"] },
    { path: 'manga/:id', canActivate: [_guards_authentication_guard__WEBPACK_IMPORTED_MODULE_10__["AuthenticationGuard"]], component: _components_manga_manga_presentation_manga_presentation_component__WEBPACK_IMPORTED_MODULE_3__["MangaPresentationComponent"] },
    { path: 'book/:id', canActivate: [_guards_authentication_guard__WEBPACK_IMPORTED_MODULE_10__["AuthenticationGuard"]], component: _components_book_book_chapters_book_chapters_component__WEBPACK_IMPORTED_MODULE_8__["BookChaptersComponent"] },
    { path: 'books', canActivate: [_guards_authentication_guard__WEBPACK_IMPORTED_MODULE_10__["AuthenticationGuard"]], component: _components_book_book_listing_book_listing_component__WEBPACK_IMPORTED_MODULE_7__["BookListingComponent"] },
    { path: 'chapter/:id', canActivate: [_guards_authentication_guard__WEBPACK_IMPORTED_MODULE_10__["AuthenticationGuard"]], component: _components_manga_read_chapter_read_chapter_component__WEBPACK_IMPORTED_MODULE_6__["ReadChapterComponent"] },
    { path: 'creation-studio', canActivate: [_guards_authentication_guard__WEBPACK_IMPORTED_MODULE_10__["AuthenticationGuard"]], component: _components_studio_creation_studio_creation_component__WEBPACK_IMPORTED_MODULE_9__["StudioCreationComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-authentification></app-authentification>\r\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'MyReadingBooksProject';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: provideConfig, AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "provideConfig", function() { return provideConfig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_manga_all_listing_all_listing_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/manga/all-listing/all-listing.component */ "./src/app/components/manga/all-listing/all-listing.component.ts");
/* harmony import */ var _services_manga_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./services/manga.service */ "./src/app/services/manga.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-pagination */ "./node_modules/ngx-pagination/dist/ngx-pagination.js");
/* harmony import */ var angularx_social_login__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! angularx-social-login */ "./node_modules/angularx-social-login/angularx-social-login.es5.js");
/* harmony import */ var _control_authentification_authentification_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./control/authentification/authentification.component */ "./src/app/control/authentification/authentification.component.ts");
/* harmony import */ var _components_manga_manga_presentation_manga_presentation_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/manga/manga-presentation/manga-presentation.component */ "./src/app/components/manga/manga-presentation/manga-presentation.component.ts");
/* harmony import */ var _components_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/sidebar/sidebar.component */ "./src/app/components/sidebar/sidebar.component.ts");
/* harmony import */ var _components_manga_read_chapter_read_chapter_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/manga/read-chapter/read-chapter.component */ "./src/app/components/manga/read-chapter/read-chapter.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _components_book_book_listing_book_listing_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/book/book-listing/book-listing.component */ "./src/app/components/book/book-listing/book-listing.component.ts");
/* harmony import */ var _components_book_book_chapters_book_chapters_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/book/book-chapters/book-chapters.component */ "./src/app/components/book/book-chapters/book-chapters.component.ts");
/* harmony import */ var _components_book_create_book_create_book_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/book/create-book/create-book.component */ "./src/app/components/book/create-book/create-book.component.ts");
/* harmony import */ var _components_book_create_book_chapter_create_book_chapter_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./components/book/create-book-chapter/create-book-chapter.component */ "./src/app/components/book/create-book-chapter/create-book-chapter.component.ts");
/* harmony import */ var _components_studio_creation_studio_creation_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./components/studio-creation/studio-creation.component */ "./src/app/components/studio-creation/studio-creation.component.ts");























var config = new angularx_social_login__WEBPACK_IMPORTED_MODULE_11__["AuthServiceConfig"]([
    {
        id: angularx_social_login__WEBPACK_IMPORTED_MODULE_11__["FacebookLoginProvider"].PROVIDER_ID,
        provider: new angularx_social_login__WEBPACK_IMPORTED_MODULE_11__["FacebookLoginProvider"]('370545117128079')
    }
]);
function provideConfig() {
    return config;
}
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _components_manga_all_listing_all_listing_component__WEBPACK_IMPORTED_MODULE_5__["AllListingComponent"],
                _control_authentification_authentification_component__WEBPACK_IMPORTED_MODULE_12__["AuthentificationComponent"],
                _components_manga_manga_presentation_manga_presentation_component__WEBPACK_IMPORTED_MODULE_13__["MangaPresentationComponent"],
                _components_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_14__["SidebarComponent"],
                _components_manga_read_chapter_read_chapter_component__WEBPACK_IMPORTED_MODULE_15__["ReadChapterComponent"],
                _components_book_book_listing_book_listing_component__WEBPACK_IMPORTED_MODULE_17__["BookListingComponent"],
                _components_book_book_chapters_book_chapters_component__WEBPACK_IMPORTED_MODULE_18__["BookChaptersComponent"],
                _components_book_create_book_create_book_component__WEBPACK_IMPORTED_MODULE_19__["CreateBookComponent"],
                _components_book_create_book_chapter_create_book_chapter_component__WEBPACK_IMPORTED_MODULE_20__["CreateBookChapterComponent"],
                _components_studio_creation_studio_creation_component__WEBPACK_IMPORTED_MODULE_21__["StudioCreationComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__["BrowserAnimationsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatPaginatorModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__["BrowserAnimationsModule"],
                ngx_pagination__WEBPACK_IMPORTED_MODULE_10__["NgxPaginationModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatRadioModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatSelectModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_16__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_16__["ReactiveFormsModule"],
                angularx_social_login__WEBPACK_IMPORTED_MODULE_11__["SocialLoginModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatStepperModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatFormFieldModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatTableModule"]
            ],
            providers: [_services_manga_service__WEBPACK_IMPORTED_MODULE_6__["MangaService"],
                {
                    provide: angularx_social_login__WEBPACK_IMPORTED_MODULE_11__["AuthServiceConfig"],
                    useFactory: provideConfig
                }
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/book/book-chapters/book-chapters.component.html":
/*!****************************************************************************!*\
  !*** ./src/app/components/book/book-chapters/book-chapters.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"grid-container\">\r\n  <div class=\"grid-item\">\r\n\r\n    <p *ngIf=\"book\" (click)=\"definitionOfWordSelected()\">\r\n      titre du livre : {{book.title}}  \r\n    </p>\r\n\r\n    <ng-container *ngFor=\"let chapter of chapters\">\r\n      <div (click)=\"definitionOfWordSelected()\">\r\n        <p> titre du chapitre : {{chapter.title}}</p>\r\n        <audio\r\n          controls\r\n          src=\"https://api.voicerss.org/?key=c969182c5ca64c46adc8ac2b881bfe52&hl=fr-fr&src={{chapter.content}}\">\r\n          Your browser does not support the\r\n          <code>audio</code> element.\r\n        </audio>\r\n        <p> contenu : <br/>{{chapter.content}}  </p>\r\n      </div>\r\n    </ng-container>\r\n  </div>\r\n\r\n  <div class=\"grid-item\">\r\n    <p *ngIf=\"!definitionWordApi\">Click on a word in book to know its definition /<br/>\r\n      Clique sur un mot dans le livre pour connaître sa définition\r\n    </p>\r\n    <ng-container *ngIf=\"definitionWordApi\">\r\n      <div> Définition de <strong>{{definitionWordApi.title}}</strong></div>\r\n      <div [innerHTML]=\"definitionWordApi.extract\"></div>\r\n      <div *ngIf=\"!definitionWordApi.extract || definitionWordApi.extract === ''\">\r\n        <br/>\r\n        Aucune définition trouvée pour << {{definitionWordApi.title}} >>\r\n      </div>\r\n    </ng-container>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/components/book/book-chapters/book-chapters.component.scss":
/*!****************************************************************************!*\
  !*** ./src/app/components/book/book-chapters/book-chapters.component.scss ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".grid-container {\n  display: grid;\n  grid-column-gap: 50px;\n  grid-template-columns: auto auto;\n  padding: 10px; }\n\n.grid-item {\n  background-color: rgba(245, 245, 245, 0.8);\n  border: 1px solid rgba(0, 0, 0, 0.8);\n  padding: 20px;\n  font-size: 30px;\n  text-align: center; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9ib29rL2Jvb2stY2hhcHRlcnMvQzpcXFVzZXJzXFxDQVJET05cXERlc2t0b3BcXE1hc3RlciBDQ00gYW5uZWUgMVxcUHJvamV0XFxNeVJlYWRpbmdCb29rc1Byb2plY3Qvc3JjXFxhcHBcXGNvbXBvbmVudHNcXGJvb2tcXGJvb2stY2hhcHRlcnNcXGJvb2stY2hhcHRlcnMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFhO0VBQ2IscUJBQXFCO0VBQ3JCLGdDQUFnQztFQUNoQyxhQUFhLEVBQUE7O0FBR2Y7RUFDRSwwQ0FBMEM7RUFDMUMsb0NBQW9DO0VBQ3BDLGFBQWE7RUFDYixlQUFlO0VBQ2Ysa0JBQWtCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2Jvb2svYm9vay1jaGFwdGVycy9ib29rLWNoYXB0ZXJzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmdyaWQtY29udGFpbmVyIHtcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIGdyaWQtY29sdW1uLWdhcDogNTBweDtcclxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IGF1dG8gYXV0bztcclxuICBwYWRkaW5nOiAxMHB4O1xyXG59XHJcblxyXG4uZ3JpZC1pdGVtIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI0NSwgMjQ1LCAyNDUsIDAuOCk7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjgpO1xyXG4gIHBhZGRpbmc6IDIwcHg7XHJcbiAgZm9udC1zaXplOiAzMHB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/components/book/book-chapters/book-chapters.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/components/book/book-chapters/book-chapters.component.ts ***!
  \**************************************************************************/
/*! exports provided: BookChaptersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BookChaptersComponent", function() { return BookChaptersComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _services_book_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/book.service */ "./src/app/services/book.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _services_definition_of_word_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../services/definition-of-word.service */ "./src/app/services/definition-of-word.service.ts");







var BookChaptersComponent = /** @class */ (function () {
    function BookChaptersComponent(bookService, route, router, definitionService) {
        this.bookService = bookService;
        this.route = route;
        this.router = router;
        this.definitionService = definitionService;
        this.ngUnsubscribe = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.bookId = this.route.snapshot.paramMap.get('id');
    }
    BookChaptersComponent.prototype.ngOnInit = function () {
        this.chapters = [];
        this.seeBook();
        this.seeChapters();
    };
    BookChaptersComponent.prototype.ngOnDestroy = function () {
        this.ngUnsubscribe.next();
        this.ngUnsubscribe.complete();
    };
    BookChaptersComponent.prototype.seeBook = function () {
        var _this = this;
        this.bookService.getBook(+this.bookId)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["takeUntil"])(this.ngUnsubscribe))
            .subscribe(function (apiResponse) {
            _this.book = apiResponse;
        });
    };
    BookChaptersComponent.prototype.seeChapters = function () {
        var _this = this;
        this.bookService.getBookChapter(+this.bookId)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["takeUntil"])(this.ngUnsubscribe))
            .subscribe(function (apiResponse) {
            _this.chapters = apiResponse;
        });
    };
    BookChaptersComponent.prototype.definitionOfWordSelected = function () {
        var _this = this;
        var s = window.getSelection();
        var range = s.getRangeAt(0);
        var node = s.anchorNode;
        while (range.toString().indexOf(' ') !== 0) {
            range.setStart(node, (range.startOffset - 1));
        }
        range.setStart(node, range.startOffset + 1);
        do {
            range.setEnd(node, range.endOffset + 1);
        } while (range.toString().indexOf(' ') === -1 && range.toString().trim() !== '');
        var str = range.toString().trim();
        this.definitionService.getDefinitionWord(str)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["takeUntil"])(this.ngUnsubscribe))
            .subscribe(function (apiResponse) {
            _this.definitionWordApi = Object.values(apiResponse.query.pages)[0];
        });
    };
    BookChaptersComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-book-chapters',
            template: __webpack_require__(/*! ./book-chapters.component.html */ "./src/app/components/book/book-chapters/book-chapters.component.html"),
            styles: [__webpack_require__(/*! ./book-chapters.component.scss */ "./src/app/components/book/book-chapters/book-chapters.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_book_service__WEBPACK_IMPORTED_MODULE_3__["BookService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _services_definition_of_word_service__WEBPACK_IMPORTED_MODULE_6__["DefinitionOfWordService"]])
    ], BookChaptersComponent);
    return BookChaptersComponent;
}());



/***/ }),

/***/ "./src/app/components/book/book-listing/book-listing.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/components/book/book-listing/book-listing.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<span class=\"component\">\r\n  <ng-container *ngFor=\"let book of books\">\r\n    <ul class=\"align\">\r\n      <li>\r\n        <figure class='book'>\r\n          <!-- Front -->\r\n          <ul class='hardcover_front'>\r\n            <li>\r\n              <img src=\"{{book.picture}}\" alt=\"\" width=\"100%\" height=\"100%\">\r\n            </li>\r\n            <li></li>\r\n          </ul>\r\n          <!-- Pages -->\r\n          <ul class='page'>\r\n            <li> <span class=\"title\">{{book.title}} </span> </li>\r\n            <li>\r\n              <button class=\"btn\" (click)=\"gotoBook(book)\">Consulter </button>\r\n            </li>\r\n            <li></li>\r\n            <li></li>\r\n            <li></li>\r\n          </ul>\r\n          <!-- Back -->\r\n          <ul class='hardcover_back'>\r\n            <li></li>\r\n            <li></li>\r\n          </ul>\r\n          <ul class='book_spine'>\r\n            <li></li>\r\n            <li></li>\r\n          </ul>\r\n        </figure>\r\n      </li>\r\n    </ul>\r\n  </ng-container>\r\n</span>\r\n"

/***/ }),

/***/ "./src/app/components/book/book-listing/book-listing.component.scss":
/*!**************************************************************************!*\
  !*** ./src/app/components/book/book-listing/book-listing.component.scss ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "* {\n  margin: 0;\n  padding: 0;\n  display: inline-block; }\n\n.example-radio-group {\n  display: flex;\n  flex-direction: row;\n  margin: 15px 0; }\n\n.example-radio-button {\n  margin: 5px; }\n\nul {\n  margin: 0;\n  padding: 0;\n  list-style: none; }\n\na {\n  color: #2c3e50;\n  text-decoration: none; }\n\n.btn {\n  display: inline-block;\n  text-transform: uppercase;\n  border: 2px solid #2c3e50;\n  margin-top: 100px;\n  font-size: 0.9em;\n  font-weight: 700;\n  padding: 0.1em 0.4em;\n  text-align: center;\n  transition: color 0.3s, border-color 0.3s; }\n\n.title {\n  display: inline-block;\n  max-width: 80%;\n  margin-top: 12px;\n  text-transform: uppercase;\n  font-size: 1em;\n  word-wrap: break-word;\n  font-weight: 700;\n  text-align: center;\n  transition: color 0.3s, border-color 0.3s; }\n\n.btn:hover {\n  border-color: #16a085;\n  color: #16a085; }\n\n/* basic grid, only for this demo */\n\n.align {\n  clear: both;\n  max-width: 800px;\n  text-align: center; }\n\n.align > li {\n  width: 15%;\n  min-height: 0px;\n  display: inline-block;\n  margin: 30px 20px 30px 30px;\n  padding: 0 0 0 60px;\n  vertical-align: top; }\n\n/*\r\n\t1. container\r\n*/\n\n.book {\n  position: relative;\n  width: 160px;\n  height: 220px;\n  -webkit-perspective: 1000px;\n  perspective: 1000px;\n  -webkit-transform-style: preserve-3d;\n  transform-style: preserve-3d; }\n\n/*\r\n\t2. background & color\r\n*/\n\n/* HARDCOVER FRONT */\n\n.hardcover_front li:first-child {\n  background-color: #eee;\n  -webkit-backface-visibility: hidden;\n  backface-visibility: hidden; }\n\n/* reverse */\n\n.hardcover_front li:last-child {\n  background: #fffbec; }\n\n/* HARDCOVER BACK */\n\n.hardcover_back li:first-child {\n  background: #fffbec; }\n\n/* reverse */\n\n.hardcover_back li:last-child {\n  background: #fffbec; }\n\n.book_spine li:first-child {\n  background: #eee; }\n\n.book_spine li:last-child {\n  background: #333; }\n\n/* thickness of cover */\n\n.hardcover_front li:first-child:after,\n.hardcover_front li:first-child:before,\n.hardcover_front li:last-child:after,\n.hardcover_front li:last-child:before,\n.hardcover_back li:first-child:after,\n.hardcover_back li:first-child:before,\n.hardcover_back li:last-child:after,\n.hardcover_back li:last-child:before,\n.book_spine li:first-child:after,\n.book_spine li:first-child:before,\n.book_spine li:last-child:after,\n.book_spine li:last-child:before {\n  background: #999; }\n\n/* page */\n\n.page > li {\n  background: linear-gradient(left, #e1ddd8 0%, #fffbf6 100%);\n  box-shadow: inset 0px -1px 2px rgba(50, 50, 50, 0.1), inset -1px 0px 1px rgba(150, 150, 150, 0.2);\n  border-radius: 0px 5px 5px 0px; }\n\n/*\r\n\t3. opening cover, back cover and pages\r\n*/\n\n.hardcover_front {\n  -webkit-transform: rotateY(-34deg) translateZ(8px);\n  transform: rotateY(-34deg) translateZ(8px);\n  z-index: 100; }\n\n.hardcover_back {\n  -webkit-transform: rotateY(-15deg) translateZ(-8px);\n  transform: rotateY(-15deg) translateZ(-8px); }\n\n.page li:nth-child(1) {\n  -webkit-transform: rotateY(-28deg);\n  transform: rotateY(-28deg); }\n\n.page li:nth-child(2) {\n  -webkit-transform: rotateY(-30deg);\n  transform: rotateY(-30deg); }\n\n.page li:nth-child(3) {\n  -webkit-transform: rotateY(-32deg);\n  transform: rotateY(-32deg); }\n\n.page li:nth-child(4) {\n  -webkit-transform: rotateY(-34deg);\n  transform: rotateY(-34deg); }\n\n.page li:nth-child(5) {\n  -webkit-transform: rotateY(-36deg);\n  transform: rotateY(-36deg); }\n\n/*\r\n\t4. position, transform & transition\r\n*/\n\n.hardcover_front,\n.hardcover_back,\n.book_spine,\n.hardcover_front li,\n.hardcover_back li,\n.book_spine li {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  -webkit-transform-style: preserve-3d;\n  transform-style: preserve-3d; }\n\n.hardcover_front,\n.hardcover_back {\n  -webkit-transform-origin: 0% 100%;\n  transform-origin: 0% 100%; }\n\n.hardcover_front {\n  transition: all 0.8s ease, z-index 0.6s; }\n\n/* HARDCOVER front */\n\n.hardcover_front li:first-child {\n  cursor: default;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n      user-select: none;\n  -webkit-transform: translateZ(2px);\n  transform: translateZ(2px); }\n\n.hardcover_front li:last-child {\n  -webkit-transform: rotateY(180deg) translateZ(2px);\n  transform: rotateY(180deg) translateZ(2px); }\n\n/* HARDCOVER back */\n\n.hardcover_back li:first-child {\n  -webkit-transform: translateZ(2px);\n  transform: translateZ(2px); }\n\n.hardcover_back li:last-child {\n  -webkit-transform: translateZ(-2px);\n  transform: translateZ(-2px); }\n\n/* thickness of cover */\n\n.hardcover_front li:first-child:after,\n.hardcover_front li:first-child:before,\n.hardcover_front li:last-child:after,\n.hardcover_front li:last-child:before,\n.hardcover_back li:first-child:after,\n.hardcover_back li:first-child:before,\n.hardcover_back li:last-child:after,\n.hardcover_back li:last-child:before,\n.book_spine li:first-child:after,\n.book_spine li:first-child:before,\n.book_spine li:last-child:after,\n.book_spine li:last-child:before {\n  position: absolute;\n  top: 0;\n  left: 0; }\n\n/* HARDCOVER front */\n\n.hardcover_front li:first-child:after,\n.hardcover_front li:first-child:before {\n  width: 4px;\n  height: 100%; }\n\n.hardcover_front li:first-child:after {\n  -webkit-transform: rotateY(90deg) translateZ(-2px) translateX(2px);\n  transform: rotateY(90deg) translateZ(-2px) translateX(2px); }\n\n.hardcover_front li:first-child:before {\n  -webkit-transform: rotateY(90deg) translateZ(158px) translateX(2px);\n  transform: rotateY(90deg) translateZ(158px) translateX(2px); }\n\n.hardcover_front li:last-child:after,\n.hardcover_front li:last-child:before {\n  width: 4px;\n  height: 160px; }\n\n.hardcover_front li:last-child:after {\n  -webkit-transform: rotateX(90deg) rotateZ(90deg) translateZ(80px) translateX(-2px) translateY(-78px);\n  transform: rotateX(90deg) rotateZ(90deg) translateZ(80px) translateX(-2px) translateY(-78px); }\n\n.hardcover_front li:last-child:before {\n  box-shadow: 0px 0px 30px 5px #333;\n  -webkit-transform: rotateX(90deg) rotateZ(90deg) translateZ(-140px) translateX(-2px) translateY(-78px);\n  transform: rotateX(90deg) rotateZ(90deg) translateZ(-140px) translateX(-2px) translateY(-78px); }\n\n/* thickness of cover */\n\n.hardcover_back li:first-child:after,\n.hardcover_back li:first-child:before {\n  width: 4px;\n  height: 100%; }\n\n.hardcover_back li:first-child:after {\n  -webkit-transform: rotateY(90deg) translateZ(-2px) translateX(2px);\n  transform: rotateY(90deg) translateZ(-2px) translateX(2px); }\n\n.hardcover_back li:first-child:before {\n  -webkit-transform: rotateY(90deg) translateZ(158px) translateX(2px);\n  transform: rotateY(90deg) translateZ(158px) translateX(2px); }\n\n.hardcover_back li:last-child:after,\n.hardcover_back li:last-child:before {\n  width: 4px;\n  height: 160px; }\n\n.hardcover_back li:last-child:after {\n  -webkit-transform: rotateX(90deg) rotateZ(90deg) translateZ(80px) translateX(2px) translateY(-78px);\n  transform: rotateX(90deg) rotateZ(90deg) translateZ(80px) translateX(2px) translateY(-78px); }\n\n.hardcover_back li:last-child:before {\n  box-shadow: 10px -1px 80px 20px #666;\n  -webkit-transform: rotateX(90deg) rotateZ(90deg) translateZ(-140px) translateX(2px) translateY(-78px);\n  transform: rotateX(90deg) rotateZ(90deg) translateZ(-140px) translateX(2px) translateY(-78px); }\n\n/* BOOK SPINE */\n\n.book_spine {\n  -webkit-transform: rotateY(60deg) translateX(-5px) translateZ(-12px);\n  transform: rotateY(60deg) translateX(-5px) translateZ(-12px);\n  width: 16px;\n  z-index: 0; }\n\n.book_spine li:first-child {\n  -webkit-transform: translateZ(2px);\n  transform: translateZ(2px); }\n\n.book_spine li:last-child {\n  -webkit-transform: translateZ(-2px);\n  transform: translateZ(-2px); }\n\n/* thickness of book spine */\n\n.book_spine li:first-child:after,\n.book_spine li:first-child:before {\n  width: 4px;\n  height: 100%; }\n\n.book_spine li:first-child:after {\n  -webkit-transform: rotateY(90deg) translateZ(-2px) translateX(2px);\n  transform: rotateY(90deg) translateZ(-2px) translateX(2px); }\n\n.book_spine li:first-child:before {\n  -webkit-transform: rotateY(-90deg) translateZ(-12px);\n  transform: rotateY(-90deg) translateZ(-12px); }\n\n.book_spine li:last-child:after,\n.book_spine li:last-child:before {\n  width: 4px;\n  height: 16px; }\n\n.book_spine li:last-child:after {\n  -webkit-transform: rotateX(90deg) rotateZ(90deg) translateZ(8px) translateX(2px) translateY(-6px);\n  transform: rotateX(90deg) rotateZ(90deg) translateZ(8px) translateX(2px) translateY(-6px); }\n\n.book_spine li:last-child:before {\n  box-shadow: 5px -1px 100px 40px rgba(0, 0, 0, 0.2);\n  -webkit-transform: rotateX(90deg) rotateZ(90deg) translateZ(-210px) translateX(2px) translateY(-6px);\n  transform: rotateX(90deg) rotateZ(90deg) translateZ(-210px) translateX(2px) translateY(-6px); }\n\n.page,\n.page > li {\n  position: absolute;\n  top: 0;\n  left: 0;\n  -webkit-transform-style: preserve-3d;\n  transform-style: preserve-3d; }\n\n.page {\n  width: 100%;\n  height: 98%;\n  top: 1%;\n  left: 3%;\n  z-index: 10; }\n\n.page > li {\n  width: 100%;\n  height: 100%;\n  -webkit-transform-origin: left center;\n  transform-origin: left center;\n  transition-property: -webkit-transform;\n  transition-property: transform;\n  transition-property: transform, -webkit-transform;\n  transition-timing-function: ease; }\n\n.page > li:nth-child(1) {\n  transition-duration: 0.6s; }\n\n.page > li:nth-child(2) {\n  transition-duration: 0.6s; }\n\n.page > li:nth-child(3) {\n  transition-duration: 0.4s; }\n\n.page > li:nth-child(4) {\n  transition-duration: 0.5s; }\n\n.page > li:nth-child(5) {\n  transition-duration: 0.6s; }\n\n/*\r\n\t5. events\r\n*/\n\n.book:hover > .hardcover_front {\n  -webkit-transform: rotateY(-145deg) translateZ(0);\n  transform: rotateY(-145deg) translateZ(0);\n  z-index: 0; }\n\n.book:hover > .page li:nth-child(1) {\n  -webkit-transform: rotateY(-30deg);\n  transform: rotateY(-30deg);\n  transition-duration: 1.5s; }\n\n.book:hover > .page li:nth-child(2) {\n  -webkit-transform: rotateY(-35deg);\n  transform: rotateY(-35deg);\n  transition-duration: 1.8s; }\n\n.book:hover > .page li:nth-child(3) {\n  -webkit-transform: rotateY(-118deg);\n  transform: rotateY(-118deg);\n  transition-duration: 1.6s; }\n\n.book:hover > .page li:nth-child(4) {\n  -webkit-transform: rotateY(-130deg);\n  transform: rotateY(-130deg);\n  transition-duration: 1.4s; }\n\n.book:hover > .page li:nth-child(5) {\n  -webkit-transform: rotateY(-140deg);\n  transform: rotateY(-140deg);\n  transition-duration: 1.2s; }\n\n/*\r\n\t6. Bonus\r\n*/\n\n/* cover CSS */\n\n.coverDesign {\n  position: absolute;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  right: 0;\n  overflow: hidden;\n  -webkit-backface-visibility: hidden;\n  backface-visibility: hidden; }\n\n.coverDesign::after {\n  background-image: linear-gradient(-135deg, rgba(255, 255, 255, 0.45) 0%, transparent 100%);\n  position: absolute;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  right: 0; }\n\n.coverDesign h1 {\n  color: #fff;\n  font-size: 2.2em;\n  letter-spacing: 0.05em;\n  text-align: center;\n  margin: 54% 0 0 0;\n  text-shadow: -1px -1px 0 rgba(0, 0, 0, 0.1); }\n\n.coverDesign p {\n  color: #f8f8f8;\n  font-size: 1em;\n  text-align: center;\n  text-shadow: -1px -1px 0 rgba(0, 0, 0, 0.1); }\n\n.yellow {\n  background-color: #f1c40f;\n  background-image: linear-gradient(top, #f1c40f 58%, #e7ba07 0%); }\n\n.blue {\n  background-color: #3498db;\n  background-image: linear-gradient(top, #3498db 58%, #2a90d4 0%); }\n\n.grey {\n  background-color: #f8e9d1;\n  background-image: linear-gradient(top, #f8e9d1 58%, #e7d5b7 0%); }\n\n/* Media Queries */\n\n@media screen and (max-width: 37.8125em) {\n  .align > li {\n    width: 100%;\n    min-height: 440px;\n    height: auto;\n    padding: 0;\n    margin: 0 0 30px 0; }\n  .book {\n    margin: 0 auto; } }\n\n.list {\n  max-width: 550px;\n  margin-left: 30%; }\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9ib29rL2Jvb2stbGlzdGluZy9DOlxcVXNlcnNcXENBUkRPTlxcRGVza3RvcFxcTWFzdGVyIENDTSBhbm5lZSAxXFxQcm9qZXRcXE15UmVhZGluZ0Jvb2tzUHJvamVjdC9zcmNcXGFwcFxcY29tcG9uZW50c1xcYm9va1xcYm9vay1saXN0aW5nXFxib29rLWxpc3RpbmcuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvYm9vay9ib29rLWxpc3RpbmcvYm9vay1saXN0aW5nLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsU0FBUztFQUNULFVBQVU7RUFDVixxQkFBcUIsRUFBQTs7QUFHdkI7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLGNBQWMsRUFBQTs7QUFHaEI7RUFDRSxXQUFXLEVBQUE7O0FBR2I7RUFDRSxTQUFTO0VBQ1QsVUFBVTtFQUNWLGdCQUFnQixFQUFBOztBQUdsQjtFQUNFLGNBQWM7RUFDZCxxQkFBcUIsRUFBQTs7QUFHdkI7RUFDRSxxQkFBcUI7RUFDckIseUJBQXlCO0VBQ3pCLHlCQUF5QjtFQUN6QixpQkFBaUI7RUFDakIsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtFQUNoQixvQkFBb0I7RUFDcEIsa0JBQWtCO0VBR2xCLHlDQUF5QyxFQUFBOztBQUczQztFQUNFLHFCQUFxQjtFQUNyQixjQUFjO0VBQ2QsZ0JBQWdCO0VBQ2hCLHlCQUF5QjtFQUN6QixjQUFjO0VBQ2QscUJBQXFCO0VBQ3JCLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFHbEIseUNBQXlDLEVBQUE7O0FBRzNDO0VBQ0UscUJBQXFCO0VBQ3JCLGNBQWMsRUFBQTs7QUFHaEIsbUNBQUE7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsZ0JBQWdCO0VBQ2hCLGtCQUFrQixFQUFBOztBQUdwQjtFQUNFLFVBQVU7RUFDVixlQUFlO0VBQ2YscUJBQXFCO0VBQ3JCLDJCQUEyQjtFQUMzQixtQkFBbUI7RUFDbkIsbUJBQW1CLEVBQUE7O0FBR3JCOztDQ1RDOztBRGFEO0VBQ0Usa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixhQUFhO0VBQ2IsMkJBQTJCO0VBRTNCLG1CQUFtQjtFQUNuQixvQ0FBb0M7RUFFcEMsNEJBQTRCLEVBQUE7O0FBRzlCOztDQ1hDOztBRGVELG9CQUFBOztBQUNBO0VBQ0Usc0JBQXNCO0VBQ3RCLG1DQUFtQztFQUVuQywyQkFBMkIsRUFBQTs7QUFHN0IsWUFBQTs7QUFDQTtFQUNFLG1CQUFtQixFQUFBOztBQUdyQixtQkFBQTs7QUFDQTtFQUNFLG1CQUFtQixFQUFBOztBQUdyQixZQUFBOztBQUNBO0VBQ0UsbUJBQW1CLEVBQUE7O0FBR3JCO0VBQ0UsZ0JBQWdCLEVBQUE7O0FBR2xCO0VBQ0UsZ0JBQWdCLEVBQUE7O0FBR2xCLHVCQUFBOztBQUVBOzs7Ozs7Ozs7Ozs7RUFZRSxnQkFBZ0IsRUFBQTs7QUFHbEIsU0FBQTs7QUFFQTtFQUlFLDJEQUEyRDtFQUMzRCxpR0FBaUc7RUFDakcsOEJBQThCLEVBQUE7O0FBR2hDOztDQ3RCQzs7QUQwQkQ7RUFDRSxrREFBa0Q7RUFFbEQsMENBQTBDO0VBQzFDLFlBQVksRUFBQTs7QUFHZDtFQUNFLG1EQUFtRDtFQUVuRCwyQ0FBMkMsRUFBQTs7QUFHN0M7RUFDRSxrQ0FBa0M7RUFFbEMsMEJBQTBCLEVBQUE7O0FBRzVCO0VBQ0Usa0NBQWtDO0VBRWxDLDBCQUEwQixFQUFBOztBQUc1QjtFQUNFLGtDQUFrQztFQUVsQywwQkFBMEIsRUFBQTs7QUFHNUI7RUFDRSxrQ0FBa0M7RUFFbEMsMEJBQTBCLEVBQUE7O0FBRzVCO0VBQ0Usa0NBQWtDO0VBRWxDLDBCQUEwQixFQUFBOztBQUc1Qjs7Q0M5QkM7O0FEa0NEOzs7Ozs7RUFNRSxrQkFBa0I7RUFDbEIsTUFBTTtFQUNOLE9BQU87RUFDUCxXQUFXO0VBQ1gsWUFBWTtFQUNaLG9DQUFvQztFQUVwQyw0QkFBNEIsRUFBQTs7QUFHOUI7O0VBRUUsaUNBQWlDO0VBRWpDLHlCQUF5QixFQUFBOztBQUczQjtFQUdFLHVDQUF1QyxFQUFBOztBQUd6QyxvQkFBQTs7QUFDQTtFQUNFLGVBQWU7RUFDZix5QkFBeUI7RUFDekIsc0JBQXNCO0VBQ3RCLHFCQUFpQjtNQUFqQixpQkFBaUI7RUFDakIsa0NBQWtDO0VBRWxDLDBCQUEwQixFQUFBOztBQUc1QjtFQUNFLGtEQUFrRDtFQUVsRCwwQ0FBMEMsRUFBQTs7QUFHNUMsbUJBQUE7O0FBQ0E7RUFDRSxrQ0FBa0M7RUFFbEMsMEJBQTBCLEVBQUE7O0FBRzVCO0VBQ0UsbUNBQW1DO0VBRW5DLDJCQUEyQixFQUFBOztBQUc3Qix1QkFBQTs7QUFDQTs7Ozs7Ozs7Ozs7O0VBWUUsa0JBQWtCO0VBQ2xCLE1BQU07RUFDTixPQUFPLEVBQUE7O0FBR1Qsb0JBQUE7O0FBQ0E7O0VBRUUsVUFBVTtFQUNWLFlBQVksRUFBQTs7QUFHZDtFQUNFLGtFQUFrRTtFQUVsRSwwREFBMEQsRUFBQTs7QUFHNUQ7RUFDRSxtRUFBbUU7RUFFbkUsMkRBQTJELEVBQUE7O0FBRzdEOztFQUVFLFVBQVU7RUFDVixhQUFhLEVBQUE7O0FBR2Y7RUFDRSxvR0FBb0c7RUFFcEcsNEZBQTRGLEVBQUE7O0FBRzlGO0VBQ0UsaUNBQWlDO0VBQ2pDLHNHQUFzRztFQUV0Ryw4RkFBOEYsRUFBQTs7QUFHaEcsdUJBQUE7O0FBRUE7O0VBRUUsVUFBVTtFQUNWLFlBQVksRUFBQTs7QUFHZDtFQUNFLGtFQUFrRTtFQUVsRSwwREFBMEQsRUFBQTs7QUFHNUQ7RUFDRSxtRUFBbUU7RUFFbkUsMkRBQTJELEVBQUE7O0FBRzdEOztFQUVFLFVBQVU7RUFDVixhQUFhLEVBQUE7O0FBR2Y7RUFDRSxtR0FBbUc7RUFFbkcsMkZBQTJGLEVBQUE7O0FBRzdGO0VBQ0Usb0NBQW9DO0VBQ3BDLHFHQUFxRztFQUVyRyw2RkFBNkYsRUFBQTs7QUFHL0YsZUFBQTs7QUFDQTtFQUNFLG9FQUFvRTtFQUVwRSw0REFBNEQ7RUFDNUQsV0FBVztFQUNYLFVBQVUsRUFBQTs7QUFHWjtFQUNFLGtDQUFrQztFQUVsQywwQkFBMEIsRUFBQTs7QUFHNUI7RUFDRSxtQ0FBbUM7RUFFbkMsMkJBQTJCLEVBQUE7O0FBRzdCLDRCQUFBOztBQUNBOztFQUVFLFVBQVU7RUFDVixZQUFZLEVBQUE7O0FBR2Q7RUFDRSxrRUFBa0U7RUFFbEUsMERBQTBELEVBQUE7O0FBRzVEO0VBQ0Usb0RBQW9EO0VBRXBELDRDQUE0QyxFQUFBOztBQUc5Qzs7RUFFRSxVQUFVO0VBQ1YsWUFBWSxFQUFBOztBQUdkO0VBQ0UsaUdBQWlHO0VBRWpHLHlGQUF5RixFQUFBOztBQUczRjtFQUNFLGtEQUFrRDtFQUNsRCxvR0FBb0c7RUFFcEcsNEZBQTRGLEVBQUE7O0FBRzlGOztFQUVFLGtCQUFrQjtFQUNsQixNQUFNO0VBQ04sT0FBTztFQUNQLG9DQUFvQztFQUVwQyw0QkFBNEIsRUFBQTs7QUFHOUI7RUFDRSxXQUFXO0VBQ1gsV0FBVztFQUNYLE9BQU87RUFDUCxRQUFRO0VBQ1IsV0FBVyxFQUFBOztBQUdiO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWixxQ0FBcUM7RUFFckMsNkJBQTZCO0VBRzdCLHNDQUE4QjtFQUE5Qiw4QkFBOEI7RUFBOUIsaURBQThCO0VBRzlCLGdDQUFnQyxFQUFBOztBQUdsQztFQUdFLHlCQUF5QixFQUFBOztBQUczQjtFQUdFLHlCQUF5QixFQUFBOztBQUczQjtFQUdFLHlCQUF5QixFQUFBOztBQUczQjtFQUdFLHlCQUF5QixFQUFBOztBQUczQjtFQUdFLHlCQUF5QixFQUFBOztBQUczQjs7Q0NyRUM7O0FEeUVEO0VBQ0UsaURBQWlEO0VBRWpELHlDQUF5QztFQUN6QyxVQUFVLEVBQUE7O0FBR1o7RUFDRSxrQ0FBa0M7RUFFbEMsMEJBQTBCO0VBRzFCLHlCQUF5QixFQUFBOztBQUczQjtFQUNFLGtDQUFrQztFQUVsQywwQkFBMEI7RUFHMUIseUJBQXlCLEVBQUE7O0FBRzNCO0VBQ0UsbUNBQW1DO0VBRW5DLDJCQUEyQjtFQUczQix5QkFBeUIsRUFBQTs7QUFHM0I7RUFDRSxtQ0FBbUM7RUFFbkMsMkJBQTJCO0VBRzNCLHlCQUF5QixFQUFBOztBQUczQjtFQUNFLG1DQUFtQztFQUVuQywyQkFBMkI7RUFHM0IseUJBQXlCLEVBQUE7O0FBRzNCOztDQzVFQzs7QURnRkQsY0FBQTs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixNQUFNO0VBQ04sT0FBTztFQUNQLFNBQVM7RUFDVCxRQUFRO0VBQ1IsZ0JBQWdCO0VBQ2hCLG1DQUFtQztFQUVuQywyQkFBMkIsRUFBQTs7QUFHN0I7RUFHRSwwRkFBMEY7RUFDMUYsa0JBQWtCO0VBQ2xCLE1BQU07RUFDTixPQUFPO0VBQ1AsU0FBUztFQUNULFFBQVEsRUFBQTs7QUFHVjtFQUNFLFdBQVc7RUFDWCxnQkFBZ0I7RUFDaEIsc0JBQXNCO0VBQ3RCLGtCQUFrQjtFQUNsQixpQkFBaUI7RUFDakIsMkNBQTJDLEVBQUE7O0FBRzdDO0VBQ0UsY0FBYztFQUNkLGNBQWM7RUFDZCxrQkFBa0I7RUFDbEIsMkNBQTJDLEVBQUE7O0FBRzdDO0VBQ0UseUJBQXlCO0VBR3pCLCtEQUErRCxFQUFBOztBQUdqRTtFQUNFLHlCQUF5QjtFQUd6QiwrREFBK0QsRUFBQTs7QUFHakU7RUFDRSx5QkFBeUI7RUFHekIsK0RBQStELEVBQUE7O0FBR2pFLGtCQUFBOztBQUNBO0VBQ0U7SUFDRSxXQUFXO0lBQ1gsaUJBQWlCO0lBQ2pCLFlBQVk7SUFDWixVQUFVO0lBQ1Ysa0JBQWtCLEVBQUE7RUFHcEI7SUFDRSxjQUFjLEVBQUEsRUFDZjs7QUFHSDtFQUNFLGdCQUFnQjtFQUNoQixnQkFBZ0IsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYm9vay9ib29rLWxpc3RpbmcvYm9vay1saXN0aW5nLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiKiB7XHJcbiAgbWFyZ2luOiAwO1xyXG4gIHBhZGRpbmc6IDA7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG59XHJcblxyXG4uZXhhbXBsZS1yYWRpby1ncm91cCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gIG1hcmdpbjogMTVweCAwO1xyXG59XHJcblxyXG4uZXhhbXBsZS1yYWRpby1idXR0b24ge1xyXG4gIG1hcmdpbjogNXB4O1xyXG59XHJcblxyXG51bCB7XHJcbiAgbWFyZ2luOiAwO1xyXG4gIHBhZGRpbmc6IDA7XHJcbiAgbGlzdC1zdHlsZTogbm9uZTtcclxufVxyXG5cclxuYSB7XHJcbiAgY29sb3I6ICMyYzNlNTA7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG59XHJcblxyXG4uYnRuIHtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICBib3JkZXI6IDJweCBzb2xpZCAjMmMzZTUwO1xyXG4gIG1hcmdpbi10b3A6IDEwMHB4O1xyXG4gIGZvbnQtc2l6ZTogMC45ZW07XHJcbiAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICBwYWRkaW5nOiAwLjFlbSAwLjRlbTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBjb2xvciAwLjNzLCBib3JkZXItY29sb3IgMC4zcztcclxuICAtbW96LXRyYW5zaXRpb246IGNvbG9yIDAuM3MsIGJvcmRlci1jb2xvciAwLjNzO1xyXG4gIHRyYW5zaXRpb246IGNvbG9yIDAuM3MsIGJvcmRlci1jb2xvciAwLjNzO1xyXG59XHJcblxyXG4udGl0bGUge1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBtYXgtd2lkdGg6IDgwJTtcclxuICBtYXJnaW4tdG9wOiAxMnB4O1xyXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgZm9udC1zaXplOiAxZW07XHJcbiAgd29yZC13cmFwOiBicmVhay13b3JkO1xyXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIC13ZWJraXQtdHJhbnNpdGlvbjogY29sb3IgMC4zcywgYm9yZGVyLWNvbG9yIDAuM3M7XHJcbiAgLW1vei10cmFuc2l0aW9uOiBjb2xvciAwLjNzLCBib3JkZXItY29sb3IgMC4zcztcclxuICB0cmFuc2l0aW9uOiBjb2xvciAwLjNzLCBib3JkZXItY29sb3IgMC4zcztcclxufVxyXG5cclxuLmJ0bjpob3ZlciB7XHJcbiAgYm9yZGVyLWNvbG9yOiAjMTZhMDg1O1xyXG4gIGNvbG9yOiAjMTZhMDg1O1xyXG59XHJcblxyXG4vKiBiYXNpYyBncmlkLCBvbmx5IGZvciB0aGlzIGRlbW8gKi9cclxuXHJcbi5hbGlnbiB7XHJcbiAgY2xlYXI6IGJvdGg7XHJcbiAgbWF4LXdpZHRoOiA4MDBweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5hbGlnbiA+IGxpIHtcclxuICB3aWR0aDogMTUlO1xyXG4gIG1pbi1oZWlnaHQ6IDBweDtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgbWFyZ2luOiAzMHB4IDIwcHggMzBweCAzMHB4O1xyXG4gIHBhZGRpbmc6IDAgMCAwIDYwcHg7XHJcbiAgdmVydGljYWwtYWxpZ246IHRvcDtcclxufVxyXG5cclxuLypcclxuXHQxLiBjb250YWluZXJcclxuKi9cclxuXHJcbi5ib29rIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgd2lkdGg6IDE2MHB4O1xyXG4gIGhlaWdodDogMjIwcHg7XHJcbiAgLXdlYmtpdC1wZXJzcGVjdGl2ZTogMTAwMHB4O1xyXG4gIC1tb3otcGVyc3BlY3RpdmU6IDEwMDBweDtcclxuICBwZXJzcGVjdGl2ZTogMTAwMHB4O1xyXG4gIC13ZWJraXQtdHJhbnNmb3JtLXN0eWxlOiBwcmVzZXJ2ZS0zZDtcclxuICAtbW96LXRyYW5zZm9ybS1zdHlsZTogcHJlc2VydmUtM2Q7XHJcbiAgdHJhbnNmb3JtLXN0eWxlOiBwcmVzZXJ2ZS0zZDtcclxufVxyXG5cclxuLypcclxuXHQyLiBiYWNrZ3JvdW5kICYgY29sb3JcclxuKi9cclxuXHJcbi8qIEhBUkRDT1ZFUiBGUk9OVCAqL1xyXG4uaGFyZGNvdmVyX2Zyb250IGxpOmZpcnN0LWNoaWxkIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWVlO1xyXG4gIC13ZWJraXQtYmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuO1xyXG4gIC1tb3otYmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuO1xyXG4gIGJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjtcclxufVxyXG5cclxuLyogcmV2ZXJzZSAqL1xyXG4uaGFyZGNvdmVyX2Zyb250IGxpOmxhc3QtY2hpbGQge1xyXG4gIGJhY2tncm91bmQ6ICNmZmZiZWM7XHJcbn1cclxuXHJcbi8qIEhBUkRDT1ZFUiBCQUNLICovXHJcbi5oYXJkY292ZXJfYmFjayBsaTpmaXJzdC1jaGlsZCB7XHJcbiAgYmFja2dyb3VuZDogI2ZmZmJlYztcclxufVxyXG5cclxuLyogcmV2ZXJzZSAqL1xyXG4uaGFyZGNvdmVyX2JhY2sgbGk6bGFzdC1jaGlsZCB7XHJcbiAgYmFja2dyb3VuZDogI2ZmZmJlYztcclxufVxyXG5cclxuLmJvb2tfc3BpbmUgbGk6Zmlyc3QtY2hpbGQge1xyXG4gIGJhY2tncm91bmQ6ICNlZWU7XHJcbn1cclxuXHJcbi5ib29rX3NwaW5lIGxpOmxhc3QtY2hpbGQge1xyXG4gIGJhY2tncm91bmQ6ICMzMzM7XHJcbn1cclxuXHJcbi8qIHRoaWNrbmVzcyBvZiBjb3ZlciAqL1xyXG5cclxuLmhhcmRjb3Zlcl9mcm9udCBsaTpmaXJzdC1jaGlsZDphZnRlcixcclxuLmhhcmRjb3Zlcl9mcm9udCBsaTpmaXJzdC1jaGlsZDpiZWZvcmUsXHJcbi5oYXJkY292ZXJfZnJvbnQgbGk6bGFzdC1jaGlsZDphZnRlcixcclxuLmhhcmRjb3Zlcl9mcm9udCBsaTpsYXN0LWNoaWxkOmJlZm9yZSxcclxuLmhhcmRjb3Zlcl9iYWNrIGxpOmZpcnN0LWNoaWxkOmFmdGVyLFxyXG4uaGFyZGNvdmVyX2JhY2sgbGk6Zmlyc3QtY2hpbGQ6YmVmb3JlLFxyXG4uaGFyZGNvdmVyX2JhY2sgbGk6bGFzdC1jaGlsZDphZnRlcixcclxuLmhhcmRjb3Zlcl9iYWNrIGxpOmxhc3QtY2hpbGQ6YmVmb3JlLFxyXG4uYm9va19zcGluZSBsaTpmaXJzdC1jaGlsZDphZnRlcixcclxuLmJvb2tfc3BpbmUgbGk6Zmlyc3QtY2hpbGQ6YmVmb3JlLFxyXG4uYm9va19zcGluZSBsaTpsYXN0LWNoaWxkOmFmdGVyLFxyXG4uYm9va19zcGluZSBsaTpsYXN0LWNoaWxkOmJlZm9yZSB7XHJcbiAgYmFja2dyb3VuZDogIzk5OTtcclxufVxyXG5cclxuLyogcGFnZSAqL1xyXG5cclxuLnBhZ2UgPiBsaSB7XHJcbiAgYmFja2dyb3VuZDogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQobGVmdCwgI2UxZGRkOCAwJSwgI2ZmZmJmNiAxMDAlKTtcclxuICBiYWNrZ3JvdW5kOiAtbW96LWxpbmVhci1ncmFkaWVudChsZWZ0LCAjZTFkZGQ4IDAlLCAjZmZmYmY2IDEwMCUpO1xyXG4gIGJhY2tncm91bmQ6IC1tcy1saW5lYXItZ3JhZGllbnQobGVmdCwgI2UxZGRkOCAwJSwgI2ZmZmJmNiAxMDAlKTtcclxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQobGVmdCwgI2UxZGRkOCAwJSwgI2ZmZmJmNiAxMDAlKTtcclxuICBib3gtc2hhZG93OiBpbnNldCAwcHggLTFweCAycHggcmdiYSg1MCwgNTAsIDUwLCAwLjEpLCBpbnNldCAtMXB4IDBweCAxcHggcmdiYSgxNTAsIDE1MCwgMTUwLCAwLjIpO1xyXG4gIGJvcmRlci1yYWRpdXM6IDBweCA1cHggNXB4IDBweDtcclxufVxyXG5cclxuLypcclxuXHQzLiBvcGVuaW5nIGNvdmVyLCBiYWNrIGNvdmVyIGFuZCBwYWdlc1xyXG4qL1xyXG5cclxuLmhhcmRjb3Zlcl9mcm9udCB7XHJcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZVkoLTM0ZGVnKSB0cmFuc2xhdGVaKDhweCk7XHJcbiAgLW1vei10cmFuc2Zvcm06IHJvdGF0ZVkoLTM0ZGVnKSB0cmFuc2xhdGVaKDhweCk7XHJcbiAgdHJhbnNmb3JtOiByb3RhdGVZKC0zNGRlZykgdHJhbnNsYXRlWig4cHgpO1xyXG4gIHotaW5kZXg6IDEwMDtcclxufVxyXG5cclxuLmhhcmRjb3Zlcl9iYWNrIHtcclxuICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlWSgtMTVkZWcpIHRyYW5zbGF0ZVooLThweCk7XHJcbiAgLW1vei10cmFuc2Zvcm06IHJvdGF0ZVkoLTE1ZGVnKSB0cmFuc2xhdGVaKC04cHgpO1xyXG4gIHRyYW5zZm9ybTogcm90YXRlWSgtMTVkZWcpIHRyYW5zbGF0ZVooLThweCk7XHJcbn1cclxuXHJcbi5wYWdlIGxpOm50aC1jaGlsZCgxKSB7XHJcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZVkoLTI4ZGVnKTtcclxuICAtbW96LXRyYW5zZm9ybTogcm90YXRlWSgtMjhkZWcpO1xyXG4gIHRyYW5zZm9ybTogcm90YXRlWSgtMjhkZWcpO1xyXG59XHJcblxyXG4ucGFnZSBsaTpudGgtY2hpbGQoMikge1xyXG4gIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGVZKC0zMGRlZyk7XHJcbiAgLW1vei10cmFuc2Zvcm06IHJvdGF0ZVkoLTMwZGVnKTtcclxuICB0cmFuc2Zvcm06IHJvdGF0ZVkoLTMwZGVnKTtcclxufVxyXG5cclxuLnBhZ2UgbGk6bnRoLWNoaWxkKDMpIHtcclxuICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlWSgtMzJkZWcpO1xyXG4gIC1tb3otdHJhbnNmb3JtOiByb3RhdGVZKC0zMmRlZyk7XHJcbiAgdHJhbnNmb3JtOiByb3RhdGVZKC0zMmRlZyk7XHJcbn1cclxuXHJcbi5wYWdlIGxpOm50aC1jaGlsZCg0KSB7XHJcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZVkoLTM0ZGVnKTtcclxuICAtbW96LXRyYW5zZm9ybTogcm90YXRlWSgtMzRkZWcpO1xyXG4gIHRyYW5zZm9ybTogcm90YXRlWSgtMzRkZWcpO1xyXG59XHJcblxyXG4ucGFnZSBsaTpudGgtY2hpbGQoNSkge1xyXG4gIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGVZKC0zNmRlZyk7XHJcbiAgLW1vei10cmFuc2Zvcm06IHJvdGF0ZVkoLTM2ZGVnKTtcclxuICB0cmFuc2Zvcm06IHJvdGF0ZVkoLTM2ZGVnKTtcclxufVxyXG5cclxuLypcclxuXHQ0LiBwb3NpdGlvbiwgdHJhbnNmb3JtICYgdHJhbnNpdGlvblxyXG4qL1xyXG5cclxuLmhhcmRjb3Zlcl9mcm9udCxcclxuLmhhcmRjb3Zlcl9iYWNrLFxyXG4uYm9va19zcGluZSxcclxuLmhhcmRjb3Zlcl9mcm9udCBsaSxcclxuLmhhcmRjb3Zlcl9iYWNrIGxpLFxyXG4uYm9va19zcGluZSBsaSB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogMDtcclxuICBsZWZ0OiAwO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICAtd2Via2l0LXRyYW5zZm9ybS1zdHlsZTogcHJlc2VydmUtM2Q7XHJcbiAgLW1vei10cmFuc2Zvcm0tc3R5bGU6IHByZXNlcnZlLTNkO1xyXG4gIHRyYW5zZm9ybS1zdHlsZTogcHJlc2VydmUtM2Q7XHJcbn1cclxuXHJcbi5oYXJkY292ZXJfZnJvbnQsXHJcbi5oYXJkY292ZXJfYmFjayB7XHJcbiAgLXdlYmtpdC10cmFuc2Zvcm0tb3JpZ2luOiAwJSAxMDAlO1xyXG4gIC1tb3otdHJhbnNmb3JtLW9yaWdpbjogMCUgMTAwJTtcclxuICB0cmFuc2Zvcm0tb3JpZ2luOiAwJSAxMDAlO1xyXG59XHJcblxyXG4uaGFyZGNvdmVyX2Zyb250IHtcclxuICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjhzIGVhc2UsIHotaW5kZXggMC42cztcclxuICAtbW96LXRyYW5zaXRpb246IGFsbCAwLjhzIGVhc2UsIHotaW5kZXggMC42cztcclxuICB0cmFuc2l0aW9uOiBhbGwgMC44cyBlYXNlLCB6LWluZGV4IDAuNnM7XHJcbn1cclxuXHJcbi8qIEhBUkRDT1ZFUiBmcm9udCAqL1xyXG4uaGFyZGNvdmVyX2Zyb250IGxpOmZpcnN0LWNoaWxkIHtcclxuICBjdXJzb3I6IGRlZmF1bHQ7XHJcbiAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcclxuICAtbW96LXVzZXItc2VsZWN0OiBub25lO1xyXG4gIHVzZXItc2VsZWN0OiBub25lO1xyXG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVaKDJweCk7XHJcbiAgLW1vei10cmFuc2Zvcm06IHRyYW5zbGF0ZVooMnB4KTtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVooMnB4KTtcclxufVxyXG5cclxuLmhhcmRjb3Zlcl9mcm9udCBsaTpsYXN0LWNoaWxkIHtcclxuICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlWSgxODBkZWcpIHRyYW5zbGF0ZVooMnB4KTtcclxuICAtbW96LXRyYW5zZm9ybTogcm90YXRlWSgxODBkZWcpIHRyYW5zbGF0ZVooMnB4KTtcclxuICB0cmFuc2Zvcm06IHJvdGF0ZVkoMTgwZGVnKSB0cmFuc2xhdGVaKDJweCk7XHJcbn1cclxuXHJcbi8qIEhBUkRDT1ZFUiBiYWNrICovXHJcbi5oYXJkY292ZXJfYmFjayBsaTpmaXJzdC1jaGlsZCB7XHJcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVooMnB4KTtcclxuICAtbW96LXRyYW5zZm9ybTogdHJhbnNsYXRlWigycHgpO1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWigycHgpO1xyXG59XHJcblxyXG4uaGFyZGNvdmVyX2JhY2sgbGk6bGFzdC1jaGlsZCB7XHJcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVooLTJweCk7XHJcbiAgLW1vei10cmFuc2Zvcm06IHRyYW5zbGF0ZVooLTJweCk7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVaKC0ycHgpO1xyXG59XHJcblxyXG4vKiB0aGlja25lc3Mgb2YgY292ZXIgKi9cclxuLmhhcmRjb3Zlcl9mcm9udCBsaTpmaXJzdC1jaGlsZDphZnRlcixcclxuLmhhcmRjb3Zlcl9mcm9udCBsaTpmaXJzdC1jaGlsZDpiZWZvcmUsXHJcbi5oYXJkY292ZXJfZnJvbnQgbGk6bGFzdC1jaGlsZDphZnRlcixcclxuLmhhcmRjb3Zlcl9mcm9udCBsaTpsYXN0LWNoaWxkOmJlZm9yZSxcclxuLmhhcmRjb3Zlcl9iYWNrIGxpOmZpcnN0LWNoaWxkOmFmdGVyLFxyXG4uaGFyZGNvdmVyX2JhY2sgbGk6Zmlyc3QtY2hpbGQ6YmVmb3JlLFxyXG4uaGFyZGNvdmVyX2JhY2sgbGk6bGFzdC1jaGlsZDphZnRlcixcclxuLmhhcmRjb3Zlcl9iYWNrIGxpOmxhc3QtY2hpbGQ6YmVmb3JlLFxyXG4uYm9va19zcGluZSBsaTpmaXJzdC1jaGlsZDphZnRlcixcclxuLmJvb2tfc3BpbmUgbGk6Zmlyc3QtY2hpbGQ6YmVmb3JlLFxyXG4uYm9va19zcGluZSBsaTpsYXN0LWNoaWxkOmFmdGVyLFxyXG4uYm9va19zcGluZSBsaTpsYXN0LWNoaWxkOmJlZm9yZSB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogMDtcclxuICBsZWZ0OiAwO1xyXG59XHJcblxyXG4vKiBIQVJEQ09WRVIgZnJvbnQgKi9cclxuLmhhcmRjb3Zlcl9mcm9udCBsaTpmaXJzdC1jaGlsZDphZnRlcixcclxuLmhhcmRjb3Zlcl9mcm9udCBsaTpmaXJzdC1jaGlsZDpiZWZvcmUge1xyXG4gIHdpZHRoOiA0cHg7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG59XHJcblxyXG4uaGFyZGNvdmVyX2Zyb250IGxpOmZpcnN0LWNoaWxkOmFmdGVyIHtcclxuICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlWSg5MGRlZykgdHJhbnNsYXRlWigtMnB4KSB0cmFuc2xhdGVYKDJweCk7XHJcbiAgLW1vei10cmFuc2Zvcm06IHJvdGF0ZVkoOTBkZWcpIHRyYW5zbGF0ZVooLTJweCkgdHJhbnNsYXRlWCgycHgpO1xyXG4gIHRyYW5zZm9ybTogcm90YXRlWSg5MGRlZykgdHJhbnNsYXRlWigtMnB4KSB0cmFuc2xhdGVYKDJweCk7XHJcbn1cclxuXHJcbi5oYXJkY292ZXJfZnJvbnQgbGk6Zmlyc3QtY2hpbGQ6YmVmb3JlIHtcclxuICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlWSg5MGRlZykgdHJhbnNsYXRlWigxNThweCkgdHJhbnNsYXRlWCgycHgpO1xyXG4gIC1tb3otdHJhbnNmb3JtOiByb3RhdGVZKDkwZGVnKSB0cmFuc2xhdGVaKDE1OHB4KSB0cmFuc2xhdGVYKDJweCk7XHJcbiAgdHJhbnNmb3JtOiByb3RhdGVZKDkwZGVnKSB0cmFuc2xhdGVaKDE1OHB4KSB0cmFuc2xhdGVYKDJweCk7XHJcbn1cclxuXHJcbi5oYXJkY292ZXJfZnJvbnQgbGk6bGFzdC1jaGlsZDphZnRlcixcclxuLmhhcmRjb3Zlcl9mcm9udCBsaTpsYXN0LWNoaWxkOmJlZm9yZSB7XHJcbiAgd2lkdGg6IDRweDtcclxuICBoZWlnaHQ6IDE2MHB4O1xyXG59XHJcblxyXG4uaGFyZGNvdmVyX2Zyb250IGxpOmxhc3QtY2hpbGQ6YWZ0ZXIge1xyXG4gIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGVYKDkwZGVnKSByb3RhdGVaKDkwZGVnKSB0cmFuc2xhdGVaKDgwcHgpIHRyYW5zbGF0ZVgoLTJweCkgdHJhbnNsYXRlWSgtNzhweCk7XHJcbiAgLW1vei10cmFuc2Zvcm06IHJvdGF0ZVgoOTBkZWcpIHJvdGF0ZVooOTBkZWcpIHRyYW5zbGF0ZVooODBweCkgdHJhbnNsYXRlWCgtMnB4KSB0cmFuc2xhdGVZKC03OHB4KTtcclxuICB0cmFuc2Zvcm06IHJvdGF0ZVgoOTBkZWcpIHJvdGF0ZVooOTBkZWcpIHRyYW5zbGF0ZVooODBweCkgdHJhbnNsYXRlWCgtMnB4KSB0cmFuc2xhdGVZKC03OHB4KTtcclxufVxyXG5cclxuLmhhcmRjb3Zlcl9mcm9udCBsaTpsYXN0LWNoaWxkOmJlZm9yZSB7XHJcbiAgYm94LXNoYWRvdzogMHB4IDBweCAzMHB4IDVweCAjMzMzO1xyXG4gIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGVYKDkwZGVnKSByb3RhdGVaKDkwZGVnKSB0cmFuc2xhdGVaKC0xNDBweCkgdHJhbnNsYXRlWCgtMnB4KSB0cmFuc2xhdGVZKC03OHB4KTtcclxuICAtbW96LXRyYW5zZm9ybTogcm90YXRlWCg5MGRlZykgcm90YXRlWig5MGRlZykgdHJhbnNsYXRlWigtMTQwcHgpIHRyYW5zbGF0ZVgoLTJweCkgdHJhbnNsYXRlWSgtNzhweCk7XHJcbiAgdHJhbnNmb3JtOiByb3RhdGVYKDkwZGVnKSByb3RhdGVaKDkwZGVnKSB0cmFuc2xhdGVaKC0xNDBweCkgdHJhbnNsYXRlWCgtMnB4KSB0cmFuc2xhdGVZKC03OHB4KTtcclxufVxyXG5cclxuLyogdGhpY2tuZXNzIG9mIGNvdmVyICovXHJcblxyXG4uaGFyZGNvdmVyX2JhY2sgbGk6Zmlyc3QtY2hpbGQ6YWZ0ZXIsXHJcbi5oYXJkY292ZXJfYmFjayBsaTpmaXJzdC1jaGlsZDpiZWZvcmUge1xyXG4gIHdpZHRoOiA0cHg7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG59XHJcblxyXG4uaGFyZGNvdmVyX2JhY2sgbGk6Zmlyc3QtY2hpbGQ6YWZ0ZXIge1xyXG4gIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGVZKDkwZGVnKSB0cmFuc2xhdGVaKC0ycHgpIHRyYW5zbGF0ZVgoMnB4KTtcclxuICAtbW96LXRyYW5zZm9ybTogcm90YXRlWSg5MGRlZykgdHJhbnNsYXRlWigtMnB4KSB0cmFuc2xhdGVYKDJweCk7XHJcbiAgdHJhbnNmb3JtOiByb3RhdGVZKDkwZGVnKSB0cmFuc2xhdGVaKC0ycHgpIHRyYW5zbGF0ZVgoMnB4KTtcclxufVxyXG5cclxuLmhhcmRjb3Zlcl9iYWNrIGxpOmZpcnN0LWNoaWxkOmJlZm9yZSB7XHJcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZVkoOTBkZWcpIHRyYW5zbGF0ZVooMTU4cHgpIHRyYW5zbGF0ZVgoMnB4KTtcclxuICAtbW96LXRyYW5zZm9ybTogcm90YXRlWSg5MGRlZykgdHJhbnNsYXRlWigxNThweCkgdHJhbnNsYXRlWCgycHgpO1xyXG4gIHRyYW5zZm9ybTogcm90YXRlWSg5MGRlZykgdHJhbnNsYXRlWigxNThweCkgdHJhbnNsYXRlWCgycHgpO1xyXG59XHJcblxyXG4uaGFyZGNvdmVyX2JhY2sgbGk6bGFzdC1jaGlsZDphZnRlcixcclxuLmhhcmRjb3Zlcl9iYWNrIGxpOmxhc3QtY2hpbGQ6YmVmb3JlIHtcclxuICB3aWR0aDogNHB4O1xyXG4gIGhlaWdodDogMTYwcHg7XHJcbn1cclxuXHJcbi5oYXJkY292ZXJfYmFjayBsaTpsYXN0LWNoaWxkOmFmdGVyIHtcclxuICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlWCg5MGRlZykgcm90YXRlWig5MGRlZykgdHJhbnNsYXRlWig4MHB4KSB0cmFuc2xhdGVYKDJweCkgdHJhbnNsYXRlWSgtNzhweCk7XHJcbiAgLW1vei10cmFuc2Zvcm06IHJvdGF0ZVgoOTBkZWcpIHJvdGF0ZVooOTBkZWcpIHRyYW5zbGF0ZVooODBweCkgdHJhbnNsYXRlWCgycHgpIHRyYW5zbGF0ZVkoLTc4cHgpO1xyXG4gIHRyYW5zZm9ybTogcm90YXRlWCg5MGRlZykgcm90YXRlWig5MGRlZykgdHJhbnNsYXRlWig4MHB4KSB0cmFuc2xhdGVYKDJweCkgdHJhbnNsYXRlWSgtNzhweCk7XHJcbn1cclxuXHJcbi5oYXJkY292ZXJfYmFjayBsaTpsYXN0LWNoaWxkOmJlZm9yZSB7XHJcbiAgYm94LXNoYWRvdzogMTBweCAtMXB4IDgwcHggMjBweCAjNjY2O1xyXG4gIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGVYKDkwZGVnKSByb3RhdGVaKDkwZGVnKSB0cmFuc2xhdGVaKC0xNDBweCkgdHJhbnNsYXRlWCgycHgpIHRyYW5zbGF0ZVkoLTc4cHgpO1xyXG4gIC1tb3otdHJhbnNmb3JtOiByb3RhdGVYKDkwZGVnKSByb3RhdGVaKDkwZGVnKSB0cmFuc2xhdGVaKC0xNDBweCkgdHJhbnNsYXRlWCgycHgpIHRyYW5zbGF0ZVkoLTc4cHgpO1xyXG4gIHRyYW5zZm9ybTogcm90YXRlWCg5MGRlZykgcm90YXRlWig5MGRlZykgdHJhbnNsYXRlWigtMTQwcHgpIHRyYW5zbGF0ZVgoMnB4KSB0cmFuc2xhdGVZKC03OHB4KTtcclxufVxyXG5cclxuLyogQk9PSyBTUElORSAqL1xyXG4uYm9va19zcGluZSB7XHJcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZVkoNjBkZWcpIHRyYW5zbGF0ZVgoLTVweCkgdHJhbnNsYXRlWigtMTJweCk7XHJcbiAgLW1vei10cmFuc2Zvcm06IHJvdGF0ZVkoNjBkZWcpIHRyYW5zbGF0ZVgoLTVweCkgdHJhbnNsYXRlWigtMTJweCk7XHJcbiAgdHJhbnNmb3JtOiByb3RhdGVZKDYwZGVnKSB0cmFuc2xhdGVYKC01cHgpIHRyYW5zbGF0ZVooLTEycHgpO1xyXG4gIHdpZHRoOiAxNnB4O1xyXG4gIHotaW5kZXg6IDA7XHJcbn1cclxuXHJcbi5ib29rX3NwaW5lIGxpOmZpcnN0LWNoaWxkIHtcclxuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWigycHgpO1xyXG4gIC1tb3otdHJhbnNmb3JtOiB0cmFuc2xhdGVaKDJweCk7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVaKDJweCk7XHJcbn1cclxuXHJcbi5ib29rX3NwaW5lIGxpOmxhc3QtY2hpbGQge1xyXG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVaKC0ycHgpO1xyXG4gIC1tb3otdHJhbnNmb3JtOiB0cmFuc2xhdGVaKC0ycHgpO1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWigtMnB4KTtcclxufVxyXG5cclxuLyogdGhpY2tuZXNzIG9mIGJvb2sgc3BpbmUgKi9cclxuLmJvb2tfc3BpbmUgbGk6Zmlyc3QtY2hpbGQ6YWZ0ZXIsXHJcbi5ib29rX3NwaW5lIGxpOmZpcnN0LWNoaWxkOmJlZm9yZSB7XHJcbiAgd2lkdGg6IDRweDtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbn1cclxuXHJcbi5ib29rX3NwaW5lIGxpOmZpcnN0LWNoaWxkOmFmdGVyIHtcclxuICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlWSg5MGRlZykgdHJhbnNsYXRlWigtMnB4KSB0cmFuc2xhdGVYKDJweCk7XHJcbiAgLW1vei10cmFuc2Zvcm06IHJvdGF0ZVkoOTBkZWcpIHRyYW5zbGF0ZVooLTJweCkgdHJhbnNsYXRlWCgycHgpO1xyXG4gIHRyYW5zZm9ybTogcm90YXRlWSg5MGRlZykgdHJhbnNsYXRlWigtMnB4KSB0cmFuc2xhdGVYKDJweCk7XHJcbn1cclxuXHJcbi5ib29rX3NwaW5lIGxpOmZpcnN0LWNoaWxkOmJlZm9yZSB7XHJcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZVkoLTkwZGVnKSB0cmFuc2xhdGVaKC0xMnB4KTtcclxuICAtbW96LXRyYW5zZm9ybTogcm90YXRlWSgtOTBkZWcpIHRyYW5zbGF0ZVooLTEycHgpO1xyXG4gIHRyYW5zZm9ybTogcm90YXRlWSgtOTBkZWcpIHRyYW5zbGF0ZVooLTEycHgpO1xyXG59XHJcblxyXG4uYm9va19zcGluZSBsaTpsYXN0LWNoaWxkOmFmdGVyLFxyXG4uYm9va19zcGluZSBsaTpsYXN0LWNoaWxkOmJlZm9yZSB7XHJcbiAgd2lkdGg6IDRweDtcclxuICBoZWlnaHQ6IDE2cHg7XHJcbn1cclxuXHJcbi5ib29rX3NwaW5lIGxpOmxhc3QtY2hpbGQ6YWZ0ZXIge1xyXG4gIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGVYKDkwZGVnKSByb3RhdGVaKDkwZGVnKSB0cmFuc2xhdGVaKDhweCkgdHJhbnNsYXRlWCgycHgpIHRyYW5zbGF0ZVkoLTZweCk7XHJcbiAgLW1vei10cmFuc2Zvcm06IHJvdGF0ZVgoOTBkZWcpIHJvdGF0ZVooOTBkZWcpIHRyYW5zbGF0ZVooOHB4KSB0cmFuc2xhdGVYKDJweCkgdHJhbnNsYXRlWSgtNnB4KTtcclxuICB0cmFuc2Zvcm06IHJvdGF0ZVgoOTBkZWcpIHJvdGF0ZVooOTBkZWcpIHRyYW5zbGF0ZVooOHB4KSB0cmFuc2xhdGVYKDJweCkgdHJhbnNsYXRlWSgtNnB4KTtcclxufVxyXG5cclxuLmJvb2tfc3BpbmUgbGk6bGFzdC1jaGlsZDpiZWZvcmUge1xyXG4gIGJveC1zaGFkb3c6IDVweCAtMXB4IDEwMHB4IDQwcHggcmdiYSgwLCAwLCAwLCAwLjIpO1xyXG4gIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGVYKDkwZGVnKSByb3RhdGVaKDkwZGVnKSB0cmFuc2xhdGVaKC0yMTBweCkgdHJhbnNsYXRlWCgycHgpIHRyYW5zbGF0ZVkoLTZweCk7XHJcbiAgLW1vei10cmFuc2Zvcm06IHJvdGF0ZVgoOTBkZWcpIHJvdGF0ZVooOTBkZWcpIHRyYW5zbGF0ZVooLTIxMHB4KSB0cmFuc2xhdGVYKDJweCkgdHJhbnNsYXRlWSgtNnB4KTtcclxuICB0cmFuc2Zvcm06IHJvdGF0ZVgoOTBkZWcpIHJvdGF0ZVooOTBkZWcpIHRyYW5zbGF0ZVooLTIxMHB4KSB0cmFuc2xhdGVYKDJweCkgdHJhbnNsYXRlWSgtNnB4KTtcclxufVxyXG5cclxuLnBhZ2UsXHJcbi5wYWdlID4gbGkge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDA7XHJcbiAgbGVmdDogMDtcclxuICAtd2Via2l0LXRyYW5zZm9ybS1zdHlsZTogcHJlc2VydmUtM2Q7XHJcbiAgLW1vei10cmFuc2Zvcm0tc3R5bGU6IHByZXNlcnZlLTNkO1xyXG4gIHRyYW5zZm9ybS1zdHlsZTogcHJlc2VydmUtM2Q7XHJcbn1cclxuXHJcbi5wYWdlIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDk4JTtcclxuICB0b3A6IDElO1xyXG4gIGxlZnQ6IDMlO1xyXG4gIHotaW5kZXg6IDEwO1xyXG59XHJcblxyXG4ucGFnZSA+IGxpIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgLXdlYmtpdC10cmFuc2Zvcm0tb3JpZ2luOiBsZWZ0IGNlbnRlcjtcclxuICAtbW96LXRyYW5zZm9ybS1vcmlnaW46IGxlZnQgY2VudGVyO1xyXG4gIHRyYW5zZm9ybS1vcmlnaW46IGxlZnQgY2VudGVyO1xyXG4gIC13ZWJraXQtdHJhbnNpdGlvbi1wcm9wZXJ0eTogdHJhbnNmb3JtO1xyXG4gIC1tb3otdHJhbnNpdGlvbi1wcm9wZXJ0eTogdHJhbnNmb3JtO1xyXG4gIHRyYW5zaXRpb24tcHJvcGVydHk6IHRyYW5zZm9ybTtcclxuICAtd2Via2l0LXRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlO1xyXG4gIC1tb3otdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2U7XHJcbiAgdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2U7XHJcbn1cclxuXHJcbi5wYWdlID4gbGk6bnRoLWNoaWxkKDEpIHtcclxuICAtd2Via2l0LXRyYW5zaXRpb24tZHVyYXRpb246IDAuNnM7XHJcbiAgLW1vei10cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjZzO1xyXG4gIHRyYW5zaXRpb24tZHVyYXRpb246IDAuNnM7XHJcbn1cclxuXHJcbi5wYWdlID4gbGk6bnRoLWNoaWxkKDIpIHtcclxuICAtd2Via2l0LXRyYW5zaXRpb24tZHVyYXRpb246IDAuNnM7XHJcbiAgLW1vei10cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjZzO1xyXG4gIHRyYW5zaXRpb24tZHVyYXRpb246IDAuNnM7XHJcbn1cclxuXHJcbi5wYWdlID4gbGk6bnRoLWNoaWxkKDMpIHtcclxuICAtd2Via2l0LXRyYW5zaXRpb24tZHVyYXRpb246IDAuNHM7XHJcbiAgLW1vei10cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjRzO1xyXG4gIHRyYW5zaXRpb24tZHVyYXRpb246IDAuNHM7XHJcbn1cclxuXHJcbi5wYWdlID4gbGk6bnRoLWNoaWxkKDQpIHtcclxuICAtd2Via2l0LXRyYW5zaXRpb24tZHVyYXRpb246IDAuNXM7XHJcbiAgLW1vei10cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjVzO1xyXG4gIHRyYW5zaXRpb24tZHVyYXRpb246IDAuNXM7XHJcbn1cclxuXHJcbi5wYWdlID4gbGk6bnRoLWNoaWxkKDUpIHtcclxuICAtd2Via2l0LXRyYW5zaXRpb24tZHVyYXRpb246IDAuNnM7XHJcbiAgLW1vei10cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjZzO1xyXG4gIHRyYW5zaXRpb24tZHVyYXRpb246IDAuNnM7XHJcbn1cclxuXHJcbi8qXHJcblx0NS4gZXZlbnRzXHJcbiovXHJcblxyXG4uYm9vazpob3ZlciA+IC5oYXJkY292ZXJfZnJvbnQge1xyXG4gIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGVZKC0xNDVkZWcpIHRyYW5zbGF0ZVooMCk7XHJcbiAgLW1vei10cmFuc2Zvcm06IHJvdGF0ZVkoLTE0NWRlZykgdHJhbnNsYXRlWigwKTtcclxuICB0cmFuc2Zvcm06IHJvdGF0ZVkoLTE0NWRlZykgdHJhbnNsYXRlWigwKTtcclxuICB6LWluZGV4OiAwO1xyXG59XHJcblxyXG4uYm9vazpob3ZlciA+IC5wYWdlIGxpOm50aC1jaGlsZCgxKSB7XHJcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZVkoLTMwZGVnKTtcclxuICAtbW96LXRyYW5zZm9ybTogcm90YXRlWSgtMzBkZWcpO1xyXG4gIHRyYW5zZm9ybTogcm90YXRlWSgtMzBkZWcpO1xyXG4gIC13ZWJraXQtdHJhbnNpdGlvbi1kdXJhdGlvbjogMS41cztcclxuICAtbW96LXRyYW5zaXRpb24tZHVyYXRpb246IDEuNXM7XHJcbiAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMS41cztcclxufVxyXG5cclxuLmJvb2s6aG92ZXIgPiAucGFnZSBsaTpudGgtY2hpbGQoMikge1xyXG4gIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGVZKC0zNWRlZyk7XHJcbiAgLW1vei10cmFuc2Zvcm06IHJvdGF0ZVkoLTM1ZGVnKTtcclxuICB0cmFuc2Zvcm06IHJvdGF0ZVkoLTM1ZGVnKTtcclxuICAtd2Via2l0LXRyYW5zaXRpb24tZHVyYXRpb246IDEuOHM7XHJcbiAgLW1vei10cmFuc2l0aW9uLWR1cmF0aW9uOiAxLjhzO1xyXG4gIHRyYW5zaXRpb24tZHVyYXRpb246IDEuOHM7XHJcbn1cclxuXHJcbi5ib29rOmhvdmVyID4gLnBhZ2UgbGk6bnRoLWNoaWxkKDMpIHtcclxuICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlWSgtMTE4ZGVnKTtcclxuICAtbW96LXRyYW5zZm9ybTogcm90YXRlWSgtMTE4ZGVnKTtcclxuICB0cmFuc2Zvcm06IHJvdGF0ZVkoLTExOGRlZyk7XHJcbiAgLXdlYmtpdC10cmFuc2l0aW9uLWR1cmF0aW9uOiAxLjZzO1xyXG4gIC1tb3otdHJhbnNpdGlvbi1kdXJhdGlvbjogMS42cztcclxuICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAxLjZzO1xyXG59XHJcblxyXG4uYm9vazpob3ZlciA+IC5wYWdlIGxpOm50aC1jaGlsZCg0KSB7XHJcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZVkoLTEzMGRlZyk7XHJcbiAgLW1vei10cmFuc2Zvcm06IHJvdGF0ZVkoLTEzMGRlZyk7XHJcbiAgdHJhbnNmb3JtOiByb3RhdGVZKC0xMzBkZWcpO1xyXG4gIC13ZWJraXQtdHJhbnNpdGlvbi1kdXJhdGlvbjogMS40cztcclxuICAtbW96LXRyYW5zaXRpb24tZHVyYXRpb246IDEuNHM7XHJcbiAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMS40cztcclxufVxyXG5cclxuLmJvb2s6aG92ZXIgPiAucGFnZSBsaTpudGgtY2hpbGQoNSkge1xyXG4gIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGVZKC0xNDBkZWcpO1xyXG4gIC1tb3otdHJhbnNmb3JtOiByb3RhdGVZKC0xNDBkZWcpO1xyXG4gIHRyYW5zZm9ybTogcm90YXRlWSgtMTQwZGVnKTtcclxuICAtd2Via2l0LXRyYW5zaXRpb24tZHVyYXRpb246IDEuMnM7XHJcbiAgLW1vei10cmFuc2l0aW9uLWR1cmF0aW9uOiAxLjJzO1xyXG4gIHRyYW5zaXRpb24tZHVyYXRpb246IDEuMnM7XHJcbn1cclxuXHJcbi8qXHJcblx0Ni4gQm9udXNcclxuKi9cclxuXHJcbi8qIGNvdmVyIENTUyAqL1xyXG5cclxuLmNvdmVyRGVzaWduIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAwO1xyXG4gIGxlZnQ6IDA7XHJcbiAgYm90dG9tOiAwO1xyXG4gIHJpZ2h0OiAwO1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgLXdlYmtpdC1iYWNrZmFjZS12aXNpYmlsaXR5OiBoaWRkZW47XHJcbiAgLW1vei1iYWNrZmFjZS12aXNpYmlsaXR5OiBoaWRkZW47XHJcbiAgYmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuO1xyXG59XHJcblxyXG4uY292ZXJEZXNpZ246OmFmdGVyIHtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudCgtMTM1ZGVnLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNDUpIDAlLCB0cmFuc3BhcmVudCAxMDAlKTtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiAtbW96LWxpbmVhci1ncmFkaWVudCgtMTM1ZGVnLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNDUpIDAlLCB0cmFuc3BhcmVudCAxMDAlKTtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoLTEzNWRlZywgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjQ1KSAwJSwgdHJhbnNwYXJlbnQgMTAwJSk7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogMDtcclxuICBsZWZ0OiAwO1xyXG4gIGJvdHRvbTogMDtcclxuICByaWdodDogMDtcclxufVxyXG5cclxuLmNvdmVyRGVzaWduIGgxIHtcclxuICBjb2xvcjogI2ZmZjtcclxuICBmb250LXNpemU6IDIuMmVtO1xyXG4gIGxldHRlci1zcGFjaW5nOiAwLjA1ZW07XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIG1hcmdpbjogNTQlIDAgMCAwO1xyXG4gIHRleHQtc2hhZG93OiAtMXB4IC0xcHggMCByZ2JhKDAsIDAsIDAsIDAuMSk7XHJcbn1cclxuXHJcbi5jb3ZlckRlc2lnbiBwIHtcclxuICBjb2xvcjogI2Y4ZjhmODtcclxuICBmb250LXNpemU6IDFlbTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgdGV4dC1zaGFkb3c6IC0xcHggLTFweCAwIHJnYmEoMCwgMCwgMCwgMC4xKTtcclxufVxyXG5cclxuLnllbGxvdyB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YxYzQwZjtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudCh0b3AsICNmMWM0MGYgNTglLCAjZTdiYTA3IDAlKTtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiAtbW96LWxpbmVhci1ncmFkaWVudCh0b3AsICNmMWM0MGYgNTglLCAjZTdiYTA3IDAlKTtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG9wLCAjZjFjNDBmIDU4JSwgI2U3YmEwNyAwJSk7XHJcbn1cclxuXHJcbi5ibHVlIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzQ5OGRiO1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KHRvcCwgIzM0OThkYiA1OCUsICMyYTkwZDQgMCUpO1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IC1tb3otbGluZWFyLWdyYWRpZW50KHRvcCwgIzM0OThkYiA1OCUsICMyYTkwZDQgMCUpO1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0b3AsICMzNDk4ZGIgNTglLCAjMmE5MGQ0IDAlKTtcclxufVxyXG5cclxuLmdyZXkge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmOGU5ZDE7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQodG9wLCAjZjhlOWQxIDU4JSwgI2U3ZDViNyAwJSk7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogLW1vei1saW5lYXItZ3JhZGllbnQodG9wLCAjZjhlOWQxIDU4JSwgI2U3ZDViNyAwJSk7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvcCwgI2Y4ZTlkMSA1OCUsICNlN2Q1YjcgMCUpO1xyXG59XHJcblxyXG4vKiBNZWRpYSBRdWVyaWVzICovXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDM3LjgxMjVlbSkge1xyXG4gIC5hbGlnbiA+IGxpIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgbWluLWhlaWdodDogNDQwcHg7XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgbWFyZ2luOiAwIDAgMzBweCAwO1xyXG4gIH1cclxuXHJcbiAgLmJvb2sge1xyXG4gICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgfVxyXG59XHJcblxyXG4ubGlzdCB7XHJcbiAgbWF4LXdpZHRoOiA1NTBweDtcclxuICBtYXJnaW4tbGVmdDogMzAlO1xyXG59XHJcblxyXG4iLCIqIHtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7IH1cblxuLmV4YW1wbGUtcmFkaW8tZ3JvdXAge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBtYXJnaW46IDE1cHggMDsgfVxuXG4uZXhhbXBsZS1yYWRpby1idXR0b24ge1xuICBtYXJnaW46IDVweDsgfVxuXG51bCB7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbiAgbGlzdC1zdHlsZTogbm9uZTsgfVxuXG5hIHtcbiAgY29sb3I6ICMyYzNlNTA7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTsgfVxuXG4uYnRuIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBib3JkZXI6IDJweCBzb2xpZCAjMmMzZTUwO1xuICBtYXJnaW4tdG9wOiAxMDBweDtcbiAgZm9udC1zaXplOiAwLjllbTtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgcGFkZGluZzogMC4xZW0gMC40ZW07XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBjb2xvciAwLjNzLCBib3JkZXItY29sb3IgMC4zcztcbiAgLW1vei10cmFuc2l0aW9uOiBjb2xvciAwLjNzLCBib3JkZXItY29sb3IgMC4zcztcbiAgdHJhbnNpdGlvbjogY29sb3IgMC4zcywgYm9yZGVyLWNvbG9yIDAuM3M7IH1cblxuLnRpdGxlIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBtYXgtd2lkdGg6IDgwJTtcbiAgbWFyZ2luLXRvcDogMTJweDtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgZm9udC1zaXplOiAxZW07XG4gIHdvcmQtd3JhcDogYnJlYWstd29yZDtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAtd2Via2l0LXRyYW5zaXRpb246IGNvbG9yIDAuM3MsIGJvcmRlci1jb2xvciAwLjNzO1xuICAtbW96LXRyYW5zaXRpb246IGNvbG9yIDAuM3MsIGJvcmRlci1jb2xvciAwLjNzO1xuICB0cmFuc2l0aW9uOiBjb2xvciAwLjNzLCBib3JkZXItY29sb3IgMC4zczsgfVxuXG4uYnRuOmhvdmVyIHtcbiAgYm9yZGVyLWNvbG9yOiAjMTZhMDg1O1xuICBjb2xvcjogIzE2YTA4NTsgfVxuXG4vKiBiYXNpYyBncmlkLCBvbmx5IGZvciB0aGlzIGRlbW8gKi9cbi5hbGlnbiB7XG4gIGNsZWFyOiBib3RoO1xuICBtYXgtd2lkdGg6IDgwMHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7IH1cblxuLmFsaWduID4gbGkge1xuICB3aWR0aDogMTUlO1xuICBtaW4taGVpZ2h0OiAwcHg7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgbWFyZ2luOiAzMHB4IDIwcHggMzBweCAzMHB4O1xuICBwYWRkaW5nOiAwIDAgMCA2MHB4O1xuICB2ZXJ0aWNhbC1hbGlnbjogdG9wOyB9XG5cbi8qXHJcblx0MS4gY29udGFpbmVyXHJcbiovXG4uYm9vayB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgd2lkdGg6IDE2MHB4O1xuICBoZWlnaHQ6IDIyMHB4O1xuICAtd2Via2l0LXBlcnNwZWN0aXZlOiAxMDAwcHg7XG4gIC1tb3otcGVyc3BlY3RpdmU6IDEwMDBweDtcbiAgcGVyc3BlY3RpdmU6IDEwMDBweDtcbiAgLXdlYmtpdC10cmFuc2Zvcm0tc3R5bGU6IHByZXNlcnZlLTNkO1xuICAtbW96LXRyYW5zZm9ybS1zdHlsZTogcHJlc2VydmUtM2Q7XG4gIHRyYW5zZm9ybS1zdHlsZTogcHJlc2VydmUtM2Q7IH1cblxuLypcclxuXHQyLiBiYWNrZ3JvdW5kICYgY29sb3JcclxuKi9cbi8qIEhBUkRDT1ZFUiBGUk9OVCAqL1xuLmhhcmRjb3Zlcl9mcm9udCBsaTpmaXJzdC1jaGlsZCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlZWU7XG4gIC13ZWJraXQtYmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuO1xuICAtbW96LWJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjtcbiAgYmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuOyB9XG5cbi8qIHJldmVyc2UgKi9cbi5oYXJkY292ZXJfZnJvbnQgbGk6bGFzdC1jaGlsZCB7XG4gIGJhY2tncm91bmQ6ICNmZmZiZWM7IH1cblxuLyogSEFSRENPVkVSIEJBQ0sgKi9cbi5oYXJkY292ZXJfYmFjayBsaTpmaXJzdC1jaGlsZCB7XG4gIGJhY2tncm91bmQ6ICNmZmZiZWM7IH1cblxuLyogcmV2ZXJzZSAqL1xuLmhhcmRjb3Zlcl9iYWNrIGxpOmxhc3QtY2hpbGQge1xuICBiYWNrZ3JvdW5kOiAjZmZmYmVjOyB9XG5cbi5ib29rX3NwaW5lIGxpOmZpcnN0LWNoaWxkIHtcbiAgYmFja2dyb3VuZDogI2VlZTsgfVxuXG4uYm9va19zcGluZSBsaTpsYXN0LWNoaWxkIHtcbiAgYmFja2dyb3VuZDogIzMzMzsgfVxuXG4vKiB0aGlja25lc3Mgb2YgY292ZXIgKi9cbi5oYXJkY292ZXJfZnJvbnQgbGk6Zmlyc3QtY2hpbGQ6YWZ0ZXIsXG4uaGFyZGNvdmVyX2Zyb250IGxpOmZpcnN0LWNoaWxkOmJlZm9yZSxcbi5oYXJkY292ZXJfZnJvbnQgbGk6bGFzdC1jaGlsZDphZnRlcixcbi5oYXJkY292ZXJfZnJvbnQgbGk6bGFzdC1jaGlsZDpiZWZvcmUsXG4uaGFyZGNvdmVyX2JhY2sgbGk6Zmlyc3QtY2hpbGQ6YWZ0ZXIsXG4uaGFyZGNvdmVyX2JhY2sgbGk6Zmlyc3QtY2hpbGQ6YmVmb3JlLFxuLmhhcmRjb3Zlcl9iYWNrIGxpOmxhc3QtY2hpbGQ6YWZ0ZXIsXG4uaGFyZGNvdmVyX2JhY2sgbGk6bGFzdC1jaGlsZDpiZWZvcmUsXG4uYm9va19zcGluZSBsaTpmaXJzdC1jaGlsZDphZnRlcixcbi5ib29rX3NwaW5lIGxpOmZpcnN0LWNoaWxkOmJlZm9yZSxcbi5ib29rX3NwaW5lIGxpOmxhc3QtY2hpbGQ6YWZ0ZXIsXG4uYm9va19zcGluZSBsaTpsYXN0LWNoaWxkOmJlZm9yZSB7XG4gIGJhY2tncm91bmQ6ICM5OTk7IH1cblxuLyogcGFnZSAqL1xuLnBhZ2UgPiBsaSB7XG4gIGJhY2tncm91bmQ6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KGxlZnQsICNlMWRkZDggMCUsICNmZmZiZjYgMTAwJSk7XG4gIGJhY2tncm91bmQ6IC1tb3otbGluZWFyLWdyYWRpZW50KGxlZnQsICNlMWRkZDggMCUsICNmZmZiZjYgMTAwJSk7XG4gIGJhY2tncm91bmQ6IC1tcy1saW5lYXItZ3JhZGllbnQobGVmdCwgI2UxZGRkOCAwJSwgI2ZmZmJmNiAxMDAlKTtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KGxlZnQsICNlMWRkZDggMCUsICNmZmZiZjYgMTAwJSk7XG4gIGJveC1zaGFkb3c6IGluc2V0IDBweCAtMXB4IDJweCByZ2JhKDUwLCA1MCwgNTAsIDAuMSksIGluc2V0IC0xcHggMHB4IDFweCByZ2JhKDE1MCwgMTUwLCAxNTAsIDAuMik7XG4gIGJvcmRlci1yYWRpdXM6IDBweCA1cHggNXB4IDBweDsgfVxuXG4vKlxyXG5cdDMuIG9wZW5pbmcgY292ZXIsIGJhY2sgY292ZXIgYW5kIHBhZ2VzXHJcbiovXG4uaGFyZGNvdmVyX2Zyb250IHtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZVkoLTM0ZGVnKSB0cmFuc2xhdGVaKDhweCk7XG4gIC1tb3otdHJhbnNmb3JtOiByb3RhdGVZKC0zNGRlZykgdHJhbnNsYXRlWig4cHgpO1xuICB0cmFuc2Zvcm06IHJvdGF0ZVkoLTM0ZGVnKSB0cmFuc2xhdGVaKDhweCk7XG4gIHotaW5kZXg6IDEwMDsgfVxuXG4uaGFyZGNvdmVyX2JhY2sge1xuICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlWSgtMTVkZWcpIHRyYW5zbGF0ZVooLThweCk7XG4gIC1tb3otdHJhbnNmb3JtOiByb3RhdGVZKC0xNWRlZykgdHJhbnNsYXRlWigtOHB4KTtcbiAgdHJhbnNmb3JtOiByb3RhdGVZKC0xNWRlZykgdHJhbnNsYXRlWigtOHB4KTsgfVxuXG4ucGFnZSBsaTpudGgtY2hpbGQoMSkge1xuICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlWSgtMjhkZWcpO1xuICAtbW96LXRyYW5zZm9ybTogcm90YXRlWSgtMjhkZWcpO1xuICB0cmFuc2Zvcm06IHJvdGF0ZVkoLTI4ZGVnKTsgfVxuXG4ucGFnZSBsaTpudGgtY2hpbGQoMikge1xuICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlWSgtMzBkZWcpO1xuICAtbW96LXRyYW5zZm9ybTogcm90YXRlWSgtMzBkZWcpO1xuICB0cmFuc2Zvcm06IHJvdGF0ZVkoLTMwZGVnKTsgfVxuXG4ucGFnZSBsaTpudGgtY2hpbGQoMykge1xuICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlWSgtMzJkZWcpO1xuICAtbW96LXRyYW5zZm9ybTogcm90YXRlWSgtMzJkZWcpO1xuICB0cmFuc2Zvcm06IHJvdGF0ZVkoLTMyZGVnKTsgfVxuXG4ucGFnZSBsaTpudGgtY2hpbGQoNCkge1xuICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlWSgtMzRkZWcpO1xuICAtbW96LXRyYW5zZm9ybTogcm90YXRlWSgtMzRkZWcpO1xuICB0cmFuc2Zvcm06IHJvdGF0ZVkoLTM0ZGVnKTsgfVxuXG4ucGFnZSBsaTpudGgtY2hpbGQoNSkge1xuICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlWSgtMzZkZWcpO1xuICAtbW96LXRyYW5zZm9ybTogcm90YXRlWSgtMzZkZWcpO1xuICB0cmFuc2Zvcm06IHJvdGF0ZVkoLTM2ZGVnKTsgfVxuXG4vKlxyXG5cdDQuIHBvc2l0aW9uLCB0cmFuc2Zvcm0gJiB0cmFuc2l0aW9uXHJcbiovXG4uaGFyZGNvdmVyX2Zyb250LFxuLmhhcmRjb3Zlcl9iYWNrLFxuLmJvb2tfc3BpbmUsXG4uaGFyZGNvdmVyX2Zyb250IGxpLFxuLmhhcmRjb3Zlcl9iYWNrIGxpLFxuLmJvb2tfc3BpbmUgbGkge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgLXdlYmtpdC10cmFuc2Zvcm0tc3R5bGU6IHByZXNlcnZlLTNkO1xuICAtbW96LXRyYW5zZm9ybS1zdHlsZTogcHJlc2VydmUtM2Q7XG4gIHRyYW5zZm9ybS1zdHlsZTogcHJlc2VydmUtM2Q7IH1cblxuLmhhcmRjb3Zlcl9mcm9udCxcbi5oYXJkY292ZXJfYmFjayB7XG4gIC13ZWJraXQtdHJhbnNmb3JtLW9yaWdpbjogMCUgMTAwJTtcbiAgLW1vei10cmFuc2Zvcm0tb3JpZ2luOiAwJSAxMDAlO1xuICB0cmFuc2Zvcm0tb3JpZ2luOiAwJSAxMDAlOyB9XG5cbi5oYXJkY292ZXJfZnJvbnQge1xuICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjhzIGVhc2UsIHotaW5kZXggMC42cztcbiAgLW1vei10cmFuc2l0aW9uOiBhbGwgMC44cyBlYXNlLCB6LWluZGV4IDAuNnM7XG4gIHRyYW5zaXRpb246IGFsbCAwLjhzIGVhc2UsIHotaW5kZXggMC42czsgfVxuXG4vKiBIQVJEQ09WRVIgZnJvbnQgKi9cbi5oYXJkY292ZXJfZnJvbnQgbGk6Zmlyc3QtY2hpbGQge1xuICBjdXJzb3I6IGRlZmF1bHQ7XG4gIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XG4gIC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7XG4gIHVzZXItc2VsZWN0OiBub25lO1xuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWigycHgpO1xuICAtbW96LXRyYW5zZm9ybTogdHJhbnNsYXRlWigycHgpO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVooMnB4KTsgfVxuXG4uaGFyZGNvdmVyX2Zyb250IGxpOmxhc3QtY2hpbGQge1xuICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlWSgxODBkZWcpIHRyYW5zbGF0ZVooMnB4KTtcbiAgLW1vei10cmFuc2Zvcm06IHJvdGF0ZVkoMTgwZGVnKSB0cmFuc2xhdGVaKDJweCk7XG4gIHRyYW5zZm9ybTogcm90YXRlWSgxODBkZWcpIHRyYW5zbGF0ZVooMnB4KTsgfVxuXG4vKiBIQVJEQ09WRVIgYmFjayAqL1xuLmhhcmRjb3Zlcl9iYWNrIGxpOmZpcnN0LWNoaWxkIHtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVooMnB4KTtcbiAgLW1vei10cmFuc2Zvcm06IHRyYW5zbGF0ZVooMnB4KTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVaKDJweCk7IH1cblxuLmhhcmRjb3Zlcl9iYWNrIGxpOmxhc3QtY2hpbGQge1xuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWigtMnB4KTtcbiAgLW1vei10cmFuc2Zvcm06IHRyYW5zbGF0ZVooLTJweCk7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWigtMnB4KTsgfVxuXG4vKiB0aGlja25lc3Mgb2YgY292ZXIgKi9cbi5oYXJkY292ZXJfZnJvbnQgbGk6Zmlyc3QtY2hpbGQ6YWZ0ZXIsXG4uaGFyZGNvdmVyX2Zyb250IGxpOmZpcnN0LWNoaWxkOmJlZm9yZSxcbi5oYXJkY292ZXJfZnJvbnQgbGk6bGFzdC1jaGlsZDphZnRlcixcbi5oYXJkY292ZXJfZnJvbnQgbGk6bGFzdC1jaGlsZDpiZWZvcmUsXG4uaGFyZGNvdmVyX2JhY2sgbGk6Zmlyc3QtY2hpbGQ6YWZ0ZXIsXG4uaGFyZGNvdmVyX2JhY2sgbGk6Zmlyc3QtY2hpbGQ6YmVmb3JlLFxuLmhhcmRjb3Zlcl9iYWNrIGxpOmxhc3QtY2hpbGQ6YWZ0ZXIsXG4uaGFyZGNvdmVyX2JhY2sgbGk6bGFzdC1jaGlsZDpiZWZvcmUsXG4uYm9va19zcGluZSBsaTpmaXJzdC1jaGlsZDphZnRlcixcbi5ib29rX3NwaW5lIGxpOmZpcnN0LWNoaWxkOmJlZm9yZSxcbi5ib29rX3NwaW5lIGxpOmxhc3QtY2hpbGQ6YWZ0ZXIsXG4uYm9va19zcGluZSBsaTpsYXN0LWNoaWxkOmJlZm9yZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwOyB9XG5cbi8qIEhBUkRDT1ZFUiBmcm9udCAqL1xuLmhhcmRjb3Zlcl9mcm9udCBsaTpmaXJzdC1jaGlsZDphZnRlcixcbi5oYXJkY292ZXJfZnJvbnQgbGk6Zmlyc3QtY2hpbGQ6YmVmb3JlIHtcbiAgd2lkdGg6IDRweDtcbiAgaGVpZ2h0OiAxMDAlOyB9XG5cbi5oYXJkY292ZXJfZnJvbnQgbGk6Zmlyc3QtY2hpbGQ6YWZ0ZXIge1xuICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlWSg5MGRlZykgdHJhbnNsYXRlWigtMnB4KSB0cmFuc2xhdGVYKDJweCk7XG4gIC1tb3otdHJhbnNmb3JtOiByb3RhdGVZKDkwZGVnKSB0cmFuc2xhdGVaKC0ycHgpIHRyYW5zbGF0ZVgoMnB4KTtcbiAgdHJhbnNmb3JtOiByb3RhdGVZKDkwZGVnKSB0cmFuc2xhdGVaKC0ycHgpIHRyYW5zbGF0ZVgoMnB4KTsgfVxuXG4uaGFyZGNvdmVyX2Zyb250IGxpOmZpcnN0LWNoaWxkOmJlZm9yZSB7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGVZKDkwZGVnKSB0cmFuc2xhdGVaKDE1OHB4KSB0cmFuc2xhdGVYKDJweCk7XG4gIC1tb3otdHJhbnNmb3JtOiByb3RhdGVZKDkwZGVnKSB0cmFuc2xhdGVaKDE1OHB4KSB0cmFuc2xhdGVYKDJweCk7XG4gIHRyYW5zZm9ybTogcm90YXRlWSg5MGRlZykgdHJhbnNsYXRlWigxNThweCkgdHJhbnNsYXRlWCgycHgpOyB9XG5cbi5oYXJkY292ZXJfZnJvbnQgbGk6bGFzdC1jaGlsZDphZnRlcixcbi5oYXJkY292ZXJfZnJvbnQgbGk6bGFzdC1jaGlsZDpiZWZvcmUge1xuICB3aWR0aDogNHB4O1xuICBoZWlnaHQ6IDE2MHB4OyB9XG5cbi5oYXJkY292ZXJfZnJvbnQgbGk6bGFzdC1jaGlsZDphZnRlciB7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGVYKDkwZGVnKSByb3RhdGVaKDkwZGVnKSB0cmFuc2xhdGVaKDgwcHgpIHRyYW5zbGF0ZVgoLTJweCkgdHJhbnNsYXRlWSgtNzhweCk7XG4gIC1tb3otdHJhbnNmb3JtOiByb3RhdGVYKDkwZGVnKSByb3RhdGVaKDkwZGVnKSB0cmFuc2xhdGVaKDgwcHgpIHRyYW5zbGF0ZVgoLTJweCkgdHJhbnNsYXRlWSgtNzhweCk7XG4gIHRyYW5zZm9ybTogcm90YXRlWCg5MGRlZykgcm90YXRlWig5MGRlZykgdHJhbnNsYXRlWig4MHB4KSB0cmFuc2xhdGVYKC0ycHgpIHRyYW5zbGF0ZVkoLTc4cHgpOyB9XG5cbi5oYXJkY292ZXJfZnJvbnQgbGk6bGFzdC1jaGlsZDpiZWZvcmUge1xuICBib3gtc2hhZG93OiAwcHggMHB4IDMwcHggNXB4ICMzMzM7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGVYKDkwZGVnKSByb3RhdGVaKDkwZGVnKSB0cmFuc2xhdGVaKC0xNDBweCkgdHJhbnNsYXRlWCgtMnB4KSB0cmFuc2xhdGVZKC03OHB4KTtcbiAgLW1vei10cmFuc2Zvcm06IHJvdGF0ZVgoOTBkZWcpIHJvdGF0ZVooOTBkZWcpIHRyYW5zbGF0ZVooLTE0MHB4KSB0cmFuc2xhdGVYKC0ycHgpIHRyYW5zbGF0ZVkoLTc4cHgpO1xuICB0cmFuc2Zvcm06IHJvdGF0ZVgoOTBkZWcpIHJvdGF0ZVooOTBkZWcpIHRyYW5zbGF0ZVooLTE0MHB4KSB0cmFuc2xhdGVYKC0ycHgpIHRyYW5zbGF0ZVkoLTc4cHgpOyB9XG5cbi8qIHRoaWNrbmVzcyBvZiBjb3ZlciAqL1xuLmhhcmRjb3Zlcl9iYWNrIGxpOmZpcnN0LWNoaWxkOmFmdGVyLFxuLmhhcmRjb3Zlcl9iYWNrIGxpOmZpcnN0LWNoaWxkOmJlZm9yZSB7XG4gIHdpZHRoOiA0cHg7XG4gIGhlaWdodDogMTAwJTsgfVxuXG4uaGFyZGNvdmVyX2JhY2sgbGk6Zmlyc3QtY2hpbGQ6YWZ0ZXIge1xuICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlWSg5MGRlZykgdHJhbnNsYXRlWigtMnB4KSB0cmFuc2xhdGVYKDJweCk7XG4gIC1tb3otdHJhbnNmb3JtOiByb3RhdGVZKDkwZGVnKSB0cmFuc2xhdGVaKC0ycHgpIHRyYW5zbGF0ZVgoMnB4KTtcbiAgdHJhbnNmb3JtOiByb3RhdGVZKDkwZGVnKSB0cmFuc2xhdGVaKC0ycHgpIHRyYW5zbGF0ZVgoMnB4KTsgfVxuXG4uaGFyZGNvdmVyX2JhY2sgbGk6Zmlyc3QtY2hpbGQ6YmVmb3JlIHtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZVkoOTBkZWcpIHRyYW5zbGF0ZVooMTU4cHgpIHRyYW5zbGF0ZVgoMnB4KTtcbiAgLW1vei10cmFuc2Zvcm06IHJvdGF0ZVkoOTBkZWcpIHRyYW5zbGF0ZVooMTU4cHgpIHRyYW5zbGF0ZVgoMnB4KTtcbiAgdHJhbnNmb3JtOiByb3RhdGVZKDkwZGVnKSB0cmFuc2xhdGVaKDE1OHB4KSB0cmFuc2xhdGVYKDJweCk7IH1cblxuLmhhcmRjb3Zlcl9iYWNrIGxpOmxhc3QtY2hpbGQ6YWZ0ZXIsXG4uaGFyZGNvdmVyX2JhY2sgbGk6bGFzdC1jaGlsZDpiZWZvcmUge1xuICB3aWR0aDogNHB4O1xuICBoZWlnaHQ6IDE2MHB4OyB9XG5cbi5oYXJkY292ZXJfYmFjayBsaTpsYXN0LWNoaWxkOmFmdGVyIHtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZVgoOTBkZWcpIHJvdGF0ZVooOTBkZWcpIHRyYW5zbGF0ZVooODBweCkgdHJhbnNsYXRlWCgycHgpIHRyYW5zbGF0ZVkoLTc4cHgpO1xuICAtbW96LXRyYW5zZm9ybTogcm90YXRlWCg5MGRlZykgcm90YXRlWig5MGRlZykgdHJhbnNsYXRlWig4MHB4KSB0cmFuc2xhdGVYKDJweCkgdHJhbnNsYXRlWSgtNzhweCk7XG4gIHRyYW5zZm9ybTogcm90YXRlWCg5MGRlZykgcm90YXRlWig5MGRlZykgdHJhbnNsYXRlWig4MHB4KSB0cmFuc2xhdGVYKDJweCkgdHJhbnNsYXRlWSgtNzhweCk7IH1cblxuLmhhcmRjb3Zlcl9iYWNrIGxpOmxhc3QtY2hpbGQ6YmVmb3JlIHtcbiAgYm94LXNoYWRvdzogMTBweCAtMXB4IDgwcHggMjBweCAjNjY2O1xuICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlWCg5MGRlZykgcm90YXRlWig5MGRlZykgdHJhbnNsYXRlWigtMTQwcHgpIHRyYW5zbGF0ZVgoMnB4KSB0cmFuc2xhdGVZKC03OHB4KTtcbiAgLW1vei10cmFuc2Zvcm06IHJvdGF0ZVgoOTBkZWcpIHJvdGF0ZVooOTBkZWcpIHRyYW5zbGF0ZVooLTE0MHB4KSB0cmFuc2xhdGVYKDJweCkgdHJhbnNsYXRlWSgtNzhweCk7XG4gIHRyYW5zZm9ybTogcm90YXRlWCg5MGRlZykgcm90YXRlWig5MGRlZykgdHJhbnNsYXRlWigtMTQwcHgpIHRyYW5zbGF0ZVgoMnB4KSB0cmFuc2xhdGVZKC03OHB4KTsgfVxuXG4vKiBCT09LIFNQSU5FICovXG4uYm9va19zcGluZSB7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGVZKDYwZGVnKSB0cmFuc2xhdGVYKC01cHgpIHRyYW5zbGF0ZVooLTEycHgpO1xuICAtbW96LXRyYW5zZm9ybTogcm90YXRlWSg2MGRlZykgdHJhbnNsYXRlWCgtNXB4KSB0cmFuc2xhdGVaKC0xMnB4KTtcbiAgdHJhbnNmb3JtOiByb3RhdGVZKDYwZGVnKSB0cmFuc2xhdGVYKC01cHgpIHRyYW5zbGF0ZVooLTEycHgpO1xuICB3aWR0aDogMTZweDtcbiAgei1pbmRleDogMDsgfVxuXG4uYm9va19zcGluZSBsaTpmaXJzdC1jaGlsZCB7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVaKDJweCk7XG4gIC1tb3otdHJhbnNmb3JtOiB0cmFuc2xhdGVaKDJweCk7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWigycHgpOyB9XG5cbi5ib29rX3NwaW5lIGxpOmxhc3QtY2hpbGQge1xuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWigtMnB4KTtcbiAgLW1vei10cmFuc2Zvcm06IHRyYW5zbGF0ZVooLTJweCk7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWigtMnB4KTsgfVxuXG4vKiB0aGlja25lc3Mgb2YgYm9vayBzcGluZSAqL1xuLmJvb2tfc3BpbmUgbGk6Zmlyc3QtY2hpbGQ6YWZ0ZXIsXG4uYm9va19zcGluZSBsaTpmaXJzdC1jaGlsZDpiZWZvcmUge1xuICB3aWR0aDogNHB4O1xuICBoZWlnaHQ6IDEwMCU7IH1cblxuLmJvb2tfc3BpbmUgbGk6Zmlyc3QtY2hpbGQ6YWZ0ZXIge1xuICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlWSg5MGRlZykgdHJhbnNsYXRlWigtMnB4KSB0cmFuc2xhdGVYKDJweCk7XG4gIC1tb3otdHJhbnNmb3JtOiByb3RhdGVZKDkwZGVnKSB0cmFuc2xhdGVaKC0ycHgpIHRyYW5zbGF0ZVgoMnB4KTtcbiAgdHJhbnNmb3JtOiByb3RhdGVZKDkwZGVnKSB0cmFuc2xhdGVaKC0ycHgpIHRyYW5zbGF0ZVgoMnB4KTsgfVxuXG4uYm9va19zcGluZSBsaTpmaXJzdC1jaGlsZDpiZWZvcmUge1xuICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlWSgtOTBkZWcpIHRyYW5zbGF0ZVooLTEycHgpO1xuICAtbW96LXRyYW5zZm9ybTogcm90YXRlWSgtOTBkZWcpIHRyYW5zbGF0ZVooLTEycHgpO1xuICB0cmFuc2Zvcm06IHJvdGF0ZVkoLTkwZGVnKSB0cmFuc2xhdGVaKC0xMnB4KTsgfVxuXG4uYm9va19zcGluZSBsaTpsYXN0LWNoaWxkOmFmdGVyLFxuLmJvb2tfc3BpbmUgbGk6bGFzdC1jaGlsZDpiZWZvcmUge1xuICB3aWR0aDogNHB4O1xuICBoZWlnaHQ6IDE2cHg7IH1cblxuLmJvb2tfc3BpbmUgbGk6bGFzdC1jaGlsZDphZnRlciB7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGVYKDkwZGVnKSByb3RhdGVaKDkwZGVnKSB0cmFuc2xhdGVaKDhweCkgdHJhbnNsYXRlWCgycHgpIHRyYW5zbGF0ZVkoLTZweCk7XG4gIC1tb3otdHJhbnNmb3JtOiByb3RhdGVYKDkwZGVnKSByb3RhdGVaKDkwZGVnKSB0cmFuc2xhdGVaKDhweCkgdHJhbnNsYXRlWCgycHgpIHRyYW5zbGF0ZVkoLTZweCk7XG4gIHRyYW5zZm9ybTogcm90YXRlWCg5MGRlZykgcm90YXRlWig5MGRlZykgdHJhbnNsYXRlWig4cHgpIHRyYW5zbGF0ZVgoMnB4KSB0cmFuc2xhdGVZKC02cHgpOyB9XG5cbi5ib29rX3NwaW5lIGxpOmxhc3QtY2hpbGQ6YmVmb3JlIHtcbiAgYm94LXNoYWRvdzogNXB4IC0xcHggMTAwcHggNDBweCByZ2JhKDAsIDAsIDAsIDAuMik7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGVYKDkwZGVnKSByb3RhdGVaKDkwZGVnKSB0cmFuc2xhdGVaKC0yMTBweCkgdHJhbnNsYXRlWCgycHgpIHRyYW5zbGF0ZVkoLTZweCk7XG4gIC1tb3otdHJhbnNmb3JtOiByb3RhdGVYKDkwZGVnKSByb3RhdGVaKDkwZGVnKSB0cmFuc2xhdGVaKC0yMTBweCkgdHJhbnNsYXRlWCgycHgpIHRyYW5zbGF0ZVkoLTZweCk7XG4gIHRyYW5zZm9ybTogcm90YXRlWCg5MGRlZykgcm90YXRlWig5MGRlZykgdHJhbnNsYXRlWigtMjEwcHgpIHRyYW5zbGF0ZVgoMnB4KSB0cmFuc2xhdGVZKC02cHgpOyB9XG5cbi5wYWdlLFxuLnBhZ2UgPiBsaSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICAtd2Via2l0LXRyYW5zZm9ybS1zdHlsZTogcHJlc2VydmUtM2Q7XG4gIC1tb3otdHJhbnNmb3JtLXN0eWxlOiBwcmVzZXJ2ZS0zZDtcbiAgdHJhbnNmb3JtLXN0eWxlOiBwcmVzZXJ2ZS0zZDsgfVxuXG4ucGFnZSB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDk4JTtcbiAgdG9wOiAxJTtcbiAgbGVmdDogMyU7XG4gIHotaW5kZXg6IDEwOyB9XG5cbi5wYWdlID4gbGkge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICAtd2Via2l0LXRyYW5zZm9ybS1vcmlnaW46IGxlZnQgY2VudGVyO1xuICAtbW96LXRyYW5zZm9ybS1vcmlnaW46IGxlZnQgY2VudGVyO1xuICB0cmFuc2Zvcm0tb3JpZ2luOiBsZWZ0IGNlbnRlcjtcbiAgLXdlYmtpdC10cmFuc2l0aW9uLXByb3BlcnR5OiB0cmFuc2Zvcm07XG4gIC1tb3otdHJhbnNpdGlvbi1wcm9wZXJ0eTogdHJhbnNmb3JtO1xuICB0cmFuc2l0aW9uLXByb3BlcnR5OiB0cmFuc2Zvcm07XG4gIC13ZWJraXQtdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2U7XG4gIC1tb3otdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2U7XG4gIHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlOyB9XG5cbi5wYWdlID4gbGk6bnRoLWNoaWxkKDEpIHtcbiAgLXdlYmtpdC10cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjZzO1xuICAtbW96LXRyYW5zaXRpb24tZHVyYXRpb246IDAuNnM7XG4gIHRyYW5zaXRpb24tZHVyYXRpb246IDAuNnM7IH1cblxuLnBhZ2UgPiBsaTpudGgtY2hpbGQoMikge1xuICAtd2Via2l0LXRyYW5zaXRpb24tZHVyYXRpb246IDAuNnM7XG4gIC1tb3otdHJhbnNpdGlvbi1kdXJhdGlvbjogMC42cztcbiAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMC42czsgfVxuXG4ucGFnZSA+IGxpOm50aC1jaGlsZCgzKSB7XG4gIC13ZWJraXQtdHJhbnNpdGlvbi1kdXJhdGlvbjogMC40cztcbiAgLW1vei10cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjRzO1xuICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjRzOyB9XG5cbi5wYWdlID4gbGk6bnRoLWNoaWxkKDQpIHtcbiAgLXdlYmtpdC10cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjVzO1xuICAtbW96LXRyYW5zaXRpb24tZHVyYXRpb246IDAuNXM7XG4gIHRyYW5zaXRpb24tZHVyYXRpb246IDAuNXM7IH1cblxuLnBhZ2UgPiBsaTpudGgtY2hpbGQoNSkge1xuICAtd2Via2l0LXRyYW5zaXRpb24tZHVyYXRpb246IDAuNnM7XG4gIC1tb3otdHJhbnNpdGlvbi1kdXJhdGlvbjogMC42cztcbiAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMC42czsgfVxuXG4vKlxyXG5cdDUuIGV2ZW50c1xyXG4qL1xuLmJvb2s6aG92ZXIgPiAuaGFyZGNvdmVyX2Zyb250IHtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZVkoLTE0NWRlZykgdHJhbnNsYXRlWigwKTtcbiAgLW1vei10cmFuc2Zvcm06IHJvdGF0ZVkoLTE0NWRlZykgdHJhbnNsYXRlWigwKTtcbiAgdHJhbnNmb3JtOiByb3RhdGVZKC0xNDVkZWcpIHRyYW5zbGF0ZVooMCk7XG4gIHotaW5kZXg6IDA7IH1cblxuLmJvb2s6aG92ZXIgPiAucGFnZSBsaTpudGgtY2hpbGQoMSkge1xuICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlWSgtMzBkZWcpO1xuICAtbW96LXRyYW5zZm9ybTogcm90YXRlWSgtMzBkZWcpO1xuICB0cmFuc2Zvcm06IHJvdGF0ZVkoLTMwZGVnKTtcbiAgLXdlYmtpdC10cmFuc2l0aW9uLWR1cmF0aW9uOiAxLjVzO1xuICAtbW96LXRyYW5zaXRpb24tZHVyYXRpb246IDEuNXM7XG4gIHRyYW5zaXRpb24tZHVyYXRpb246IDEuNXM7IH1cblxuLmJvb2s6aG92ZXIgPiAucGFnZSBsaTpudGgtY2hpbGQoMikge1xuICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlWSgtMzVkZWcpO1xuICAtbW96LXRyYW5zZm9ybTogcm90YXRlWSgtMzVkZWcpO1xuICB0cmFuc2Zvcm06IHJvdGF0ZVkoLTM1ZGVnKTtcbiAgLXdlYmtpdC10cmFuc2l0aW9uLWR1cmF0aW9uOiAxLjhzO1xuICAtbW96LXRyYW5zaXRpb24tZHVyYXRpb246IDEuOHM7XG4gIHRyYW5zaXRpb24tZHVyYXRpb246IDEuOHM7IH1cblxuLmJvb2s6aG92ZXIgPiAucGFnZSBsaTpudGgtY2hpbGQoMykge1xuICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlWSgtMTE4ZGVnKTtcbiAgLW1vei10cmFuc2Zvcm06IHJvdGF0ZVkoLTExOGRlZyk7XG4gIHRyYW5zZm9ybTogcm90YXRlWSgtMTE4ZGVnKTtcbiAgLXdlYmtpdC10cmFuc2l0aW9uLWR1cmF0aW9uOiAxLjZzO1xuICAtbW96LXRyYW5zaXRpb24tZHVyYXRpb246IDEuNnM7XG4gIHRyYW5zaXRpb24tZHVyYXRpb246IDEuNnM7IH1cblxuLmJvb2s6aG92ZXIgPiAucGFnZSBsaTpudGgtY2hpbGQoNCkge1xuICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlWSgtMTMwZGVnKTtcbiAgLW1vei10cmFuc2Zvcm06IHJvdGF0ZVkoLTEzMGRlZyk7XG4gIHRyYW5zZm9ybTogcm90YXRlWSgtMTMwZGVnKTtcbiAgLXdlYmtpdC10cmFuc2l0aW9uLWR1cmF0aW9uOiAxLjRzO1xuICAtbW96LXRyYW5zaXRpb24tZHVyYXRpb246IDEuNHM7XG4gIHRyYW5zaXRpb24tZHVyYXRpb246IDEuNHM7IH1cblxuLmJvb2s6aG92ZXIgPiAucGFnZSBsaTpudGgtY2hpbGQoNSkge1xuICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlWSgtMTQwZGVnKTtcbiAgLW1vei10cmFuc2Zvcm06IHJvdGF0ZVkoLTE0MGRlZyk7XG4gIHRyYW5zZm9ybTogcm90YXRlWSgtMTQwZGVnKTtcbiAgLXdlYmtpdC10cmFuc2l0aW9uLWR1cmF0aW9uOiAxLjJzO1xuICAtbW96LXRyYW5zaXRpb24tZHVyYXRpb246IDEuMnM7XG4gIHRyYW5zaXRpb24tZHVyYXRpb246IDEuMnM7IH1cblxuLypcclxuXHQ2LiBCb251c1xyXG4qL1xuLyogY292ZXIgQ1NTICovXG4uY292ZXJEZXNpZ24ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgYm90dG9tOiAwO1xuICByaWdodDogMDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgLXdlYmtpdC1iYWNrZmFjZS12aXNpYmlsaXR5OiBoaWRkZW47XG4gIC1tb3otYmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuO1xuICBiYWNrZmFjZS12aXNpYmlsaXR5OiBoaWRkZW47IH1cblxuLmNvdmVyRGVzaWduOjphZnRlciB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KC0xMzVkZWcsIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC40NSkgMCUsIHRyYW5zcGFyZW50IDEwMCUpO1xuICBiYWNrZ3JvdW5kLWltYWdlOiAtbW96LWxpbmVhci1ncmFkaWVudCgtMTM1ZGVnLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNDUpIDAlLCB0cmFuc3BhcmVudCAxMDAlKTtcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KC0xMzVkZWcsIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC40NSkgMCUsIHRyYW5zcGFyZW50IDEwMCUpO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgYm90dG9tOiAwO1xuICByaWdodDogMDsgfVxuXG4uY292ZXJEZXNpZ24gaDEge1xuICBjb2xvcjogI2ZmZjtcbiAgZm9udC1zaXplOiAyLjJlbTtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMDVlbTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW46IDU0JSAwIDAgMDtcbiAgdGV4dC1zaGFkb3c6IC0xcHggLTFweCAwIHJnYmEoMCwgMCwgMCwgMC4xKTsgfVxuXG4uY292ZXJEZXNpZ24gcCB7XG4gIGNvbG9yOiAjZjhmOGY4O1xuICBmb250LXNpemU6IDFlbTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB0ZXh0LXNoYWRvdzogLTFweCAtMXB4IDAgcmdiYSgwLCAwLCAwLCAwLjEpOyB9XG5cbi55ZWxsb3cge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjFjNDBmO1xuICBiYWNrZ3JvdW5kLWltYWdlOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudCh0b3AsICNmMWM0MGYgNTglLCAjZTdiYTA3IDAlKTtcbiAgYmFja2dyb3VuZC1pbWFnZTogLW1vei1saW5lYXItZ3JhZGllbnQodG9wLCAjZjFjNDBmIDU4JSwgI2U3YmEwNyAwJSk7XG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0b3AsICNmMWM0MGYgNTglLCAjZTdiYTA3IDAlKTsgfVxuXG4uYmx1ZSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMzNDk4ZGI7XG4gIGJhY2tncm91bmQtaW1hZ2U6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KHRvcCwgIzM0OThkYiA1OCUsICMyYTkwZDQgMCUpO1xuICBiYWNrZ3JvdW5kLWltYWdlOiAtbW96LWxpbmVhci1ncmFkaWVudCh0b3AsICMzNDk4ZGIgNTglLCAjMmE5MGQ0IDAlKTtcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvcCwgIzM0OThkYiA1OCUsICMyYTkwZDQgMCUpOyB9XG5cbi5ncmV5IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y4ZTlkMTtcbiAgYmFja2dyb3VuZC1pbWFnZTogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQodG9wLCAjZjhlOWQxIDU4JSwgI2U3ZDViNyAwJSk7XG4gIGJhY2tncm91bmQtaW1hZ2U6IC1tb3otbGluZWFyLWdyYWRpZW50KHRvcCwgI2Y4ZTlkMSA1OCUsICNlN2Q1YjcgMCUpO1xuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG9wLCAjZjhlOWQxIDU4JSwgI2U3ZDViNyAwJSk7IH1cblxuLyogTWVkaWEgUXVlcmllcyAqL1xuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMzcuODEyNWVtKSB7XG4gIC5hbGlnbiA+IGxpIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtaW4taGVpZ2h0OiA0NDBweDtcbiAgICBoZWlnaHQ6IGF1dG87XG4gICAgcGFkZGluZzogMDtcbiAgICBtYXJnaW46IDAgMCAzMHB4IDA7IH1cbiAgLmJvb2sge1xuICAgIG1hcmdpbjogMCBhdXRvOyB9IH1cblxuLmxpc3Qge1xuICBtYXgtd2lkdGg6IDU1MHB4O1xuICBtYXJnaW4tbGVmdDogMzAlOyB9XG4iXX0= */"

/***/ }),

/***/ "./src/app/components/book/book-listing/book-listing.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/components/book/book-listing/book-listing.component.ts ***!
  \************************************************************************/
/*! exports provided: BookListingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BookListingComponent", function() { return BookListingComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _services_book_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/book.service */ "./src/app/services/book.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");






var BookListingComponent = /** @class */ (function () {
    function BookListingComponent(bookService, route, router) {
        this.bookService = bookService;
        this.route = route;
        this.router = router;
        this.ngUnsubscribe = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
    }
    BookListingComponent.prototype.ngOnInit = function () {
        this.books = [];
        this.seeBooks();
    };
    BookListingComponent.prototype.ngOnDestroy = function () {
        this.ngUnsubscribe.next();
        this.ngUnsubscribe.complete();
    };
    BookListingComponent.prototype.seeBooks = function () {
        var _this = this;
        this.bookService.getBooks()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["takeUntil"])(this.ngUnsubscribe))
            .subscribe(function (apiResponse) {
            _this.books = apiResponse;
        });
    };
    BookListingComponent.prototype.gotoBook = function (book) {
        this.router.navigate(["book/" + book.id]);
    };
    BookListingComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-book-listing',
            template: __webpack_require__(/*! ./book-listing.component.html */ "./src/app/components/book/book-listing/book-listing.component.html"),
            styles: [__webpack_require__(/*! ./book-listing.component.scss */ "./src/app/components/book/book-listing/book-listing.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_book_service__WEBPACK_IMPORTED_MODULE_4__["BookService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], BookListingComponent);
    return BookListingComponent;
}());



/***/ }),

/***/ "./src/app/components/book/create-book-chapter/create-book-chapter.component.html":
/*!****************************************************************************************!*\
  !*** ./src/app/components/book/create-book-chapter/create-book-chapter.component.html ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section>\r\n  <p *ngIf=\"!chapterExist\">Register a chapter for '{{bookId.title}}' book</p>\r\n  <p *ngIf=\"chapterExist\">Edit chapter : {{ chapterExist.title}} <br/> For book : {{bookId.title}}</p>\r\n\r\n\r\n  <form *ngIf=\"!chapterExist\" [formGroup]=\"chapterCreationForm\" (ngSubmit)=\"prepareBookChapter()\" novalidate>\r\n\r\n    <div class=\"fam-user-create--form-body\">\r\n      <div class=\"fam-user-create--form-item\">\r\n        <mat-form-field class=\"fam-user-create--form-field\">\r\n          <input [(ngModel)]=\"title\" matInput formControlName=\"title\" placeholder=\"title\" type=\"text\" required />\r\n          <input type=\"button\"\r\n                 [disabled]=\"service.started$ | async\"\r\n                 (click)=\"listenTitle()\" value=\"listenTitle\" />\r\n        </mat-form-field>\r\n      </div>\r\n\r\n      <div class=\"fam-user-create--form-item\">\r\n        <mat-form-field class=\"fam-user-create--form-field\">\r\n          <input matInput formControlName=\"picture\" placeholder=\"URL of your picture\" type=\"url\" required />\r\n        </mat-form-field>\r\n      </div>\r\n\r\n\r\n      <div class=\"fam-user-create--form-item\">\r\n        <mat-form-field class=\"fam-user-create--form-field\">\r\n          <textarea [(ngModel)]=\"completeMessage\" matInput formControlName=\"content\"\r\n                    placeholder=\"content\" type=\"text\" required></textarea>\r\n          <input type=\"button\"\r\n            [disabled]=\"service.started$ | async\"\r\n            (click)=\"listen()\" value=\"listen\" />\r\n        </mat-form-field>\r\n      </div>\r\n    </div>\r\n\r\n    <button mat-button type=\"submit\">Create chapter</button>\r\n  </form>\r\n\r\n  <form *ngIf=\"chapterExist\" [formGroup]=\"chapterCreationForm\" (ngSubmit)=\"editBookChapterSave()\" novalidate>\r\n\r\n    <div class=\"fam-user-create--form-body\">\r\n      <div class=\"fam-user-create--form-item\">\r\n        <mat-form-field class=\"fam-user-create--form-field\">\r\n          <input [(ngModel)]=\"title\" matInput formControlName=\"title\" placeholder=\"title\" type=\"text\" required />\r\n          <input type=\"button\"\r\n                 [disabled]=\"service.started$ | async\"\r\n                 (click)=\"listenTitle()\" value=\"listenTitle\" />\r\n        </mat-form-field>\r\n      </div>\r\n\r\n      <div class=\"fam-user-create--form-item\">\r\n        <mat-form-field class=\"fam-user-create--form-field\">\r\n          <input matInput formControlName=\"picture\" placeholder=\"URL of your picture\" type=\"url\" required />\r\n        </mat-form-field>\r\n      </div>\r\n\r\n\r\n      <div class=\"fam-user-create--form-item\">\r\n        <mat-form-field class=\"fam-user-create--form-field\">\r\n          <textarea [(ngModel)]=\"completeMessage\"  matInput formControlName=\"content\" placeholder=\"content\" type=\"text\" required></textarea>\r\n          <input type=\"button\"\r\n                 [disabled]=\"service.started$ | async\"\r\n                 (click)=\"listen()\" value=\"listen\" />\r\n        </mat-form-field>\r\n      </div>\r\n    </div>\r\n\r\n    <button mat-button type=\"submit\">Edit chapter</button>\r\n  </form>\r\n</section>\r\n"

/***/ }),

/***/ "./src/app/components/book/create-book-chapter/create-book-chapter.component.scss":
/*!****************************************************************************************!*\
  !*** ./src/app/components/book/create-book-chapter/create-book-chapter.component.scss ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYm9vay9jcmVhdGUtYm9vay1jaGFwdGVyL2NyZWF0ZS1ib29rLWNoYXB0ZXIuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/components/book/create-book-chapter/create-book-chapter.component.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/components/book/create-book-chapter/create-book-chapter.component.ts ***!
  \**************************************************************************************/
/*! exports provided: CreateBookChapterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateBookChapterComponent", function() { return CreateBookChapterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var angularx_social_login__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angularx-social-login */ "./node_modules/angularx-social-login/angularx-social-login.es5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_book_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../services/book.service */ "./src/app/services/book.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _kamiazya_ngx_speech_recognition__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @kamiazya/ngx-speech-recognition */ "./node_modules/@kamiazya/ngx-speech-recognition/fesm5/kamiazya-ngx-speech-recognition.js");









var CreateBookChapterComponent = /** @class */ (function () {
    function CreateBookChapterComponent(service, fb, authService, route, router, bookService) {
        this.service = service;
        this.fb = fb;
        this.authService = authService;
        this.route = route;
        this.router = router;
        this.bookService = bookService;
        this.ngUnsubscribe = new rxjs__WEBPACK_IMPORTED_MODULE_7__["Subject"]();
        this.message = '';
        this.title = '';
        this.completeMessage = '';
        this.terminateChapterCreation = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.terminateChapterEdition = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    CreateBookChapterComponent.prototype.ngOnInit = function () {
        var controlsConfig = !this.chapterExist ? {
            title: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            picture: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            content: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
        }
            :
                {
                    title: [this.chapterExist.title, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
                    picture: [this.chapterExist.picture, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
                    content: [this.chapterExist.content, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
                };
        this.title = this.chapterExist ? this.chapterExist.title : '';
        this.completeMessage = this.chapterExist ? this.chapterExist.content : '';
        this.chapterCreationForm = this.fb.group(controlsConfig);
    };
    CreateBookChapterComponent.prototype.ngOnDestroy = function () {
        this.ngUnsubscribe.next();
        this.ngUnsubscribe.complete();
    };
    CreateBookChapterComponent.prototype.prepareBookChapter = function () {
        var formValues = this.chapterCreationForm.getRawValue();
        this.chapter = {
            title: formValues.title,
            picture: formValues.picture,
            content: formValues.content,
            creationDate: Date.now(),
            bookId: this.bookId.id
        };
        this.bookService.postChapter(this.chapter)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["takeUntil"])(this.ngUnsubscribe))
            .subscribe(function (apiResponse) {
            // book is register and api response is data of book
        });
        this.terminateChapterCreation.emit(this.bookId);
    };
    CreateBookChapterComponent.prototype.editBookChapterSave = function () {
        var _this = this;
        var formValues = this.chapterCreationForm.getRawValue();
        this.chapter = {
            title: formValues.title,
            picture: formValues.picture,
            content: formValues.content,
            creationDate: Date.now(),
            bookId: this.bookId.id
        };
        this.bookService.editBookChapter(this.chapter, this.chapterExist.id)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["takeUntil"])(this.ngUnsubscribe))
            .subscribe(function (apiResponse) {
            _this.terminateChapterEdition.emit(_this.bookId);
        });
    };
    CreateBookChapterComponent.prototype.listen = function () {
        var _this = this;
        this.service
            .listen()
            .pipe(_kamiazya_ngx_speech_recognition__WEBPACK_IMPORTED_MODULE_8__["resultList"])
            .subscribe(function (list) {
            _this.message = list.item(0).item(0).transcript;
            _this.completeMessage = _this.completeMessage + ' ' + (' ' + _this.message).slice(1);
        });
    };
    CreateBookChapterComponent.prototype.listenTitle = function () {
        var _this = this;
        this.service
            .listen()
            .pipe(_kamiazya_ngx_speech_recognition__WEBPACK_IMPORTED_MODULE_8__["resultList"])
            .subscribe(function (list) {
            _this.title = list.item(0).item(0).transcript;
        });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], CreateBookChapterComponent.prototype, "bookId", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], CreateBookChapterComponent.prototype, "chapterExist", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], CreateBookChapterComponent.prototype, "terminateChapterCreation", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], CreateBookChapterComponent.prototype, "terminateChapterEdition", void 0);
    CreateBookChapterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-create-book-chapter',
            template: __webpack_require__(/*! ./create-book-chapter.component.html */ "./src/app/components/book/create-book-chapter/create-book-chapter.component.html"),
            providers: [
                _kamiazya_ngx_speech_recognition__WEBPACK_IMPORTED_MODULE_8__["RxSpeechRecognitionService"],
            ],
            styles: [__webpack_require__(/*! ./create-book-chapter.component.scss */ "./src/app/components/book/create-book-chapter/create-book-chapter.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_kamiazya_ngx_speech_recognition__WEBPACK_IMPORTED_MODULE_8__["RxSpeechRecognitionService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"], angularx_social_login__WEBPACK_IMPORTED_MODULE_4__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"], _services_book_service__WEBPACK_IMPORTED_MODULE_6__["BookService"]])
    ], CreateBookChapterComponent);
    return CreateBookChapterComponent;
}());



/***/ }),

/***/ "./src/app/components/book/create-book/create-book.component.html":
/*!************************************************************************!*\
  !*** ./src/app/components/book/create-book/create-book.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section>\r\n\r\n  <form *ngIf=\"!bookExist\" [formGroup]=\"userCreationForm\" (ngSubmit)=\"prepareBook()\" novalidate>\r\n\r\n    <div class=\"fam-user-create--form-body\">\r\n      <div class=\"fam-user-create--form-item\">\r\n        <mat-form-field class=\"fam-user-create--form-field\">\r\n          <input [(ngModel)]=\"title\" matInput formControlName=\"title\" placeholder=\"title\" type=\"text\" required />\r\n          <input type=\"button\"\r\n                 [disabled]=\"service.started$ | async\"\r\n                 (click)=\"listenTitle()\" value=\"listenTitle\" />\r\n        </mat-form-field>\r\n      </div>\r\n\r\n      <div class=\"fam-user-create--form-item\">\r\n        <mat-form-field class=\"fam-user-create--form-field\">\r\n          <input matInput formControlName=\"picture\" placeholder=\"URL of your picture\" type=\"url\" required />\r\n        </mat-form-field>\r\n      </div>\r\n\r\n\r\n      <div class=\"fam-user-create--form-item\">\r\n        <mat-form-field class=\"fam-user-create--form-field\">\r\n          <input matInput formControlName=\"categorie\" placeholder=\"categorie\" type=\"text\" required />\r\n        </mat-form-field>\r\n      </div>\r\n    </div>\r\n\r\n    <button mat-button type=\"submit\">Create book</button>\r\n  </form>\r\n\r\n  <form *ngIf=\"bookExist\" [formGroup]=\"userCreationForm\" (ngSubmit)=\"editBook()\" novalidate>\r\n\r\n    <div class=\"fam-user-create--form-body\">\r\n      <div class=\"fam-user-create--form-item\">\r\n        <mat-form-field class=\"fam-user-create--form-field\">\r\n          <input [(ngModel)]=\"title\" matInput formControlName=\"title\" placeholder=\"title\" type=\"text\" required />\r\n          <input type=\"button\"\r\n                 [disabled]=\"service.started$ | async\"\r\n                 (click)=\"listenTitle()\" value=\"listenTitle\" />\r\n        </mat-form-field>\r\n      </div>\r\n\r\n      <div class=\"fam-user-create--form-item\">\r\n        <mat-form-field class=\"fam-user-create--form-field\">\r\n          <input matInput formControlName=\"picture\" placeholder=\"URL of your picture\" type=\"url\" required />\r\n        </mat-form-field>\r\n      </div>\r\n\r\n\r\n      <div class=\"fam-user-create--form-item\">\r\n        <mat-form-field class=\"fam-user-create--form-field\">\r\n          <input matInput formControlName=\"categorie\" placeholder=\"categorie\" type=\"text\" required />\r\n        </mat-form-field>\r\n      </div>\r\n    </div>\r\n\r\n    <button mat-button type=\"submit\">Edit book</button>\r\n  </form>\r\n</section>\r\n"

/***/ }),

/***/ "./src/app/components/book/create-book/create-book.component.scss":
/*!************************************************************************!*\
  !*** ./src/app/components/book/create-book/create-book.component.scss ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYm9vay9jcmVhdGUtYm9vay9jcmVhdGUtYm9vay5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/components/book/create-book/create-book.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/components/book/create-book/create-book.component.ts ***!
  \**********************************************************************/
/*! exports provided: CreateBookComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateBookComponent", function() { return CreateBookComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var angularx_social_login__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angularx-social-login */ "./node_modules/angularx-social-login/angularx-social-login.es5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_book_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../services/book.service */ "./src/app/services/book.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _kamiazya_ngx_speech_recognition__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @kamiazya/ngx-speech-recognition */ "./node_modules/@kamiazya/ngx-speech-recognition/fesm5/kamiazya-ngx-speech-recognition.js");









var CreateBookComponent = /** @class */ (function () {
    function CreateBookComponent(service, fb, authService, route, router, bookService) {
        this.service = service;
        this.fb = fb;
        this.authService = authService;
        this.route = route;
        this.router = router;
        this.bookService = bookService;
        this.ngUnsubscribe = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.title = '';
        this.refreshEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    CreateBookComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.authService.authState.subscribe(function (user) {
            _this.user = user;
        });
        var controlsConfig = !this.bookExist ? {
            title: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            categorie: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            picture: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
        }
            :
                {
                    title: [this.bookExist.title, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
                    categorie: [this.bookExist.categorie, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
                    picture: [this.bookExist.picture, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
                };
        this.title = this.bookExist ? this.bookExist.title : '';
        this.userCreationForm = this.fb.group(controlsConfig);
    };
    CreateBookComponent.prototype.ngOnDestroy = function () {
        this.ngUnsubscribe.next();
        this.ngUnsubscribe.complete();
    };
    CreateBookComponent.prototype.prepareBook = function () {
        var _this = this;
        var formValues = this.userCreationForm.getRawValue();
        this.book = {
            author: this.user.name,
            authorMail: this.user.email,
            title: formValues.title,
            picture: formValues.picture,
            categorie: formValues.categorie,
            creationDate: Date.now(),
        };
        this.bookService.postBook(this.book)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["takeUntil"])(this.ngUnsubscribe))
            .subscribe(function (apiResponse) {
            _this.refreshParent();
        });
    };
    CreateBookComponent.prototype.editBook = function () {
        var _this = this;
        var formValues = this.userCreationForm.getRawValue();
        this.book = {
            author: this.user.name,
            authorMail: this.user.email,
            title: formValues.title,
            picture: formValues.picture,
            categorie: formValues.categorie,
            creationDate: Date.now(),
        };
        this.bookService.editBook(this.book, this.bookExist.id)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["takeUntil"])(this.ngUnsubscribe))
            .subscribe(function (apiResponse) {
            _this.refreshParent();
        });
    };
    CreateBookComponent.prototype.refreshParent = function () {
        this.refreshEvent.emit();
    };
    CreateBookComponent.prototype.listenTitle = function () {
        var _this = this;
        this.service
            .listen()
            .pipe(_kamiazya_ngx_speech_recognition__WEBPACK_IMPORTED_MODULE_8__["resultList"])
            .subscribe(function (list) {
            _this.title = list.item(0).item(0).transcript;
        });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], CreateBookComponent.prototype, "bookExist", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], CreateBookComponent.prototype, "refreshEvent", void 0);
    CreateBookComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-create-book',
            template: __webpack_require__(/*! ./create-book.component.html */ "./src/app/components/book/create-book/create-book.component.html"),
            providers: [
                _kamiazya_ngx_speech_recognition__WEBPACK_IMPORTED_MODULE_8__["RxSpeechRecognitionService"],
            ],
            styles: [__webpack_require__(/*! ./create-book.component.scss */ "./src/app/components/book/create-book/create-book.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_kamiazya_ngx_speech_recognition__WEBPACK_IMPORTED_MODULE_8__["RxSpeechRecognitionService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], angularx_social_login__WEBPACK_IMPORTED_MODULE_4__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"], _services_book_service__WEBPACK_IMPORTED_MODULE_6__["BookService"]])
    ], CreateBookComponent);
    return CreateBookComponent;
}());



/***/ }),

/***/ "./src/app/components/manga/all-listing/all-listing.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/components/manga/all-listing/all-listing.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<meta name=\"referrer\" content=\"no-referrer\"/>\r\n\r\n<div>\r\n  <mat-radio-group (change)=\"onChange($event)\">\r\n    <mat-radio-button value=\"none\">Aucun</mat-radio-button>\r\n    <mat-radio-button value=\"date\">Ancien vers Récent</mat-radio-button>\r\n    <mat-radio-button value=\"reversedDate\">Récent vers Ancien</mat-radio-button>\r\n    <mat-radio-button value=\"alpha\">De A à Z</mat-radio-button>\r\n    <mat-radio-button value=\"reversedAlpha\">De Z à A </mat-radio-button>\r\n  </mat-radio-group>\r\n</div>\r\n\r\n<div *ngIf=\"isDisplayedCategories\">\r\n<mat-form-field>\r\n  <mat-label>Select an option</mat-label>\r\n  <mat-select (selectionChange)=\"onSelectedCategorie($event)\">\r\n    <mat-option value=' Aucune'> Aucune</mat-option>\r\n    <ng-container *ngFor=\"let categ of allCategorie\">\r\n      <mat-option value=\"{{categ.value}}\">{{categ.viewValue}}</mat-option>\r\n    </ng-container>\r\n  </mat-select>\r\n</mat-form-field>\r\n</div>\r\n\r\n<span class=\"component\">\r\n  <ng-container *ngFor=\"let manga of mangas\">\r\n    <ul class=\"align\">\r\n      <li>\r\n        <figure class='book'>\r\n          <!-- Front -->\r\n          <ul class='hardcover_front'>\r\n            <li>\r\n              <img src=\"{{manga.image}}\" alt=\"\" width=\"100%\" height=\"100%\">\r\n            </li>\r\n            <li></li>\r\n          </ul>\r\n          <!-- Pages -->\r\n          <ul class='page'>\r\n            <li> <span class=\"title\">{{manga.title}} </span> </li>\r\n            <li>\r\n              <button class=\"btn\" (click)=\"gotoManga(manga)\">Consulter </button>\r\n            </li>\r\n            <li></li>\r\n            <li></li>\r\n            <li></li>\r\n          </ul>\r\n          <!-- Back -->\r\n          <ul class='hardcover_back'>\r\n            <li></li>\r\n            <li></li>\r\n          </ul>\r\n          <ul class='book_spine'>\r\n            <li></li>\r\n            <li></li>\r\n          </ul>\r\n        </figure>\r\n      </li>\r\n    </ul>\r\n  </ng-container>\r\n</span>\r\n\r\n<div class=\"list\" *ngIf=\"selectedCategorie === ' Aucune'\">\r\n  <ul>\r\n    <li *ngFor=\"let item of collection | paginate: config\"></li>\r\n  </ul>\r\n  <pagination-controls (pageChange)=\"pageChange($event)\" class=\"my-pagination\"></pagination-controls>\r\n</div>\r\n\r\n<div class=\"list\" *ngIf=\"selectedCategorie !== ' Aucune'\">\r\n  <ul>\r\n    <li *ngFor=\"let item of collectionCategorized | paginate: config\"></li>\r\n  </ul>\r\n  <pagination-controls (pageChange)=\"pageChange($event)\" class=\"my-pagination\"></pagination-controls>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "./src/app/components/manga/all-listing/all-listing.component.scss":
/*!*************************************************************************!*\
  !*** ./src/app/components/manga/all-listing/all-listing.component.scss ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "* {\n  margin: 0;\n  padding: 0;\n  display: inline-block; }\n\n.example-radio-group {\n  display: flex;\n  flex-direction: row;\n  margin: 15px 0; }\n\n.example-radio-button {\n  margin: 5px; }\n\nul {\n  margin: 0;\n  padding: 0;\n  list-style: none; }\n\na {\n  color: #2c3e50;\n  text-decoration: none; }\n\n.btn {\n  display: inline-block;\n  text-transform: uppercase;\n  border: 2px solid #2c3e50;\n  margin-top: 100px;\n  font-size: 0.9em;\n  font-weight: 700;\n  padding: 0.1em 0.4em;\n  text-align: center;\n  transition: color 0.3s, border-color 0.3s; }\n\n.title {\n  display: inline-block;\n  max-width: 80%;\n  margin-top: 12px;\n  text-transform: uppercase;\n  font-size: 1em;\n  word-wrap: break-word;\n  font-weight: 700;\n  text-align: center;\n  transition: color 0.3s, border-color 0.3s; }\n\n.btn:hover {\n  border-color: #16a085;\n  color: #16a085; }\n\n/* basic grid, only for this demo */\n\n.align {\n  clear: both;\n  max-width: 800px;\n  text-align: center; }\n\n.align > li {\n  width: 15%;\n  min-height: 0px;\n  display: inline-block;\n  margin: 30px 20px 30px 30px;\n  padding: 0 0 0 60px;\n  vertical-align: top; }\n\n/*\r\n\t1. container\r\n*/\n\n.book {\n  position: relative;\n  width: 160px;\n  height: 220px;\n  -webkit-perspective: 1000px;\n  perspective: 1000px;\n  -webkit-transform-style: preserve-3d;\n  transform-style: preserve-3d; }\n\n/*\r\n\t2. background & color\r\n*/\n\n/* HARDCOVER FRONT */\n\n.hardcover_front li:first-child {\n  background-color: #eee;\n  -webkit-backface-visibility: hidden;\n  backface-visibility: hidden; }\n\n/* reverse */\n\n.hardcover_front li:last-child {\n  background: #fffbec; }\n\n/* HARDCOVER BACK */\n\n.hardcover_back li:first-child {\n  background: #fffbec; }\n\n/* reverse */\n\n.hardcover_back li:last-child {\n  background: #fffbec; }\n\n.book_spine li:first-child {\n  background: #eee; }\n\n.book_spine li:last-child {\n  background: #333; }\n\n/* thickness of cover */\n\n.hardcover_front li:first-child:after,\n.hardcover_front li:first-child:before,\n.hardcover_front li:last-child:after,\n.hardcover_front li:last-child:before,\n.hardcover_back li:first-child:after,\n.hardcover_back li:first-child:before,\n.hardcover_back li:last-child:after,\n.hardcover_back li:last-child:before,\n.book_spine li:first-child:after,\n.book_spine li:first-child:before,\n.book_spine li:last-child:after,\n.book_spine li:last-child:before {\n  background: #999; }\n\n/* page */\n\n.page > li {\n  background: linear-gradient(left, #e1ddd8 0%, #fffbf6 100%);\n  box-shadow: inset 0px -1px 2px rgba(50, 50, 50, 0.1), inset -1px 0px 1px rgba(150, 150, 150, 0.2);\n  border-radius: 0px 5px 5px 0px; }\n\n/*\r\n\t3. opening cover, back cover and pages\r\n*/\n\n.hardcover_front {\n  -webkit-transform: rotateY(-34deg) translateZ(8px);\n  transform: rotateY(-34deg) translateZ(8px);\n  z-index: 100; }\n\n.hardcover_back {\n  -webkit-transform: rotateY(-15deg) translateZ(-8px);\n  transform: rotateY(-15deg) translateZ(-8px); }\n\n.page li:nth-child(1) {\n  -webkit-transform: rotateY(-28deg);\n  transform: rotateY(-28deg); }\n\n.page li:nth-child(2) {\n  -webkit-transform: rotateY(-30deg);\n  transform: rotateY(-30deg); }\n\n.page li:nth-child(3) {\n  -webkit-transform: rotateY(-32deg);\n  transform: rotateY(-32deg); }\n\n.page li:nth-child(4) {\n  -webkit-transform: rotateY(-34deg);\n  transform: rotateY(-34deg); }\n\n.page li:nth-child(5) {\n  -webkit-transform: rotateY(-36deg);\n  transform: rotateY(-36deg); }\n\n/*\r\n\t4. position, transform & transition\r\n*/\n\n.hardcover_front,\n.hardcover_back,\n.book_spine,\n.hardcover_front li,\n.hardcover_back li,\n.book_spine li {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  -webkit-transform-style: preserve-3d;\n  transform-style: preserve-3d; }\n\n.hardcover_front,\n.hardcover_back {\n  -webkit-transform-origin: 0% 100%;\n  transform-origin: 0% 100%; }\n\n.hardcover_front {\n  transition: all 0.8s ease, z-index 0.6s; }\n\n/* HARDCOVER front */\n\n.hardcover_front li:first-child {\n  cursor: default;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n      user-select: none;\n  -webkit-transform: translateZ(2px);\n  transform: translateZ(2px); }\n\n.hardcover_front li:last-child {\n  -webkit-transform: rotateY(180deg) translateZ(2px);\n  transform: rotateY(180deg) translateZ(2px); }\n\n/* HARDCOVER back */\n\n.hardcover_back li:first-child {\n  -webkit-transform: translateZ(2px);\n  transform: translateZ(2px); }\n\n.hardcover_back li:last-child {\n  -webkit-transform: translateZ(-2px);\n  transform: translateZ(-2px); }\n\n/* thickness of cover */\n\n.hardcover_front li:first-child:after,\n.hardcover_front li:first-child:before,\n.hardcover_front li:last-child:after,\n.hardcover_front li:last-child:before,\n.hardcover_back li:first-child:after,\n.hardcover_back li:first-child:before,\n.hardcover_back li:last-child:after,\n.hardcover_back li:last-child:before,\n.book_spine li:first-child:after,\n.book_spine li:first-child:before,\n.book_spine li:last-child:after,\n.book_spine li:last-child:before {\n  position: absolute;\n  top: 0;\n  left: 0; }\n\n/* HARDCOVER front */\n\n.hardcover_front li:first-child:after,\n.hardcover_front li:first-child:before {\n  width: 4px;\n  height: 100%; }\n\n.hardcover_front li:first-child:after {\n  -webkit-transform: rotateY(90deg) translateZ(-2px) translateX(2px);\n  transform: rotateY(90deg) translateZ(-2px) translateX(2px); }\n\n.hardcover_front li:first-child:before {\n  -webkit-transform: rotateY(90deg) translateZ(158px) translateX(2px);\n  transform: rotateY(90deg) translateZ(158px) translateX(2px); }\n\n.hardcover_front li:last-child:after,\n.hardcover_front li:last-child:before {\n  width: 4px;\n  height: 160px; }\n\n.hardcover_front li:last-child:after {\n  -webkit-transform: rotateX(90deg) rotateZ(90deg) translateZ(80px) translateX(-2px) translateY(-78px);\n  transform: rotateX(90deg) rotateZ(90deg) translateZ(80px) translateX(-2px) translateY(-78px); }\n\n.hardcover_front li:last-child:before {\n  box-shadow: 0px 0px 30px 5px #333;\n  -webkit-transform: rotateX(90deg) rotateZ(90deg) translateZ(-140px) translateX(-2px) translateY(-78px);\n  transform: rotateX(90deg) rotateZ(90deg) translateZ(-140px) translateX(-2px) translateY(-78px); }\n\n/* thickness of cover */\n\n.hardcover_back li:first-child:after,\n.hardcover_back li:first-child:before {\n  width: 4px;\n  height: 100%; }\n\n.hardcover_back li:first-child:after {\n  -webkit-transform: rotateY(90deg) translateZ(-2px) translateX(2px);\n  transform: rotateY(90deg) translateZ(-2px) translateX(2px); }\n\n.hardcover_back li:first-child:before {\n  -webkit-transform: rotateY(90deg) translateZ(158px) translateX(2px);\n  transform: rotateY(90deg) translateZ(158px) translateX(2px); }\n\n.hardcover_back li:last-child:after,\n.hardcover_back li:last-child:before {\n  width: 4px;\n  height: 160px; }\n\n.hardcover_back li:last-child:after {\n  -webkit-transform: rotateX(90deg) rotateZ(90deg) translateZ(80px) translateX(2px) translateY(-78px);\n  transform: rotateX(90deg) rotateZ(90deg) translateZ(80px) translateX(2px) translateY(-78px); }\n\n.hardcover_back li:last-child:before {\n  box-shadow: 10px -1px 80px 20px #666;\n  -webkit-transform: rotateX(90deg) rotateZ(90deg) translateZ(-140px) translateX(2px) translateY(-78px);\n  transform: rotateX(90deg) rotateZ(90deg) translateZ(-140px) translateX(2px) translateY(-78px); }\n\n/* BOOK SPINE */\n\n.book_spine {\n  -webkit-transform: rotateY(60deg) translateX(-5px) translateZ(-12px);\n  transform: rotateY(60deg) translateX(-5px) translateZ(-12px);\n  width: 16px;\n  z-index: 0; }\n\n.book_spine li:first-child {\n  -webkit-transform: translateZ(2px);\n  transform: translateZ(2px); }\n\n.book_spine li:last-child {\n  -webkit-transform: translateZ(-2px);\n  transform: translateZ(-2px); }\n\n/* thickness of book spine */\n\n.book_spine li:first-child:after,\n.book_spine li:first-child:before {\n  width: 4px;\n  height: 100%; }\n\n.book_spine li:first-child:after {\n  -webkit-transform: rotateY(90deg) translateZ(-2px) translateX(2px);\n  transform: rotateY(90deg) translateZ(-2px) translateX(2px); }\n\n.book_spine li:first-child:before {\n  -webkit-transform: rotateY(-90deg) translateZ(-12px);\n  transform: rotateY(-90deg) translateZ(-12px); }\n\n.book_spine li:last-child:after,\n.book_spine li:last-child:before {\n  width: 4px;\n  height: 16px; }\n\n.book_spine li:last-child:after {\n  -webkit-transform: rotateX(90deg) rotateZ(90deg) translateZ(8px) translateX(2px) translateY(-6px);\n  transform: rotateX(90deg) rotateZ(90deg) translateZ(8px) translateX(2px) translateY(-6px); }\n\n.book_spine li:last-child:before {\n  box-shadow: 5px -1px 100px 40px rgba(0, 0, 0, 0.2);\n  -webkit-transform: rotateX(90deg) rotateZ(90deg) translateZ(-210px) translateX(2px) translateY(-6px);\n  transform: rotateX(90deg) rotateZ(90deg) translateZ(-210px) translateX(2px) translateY(-6px); }\n\n.page,\n.page > li {\n  position: absolute;\n  top: 0;\n  left: 0;\n  -webkit-transform-style: preserve-3d;\n  transform-style: preserve-3d; }\n\n.page {\n  width: 100%;\n  height: 98%;\n  top: 1%;\n  left: 3%;\n  z-index: 10; }\n\n.page > li {\n  width: 100%;\n  height: 100%;\n  -webkit-transform-origin: left center;\n  transform-origin: left center;\n  transition-property: -webkit-transform;\n  transition-property: transform;\n  transition-property: transform, -webkit-transform;\n  transition-timing-function: ease; }\n\n.page > li:nth-child(1) {\n  transition-duration: 0.6s; }\n\n.page > li:nth-child(2) {\n  transition-duration: 0.6s; }\n\n.page > li:nth-child(3) {\n  transition-duration: 0.4s; }\n\n.page > li:nth-child(4) {\n  transition-duration: 0.5s; }\n\n.page > li:nth-child(5) {\n  transition-duration: 0.6s; }\n\n/*\r\n\t5. events\r\n*/\n\n.book:hover > .hardcover_front {\n  -webkit-transform: rotateY(-145deg) translateZ(0);\n  transform: rotateY(-145deg) translateZ(0);\n  z-index: 0; }\n\n.book:hover > .page li:nth-child(1) {\n  -webkit-transform: rotateY(-30deg);\n  transform: rotateY(-30deg);\n  transition-duration: 1.5s; }\n\n.book:hover > .page li:nth-child(2) {\n  -webkit-transform: rotateY(-35deg);\n  transform: rotateY(-35deg);\n  transition-duration: 1.8s; }\n\n.book:hover > .page li:nth-child(3) {\n  -webkit-transform: rotateY(-118deg);\n  transform: rotateY(-118deg);\n  transition-duration: 1.6s; }\n\n.book:hover > .page li:nth-child(4) {\n  -webkit-transform: rotateY(-130deg);\n  transform: rotateY(-130deg);\n  transition-duration: 1.4s; }\n\n.book:hover > .page li:nth-child(5) {\n  -webkit-transform: rotateY(-140deg);\n  transform: rotateY(-140deg);\n  transition-duration: 1.2s; }\n\n/*\r\n\t6. Bonus\r\n*/\n\n/* cover CSS */\n\n.coverDesign {\n  position: absolute;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  right: 0;\n  overflow: hidden;\n  -webkit-backface-visibility: hidden;\n  backface-visibility: hidden; }\n\n.coverDesign::after {\n  background-image: linear-gradient(-135deg, rgba(255, 255, 255, 0.45) 0%, transparent 100%);\n  position: absolute;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  right: 0; }\n\n.coverDesign h1 {\n  color: #fff;\n  font-size: 2.2em;\n  letter-spacing: 0.05em;\n  text-align: center;\n  margin: 54% 0 0 0;\n  text-shadow: -1px -1px 0 rgba(0, 0, 0, 0.1); }\n\n.coverDesign p {\n  color: #f8f8f8;\n  font-size: 1em;\n  text-align: center;\n  text-shadow: -1px -1px 0 rgba(0, 0, 0, 0.1); }\n\n.yellow {\n  background-color: #f1c40f;\n  background-image: linear-gradient(top, #f1c40f 58%, #e7ba07 0%); }\n\n.blue {\n  background-color: #3498db;\n  background-image: linear-gradient(top, #3498db 58%, #2a90d4 0%); }\n\n.grey {\n  background-color: #f8e9d1;\n  background-image: linear-gradient(top, #f8e9d1 58%, #e7d5b7 0%); }\n\n/* Media Queries */\n\n@media screen and (max-width: 37.8125em) {\n  .align > li {\n    width: 100%;\n    min-height: 440px;\n    height: auto;\n    padding: 0;\n    margin: 0 0 30px 0; }\n  .book {\n    margin: 0 auto; } }\n\n.list {\n  max-width: 550px;\n  margin-left: 30%; }\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9tYW5nYS9hbGwtbGlzdGluZy9DOlxcVXNlcnNcXENBUkRPTlxcRGVza3RvcFxcTWFzdGVyIENDTSBhbm5lZSAxXFxQcm9qZXRcXE15UmVhZGluZ0Jvb2tzUHJvamVjdC9zcmNcXGFwcFxcY29tcG9uZW50c1xcbWFuZ2FcXGFsbC1saXN0aW5nXFxhbGwtbGlzdGluZy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9tYW5nYS9hbGwtbGlzdGluZy9hbGwtbGlzdGluZy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFNBQVM7RUFDVCxVQUFVO0VBQ1YscUJBQXFCLEVBQUE7O0FBR3ZCO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixjQUFjLEVBQUE7O0FBR2hCO0VBQ0UsV0FBVyxFQUFBOztBQUdiO0VBQ0UsU0FBUztFQUNULFVBQVU7RUFDVixnQkFBZ0IsRUFBQTs7QUFHbEI7RUFDRSxjQUFjO0VBQ2QscUJBQXFCLEVBQUE7O0FBR3ZCO0VBQ0UscUJBQXFCO0VBQ3JCLHlCQUF5QjtFQUN6Qix5QkFBeUI7RUFDekIsaUJBQWlCO0VBQ2pCLGdCQUFnQjtFQUNoQixnQkFBZ0I7RUFDaEIsb0JBQW9CO0VBQ3BCLGtCQUFrQjtFQUdsQix5Q0FBeUMsRUFBQTs7QUFHM0M7RUFDRSxxQkFBcUI7RUFDckIsY0FBYztFQUNkLGdCQUFnQjtFQUNoQix5QkFBeUI7RUFDekIsY0FBYztFQUNkLHFCQUFxQjtFQUNyQixnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBR2xCLHlDQUF5QyxFQUFBOztBQUczQztFQUNFLHFCQUFxQjtFQUNyQixjQUFjLEVBQUE7O0FBR2hCLG1DQUFBOztBQUVBO0VBQ0UsV0FBVztFQUNYLGdCQUFnQjtFQUNoQixrQkFBa0IsRUFBQTs7QUFHcEI7RUFDRSxVQUFVO0VBQ1YsZUFBZTtFQUNmLHFCQUFxQjtFQUNyQiwyQkFBMkI7RUFDM0IsbUJBQW1CO0VBQ25CLG1CQUFtQixFQUFBOztBQUdyQjs7Q0NUQzs7QURhRDtFQUNFLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osYUFBYTtFQUNiLDJCQUEyQjtFQUUzQixtQkFBbUI7RUFDbkIsb0NBQW9DO0VBRXBDLDRCQUE0QixFQUFBOztBQUc5Qjs7Q0NYQzs7QURlRCxvQkFBQTs7QUFDQTtFQUNFLHNCQUFzQjtFQUN0QixtQ0FBbUM7RUFFbkMsMkJBQTJCLEVBQUE7O0FBRzdCLFlBQUE7O0FBQ0E7RUFDRSxtQkFBbUIsRUFBQTs7QUFHckIsbUJBQUE7O0FBQ0E7RUFDRSxtQkFBbUIsRUFBQTs7QUFHckIsWUFBQTs7QUFDQTtFQUNFLG1CQUFtQixFQUFBOztBQUdyQjtFQUNFLGdCQUFnQixFQUFBOztBQUdsQjtFQUNFLGdCQUFnQixFQUFBOztBQUdsQix1QkFBQTs7QUFFQTs7Ozs7Ozs7Ozs7O0VBWUUsZ0JBQWdCLEVBQUE7O0FBR2xCLFNBQUE7O0FBRUE7RUFJRSwyREFBMkQ7RUFDM0QsaUdBQWlHO0VBQ2pHLDhCQUE4QixFQUFBOztBQUdoQzs7Q0N0QkM7O0FEMEJEO0VBQ0Usa0RBQWtEO0VBRWxELDBDQUEwQztFQUMxQyxZQUFZLEVBQUE7O0FBR2Q7RUFDRSxtREFBbUQ7RUFFbkQsMkNBQTJDLEVBQUE7O0FBRzdDO0VBQ0Usa0NBQWtDO0VBRWxDLDBCQUEwQixFQUFBOztBQUc1QjtFQUNFLGtDQUFrQztFQUVsQywwQkFBMEIsRUFBQTs7QUFHNUI7RUFDRSxrQ0FBa0M7RUFFbEMsMEJBQTBCLEVBQUE7O0FBRzVCO0VBQ0Usa0NBQWtDO0VBRWxDLDBCQUEwQixFQUFBOztBQUc1QjtFQUNFLGtDQUFrQztFQUVsQywwQkFBMEIsRUFBQTs7QUFHNUI7O0NDOUJDOztBRGtDRDs7Ozs7O0VBTUUsa0JBQWtCO0VBQ2xCLE1BQU07RUFDTixPQUFPO0VBQ1AsV0FBVztFQUNYLFlBQVk7RUFDWixvQ0FBb0M7RUFFcEMsNEJBQTRCLEVBQUE7O0FBRzlCOztFQUVFLGlDQUFpQztFQUVqQyx5QkFBeUIsRUFBQTs7QUFHM0I7RUFHRSx1Q0FBdUMsRUFBQTs7QUFHekMsb0JBQUE7O0FBQ0E7RUFDRSxlQUFlO0VBQ2YseUJBQXlCO0VBQ3pCLHNCQUFzQjtFQUN0QixxQkFBaUI7TUFBakIsaUJBQWlCO0VBQ2pCLGtDQUFrQztFQUVsQywwQkFBMEIsRUFBQTs7QUFHNUI7RUFDRSxrREFBa0Q7RUFFbEQsMENBQTBDLEVBQUE7O0FBRzVDLG1CQUFBOztBQUNBO0VBQ0Usa0NBQWtDO0VBRWxDLDBCQUEwQixFQUFBOztBQUc1QjtFQUNFLG1DQUFtQztFQUVuQywyQkFBMkIsRUFBQTs7QUFHN0IsdUJBQUE7O0FBQ0E7Ozs7Ozs7Ozs7OztFQVlFLGtCQUFrQjtFQUNsQixNQUFNO0VBQ04sT0FBTyxFQUFBOztBQUdULG9CQUFBOztBQUNBOztFQUVFLFVBQVU7RUFDVixZQUFZLEVBQUE7O0FBR2Q7RUFDRSxrRUFBa0U7RUFFbEUsMERBQTBELEVBQUE7O0FBRzVEO0VBQ0UsbUVBQW1FO0VBRW5FLDJEQUEyRCxFQUFBOztBQUc3RDs7RUFFRSxVQUFVO0VBQ1YsYUFBYSxFQUFBOztBQUdmO0VBQ0Usb0dBQW9HO0VBRXBHLDRGQUE0RixFQUFBOztBQUc5RjtFQUNFLGlDQUFpQztFQUNqQyxzR0FBc0c7RUFFdEcsOEZBQThGLEVBQUE7O0FBR2hHLHVCQUFBOztBQUVBOztFQUVFLFVBQVU7RUFDVixZQUFZLEVBQUE7O0FBR2Q7RUFDRSxrRUFBa0U7RUFFbEUsMERBQTBELEVBQUE7O0FBRzVEO0VBQ0UsbUVBQW1FO0VBRW5FLDJEQUEyRCxFQUFBOztBQUc3RDs7RUFFRSxVQUFVO0VBQ1YsYUFBYSxFQUFBOztBQUdmO0VBQ0UsbUdBQW1HO0VBRW5HLDJGQUEyRixFQUFBOztBQUc3RjtFQUNFLG9DQUFvQztFQUNwQyxxR0FBcUc7RUFFckcsNkZBQTZGLEVBQUE7O0FBRy9GLGVBQUE7O0FBQ0E7RUFDRSxvRUFBb0U7RUFFcEUsNERBQTREO0VBQzVELFdBQVc7RUFDWCxVQUFVLEVBQUE7O0FBR1o7RUFDRSxrQ0FBa0M7RUFFbEMsMEJBQTBCLEVBQUE7O0FBRzVCO0VBQ0UsbUNBQW1DO0VBRW5DLDJCQUEyQixFQUFBOztBQUc3Qiw0QkFBQTs7QUFDQTs7RUFFRSxVQUFVO0VBQ1YsWUFBWSxFQUFBOztBQUdkO0VBQ0Usa0VBQWtFO0VBRWxFLDBEQUEwRCxFQUFBOztBQUc1RDtFQUNFLG9EQUFvRDtFQUVwRCw0Q0FBNEMsRUFBQTs7QUFHOUM7O0VBRUUsVUFBVTtFQUNWLFlBQVksRUFBQTs7QUFHZDtFQUNFLGlHQUFpRztFQUVqRyx5RkFBeUYsRUFBQTs7QUFHM0Y7RUFDRSxrREFBa0Q7RUFDbEQsb0dBQW9HO0VBRXBHLDRGQUE0RixFQUFBOztBQUc5Rjs7RUFFRSxrQkFBa0I7RUFDbEIsTUFBTTtFQUNOLE9BQU87RUFDUCxvQ0FBb0M7RUFFcEMsNEJBQTRCLEVBQUE7O0FBRzlCO0VBQ0UsV0FBVztFQUNYLFdBQVc7RUFDWCxPQUFPO0VBQ1AsUUFBUTtFQUNSLFdBQVcsRUFBQTs7QUFHYjtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1oscUNBQXFDO0VBRXJDLDZCQUE2QjtFQUc3QixzQ0FBOEI7RUFBOUIsOEJBQThCO0VBQTlCLGlEQUE4QjtFQUc5QixnQ0FBZ0MsRUFBQTs7QUFHbEM7RUFHRSx5QkFBeUIsRUFBQTs7QUFHM0I7RUFHRSx5QkFBeUIsRUFBQTs7QUFHM0I7RUFHRSx5QkFBeUIsRUFBQTs7QUFHM0I7RUFHRSx5QkFBeUIsRUFBQTs7QUFHM0I7RUFHRSx5QkFBeUIsRUFBQTs7QUFHM0I7O0NDckVDOztBRHlFRDtFQUNFLGlEQUFpRDtFQUVqRCx5Q0FBeUM7RUFDekMsVUFBVSxFQUFBOztBQUdaO0VBQ0Usa0NBQWtDO0VBRWxDLDBCQUEwQjtFQUcxQix5QkFBeUIsRUFBQTs7QUFHM0I7RUFDRSxrQ0FBa0M7RUFFbEMsMEJBQTBCO0VBRzFCLHlCQUF5QixFQUFBOztBQUczQjtFQUNFLG1DQUFtQztFQUVuQywyQkFBMkI7RUFHM0IseUJBQXlCLEVBQUE7O0FBRzNCO0VBQ0UsbUNBQW1DO0VBRW5DLDJCQUEyQjtFQUczQix5QkFBeUIsRUFBQTs7QUFHM0I7RUFDRSxtQ0FBbUM7RUFFbkMsMkJBQTJCO0VBRzNCLHlCQUF5QixFQUFBOztBQUczQjs7Q0M1RUM7O0FEZ0ZELGNBQUE7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsTUFBTTtFQUNOLE9BQU87RUFDUCxTQUFTO0VBQ1QsUUFBUTtFQUNSLGdCQUFnQjtFQUNoQixtQ0FBbUM7RUFFbkMsMkJBQTJCLEVBQUE7O0FBRzdCO0VBR0UsMEZBQTBGO0VBQzFGLGtCQUFrQjtFQUNsQixNQUFNO0VBQ04sT0FBTztFQUNQLFNBQVM7RUFDVCxRQUFRLEVBQUE7O0FBR1Y7RUFDRSxXQUFXO0VBQ1gsZ0JBQWdCO0VBQ2hCLHNCQUFzQjtFQUN0QixrQkFBa0I7RUFDbEIsaUJBQWlCO0VBQ2pCLDJDQUEyQyxFQUFBOztBQUc3QztFQUNFLGNBQWM7RUFDZCxjQUFjO0VBQ2Qsa0JBQWtCO0VBQ2xCLDJDQUEyQyxFQUFBOztBQUc3QztFQUNFLHlCQUF5QjtFQUd6QiwrREFBK0QsRUFBQTs7QUFHakU7RUFDRSx5QkFBeUI7RUFHekIsK0RBQStELEVBQUE7O0FBR2pFO0VBQ0UseUJBQXlCO0VBR3pCLCtEQUErRCxFQUFBOztBQUdqRSxrQkFBQTs7QUFDQTtFQUNFO0lBQ0UsV0FBVztJQUNYLGlCQUFpQjtJQUNqQixZQUFZO0lBQ1osVUFBVTtJQUNWLGtCQUFrQixFQUFBO0VBR3BCO0lBQ0UsY0FBYyxFQUFBLEVBQ2Y7O0FBR0g7RUFDRSxnQkFBZ0I7RUFDaEIsZ0JBQWdCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL21hbmdhL2FsbC1saXN0aW5nL2FsbC1saXN0aW5nLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiKiB7XHJcbiAgbWFyZ2luOiAwO1xyXG4gIHBhZGRpbmc6IDA7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG59XHJcblxyXG4uZXhhbXBsZS1yYWRpby1ncm91cCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gIG1hcmdpbjogMTVweCAwO1xyXG59XHJcblxyXG4uZXhhbXBsZS1yYWRpby1idXR0b24ge1xyXG4gIG1hcmdpbjogNXB4O1xyXG59XHJcblxyXG51bCB7XHJcbiAgbWFyZ2luOiAwO1xyXG4gIHBhZGRpbmc6IDA7XHJcbiAgbGlzdC1zdHlsZTogbm9uZTtcclxufVxyXG5cclxuYSB7XHJcbiAgY29sb3I6ICMyYzNlNTA7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG59XHJcblxyXG4uYnRuIHtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICBib3JkZXI6IDJweCBzb2xpZCAjMmMzZTUwO1xyXG4gIG1hcmdpbi10b3A6IDEwMHB4O1xyXG4gIGZvbnQtc2l6ZTogMC45ZW07XHJcbiAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICBwYWRkaW5nOiAwLjFlbSAwLjRlbTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBjb2xvciAwLjNzLCBib3JkZXItY29sb3IgMC4zcztcclxuICAtbW96LXRyYW5zaXRpb246IGNvbG9yIDAuM3MsIGJvcmRlci1jb2xvciAwLjNzO1xyXG4gIHRyYW5zaXRpb246IGNvbG9yIDAuM3MsIGJvcmRlci1jb2xvciAwLjNzO1xyXG59XHJcblxyXG4udGl0bGUge1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBtYXgtd2lkdGg6IDgwJTtcclxuICBtYXJnaW4tdG9wOiAxMnB4O1xyXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgZm9udC1zaXplOiAxZW07XHJcbiAgd29yZC13cmFwOiBicmVhay13b3JkO1xyXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIC13ZWJraXQtdHJhbnNpdGlvbjogY29sb3IgMC4zcywgYm9yZGVyLWNvbG9yIDAuM3M7XHJcbiAgLW1vei10cmFuc2l0aW9uOiBjb2xvciAwLjNzLCBib3JkZXItY29sb3IgMC4zcztcclxuICB0cmFuc2l0aW9uOiBjb2xvciAwLjNzLCBib3JkZXItY29sb3IgMC4zcztcclxufVxyXG5cclxuLmJ0bjpob3ZlciB7XHJcbiAgYm9yZGVyLWNvbG9yOiAjMTZhMDg1O1xyXG4gIGNvbG9yOiAjMTZhMDg1O1xyXG59XHJcblxyXG4vKiBiYXNpYyBncmlkLCBvbmx5IGZvciB0aGlzIGRlbW8gKi9cclxuXHJcbi5hbGlnbiB7XHJcbiAgY2xlYXI6IGJvdGg7XHJcbiAgbWF4LXdpZHRoOiA4MDBweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5hbGlnbiA+IGxpIHtcclxuICB3aWR0aDogMTUlO1xyXG4gIG1pbi1oZWlnaHQ6IDBweDtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgbWFyZ2luOiAzMHB4IDIwcHggMzBweCAzMHB4O1xyXG4gIHBhZGRpbmc6IDAgMCAwIDYwcHg7XHJcbiAgdmVydGljYWwtYWxpZ246IHRvcDtcclxufVxyXG5cclxuLypcclxuXHQxLiBjb250YWluZXJcclxuKi9cclxuXHJcbi5ib29rIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgd2lkdGg6IDE2MHB4O1xyXG4gIGhlaWdodDogMjIwcHg7XHJcbiAgLXdlYmtpdC1wZXJzcGVjdGl2ZTogMTAwMHB4O1xyXG4gIC1tb3otcGVyc3BlY3RpdmU6IDEwMDBweDtcclxuICBwZXJzcGVjdGl2ZTogMTAwMHB4O1xyXG4gIC13ZWJraXQtdHJhbnNmb3JtLXN0eWxlOiBwcmVzZXJ2ZS0zZDtcclxuICAtbW96LXRyYW5zZm9ybS1zdHlsZTogcHJlc2VydmUtM2Q7XHJcbiAgdHJhbnNmb3JtLXN0eWxlOiBwcmVzZXJ2ZS0zZDtcclxufVxyXG5cclxuLypcclxuXHQyLiBiYWNrZ3JvdW5kICYgY29sb3JcclxuKi9cclxuXHJcbi8qIEhBUkRDT1ZFUiBGUk9OVCAqL1xyXG4uaGFyZGNvdmVyX2Zyb250IGxpOmZpcnN0LWNoaWxkIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWVlO1xyXG4gIC13ZWJraXQtYmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuO1xyXG4gIC1tb3otYmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuO1xyXG4gIGJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjtcclxufVxyXG5cclxuLyogcmV2ZXJzZSAqL1xyXG4uaGFyZGNvdmVyX2Zyb250IGxpOmxhc3QtY2hpbGQge1xyXG4gIGJhY2tncm91bmQ6ICNmZmZiZWM7XHJcbn1cclxuXHJcbi8qIEhBUkRDT1ZFUiBCQUNLICovXHJcbi5oYXJkY292ZXJfYmFjayBsaTpmaXJzdC1jaGlsZCB7XHJcbiAgYmFja2dyb3VuZDogI2ZmZmJlYztcclxufVxyXG5cclxuLyogcmV2ZXJzZSAqL1xyXG4uaGFyZGNvdmVyX2JhY2sgbGk6bGFzdC1jaGlsZCB7XHJcbiAgYmFja2dyb3VuZDogI2ZmZmJlYztcclxufVxyXG5cclxuLmJvb2tfc3BpbmUgbGk6Zmlyc3QtY2hpbGQge1xyXG4gIGJhY2tncm91bmQ6ICNlZWU7XHJcbn1cclxuXHJcbi5ib29rX3NwaW5lIGxpOmxhc3QtY2hpbGQge1xyXG4gIGJhY2tncm91bmQ6ICMzMzM7XHJcbn1cclxuXHJcbi8qIHRoaWNrbmVzcyBvZiBjb3ZlciAqL1xyXG5cclxuLmhhcmRjb3Zlcl9mcm9udCBsaTpmaXJzdC1jaGlsZDphZnRlcixcclxuLmhhcmRjb3Zlcl9mcm9udCBsaTpmaXJzdC1jaGlsZDpiZWZvcmUsXHJcbi5oYXJkY292ZXJfZnJvbnQgbGk6bGFzdC1jaGlsZDphZnRlcixcclxuLmhhcmRjb3Zlcl9mcm9udCBsaTpsYXN0LWNoaWxkOmJlZm9yZSxcclxuLmhhcmRjb3Zlcl9iYWNrIGxpOmZpcnN0LWNoaWxkOmFmdGVyLFxyXG4uaGFyZGNvdmVyX2JhY2sgbGk6Zmlyc3QtY2hpbGQ6YmVmb3JlLFxyXG4uaGFyZGNvdmVyX2JhY2sgbGk6bGFzdC1jaGlsZDphZnRlcixcclxuLmhhcmRjb3Zlcl9iYWNrIGxpOmxhc3QtY2hpbGQ6YmVmb3JlLFxyXG4uYm9va19zcGluZSBsaTpmaXJzdC1jaGlsZDphZnRlcixcclxuLmJvb2tfc3BpbmUgbGk6Zmlyc3QtY2hpbGQ6YmVmb3JlLFxyXG4uYm9va19zcGluZSBsaTpsYXN0LWNoaWxkOmFmdGVyLFxyXG4uYm9va19zcGluZSBsaTpsYXN0LWNoaWxkOmJlZm9yZSB7XHJcbiAgYmFja2dyb3VuZDogIzk5OTtcclxufVxyXG5cclxuLyogcGFnZSAqL1xyXG5cclxuLnBhZ2UgPiBsaSB7XHJcbiAgYmFja2dyb3VuZDogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQobGVmdCwgI2UxZGRkOCAwJSwgI2ZmZmJmNiAxMDAlKTtcclxuICBiYWNrZ3JvdW5kOiAtbW96LWxpbmVhci1ncmFkaWVudChsZWZ0LCAjZTFkZGQ4IDAlLCAjZmZmYmY2IDEwMCUpO1xyXG4gIGJhY2tncm91bmQ6IC1tcy1saW5lYXItZ3JhZGllbnQobGVmdCwgI2UxZGRkOCAwJSwgI2ZmZmJmNiAxMDAlKTtcclxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQobGVmdCwgI2UxZGRkOCAwJSwgI2ZmZmJmNiAxMDAlKTtcclxuICBib3gtc2hhZG93OiBpbnNldCAwcHggLTFweCAycHggcmdiYSg1MCwgNTAsIDUwLCAwLjEpLCBpbnNldCAtMXB4IDBweCAxcHggcmdiYSgxNTAsIDE1MCwgMTUwLCAwLjIpO1xyXG4gIGJvcmRlci1yYWRpdXM6IDBweCA1cHggNXB4IDBweDtcclxufVxyXG5cclxuLypcclxuXHQzLiBvcGVuaW5nIGNvdmVyLCBiYWNrIGNvdmVyIGFuZCBwYWdlc1xyXG4qL1xyXG5cclxuLmhhcmRjb3Zlcl9mcm9udCB7XHJcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZVkoLTM0ZGVnKSB0cmFuc2xhdGVaKDhweCk7XHJcbiAgLW1vei10cmFuc2Zvcm06IHJvdGF0ZVkoLTM0ZGVnKSB0cmFuc2xhdGVaKDhweCk7XHJcbiAgdHJhbnNmb3JtOiByb3RhdGVZKC0zNGRlZykgdHJhbnNsYXRlWig4cHgpO1xyXG4gIHotaW5kZXg6IDEwMDtcclxufVxyXG5cclxuLmhhcmRjb3Zlcl9iYWNrIHtcclxuICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlWSgtMTVkZWcpIHRyYW5zbGF0ZVooLThweCk7XHJcbiAgLW1vei10cmFuc2Zvcm06IHJvdGF0ZVkoLTE1ZGVnKSB0cmFuc2xhdGVaKC04cHgpO1xyXG4gIHRyYW5zZm9ybTogcm90YXRlWSgtMTVkZWcpIHRyYW5zbGF0ZVooLThweCk7XHJcbn1cclxuXHJcbi5wYWdlIGxpOm50aC1jaGlsZCgxKSB7XHJcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZVkoLTI4ZGVnKTtcclxuICAtbW96LXRyYW5zZm9ybTogcm90YXRlWSgtMjhkZWcpO1xyXG4gIHRyYW5zZm9ybTogcm90YXRlWSgtMjhkZWcpO1xyXG59XHJcblxyXG4ucGFnZSBsaTpudGgtY2hpbGQoMikge1xyXG4gIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGVZKC0zMGRlZyk7XHJcbiAgLW1vei10cmFuc2Zvcm06IHJvdGF0ZVkoLTMwZGVnKTtcclxuICB0cmFuc2Zvcm06IHJvdGF0ZVkoLTMwZGVnKTtcclxufVxyXG5cclxuLnBhZ2UgbGk6bnRoLWNoaWxkKDMpIHtcclxuICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlWSgtMzJkZWcpO1xyXG4gIC1tb3otdHJhbnNmb3JtOiByb3RhdGVZKC0zMmRlZyk7XHJcbiAgdHJhbnNmb3JtOiByb3RhdGVZKC0zMmRlZyk7XHJcbn1cclxuXHJcbi5wYWdlIGxpOm50aC1jaGlsZCg0KSB7XHJcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZVkoLTM0ZGVnKTtcclxuICAtbW96LXRyYW5zZm9ybTogcm90YXRlWSgtMzRkZWcpO1xyXG4gIHRyYW5zZm9ybTogcm90YXRlWSgtMzRkZWcpO1xyXG59XHJcblxyXG4ucGFnZSBsaTpudGgtY2hpbGQoNSkge1xyXG4gIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGVZKC0zNmRlZyk7XHJcbiAgLW1vei10cmFuc2Zvcm06IHJvdGF0ZVkoLTM2ZGVnKTtcclxuICB0cmFuc2Zvcm06IHJvdGF0ZVkoLTM2ZGVnKTtcclxufVxyXG5cclxuLypcclxuXHQ0LiBwb3NpdGlvbiwgdHJhbnNmb3JtICYgdHJhbnNpdGlvblxyXG4qL1xyXG5cclxuLmhhcmRjb3Zlcl9mcm9udCxcclxuLmhhcmRjb3Zlcl9iYWNrLFxyXG4uYm9va19zcGluZSxcclxuLmhhcmRjb3Zlcl9mcm9udCBsaSxcclxuLmhhcmRjb3Zlcl9iYWNrIGxpLFxyXG4uYm9va19zcGluZSBsaSB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogMDtcclxuICBsZWZ0OiAwO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICAtd2Via2l0LXRyYW5zZm9ybS1zdHlsZTogcHJlc2VydmUtM2Q7XHJcbiAgLW1vei10cmFuc2Zvcm0tc3R5bGU6IHByZXNlcnZlLTNkO1xyXG4gIHRyYW5zZm9ybS1zdHlsZTogcHJlc2VydmUtM2Q7XHJcbn1cclxuXHJcbi5oYXJkY292ZXJfZnJvbnQsXHJcbi5oYXJkY292ZXJfYmFjayB7XHJcbiAgLXdlYmtpdC10cmFuc2Zvcm0tb3JpZ2luOiAwJSAxMDAlO1xyXG4gIC1tb3otdHJhbnNmb3JtLW9yaWdpbjogMCUgMTAwJTtcclxuICB0cmFuc2Zvcm0tb3JpZ2luOiAwJSAxMDAlO1xyXG59XHJcblxyXG4uaGFyZGNvdmVyX2Zyb250IHtcclxuICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjhzIGVhc2UsIHotaW5kZXggMC42cztcclxuICAtbW96LXRyYW5zaXRpb246IGFsbCAwLjhzIGVhc2UsIHotaW5kZXggMC42cztcclxuICB0cmFuc2l0aW9uOiBhbGwgMC44cyBlYXNlLCB6LWluZGV4IDAuNnM7XHJcbn1cclxuXHJcbi8qIEhBUkRDT1ZFUiBmcm9udCAqL1xyXG4uaGFyZGNvdmVyX2Zyb250IGxpOmZpcnN0LWNoaWxkIHtcclxuICBjdXJzb3I6IGRlZmF1bHQ7XHJcbiAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcclxuICAtbW96LXVzZXItc2VsZWN0OiBub25lO1xyXG4gIHVzZXItc2VsZWN0OiBub25lO1xyXG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVaKDJweCk7XHJcbiAgLW1vei10cmFuc2Zvcm06IHRyYW5zbGF0ZVooMnB4KTtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVooMnB4KTtcclxufVxyXG5cclxuLmhhcmRjb3Zlcl9mcm9udCBsaTpsYXN0LWNoaWxkIHtcclxuICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlWSgxODBkZWcpIHRyYW5zbGF0ZVooMnB4KTtcclxuICAtbW96LXRyYW5zZm9ybTogcm90YXRlWSgxODBkZWcpIHRyYW5zbGF0ZVooMnB4KTtcclxuICB0cmFuc2Zvcm06IHJvdGF0ZVkoMTgwZGVnKSB0cmFuc2xhdGVaKDJweCk7XHJcbn1cclxuXHJcbi8qIEhBUkRDT1ZFUiBiYWNrICovXHJcbi5oYXJkY292ZXJfYmFjayBsaTpmaXJzdC1jaGlsZCB7XHJcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVooMnB4KTtcclxuICAtbW96LXRyYW5zZm9ybTogdHJhbnNsYXRlWigycHgpO1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWigycHgpO1xyXG59XHJcblxyXG4uaGFyZGNvdmVyX2JhY2sgbGk6bGFzdC1jaGlsZCB7XHJcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVooLTJweCk7XHJcbiAgLW1vei10cmFuc2Zvcm06IHRyYW5zbGF0ZVooLTJweCk7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVaKC0ycHgpO1xyXG59XHJcblxyXG4vKiB0aGlja25lc3Mgb2YgY292ZXIgKi9cclxuLmhhcmRjb3Zlcl9mcm9udCBsaTpmaXJzdC1jaGlsZDphZnRlcixcclxuLmhhcmRjb3Zlcl9mcm9udCBsaTpmaXJzdC1jaGlsZDpiZWZvcmUsXHJcbi5oYXJkY292ZXJfZnJvbnQgbGk6bGFzdC1jaGlsZDphZnRlcixcclxuLmhhcmRjb3Zlcl9mcm9udCBsaTpsYXN0LWNoaWxkOmJlZm9yZSxcclxuLmhhcmRjb3Zlcl9iYWNrIGxpOmZpcnN0LWNoaWxkOmFmdGVyLFxyXG4uaGFyZGNvdmVyX2JhY2sgbGk6Zmlyc3QtY2hpbGQ6YmVmb3JlLFxyXG4uaGFyZGNvdmVyX2JhY2sgbGk6bGFzdC1jaGlsZDphZnRlcixcclxuLmhhcmRjb3Zlcl9iYWNrIGxpOmxhc3QtY2hpbGQ6YmVmb3JlLFxyXG4uYm9va19zcGluZSBsaTpmaXJzdC1jaGlsZDphZnRlcixcclxuLmJvb2tfc3BpbmUgbGk6Zmlyc3QtY2hpbGQ6YmVmb3JlLFxyXG4uYm9va19zcGluZSBsaTpsYXN0LWNoaWxkOmFmdGVyLFxyXG4uYm9va19zcGluZSBsaTpsYXN0LWNoaWxkOmJlZm9yZSB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogMDtcclxuICBsZWZ0OiAwO1xyXG59XHJcblxyXG4vKiBIQVJEQ09WRVIgZnJvbnQgKi9cclxuLmhhcmRjb3Zlcl9mcm9udCBsaTpmaXJzdC1jaGlsZDphZnRlcixcclxuLmhhcmRjb3Zlcl9mcm9udCBsaTpmaXJzdC1jaGlsZDpiZWZvcmUge1xyXG4gIHdpZHRoOiA0cHg7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG59XHJcblxyXG4uaGFyZGNvdmVyX2Zyb250IGxpOmZpcnN0LWNoaWxkOmFmdGVyIHtcclxuICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlWSg5MGRlZykgdHJhbnNsYXRlWigtMnB4KSB0cmFuc2xhdGVYKDJweCk7XHJcbiAgLW1vei10cmFuc2Zvcm06IHJvdGF0ZVkoOTBkZWcpIHRyYW5zbGF0ZVooLTJweCkgdHJhbnNsYXRlWCgycHgpO1xyXG4gIHRyYW5zZm9ybTogcm90YXRlWSg5MGRlZykgdHJhbnNsYXRlWigtMnB4KSB0cmFuc2xhdGVYKDJweCk7XHJcbn1cclxuXHJcbi5oYXJkY292ZXJfZnJvbnQgbGk6Zmlyc3QtY2hpbGQ6YmVmb3JlIHtcclxuICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlWSg5MGRlZykgdHJhbnNsYXRlWigxNThweCkgdHJhbnNsYXRlWCgycHgpO1xyXG4gIC1tb3otdHJhbnNmb3JtOiByb3RhdGVZKDkwZGVnKSB0cmFuc2xhdGVaKDE1OHB4KSB0cmFuc2xhdGVYKDJweCk7XHJcbiAgdHJhbnNmb3JtOiByb3RhdGVZKDkwZGVnKSB0cmFuc2xhdGVaKDE1OHB4KSB0cmFuc2xhdGVYKDJweCk7XHJcbn1cclxuXHJcbi5oYXJkY292ZXJfZnJvbnQgbGk6bGFzdC1jaGlsZDphZnRlcixcclxuLmhhcmRjb3Zlcl9mcm9udCBsaTpsYXN0LWNoaWxkOmJlZm9yZSB7XHJcbiAgd2lkdGg6IDRweDtcclxuICBoZWlnaHQ6IDE2MHB4O1xyXG59XHJcblxyXG4uaGFyZGNvdmVyX2Zyb250IGxpOmxhc3QtY2hpbGQ6YWZ0ZXIge1xyXG4gIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGVYKDkwZGVnKSByb3RhdGVaKDkwZGVnKSB0cmFuc2xhdGVaKDgwcHgpIHRyYW5zbGF0ZVgoLTJweCkgdHJhbnNsYXRlWSgtNzhweCk7XHJcbiAgLW1vei10cmFuc2Zvcm06IHJvdGF0ZVgoOTBkZWcpIHJvdGF0ZVooOTBkZWcpIHRyYW5zbGF0ZVooODBweCkgdHJhbnNsYXRlWCgtMnB4KSB0cmFuc2xhdGVZKC03OHB4KTtcclxuICB0cmFuc2Zvcm06IHJvdGF0ZVgoOTBkZWcpIHJvdGF0ZVooOTBkZWcpIHRyYW5zbGF0ZVooODBweCkgdHJhbnNsYXRlWCgtMnB4KSB0cmFuc2xhdGVZKC03OHB4KTtcclxufVxyXG5cclxuLmhhcmRjb3Zlcl9mcm9udCBsaTpsYXN0LWNoaWxkOmJlZm9yZSB7XHJcbiAgYm94LXNoYWRvdzogMHB4IDBweCAzMHB4IDVweCAjMzMzO1xyXG4gIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGVYKDkwZGVnKSByb3RhdGVaKDkwZGVnKSB0cmFuc2xhdGVaKC0xNDBweCkgdHJhbnNsYXRlWCgtMnB4KSB0cmFuc2xhdGVZKC03OHB4KTtcclxuICAtbW96LXRyYW5zZm9ybTogcm90YXRlWCg5MGRlZykgcm90YXRlWig5MGRlZykgdHJhbnNsYXRlWigtMTQwcHgpIHRyYW5zbGF0ZVgoLTJweCkgdHJhbnNsYXRlWSgtNzhweCk7XHJcbiAgdHJhbnNmb3JtOiByb3RhdGVYKDkwZGVnKSByb3RhdGVaKDkwZGVnKSB0cmFuc2xhdGVaKC0xNDBweCkgdHJhbnNsYXRlWCgtMnB4KSB0cmFuc2xhdGVZKC03OHB4KTtcclxufVxyXG5cclxuLyogdGhpY2tuZXNzIG9mIGNvdmVyICovXHJcblxyXG4uaGFyZGNvdmVyX2JhY2sgbGk6Zmlyc3QtY2hpbGQ6YWZ0ZXIsXHJcbi5oYXJkY292ZXJfYmFjayBsaTpmaXJzdC1jaGlsZDpiZWZvcmUge1xyXG4gIHdpZHRoOiA0cHg7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG59XHJcblxyXG4uaGFyZGNvdmVyX2JhY2sgbGk6Zmlyc3QtY2hpbGQ6YWZ0ZXIge1xyXG4gIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGVZKDkwZGVnKSB0cmFuc2xhdGVaKC0ycHgpIHRyYW5zbGF0ZVgoMnB4KTtcclxuICAtbW96LXRyYW5zZm9ybTogcm90YXRlWSg5MGRlZykgdHJhbnNsYXRlWigtMnB4KSB0cmFuc2xhdGVYKDJweCk7XHJcbiAgdHJhbnNmb3JtOiByb3RhdGVZKDkwZGVnKSB0cmFuc2xhdGVaKC0ycHgpIHRyYW5zbGF0ZVgoMnB4KTtcclxufVxyXG5cclxuLmhhcmRjb3Zlcl9iYWNrIGxpOmZpcnN0LWNoaWxkOmJlZm9yZSB7XHJcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZVkoOTBkZWcpIHRyYW5zbGF0ZVooMTU4cHgpIHRyYW5zbGF0ZVgoMnB4KTtcclxuICAtbW96LXRyYW5zZm9ybTogcm90YXRlWSg5MGRlZykgdHJhbnNsYXRlWigxNThweCkgdHJhbnNsYXRlWCgycHgpO1xyXG4gIHRyYW5zZm9ybTogcm90YXRlWSg5MGRlZykgdHJhbnNsYXRlWigxNThweCkgdHJhbnNsYXRlWCgycHgpO1xyXG59XHJcblxyXG4uaGFyZGNvdmVyX2JhY2sgbGk6bGFzdC1jaGlsZDphZnRlcixcclxuLmhhcmRjb3Zlcl9iYWNrIGxpOmxhc3QtY2hpbGQ6YmVmb3JlIHtcclxuICB3aWR0aDogNHB4O1xyXG4gIGhlaWdodDogMTYwcHg7XHJcbn1cclxuXHJcbi5oYXJkY292ZXJfYmFjayBsaTpsYXN0LWNoaWxkOmFmdGVyIHtcclxuICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlWCg5MGRlZykgcm90YXRlWig5MGRlZykgdHJhbnNsYXRlWig4MHB4KSB0cmFuc2xhdGVYKDJweCkgdHJhbnNsYXRlWSgtNzhweCk7XHJcbiAgLW1vei10cmFuc2Zvcm06IHJvdGF0ZVgoOTBkZWcpIHJvdGF0ZVooOTBkZWcpIHRyYW5zbGF0ZVooODBweCkgdHJhbnNsYXRlWCgycHgpIHRyYW5zbGF0ZVkoLTc4cHgpO1xyXG4gIHRyYW5zZm9ybTogcm90YXRlWCg5MGRlZykgcm90YXRlWig5MGRlZykgdHJhbnNsYXRlWig4MHB4KSB0cmFuc2xhdGVYKDJweCkgdHJhbnNsYXRlWSgtNzhweCk7XHJcbn1cclxuXHJcbi5oYXJkY292ZXJfYmFjayBsaTpsYXN0LWNoaWxkOmJlZm9yZSB7XHJcbiAgYm94LXNoYWRvdzogMTBweCAtMXB4IDgwcHggMjBweCAjNjY2O1xyXG4gIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGVYKDkwZGVnKSByb3RhdGVaKDkwZGVnKSB0cmFuc2xhdGVaKC0xNDBweCkgdHJhbnNsYXRlWCgycHgpIHRyYW5zbGF0ZVkoLTc4cHgpO1xyXG4gIC1tb3otdHJhbnNmb3JtOiByb3RhdGVYKDkwZGVnKSByb3RhdGVaKDkwZGVnKSB0cmFuc2xhdGVaKC0xNDBweCkgdHJhbnNsYXRlWCgycHgpIHRyYW5zbGF0ZVkoLTc4cHgpO1xyXG4gIHRyYW5zZm9ybTogcm90YXRlWCg5MGRlZykgcm90YXRlWig5MGRlZykgdHJhbnNsYXRlWigtMTQwcHgpIHRyYW5zbGF0ZVgoMnB4KSB0cmFuc2xhdGVZKC03OHB4KTtcclxufVxyXG5cclxuLyogQk9PSyBTUElORSAqL1xyXG4uYm9va19zcGluZSB7XHJcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZVkoNjBkZWcpIHRyYW5zbGF0ZVgoLTVweCkgdHJhbnNsYXRlWigtMTJweCk7XHJcbiAgLW1vei10cmFuc2Zvcm06IHJvdGF0ZVkoNjBkZWcpIHRyYW5zbGF0ZVgoLTVweCkgdHJhbnNsYXRlWigtMTJweCk7XHJcbiAgdHJhbnNmb3JtOiByb3RhdGVZKDYwZGVnKSB0cmFuc2xhdGVYKC01cHgpIHRyYW5zbGF0ZVooLTEycHgpO1xyXG4gIHdpZHRoOiAxNnB4O1xyXG4gIHotaW5kZXg6IDA7XHJcbn1cclxuXHJcbi5ib29rX3NwaW5lIGxpOmZpcnN0LWNoaWxkIHtcclxuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWigycHgpO1xyXG4gIC1tb3otdHJhbnNmb3JtOiB0cmFuc2xhdGVaKDJweCk7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVaKDJweCk7XHJcbn1cclxuXHJcbi5ib29rX3NwaW5lIGxpOmxhc3QtY2hpbGQge1xyXG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVaKC0ycHgpO1xyXG4gIC1tb3otdHJhbnNmb3JtOiB0cmFuc2xhdGVaKC0ycHgpO1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWigtMnB4KTtcclxufVxyXG5cclxuLyogdGhpY2tuZXNzIG9mIGJvb2sgc3BpbmUgKi9cclxuLmJvb2tfc3BpbmUgbGk6Zmlyc3QtY2hpbGQ6YWZ0ZXIsXHJcbi5ib29rX3NwaW5lIGxpOmZpcnN0LWNoaWxkOmJlZm9yZSB7XHJcbiAgd2lkdGg6IDRweDtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbn1cclxuXHJcbi5ib29rX3NwaW5lIGxpOmZpcnN0LWNoaWxkOmFmdGVyIHtcclxuICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlWSg5MGRlZykgdHJhbnNsYXRlWigtMnB4KSB0cmFuc2xhdGVYKDJweCk7XHJcbiAgLW1vei10cmFuc2Zvcm06IHJvdGF0ZVkoOTBkZWcpIHRyYW5zbGF0ZVooLTJweCkgdHJhbnNsYXRlWCgycHgpO1xyXG4gIHRyYW5zZm9ybTogcm90YXRlWSg5MGRlZykgdHJhbnNsYXRlWigtMnB4KSB0cmFuc2xhdGVYKDJweCk7XHJcbn1cclxuXHJcbi5ib29rX3NwaW5lIGxpOmZpcnN0LWNoaWxkOmJlZm9yZSB7XHJcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZVkoLTkwZGVnKSB0cmFuc2xhdGVaKC0xMnB4KTtcclxuICAtbW96LXRyYW5zZm9ybTogcm90YXRlWSgtOTBkZWcpIHRyYW5zbGF0ZVooLTEycHgpO1xyXG4gIHRyYW5zZm9ybTogcm90YXRlWSgtOTBkZWcpIHRyYW5zbGF0ZVooLTEycHgpO1xyXG59XHJcblxyXG4uYm9va19zcGluZSBsaTpsYXN0LWNoaWxkOmFmdGVyLFxyXG4uYm9va19zcGluZSBsaTpsYXN0LWNoaWxkOmJlZm9yZSB7XHJcbiAgd2lkdGg6IDRweDtcclxuICBoZWlnaHQ6IDE2cHg7XHJcbn1cclxuXHJcbi5ib29rX3NwaW5lIGxpOmxhc3QtY2hpbGQ6YWZ0ZXIge1xyXG4gIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGVYKDkwZGVnKSByb3RhdGVaKDkwZGVnKSB0cmFuc2xhdGVaKDhweCkgdHJhbnNsYXRlWCgycHgpIHRyYW5zbGF0ZVkoLTZweCk7XHJcbiAgLW1vei10cmFuc2Zvcm06IHJvdGF0ZVgoOTBkZWcpIHJvdGF0ZVooOTBkZWcpIHRyYW5zbGF0ZVooOHB4KSB0cmFuc2xhdGVYKDJweCkgdHJhbnNsYXRlWSgtNnB4KTtcclxuICB0cmFuc2Zvcm06IHJvdGF0ZVgoOTBkZWcpIHJvdGF0ZVooOTBkZWcpIHRyYW5zbGF0ZVooOHB4KSB0cmFuc2xhdGVYKDJweCkgdHJhbnNsYXRlWSgtNnB4KTtcclxufVxyXG5cclxuLmJvb2tfc3BpbmUgbGk6bGFzdC1jaGlsZDpiZWZvcmUge1xyXG4gIGJveC1zaGFkb3c6IDVweCAtMXB4IDEwMHB4IDQwcHggcmdiYSgwLCAwLCAwLCAwLjIpO1xyXG4gIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGVYKDkwZGVnKSByb3RhdGVaKDkwZGVnKSB0cmFuc2xhdGVaKC0yMTBweCkgdHJhbnNsYXRlWCgycHgpIHRyYW5zbGF0ZVkoLTZweCk7XHJcbiAgLW1vei10cmFuc2Zvcm06IHJvdGF0ZVgoOTBkZWcpIHJvdGF0ZVooOTBkZWcpIHRyYW5zbGF0ZVooLTIxMHB4KSB0cmFuc2xhdGVYKDJweCkgdHJhbnNsYXRlWSgtNnB4KTtcclxuICB0cmFuc2Zvcm06IHJvdGF0ZVgoOTBkZWcpIHJvdGF0ZVooOTBkZWcpIHRyYW5zbGF0ZVooLTIxMHB4KSB0cmFuc2xhdGVYKDJweCkgdHJhbnNsYXRlWSgtNnB4KTtcclxufVxyXG5cclxuLnBhZ2UsXHJcbi5wYWdlID4gbGkge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDA7XHJcbiAgbGVmdDogMDtcclxuICAtd2Via2l0LXRyYW5zZm9ybS1zdHlsZTogcHJlc2VydmUtM2Q7XHJcbiAgLW1vei10cmFuc2Zvcm0tc3R5bGU6IHByZXNlcnZlLTNkO1xyXG4gIHRyYW5zZm9ybS1zdHlsZTogcHJlc2VydmUtM2Q7XHJcbn1cclxuXHJcbi5wYWdlIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDk4JTtcclxuICB0b3A6IDElO1xyXG4gIGxlZnQ6IDMlO1xyXG4gIHotaW5kZXg6IDEwO1xyXG59XHJcblxyXG4ucGFnZSA+IGxpIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgLXdlYmtpdC10cmFuc2Zvcm0tb3JpZ2luOiBsZWZ0IGNlbnRlcjtcclxuICAtbW96LXRyYW5zZm9ybS1vcmlnaW46IGxlZnQgY2VudGVyO1xyXG4gIHRyYW5zZm9ybS1vcmlnaW46IGxlZnQgY2VudGVyO1xyXG4gIC13ZWJraXQtdHJhbnNpdGlvbi1wcm9wZXJ0eTogdHJhbnNmb3JtO1xyXG4gIC1tb3otdHJhbnNpdGlvbi1wcm9wZXJ0eTogdHJhbnNmb3JtO1xyXG4gIHRyYW5zaXRpb24tcHJvcGVydHk6IHRyYW5zZm9ybTtcclxuICAtd2Via2l0LXRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlO1xyXG4gIC1tb3otdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2U7XHJcbiAgdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2U7XHJcbn1cclxuXHJcbi5wYWdlID4gbGk6bnRoLWNoaWxkKDEpIHtcclxuICAtd2Via2l0LXRyYW5zaXRpb24tZHVyYXRpb246IDAuNnM7XHJcbiAgLW1vei10cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjZzO1xyXG4gIHRyYW5zaXRpb24tZHVyYXRpb246IDAuNnM7XHJcbn1cclxuXHJcbi5wYWdlID4gbGk6bnRoLWNoaWxkKDIpIHtcclxuICAtd2Via2l0LXRyYW5zaXRpb24tZHVyYXRpb246IDAuNnM7XHJcbiAgLW1vei10cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjZzO1xyXG4gIHRyYW5zaXRpb24tZHVyYXRpb246IDAuNnM7XHJcbn1cclxuXHJcbi5wYWdlID4gbGk6bnRoLWNoaWxkKDMpIHtcclxuICAtd2Via2l0LXRyYW5zaXRpb24tZHVyYXRpb246IDAuNHM7XHJcbiAgLW1vei10cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjRzO1xyXG4gIHRyYW5zaXRpb24tZHVyYXRpb246IDAuNHM7XHJcbn1cclxuXHJcbi5wYWdlID4gbGk6bnRoLWNoaWxkKDQpIHtcclxuICAtd2Via2l0LXRyYW5zaXRpb24tZHVyYXRpb246IDAuNXM7XHJcbiAgLW1vei10cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjVzO1xyXG4gIHRyYW5zaXRpb24tZHVyYXRpb246IDAuNXM7XHJcbn1cclxuXHJcbi5wYWdlID4gbGk6bnRoLWNoaWxkKDUpIHtcclxuICAtd2Via2l0LXRyYW5zaXRpb24tZHVyYXRpb246IDAuNnM7XHJcbiAgLW1vei10cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjZzO1xyXG4gIHRyYW5zaXRpb24tZHVyYXRpb246IDAuNnM7XHJcbn1cclxuXHJcbi8qXHJcblx0NS4gZXZlbnRzXHJcbiovXHJcblxyXG4uYm9vazpob3ZlciA+IC5oYXJkY292ZXJfZnJvbnQge1xyXG4gIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGVZKC0xNDVkZWcpIHRyYW5zbGF0ZVooMCk7XHJcbiAgLW1vei10cmFuc2Zvcm06IHJvdGF0ZVkoLTE0NWRlZykgdHJhbnNsYXRlWigwKTtcclxuICB0cmFuc2Zvcm06IHJvdGF0ZVkoLTE0NWRlZykgdHJhbnNsYXRlWigwKTtcclxuICB6LWluZGV4OiAwO1xyXG59XHJcblxyXG4uYm9vazpob3ZlciA+IC5wYWdlIGxpOm50aC1jaGlsZCgxKSB7XHJcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZVkoLTMwZGVnKTtcclxuICAtbW96LXRyYW5zZm9ybTogcm90YXRlWSgtMzBkZWcpO1xyXG4gIHRyYW5zZm9ybTogcm90YXRlWSgtMzBkZWcpO1xyXG4gIC13ZWJraXQtdHJhbnNpdGlvbi1kdXJhdGlvbjogMS41cztcclxuICAtbW96LXRyYW5zaXRpb24tZHVyYXRpb246IDEuNXM7XHJcbiAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMS41cztcclxufVxyXG5cclxuLmJvb2s6aG92ZXIgPiAucGFnZSBsaTpudGgtY2hpbGQoMikge1xyXG4gIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGVZKC0zNWRlZyk7XHJcbiAgLW1vei10cmFuc2Zvcm06IHJvdGF0ZVkoLTM1ZGVnKTtcclxuICB0cmFuc2Zvcm06IHJvdGF0ZVkoLTM1ZGVnKTtcclxuICAtd2Via2l0LXRyYW5zaXRpb24tZHVyYXRpb246IDEuOHM7XHJcbiAgLW1vei10cmFuc2l0aW9uLWR1cmF0aW9uOiAxLjhzO1xyXG4gIHRyYW5zaXRpb24tZHVyYXRpb246IDEuOHM7XHJcbn1cclxuXHJcbi5ib29rOmhvdmVyID4gLnBhZ2UgbGk6bnRoLWNoaWxkKDMpIHtcclxuICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlWSgtMTE4ZGVnKTtcclxuICAtbW96LXRyYW5zZm9ybTogcm90YXRlWSgtMTE4ZGVnKTtcclxuICB0cmFuc2Zvcm06IHJvdGF0ZVkoLTExOGRlZyk7XHJcbiAgLXdlYmtpdC10cmFuc2l0aW9uLWR1cmF0aW9uOiAxLjZzO1xyXG4gIC1tb3otdHJhbnNpdGlvbi1kdXJhdGlvbjogMS42cztcclxuICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAxLjZzO1xyXG59XHJcblxyXG4uYm9vazpob3ZlciA+IC5wYWdlIGxpOm50aC1jaGlsZCg0KSB7XHJcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZVkoLTEzMGRlZyk7XHJcbiAgLW1vei10cmFuc2Zvcm06IHJvdGF0ZVkoLTEzMGRlZyk7XHJcbiAgdHJhbnNmb3JtOiByb3RhdGVZKC0xMzBkZWcpO1xyXG4gIC13ZWJraXQtdHJhbnNpdGlvbi1kdXJhdGlvbjogMS40cztcclxuICAtbW96LXRyYW5zaXRpb24tZHVyYXRpb246IDEuNHM7XHJcbiAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMS40cztcclxufVxyXG5cclxuLmJvb2s6aG92ZXIgPiAucGFnZSBsaTpudGgtY2hpbGQoNSkge1xyXG4gIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGVZKC0xNDBkZWcpO1xyXG4gIC1tb3otdHJhbnNmb3JtOiByb3RhdGVZKC0xNDBkZWcpO1xyXG4gIHRyYW5zZm9ybTogcm90YXRlWSgtMTQwZGVnKTtcclxuICAtd2Via2l0LXRyYW5zaXRpb24tZHVyYXRpb246IDEuMnM7XHJcbiAgLW1vei10cmFuc2l0aW9uLWR1cmF0aW9uOiAxLjJzO1xyXG4gIHRyYW5zaXRpb24tZHVyYXRpb246IDEuMnM7XHJcbn1cclxuXHJcbi8qXHJcblx0Ni4gQm9udXNcclxuKi9cclxuXHJcbi8qIGNvdmVyIENTUyAqL1xyXG5cclxuLmNvdmVyRGVzaWduIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAwO1xyXG4gIGxlZnQ6IDA7XHJcbiAgYm90dG9tOiAwO1xyXG4gIHJpZ2h0OiAwO1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgLXdlYmtpdC1iYWNrZmFjZS12aXNpYmlsaXR5OiBoaWRkZW47XHJcbiAgLW1vei1iYWNrZmFjZS12aXNpYmlsaXR5OiBoaWRkZW47XHJcbiAgYmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuO1xyXG59XHJcblxyXG4uY292ZXJEZXNpZ246OmFmdGVyIHtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudCgtMTM1ZGVnLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNDUpIDAlLCB0cmFuc3BhcmVudCAxMDAlKTtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiAtbW96LWxpbmVhci1ncmFkaWVudCgtMTM1ZGVnLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNDUpIDAlLCB0cmFuc3BhcmVudCAxMDAlKTtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoLTEzNWRlZywgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjQ1KSAwJSwgdHJhbnNwYXJlbnQgMTAwJSk7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogMDtcclxuICBsZWZ0OiAwO1xyXG4gIGJvdHRvbTogMDtcclxuICByaWdodDogMDtcclxufVxyXG5cclxuLmNvdmVyRGVzaWduIGgxIHtcclxuICBjb2xvcjogI2ZmZjtcclxuICBmb250LXNpemU6IDIuMmVtO1xyXG4gIGxldHRlci1zcGFjaW5nOiAwLjA1ZW07XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIG1hcmdpbjogNTQlIDAgMCAwO1xyXG4gIHRleHQtc2hhZG93OiAtMXB4IC0xcHggMCByZ2JhKDAsIDAsIDAsIDAuMSk7XHJcbn1cclxuXHJcbi5jb3ZlckRlc2lnbiBwIHtcclxuICBjb2xvcjogI2Y4ZjhmODtcclxuICBmb250LXNpemU6IDFlbTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgdGV4dC1zaGFkb3c6IC0xcHggLTFweCAwIHJnYmEoMCwgMCwgMCwgMC4xKTtcclxufVxyXG5cclxuLnllbGxvdyB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YxYzQwZjtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudCh0b3AsICNmMWM0MGYgNTglLCAjZTdiYTA3IDAlKTtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiAtbW96LWxpbmVhci1ncmFkaWVudCh0b3AsICNmMWM0MGYgNTglLCAjZTdiYTA3IDAlKTtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG9wLCAjZjFjNDBmIDU4JSwgI2U3YmEwNyAwJSk7XHJcbn1cclxuXHJcbi5ibHVlIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzQ5OGRiO1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KHRvcCwgIzM0OThkYiA1OCUsICMyYTkwZDQgMCUpO1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IC1tb3otbGluZWFyLWdyYWRpZW50KHRvcCwgIzM0OThkYiA1OCUsICMyYTkwZDQgMCUpO1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0b3AsICMzNDk4ZGIgNTglLCAjMmE5MGQ0IDAlKTtcclxufVxyXG5cclxuLmdyZXkge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmOGU5ZDE7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQodG9wLCAjZjhlOWQxIDU4JSwgI2U3ZDViNyAwJSk7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogLW1vei1saW5lYXItZ3JhZGllbnQodG9wLCAjZjhlOWQxIDU4JSwgI2U3ZDViNyAwJSk7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvcCwgI2Y4ZTlkMSA1OCUsICNlN2Q1YjcgMCUpO1xyXG59XHJcblxyXG4vKiBNZWRpYSBRdWVyaWVzICovXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDM3LjgxMjVlbSkge1xyXG4gIC5hbGlnbiA+IGxpIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgbWluLWhlaWdodDogNDQwcHg7XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgbWFyZ2luOiAwIDAgMzBweCAwO1xyXG4gIH1cclxuXHJcbiAgLmJvb2sge1xyXG4gICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgfVxyXG59XHJcblxyXG4ubGlzdCB7XHJcbiAgbWF4LXdpZHRoOiA1NTBweDtcclxuICBtYXJnaW4tbGVmdDogMzAlO1xyXG59XHJcblxyXG4iLCIqIHtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7IH1cblxuLmV4YW1wbGUtcmFkaW8tZ3JvdXAge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBtYXJnaW46IDE1cHggMDsgfVxuXG4uZXhhbXBsZS1yYWRpby1idXR0b24ge1xuICBtYXJnaW46IDVweDsgfVxuXG51bCB7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbiAgbGlzdC1zdHlsZTogbm9uZTsgfVxuXG5hIHtcbiAgY29sb3I6ICMyYzNlNTA7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTsgfVxuXG4uYnRuIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBib3JkZXI6IDJweCBzb2xpZCAjMmMzZTUwO1xuICBtYXJnaW4tdG9wOiAxMDBweDtcbiAgZm9udC1zaXplOiAwLjllbTtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgcGFkZGluZzogMC4xZW0gMC40ZW07XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBjb2xvciAwLjNzLCBib3JkZXItY29sb3IgMC4zcztcbiAgLW1vei10cmFuc2l0aW9uOiBjb2xvciAwLjNzLCBib3JkZXItY29sb3IgMC4zcztcbiAgdHJhbnNpdGlvbjogY29sb3IgMC4zcywgYm9yZGVyLWNvbG9yIDAuM3M7IH1cblxuLnRpdGxlIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBtYXgtd2lkdGg6IDgwJTtcbiAgbWFyZ2luLXRvcDogMTJweDtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgZm9udC1zaXplOiAxZW07XG4gIHdvcmQtd3JhcDogYnJlYWstd29yZDtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAtd2Via2l0LXRyYW5zaXRpb246IGNvbG9yIDAuM3MsIGJvcmRlci1jb2xvciAwLjNzO1xuICAtbW96LXRyYW5zaXRpb246IGNvbG9yIDAuM3MsIGJvcmRlci1jb2xvciAwLjNzO1xuICB0cmFuc2l0aW9uOiBjb2xvciAwLjNzLCBib3JkZXItY29sb3IgMC4zczsgfVxuXG4uYnRuOmhvdmVyIHtcbiAgYm9yZGVyLWNvbG9yOiAjMTZhMDg1O1xuICBjb2xvcjogIzE2YTA4NTsgfVxuXG4vKiBiYXNpYyBncmlkLCBvbmx5IGZvciB0aGlzIGRlbW8gKi9cbi5hbGlnbiB7XG4gIGNsZWFyOiBib3RoO1xuICBtYXgtd2lkdGg6IDgwMHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7IH1cblxuLmFsaWduID4gbGkge1xuICB3aWR0aDogMTUlO1xuICBtaW4taGVpZ2h0OiAwcHg7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgbWFyZ2luOiAzMHB4IDIwcHggMzBweCAzMHB4O1xuICBwYWRkaW5nOiAwIDAgMCA2MHB4O1xuICB2ZXJ0aWNhbC1hbGlnbjogdG9wOyB9XG5cbi8qXHJcblx0MS4gY29udGFpbmVyXHJcbiovXG4uYm9vayB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgd2lkdGg6IDE2MHB4O1xuICBoZWlnaHQ6IDIyMHB4O1xuICAtd2Via2l0LXBlcnNwZWN0aXZlOiAxMDAwcHg7XG4gIC1tb3otcGVyc3BlY3RpdmU6IDEwMDBweDtcbiAgcGVyc3BlY3RpdmU6IDEwMDBweDtcbiAgLXdlYmtpdC10cmFuc2Zvcm0tc3R5bGU6IHByZXNlcnZlLTNkO1xuICAtbW96LXRyYW5zZm9ybS1zdHlsZTogcHJlc2VydmUtM2Q7XG4gIHRyYW5zZm9ybS1zdHlsZTogcHJlc2VydmUtM2Q7IH1cblxuLypcclxuXHQyLiBiYWNrZ3JvdW5kICYgY29sb3JcclxuKi9cbi8qIEhBUkRDT1ZFUiBGUk9OVCAqL1xuLmhhcmRjb3Zlcl9mcm9udCBsaTpmaXJzdC1jaGlsZCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlZWU7XG4gIC13ZWJraXQtYmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuO1xuICAtbW96LWJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjtcbiAgYmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuOyB9XG5cbi8qIHJldmVyc2UgKi9cbi5oYXJkY292ZXJfZnJvbnQgbGk6bGFzdC1jaGlsZCB7XG4gIGJhY2tncm91bmQ6ICNmZmZiZWM7IH1cblxuLyogSEFSRENPVkVSIEJBQ0sgKi9cbi5oYXJkY292ZXJfYmFjayBsaTpmaXJzdC1jaGlsZCB7XG4gIGJhY2tncm91bmQ6ICNmZmZiZWM7IH1cblxuLyogcmV2ZXJzZSAqL1xuLmhhcmRjb3Zlcl9iYWNrIGxpOmxhc3QtY2hpbGQge1xuICBiYWNrZ3JvdW5kOiAjZmZmYmVjOyB9XG5cbi5ib29rX3NwaW5lIGxpOmZpcnN0LWNoaWxkIHtcbiAgYmFja2dyb3VuZDogI2VlZTsgfVxuXG4uYm9va19zcGluZSBsaTpsYXN0LWNoaWxkIHtcbiAgYmFja2dyb3VuZDogIzMzMzsgfVxuXG4vKiB0aGlja25lc3Mgb2YgY292ZXIgKi9cbi5oYXJkY292ZXJfZnJvbnQgbGk6Zmlyc3QtY2hpbGQ6YWZ0ZXIsXG4uaGFyZGNvdmVyX2Zyb250IGxpOmZpcnN0LWNoaWxkOmJlZm9yZSxcbi5oYXJkY292ZXJfZnJvbnQgbGk6bGFzdC1jaGlsZDphZnRlcixcbi5oYXJkY292ZXJfZnJvbnQgbGk6bGFzdC1jaGlsZDpiZWZvcmUsXG4uaGFyZGNvdmVyX2JhY2sgbGk6Zmlyc3QtY2hpbGQ6YWZ0ZXIsXG4uaGFyZGNvdmVyX2JhY2sgbGk6Zmlyc3QtY2hpbGQ6YmVmb3JlLFxuLmhhcmRjb3Zlcl9iYWNrIGxpOmxhc3QtY2hpbGQ6YWZ0ZXIsXG4uaGFyZGNvdmVyX2JhY2sgbGk6bGFzdC1jaGlsZDpiZWZvcmUsXG4uYm9va19zcGluZSBsaTpmaXJzdC1jaGlsZDphZnRlcixcbi5ib29rX3NwaW5lIGxpOmZpcnN0LWNoaWxkOmJlZm9yZSxcbi5ib29rX3NwaW5lIGxpOmxhc3QtY2hpbGQ6YWZ0ZXIsXG4uYm9va19zcGluZSBsaTpsYXN0LWNoaWxkOmJlZm9yZSB7XG4gIGJhY2tncm91bmQ6ICM5OTk7IH1cblxuLyogcGFnZSAqL1xuLnBhZ2UgPiBsaSB7XG4gIGJhY2tncm91bmQ6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KGxlZnQsICNlMWRkZDggMCUsICNmZmZiZjYgMTAwJSk7XG4gIGJhY2tncm91bmQ6IC1tb3otbGluZWFyLWdyYWRpZW50KGxlZnQsICNlMWRkZDggMCUsICNmZmZiZjYgMTAwJSk7XG4gIGJhY2tncm91bmQ6IC1tcy1saW5lYXItZ3JhZGllbnQobGVmdCwgI2UxZGRkOCAwJSwgI2ZmZmJmNiAxMDAlKTtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KGxlZnQsICNlMWRkZDggMCUsICNmZmZiZjYgMTAwJSk7XG4gIGJveC1zaGFkb3c6IGluc2V0IDBweCAtMXB4IDJweCByZ2JhKDUwLCA1MCwgNTAsIDAuMSksIGluc2V0IC0xcHggMHB4IDFweCByZ2JhKDE1MCwgMTUwLCAxNTAsIDAuMik7XG4gIGJvcmRlci1yYWRpdXM6IDBweCA1cHggNXB4IDBweDsgfVxuXG4vKlxyXG5cdDMuIG9wZW5pbmcgY292ZXIsIGJhY2sgY292ZXIgYW5kIHBhZ2VzXHJcbiovXG4uaGFyZGNvdmVyX2Zyb250IHtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZVkoLTM0ZGVnKSB0cmFuc2xhdGVaKDhweCk7XG4gIC1tb3otdHJhbnNmb3JtOiByb3RhdGVZKC0zNGRlZykgdHJhbnNsYXRlWig4cHgpO1xuICB0cmFuc2Zvcm06IHJvdGF0ZVkoLTM0ZGVnKSB0cmFuc2xhdGVaKDhweCk7XG4gIHotaW5kZXg6IDEwMDsgfVxuXG4uaGFyZGNvdmVyX2JhY2sge1xuICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlWSgtMTVkZWcpIHRyYW5zbGF0ZVooLThweCk7XG4gIC1tb3otdHJhbnNmb3JtOiByb3RhdGVZKC0xNWRlZykgdHJhbnNsYXRlWigtOHB4KTtcbiAgdHJhbnNmb3JtOiByb3RhdGVZKC0xNWRlZykgdHJhbnNsYXRlWigtOHB4KTsgfVxuXG4ucGFnZSBsaTpudGgtY2hpbGQoMSkge1xuICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlWSgtMjhkZWcpO1xuICAtbW96LXRyYW5zZm9ybTogcm90YXRlWSgtMjhkZWcpO1xuICB0cmFuc2Zvcm06IHJvdGF0ZVkoLTI4ZGVnKTsgfVxuXG4ucGFnZSBsaTpudGgtY2hpbGQoMikge1xuICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlWSgtMzBkZWcpO1xuICAtbW96LXRyYW5zZm9ybTogcm90YXRlWSgtMzBkZWcpO1xuICB0cmFuc2Zvcm06IHJvdGF0ZVkoLTMwZGVnKTsgfVxuXG4ucGFnZSBsaTpudGgtY2hpbGQoMykge1xuICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlWSgtMzJkZWcpO1xuICAtbW96LXRyYW5zZm9ybTogcm90YXRlWSgtMzJkZWcpO1xuICB0cmFuc2Zvcm06IHJvdGF0ZVkoLTMyZGVnKTsgfVxuXG4ucGFnZSBsaTpudGgtY2hpbGQoNCkge1xuICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlWSgtMzRkZWcpO1xuICAtbW96LXRyYW5zZm9ybTogcm90YXRlWSgtMzRkZWcpO1xuICB0cmFuc2Zvcm06IHJvdGF0ZVkoLTM0ZGVnKTsgfVxuXG4ucGFnZSBsaTpudGgtY2hpbGQoNSkge1xuICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlWSgtMzZkZWcpO1xuICAtbW96LXRyYW5zZm9ybTogcm90YXRlWSgtMzZkZWcpO1xuICB0cmFuc2Zvcm06IHJvdGF0ZVkoLTM2ZGVnKTsgfVxuXG4vKlxyXG5cdDQuIHBvc2l0aW9uLCB0cmFuc2Zvcm0gJiB0cmFuc2l0aW9uXHJcbiovXG4uaGFyZGNvdmVyX2Zyb250LFxuLmhhcmRjb3Zlcl9iYWNrLFxuLmJvb2tfc3BpbmUsXG4uaGFyZGNvdmVyX2Zyb250IGxpLFxuLmhhcmRjb3Zlcl9iYWNrIGxpLFxuLmJvb2tfc3BpbmUgbGkge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgLXdlYmtpdC10cmFuc2Zvcm0tc3R5bGU6IHByZXNlcnZlLTNkO1xuICAtbW96LXRyYW5zZm9ybS1zdHlsZTogcHJlc2VydmUtM2Q7XG4gIHRyYW5zZm9ybS1zdHlsZTogcHJlc2VydmUtM2Q7IH1cblxuLmhhcmRjb3Zlcl9mcm9udCxcbi5oYXJkY292ZXJfYmFjayB7XG4gIC13ZWJraXQtdHJhbnNmb3JtLW9yaWdpbjogMCUgMTAwJTtcbiAgLW1vei10cmFuc2Zvcm0tb3JpZ2luOiAwJSAxMDAlO1xuICB0cmFuc2Zvcm0tb3JpZ2luOiAwJSAxMDAlOyB9XG5cbi5oYXJkY292ZXJfZnJvbnQge1xuICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjhzIGVhc2UsIHotaW5kZXggMC42cztcbiAgLW1vei10cmFuc2l0aW9uOiBhbGwgMC44cyBlYXNlLCB6LWluZGV4IDAuNnM7XG4gIHRyYW5zaXRpb246IGFsbCAwLjhzIGVhc2UsIHotaW5kZXggMC42czsgfVxuXG4vKiBIQVJEQ09WRVIgZnJvbnQgKi9cbi5oYXJkY292ZXJfZnJvbnQgbGk6Zmlyc3QtY2hpbGQge1xuICBjdXJzb3I6IGRlZmF1bHQ7XG4gIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XG4gIC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7XG4gIHVzZXItc2VsZWN0OiBub25lO1xuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWigycHgpO1xuICAtbW96LXRyYW5zZm9ybTogdHJhbnNsYXRlWigycHgpO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVooMnB4KTsgfVxuXG4uaGFyZGNvdmVyX2Zyb250IGxpOmxhc3QtY2hpbGQge1xuICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlWSgxODBkZWcpIHRyYW5zbGF0ZVooMnB4KTtcbiAgLW1vei10cmFuc2Zvcm06IHJvdGF0ZVkoMTgwZGVnKSB0cmFuc2xhdGVaKDJweCk7XG4gIHRyYW5zZm9ybTogcm90YXRlWSgxODBkZWcpIHRyYW5zbGF0ZVooMnB4KTsgfVxuXG4vKiBIQVJEQ09WRVIgYmFjayAqL1xuLmhhcmRjb3Zlcl9iYWNrIGxpOmZpcnN0LWNoaWxkIHtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVooMnB4KTtcbiAgLW1vei10cmFuc2Zvcm06IHRyYW5zbGF0ZVooMnB4KTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVaKDJweCk7IH1cblxuLmhhcmRjb3Zlcl9iYWNrIGxpOmxhc3QtY2hpbGQge1xuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWigtMnB4KTtcbiAgLW1vei10cmFuc2Zvcm06IHRyYW5zbGF0ZVooLTJweCk7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWigtMnB4KTsgfVxuXG4vKiB0aGlja25lc3Mgb2YgY292ZXIgKi9cbi5oYXJkY292ZXJfZnJvbnQgbGk6Zmlyc3QtY2hpbGQ6YWZ0ZXIsXG4uaGFyZGNvdmVyX2Zyb250IGxpOmZpcnN0LWNoaWxkOmJlZm9yZSxcbi5oYXJkY292ZXJfZnJvbnQgbGk6bGFzdC1jaGlsZDphZnRlcixcbi5oYXJkY292ZXJfZnJvbnQgbGk6bGFzdC1jaGlsZDpiZWZvcmUsXG4uaGFyZGNvdmVyX2JhY2sgbGk6Zmlyc3QtY2hpbGQ6YWZ0ZXIsXG4uaGFyZGNvdmVyX2JhY2sgbGk6Zmlyc3QtY2hpbGQ6YmVmb3JlLFxuLmhhcmRjb3Zlcl9iYWNrIGxpOmxhc3QtY2hpbGQ6YWZ0ZXIsXG4uaGFyZGNvdmVyX2JhY2sgbGk6bGFzdC1jaGlsZDpiZWZvcmUsXG4uYm9va19zcGluZSBsaTpmaXJzdC1jaGlsZDphZnRlcixcbi5ib29rX3NwaW5lIGxpOmZpcnN0LWNoaWxkOmJlZm9yZSxcbi5ib29rX3NwaW5lIGxpOmxhc3QtY2hpbGQ6YWZ0ZXIsXG4uYm9va19zcGluZSBsaTpsYXN0LWNoaWxkOmJlZm9yZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwOyB9XG5cbi8qIEhBUkRDT1ZFUiBmcm9udCAqL1xuLmhhcmRjb3Zlcl9mcm9udCBsaTpmaXJzdC1jaGlsZDphZnRlcixcbi5oYXJkY292ZXJfZnJvbnQgbGk6Zmlyc3QtY2hpbGQ6YmVmb3JlIHtcbiAgd2lkdGg6IDRweDtcbiAgaGVpZ2h0OiAxMDAlOyB9XG5cbi5oYXJkY292ZXJfZnJvbnQgbGk6Zmlyc3QtY2hpbGQ6YWZ0ZXIge1xuICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlWSg5MGRlZykgdHJhbnNsYXRlWigtMnB4KSB0cmFuc2xhdGVYKDJweCk7XG4gIC1tb3otdHJhbnNmb3JtOiByb3RhdGVZKDkwZGVnKSB0cmFuc2xhdGVaKC0ycHgpIHRyYW5zbGF0ZVgoMnB4KTtcbiAgdHJhbnNmb3JtOiByb3RhdGVZKDkwZGVnKSB0cmFuc2xhdGVaKC0ycHgpIHRyYW5zbGF0ZVgoMnB4KTsgfVxuXG4uaGFyZGNvdmVyX2Zyb250IGxpOmZpcnN0LWNoaWxkOmJlZm9yZSB7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGVZKDkwZGVnKSB0cmFuc2xhdGVaKDE1OHB4KSB0cmFuc2xhdGVYKDJweCk7XG4gIC1tb3otdHJhbnNmb3JtOiByb3RhdGVZKDkwZGVnKSB0cmFuc2xhdGVaKDE1OHB4KSB0cmFuc2xhdGVYKDJweCk7XG4gIHRyYW5zZm9ybTogcm90YXRlWSg5MGRlZykgdHJhbnNsYXRlWigxNThweCkgdHJhbnNsYXRlWCgycHgpOyB9XG5cbi5oYXJkY292ZXJfZnJvbnQgbGk6bGFzdC1jaGlsZDphZnRlcixcbi5oYXJkY292ZXJfZnJvbnQgbGk6bGFzdC1jaGlsZDpiZWZvcmUge1xuICB3aWR0aDogNHB4O1xuICBoZWlnaHQ6IDE2MHB4OyB9XG5cbi5oYXJkY292ZXJfZnJvbnQgbGk6bGFzdC1jaGlsZDphZnRlciB7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGVYKDkwZGVnKSByb3RhdGVaKDkwZGVnKSB0cmFuc2xhdGVaKDgwcHgpIHRyYW5zbGF0ZVgoLTJweCkgdHJhbnNsYXRlWSgtNzhweCk7XG4gIC1tb3otdHJhbnNmb3JtOiByb3RhdGVYKDkwZGVnKSByb3RhdGVaKDkwZGVnKSB0cmFuc2xhdGVaKDgwcHgpIHRyYW5zbGF0ZVgoLTJweCkgdHJhbnNsYXRlWSgtNzhweCk7XG4gIHRyYW5zZm9ybTogcm90YXRlWCg5MGRlZykgcm90YXRlWig5MGRlZykgdHJhbnNsYXRlWig4MHB4KSB0cmFuc2xhdGVYKC0ycHgpIHRyYW5zbGF0ZVkoLTc4cHgpOyB9XG5cbi5oYXJkY292ZXJfZnJvbnQgbGk6bGFzdC1jaGlsZDpiZWZvcmUge1xuICBib3gtc2hhZG93OiAwcHggMHB4IDMwcHggNXB4ICMzMzM7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGVYKDkwZGVnKSByb3RhdGVaKDkwZGVnKSB0cmFuc2xhdGVaKC0xNDBweCkgdHJhbnNsYXRlWCgtMnB4KSB0cmFuc2xhdGVZKC03OHB4KTtcbiAgLW1vei10cmFuc2Zvcm06IHJvdGF0ZVgoOTBkZWcpIHJvdGF0ZVooOTBkZWcpIHRyYW5zbGF0ZVooLTE0MHB4KSB0cmFuc2xhdGVYKC0ycHgpIHRyYW5zbGF0ZVkoLTc4cHgpO1xuICB0cmFuc2Zvcm06IHJvdGF0ZVgoOTBkZWcpIHJvdGF0ZVooOTBkZWcpIHRyYW5zbGF0ZVooLTE0MHB4KSB0cmFuc2xhdGVYKC0ycHgpIHRyYW5zbGF0ZVkoLTc4cHgpOyB9XG5cbi8qIHRoaWNrbmVzcyBvZiBjb3ZlciAqL1xuLmhhcmRjb3Zlcl9iYWNrIGxpOmZpcnN0LWNoaWxkOmFmdGVyLFxuLmhhcmRjb3Zlcl9iYWNrIGxpOmZpcnN0LWNoaWxkOmJlZm9yZSB7XG4gIHdpZHRoOiA0cHg7XG4gIGhlaWdodDogMTAwJTsgfVxuXG4uaGFyZGNvdmVyX2JhY2sgbGk6Zmlyc3QtY2hpbGQ6YWZ0ZXIge1xuICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlWSg5MGRlZykgdHJhbnNsYXRlWigtMnB4KSB0cmFuc2xhdGVYKDJweCk7XG4gIC1tb3otdHJhbnNmb3JtOiByb3RhdGVZKDkwZGVnKSB0cmFuc2xhdGVaKC0ycHgpIHRyYW5zbGF0ZVgoMnB4KTtcbiAgdHJhbnNmb3JtOiByb3RhdGVZKDkwZGVnKSB0cmFuc2xhdGVaKC0ycHgpIHRyYW5zbGF0ZVgoMnB4KTsgfVxuXG4uaGFyZGNvdmVyX2JhY2sgbGk6Zmlyc3QtY2hpbGQ6YmVmb3JlIHtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZVkoOTBkZWcpIHRyYW5zbGF0ZVooMTU4cHgpIHRyYW5zbGF0ZVgoMnB4KTtcbiAgLW1vei10cmFuc2Zvcm06IHJvdGF0ZVkoOTBkZWcpIHRyYW5zbGF0ZVooMTU4cHgpIHRyYW5zbGF0ZVgoMnB4KTtcbiAgdHJhbnNmb3JtOiByb3RhdGVZKDkwZGVnKSB0cmFuc2xhdGVaKDE1OHB4KSB0cmFuc2xhdGVYKDJweCk7IH1cblxuLmhhcmRjb3Zlcl9iYWNrIGxpOmxhc3QtY2hpbGQ6YWZ0ZXIsXG4uaGFyZGNvdmVyX2JhY2sgbGk6bGFzdC1jaGlsZDpiZWZvcmUge1xuICB3aWR0aDogNHB4O1xuICBoZWlnaHQ6IDE2MHB4OyB9XG5cbi5oYXJkY292ZXJfYmFjayBsaTpsYXN0LWNoaWxkOmFmdGVyIHtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZVgoOTBkZWcpIHJvdGF0ZVooOTBkZWcpIHRyYW5zbGF0ZVooODBweCkgdHJhbnNsYXRlWCgycHgpIHRyYW5zbGF0ZVkoLTc4cHgpO1xuICAtbW96LXRyYW5zZm9ybTogcm90YXRlWCg5MGRlZykgcm90YXRlWig5MGRlZykgdHJhbnNsYXRlWig4MHB4KSB0cmFuc2xhdGVYKDJweCkgdHJhbnNsYXRlWSgtNzhweCk7XG4gIHRyYW5zZm9ybTogcm90YXRlWCg5MGRlZykgcm90YXRlWig5MGRlZykgdHJhbnNsYXRlWig4MHB4KSB0cmFuc2xhdGVYKDJweCkgdHJhbnNsYXRlWSgtNzhweCk7IH1cblxuLmhhcmRjb3Zlcl9iYWNrIGxpOmxhc3QtY2hpbGQ6YmVmb3JlIHtcbiAgYm94LXNoYWRvdzogMTBweCAtMXB4IDgwcHggMjBweCAjNjY2O1xuICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlWCg5MGRlZykgcm90YXRlWig5MGRlZykgdHJhbnNsYXRlWigtMTQwcHgpIHRyYW5zbGF0ZVgoMnB4KSB0cmFuc2xhdGVZKC03OHB4KTtcbiAgLW1vei10cmFuc2Zvcm06IHJvdGF0ZVgoOTBkZWcpIHJvdGF0ZVooOTBkZWcpIHRyYW5zbGF0ZVooLTE0MHB4KSB0cmFuc2xhdGVYKDJweCkgdHJhbnNsYXRlWSgtNzhweCk7XG4gIHRyYW5zZm9ybTogcm90YXRlWCg5MGRlZykgcm90YXRlWig5MGRlZykgdHJhbnNsYXRlWigtMTQwcHgpIHRyYW5zbGF0ZVgoMnB4KSB0cmFuc2xhdGVZKC03OHB4KTsgfVxuXG4vKiBCT09LIFNQSU5FICovXG4uYm9va19zcGluZSB7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGVZKDYwZGVnKSB0cmFuc2xhdGVYKC01cHgpIHRyYW5zbGF0ZVooLTEycHgpO1xuICAtbW96LXRyYW5zZm9ybTogcm90YXRlWSg2MGRlZykgdHJhbnNsYXRlWCgtNXB4KSB0cmFuc2xhdGVaKC0xMnB4KTtcbiAgdHJhbnNmb3JtOiByb3RhdGVZKDYwZGVnKSB0cmFuc2xhdGVYKC01cHgpIHRyYW5zbGF0ZVooLTEycHgpO1xuICB3aWR0aDogMTZweDtcbiAgei1pbmRleDogMDsgfVxuXG4uYm9va19zcGluZSBsaTpmaXJzdC1jaGlsZCB7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVaKDJweCk7XG4gIC1tb3otdHJhbnNmb3JtOiB0cmFuc2xhdGVaKDJweCk7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWigycHgpOyB9XG5cbi5ib29rX3NwaW5lIGxpOmxhc3QtY2hpbGQge1xuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWigtMnB4KTtcbiAgLW1vei10cmFuc2Zvcm06IHRyYW5zbGF0ZVooLTJweCk7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWigtMnB4KTsgfVxuXG4vKiB0aGlja25lc3Mgb2YgYm9vayBzcGluZSAqL1xuLmJvb2tfc3BpbmUgbGk6Zmlyc3QtY2hpbGQ6YWZ0ZXIsXG4uYm9va19zcGluZSBsaTpmaXJzdC1jaGlsZDpiZWZvcmUge1xuICB3aWR0aDogNHB4O1xuICBoZWlnaHQ6IDEwMCU7IH1cblxuLmJvb2tfc3BpbmUgbGk6Zmlyc3QtY2hpbGQ6YWZ0ZXIge1xuICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlWSg5MGRlZykgdHJhbnNsYXRlWigtMnB4KSB0cmFuc2xhdGVYKDJweCk7XG4gIC1tb3otdHJhbnNmb3JtOiByb3RhdGVZKDkwZGVnKSB0cmFuc2xhdGVaKC0ycHgpIHRyYW5zbGF0ZVgoMnB4KTtcbiAgdHJhbnNmb3JtOiByb3RhdGVZKDkwZGVnKSB0cmFuc2xhdGVaKC0ycHgpIHRyYW5zbGF0ZVgoMnB4KTsgfVxuXG4uYm9va19zcGluZSBsaTpmaXJzdC1jaGlsZDpiZWZvcmUge1xuICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlWSgtOTBkZWcpIHRyYW5zbGF0ZVooLTEycHgpO1xuICAtbW96LXRyYW5zZm9ybTogcm90YXRlWSgtOTBkZWcpIHRyYW5zbGF0ZVooLTEycHgpO1xuICB0cmFuc2Zvcm06IHJvdGF0ZVkoLTkwZGVnKSB0cmFuc2xhdGVaKC0xMnB4KTsgfVxuXG4uYm9va19zcGluZSBsaTpsYXN0LWNoaWxkOmFmdGVyLFxuLmJvb2tfc3BpbmUgbGk6bGFzdC1jaGlsZDpiZWZvcmUge1xuICB3aWR0aDogNHB4O1xuICBoZWlnaHQ6IDE2cHg7IH1cblxuLmJvb2tfc3BpbmUgbGk6bGFzdC1jaGlsZDphZnRlciB7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGVYKDkwZGVnKSByb3RhdGVaKDkwZGVnKSB0cmFuc2xhdGVaKDhweCkgdHJhbnNsYXRlWCgycHgpIHRyYW5zbGF0ZVkoLTZweCk7XG4gIC1tb3otdHJhbnNmb3JtOiByb3RhdGVYKDkwZGVnKSByb3RhdGVaKDkwZGVnKSB0cmFuc2xhdGVaKDhweCkgdHJhbnNsYXRlWCgycHgpIHRyYW5zbGF0ZVkoLTZweCk7XG4gIHRyYW5zZm9ybTogcm90YXRlWCg5MGRlZykgcm90YXRlWig5MGRlZykgdHJhbnNsYXRlWig4cHgpIHRyYW5zbGF0ZVgoMnB4KSB0cmFuc2xhdGVZKC02cHgpOyB9XG5cbi5ib29rX3NwaW5lIGxpOmxhc3QtY2hpbGQ6YmVmb3JlIHtcbiAgYm94LXNoYWRvdzogNXB4IC0xcHggMTAwcHggNDBweCByZ2JhKDAsIDAsIDAsIDAuMik7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGVYKDkwZGVnKSByb3RhdGVaKDkwZGVnKSB0cmFuc2xhdGVaKC0yMTBweCkgdHJhbnNsYXRlWCgycHgpIHRyYW5zbGF0ZVkoLTZweCk7XG4gIC1tb3otdHJhbnNmb3JtOiByb3RhdGVYKDkwZGVnKSByb3RhdGVaKDkwZGVnKSB0cmFuc2xhdGVaKC0yMTBweCkgdHJhbnNsYXRlWCgycHgpIHRyYW5zbGF0ZVkoLTZweCk7XG4gIHRyYW5zZm9ybTogcm90YXRlWCg5MGRlZykgcm90YXRlWig5MGRlZykgdHJhbnNsYXRlWigtMjEwcHgpIHRyYW5zbGF0ZVgoMnB4KSB0cmFuc2xhdGVZKC02cHgpOyB9XG5cbi5wYWdlLFxuLnBhZ2UgPiBsaSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICAtd2Via2l0LXRyYW5zZm9ybS1zdHlsZTogcHJlc2VydmUtM2Q7XG4gIC1tb3otdHJhbnNmb3JtLXN0eWxlOiBwcmVzZXJ2ZS0zZDtcbiAgdHJhbnNmb3JtLXN0eWxlOiBwcmVzZXJ2ZS0zZDsgfVxuXG4ucGFnZSB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDk4JTtcbiAgdG9wOiAxJTtcbiAgbGVmdDogMyU7XG4gIHotaW5kZXg6IDEwOyB9XG5cbi5wYWdlID4gbGkge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICAtd2Via2l0LXRyYW5zZm9ybS1vcmlnaW46IGxlZnQgY2VudGVyO1xuICAtbW96LXRyYW5zZm9ybS1vcmlnaW46IGxlZnQgY2VudGVyO1xuICB0cmFuc2Zvcm0tb3JpZ2luOiBsZWZ0IGNlbnRlcjtcbiAgLXdlYmtpdC10cmFuc2l0aW9uLXByb3BlcnR5OiB0cmFuc2Zvcm07XG4gIC1tb3otdHJhbnNpdGlvbi1wcm9wZXJ0eTogdHJhbnNmb3JtO1xuICB0cmFuc2l0aW9uLXByb3BlcnR5OiB0cmFuc2Zvcm07XG4gIC13ZWJraXQtdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2U7XG4gIC1tb3otdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2U7XG4gIHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlOyB9XG5cbi5wYWdlID4gbGk6bnRoLWNoaWxkKDEpIHtcbiAgLXdlYmtpdC10cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjZzO1xuICAtbW96LXRyYW5zaXRpb24tZHVyYXRpb246IDAuNnM7XG4gIHRyYW5zaXRpb24tZHVyYXRpb246IDAuNnM7IH1cblxuLnBhZ2UgPiBsaTpudGgtY2hpbGQoMikge1xuICAtd2Via2l0LXRyYW5zaXRpb24tZHVyYXRpb246IDAuNnM7XG4gIC1tb3otdHJhbnNpdGlvbi1kdXJhdGlvbjogMC42cztcbiAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMC42czsgfVxuXG4ucGFnZSA+IGxpOm50aC1jaGlsZCgzKSB7XG4gIC13ZWJraXQtdHJhbnNpdGlvbi1kdXJhdGlvbjogMC40cztcbiAgLW1vei10cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjRzO1xuICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjRzOyB9XG5cbi5wYWdlID4gbGk6bnRoLWNoaWxkKDQpIHtcbiAgLXdlYmtpdC10cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjVzO1xuICAtbW96LXRyYW5zaXRpb24tZHVyYXRpb246IDAuNXM7XG4gIHRyYW5zaXRpb24tZHVyYXRpb246IDAuNXM7IH1cblxuLnBhZ2UgPiBsaTpudGgtY2hpbGQoNSkge1xuICAtd2Via2l0LXRyYW5zaXRpb24tZHVyYXRpb246IDAuNnM7XG4gIC1tb3otdHJhbnNpdGlvbi1kdXJhdGlvbjogMC42cztcbiAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMC42czsgfVxuXG4vKlxyXG5cdDUuIGV2ZW50c1xyXG4qL1xuLmJvb2s6aG92ZXIgPiAuaGFyZGNvdmVyX2Zyb250IHtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZVkoLTE0NWRlZykgdHJhbnNsYXRlWigwKTtcbiAgLW1vei10cmFuc2Zvcm06IHJvdGF0ZVkoLTE0NWRlZykgdHJhbnNsYXRlWigwKTtcbiAgdHJhbnNmb3JtOiByb3RhdGVZKC0xNDVkZWcpIHRyYW5zbGF0ZVooMCk7XG4gIHotaW5kZXg6IDA7IH1cblxuLmJvb2s6aG92ZXIgPiAucGFnZSBsaTpudGgtY2hpbGQoMSkge1xuICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlWSgtMzBkZWcpO1xuICAtbW96LXRyYW5zZm9ybTogcm90YXRlWSgtMzBkZWcpO1xuICB0cmFuc2Zvcm06IHJvdGF0ZVkoLTMwZGVnKTtcbiAgLXdlYmtpdC10cmFuc2l0aW9uLWR1cmF0aW9uOiAxLjVzO1xuICAtbW96LXRyYW5zaXRpb24tZHVyYXRpb246IDEuNXM7XG4gIHRyYW5zaXRpb24tZHVyYXRpb246IDEuNXM7IH1cblxuLmJvb2s6aG92ZXIgPiAucGFnZSBsaTpudGgtY2hpbGQoMikge1xuICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlWSgtMzVkZWcpO1xuICAtbW96LXRyYW5zZm9ybTogcm90YXRlWSgtMzVkZWcpO1xuICB0cmFuc2Zvcm06IHJvdGF0ZVkoLTM1ZGVnKTtcbiAgLXdlYmtpdC10cmFuc2l0aW9uLWR1cmF0aW9uOiAxLjhzO1xuICAtbW96LXRyYW5zaXRpb24tZHVyYXRpb246IDEuOHM7XG4gIHRyYW5zaXRpb24tZHVyYXRpb246IDEuOHM7IH1cblxuLmJvb2s6aG92ZXIgPiAucGFnZSBsaTpudGgtY2hpbGQoMykge1xuICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlWSgtMTE4ZGVnKTtcbiAgLW1vei10cmFuc2Zvcm06IHJvdGF0ZVkoLTExOGRlZyk7XG4gIHRyYW5zZm9ybTogcm90YXRlWSgtMTE4ZGVnKTtcbiAgLXdlYmtpdC10cmFuc2l0aW9uLWR1cmF0aW9uOiAxLjZzO1xuICAtbW96LXRyYW5zaXRpb24tZHVyYXRpb246IDEuNnM7XG4gIHRyYW5zaXRpb24tZHVyYXRpb246IDEuNnM7IH1cblxuLmJvb2s6aG92ZXIgPiAucGFnZSBsaTpudGgtY2hpbGQoNCkge1xuICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlWSgtMTMwZGVnKTtcbiAgLW1vei10cmFuc2Zvcm06IHJvdGF0ZVkoLTEzMGRlZyk7XG4gIHRyYW5zZm9ybTogcm90YXRlWSgtMTMwZGVnKTtcbiAgLXdlYmtpdC10cmFuc2l0aW9uLWR1cmF0aW9uOiAxLjRzO1xuICAtbW96LXRyYW5zaXRpb24tZHVyYXRpb246IDEuNHM7XG4gIHRyYW5zaXRpb24tZHVyYXRpb246IDEuNHM7IH1cblxuLmJvb2s6aG92ZXIgPiAucGFnZSBsaTpudGgtY2hpbGQoNSkge1xuICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlWSgtMTQwZGVnKTtcbiAgLW1vei10cmFuc2Zvcm06IHJvdGF0ZVkoLTE0MGRlZyk7XG4gIHRyYW5zZm9ybTogcm90YXRlWSgtMTQwZGVnKTtcbiAgLXdlYmtpdC10cmFuc2l0aW9uLWR1cmF0aW9uOiAxLjJzO1xuICAtbW96LXRyYW5zaXRpb24tZHVyYXRpb246IDEuMnM7XG4gIHRyYW5zaXRpb24tZHVyYXRpb246IDEuMnM7IH1cblxuLypcclxuXHQ2LiBCb251c1xyXG4qL1xuLyogY292ZXIgQ1NTICovXG4uY292ZXJEZXNpZ24ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgYm90dG9tOiAwO1xuICByaWdodDogMDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgLXdlYmtpdC1iYWNrZmFjZS12aXNpYmlsaXR5OiBoaWRkZW47XG4gIC1tb3otYmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuO1xuICBiYWNrZmFjZS12aXNpYmlsaXR5OiBoaWRkZW47IH1cblxuLmNvdmVyRGVzaWduOjphZnRlciB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KC0xMzVkZWcsIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC40NSkgMCUsIHRyYW5zcGFyZW50IDEwMCUpO1xuICBiYWNrZ3JvdW5kLWltYWdlOiAtbW96LWxpbmVhci1ncmFkaWVudCgtMTM1ZGVnLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNDUpIDAlLCB0cmFuc3BhcmVudCAxMDAlKTtcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KC0xMzVkZWcsIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC40NSkgMCUsIHRyYW5zcGFyZW50IDEwMCUpO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgYm90dG9tOiAwO1xuICByaWdodDogMDsgfVxuXG4uY292ZXJEZXNpZ24gaDEge1xuICBjb2xvcjogI2ZmZjtcbiAgZm9udC1zaXplOiAyLjJlbTtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMDVlbTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW46IDU0JSAwIDAgMDtcbiAgdGV4dC1zaGFkb3c6IC0xcHggLTFweCAwIHJnYmEoMCwgMCwgMCwgMC4xKTsgfVxuXG4uY292ZXJEZXNpZ24gcCB7XG4gIGNvbG9yOiAjZjhmOGY4O1xuICBmb250LXNpemU6IDFlbTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB0ZXh0LXNoYWRvdzogLTFweCAtMXB4IDAgcmdiYSgwLCAwLCAwLCAwLjEpOyB9XG5cbi55ZWxsb3cge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjFjNDBmO1xuICBiYWNrZ3JvdW5kLWltYWdlOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudCh0b3AsICNmMWM0MGYgNTglLCAjZTdiYTA3IDAlKTtcbiAgYmFja2dyb3VuZC1pbWFnZTogLW1vei1saW5lYXItZ3JhZGllbnQodG9wLCAjZjFjNDBmIDU4JSwgI2U3YmEwNyAwJSk7XG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0b3AsICNmMWM0MGYgNTglLCAjZTdiYTA3IDAlKTsgfVxuXG4uYmx1ZSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMzNDk4ZGI7XG4gIGJhY2tncm91bmQtaW1hZ2U6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KHRvcCwgIzM0OThkYiA1OCUsICMyYTkwZDQgMCUpO1xuICBiYWNrZ3JvdW5kLWltYWdlOiAtbW96LWxpbmVhci1ncmFkaWVudCh0b3AsICMzNDk4ZGIgNTglLCAjMmE5MGQ0IDAlKTtcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvcCwgIzM0OThkYiA1OCUsICMyYTkwZDQgMCUpOyB9XG5cbi5ncmV5IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y4ZTlkMTtcbiAgYmFja2dyb3VuZC1pbWFnZTogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQodG9wLCAjZjhlOWQxIDU4JSwgI2U3ZDViNyAwJSk7XG4gIGJhY2tncm91bmQtaW1hZ2U6IC1tb3otbGluZWFyLWdyYWRpZW50KHRvcCwgI2Y4ZTlkMSA1OCUsICNlN2Q1YjcgMCUpO1xuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG9wLCAjZjhlOWQxIDU4JSwgI2U3ZDViNyAwJSk7IH1cblxuLyogTWVkaWEgUXVlcmllcyAqL1xuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMzcuODEyNWVtKSB7XG4gIC5hbGlnbiA+IGxpIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtaW4taGVpZ2h0OiA0NDBweDtcbiAgICBoZWlnaHQ6IGF1dG87XG4gICAgcGFkZGluZzogMDtcbiAgICBtYXJnaW46IDAgMCAzMHB4IDA7IH1cbiAgLmJvb2sge1xuICAgIG1hcmdpbjogMCBhdXRvOyB9IH1cblxuLmxpc3Qge1xuICBtYXgtd2lkdGg6IDU1MHB4O1xuICBtYXJnaW4tbGVmdDogMzAlOyB9XG4iXX0= */"

/***/ }),

/***/ "./src/app/components/manga/all-listing/all-listing.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/components/manga/all-listing/all-listing.component.ts ***!
  \***********************************************************************/
/*! exports provided: AllListingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AllListingComponent", function() { return AllListingComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_manga_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/manga.service */ "./src/app/services/manga.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _mappers_manga_mapper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../mappers/manga-mapper */ "./src/app/mappers/manga-mapper.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");







var AllListingComponent = /** @class */ (function () {
    function AllListingComponent(mangaService, route, router) {
        var _this = this;
        this.mangaService = mangaService;
        this.route = route;
        this.router = router;
        this.mangas = [];
        this.BASE_URL_IMAGE = 'https://cdn.mangaeden.com/mangasimg/';
        this.numberInPage = 25;
        this.startPage = 0;
        this.collection = [];
        this.collectionCategorized = [];
        this.allMangas = [];
        this.allCategorizedMangas = [];
        this.isDisplayedCategories = false;
        this.sort = 'none';
        this.selectedCategorie = ' Aucune';
        this.ngUnsubscribe = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.config = {
            currentPage: 1,
            itemsPerPage: 2
        };
        this.route.queryParamMap
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (params) { return params.get('page'); }))
            .subscribe(function (page) { return _this.config.currentPage = page; });
    }
    AllListingComponent.prototype.ngOnInit = function () {
        this.allCategorie = [];
        this.ConsultationAllMangas(this.startPage);
        this.config.itemsPerPage = this.numberInPage;
        this.initializeCategories();
    };
    AllListingComponent.prototype.ngOnDestroy = function () {
        this.ngUnsubscribe.next();
        this.ngUnsubscribe.complete();
    };
    AllListingComponent.prototype.ConsultationAllMangas = function (beginNumber) {
        var _this = this;
        var mapper = new _mappers_manga_mapper__WEBPACK_IMPORTED_MODULE_5__["MangaMapper"]();
        this.mangaService.getMangasWithPagination(beginNumber, this.numberInPage)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["takeUntil"])(this.ngUnsubscribe))
            .subscribe(function (apiResponse) {
            _this.end = apiResponse.end;
            _this.page = apiResponse.page;
            _this.start = apiResponse.start;
            _this.total = apiResponse.total;
            _this.mangas = [];
            apiResponse.manga.forEach(function (manga) { return _this.mangas.push(mapper.MangaPresentationDtoToDomain(manga)); });
            _this.mangas.forEach(function (manga) { return manga.image = _this.BASE_URL_IMAGE + manga.image; });
            _this.collection = [];
            for (var i = 1; i <= _this.total; i++) {
                _this.collection.push("" + i);
            }
        });
    };
    AllListingComponent.prototype.pageChange = function (newPage) {
        if (this.selectedCategorie.startsWith(' Aucune')) {
            if (this.sort === 'none') {
                this.router.navigate(['mangas'], { queryParams: { page: newPage } });
                var resultPage = newPage - 1;
                this.ConsultationAllMangas(resultPage);
            }
            else {
                this.sortByTypeSort(this.sort, newPage);
                this.router.navigate(['mangas'], { queryParams: { page: newPage } });
            }
        }
        else {
            this.router.navigate(['mangas'], { queryParams: { page: newPage } });
            this.sortCategorizedManga(this.sort, newPage);
        }
    };
    AllListingComponent.prototype.onChange = function (mrChange) {
        this.sort = mrChange.value;
        this.applyChangement(mrChange.value);
    };
    AllListingComponent.prototype.applyChangement = function (sort) {
        var _this = this;
        var pageNumero = 1;
        this.route.queryParamMap
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (params) { return params.get('page'); }))
            .subscribe(function (page) {
            if (page !== null) {
                pageNumero = +page;
                _this.config.currentPage = +page;
            }
        });
        if (this.selectedCategorie.startsWith(' Aucune')) {
            this.sortByTypeSort(sort, pageNumero);
        }
        else {
            this.sortCategorizedManga(sort, pageNumero);
        }
    };
    AllListingComponent.prototype.sortByTypeSort = function (sort, pageNumero) {
        var _this = this;
        var mapper = new _mappers_manga_mapper__WEBPACK_IMPORTED_MODULE_5__["MangaMapper"]();
        if (this.sort === 'none') {
            this.pageChange(pageNumero);
        }
        else {
            this.mangaService.getMangas()
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["takeUntil"])(this.ngUnsubscribe))
                .subscribe(function (apiResponse) {
                _this.mangas = [];
                _this.allMangas = [];
                apiResponse.manga.forEach(function (manga) { return _this.allMangas.push(mapper.MangaPresentationDtoToDomain(manga)); });
                _this.allMangas.forEach(function (manga) { return manga.image = _this.BASE_URL_IMAGE + manga.image; });
                switch (sort) {
                    case 'alpha': {
                        _this.allMangas.sort(function (a, b) {
                            var textA = a.title.toUpperCase();
                            var textB = b.title.toUpperCase();
                            return (textA < textB) ? -1 : (textA > textB) ? 1 : 0;
                        });
                        break;
                    }
                    case 'reversedAlpha': {
                        _this.allMangas.sort(function (a, b) {
                            var textA = a.title.toUpperCase();
                            var textB = b.title.toUpperCase();
                            return (textB < textA) ? -1 : (textB > textA) ? 1 : 0;
                        });
                        break;
                    }
                    case 'date': {
                        _this.allMangas.sort(function (a, b) {
                            return (a.date < b.date) ? -1 : (a.date > b.date) ? 1 : 0;
                        });
                        break;
                    }
                    case 'reversedDate': {
                        _this.allMangas.sort(function (a, b) {
                            return (a.date < b.date) ? -1 : (a.date > b.date) ? 1 : 0;
                        });
                        _this.allMangas.reverse();
                        break;
                    }
                }
                for (var i = 25 * (pageNumero - 1); i <= 25 * (pageNumero - 1) + 24; i++) {
                    if (i < _this.total) {
                        _this.mangas.push(_this.allMangas[i]);
                    }
                }
            });
        }
    };
    AllListingComponent.prototype.gotoManga = function (manga) {
        this.router.navigate(["manga/" + manga.id]);
    };
    AllListingComponent.prototype.initializeCategories = function () {
        var _this = this;
        this.mangaService.getMangas().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["takeUntil"])(this.ngUnsubscribe))
            .subscribe(function (apiResponse) {
            _this.mangas.forEach(function (manga) {
                manga.categories.forEach(function (categ) {
                    if (!_this.allCategorie.find(function (x) { return x.value === categ; })) {
                        _this.allCategorie.push({ value: categ, viewValue: categ });
                    }
                });
            });
            _this.allCategorie.sort(function (a, b) {
                var textA = a.value.toUpperCase();
                var textB = b.value.toUpperCase();
                return (textA < textB) ? -1 : (textA > textB) ? 1 : 0;
            });
            _this.isDisplayedCategories = true;
        });
    };
    AllListingComponent.prototype.onSelectedCategorie = function (selected) {
        var _this = this;
        this.allCategorizedMangas = [];
        this.selectedCategorie = selected.value;
        this.route.queryParamMap
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (params) { return params.get('page'); }))
            .subscribe(function (page) {
            if (page !== null) {
                _this.config.currentPage = +page;
            }
            else {
                _this.config.currentPage = 1;
            }
        });
        this.pageChange(this.config.currentPage);
        console.log(selected.value);
    };
    AllListingComponent.prototype.sortCategorizedManga = function (sort, pageNumero) {
        var _this = this;
        var mapper = new _mappers_manga_mapper__WEBPACK_IMPORTED_MODULE_5__["MangaMapper"]();
        this.collection = [];
        this.collectionCategorized = [];
        this.mangaService.getMangas()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["takeUntil"])(this.ngUnsubscribe))
            .subscribe(function (apiResponse) {
            _this.allCategorizedMangas = [];
            apiResponse.manga.forEach(function (manga) {
                manga.c.forEach(function (categ) {
                    if (categ === _this.selectedCategorie) {
                        _this.allCategorizedMangas.push(mapper.MangaPresentationDtoToDomain(manga));
                    }
                });
            });
            console.log(_this.allCategorizedMangas);
            _this.allCategorizedMangas.forEach(function (manga) { return manga.image = _this.BASE_URL_IMAGE + manga.image; });
            if (_this.sort !== 'none') {
                switch (sort) {
                    case 'alpha': {
                        _this.allCategorizedMangas.sort(function (a, b) {
                            var textA = a.title.toUpperCase();
                            var textB = b.title.toUpperCase();
                            return (textA < textB) ? -1 : (textA > textB) ? 1 : 0;
                        });
                        break;
                    }
                    case 'reversedAlpha': {
                        _this.allCategorizedMangas.sort(function (a, b) {
                            var textA = a.title.toUpperCase();
                            var textB = b.title.toUpperCase();
                            return (textB < textA) ? -1 : (textB > textA) ? 1 : 0;
                        });
                        break;
                    }
                    case 'date': {
                        _this.allCategorizedMangas.sort(function (a, b) {
                            return (a.date < b.date) ? -1 : (a.date > b.date) ? 1 : 0;
                        });
                        break;
                    }
                    case 'reversedDate': {
                        _this.allCategorizedMangas.sort(function (a, b) {
                            return (a.date < b.date) ? -1 : (a.date > b.date) ? 1 : 0;
                        });
                        _this.allCategorizedMangas.reverse();
                        break;
                    }
                }
            }
            _this.mangas = [];
            for (var i = 25 * (pageNumero - 1); i <= 25 * (pageNumero - 1) + 24; i++) {
                if (i < _this.allCategorizedMangas.length) {
                    _this.mangas.push(_this.allCategorizedMangas[i]);
                }
            }
            for (var i = 0; i <= _this.allCategorizedMangas.length; i++) {
                _this.collectionCategorized.push("" + i);
            }
        });
    };
    AllListingComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-all-listing',
            template: __webpack_require__(/*! ./all-listing.component.html */ "./src/app/components/manga/all-listing/all-listing.component.html"),
            styles: [__webpack_require__(/*! ./all-listing.component.scss */ "./src/app/components/manga/all-listing/all-listing.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_manga_service__WEBPACK_IMPORTED_MODULE_2__["MangaService"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]])
    ], AllListingComponent);
    return AllListingComponent;
}());



/***/ }),

/***/ "./src/app/components/manga/manga-presentation/manga-presentation.component.html":
/*!***************************************************************************************!*\
  !*** ./src/app/components/manga/manga-presentation/manga-presentation.component.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ng-container *ngIf=\"found\">\n\n  <p>\n    manga-presentation works! <br/>\n    {{mangaInfo.title}}<br/>\n    {{mangaInfo.chapters_len}}\n\n  </p>\n  <li *ngFor=\"let chapter of mangaInfo.chapters\">\n    <a routerLink=\"/chapter/{{chapter[3]}}\">{{ chapter[2] }} </a>\n  </li>\n</ng-container>\n\n<button (click)=\"goBack()\">Retour</button>\n\n"

/***/ }),

/***/ "./src/app/components/manga/manga-presentation/manga-presentation.component.scss":
/*!***************************************************************************************!*\
  !*** ./src/app/components/manga/manga-presentation/manga-presentation.component.scss ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbWFuZ2EvbWFuZ2EtcHJlc2VudGF0aW9uL21hbmdhLXByZXNlbnRhdGlvbi5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/components/manga/manga-presentation/manga-presentation.component.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/components/manga/manga-presentation/manga-presentation.component.ts ***!
  \*************************************************************************************/
/*! exports provided: MangaPresentationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MangaPresentationComponent", function() { return MangaPresentationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_manga_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/manga.service */ "./src/app/services/manga.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _mappers_manga_mapper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../mappers/manga-mapper */ "./src/app/mappers/manga-mapper.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");








var MangaPresentationComponent = /** @class */ (function () {
    function MangaPresentationComponent(mangaService, route, router, location) {
        this.mangaService = mangaService;
        this.route = route;
        this.router = router;
        this.location = location;
        this.ngUnsubscribe = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Subject"]();
        this.found = false;
        this.mangaId = this.route.snapshot.paramMap.get('id');
    }
    MangaPresentationComponent.prototype.ngOnInit = function () {
        this.seeInformationOfManga(this.mangaId);
    };
    MangaPresentationComponent.prototype.ngOnDestroy = function () {
        this.ngUnsubscribe.next();
        this.ngUnsubscribe.complete();
    };
    MangaPresentationComponent.prototype.seeInformationOfManga = function (id) {
        var _this = this;
        var mapper = new _mappers_manga_mapper__WEBPACK_IMPORTED_MODULE_6__["MangaMapper"]();
        this.mangaService.getMangaInformation(id)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["takeUntil"])(this.ngUnsubscribe))
            .subscribe(function (apiResponse) {
            _this.mangaInfo = mapper.MangaInformationDtoToDomain(apiResponse);
            _this.found = true;
        });
    };
    MangaPresentationComponent.prototype.goBack = function () {
        this.location.back();
    };
    MangaPresentationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-manga-presentation',
            template: __webpack_require__(/*! ./manga-presentation.component.html */ "./src/app/components/manga/manga-presentation/manga-presentation.component.html"),
            styles: [__webpack_require__(/*! ./manga-presentation.component.scss */ "./src/app/components/manga/manga-presentation/manga-presentation.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_manga_service__WEBPACK_IMPORTED_MODULE_2__["MangaService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["Location"]])
    ], MangaPresentationComponent);
    return MangaPresentationComponent;
}());



/***/ }),

/***/ "./src/app/components/manga/read-chapter/read-chapter.component.html":
/*!***************************************************************************!*\
  !*** ./src/app/components/manga/read-chapter/read-chapter.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ng-container *ngIf=\"found\">\n\n\n<ng-container *ngFor=\"let image of chapter.images\">\n  <img src=\"https://cdn.mangaeden.com/mangasimg/{{image[1]}}\" alt=\"\" width=\"100%\" height=\"100%\">\n</ng-container>\n\n\n<button (click)=\"goBack()\">Retour</button>\n</ng-container>\n"

/***/ }),

/***/ "./src/app/components/manga/read-chapter/read-chapter.component.scss":
/*!***************************************************************************!*\
  !*** ./src/app/components/manga/read-chapter/read-chapter.component.scss ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbWFuZ2EvcmVhZC1jaGFwdGVyL3JlYWQtY2hhcHRlci5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/components/manga/read-chapter/read-chapter.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/components/manga/read-chapter/read-chapter.component.ts ***!
  \*************************************************************************/
/*! exports provided: ReadChapterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReadChapterComponent", function() { return ReadChapterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _services_manga_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/manga.service */ "./src/app/services/manga.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");







var ReadChapterComponent = /** @class */ (function () {
    function ReadChapterComponent(mangaService, route, router, location) {
        this.mangaService = mangaService;
        this.route = route;
        this.router = router;
        this.location = location;
        this.ngUnsubscribe = new rxjs__WEBPACK_IMPORTED_MODULE_6__["Subject"]();
        this.found = false;
        this.chapterId = this.route.snapshot.paramMap.get('id');
    }
    ReadChapterComponent.prototype.ngOnInit = function () {
        this.seeChapter(this.chapterId);
    };
    ReadChapterComponent.prototype.ngOnDestroy = function () {
        this.ngUnsubscribe.next();
        this.ngUnsubscribe.complete();
    };
    ReadChapterComponent.prototype.seeChapter = function (id) {
        var _this = this;
        this.mangaService.getMangaChapter(id)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["takeUntil"])(this.ngUnsubscribe))
            .subscribe(function (apiResponse) {
            _this.chapter = apiResponse;
            _this.chapter.images.reverse();
            _this.found = true;
        });
    };
    ReadChapterComponent.prototype.goBack = function () {
        this.location.back();
    };
    ReadChapterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-read-chapter',
            template: __webpack_require__(/*! ./read-chapter.component.html */ "./src/app/components/manga/read-chapter/read-chapter.component.html"),
            styles: [__webpack_require__(/*! ./read-chapter.component.scss */ "./src/app/components/manga/read-chapter/read-chapter.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_manga_service__WEBPACK_IMPORTED_MODULE_3__["MangaService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["Location"]])
    ], ReadChapterComponent);
    return ReadChapterComponent;
}());



/***/ }),

/***/ "./src/app/components/sidebar/sidebar.component.html":
/*!***********************************************************!*\
  !*** ./src/app/components/sidebar/sidebar.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"area\"></div>\r\n<nav class=\"main-menu\">\r\n  <ul>\r\n\r\n    <li class=\"has-subnav\">\r\n      <a routerLink=\"/home\">\r\n        <i class=\"fa fa-folder-open fa-2x\"></i>\r\n        <span class=\"nav-text\">Home</span>\r\n      </a>\r\n    </li>\r\n\r\n    <li>\r\n      <a routerLink=\"/mangas\">\r\n        <i class=\"fa fa-home fa-2x\"></i>\r\n        <span class=\"nav-text\">Mangas</span>\r\n      </a>\r\n    </li>\r\n\r\n    <li>\r\n      <a routerLink=\"/books\">\r\n        <i class=\"fa fa-home fa-2x\"></i>\r\n        <span class=\"nav-text\">Books</span>\r\n      </a>\r\n    </li>\r\n\r\n    <li>\r\n      <a routerLink=\"/creation-studio\">\r\n        <i class=\"fa fa-home fa-2x\"></i>\r\n        <span class=\"nav-text\">My Studio</span>\r\n      </a>\r\n    </li>\r\n\r\n  </ul>\r\n\r\n  <ul class=\"logout\">\r\n    <li>\r\n      <a (click)=\"signOut()\">\r\n        <i class=\"fa fa-power-off fa-2x\"></i>\r\n        <span class=\"nav-text\">Logout</span>\r\n      </a>\r\n    </li>\r\n  </ul>\r\n</nav>\r\n<div style=\"margin-left: 80px\">\r\n  <router-outlet #routerOutlet=\"outlet\"></router-outlet>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "./src/app/components/sidebar/sidebar.component.scss":
/*!***********************************************************!*\
  !*** ./src/app/components/sidebar/sidebar.component.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".fa-2x {\n  font-size: 2em; }\n\n.fa {\n  position: relative;\n  display: table-cell;\n  width: 60px;\n  height: 36px;\n  text-align: center;\n  vertical-align: middle;\n  font-size: 20px; }\n\n.main-menu:hover, nav.main-menu.expanded {\n  width: 250px;\n  overflow: visible; }\n\n.main-menu {\n  background: #fbfbfb;\n  border-right: 1px solid #e5e5e5;\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  height: 100%;\n  left: 0;\n  width: 60px;\n  overflow: hidden;\n  transition: width .05s linear;\n  -webkit-transform: translateZ(0) scale(1, 1);\n  z-index: 1000; }\n\n.main-menu > ul {\n  margin: 7px 0; }\n\n.main-menu li {\n  position: relative;\n  display: block;\n  width: 250px; }\n\n.main-menu li > a {\n  position: relative;\n  display: table;\n  border-collapse: collapse;\n  border-spacing: 0;\n  color: #999;\n  font-family: arial;\n  font-size: 14px;\n  text-decoration: none;\n  -webkit-transform: translateZ(0) scale(1, 1);\n  transition: all .1s linear; }\n\n.main-menu .nav-icon {\n  position: relative;\n  display: table-cell;\n  width: 60px;\n  height: 36px;\n  text-align: center;\n  vertical-align: middle;\n  font-size: 18px; }\n\n.main-menu .nav-text {\n  position: relative;\n  display: table-cell;\n  vertical-align: middle;\n  width: 190px;\n  font-family: 'Titillium Web', sans-serif; }\n\n.main-menu > ul.logout {\n  position: absolute;\n  left: 0;\n  bottom: 0; }\n\n.no-touch .scrollable.hover {\n  overflow-y: hidden; }\n\n.no-touch .scrollable.hover:hover {\n  overflow-y: auto;\n  overflow: visible; }\n\na:hover, a:focus {\n  text-decoration: none; }\n\nnav {\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  -o-user-select: none;\n  user-select: none; }\n\nnav ul, nav li {\n  outline: 0;\n  margin: 0;\n  padding: 0; }\n\n.main-menu li:hover > a, nav.main-menu li.active > a, .dropdown-menu > li > a:hover, .dropdown-menu > li > a:focus, .dropdown-menu > .active > a, .dropdown-menu > .active > a:hover, .dropdown-menu > .active > a:focus, .no-touch .dashboard-page nav.dashboard-menu ul li:hover a, .dashboard-page nav.dashboard-menu ul li.active a {\n  color: #fff;\n  background-color: #5fa2db; }\n\n.area {\n  float: left;\n  background: #e2e2e2;\n  width: 100%;\n  height: 100%; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9zaWRlYmFyL0M6XFxVc2Vyc1xcQ0FSRE9OXFxEZXNrdG9wXFxNYXN0ZXIgQ0NNIGFubmVlIDFcXFByb2pldFxcTXlSZWFkaW5nQm9va3NQcm9qZWN0L3NyY1xcYXBwXFxjb21wb25lbnRzXFxzaWRlYmFyXFxzaWRlYmFyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsY0FBYyxFQUFBOztBQUVoQjtFQUNFLGtCQUFrQjtFQUNsQixtQkFBbUI7RUFDbkIsV0FBVztFQUNYLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsc0JBQXNCO0VBQ3RCLGVBQWMsRUFBQTs7QUFJaEI7RUFDRSxZQUFXO0VBQ1gsaUJBQWdCLEVBQUE7O0FBR2xCO0VBQ0UsbUJBQWtCO0VBQ2xCLCtCQUE4QjtFQUM5QixrQkFBaUI7RUFDakIsTUFBSztFQUNMLFNBQVE7RUFDUixZQUFXO0VBQ1gsT0FBTTtFQUNOLFdBQVU7RUFDVixnQkFBZTtFQUVmLDZCQUE0QjtFQUM1Qiw0Q0FBMEM7RUFDMUMsYUFBWSxFQUFBOztBQUdkO0VBQ0UsYUFBWSxFQUFBOztBQUdkO0VBQ0Usa0JBQWlCO0VBQ2pCLGNBQWE7RUFDYixZQUFXLEVBQUE7O0FBR2I7RUFDRSxrQkFBaUI7RUFDakIsY0FBYTtFQUNiLHlCQUF3QjtFQUN4QixpQkFBZ0I7RUFDaEIsV0FBVTtFQUNWLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2YscUJBQW9CO0VBQ3BCLDRDQUEwQztFQUUxQywwQkFBeUIsRUFBQTs7QUFJM0I7RUFDRSxrQkFBaUI7RUFDakIsbUJBQWtCO0VBQ2xCLFdBQVU7RUFDVixZQUFXO0VBQ1gsa0JBQWlCO0VBQ2pCLHNCQUFxQjtFQUNyQixlQUFjLEVBQUE7O0FBR2hCO0VBQ0Usa0JBQWlCO0VBQ2pCLG1CQUFrQjtFQUNsQixzQkFBcUI7RUFDckIsWUFBVztFQUNYLHdDQUF3QyxFQUFBOztBQUcxQztFQUNFLGtCQUFpQjtFQUNqQixPQUFNO0VBQ04sU0FBUSxFQUFBOztBQUdWO0VBQ0Usa0JBQWlCLEVBQUE7O0FBR25CO0VBQ0UsZ0JBQWU7RUFDZixpQkFBZ0IsRUFBQTs7QUFHbEI7RUFDRSxxQkFBb0IsRUFBQTs7QUFHdEI7RUFDRSx5QkFBd0I7RUFDeEIsc0JBQXFCO0VBQ3JCLHFCQUFvQjtFQUNwQixvQkFBbUI7RUFDbkIsaUJBQWdCLEVBQUE7O0FBR2xCO0VBQ0UsVUFBUztFQUNULFNBQVE7RUFDUixVQUFTLEVBQUE7O0FBRVg7RUFDRSxXQUFVO0VBQ1YseUJBQXdCLEVBQUE7O0FBRTFCO0VBQ0UsV0FBVztFQUNYLG1CQUFtQjtFQUNuQixXQUFXO0VBQ1gsWUFBWSxFQUFBIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9zaWRlYmFyL3NpZGViYXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZmEtMngge1xyXG4gIGZvbnQtc2l6ZTogMmVtO1xyXG59XHJcbi5mYSB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGRpc3BsYXk6IHRhYmxlLWNlbGw7XHJcbiAgd2lkdGg6IDYwcHg7XHJcbiAgaGVpZ2h0OiAzNnB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4gIGZvbnQtc2l6ZToyMHB4O1xyXG59XHJcblxyXG5cclxuLm1haW4tbWVudTpob3ZlcixuYXYubWFpbi1tZW51LmV4cGFuZGVkIHtcclxuICB3aWR0aDoyNTBweDtcclxuICBvdmVyZmxvdzp2aXNpYmxlO1xyXG59XHJcblxyXG4ubWFpbi1tZW51IHtcclxuICBiYWNrZ3JvdW5kOiNmYmZiZmI7XHJcbiAgYm9yZGVyLXJpZ2h0OjFweCBzb2xpZCAjZTVlNWU1O1xyXG4gIHBvc2l0aW9uOmFic29sdXRlO1xyXG4gIHRvcDowO1xyXG4gIGJvdHRvbTowO1xyXG4gIGhlaWdodDoxMDAlO1xyXG4gIGxlZnQ6MDtcclxuICB3aWR0aDo2MHB4O1xyXG4gIG92ZXJmbG93OmhpZGRlbjtcclxuICAtd2Via2l0LXRyYW5zaXRpb246d2lkdGggLjA1cyBsaW5lYXI7XHJcbiAgdHJhbnNpdGlvbjp3aWR0aCAuMDVzIGxpbmVhcjtcclxuICAtd2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGVaKDApIHNjYWxlKDEsMSk7XHJcbiAgei1pbmRleDoxMDAwO1xyXG59XHJcblxyXG4ubWFpbi1tZW51PnVsIHtcclxuICBtYXJnaW46N3B4IDA7XHJcbn1cclxuXHJcbi5tYWluLW1lbnUgbGkge1xyXG4gIHBvc2l0aW9uOnJlbGF0aXZlO1xyXG4gIGRpc3BsYXk6YmxvY2s7XHJcbiAgd2lkdGg6MjUwcHg7XHJcbn1cclxuXHJcbi5tYWluLW1lbnUgbGk+YSB7XHJcbiAgcG9zaXRpb246cmVsYXRpdmU7XHJcbiAgZGlzcGxheTp0YWJsZTtcclxuICBib3JkZXItY29sbGFwc2U6Y29sbGFwc2U7XHJcbiAgYm9yZGVyLXNwYWNpbmc6MDtcclxuICBjb2xvcjojOTk5O1xyXG4gIGZvbnQtZmFtaWx5OiBhcmlhbDtcclxuICBmb250LXNpemU6IDE0cHg7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOm5vbmU7XHJcbiAgLXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlWigwKSBzY2FsZSgxLDEpO1xyXG4gIC13ZWJraXQtdHJhbnNpdGlvbjphbGwgLjFzIGxpbmVhcjtcclxuICB0cmFuc2l0aW9uOmFsbCAuMXMgbGluZWFyO1xyXG5cclxufVxyXG5cclxuLm1haW4tbWVudSAubmF2LWljb24ge1xyXG4gIHBvc2l0aW9uOnJlbGF0aXZlO1xyXG4gIGRpc3BsYXk6dGFibGUtY2VsbDtcclxuICB3aWR0aDo2MHB4O1xyXG4gIGhlaWdodDozNnB4O1xyXG4gIHRleHQtYWxpZ246Y2VudGVyO1xyXG4gIHZlcnRpY2FsLWFsaWduOm1pZGRsZTtcclxuICBmb250LXNpemU6MThweDtcclxufVxyXG5cclxuLm1haW4tbWVudSAubmF2LXRleHQge1xyXG4gIHBvc2l0aW9uOnJlbGF0aXZlO1xyXG4gIGRpc3BsYXk6dGFibGUtY2VsbDtcclxuICB2ZXJ0aWNhbC1hbGlnbjptaWRkbGU7XHJcbiAgd2lkdGg6MTkwcHg7XHJcbiAgZm9udC1mYW1pbHk6ICdUaXRpbGxpdW0gV2ViJywgc2Fucy1zZXJpZjtcclxufVxyXG5cclxuLm1haW4tbWVudT51bC5sb2dvdXQge1xyXG4gIHBvc2l0aW9uOmFic29sdXRlO1xyXG4gIGxlZnQ6MDtcclxuICBib3R0b206MDtcclxufVxyXG5cclxuLm5vLXRvdWNoIC5zY3JvbGxhYmxlLmhvdmVyIHtcclxuICBvdmVyZmxvdy15OmhpZGRlbjtcclxufVxyXG5cclxuLm5vLXRvdWNoIC5zY3JvbGxhYmxlLmhvdmVyOmhvdmVyIHtcclxuICBvdmVyZmxvdy15OmF1dG87XHJcbiAgb3ZlcmZsb3c6dmlzaWJsZTtcclxufVxyXG5cclxuYTpob3ZlcixhOmZvY3VzIHtcclxuICB0ZXh0LWRlY29yYXRpb246bm9uZTtcclxufVxyXG5cclxubmF2IHtcclxuICAtd2Via2l0LXVzZXItc2VsZWN0Om5vbmU7XHJcbiAgLW1vei11c2VyLXNlbGVjdDpub25lO1xyXG4gIC1tcy11c2VyLXNlbGVjdDpub25lO1xyXG4gIC1vLXVzZXItc2VsZWN0Om5vbmU7XHJcbiAgdXNlci1zZWxlY3Q6bm9uZTtcclxufVxyXG5cclxubmF2IHVsLG5hdiBsaSB7XHJcbiAgb3V0bGluZTowO1xyXG4gIG1hcmdpbjowO1xyXG4gIHBhZGRpbmc6MDtcclxufVxyXG4ubWFpbi1tZW51IGxpOmhvdmVyPmEsbmF2Lm1haW4tbWVudSBsaS5hY3RpdmU+YSwuZHJvcGRvd24tbWVudT5saT5hOmhvdmVyLC5kcm9wZG93bi1tZW51PmxpPmE6Zm9jdXMsLmRyb3Bkb3duLW1lbnU+LmFjdGl2ZT5hLC5kcm9wZG93bi1tZW51Pi5hY3RpdmU+YTpob3ZlciwuZHJvcGRvd24tbWVudT4uYWN0aXZlPmE6Zm9jdXMsLm5vLXRvdWNoIC5kYXNoYm9hcmQtcGFnZSBuYXYuZGFzaGJvYXJkLW1lbnUgdWwgbGk6aG92ZXIgYSwuZGFzaGJvYXJkLXBhZ2UgbmF2LmRhc2hib2FyZC1tZW51IHVsIGxpLmFjdGl2ZSBhIHtcclxuICBjb2xvcjojZmZmO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IzVmYTJkYjtcclxufVxyXG4uYXJlYSB7XHJcbiAgZmxvYXQ6IGxlZnQ7XHJcbiAgYmFja2dyb3VuZDogI2UyZTJlMjtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/components/sidebar/sidebar.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/sidebar/sidebar.component.ts ***!
  \*********************************************************/
/*! exports provided: SidebarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidebarComponent", function() { return SidebarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var angularx_social_login__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angularx-social-login */ "./node_modules/angularx-social-login/angularx-social-login.es5.js");



var SidebarComponent = /** @class */ (function () {
    function SidebarComponent(authService) {
        this.authService = authService;
    }
    SidebarComponent.prototype.ngOnInit = function () {
    };
    SidebarComponent.prototype.signOut = function () {
        this.authService.signOut();
        localStorage.clear();
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], SidebarComponent.prototype, "user", void 0);
    SidebarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-sidebar',
            template: __webpack_require__(/*! ./sidebar.component.html */ "./src/app/components/sidebar/sidebar.component.html"),
            styles: [__webpack_require__(/*! ./sidebar.component.scss */ "./src/app/components/sidebar/sidebar.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [angularx_social_login__WEBPACK_IMPORTED_MODULE_2__["AuthService"]])
    ], SidebarComponent);
    return SidebarComponent;
}());



/***/ }),

/***/ "./src/app/components/studio-creation/studio-creation.component.html":
/*!***************************************************************************!*\
  !*** ./src/app/components/studio-creation/studio-creation.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-horizontal-stepper labelPosition=\"bottom\" #stepper>\r\n  <mat-step>\r\n    <ng-template matStepLabel>List of your books</ng-template>\r\n\r\n\r\n    <ng-container *ngIf=\"visionChapters\">\r\n      <ng-template matStepLabel>Add A Chapter</ng-template>\r\n      <ng-container *ngIf=\"allChaptersOfBook\">\r\n        <table mat-table [dataSource]=\"allChaptersOfBook\" class=\"mat-elevation-z8\">\r\n\r\n          <!-- Symbol Column -->\r\n          <ng-container matColumnDef=\"title\">\r\n            <th mat-header-cell *matHeaderCellDef> Title</th>\r\n            <td mat-cell *matCellDef=\"let element\"> {{element.title}}</td>\r\n          </ng-container>\r\n\r\n          <!-- Symbol Column -->\r\n          <ng-container matColumnDef=\"creationDate\">\r\n            <th mat-header-cell *matHeaderCellDef> Created</th>\r\n            <td mat-cell *matCellDef=\"let element\"> {{element.creationDate }}</td>\r\n          </ng-container>\r\n\r\n          <!-- Symbol Column -->\r\n          <ng-container matColumnDef=\"actions\">\r\n            <th mat-header-cell *matHeaderCellDef> Actions</th>\r\n            <td mat-cell *matCellDef=\"let element\">\r\n              <button (click)=\"deleteBookChapter(element)\">Delete </button>\r\n              <button (click)=\"updateChapter(element)\">Edit </button>\r\n            </td>\r\n          </ng-container>\r\n\r\n          <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\r\n          <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\r\n        </table>\r\n      </ng-container>\r\n\r\n      <button (click)=\"stopVisionChapters()\">Close chapters list</button>\r\n    </ng-container>\r\n\r\n\r\n    <span class=\"component\">\r\n  <ng-container *ngFor=\"let book of allBookUser\">\r\n    <ul class=\"align\">\r\n      <li>\r\n        <figure class='book'>\r\n          <!-- Front -->\r\n          <ul class='hardcover_front'>\r\n            <li>\r\n              <img src=\"{{book.picture}}\" alt=\"\" width=\"100%\" height=\"100%\">\r\n            </li>\r\n            <li></li>\r\n          </ul>\r\n          <!-- Pages -->\r\n          <ul class='page'>\r\n            <li> <span class=\"title\">{{book.title}} </span> </li>\r\n            <li>\r\n              <button class=\"btn\" (click)=\"gotoBook(book)\">Consulter </button>\r\n              <button style=\"margin-top: 10px\" (click)=\"gotoCreationChapter(book)\">Add Chapter </button>\r\n              <button style=\"margin-top: 10px\" (click)=\"getChapters(book)\">See List chapters </button>\r\n              <button style=\"margin-top: 10px\" (click)=\"deleteBook(book)\">Delete </button>\r\n              <button style=\"margin-top: 10px\" (click)=\"updateBook(book)\">Edit </button>\r\n\r\n            </li>\r\n            <li></li>\r\n            <li></li>\r\n            <li></li>\r\n          </ul>\r\n          <!-- Back -->\r\n          <ul class='hardcover_back'>\r\n            <li></li>\r\n            <li></li>\r\n          </ul>\r\n          <ul class='book_spine'>\r\n            <li></li>\r\n            <li></li>\r\n          </ul>\r\n        </figure>\r\n      </li>\r\n    </ul>\r\n  </ng-container>\r\n</span>\r\n  </mat-step>\r\n  <mat-step>\r\n    <ng-template matStepLabel>Add A Book</ng-template>\r\n    <app-create-book (refreshEvent)=\"refresh()\"></app-create-book>\r\n  </mat-step>\r\n\r\n  <mat-step>\r\n    <ng-template matStepLabel>Add A Chapter</ng-template>\r\n    <ng-container *ngIf=\"!activatedBook\"> Click on a book button to add chapter a form will be appeared here\r\n      <button (click)=\"returnToBookList()\">Return book list</button>\r\n\r\n    </ng-container>\r\n\r\n    <ng-container *ngIf=\"activatedBook\">\r\n\r\n      <app-create-book-chapter [bookId]=\"activatedBook\"\r\n                               (terminateChapterCreation)=\"terminateChapterEdition($event)\">\r\n\r\n      </app-create-book-chapter>\r\n    </ng-container>\r\n  </mat-step>\r\n\r\n  <mat-step>\r\n    <ng-template matStepLabel>Edit Book</ng-template>\r\n    <ng-container *ngIf=\"!editABook\"> Click on a book button to edit book a form will be appeared here\r\n      <button (click)=\"returnToBookList()\">Return book list</button>\r\n    </ng-container>\r\n    <ng-container *ngIf=\"editABook\">\r\n      <app-create-book [bookExist]=\"editABook\" (refreshEvent)=\"refresh()\"></app-create-book>\r\n    </ng-container>\r\n  </mat-step>\r\n\r\n\r\n  <mat-step>\r\n    <ng-template matStepLabel>Edit A Chapter</ng-template>\r\n    <ng-container *ngIf=\"!editAChapter\"> Click on a list chapter of book to edit a chapter a form will be appeared here\r\n      <button (click)=\"returnToBookList()\">Return book list</button>\r\n    </ng-container>\r\n    <ng-container *ngIf=\"editAChapter\">\r\n      <app-create-book-chapter [bookId]=\"editAChapterBookSelected\"\r\n                               [chapterExist]=\"editAChapter\"\r\n                               (terminateChapterEdition)=\"terminateChapterEditionUpdate($event)\">\r\n\r\n      </app-create-book-chapter>\r\n    </ng-container>\r\n  </mat-step>\r\n</mat-horizontal-stepper>\r\n"

/***/ }),

/***/ "./src/app/components/studio-creation/studio-creation.component.scss":
/*!***************************************************************************!*\
  !*** ./src/app/components/studio-creation/studio-creation.component.scss ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "::ng-deep .mat-step-icon .mat-icon {\n  display: none !important; }\n\ntable {\n  width: 100%; }\n\n.component * {\n  display: inline-block; }\n\n.example-radio-group {\n  display: flex;\n  flex-direction: row;\n  margin: 15px 0; }\n\n.example-radio-button {\n  margin: 5px; }\n\nul {\n  margin: 0;\n  padding: 0;\n  list-style: none; }\n\na {\n  color: #2c3e50;\n  text-decoration: none; }\n\n.btn {\n  display: inline-block;\n  text-transform: uppercase;\n  border: 2px solid #2c3e50;\n  margin-top: 100px;\n  font-size: 0.9em;\n  font-weight: 700;\n  padding: 0.1em 0.4em;\n  text-align: center;\n  transition: color 0.3s, border-color 0.3s; }\n\n.title {\n  display: inline-block;\n  max-width: 80%;\n  margin-top: 12px;\n  text-transform: uppercase;\n  font-size: 1em;\n  word-wrap: break-word;\n  font-weight: 700;\n  text-align: center;\n  transition: color 0.3s, border-color 0.3s; }\n\n.btn:hover {\n  border-color: #16a085;\n  color: #16a085; }\n\n/* basic grid, only for this demo */\n\n.align {\n  clear: both;\n  max-width: 800px;\n  text-align: center; }\n\n.align > li {\n  width: 15%;\n  min-height: 0px;\n  display: inline-block;\n  margin: 30px 20px 30px 30px;\n  padding: 0 0 0 60px;\n  vertical-align: top; }\n\n/*\r\n\t1. container\r\n*/\n\n.book {\n  position: relative;\n  width: 160px;\n  height: 220px;\n  -webkit-perspective: 1000px;\n  perspective: 1000px;\n  -webkit-transform-style: preserve-3d;\n  transform-style: preserve-3d; }\n\n/*\r\n\t2. background & color\r\n*/\n\n/* HARDCOVER FRONT */\n\n.hardcover_front li:first-child {\n  background-color: #eee;\n  -webkit-backface-visibility: hidden;\n  backface-visibility: hidden; }\n\n/* reverse */\n\n.hardcover_front li:last-child {\n  background: #fffbec; }\n\n/* HARDCOVER BACK */\n\n.hardcover_back li:first-child {\n  background: #fffbec; }\n\n/* reverse */\n\n.hardcover_back li:last-child {\n  background: #fffbec; }\n\n.book_spine li:first-child {\n  background: #eee; }\n\n.book_spine li:last-child {\n  background: #333; }\n\n/* thickness of cover */\n\n.hardcover_front li:first-child:after,\n.hardcover_front li:first-child:before,\n.hardcover_front li:last-child:after,\n.hardcover_front li:last-child:before,\n.hardcover_back li:first-child:after,\n.hardcover_back li:first-child:before,\n.hardcover_back li:last-child:after,\n.hardcover_back li:last-child:before,\n.book_spine li:first-child:after,\n.book_spine li:first-child:before,\n.book_spine li:last-child:after,\n.book_spine li:last-child:before {\n  background: #999; }\n\n/* page */\n\n.page > li {\n  background: linear-gradient(left, #e1ddd8 0%, #fffbf6 100%);\n  box-shadow: inset 0px -1px 2px rgba(50, 50, 50, 0.1), inset -1px 0px 1px rgba(150, 150, 150, 0.2);\n  border-radius: 0px 5px 5px 0px; }\n\n/*\r\n\t3. opening cover, back cover and pages\r\n*/\n\n.hardcover_front {\n  -webkit-transform: rotateY(-34deg) translateZ(8px);\n  transform: rotateY(-34deg) translateZ(8px);\n  z-index: 100; }\n\n.hardcover_back {\n  -webkit-transform: rotateY(-15deg) translateZ(-8px);\n  transform: rotateY(-15deg) translateZ(-8px); }\n\n.page li:nth-child(1) {\n  -webkit-transform: rotateY(-28deg);\n  transform: rotateY(-28deg); }\n\n.page li:nth-child(2) {\n  -webkit-transform: rotateY(-30deg);\n  transform: rotateY(-30deg); }\n\n.page li:nth-child(3) {\n  -webkit-transform: rotateY(-32deg);\n  transform: rotateY(-32deg); }\n\n.page li:nth-child(4) {\n  -webkit-transform: rotateY(-34deg);\n  transform: rotateY(-34deg); }\n\n.page li:nth-child(5) {\n  -webkit-transform: rotateY(-36deg);\n  transform: rotateY(-36deg); }\n\n/*\r\n\t4. position, transform & transition\r\n*/\n\n.hardcover_front,\n.hardcover_back,\n.book_spine,\n.hardcover_front li,\n.hardcover_back li,\n.book_spine li {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  -webkit-transform-style: preserve-3d;\n  transform-style: preserve-3d; }\n\n.hardcover_front,\n.hardcover_back {\n  -webkit-transform-origin: 0% 100%;\n  transform-origin: 0% 100%; }\n\n.hardcover_front {\n  transition: all 0.8s ease, z-index 0.6s; }\n\n/* HARDCOVER front */\n\n.hardcover_front li:first-child {\n  cursor: default;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n      user-select: none;\n  -webkit-transform: translateZ(2px);\n  transform: translateZ(2px); }\n\n.hardcover_front li:last-child {\n  -webkit-transform: rotateY(180deg) translateZ(2px);\n  transform: rotateY(180deg) translateZ(2px); }\n\n/* HARDCOVER back */\n\n.hardcover_back li:first-child {\n  -webkit-transform: translateZ(2px);\n  transform: translateZ(2px); }\n\n.hardcover_back li:last-child {\n  -webkit-transform: translateZ(-2px);\n  transform: translateZ(-2px); }\n\n/* thickness of cover */\n\n.hardcover_front li:first-child:after,\n.hardcover_front li:first-child:before,\n.hardcover_front li:last-child:after,\n.hardcover_front li:last-child:before,\n.hardcover_back li:first-child:after,\n.hardcover_back li:first-child:before,\n.hardcover_back li:last-child:after,\n.hardcover_back li:last-child:before,\n.book_spine li:first-child:after,\n.book_spine li:first-child:before,\n.book_spine li:last-child:after,\n.book_spine li:last-child:before {\n  position: absolute;\n  top: 0;\n  left: 0; }\n\n/* HARDCOVER front */\n\n.hardcover_front li:first-child:after,\n.hardcover_front li:first-child:before {\n  width: 4px;\n  height: 100%; }\n\n.hardcover_front li:first-child:after {\n  -webkit-transform: rotateY(90deg) translateZ(-2px) translateX(2px);\n  transform: rotateY(90deg) translateZ(-2px) translateX(2px); }\n\n.hardcover_front li:first-child:before {\n  -webkit-transform: rotateY(90deg) translateZ(158px) translateX(2px);\n  transform: rotateY(90deg) translateZ(158px) translateX(2px); }\n\n.hardcover_front li:last-child:after,\n.hardcover_front li:last-child:before {\n  width: 4px;\n  height: 160px; }\n\n.hardcover_front li:last-child:after {\n  -webkit-transform: rotateX(90deg) rotateZ(90deg) translateZ(80px) translateX(-2px) translateY(-78px);\n  transform: rotateX(90deg) rotateZ(90deg) translateZ(80px) translateX(-2px) translateY(-78px); }\n\n.hardcover_front li:last-child:before {\n  box-shadow: 0px 0px 30px 5px #333;\n  -webkit-transform: rotateX(90deg) rotateZ(90deg) translateZ(-140px) translateX(-2px) translateY(-78px);\n  transform: rotateX(90deg) rotateZ(90deg) translateZ(-140px) translateX(-2px) translateY(-78px); }\n\n/* thickness of cover */\n\n.hardcover_back li:first-child:after,\n.hardcover_back li:first-child:before {\n  width: 4px;\n  height: 100%; }\n\n.hardcover_back li:first-child:after {\n  -webkit-transform: rotateY(90deg) translateZ(-2px) translateX(2px);\n  transform: rotateY(90deg) translateZ(-2px) translateX(2px); }\n\n.hardcover_back li:first-child:before {\n  -webkit-transform: rotateY(90deg) translateZ(158px) translateX(2px);\n  transform: rotateY(90deg) translateZ(158px) translateX(2px); }\n\n.hardcover_back li:last-child:after,\n.hardcover_back li:last-child:before {\n  width: 4px;\n  height: 160px; }\n\n.hardcover_back li:last-child:after {\n  -webkit-transform: rotateX(90deg) rotateZ(90deg) translateZ(80px) translateX(2px) translateY(-78px);\n  transform: rotateX(90deg) rotateZ(90deg) translateZ(80px) translateX(2px) translateY(-78px); }\n\n.hardcover_back li:last-child:before {\n  box-shadow: 10px -1px 80px 20px #666;\n  -webkit-transform: rotateX(90deg) rotateZ(90deg) translateZ(-140px) translateX(2px) translateY(-78px);\n  transform: rotateX(90deg) rotateZ(90deg) translateZ(-140px) translateX(2px) translateY(-78px); }\n\n/* BOOK SPINE */\n\n.book_spine {\n  -webkit-transform: rotateY(60deg) translateX(-5px) translateZ(-12px);\n  transform: rotateY(60deg) translateX(-5px) translateZ(-12px);\n  width: 16px;\n  z-index: 0; }\n\n.book_spine li:first-child {\n  -webkit-transform: translateZ(2px);\n  transform: translateZ(2px); }\n\n.book_spine li:last-child {\n  -webkit-transform: translateZ(-2px);\n  transform: translateZ(-2px); }\n\n/* thickness of book spine */\n\n.book_spine li:first-child:after,\n.book_spine li:first-child:before {\n  width: 4px;\n  height: 100%; }\n\n.book_spine li:first-child:after {\n  -webkit-transform: rotateY(90deg) translateZ(-2px) translateX(2px);\n  transform: rotateY(90deg) translateZ(-2px) translateX(2px); }\n\n.book_spine li:first-child:before {\n  -webkit-transform: rotateY(-90deg) translateZ(-12px);\n  transform: rotateY(-90deg) translateZ(-12px); }\n\n.book_spine li:last-child:after,\n.book_spine li:last-child:before {\n  width: 4px;\n  height: 16px; }\n\n.book_spine li:last-child:after {\n  -webkit-transform: rotateX(90deg) rotateZ(90deg) translateZ(8px) translateX(2px) translateY(-6px);\n  transform: rotateX(90deg) rotateZ(90deg) translateZ(8px) translateX(2px) translateY(-6px); }\n\n.book_spine li:last-child:before {\n  box-shadow: 5px -1px 100px 40px rgba(0, 0, 0, 0.2);\n  -webkit-transform: rotateX(90deg) rotateZ(90deg) translateZ(-210px) translateX(2px) translateY(-6px);\n  transform: rotateX(90deg) rotateZ(90deg) translateZ(-210px) translateX(2px) translateY(-6px); }\n\n.page,\n.page > li {\n  position: absolute;\n  top: 0;\n  left: 0;\n  -webkit-transform-style: preserve-3d;\n  transform-style: preserve-3d; }\n\n.page {\n  width: 100%;\n  height: 98%;\n  top: 1%;\n  left: 3%;\n  z-index: 10; }\n\n.page > li {\n  width: 100%;\n  height: 100%;\n  -webkit-transform-origin: left center;\n  transform-origin: left center;\n  transition-property: -webkit-transform;\n  transition-property: transform;\n  transition-property: transform, -webkit-transform;\n  transition-timing-function: ease; }\n\n.page > li:nth-child(1) {\n  transition-duration: 0.6s; }\n\n.page > li:nth-child(2) {\n  transition-duration: 0.6s; }\n\n.page > li:nth-child(3) {\n  transition-duration: 0.4s; }\n\n.page > li:nth-child(4) {\n  transition-duration: 0.5s; }\n\n.page > li:nth-child(5) {\n  transition-duration: 0.6s; }\n\n/*\r\n\t5. events\r\n*/\n\n.book:hover > .hardcover_front {\n  -webkit-transform: rotateY(-145deg) translateZ(0);\n  transform: rotateY(-145deg) translateZ(0);\n  z-index: 0; }\n\n.book:hover > .page li:nth-child(1) {\n  -webkit-transform: rotateY(-30deg);\n  transform: rotateY(-30deg);\n  transition-duration: 1.5s; }\n\n.book:hover > .page li:nth-child(2) {\n  -webkit-transform: rotateY(-35deg);\n  transform: rotateY(-35deg);\n  transition-duration: 1.8s; }\n\n.book:hover > .page li:nth-child(3) {\n  -webkit-transform: rotateY(-118deg);\n  transform: rotateY(-118deg);\n  transition-duration: 1.6s; }\n\n.book:hover > .page li:nth-child(4) {\n  -webkit-transform: rotateY(-130deg);\n  transform: rotateY(-130deg);\n  transition-duration: 1.4s; }\n\n.book:hover > .page li:nth-child(5) {\n  -webkit-transform: rotateY(-140deg);\n  transform: rotateY(-140deg);\n  transition-duration: 1.2s; }\n\n/*\r\n\t6. Bonus\r\n*/\n\n/* cover CSS */\n\n.coverDesign {\n  position: absolute;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  right: 0;\n  overflow: hidden;\n  -webkit-backface-visibility: hidden;\n  backface-visibility: hidden; }\n\n.coverDesign::after {\n  background-image: linear-gradient(-135deg, rgba(255, 255, 255, 0.45) 0%, transparent 100%);\n  position: absolute;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  right: 0; }\n\n.coverDesign h1 {\n  color: #fff;\n  font-size: 2.2em;\n  letter-spacing: 0.05em;\n  text-align: center;\n  margin: 54% 0 0 0;\n  text-shadow: -1px -1px 0 rgba(0, 0, 0, 0.1); }\n\n.coverDesign p {\n  color: #f8f8f8;\n  font-size: 1em;\n  text-align: center;\n  text-shadow: -1px -1px 0 rgba(0, 0, 0, 0.1); }\n\n.yellow {\n  background-color: #f1c40f;\n  background-image: linear-gradient(top, #f1c40f 58%, #e7ba07 0%); }\n\n.blue {\n  background-color: #3498db;\n  background-image: linear-gradient(top, #3498db 58%, #2a90d4 0%); }\n\n.grey {\n  background-color: #f8e9d1;\n  background-image: linear-gradient(top, #f8e9d1 58%, #e7d5b7 0%); }\n\n/* Media Queries */\n\n@media screen and (max-width: 37.8125em) {\n  .align > li {\n    width: 100%;\n    min-height: 440px;\n    height: auto;\n    padding: 0;\n    margin: 0 0 30px 0; }\n  .book {\n    margin: 0 auto; } }\n\n.list {\n  max-width: 550px;\n  margin-left: 30%; }\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9zdHVkaW8tY3JlYXRpb24vQzpcXFVzZXJzXFxDQVJET05cXERlc2t0b3BcXE1hc3RlciBDQ00gYW5uZWUgMVxcUHJvamV0XFxNeVJlYWRpbmdCb29rc1Byb2plY3Qvc3JjXFxhcHBcXGNvbXBvbmVudHNcXHN0dWRpby1jcmVhdGlvblxcc3R1ZGlvLWNyZWF0aW9uLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL3N0dWRpby1jcmVhdGlvbi9zdHVkaW8tY3JlYXRpb24uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx3QkFBd0IsRUFBQTs7QUFHMUI7RUFDRSxXQUFXLEVBQUE7O0FBRWI7RUFDRSxxQkFBcUIsRUFBQTs7QUFHdkI7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLGNBQWMsRUFBQTs7QUFHaEI7RUFDRSxXQUFXLEVBQUE7O0FBR2I7RUFDRSxTQUFTO0VBQ1QsVUFBVTtFQUNWLGdCQUFnQixFQUFBOztBQUdsQjtFQUNFLGNBQWM7RUFDZCxxQkFBcUIsRUFBQTs7QUFHdkI7RUFDRSxxQkFBcUI7RUFDckIseUJBQXlCO0VBQ3pCLHlCQUF5QjtFQUN6QixpQkFBaUI7RUFDakIsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtFQUNoQixvQkFBb0I7RUFDcEIsa0JBQWtCO0VBR2xCLHlDQUF5QyxFQUFBOztBQUczQztFQUNFLHFCQUFxQjtFQUNyQixjQUFjO0VBQ2QsZ0JBQWdCO0VBQ2hCLHlCQUF5QjtFQUN6QixjQUFjO0VBQ2QscUJBQXFCO0VBQ3JCLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFHbEIseUNBQXlDLEVBQUE7O0FBRzNDO0VBQ0UscUJBQXFCO0VBQ3JCLGNBQWMsRUFBQTs7QUFHaEIsbUNBQUE7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsZ0JBQWdCO0VBQ2hCLGtCQUFrQixFQUFBOztBQUdwQjtFQUNFLFVBQVU7RUFDVixlQUFlO0VBQ2YscUJBQXFCO0VBQ3JCLDJCQUEyQjtFQUMzQixtQkFBbUI7RUFDbkIsbUJBQW1CLEVBQUE7O0FBR3JCOztDQ1ZDOztBRGNEO0VBQ0Usa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixhQUFhO0VBQ2IsMkJBQTJCO0VBRTNCLG1CQUFtQjtFQUNuQixvQ0FBb0M7RUFFcEMsNEJBQTRCLEVBQUE7O0FBRzlCOztDQ1pDOztBRGdCRCxvQkFBQTs7QUFDQTtFQUNFLHNCQUFzQjtFQUN0QixtQ0FBbUM7RUFFbkMsMkJBQTJCLEVBQUE7O0FBRzdCLFlBQUE7O0FBQ0E7RUFDRSxtQkFBbUIsRUFBQTs7QUFHckIsbUJBQUE7O0FBQ0E7RUFDRSxtQkFBbUIsRUFBQTs7QUFHckIsWUFBQTs7QUFDQTtFQUNFLG1CQUFtQixFQUFBOztBQUdyQjtFQUNFLGdCQUFnQixFQUFBOztBQUdsQjtFQUNFLGdCQUFnQixFQUFBOztBQUdsQix1QkFBQTs7QUFFQTs7Ozs7Ozs7Ozs7O0VBWUUsZ0JBQWdCLEVBQUE7O0FBR2xCLFNBQUE7O0FBRUE7RUFJRSwyREFBMkQ7RUFDM0QsaUdBQWlHO0VBQ2pHLDhCQUE4QixFQUFBOztBQUdoQzs7Q0N2QkM7O0FEMkJEO0VBQ0Usa0RBQWtEO0VBRWxELDBDQUEwQztFQUMxQyxZQUFZLEVBQUE7O0FBR2Q7RUFDRSxtREFBbUQ7RUFFbkQsMkNBQTJDLEVBQUE7O0FBRzdDO0VBQ0Usa0NBQWtDO0VBRWxDLDBCQUEwQixFQUFBOztBQUc1QjtFQUNFLGtDQUFrQztFQUVsQywwQkFBMEIsRUFBQTs7QUFHNUI7RUFDRSxrQ0FBa0M7RUFFbEMsMEJBQTBCLEVBQUE7O0FBRzVCO0VBQ0Usa0NBQWtDO0VBRWxDLDBCQUEwQixFQUFBOztBQUc1QjtFQUNFLGtDQUFrQztFQUVsQywwQkFBMEIsRUFBQTs7QUFHNUI7O0NDL0JDOztBRG1DRDs7Ozs7O0VBTUUsa0JBQWtCO0VBQ2xCLE1BQU07RUFDTixPQUFPO0VBQ1AsV0FBVztFQUNYLFlBQVk7RUFDWixvQ0FBb0M7RUFFcEMsNEJBQTRCLEVBQUE7O0FBRzlCOztFQUVFLGlDQUFpQztFQUVqQyx5QkFBeUIsRUFBQTs7QUFHM0I7RUFHRSx1Q0FBdUMsRUFBQTs7QUFHekMsb0JBQUE7O0FBQ0E7RUFDRSxlQUFlO0VBQ2YseUJBQXlCO0VBQ3pCLHNCQUFzQjtFQUN0QixxQkFBaUI7TUFBakIsaUJBQWlCO0VBQ2pCLGtDQUFrQztFQUVsQywwQkFBMEIsRUFBQTs7QUFHNUI7RUFDRSxrREFBa0Q7RUFFbEQsMENBQTBDLEVBQUE7O0FBRzVDLG1CQUFBOztBQUNBO0VBQ0Usa0NBQWtDO0VBRWxDLDBCQUEwQixFQUFBOztBQUc1QjtFQUNFLG1DQUFtQztFQUVuQywyQkFBMkIsRUFBQTs7QUFHN0IsdUJBQUE7O0FBQ0E7Ozs7Ozs7Ozs7OztFQVlFLGtCQUFrQjtFQUNsQixNQUFNO0VBQ04sT0FBTyxFQUFBOztBQUdULG9CQUFBOztBQUNBOztFQUVFLFVBQVU7RUFDVixZQUFZLEVBQUE7O0FBR2Q7RUFDRSxrRUFBa0U7RUFFbEUsMERBQTBELEVBQUE7O0FBRzVEO0VBQ0UsbUVBQW1FO0VBRW5FLDJEQUEyRCxFQUFBOztBQUc3RDs7RUFFRSxVQUFVO0VBQ1YsYUFBYSxFQUFBOztBQUdmO0VBQ0Usb0dBQW9HO0VBRXBHLDRGQUE0RixFQUFBOztBQUc5RjtFQUNFLGlDQUFpQztFQUNqQyxzR0FBc0c7RUFFdEcsOEZBQThGLEVBQUE7O0FBR2hHLHVCQUFBOztBQUVBOztFQUVFLFVBQVU7RUFDVixZQUFZLEVBQUE7O0FBR2Q7RUFDRSxrRUFBa0U7RUFFbEUsMERBQTBELEVBQUE7O0FBRzVEO0VBQ0UsbUVBQW1FO0VBRW5FLDJEQUEyRCxFQUFBOztBQUc3RDs7RUFFRSxVQUFVO0VBQ1YsYUFBYSxFQUFBOztBQUdmO0VBQ0UsbUdBQW1HO0VBRW5HLDJGQUEyRixFQUFBOztBQUc3RjtFQUNFLG9DQUFvQztFQUNwQyxxR0FBcUc7RUFFckcsNkZBQTZGLEVBQUE7O0FBRy9GLGVBQUE7O0FBQ0E7RUFDRSxvRUFBb0U7RUFFcEUsNERBQTREO0VBQzVELFdBQVc7RUFDWCxVQUFVLEVBQUE7O0FBR1o7RUFDRSxrQ0FBa0M7RUFFbEMsMEJBQTBCLEVBQUE7O0FBRzVCO0VBQ0UsbUNBQW1DO0VBRW5DLDJCQUEyQixFQUFBOztBQUc3Qiw0QkFBQTs7QUFDQTs7RUFFRSxVQUFVO0VBQ1YsWUFBWSxFQUFBOztBQUdkO0VBQ0Usa0VBQWtFO0VBRWxFLDBEQUEwRCxFQUFBOztBQUc1RDtFQUNFLG9EQUFvRDtFQUVwRCw0Q0FBNEMsRUFBQTs7QUFHOUM7O0VBRUUsVUFBVTtFQUNWLFlBQVksRUFBQTs7QUFHZDtFQUNFLGlHQUFpRztFQUVqRyx5RkFBeUYsRUFBQTs7QUFHM0Y7RUFDRSxrREFBa0Q7RUFDbEQsb0dBQW9HO0VBRXBHLDRGQUE0RixFQUFBOztBQUc5Rjs7RUFFRSxrQkFBa0I7RUFDbEIsTUFBTTtFQUNOLE9BQU87RUFDUCxvQ0FBb0M7RUFFcEMsNEJBQTRCLEVBQUE7O0FBRzlCO0VBQ0UsV0FBVztFQUNYLFdBQVc7RUFDWCxPQUFPO0VBQ1AsUUFBUTtFQUNSLFdBQVcsRUFBQTs7QUFHYjtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1oscUNBQXFDO0VBRXJDLDZCQUE2QjtFQUc3QixzQ0FBOEI7RUFBOUIsOEJBQThCO0VBQTlCLGlEQUE4QjtFQUc5QixnQ0FBZ0MsRUFBQTs7QUFHbEM7RUFHRSx5QkFBeUIsRUFBQTs7QUFHM0I7RUFHRSx5QkFBeUIsRUFBQTs7QUFHM0I7RUFHRSx5QkFBeUIsRUFBQTs7QUFHM0I7RUFHRSx5QkFBeUIsRUFBQTs7QUFHM0I7RUFHRSx5QkFBeUIsRUFBQTs7QUFHM0I7O0NDdEVDOztBRDBFRDtFQUNFLGlEQUFpRDtFQUVqRCx5Q0FBeUM7RUFDekMsVUFBVSxFQUFBOztBQUdaO0VBQ0Usa0NBQWtDO0VBRWxDLDBCQUEwQjtFQUcxQix5QkFBeUIsRUFBQTs7QUFHM0I7RUFDRSxrQ0FBa0M7RUFFbEMsMEJBQTBCO0VBRzFCLHlCQUF5QixFQUFBOztBQUczQjtFQUNFLG1DQUFtQztFQUVuQywyQkFBMkI7RUFHM0IseUJBQXlCLEVBQUE7O0FBRzNCO0VBQ0UsbUNBQW1DO0VBRW5DLDJCQUEyQjtFQUczQix5QkFBeUIsRUFBQTs7QUFHM0I7RUFDRSxtQ0FBbUM7RUFFbkMsMkJBQTJCO0VBRzNCLHlCQUF5QixFQUFBOztBQUczQjs7Q0M3RUM7O0FEaUZELGNBQUE7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsTUFBTTtFQUNOLE9BQU87RUFDUCxTQUFTO0VBQ1QsUUFBUTtFQUNSLGdCQUFnQjtFQUNoQixtQ0FBbUM7RUFFbkMsMkJBQTJCLEVBQUE7O0FBRzdCO0VBR0UsMEZBQTBGO0VBQzFGLGtCQUFrQjtFQUNsQixNQUFNO0VBQ04sT0FBTztFQUNQLFNBQVM7RUFDVCxRQUFRLEVBQUE7O0FBR1Y7RUFDRSxXQUFXO0VBQ1gsZ0JBQWdCO0VBQ2hCLHNCQUFzQjtFQUN0QixrQkFBa0I7RUFDbEIsaUJBQWlCO0VBQ2pCLDJDQUEyQyxFQUFBOztBQUc3QztFQUNFLGNBQWM7RUFDZCxjQUFjO0VBQ2Qsa0JBQWtCO0VBQ2xCLDJDQUEyQyxFQUFBOztBQUc3QztFQUNFLHlCQUF5QjtFQUd6QiwrREFBK0QsRUFBQTs7QUFHakU7RUFDRSx5QkFBeUI7RUFHekIsK0RBQStELEVBQUE7O0FBR2pFO0VBQ0UseUJBQXlCO0VBR3pCLCtEQUErRCxFQUFBOztBQUdqRSxrQkFBQTs7QUFDQTtFQUNFO0lBQ0UsV0FBVztJQUNYLGlCQUFpQjtJQUNqQixZQUFZO0lBQ1osVUFBVTtJQUNWLGtCQUFrQixFQUFBO0VBR3BCO0lBQ0UsY0FBYyxFQUFBLEVBQ2Y7O0FBR0g7RUFDRSxnQkFBZ0I7RUFDaEIsZ0JBQWdCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3N0dWRpby1jcmVhdGlvbi9zdHVkaW8tY3JlYXRpb24uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6Om5nLWRlZXAgLm1hdC1zdGVwLWljb24gLm1hdC1pY29uIHtcclxuICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbnRhYmxlIHtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG4uY29tcG9uZW50ICoge1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxufVxyXG5cclxuLmV4YW1wbGUtcmFkaW8tZ3JvdXAge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICBtYXJnaW46IDE1cHggMDtcclxufVxyXG5cclxuLmV4YW1wbGUtcmFkaW8tYnV0dG9uIHtcclxuICBtYXJnaW46IDVweDtcclxufVxyXG5cclxudWwge1xyXG4gIG1hcmdpbjogMDtcclxuICBwYWRkaW5nOiAwO1xyXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbn1cclxuXHJcbmEge1xyXG4gIGNvbG9yOiAjMmMzZTUwO1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxufVxyXG5cclxuLmJ0biB7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgYm9yZGVyOiAycHggc29saWQgIzJjM2U1MDtcclxuICBtYXJnaW4tdG9wOiAxMDBweDtcclxuICBmb250LXNpemU6IDAuOWVtO1xyXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgcGFkZGluZzogMC4xZW0gMC40ZW07XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIC13ZWJraXQtdHJhbnNpdGlvbjogY29sb3IgMC4zcywgYm9yZGVyLWNvbG9yIDAuM3M7XHJcbiAgLW1vei10cmFuc2l0aW9uOiBjb2xvciAwLjNzLCBib3JkZXItY29sb3IgMC4zcztcclxuICB0cmFuc2l0aW9uOiBjb2xvciAwLjNzLCBib3JkZXItY29sb3IgMC4zcztcclxufVxyXG5cclxuLnRpdGxlIHtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgbWF4LXdpZHRoOiA4MCU7XHJcbiAgbWFyZ2luLXRvcDogMTJweDtcclxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gIGZvbnQtc2l6ZTogMWVtO1xyXG4gIHdvcmQtd3JhcDogYnJlYWstd29yZDtcclxuICBmb250LXdlaWdodDogNzAwO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAtd2Via2l0LXRyYW5zaXRpb246IGNvbG9yIDAuM3MsIGJvcmRlci1jb2xvciAwLjNzO1xyXG4gIC1tb3otdHJhbnNpdGlvbjogY29sb3IgMC4zcywgYm9yZGVyLWNvbG9yIDAuM3M7XHJcbiAgdHJhbnNpdGlvbjogY29sb3IgMC4zcywgYm9yZGVyLWNvbG9yIDAuM3M7XHJcbn1cclxuXHJcbi5idG46aG92ZXIge1xyXG4gIGJvcmRlci1jb2xvcjogIzE2YTA4NTtcclxuICBjb2xvcjogIzE2YTA4NTtcclxufVxyXG5cclxuLyogYmFzaWMgZ3JpZCwgb25seSBmb3IgdGhpcyBkZW1vICovXHJcblxyXG4uYWxpZ24ge1xyXG4gIGNsZWFyOiBib3RoO1xyXG4gIG1heC13aWR0aDogODAwcHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4uYWxpZ24gPiBsaSB7XHJcbiAgd2lkdGg6IDE1JTtcclxuICBtaW4taGVpZ2h0OiAwcHg7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIG1hcmdpbjogMzBweCAyMHB4IDMwcHggMzBweDtcclxuICBwYWRkaW5nOiAwIDAgMCA2MHB4O1xyXG4gIHZlcnRpY2FsLWFsaWduOiB0b3A7XHJcbn1cclxuXHJcbi8qXHJcblx0MS4gY29udGFpbmVyXHJcbiovXHJcblxyXG4uYm9vayB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHdpZHRoOiAxNjBweDtcclxuICBoZWlnaHQ6IDIyMHB4O1xyXG4gIC13ZWJraXQtcGVyc3BlY3RpdmU6IDEwMDBweDtcclxuICAtbW96LXBlcnNwZWN0aXZlOiAxMDAwcHg7XHJcbiAgcGVyc3BlY3RpdmU6IDEwMDBweDtcclxuICAtd2Via2l0LXRyYW5zZm9ybS1zdHlsZTogcHJlc2VydmUtM2Q7XHJcbiAgLW1vei10cmFuc2Zvcm0tc3R5bGU6IHByZXNlcnZlLTNkO1xyXG4gIHRyYW5zZm9ybS1zdHlsZTogcHJlc2VydmUtM2Q7XHJcbn1cclxuXHJcbi8qXHJcblx0Mi4gYmFja2dyb3VuZCAmIGNvbG9yXHJcbiovXHJcblxyXG4vKiBIQVJEQ09WRVIgRlJPTlQgKi9cclxuLmhhcmRjb3Zlcl9mcm9udCBsaTpmaXJzdC1jaGlsZCB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VlZTtcclxuICAtd2Via2l0LWJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjtcclxuICAtbW96LWJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjtcclxuICBiYWNrZmFjZS12aXNpYmlsaXR5OiBoaWRkZW47XHJcbn1cclxuXHJcbi8qIHJldmVyc2UgKi9cclxuLmhhcmRjb3Zlcl9mcm9udCBsaTpsYXN0LWNoaWxkIHtcclxuICBiYWNrZ3JvdW5kOiAjZmZmYmVjO1xyXG59XHJcblxyXG4vKiBIQVJEQ09WRVIgQkFDSyAqL1xyXG4uaGFyZGNvdmVyX2JhY2sgbGk6Zmlyc3QtY2hpbGQge1xyXG4gIGJhY2tncm91bmQ6ICNmZmZiZWM7XHJcbn1cclxuXHJcbi8qIHJldmVyc2UgKi9cclxuLmhhcmRjb3Zlcl9iYWNrIGxpOmxhc3QtY2hpbGQge1xyXG4gIGJhY2tncm91bmQ6ICNmZmZiZWM7XHJcbn1cclxuXHJcbi5ib29rX3NwaW5lIGxpOmZpcnN0LWNoaWxkIHtcclxuICBiYWNrZ3JvdW5kOiAjZWVlO1xyXG59XHJcblxyXG4uYm9va19zcGluZSBsaTpsYXN0LWNoaWxkIHtcclxuICBiYWNrZ3JvdW5kOiAjMzMzO1xyXG59XHJcblxyXG4vKiB0aGlja25lc3Mgb2YgY292ZXIgKi9cclxuXHJcbi5oYXJkY292ZXJfZnJvbnQgbGk6Zmlyc3QtY2hpbGQ6YWZ0ZXIsXHJcbi5oYXJkY292ZXJfZnJvbnQgbGk6Zmlyc3QtY2hpbGQ6YmVmb3JlLFxyXG4uaGFyZGNvdmVyX2Zyb250IGxpOmxhc3QtY2hpbGQ6YWZ0ZXIsXHJcbi5oYXJkY292ZXJfZnJvbnQgbGk6bGFzdC1jaGlsZDpiZWZvcmUsXHJcbi5oYXJkY292ZXJfYmFjayBsaTpmaXJzdC1jaGlsZDphZnRlcixcclxuLmhhcmRjb3Zlcl9iYWNrIGxpOmZpcnN0LWNoaWxkOmJlZm9yZSxcclxuLmhhcmRjb3Zlcl9iYWNrIGxpOmxhc3QtY2hpbGQ6YWZ0ZXIsXHJcbi5oYXJkY292ZXJfYmFjayBsaTpsYXN0LWNoaWxkOmJlZm9yZSxcclxuLmJvb2tfc3BpbmUgbGk6Zmlyc3QtY2hpbGQ6YWZ0ZXIsXHJcbi5ib29rX3NwaW5lIGxpOmZpcnN0LWNoaWxkOmJlZm9yZSxcclxuLmJvb2tfc3BpbmUgbGk6bGFzdC1jaGlsZDphZnRlcixcclxuLmJvb2tfc3BpbmUgbGk6bGFzdC1jaGlsZDpiZWZvcmUge1xyXG4gIGJhY2tncm91bmQ6ICM5OTk7XHJcbn1cclxuXHJcbi8qIHBhZ2UgKi9cclxuXHJcbi5wYWdlID4gbGkge1xyXG4gIGJhY2tncm91bmQ6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KGxlZnQsICNlMWRkZDggMCUsICNmZmZiZjYgMTAwJSk7XHJcbiAgYmFja2dyb3VuZDogLW1vei1saW5lYXItZ3JhZGllbnQobGVmdCwgI2UxZGRkOCAwJSwgI2ZmZmJmNiAxMDAlKTtcclxuICBiYWNrZ3JvdW5kOiAtbXMtbGluZWFyLWdyYWRpZW50KGxlZnQsICNlMWRkZDggMCUsICNmZmZiZjYgMTAwJSk7XHJcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KGxlZnQsICNlMWRkZDggMCUsICNmZmZiZjYgMTAwJSk7XHJcbiAgYm94LXNoYWRvdzogaW5zZXQgMHB4IC0xcHggMnB4IHJnYmEoNTAsIDUwLCA1MCwgMC4xKSwgaW5zZXQgLTFweCAwcHggMXB4IHJnYmEoMTUwLCAxNTAsIDE1MCwgMC4yKTtcclxuICBib3JkZXItcmFkaXVzOiAwcHggNXB4IDVweCAwcHg7XHJcbn1cclxuXHJcbi8qXHJcblx0My4gb3BlbmluZyBjb3ZlciwgYmFjayBjb3ZlciBhbmQgcGFnZXNcclxuKi9cclxuXHJcbi5oYXJkY292ZXJfZnJvbnQge1xyXG4gIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGVZKC0zNGRlZykgdHJhbnNsYXRlWig4cHgpO1xyXG4gIC1tb3otdHJhbnNmb3JtOiByb3RhdGVZKC0zNGRlZykgdHJhbnNsYXRlWig4cHgpO1xyXG4gIHRyYW5zZm9ybTogcm90YXRlWSgtMzRkZWcpIHRyYW5zbGF0ZVooOHB4KTtcclxuICB6LWluZGV4OiAxMDA7XHJcbn1cclxuXHJcbi5oYXJkY292ZXJfYmFjayB7XHJcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZVkoLTE1ZGVnKSB0cmFuc2xhdGVaKC04cHgpO1xyXG4gIC1tb3otdHJhbnNmb3JtOiByb3RhdGVZKC0xNWRlZykgdHJhbnNsYXRlWigtOHB4KTtcclxuICB0cmFuc2Zvcm06IHJvdGF0ZVkoLTE1ZGVnKSB0cmFuc2xhdGVaKC04cHgpO1xyXG59XHJcblxyXG4ucGFnZSBsaTpudGgtY2hpbGQoMSkge1xyXG4gIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGVZKC0yOGRlZyk7XHJcbiAgLW1vei10cmFuc2Zvcm06IHJvdGF0ZVkoLTI4ZGVnKTtcclxuICB0cmFuc2Zvcm06IHJvdGF0ZVkoLTI4ZGVnKTtcclxufVxyXG5cclxuLnBhZ2UgbGk6bnRoLWNoaWxkKDIpIHtcclxuICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlWSgtMzBkZWcpO1xyXG4gIC1tb3otdHJhbnNmb3JtOiByb3RhdGVZKC0zMGRlZyk7XHJcbiAgdHJhbnNmb3JtOiByb3RhdGVZKC0zMGRlZyk7XHJcbn1cclxuXHJcbi5wYWdlIGxpOm50aC1jaGlsZCgzKSB7XHJcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZVkoLTMyZGVnKTtcclxuICAtbW96LXRyYW5zZm9ybTogcm90YXRlWSgtMzJkZWcpO1xyXG4gIHRyYW5zZm9ybTogcm90YXRlWSgtMzJkZWcpO1xyXG59XHJcblxyXG4ucGFnZSBsaTpudGgtY2hpbGQoNCkge1xyXG4gIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGVZKC0zNGRlZyk7XHJcbiAgLW1vei10cmFuc2Zvcm06IHJvdGF0ZVkoLTM0ZGVnKTtcclxuICB0cmFuc2Zvcm06IHJvdGF0ZVkoLTM0ZGVnKTtcclxufVxyXG5cclxuLnBhZ2UgbGk6bnRoLWNoaWxkKDUpIHtcclxuICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlWSgtMzZkZWcpO1xyXG4gIC1tb3otdHJhbnNmb3JtOiByb3RhdGVZKC0zNmRlZyk7XHJcbiAgdHJhbnNmb3JtOiByb3RhdGVZKC0zNmRlZyk7XHJcbn1cclxuXHJcbi8qXHJcblx0NC4gcG9zaXRpb24sIHRyYW5zZm9ybSAmIHRyYW5zaXRpb25cclxuKi9cclxuXHJcbi5oYXJkY292ZXJfZnJvbnQsXHJcbi5oYXJkY292ZXJfYmFjayxcclxuLmJvb2tfc3BpbmUsXHJcbi5oYXJkY292ZXJfZnJvbnQgbGksXHJcbi5oYXJkY292ZXJfYmFjayBsaSxcclxuLmJvb2tfc3BpbmUgbGkge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDA7XHJcbiAgbGVmdDogMDtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgLXdlYmtpdC10cmFuc2Zvcm0tc3R5bGU6IHByZXNlcnZlLTNkO1xyXG4gIC1tb3otdHJhbnNmb3JtLXN0eWxlOiBwcmVzZXJ2ZS0zZDtcclxuICB0cmFuc2Zvcm0tc3R5bGU6IHByZXNlcnZlLTNkO1xyXG59XHJcblxyXG4uaGFyZGNvdmVyX2Zyb250LFxyXG4uaGFyZGNvdmVyX2JhY2sge1xyXG4gIC13ZWJraXQtdHJhbnNmb3JtLW9yaWdpbjogMCUgMTAwJTtcclxuICAtbW96LXRyYW5zZm9ybS1vcmlnaW46IDAlIDEwMCU7XHJcbiAgdHJhbnNmb3JtLW9yaWdpbjogMCUgMTAwJTtcclxufVxyXG5cclxuLmhhcmRjb3Zlcl9mcm9udCB7XHJcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC44cyBlYXNlLCB6LWluZGV4IDAuNnM7XHJcbiAgLW1vei10cmFuc2l0aW9uOiBhbGwgMC44cyBlYXNlLCB6LWluZGV4IDAuNnM7XHJcbiAgdHJhbnNpdGlvbjogYWxsIDAuOHMgZWFzZSwgei1pbmRleCAwLjZzO1xyXG59XHJcblxyXG4vKiBIQVJEQ09WRVIgZnJvbnQgKi9cclxuLmhhcmRjb3Zlcl9mcm9udCBsaTpmaXJzdC1jaGlsZCB7XHJcbiAgY3Vyc29yOiBkZWZhdWx0O1xyXG4gIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgLW1vei11c2VyLXNlbGVjdDogbm9uZTtcclxuICB1c2VyLXNlbGVjdDogbm9uZTtcclxuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWigycHgpO1xyXG4gIC1tb3otdHJhbnNmb3JtOiB0cmFuc2xhdGVaKDJweCk7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVaKDJweCk7XHJcbn1cclxuXHJcbi5oYXJkY292ZXJfZnJvbnQgbGk6bGFzdC1jaGlsZCB7XHJcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZVkoMTgwZGVnKSB0cmFuc2xhdGVaKDJweCk7XHJcbiAgLW1vei10cmFuc2Zvcm06IHJvdGF0ZVkoMTgwZGVnKSB0cmFuc2xhdGVaKDJweCk7XHJcbiAgdHJhbnNmb3JtOiByb3RhdGVZKDE4MGRlZykgdHJhbnNsYXRlWigycHgpO1xyXG59XHJcblxyXG4vKiBIQVJEQ09WRVIgYmFjayAqL1xyXG4uaGFyZGNvdmVyX2JhY2sgbGk6Zmlyc3QtY2hpbGQge1xyXG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVaKDJweCk7XHJcbiAgLW1vei10cmFuc2Zvcm06IHRyYW5zbGF0ZVooMnB4KTtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVooMnB4KTtcclxufVxyXG5cclxuLmhhcmRjb3Zlcl9iYWNrIGxpOmxhc3QtY2hpbGQge1xyXG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVaKC0ycHgpO1xyXG4gIC1tb3otdHJhbnNmb3JtOiB0cmFuc2xhdGVaKC0ycHgpO1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWigtMnB4KTtcclxufVxyXG5cclxuLyogdGhpY2tuZXNzIG9mIGNvdmVyICovXHJcbi5oYXJkY292ZXJfZnJvbnQgbGk6Zmlyc3QtY2hpbGQ6YWZ0ZXIsXHJcbi5oYXJkY292ZXJfZnJvbnQgbGk6Zmlyc3QtY2hpbGQ6YmVmb3JlLFxyXG4uaGFyZGNvdmVyX2Zyb250IGxpOmxhc3QtY2hpbGQ6YWZ0ZXIsXHJcbi5oYXJkY292ZXJfZnJvbnQgbGk6bGFzdC1jaGlsZDpiZWZvcmUsXHJcbi5oYXJkY292ZXJfYmFjayBsaTpmaXJzdC1jaGlsZDphZnRlcixcclxuLmhhcmRjb3Zlcl9iYWNrIGxpOmZpcnN0LWNoaWxkOmJlZm9yZSxcclxuLmhhcmRjb3Zlcl9iYWNrIGxpOmxhc3QtY2hpbGQ6YWZ0ZXIsXHJcbi5oYXJkY292ZXJfYmFjayBsaTpsYXN0LWNoaWxkOmJlZm9yZSxcclxuLmJvb2tfc3BpbmUgbGk6Zmlyc3QtY2hpbGQ6YWZ0ZXIsXHJcbi5ib29rX3NwaW5lIGxpOmZpcnN0LWNoaWxkOmJlZm9yZSxcclxuLmJvb2tfc3BpbmUgbGk6bGFzdC1jaGlsZDphZnRlcixcclxuLmJvb2tfc3BpbmUgbGk6bGFzdC1jaGlsZDpiZWZvcmUge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDA7XHJcbiAgbGVmdDogMDtcclxufVxyXG5cclxuLyogSEFSRENPVkVSIGZyb250ICovXHJcbi5oYXJkY292ZXJfZnJvbnQgbGk6Zmlyc3QtY2hpbGQ6YWZ0ZXIsXHJcbi5oYXJkY292ZXJfZnJvbnQgbGk6Zmlyc3QtY2hpbGQ6YmVmb3JlIHtcclxuICB3aWR0aDogNHB4O1xyXG4gIGhlaWdodDogMTAwJTtcclxufVxyXG5cclxuLmhhcmRjb3Zlcl9mcm9udCBsaTpmaXJzdC1jaGlsZDphZnRlciB7XHJcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZVkoOTBkZWcpIHRyYW5zbGF0ZVooLTJweCkgdHJhbnNsYXRlWCgycHgpO1xyXG4gIC1tb3otdHJhbnNmb3JtOiByb3RhdGVZKDkwZGVnKSB0cmFuc2xhdGVaKC0ycHgpIHRyYW5zbGF0ZVgoMnB4KTtcclxuICB0cmFuc2Zvcm06IHJvdGF0ZVkoOTBkZWcpIHRyYW5zbGF0ZVooLTJweCkgdHJhbnNsYXRlWCgycHgpO1xyXG59XHJcblxyXG4uaGFyZGNvdmVyX2Zyb250IGxpOmZpcnN0LWNoaWxkOmJlZm9yZSB7XHJcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZVkoOTBkZWcpIHRyYW5zbGF0ZVooMTU4cHgpIHRyYW5zbGF0ZVgoMnB4KTtcclxuICAtbW96LXRyYW5zZm9ybTogcm90YXRlWSg5MGRlZykgdHJhbnNsYXRlWigxNThweCkgdHJhbnNsYXRlWCgycHgpO1xyXG4gIHRyYW5zZm9ybTogcm90YXRlWSg5MGRlZykgdHJhbnNsYXRlWigxNThweCkgdHJhbnNsYXRlWCgycHgpO1xyXG59XHJcblxyXG4uaGFyZGNvdmVyX2Zyb250IGxpOmxhc3QtY2hpbGQ6YWZ0ZXIsXHJcbi5oYXJkY292ZXJfZnJvbnQgbGk6bGFzdC1jaGlsZDpiZWZvcmUge1xyXG4gIHdpZHRoOiA0cHg7XHJcbiAgaGVpZ2h0OiAxNjBweDtcclxufVxyXG5cclxuLmhhcmRjb3Zlcl9mcm9udCBsaTpsYXN0LWNoaWxkOmFmdGVyIHtcclxuICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlWCg5MGRlZykgcm90YXRlWig5MGRlZykgdHJhbnNsYXRlWig4MHB4KSB0cmFuc2xhdGVYKC0ycHgpIHRyYW5zbGF0ZVkoLTc4cHgpO1xyXG4gIC1tb3otdHJhbnNmb3JtOiByb3RhdGVYKDkwZGVnKSByb3RhdGVaKDkwZGVnKSB0cmFuc2xhdGVaKDgwcHgpIHRyYW5zbGF0ZVgoLTJweCkgdHJhbnNsYXRlWSgtNzhweCk7XHJcbiAgdHJhbnNmb3JtOiByb3RhdGVYKDkwZGVnKSByb3RhdGVaKDkwZGVnKSB0cmFuc2xhdGVaKDgwcHgpIHRyYW5zbGF0ZVgoLTJweCkgdHJhbnNsYXRlWSgtNzhweCk7XHJcbn1cclxuXHJcbi5oYXJkY292ZXJfZnJvbnQgbGk6bGFzdC1jaGlsZDpiZWZvcmUge1xyXG4gIGJveC1zaGFkb3c6IDBweCAwcHggMzBweCA1cHggIzMzMztcclxuICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlWCg5MGRlZykgcm90YXRlWig5MGRlZykgdHJhbnNsYXRlWigtMTQwcHgpIHRyYW5zbGF0ZVgoLTJweCkgdHJhbnNsYXRlWSgtNzhweCk7XHJcbiAgLW1vei10cmFuc2Zvcm06IHJvdGF0ZVgoOTBkZWcpIHJvdGF0ZVooOTBkZWcpIHRyYW5zbGF0ZVooLTE0MHB4KSB0cmFuc2xhdGVYKC0ycHgpIHRyYW5zbGF0ZVkoLTc4cHgpO1xyXG4gIHRyYW5zZm9ybTogcm90YXRlWCg5MGRlZykgcm90YXRlWig5MGRlZykgdHJhbnNsYXRlWigtMTQwcHgpIHRyYW5zbGF0ZVgoLTJweCkgdHJhbnNsYXRlWSgtNzhweCk7XHJcbn1cclxuXHJcbi8qIHRoaWNrbmVzcyBvZiBjb3ZlciAqL1xyXG5cclxuLmhhcmRjb3Zlcl9iYWNrIGxpOmZpcnN0LWNoaWxkOmFmdGVyLFxyXG4uaGFyZGNvdmVyX2JhY2sgbGk6Zmlyc3QtY2hpbGQ6YmVmb3JlIHtcclxuICB3aWR0aDogNHB4O1xyXG4gIGhlaWdodDogMTAwJTtcclxufVxyXG5cclxuLmhhcmRjb3Zlcl9iYWNrIGxpOmZpcnN0LWNoaWxkOmFmdGVyIHtcclxuICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlWSg5MGRlZykgdHJhbnNsYXRlWigtMnB4KSB0cmFuc2xhdGVYKDJweCk7XHJcbiAgLW1vei10cmFuc2Zvcm06IHJvdGF0ZVkoOTBkZWcpIHRyYW5zbGF0ZVooLTJweCkgdHJhbnNsYXRlWCgycHgpO1xyXG4gIHRyYW5zZm9ybTogcm90YXRlWSg5MGRlZykgdHJhbnNsYXRlWigtMnB4KSB0cmFuc2xhdGVYKDJweCk7XHJcbn1cclxuXHJcbi5oYXJkY292ZXJfYmFjayBsaTpmaXJzdC1jaGlsZDpiZWZvcmUge1xyXG4gIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGVZKDkwZGVnKSB0cmFuc2xhdGVaKDE1OHB4KSB0cmFuc2xhdGVYKDJweCk7XHJcbiAgLW1vei10cmFuc2Zvcm06IHJvdGF0ZVkoOTBkZWcpIHRyYW5zbGF0ZVooMTU4cHgpIHRyYW5zbGF0ZVgoMnB4KTtcclxuICB0cmFuc2Zvcm06IHJvdGF0ZVkoOTBkZWcpIHRyYW5zbGF0ZVooMTU4cHgpIHRyYW5zbGF0ZVgoMnB4KTtcclxufVxyXG5cclxuLmhhcmRjb3Zlcl9iYWNrIGxpOmxhc3QtY2hpbGQ6YWZ0ZXIsXHJcbi5oYXJkY292ZXJfYmFjayBsaTpsYXN0LWNoaWxkOmJlZm9yZSB7XHJcbiAgd2lkdGg6IDRweDtcclxuICBoZWlnaHQ6IDE2MHB4O1xyXG59XHJcblxyXG4uaGFyZGNvdmVyX2JhY2sgbGk6bGFzdC1jaGlsZDphZnRlciB7XHJcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZVgoOTBkZWcpIHJvdGF0ZVooOTBkZWcpIHRyYW5zbGF0ZVooODBweCkgdHJhbnNsYXRlWCgycHgpIHRyYW5zbGF0ZVkoLTc4cHgpO1xyXG4gIC1tb3otdHJhbnNmb3JtOiByb3RhdGVYKDkwZGVnKSByb3RhdGVaKDkwZGVnKSB0cmFuc2xhdGVaKDgwcHgpIHRyYW5zbGF0ZVgoMnB4KSB0cmFuc2xhdGVZKC03OHB4KTtcclxuICB0cmFuc2Zvcm06IHJvdGF0ZVgoOTBkZWcpIHJvdGF0ZVooOTBkZWcpIHRyYW5zbGF0ZVooODBweCkgdHJhbnNsYXRlWCgycHgpIHRyYW5zbGF0ZVkoLTc4cHgpO1xyXG59XHJcblxyXG4uaGFyZGNvdmVyX2JhY2sgbGk6bGFzdC1jaGlsZDpiZWZvcmUge1xyXG4gIGJveC1zaGFkb3c6IDEwcHggLTFweCA4MHB4IDIwcHggIzY2NjtcclxuICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlWCg5MGRlZykgcm90YXRlWig5MGRlZykgdHJhbnNsYXRlWigtMTQwcHgpIHRyYW5zbGF0ZVgoMnB4KSB0cmFuc2xhdGVZKC03OHB4KTtcclxuICAtbW96LXRyYW5zZm9ybTogcm90YXRlWCg5MGRlZykgcm90YXRlWig5MGRlZykgdHJhbnNsYXRlWigtMTQwcHgpIHRyYW5zbGF0ZVgoMnB4KSB0cmFuc2xhdGVZKC03OHB4KTtcclxuICB0cmFuc2Zvcm06IHJvdGF0ZVgoOTBkZWcpIHJvdGF0ZVooOTBkZWcpIHRyYW5zbGF0ZVooLTE0MHB4KSB0cmFuc2xhdGVYKDJweCkgdHJhbnNsYXRlWSgtNzhweCk7XHJcbn1cclxuXHJcbi8qIEJPT0sgU1BJTkUgKi9cclxuLmJvb2tfc3BpbmUge1xyXG4gIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGVZKDYwZGVnKSB0cmFuc2xhdGVYKC01cHgpIHRyYW5zbGF0ZVooLTEycHgpO1xyXG4gIC1tb3otdHJhbnNmb3JtOiByb3RhdGVZKDYwZGVnKSB0cmFuc2xhdGVYKC01cHgpIHRyYW5zbGF0ZVooLTEycHgpO1xyXG4gIHRyYW5zZm9ybTogcm90YXRlWSg2MGRlZykgdHJhbnNsYXRlWCgtNXB4KSB0cmFuc2xhdGVaKC0xMnB4KTtcclxuICB3aWR0aDogMTZweDtcclxuICB6LWluZGV4OiAwO1xyXG59XHJcblxyXG4uYm9va19zcGluZSBsaTpmaXJzdC1jaGlsZCB7XHJcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVooMnB4KTtcclxuICAtbW96LXRyYW5zZm9ybTogdHJhbnNsYXRlWigycHgpO1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWigycHgpO1xyXG59XHJcblxyXG4uYm9va19zcGluZSBsaTpsYXN0LWNoaWxkIHtcclxuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWigtMnB4KTtcclxuICAtbW96LXRyYW5zZm9ybTogdHJhbnNsYXRlWigtMnB4KTtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVooLTJweCk7XHJcbn1cclxuXHJcbi8qIHRoaWNrbmVzcyBvZiBib29rIHNwaW5lICovXHJcbi5ib29rX3NwaW5lIGxpOmZpcnN0LWNoaWxkOmFmdGVyLFxyXG4uYm9va19zcGluZSBsaTpmaXJzdC1jaGlsZDpiZWZvcmUge1xyXG4gIHdpZHRoOiA0cHg7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG59XHJcblxyXG4uYm9va19zcGluZSBsaTpmaXJzdC1jaGlsZDphZnRlciB7XHJcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZVkoOTBkZWcpIHRyYW5zbGF0ZVooLTJweCkgdHJhbnNsYXRlWCgycHgpO1xyXG4gIC1tb3otdHJhbnNmb3JtOiByb3RhdGVZKDkwZGVnKSB0cmFuc2xhdGVaKC0ycHgpIHRyYW5zbGF0ZVgoMnB4KTtcclxuICB0cmFuc2Zvcm06IHJvdGF0ZVkoOTBkZWcpIHRyYW5zbGF0ZVooLTJweCkgdHJhbnNsYXRlWCgycHgpO1xyXG59XHJcblxyXG4uYm9va19zcGluZSBsaTpmaXJzdC1jaGlsZDpiZWZvcmUge1xyXG4gIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGVZKC05MGRlZykgdHJhbnNsYXRlWigtMTJweCk7XHJcbiAgLW1vei10cmFuc2Zvcm06IHJvdGF0ZVkoLTkwZGVnKSB0cmFuc2xhdGVaKC0xMnB4KTtcclxuICB0cmFuc2Zvcm06IHJvdGF0ZVkoLTkwZGVnKSB0cmFuc2xhdGVaKC0xMnB4KTtcclxufVxyXG5cclxuLmJvb2tfc3BpbmUgbGk6bGFzdC1jaGlsZDphZnRlcixcclxuLmJvb2tfc3BpbmUgbGk6bGFzdC1jaGlsZDpiZWZvcmUge1xyXG4gIHdpZHRoOiA0cHg7XHJcbiAgaGVpZ2h0OiAxNnB4O1xyXG59XHJcblxyXG4uYm9va19zcGluZSBsaTpsYXN0LWNoaWxkOmFmdGVyIHtcclxuICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlWCg5MGRlZykgcm90YXRlWig5MGRlZykgdHJhbnNsYXRlWig4cHgpIHRyYW5zbGF0ZVgoMnB4KSB0cmFuc2xhdGVZKC02cHgpO1xyXG4gIC1tb3otdHJhbnNmb3JtOiByb3RhdGVYKDkwZGVnKSByb3RhdGVaKDkwZGVnKSB0cmFuc2xhdGVaKDhweCkgdHJhbnNsYXRlWCgycHgpIHRyYW5zbGF0ZVkoLTZweCk7XHJcbiAgdHJhbnNmb3JtOiByb3RhdGVYKDkwZGVnKSByb3RhdGVaKDkwZGVnKSB0cmFuc2xhdGVaKDhweCkgdHJhbnNsYXRlWCgycHgpIHRyYW5zbGF0ZVkoLTZweCk7XHJcbn1cclxuXHJcbi5ib29rX3NwaW5lIGxpOmxhc3QtY2hpbGQ6YmVmb3JlIHtcclxuICBib3gtc2hhZG93OiA1cHggLTFweCAxMDBweCA0MHB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcclxuICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlWCg5MGRlZykgcm90YXRlWig5MGRlZykgdHJhbnNsYXRlWigtMjEwcHgpIHRyYW5zbGF0ZVgoMnB4KSB0cmFuc2xhdGVZKC02cHgpO1xyXG4gIC1tb3otdHJhbnNmb3JtOiByb3RhdGVYKDkwZGVnKSByb3RhdGVaKDkwZGVnKSB0cmFuc2xhdGVaKC0yMTBweCkgdHJhbnNsYXRlWCgycHgpIHRyYW5zbGF0ZVkoLTZweCk7XHJcbiAgdHJhbnNmb3JtOiByb3RhdGVYKDkwZGVnKSByb3RhdGVaKDkwZGVnKSB0cmFuc2xhdGVaKC0yMTBweCkgdHJhbnNsYXRlWCgycHgpIHRyYW5zbGF0ZVkoLTZweCk7XHJcbn1cclxuXHJcbi5wYWdlLFxyXG4ucGFnZSA+IGxpIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAwO1xyXG4gIGxlZnQ6IDA7XHJcbiAgLXdlYmtpdC10cmFuc2Zvcm0tc3R5bGU6IHByZXNlcnZlLTNkO1xyXG4gIC1tb3otdHJhbnNmb3JtLXN0eWxlOiBwcmVzZXJ2ZS0zZDtcclxuICB0cmFuc2Zvcm0tc3R5bGU6IHByZXNlcnZlLTNkO1xyXG59XHJcblxyXG4ucGFnZSB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiA5OCU7XHJcbiAgdG9wOiAxJTtcclxuICBsZWZ0OiAzJTtcclxuICB6LWluZGV4OiAxMDtcclxufVxyXG5cclxuLnBhZ2UgPiBsaSB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIC13ZWJraXQtdHJhbnNmb3JtLW9yaWdpbjogbGVmdCBjZW50ZXI7XHJcbiAgLW1vei10cmFuc2Zvcm0tb3JpZ2luOiBsZWZ0IGNlbnRlcjtcclxuICB0cmFuc2Zvcm0tb3JpZ2luOiBsZWZ0IGNlbnRlcjtcclxuICAtd2Via2l0LXRyYW5zaXRpb24tcHJvcGVydHk6IHRyYW5zZm9ybTtcclxuICAtbW96LXRyYW5zaXRpb24tcHJvcGVydHk6IHRyYW5zZm9ybTtcclxuICB0cmFuc2l0aW9uLXByb3BlcnR5OiB0cmFuc2Zvcm07XHJcbiAgLXdlYmtpdC10cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZTtcclxuICAtbW96LXRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlO1xyXG4gIHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlO1xyXG59XHJcblxyXG4ucGFnZSA+IGxpOm50aC1jaGlsZCgxKSB7XHJcbiAgLXdlYmtpdC10cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjZzO1xyXG4gIC1tb3otdHJhbnNpdGlvbi1kdXJhdGlvbjogMC42cztcclxuICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjZzO1xyXG59XHJcblxyXG4ucGFnZSA+IGxpOm50aC1jaGlsZCgyKSB7XHJcbiAgLXdlYmtpdC10cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjZzO1xyXG4gIC1tb3otdHJhbnNpdGlvbi1kdXJhdGlvbjogMC42cztcclxuICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjZzO1xyXG59XHJcblxyXG4ucGFnZSA+IGxpOm50aC1jaGlsZCgzKSB7XHJcbiAgLXdlYmtpdC10cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjRzO1xyXG4gIC1tb3otdHJhbnNpdGlvbi1kdXJhdGlvbjogMC40cztcclxuICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjRzO1xyXG59XHJcblxyXG4ucGFnZSA+IGxpOm50aC1jaGlsZCg0KSB7XHJcbiAgLXdlYmtpdC10cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjVzO1xyXG4gIC1tb3otdHJhbnNpdGlvbi1kdXJhdGlvbjogMC41cztcclxuICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjVzO1xyXG59XHJcblxyXG4ucGFnZSA+IGxpOm50aC1jaGlsZCg1KSB7XHJcbiAgLXdlYmtpdC10cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjZzO1xyXG4gIC1tb3otdHJhbnNpdGlvbi1kdXJhdGlvbjogMC42cztcclxuICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjZzO1xyXG59XHJcblxyXG4vKlxyXG5cdDUuIGV2ZW50c1xyXG4qL1xyXG5cclxuLmJvb2s6aG92ZXIgPiAuaGFyZGNvdmVyX2Zyb250IHtcclxuICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlWSgtMTQ1ZGVnKSB0cmFuc2xhdGVaKDApO1xyXG4gIC1tb3otdHJhbnNmb3JtOiByb3RhdGVZKC0xNDVkZWcpIHRyYW5zbGF0ZVooMCk7XHJcbiAgdHJhbnNmb3JtOiByb3RhdGVZKC0xNDVkZWcpIHRyYW5zbGF0ZVooMCk7XHJcbiAgei1pbmRleDogMDtcclxufVxyXG5cclxuLmJvb2s6aG92ZXIgPiAucGFnZSBsaTpudGgtY2hpbGQoMSkge1xyXG4gIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGVZKC0zMGRlZyk7XHJcbiAgLW1vei10cmFuc2Zvcm06IHJvdGF0ZVkoLTMwZGVnKTtcclxuICB0cmFuc2Zvcm06IHJvdGF0ZVkoLTMwZGVnKTtcclxuICAtd2Via2l0LXRyYW5zaXRpb24tZHVyYXRpb246IDEuNXM7XHJcbiAgLW1vei10cmFuc2l0aW9uLWR1cmF0aW9uOiAxLjVzO1xyXG4gIHRyYW5zaXRpb24tZHVyYXRpb246IDEuNXM7XHJcbn1cclxuXHJcbi5ib29rOmhvdmVyID4gLnBhZ2UgbGk6bnRoLWNoaWxkKDIpIHtcclxuICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlWSgtMzVkZWcpO1xyXG4gIC1tb3otdHJhbnNmb3JtOiByb3RhdGVZKC0zNWRlZyk7XHJcbiAgdHJhbnNmb3JtOiByb3RhdGVZKC0zNWRlZyk7XHJcbiAgLXdlYmtpdC10cmFuc2l0aW9uLWR1cmF0aW9uOiAxLjhzO1xyXG4gIC1tb3otdHJhbnNpdGlvbi1kdXJhdGlvbjogMS44cztcclxuICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAxLjhzO1xyXG59XHJcblxyXG4uYm9vazpob3ZlciA+IC5wYWdlIGxpOm50aC1jaGlsZCgzKSB7XHJcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZVkoLTExOGRlZyk7XHJcbiAgLW1vei10cmFuc2Zvcm06IHJvdGF0ZVkoLTExOGRlZyk7XHJcbiAgdHJhbnNmb3JtOiByb3RhdGVZKC0xMThkZWcpO1xyXG4gIC13ZWJraXQtdHJhbnNpdGlvbi1kdXJhdGlvbjogMS42cztcclxuICAtbW96LXRyYW5zaXRpb24tZHVyYXRpb246IDEuNnM7XHJcbiAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMS42cztcclxufVxyXG5cclxuLmJvb2s6aG92ZXIgPiAucGFnZSBsaTpudGgtY2hpbGQoNCkge1xyXG4gIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGVZKC0xMzBkZWcpO1xyXG4gIC1tb3otdHJhbnNmb3JtOiByb3RhdGVZKC0xMzBkZWcpO1xyXG4gIHRyYW5zZm9ybTogcm90YXRlWSgtMTMwZGVnKTtcclxuICAtd2Via2l0LXRyYW5zaXRpb24tZHVyYXRpb246IDEuNHM7XHJcbiAgLW1vei10cmFuc2l0aW9uLWR1cmF0aW9uOiAxLjRzO1xyXG4gIHRyYW5zaXRpb24tZHVyYXRpb246IDEuNHM7XHJcbn1cclxuXHJcbi5ib29rOmhvdmVyID4gLnBhZ2UgbGk6bnRoLWNoaWxkKDUpIHtcclxuICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlWSgtMTQwZGVnKTtcclxuICAtbW96LXRyYW5zZm9ybTogcm90YXRlWSgtMTQwZGVnKTtcclxuICB0cmFuc2Zvcm06IHJvdGF0ZVkoLTE0MGRlZyk7XHJcbiAgLXdlYmtpdC10cmFuc2l0aW9uLWR1cmF0aW9uOiAxLjJzO1xyXG4gIC1tb3otdHJhbnNpdGlvbi1kdXJhdGlvbjogMS4ycztcclxuICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAxLjJzO1xyXG59XHJcblxyXG4vKlxyXG5cdDYuIEJvbnVzXHJcbiovXHJcblxyXG4vKiBjb3ZlciBDU1MgKi9cclxuXHJcbi5jb3ZlckRlc2lnbiB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogMDtcclxuICBsZWZ0OiAwO1xyXG4gIGJvdHRvbTogMDtcclxuICByaWdodDogMDtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIC13ZWJraXQtYmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuO1xyXG4gIC1tb3otYmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuO1xyXG4gIGJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjtcclxufVxyXG5cclxuLmNvdmVyRGVzaWduOjphZnRlciB7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQoLTEzNWRlZywgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjQ1KSAwJSwgdHJhbnNwYXJlbnQgMTAwJSk7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogLW1vei1saW5lYXItZ3JhZGllbnQoLTEzNWRlZywgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjQ1KSAwJSwgdHJhbnNwYXJlbnQgMTAwJSk7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KC0xMzVkZWcsIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC40NSkgMCUsIHRyYW5zcGFyZW50IDEwMCUpO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDA7XHJcbiAgbGVmdDogMDtcclxuICBib3R0b206IDA7XHJcbiAgcmlnaHQ6IDA7XHJcbn1cclxuXHJcbi5jb3ZlckRlc2lnbiBoMSB7XHJcbiAgY29sb3I6ICNmZmY7XHJcbiAgZm9udC1zaXplOiAyLjJlbTtcclxuICBsZXR0ZXItc3BhY2luZzogMC4wNWVtO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBtYXJnaW46IDU0JSAwIDAgMDtcclxuICB0ZXh0LXNoYWRvdzogLTFweCAtMXB4IDAgcmdiYSgwLCAwLCAwLCAwLjEpO1xyXG59XHJcblxyXG4uY292ZXJEZXNpZ24gcCB7XHJcbiAgY29sb3I6ICNmOGY4Zjg7XHJcbiAgZm9udC1zaXplOiAxZW07XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIHRleHQtc2hhZG93OiAtMXB4IC0xcHggMCByZ2JhKDAsIDAsIDAsIDAuMSk7XHJcbn1cclxuXHJcbi55ZWxsb3cge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmMWM0MGY7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQodG9wLCAjZjFjNDBmIDU4JSwgI2U3YmEwNyAwJSk7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogLW1vei1saW5lYXItZ3JhZGllbnQodG9wLCAjZjFjNDBmIDU4JSwgI2U3YmEwNyAwJSk7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvcCwgI2YxYzQwZiA1OCUsICNlN2JhMDcgMCUpO1xyXG59XHJcblxyXG4uYmx1ZSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzM0OThkYjtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudCh0b3AsICMzNDk4ZGIgNTglLCAjMmE5MGQ0IDAlKTtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiAtbW96LWxpbmVhci1ncmFkaWVudCh0b3AsICMzNDk4ZGIgNTglLCAjMmE5MGQ0IDAlKTtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG9wLCAjMzQ5OGRiIDU4JSwgIzJhOTBkNCAwJSk7XHJcbn1cclxuXHJcbi5ncmV5IHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjhlOWQxO1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KHRvcCwgI2Y4ZTlkMSA1OCUsICNlN2Q1YjcgMCUpO1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IC1tb3otbGluZWFyLWdyYWRpZW50KHRvcCwgI2Y4ZTlkMSA1OCUsICNlN2Q1YjcgMCUpO1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0b3AsICNmOGU5ZDEgNTglLCAjZTdkNWI3IDAlKTtcclxufVxyXG5cclxuLyogTWVkaWEgUXVlcmllcyAqL1xyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAzNy44MTI1ZW0pIHtcclxuICAuYWxpZ24gPiBsaSB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG1pbi1oZWlnaHQ6IDQ0MHB4O1xyXG4gICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIG1hcmdpbjogMCAwIDMwcHggMDtcclxuICB9XHJcblxyXG4gIC5ib29rIHtcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gIH1cclxufVxyXG5cclxuLmxpc3Qge1xyXG4gIG1heC13aWR0aDogNTUwcHg7XHJcbiAgbWFyZ2luLWxlZnQ6IDMwJTtcclxufVxyXG5cclxuIiwiOjpuZy1kZWVwIC5tYXQtc3RlcC1pY29uIC5tYXQtaWNvbiB7XG4gIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDsgfVxuXG50YWJsZSB7XG4gIHdpZHRoOiAxMDAlOyB9XG5cbi5jb21wb25lbnQgKiB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jazsgfVxuXG4uZXhhbXBsZS1yYWRpby1ncm91cCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIG1hcmdpbjogMTVweCAwOyB9XG5cbi5leGFtcGxlLXJhZGlvLWJ1dHRvbiB7XG4gIG1hcmdpbjogNXB4OyB9XG5cbnVsIHtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xuICBsaXN0LXN0eWxlOiBub25lOyB9XG5cbmEge1xuICBjb2xvcjogIzJjM2U1MDtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lOyB9XG5cbi5idG4ge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGJvcmRlcjogMnB4IHNvbGlkICMyYzNlNTA7XG4gIG1hcmdpbi10b3A6IDEwMHB4O1xuICBmb250LXNpemU6IDAuOWVtO1xuICBmb250LXdlaWdodDogNzAwO1xuICBwYWRkaW5nOiAwLjFlbSAwLjRlbTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAtd2Via2l0LXRyYW5zaXRpb246IGNvbG9yIDAuM3MsIGJvcmRlci1jb2xvciAwLjNzO1xuICAtbW96LXRyYW5zaXRpb246IGNvbG9yIDAuM3MsIGJvcmRlci1jb2xvciAwLjNzO1xuICB0cmFuc2l0aW9uOiBjb2xvciAwLjNzLCBib3JkZXItY29sb3IgMC4zczsgfVxuXG4udGl0bGUge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIG1heC13aWR0aDogODAlO1xuICBtYXJnaW4tdG9wOiAxMnB4O1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBmb250LXNpemU6IDFlbTtcbiAgd29yZC13cmFwOiBicmVhay13b3JkO1xuICBmb250LXdlaWdodDogNzAwO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogY29sb3IgMC4zcywgYm9yZGVyLWNvbG9yIDAuM3M7XG4gIC1tb3otdHJhbnNpdGlvbjogY29sb3IgMC4zcywgYm9yZGVyLWNvbG9yIDAuM3M7XG4gIHRyYW5zaXRpb246IGNvbG9yIDAuM3MsIGJvcmRlci1jb2xvciAwLjNzOyB9XG5cbi5idG46aG92ZXIge1xuICBib3JkZXItY29sb3I6ICMxNmEwODU7XG4gIGNvbG9yOiAjMTZhMDg1OyB9XG5cbi8qIGJhc2ljIGdyaWQsIG9ubHkgZm9yIHRoaXMgZGVtbyAqL1xuLmFsaWduIHtcbiAgY2xlYXI6IGJvdGg7XG4gIG1heC13aWR0aDogODAwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjsgfVxuXG4uYWxpZ24gPiBsaSB7XG4gIHdpZHRoOiAxNSU7XG4gIG1pbi1oZWlnaHQ6IDBweDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBtYXJnaW46IDMwcHggMjBweCAzMHB4IDMwcHg7XG4gIHBhZGRpbmc6IDAgMCAwIDYwcHg7XG4gIHZlcnRpY2FsLWFsaWduOiB0b3A7IH1cblxuLypcclxuXHQxLiBjb250YWluZXJcclxuKi9cbi5ib29rIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB3aWR0aDogMTYwcHg7XG4gIGhlaWdodDogMjIwcHg7XG4gIC13ZWJraXQtcGVyc3BlY3RpdmU6IDEwMDBweDtcbiAgLW1vei1wZXJzcGVjdGl2ZTogMTAwMHB4O1xuICBwZXJzcGVjdGl2ZTogMTAwMHB4O1xuICAtd2Via2l0LXRyYW5zZm9ybS1zdHlsZTogcHJlc2VydmUtM2Q7XG4gIC1tb3otdHJhbnNmb3JtLXN0eWxlOiBwcmVzZXJ2ZS0zZDtcbiAgdHJhbnNmb3JtLXN0eWxlOiBwcmVzZXJ2ZS0zZDsgfVxuXG4vKlxyXG5cdDIuIGJhY2tncm91bmQgJiBjb2xvclxyXG4qL1xuLyogSEFSRENPVkVSIEZST05UICovXG4uaGFyZGNvdmVyX2Zyb250IGxpOmZpcnN0LWNoaWxkIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VlZTtcbiAgLXdlYmtpdC1iYWNrZmFjZS12aXNpYmlsaXR5OiBoaWRkZW47XG4gIC1tb3otYmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuO1xuICBiYWNrZmFjZS12aXNpYmlsaXR5OiBoaWRkZW47IH1cblxuLyogcmV2ZXJzZSAqL1xuLmhhcmRjb3Zlcl9mcm9udCBsaTpsYXN0LWNoaWxkIHtcbiAgYmFja2dyb3VuZDogI2ZmZmJlYzsgfVxuXG4vKiBIQVJEQ09WRVIgQkFDSyAqL1xuLmhhcmRjb3Zlcl9iYWNrIGxpOmZpcnN0LWNoaWxkIHtcbiAgYmFja2dyb3VuZDogI2ZmZmJlYzsgfVxuXG4vKiByZXZlcnNlICovXG4uaGFyZGNvdmVyX2JhY2sgbGk6bGFzdC1jaGlsZCB7XG4gIGJhY2tncm91bmQ6ICNmZmZiZWM7IH1cblxuLmJvb2tfc3BpbmUgbGk6Zmlyc3QtY2hpbGQge1xuICBiYWNrZ3JvdW5kOiAjZWVlOyB9XG5cbi5ib29rX3NwaW5lIGxpOmxhc3QtY2hpbGQge1xuICBiYWNrZ3JvdW5kOiAjMzMzOyB9XG5cbi8qIHRoaWNrbmVzcyBvZiBjb3ZlciAqL1xuLmhhcmRjb3Zlcl9mcm9udCBsaTpmaXJzdC1jaGlsZDphZnRlcixcbi5oYXJkY292ZXJfZnJvbnQgbGk6Zmlyc3QtY2hpbGQ6YmVmb3JlLFxuLmhhcmRjb3Zlcl9mcm9udCBsaTpsYXN0LWNoaWxkOmFmdGVyLFxuLmhhcmRjb3Zlcl9mcm9udCBsaTpsYXN0LWNoaWxkOmJlZm9yZSxcbi5oYXJkY292ZXJfYmFjayBsaTpmaXJzdC1jaGlsZDphZnRlcixcbi5oYXJkY292ZXJfYmFjayBsaTpmaXJzdC1jaGlsZDpiZWZvcmUsXG4uaGFyZGNvdmVyX2JhY2sgbGk6bGFzdC1jaGlsZDphZnRlcixcbi5oYXJkY292ZXJfYmFjayBsaTpsYXN0LWNoaWxkOmJlZm9yZSxcbi5ib29rX3NwaW5lIGxpOmZpcnN0LWNoaWxkOmFmdGVyLFxuLmJvb2tfc3BpbmUgbGk6Zmlyc3QtY2hpbGQ6YmVmb3JlLFxuLmJvb2tfc3BpbmUgbGk6bGFzdC1jaGlsZDphZnRlcixcbi5ib29rX3NwaW5lIGxpOmxhc3QtY2hpbGQ6YmVmb3JlIHtcbiAgYmFja2dyb3VuZDogIzk5OTsgfVxuXG4vKiBwYWdlICovXG4ucGFnZSA+IGxpIHtcbiAgYmFja2dyb3VuZDogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQobGVmdCwgI2UxZGRkOCAwJSwgI2ZmZmJmNiAxMDAlKTtcbiAgYmFja2dyb3VuZDogLW1vei1saW5lYXItZ3JhZGllbnQobGVmdCwgI2UxZGRkOCAwJSwgI2ZmZmJmNiAxMDAlKTtcbiAgYmFja2dyb3VuZDogLW1zLWxpbmVhci1ncmFkaWVudChsZWZ0LCAjZTFkZGQ4IDAlLCAjZmZmYmY2IDEwMCUpO1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQobGVmdCwgI2UxZGRkOCAwJSwgI2ZmZmJmNiAxMDAlKTtcbiAgYm94LXNoYWRvdzogaW5zZXQgMHB4IC0xcHggMnB4IHJnYmEoNTAsIDUwLCA1MCwgMC4xKSwgaW5zZXQgLTFweCAwcHggMXB4IHJnYmEoMTUwLCAxNTAsIDE1MCwgMC4yKTtcbiAgYm9yZGVyLXJhZGl1czogMHB4IDVweCA1cHggMHB4OyB9XG5cbi8qXHJcblx0My4gb3BlbmluZyBjb3ZlciwgYmFjayBjb3ZlciBhbmQgcGFnZXNcclxuKi9cbi5oYXJkY292ZXJfZnJvbnQge1xuICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlWSgtMzRkZWcpIHRyYW5zbGF0ZVooOHB4KTtcbiAgLW1vei10cmFuc2Zvcm06IHJvdGF0ZVkoLTM0ZGVnKSB0cmFuc2xhdGVaKDhweCk7XG4gIHRyYW5zZm9ybTogcm90YXRlWSgtMzRkZWcpIHRyYW5zbGF0ZVooOHB4KTtcbiAgei1pbmRleDogMTAwOyB9XG5cbi5oYXJkY292ZXJfYmFjayB7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGVZKC0xNWRlZykgdHJhbnNsYXRlWigtOHB4KTtcbiAgLW1vei10cmFuc2Zvcm06IHJvdGF0ZVkoLTE1ZGVnKSB0cmFuc2xhdGVaKC04cHgpO1xuICB0cmFuc2Zvcm06IHJvdGF0ZVkoLTE1ZGVnKSB0cmFuc2xhdGVaKC04cHgpOyB9XG5cbi5wYWdlIGxpOm50aC1jaGlsZCgxKSB7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGVZKC0yOGRlZyk7XG4gIC1tb3otdHJhbnNmb3JtOiByb3RhdGVZKC0yOGRlZyk7XG4gIHRyYW5zZm9ybTogcm90YXRlWSgtMjhkZWcpOyB9XG5cbi5wYWdlIGxpOm50aC1jaGlsZCgyKSB7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGVZKC0zMGRlZyk7XG4gIC1tb3otdHJhbnNmb3JtOiByb3RhdGVZKC0zMGRlZyk7XG4gIHRyYW5zZm9ybTogcm90YXRlWSgtMzBkZWcpOyB9XG5cbi5wYWdlIGxpOm50aC1jaGlsZCgzKSB7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGVZKC0zMmRlZyk7XG4gIC1tb3otdHJhbnNmb3JtOiByb3RhdGVZKC0zMmRlZyk7XG4gIHRyYW5zZm9ybTogcm90YXRlWSgtMzJkZWcpOyB9XG5cbi5wYWdlIGxpOm50aC1jaGlsZCg0KSB7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGVZKC0zNGRlZyk7XG4gIC1tb3otdHJhbnNmb3JtOiByb3RhdGVZKC0zNGRlZyk7XG4gIHRyYW5zZm9ybTogcm90YXRlWSgtMzRkZWcpOyB9XG5cbi5wYWdlIGxpOm50aC1jaGlsZCg1KSB7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGVZKC0zNmRlZyk7XG4gIC1tb3otdHJhbnNmb3JtOiByb3RhdGVZKC0zNmRlZyk7XG4gIHRyYW5zZm9ybTogcm90YXRlWSgtMzZkZWcpOyB9XG5cbi8qXHJcblx0NC4gcG9zaXRpb24sIHRyYW5zZm9ybSAmIHRyYW5zaXRpb25cclxuKi9cbi5oYXJkY292ZXJfZnJvbnQsXG4uaGFyZGNvdmVyX2JhY2ssXG4uYm9va19zcGluZSxcbi5oYXJkY292ZXJfZnJvbnQgbGksXG4uaGFyZGNvdmVyX2JhY2sgbGksXG4uYm9va19zcGluZSBsaSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICAtd2Via2l0LXRyYW5zZm9ybS1zdHlsZTogcHJlc2VydmUtM2Q7XG4gIC1tb3otdHJhbnNmb3JtLXN0eWxlOiBwcmVzZXJ2ZS0zZDtcbiAgdHJhbnNmb3JtLXN0eWxlOiBwcmVzZXJ2ZS0zZDsgfVxuXG4uaGFyZGNvdmVyX2Zyb250LFxuLmhhcmRjb3Zlcl9iYWNrIHtcbiAgLXdlYmtpdC10cmFuc2Zvcm0tb3JpZ2luOiAwJSAxMDAlO1xuICAtbW96LXRyYW5zZm9ybS1vcmlnaW46IDAlIDEwMCU7XG4gIHRyYW5zZm9ybS1vcmlnaW46IDAlIDEwMCU7IH1cblxuLmhhcmRjb3Zlcl9mcm9udCB7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuOHMgZWFzZSwgei1pbmRleCAwLjZzO1xuICAtbW96LXRyYW5zaXRpb246IGFsbCAwLjhzIGVhc2UsIHotaW5kZXggMC42cztcbiAgdHJhbnNpdGlvbjogYWxsIDAuOHMgZWFzZSwgei1pbmRleCAwLjZzOyB9XG5cbi8qIEhBUkRDT1ZFUiBmcm9udCAqL1xuLmhhcmRjb3Zlcl9mcm9udCBsaTpmaXJzdC1jaGlsZCB7XG4gIGN1cnNvcjogZGVmYXVsdDtcbiAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcbiAgLW1vei11c2VyLXNlbGVjdDogbm9uZTtcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVaKDJweCk7XG4gIC1tb3otdHJhbnNmb3JtOiB0cmFuc2xhdGVaKDJweCk7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWigycHgpOyB9XG5cbi5oYXJkY292ZXJfZnJvbnQgbGk6bGFzdC1jaGlsZCB7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGVZKDE4MGRlZykgdHJhbnNsYXRlWigycHgpO1xuICAtbW96LXRyYW5zZm9ybTogcm90YXRlWSgxODBkZWcpIHRyYW5zbGF0ZVooMnB4KTtcbiAgdHJhbnNmb3JtOiByb3RhdGVZKDE4MGRlZykgdHJhbnNsYXRlWigycHgpOyB9XG5cbi8qIEhBUkRDT1ZFUiBiYWNrICovXG4uaGFyZGNvdmVyX2JhY2sgbGk6Zmlyc3QtY2hpbGQge1xuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWigycHgpO1xuICAtbW96LXRyYW5zZm9ybTogdHJhbnNsYXRlWigycHgpO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVooMnB4KTsgfVxuXG4uaGFyZGNvdmVyX2JhY2sgbGk6bGFzdC1jaGlsZCB7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVaKC0ycHgpO1xuICAtbW96LXRyYW5zZm9ybTogdHJhbnNsYXRlWigtMnB4KTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVaKC0ycHgpOyB9XG5cbi8qIHRoaWNrbmVzcyBvZiBjb3ZlciAqL1xuLmhhcmRjb3Zlcl9mcm9udCBsaTpmaXJzdC1jaGlsZDphZnRlcixcbi5oYXJkY292ZXJfZnJvbnQgbGk6Zmlyc3QtY2hpbGQ6YmVmb3JlLFxuLmhhcmRjb3Zlcl9mcm9udCBsaTpsYXN0LWNoaWxkOmFmdGVyLFxuLmhhcmRjb3Zlcl9mcm9udCBsaTpsYXN0LWNoaWxkOmJlZm9yZSxcbi5oYXJkY292ZXJfYmFjayBsaTpmaXJzdC1jaGlsZDphZnRlcixcbi5oYXJkY292ZXJfYmFjayBsaTpmaXJzdC1jaGlsZDpiZWZvcmUsXG4uaGFyZGNvdmVyX2JhY2sgbGk6bGFzdC1jaGlsZDphZnRlcixcbi5oYXJkY292ZXJfYmFjayBsaTpsYXN0LWNoaWxkOmJlZm9yZSxcbi5ib29rX3NwaW5lIGxpOmZpcnN0LWNoaWxkOmFmdGVyLFxuLmJvb2tfc3BpbmUgbGk6Zmlyc3QtY2hpbGQ6YmVmb3JlLFxuLmJvb2tfc3BpbmUgbGk6bGFzdC1jaGlsZDphZnRlcixcbi5ib29rX3NwaW5lIGxpOmxhc3QtY2hpbGQ6YmVmb3JlIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7IH1cblxuLyogSEFSRENPVkVSIGZyb250ICovXG4uaGFyZGNvdmVyX2Zyb250IGxpOmZpcnN0LWNoaWxkOmFmdGVyLFxuLmhhcmRjb3Zlcl9mcm9udCBsaTpmaXJzdC1jaGlsZDpiZWZvcmUge1xuICB3aWR0aDogNHB4O1xuICBoZWlnaHQ6IDEwMCU7IH1cblxuLmhhcmRjb3Zlcl9mcm9udCBsaTpmaXJzdC1jaGlsZDphZnRlciB7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGVZKDkwZGVnKSB0cmFuc2xhdGVaKC0ycHgpIHRyYW5zbGF0ZVgoMnB4KTtcbiAgLW1vei10cmFuc2Zvcm06IHJvdGF0ZVkoOTBkZWcpIHRyYW5zbGF0ZVooLTJweCkgdHJhbnNsYXRlWCgycHgpO1xuICB0cmFuc2Zvcm06IHJvdGF0ZVkoOTBkZWcpIHRyYW5zbGF0ZVooLTJweCkgdHJhbnNsYXRlWCgycHgpOyB9XG5cbi5oYXJkY292ZXJfZnJvbnQgbGk6Zmlyc3QtY2hpbGQ6YmVmb3JlIHtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZVkoOTBkZWcpIHRyYW5zbGF0ZVooMTU4cHgpIHRyYW5zbGF0ZVgoMnB4KTtcbiAgLW1vei10cmFuc2Zvcm06IHJvdGF0ZVkoOTBkZWcpIHRyYW5zbGF0ZVooMTU4cHgpIHRyYW5zbGF0ZVgoMnB4KTtcbiAgdHJhbnNmb3JtOiByb3RhdGVZKDkwZGVnKSB0cmFuc2xhdGVaKDE1OHB4KSB0cmFuc2xhdGVYKDJweCk7IH1cblxuLmhhcmRjb3Zlcl9mcm9udCBsaTpsYXN0LWNoaWxkOmFmdGVyLFxuLmhhcmRjb3Zlcl9mcm9udCBsaTpsYXN0LWNoaWxkOmJlZm9yZSB7XG4gIHdpZHRoOiA0cHg7XG4gIGhlaWdodDogMTYwcHg7IH1cblxuLmhhcmRjb3Zlcl9mcm9udCBsaTpsYXN0LWNoaWxkOmFmdGVyIHtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZVgoOTBkZWcpIHJvdGF0ZVooOTBkZWcpIHRyYW5zbGF0ZVooODBweCkgdHJhbnNsYXRlWCgtMnB4KSB0cmFuc2xhdGVZKC03OHB4KTtcbiAgLW1vei10cmFuc2Zvcm06IHJvdGF0ZVgoOTBkZWcpIHJvdGF0ZVooOTBkZWcpIHRyYW5zbGF0ZVooODBweCkgdHJhbnNsYXRlWCgtMnB4KSB0cmFuc2xhdGVZKC03OHB4KTtcbiAgdHJhbnNmb3JtOiByb3RhdGVYKDkwZGVnKSByb3RhdGVaKDkwZGVnKSB0cmFuc2xhdGVaKDgwcHgpIHRyYW5zbGF0ZVgoLTJweCkgdHJhbnNsYXRlWSgtNzhweCk7IH1cblxuLmhhcmRjb3Zlcl9mcm9udCBsaTpsYXN0LWNoaWxkOmJlZm9yZSB7XG4gIGJveC1zaGFkb3c6IDBweCAwcHggMzBweCA1cHggIzMzMztcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZVgoOTBkZWcpIHJvdGF0ZVooOTBkZWcpIHRyYW5zbGF0ZVooLTE0MHB4KSB0cmFuc2xhdGVYKC0ycHgpIHRyYW5zbGF0ZVkoLTc4cHgpO1xuICAtbW96LXRyYW5zZm9ybTogcm90YXRlWCg5MGRlZykgcm90YXRlWig5MGRlZykgdHJhbnNsYXRlWigtMTQwcHgpIHRyYW5zbGF0ZVgoLTJweCkgdHJhbnNsYXRlWSgtNzhweCk7XG4gIHRyYW5zZm9ybTogcm90YXRlWCg5MGRlZykgcm90YXRlWig5MGRlZykgdHJhbnNsYXRlWigtMTQwcHgpIHRyYW5zbGF0ZVgoLTJweCkgdHJhbnNsYXRlWSgtNzhweCk7IH1cblxuLyogdGhpY2tuZXNzIG9mIGNvdmVyICovXG4uaGFyZGNvdmVyX2JhY2sgbGk6Zmlyc3QtY2hpbGQ6YWZ0ZXIsXG4uaGFyZGNvdmVyX2JhY2sgbGk6Zmlyc3QtY2hpbGQ6YmVmb3JlIHtcbiAgd2lkdGg6IDRweDtcbiAgaGVpZ2h0OiAxMDAlOyB9XG5cbi5oYXJkY292ZXJfYmFjayBsaTpmaXJzdC1jaGlsZDphZnRlciB7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGVZKDkwZGVnKSB0cmFuc2xhdGVaKC0ycHgpIHRyYW5zbGF0ZVgoMnB4KTtcbiAgLW1vei10cmFuc2Zvcm06IHJvdGF0ZVkoOTBkZWcpIHRyYW5zbGF0ZVooLTJweCkgdHJhbnNsYXRlWCgycHgpO1xuICB0cmFuc2Zvcm06IHJvdGF0ZVkoOTBkZWcpIHRyYW5zbGF0ZVooLTJweCkgdHJhbnNsYXRlWCgycHgpOyB9XG5cbi5oYXJkY292ZXJfYmFjayBsaTpmaXJzdC1jaGlsZDpiZWZvcmUge1xuICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlWSg5MGRlZykgdHJhbnNsYXRlWigxNThweCkgdHJhbnNsYXRlWCgycHgpO1xuICAtbW96LXRyYW5zZm9ybTogcm90YXRlWSg5MGRlZykgdHJhbnNsYXRlWigxNThweCkgdHJhbnNsYXRlWCgycHgpO1xuICB0cmFuc2Zvcm06IHJvdGF0ZVkoOTBkZWcpIHRyYW5zbGF0ZVooMTU4cHgpIHRyYW5zbGF0ZVgoMnB4KTsgfVxuXG4uaGFyZGNvdmVyX2JhY2sgbGk6bGFzdC1jaGlsZDphZnRlcixcbi5oYXJkY292ZXJfYmFjayBsaTpsYXN0LWNoaWxkOmJlZm9yZSB7XG4gIHdpZHRoOiA0cHg7XG4gIGhlaWdodDogMTYwcHg7IH1cblxuLmhhcmRjb3Zlcl9iYWNrIGxpOmxhc3QtY2hpbGQ6YWZ0ZXIge1xuICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlWCg5MGRlZykgcm90YXRlWig5MGRlZykgdHJhbnNsYXRlWig4MHB4KSB0cmFuc2xhdGVYKDJweCkgdHJhbnNsYXRlWSgtNzhweCk7XG4gIC1tb3otdHJhbnNmb3JtOiByb3RhdGVYKDkwZGVnKSByb3RhdGVaKDkwZGVnKSB0cmFuc2xhdGVaKDgwcHgpIHRyYW5zbGF0ZVgoMnB4KSB0cmFuc2xhdGVZKC03OHB4KTtcbiAgdHJhbnNmb3JtOiByb3RhdGVYKDkwZGVnKSByb3RhdGVaKDkwZGVnKSB0cmFuc2xhdGVaKDgwcHgpIHRyYW5zbGF0ZVgoMnB4KSB0cmFuc2xhdGVZKC03OHB4KTsgfVxuXG4uaGFyZGNvdmVyX2JhY2sgbGk6bGFzdC1jaGlsZDpiZWZvcmUge1xuICBib3gtc2hhZG93OiAxMHB4IC0xcHggODBweCAyMHB4ICM2NjY7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGVYKDkwZGVnKSByb3RhdGVaKDkwZGVnKSB0cmFuc2xhdGVaKC0xNDBweCkgdHJhbnNsYXRlWCgycHgpIHRyYW5zbGF0ZVkoLTc4cHgpO1xuICAtbW96LXRyYW5zZm9ybTogcm90YXRlWCg5MGRlZykgcm90YXRlWig5MGRlZykgdHJhbnNsYXRlWigtMTQwcHgpIHRyYW5zbGF0ZVgoMnB4KSB0cmFuc2xhdGVZKC03OHB4KTtcbiAgdHJhbnNmb3JtOiByb3RhdGVYKDkwZGVnKSByb3RhdGVaKDkwZGVnKSB0cmFuc2xhdGVaKC0xNDBweCkgdHJhbnNsYXRlWCgycHgpIHRyYW5zbGF0ZVkoLTc4cHgpOyB9XG5cbi8qIEJPT0sgU1BJTkUgKi9cbi5ib29rX3NwaW5lIHtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZVkoNjBkZWcpIHRyYW5zbGF0ZVgoLTVweCkgdHJhbnNsYXRlWigtMTJweCk7XG4gIC1tb3otdHJhbnNmb3JtOiByb3RhdGVZKDYwZGVnKSB0cmFuc2xhdGVYKC01cHgpIHRyYW5zbGF0ZVooLTEycHgpO1xuICB0cmFuc2Zvcm06IHJvdGF0ZVkoNjBkZWcpIHRyYW5zbGF0ZVgoLTVweCkgdHJhbnNsYXRlWigtMTJweCk7XG4gIHdpZHRoOiAxNnB4O1xuICB6LWluZGV4OiAwOyB9XG5cbi5ib29rX3NwaW5lIGxpOmZpcnN0LWNoaWxkIHtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVooMnB4KTtcbiAgLW1vei10cmFuc2Zvcm06IHRyYW5zbGF0ZVooMnB4KTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVaKDJweCk7IH1cblxuLmJvb2tfc3BpbmUgbGk6bGFzdC1jaGlsZCB7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVaKC0ycHgpO1xuICAtbW96LXRyYW5zZm9ybTogdHJhbnNsYXRlWigtMnB4KTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVaKC0ycHgpOyB9XG5cbi8qIHRoaWNrbmVzcyBvZiBib29rIHNwaW5lICovXG4uYm9va19zcGluZSBsaTpmaXJzdC1jaGlsZDphZnRlcixcbi5ib29rX3NwaW5lIGxpOmZpcnN0LWNoaWxkOmJlZm9yZSB7XG4gIHdpZHRoOiA0cHg7XG4gIGhlaWdodDogMTAwJTsgfVxuXG4uYm9va19zcGluZSBsaTpmaXJzdC1jaGlsZDphZnRlciB7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGVZKDkwZGVnKSB0cmFuc2xhdGVaKC0ycHgpIHRyYW5zbGF0ZVgoMnB4KTtcbiAgLW1vei10cmFuc2Zvcm06IHJvdGF0ZVkoOTBkZWcpIHRyYW5zbGF0ZVooLTJweCkgdHJhbnNsYXRlWCgycHgpO1xuICB0cmFuc2Zvcm06IHJvdGF0ZVkoOTBkZWcpIHRyYW5zbGF0ZVooLTJweCkgdHJhbnNsYXRlWCgycHgpOyB9XG5cbi5ib29rX3NwaW5lIGxpOmZpcnN0LWNoaWxkOmJlZm9yZSB7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGVZKC05MGRlZykgdHJhbnNsYXRlWigtMTJweCk7XG4gIC1tb3otdHJhbnNmb3JtOiByb3RhdGVZKC05MGRlZykgdHJhbnNsYXRlWigtMTJweCk7XG4gIHRyYW5zZm9ybTogcm90YXRlWSgtOTBkZWcpIHRyYW5zbGF0ZVooLTEycHgpOyB9XG5cbi5ib29rX3NwaW5lIGxpOmxhc3QtY2hpbGQ6YWZ0ZXIsXG4uYm9va19zcGluZSBsaTpsYXN0LWNoaWxkOmJlZm9yZSB7XG4gIHdpZHRoOiA0cHg7XG4gIGhlaWdodDogMTZweDsgfVxuXG4uYm9va19zcGluZSBsaTpsYXN0LWNoaWxkOmFmdGVyIHtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZVgoOTBkZWcpIHJvdGF0ZVooOTBkZWcpIHRyYW5zbGF0ZVooOHB4KSB0cmFuc2xhdGVYKDJweCkgdHJhbnNsYXRlWSgtNnB4KTtcbiAgLW1vei10cmFuc2Zvcm06IHJvdGF0ZVgoOTBkZWcpIHJvdGF0ZVooOTBkZWcpIHRyYW5zbGF0ZVooOHB4KSB0cmFuc2xhdGVYKDJweCkgdHJhbnNsYXRlWSgtNnB4KTtcbiAgdHJhbnNmb3JtOiByb3RhdGVYKDkwZGVnKSByb3RhdGVaKDkwZGVnKSB0cmFuc2xhdGVaKDhweCkgdHJhbnNsYXRlWCgycHgpIHRyYW5zbGF0ZVkoLTZweCk7IH1cblxuLmJvb2tfc3BpbmUgbGk6bGFzdC1jaGlsZDpiZWZvcmUge1xuICBib3gtc2hhZG93OiA1cHggLTFweCAxMDBweCA0MHB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZVgoOTBkZWcpIHJvdGF0ZVooOTBkZWcpIHRyYW5zbGF0ZVooLTIxMHB4KSB0cmFuc2xhdGVYKDJweCkgdHJhbnNsYXRlWSgtNnB4KTtcbiAgLW1vei10cmFuc2Zvcm06IHJvdGF0ZVgoOTBkZWcpIHJvdGF0ZVooOTBkZWcpIHRyYW5zbGF0ZVooLTIxMHB4KSB0cmFuc2xhdGVYKDJweCkgdHJhbnNsYXRlWSgtNnB4KTtcbiAgdHJhbnNmb3JtOiByb3RhdGVYKDkwZGVnKSByb3RhdGVaKDkwZGVnKSB0cmFuc2xhdGVaKC0yMTBweCkgdHJhbnNsYXRlWCgycHgpIHRyYW5zbGF0ZVkoLTZweCk7IH1cblxuLnBhZ2UsXG4ucGFnZSA+IGxpIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIC13ZWJraXQtdHJhbnNmb3JtLXN0eWxlOiBwcmVzZXJ2ZS0zZDtcbiAgLW1vei10cmFuc2Zvcm0tc3R5bGU6IHByZXNlcnZlLTNkO1xuICB0cmFuc2Zvcm0tc3R5bGU6IHByZXNlcnZlLTNkOyB9XG5cbi5wYWdlIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogOTglO1xuICB0b3A6IDElO1xuICBsZWZ0OiAzJTtcbiAgei1pbmRleDogMTA7IH1cblxuLnBhZ2UgPiBsaSB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIC13ZWJraXQtdHJhbnNmb3JtLW9yaWdpbjogbGVmdCBjZW50ZXI7XG4gIC1tb3otdHJhbnNmb3JtLW9yaWdpbjogbGVmdCBjZW50ZXI7XG4gIHRyYW5zZm9ybS1vcmlnaW46IGxlZnQgY2VudGVyO1xuICAtd2Via2l0LXRyYW5zaXRpb24tcHJvcGVydHk6IHRyYW5zZm9ybTtcbiAgLW1vei10cmFuc2l0aW9uLXByb3BlcnR5OiB0cmFuc2Zvcm07XG4gIHRyYW5zaXRpb24tcHJvcGVydHk6IHRyYW5zZm9ybTtcbiAgLXdlYmtpdC10cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZTtcbiAgLW1vei10cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZTtcbiAgdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2U7IH1cblxuLnBhZ2UgPiBsaTpudGgtY2hpbGQoMSkge1xuICAtd2Via2l0LXRyYW5zaXRpb24tZHVyYXRpb246IDAuNnM7XG4gIC1tb3otdHJhbnNpdGlvbi1kdXJhdGlvbjogMC42cztcbiAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMC42czsgfVxuXG4ucGFnZSA+IGxpOm50aC1jaGlsZCgyKSB7XG4gIC13ZWJraXQtdHJhbnNpdGlvbi1kdXJhdGlvbjogMC42cztcbiAgLW1vei10cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjZzO1xuICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjZzOyB9XG5cbi5wYWdlID4gbGk6bnRoLWNoaWxkKDMpIHtcbiAgLXdlYmtpdC10cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjRzO1xuICAtbW96LXRyYW5zaXRpb24tZHVyYXRpb246IDAuNHM7XG4gIHRyYW5zaXRpb24tZHVyYXRpb246IDAuNHM7IH1cblxuLnBhZ2UgPiBsaTpudGgtY2hpbGQoNCkge1xuICAtd2Via2l0LXRyYW5zaXRpb24tZHVyYXRpb246IDAuNXM7XG4gIC1tb3otdHJhbnNpdGlvbi1kdXJhdGlvbjogMC41cztcbiAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMC41czsgfVxuXG4ucGFnZSA+IGxpOm50aC1jaGlsZCg1KSB7XG4gIC13ZWJraXQtdHJhbnNpdGlvbi1kdXJhdGlvbjogMC42cztcbiAgLW1vei10cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjZzO1xuICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjZzOyB9XG5cbi8qXHJcblx0NS4gZXZlbnRzXHJcbiovXG4uYm9vazpob3ZlciA+IC5oYXJkY292ZXJfZnJvbnQge1xuICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlWSgtMTQ1ZGVnKSB0cmFuc2xhdGVaKDApO1xuICAtbW96LXRyYW5zZm9ybTogcm90YXRlWSgtMTQ1ZGVnKSB0cmFuc2xhdGVaKDApO1xuICB0cmFuc2Zvcm06IHJvdGF0ZVkoLTE0NWRlZykgdHJhbnNsYXRlWigwKTtcbiAgei1pbmRleDogMDsgfVxuXG4uYm9vazpob3ZlciA+IC5wYWdlIGxpOm50aC1jaGlsZCgxKSB7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGVZKC0zMGRlZyk7XG4gIC1tb3otdHJhbnNmb3JtOiByb3RhdGVZKC0zMGRlZyk7XG4gIHRyYW5zZm9ybTogcm90YXRlWSgtMzBkZWcpO1xuICAtd2Via2l0LXRyYW5zaXRpb24tZHVyYXRpb246IDEuNXM7XG4gIC1tb3otdHJhbnNpdGlvbi1kdXJhdGlvbjogMS41cztcbiAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMS41czsgfVxuXG4uYm9vazpob3ZlciA+IC5wYWdlIGxpOm50aC1jaGlsZCgyKSB7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGVZKC0zNWRlZyk7XG4gIC1tb3otdHJhbnNmb3JtOiByb3RhdGVZKC0zNWRlZyk7XG4gIHRyYW5zZm9ybTogcm90YXRlWSgtMzVkZWcpO1xuICAtd2Via2l0LXRyYW5zaXRpb24tZHVyYXRpb246IDEuOHM7XG4gIC1tb3otdHJhbnNpdGlvbi1kdXJhdGlvbjogMS44cztcbiAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMS44czsgfVxuXG4uYm9vazpob3ZlciA+IC5wYWdlIGxpOm50aC1jaGlsZCgzKSB7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGVZKC0xMThkZWcpO1xuICAtbW96LXRyYW5zZm9ybTogcm90YXRlWSgtMTE4ZGVnKTtcbiAgdHJhbnNmb3JtOiByb3RhdGVZKC0xMThkZWcpO1xuICAtd2Via2l0LXRyYW5zaXRpb24tZHVyYXRpb246IDEuNnM7XG4gIC1tb3otdHJhbnNpdGlvbi1kdXJhdGlvbjogMS42cztcbiAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMS42czsgfVxuXG4uYm9vazpob3ZlciA+IC5wYWdlIGxpOm50aC1jaGlsZCg0KSB7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGVZKC0xMzBkZWcpO1xuICAtbW96LXRyYW5zZm9ybTogcm90YXRlWSgtMTMwZGVnKTtcbiAgdHJhbnNmb3JtOiByb3RhdGVZKC0xMzBkZWcpO1xuICAtd2Via2l0LXRyYW5zaXRpb24tZHVyYXRpb246IDEuNHM7XG4gIC1tb3otdHJhbnNpdGlvbi1kdXJhdGlvbjogMS40cztcbiAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMS40czsgfVxuXG4uYm9vazpob3ZlciA+IC5wYWdlIGxpOm50aC1jaGlsZCg1KSB7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGVZKC0xNDBkZWcpO1xuICAtbW96LXRyYW5zZm9ybTogcm90YXRlWSgtMTQwZGVnKTtcbiAgdHJhbnNmb3JtOiByb3RhdGVZKC0xNDBkZWcpO1xuICAtd2Via2l0LXRyYW5zaXRpb24tZHVyYXRpb246IDEuMnM7XG4gIC1tb3otdHJhbnNpdGlvbi1kdXJhdGlvbjogMS4ycztcbiAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMS4yczsgfVxuXG4vKlxyXG5cdDYuIEJvbnVzXHJcbiovXG4vKiBjb3ZlciBDU1MgKi9cbi5jb3ZlckRlc2lnbiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICBib3R0b206IDA7XG4gIHJpZ2h0OiAwO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICAtd2Via2l0LWJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjtcbiAgLW1vei1iYWNrZmFjZS12aXNpYmlsaXR5OiBoaWRkZW47XG4gIGJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjsgfVxuXG4uY292ZXJEZXNpZ246OmFmdGVyIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQoLTEzNWRlZywgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjQ1KSAwJSwgdHJhbnNwYXJlbnQgMTAwJSk7XG4gIGJhY2tncm91bmQtaW1hZ2U6IC1tb3otbGluZWFyLWdyYWRpZW50KC0xMzVkZWcsIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC40NSkgMCUsIHRyYW5zcGFyZW50IDEwMCUpO1xuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoLTEzNWRlZywgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjQ1KSAwJSwgdHJhbnNwYXJlbnQgMTAwJSk7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICBib3R0b206IDA7XG4gIHJpZ2h0OiAwOyB9XG5cbi5jb3ZlckRlc2lnbiBoMSB7XG4gIGNvbG9yOiAjZmZmO1xuICBmb250LXNpemU6IDIuMmVtO1xuICBsZXR0ZXItc3BhY2luZzogMC4wNWVtO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbjogNTQlIDAgMCAwO1xuICB0ZXh0LXNoYWRvdzogLTFweCAtMXB4IDAgcmdiYSgwLCAwLCAwLCAwLjEpOyB9XG5cbi5jb3ZlckRlc2lnbiBwIHtcbiAgY29sb3I6ICNmOGY4Zjg7XG4gIGZvbnQtc2l6ZTogMWVtO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHRleHQtc2hhZG93OiAtMXB4IC0xcHggMCByZ2JhKDAsIDAsIDAsIDAuMSk7IH1cblxuLnllbGxvdyB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmMWM0MGY7XG4gIGJhY2tncm91bmQtaW1hZ2U6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KHRvcCwgI2YxYzQwZiA1OCUsICNlN2JhMDcgMCUpO1xuICBiYWNrZ3JvdW5kLWltYWdlOiAtbW96LWxpbmVhci1ncmFkaWVudCh0b3AsICNmMWM0MGYgNTglLCAjZTdiYTA3IDAlKTtcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvcCwgI2YxYzQwZiA1OCUsICNlN2JhMDcgMCUpOyB9XG5cbi5ibHVlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzM0OThkYjtcbiAgYmFja2dyb3VuZC1pbWFnZTogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQodG9wLCAjMzQ5OGRiIDU4JSwgIzJhOTBkNCAwJSk7XG4gIGJhY2tncm91bmQtaW1hZ2U6IC1tb3otbGluZWFyLWdyYWRpZW50KHRvcCwgIzM0OThkYiA1OCUsICMyYTkwZDQgMCUpO1xuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG9wLCAjMzQ5OGRiIDU4JSwgIzJhOTBkNCAwJSk7IH1cblxuLmdyZXkge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjhlOWQxO1xuICBiYWNrZ3JvdW5kLWltYWdlOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudCh0b3AsICNmOGU5ZDEgNTglLCAjZTdkNWI3IDAlKTtcbiAgYmFja2dyb3VuZC1pbWFnZTogLW1vei1saW5lYXItZ3JhZGllbnQodG9wLCAjZjhlOWQxIDU4JSwgI2U3ZDViNyAwJSk7XG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0b3AsICNmOGU5ZDEgNTglLCAjZTdkNWI3IDAlKTsgfVxuXG4vKiBNZWRpYSBRdWVyaWVzICovXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAzNy44MTI1ZW0pIHtcbiAgLmFsaWduID4gbGkge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1pbi1oZWlnaHQ6IDQ0MHB4O1xuICAgIGhlaWdodDogYXV0bztcbiAgICBwYWRkaW5nOiAwO1xuICAgIG1hcmdpbjogMCAwIDMwcHggMDsgfVxuICAuYm9vayB7XG4gICAgbWFyZ2luOiAwIGF1dG87IH0gfVxuXG4ubGlzdCB7XG4gIG1heC13aWR0aDogNTUwcHg7XG4gIG1hcmdpbi1sZWZ0OiAzMCU7IH1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/components/studio-creation/studio-creation.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/components/studio-creation/studio-creation.component.ts ***!
  \*************************************************************************/
/*! exports provided: StudioCreationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StudioCreationComponent", function() { return StudioCreationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var angularx_social_login__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angularx-social-login */ "./node_modules/angularx-social-login/angularx-social-login.es5.js");
/* harmony import */ var _services_book_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/book.service */ "./src/app/services/book.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");







var StudioCreationComponent = /** @class */ (function () {
    function StudioCreationComponent(authService, bookService, route, router) {
        this.authService = authService;
        this.bookService = bookService;
        this.route = route;
        this.router = router;
        this.isCreatedChapter = false;
        this.visionChapters = false;
        this.mappedBook = new Map();
        this.ngUnsubscribe = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Subject"]();
        this.displayedColumns = ['title', 'creationDate', 'actions'];
    }
    StudioCreationComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.authService.authState.subscribe(function (user) {
            _this.user = user;
            _this.loggedIn = (user != null);
        });
        this.getAllBooksOfUser();
    };
    StudioCreationComponent.prototype.ngOnDestroy = function () {
        this.ngUnsubscribe.next();
        this.ngUnsubscribe.complete();
    };
    StudioCreationComponent.prototype.refresh = function () {
        this.stepper.selectedIndex = 0;
        this.getAllBooksOfUser();
    };
    StudioCreationComponent.prototype.getAllBooksOfUser = function () {
        var _this = this;
        this.bookService.getBooksOfAuthor(this.user.email)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["takeUntil"])(this.ngUnsubscribe))
            .subscribe(function (apiResponse) {
            _this.allBookUser = apiResponse;
            _this.mappedBook.clear();
            _this.allBookUser.forEach(function (element) { return _this.mappedBook.set(element.id, element); });
        });
    };
    StudioCreationComponent.prototype.getChapters = function (book) {
        var _this = this;
        this.bookService.getBookChapter(book.id)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["takeUntil"])(this.ngUnsubscribe))
            .subscribe(function (apiResponse) {
            _this.allChaptersOfBook = apiResponse;
            _this.visionChapters = true;
        });
    };
    StudioCreationComponent.prototype.gotoCreationChapter = function (bookSelected) {
        var _this = this;
        this.activatedBook = bookSelected;
        Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["of"])().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["takeUntil"])(this.ngUnsubscribe))
            .subscribe(function (apiResponse) {
            _this.isCreatedChapter = true;
        });
        this.stepper.selectedIndex = 2;
    };
    StudioCreationComponent.prototype.terminateChapterEdition = function (evt) {
        var _this = this;
        this.stepper.selectedIndex = 0;
        this.activatedBook = null;
        Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["of"])().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["takeUntil"])(this.ngUnsubscribe))
            .subscribe(function (apiResponse) {
            _this.isCreatedChapter = false;
        });
        this.getChapters(evt);
    };
    StudioCreationComponent.prototype.terminateChapterEditionUpdate = function (evt) {
        this.stepper.selectedIndex = 0;
        this.getChapters(evt);
    };
    StudioCreationComponent.prototype.stopVisionChapters = function () {
        this.visionChapters = false;
    };
    StudioCreationComponent.prototype.returnToBookList = function () {
        this.stepper.selectedIndex = 0;
    };
    StudioCreationComponent.prototype.gotoBook = function (book) {
        this.router.navigate(["book/" + book.id]);
    };
    StudioCreationComponent.prototype.deleteBook = function (book) {
        var _this = this;
        if (window.confirm(' Êtes-vous certain de vouloir supprimer le livre:  ' + book.title)) {
            this.bookService.deleteBook(book.id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["takeUntil"])(this.ngUnsubscribe))
                .subscribe(function (apiResponse) {
                _this.getAllBooksOfUser();
            });
        }
    };
    StudioCreationComponent.prototype.deleteBookChapter = function (chapter) {
        var _this = this;
        if (window.confirm(' Êtes-vous certain de vouloir supprimer le chapitre:  ' + chapter.title)) {
            this.bookService.deleteChapterBook(chapter.id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["takeUntil"])(this.ngUnsubscribe))
                .subscribe(function (apiResponse) {
                _this.getChapters(_this.mappedBook.get(chapter.bookId));
            });
        }
    };
    StudioCreationComponent.prototype.updateBook = function (book) {
        this.editABook = book;
        this.stepper.selectedIndex = 3;
    };
    StudioCreationComponent.prototype.updateChapter = function (chapter) {
        this.editAChapter = chapter;
        this.editAChapterBookSelected = this.mappedBook.get(chapter.bookId);
        this.stepper.selectedIndex = 4;
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('stepper'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], StudioCreationComponent.prototype, "stepper", void 0);
    StudioCreationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-studio-creation',
            template: __webpack_require__(/*! ./studio-creation.component.html */ "./src/app/components/studio-creation/studio-creation.component.html"),
            styles: [__webpack_require__(/*! ./studio-creation.component.scss */ "./src/app/components/studio-creation/studio-creation.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [angularx_social_login__WEBPACK_IMPORTED_MODULE_2__["AuthService"], _services_book_service__WEBPACK_IMPORTED_MODULE_3__["BookService"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]])
    ], StudioCreationComponent);
    return StudioCreationComponent;
}());



/***/ }),

/***/ "./src/app/control/authentification/authentification.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/control/authentification/authentification.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"jumbotron bg-transparent text-center\">\r\n  <div *ngIf=\"!user\" class=\"card text-center\">\r\n    <div class=\"card-block\">\r\n      <div id=\"login-box\">\r\n        <div class=\"right\">\r\n          <span class=\"loginwith\">Sign in with<br />social network</span>\r\n\r\n          <button class=\"social-signin facebook\" (click)=\"signInWithFB()\">Log in with facebook</button>\r\n          <!--\r\n          <button class=\"social-signin twitter\">Log in with Twitter</button>\r\n          <button class=\"social-signin google\">Log in with Google+</button> -->\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div *ngIf=\"user\" class=\"card text-center\">\r\n    <app-sidebar></app-sidebar>\r\n    <p style=\"width: 500px; margin: auto\">\r\n      For navigate, please use the sidenav in the grey zone (left of screen). Menu appear hidden because lack icons\r\n\r\n    </p>\r\n    <br/>\r\n    <br/>\r\n    <p style=\"width: 500px; margin: auto\">\r\n      Pour naviguer, utilisez le menu gauche caché dans la zone grise qui apparait caché car il manque les icones.\r\n      Survolé la zone grise pour l'instant pour utiliser le menu les liens apparaitront ensuite\r\n    </p>\r\n\r\n  </div>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "./src/app/control/authentification/authentification.component.scss":
/*!**************************************************************************!*\
  !*** ./src/app/control/authentification/authentification.component.scss ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#login-box {\n  position: relative;\n  margin: 5% auto;\n  width: 600px;\n  height: 400px;\n  background: #FFF;\n  border-radius: 2px;\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.4); }\n\n.left {\n  position: absolute;\n  top: 0;\n  left: 0;\n  box-sizing: border-box;\n  padding: 40px;\n  width: 300px;\n  height: 400px; }\n\nh1 {\n  margin: 0 0 20px 0;\n  font-weight: 300;\n  font-size: 28px; }\n\ninput[type=\"text\"],\ninput[type=\"password\"] {\n  display: block;\n  box-sizing: border-box;\n  margin-bottom: 20px;\n  padding: 4px;\n  width: 220px;\n  height: 32px;\n  border: none;\n  border-bottom: 1px solid #AAA;\n  font-family: 'Roboto', sans-serif;\n  font-weight: 400;\n  font-size: 15px;\n  transition: 0.2s ease; }\n\ninput[type=\"text\"]:focus,\ninput[type=\"password\"]:focus {\n  border-bottom: 2px solid #16a085;\n  color: #16a085;\n  transition: 0.2s ease; }\n\ninput[type=\"submit\"] {\n  margin-top: 28px;\n  width: 120px;\n  height: 32px;\n  background: #16a085;\n  border: none;\n  border-radius: 2px;\n  color: #FFF;\n  font-family: 'Roboto', sans-serif;\n  font-weight: 500;\n  text-transform: uppercase;\n  transition: 0.1s ease;\n  cursor: pointer; }\n\ninput[type=\"submit\"]:hover,\ninput[type=\"submit\"]:focus {\n  opacity: 0.8;\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.4);\n  transition: 0.1s ease; }\n\ninput[type=\"submit\"]:active {\n  opacity: 1;\n  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.4);\n  transition: 0.1s ease; }\n\n.right {\n  position: absolute;\n  top: 0;\n  right: 25%;\n  box-sizing: border-box;\n  padding: 40px;\n  width: 300px;\n  height: 400px;\n  background: url(\"https://goo.gl/YbktSj\");\n  background-size: cover;\n  background-position: center;\n  border-radius: 0 2px 2px 0; }\n\n.right .loginwith {\n  display: block;\n  margin-bottom: 40px;\n  font-size: 28px;\n  color: #FFF;\n  text-align: center; }\n\nbutton.social-signin {\n  margin-bottom: 20px;\n  width: 220px;\n  height: 36px;\n  border: none;\n  border-radius: 2px;\n  color: #FFF;\n  font-family: 'Roboto', sans-serif;\n  font-weight: 500;\n  transition: 0.2s ease;\n  cursor: pointer; }\n\nbutton.social-signin:hover,\nbutton.social-signin:focus {\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.4);\n  transition: 0.2s ease; }\n\nbutton.social-signin:active {\n  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.4);\n  transition: 0.2s ease; }\n\nbutton.social-signin.facebook {\n  background: #32508E; }\n\nbutton.social-signin.twitter {\n  background: #55ACEE; }\n\nbutton.social-signin.google {\n  background: #DD4B39; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29udHJvbC9hdXRoZW50aWZpY2F0aW9uL0M6XFxVc2Vyc1xcQ0FSRE9OXFxEZXNrdG9wXFxNYXN0ZXIgQ0NNIGFubmVlIDFcXFByb2pldFxcTXlSZWFkaW5nQm9va3NQcm9qZWN0L3NyY1xcYXBwXFxjb250cm9sXFxhdXRoZW50aWZpY2F0aW9uXFxhdXRoZW50aWZpY2F0aW9uLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZixZQUFZO0VBQ1osYUFBYTtFQUNiLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIsd0NBQXdDLEVBQUE7O0FBRzFDO0VBQ0Usa0JBQWtCO0VBQ2xCLE1BQU07RUFDTixPQUFPO0VBQ1Asc0JBQXNCO0VBQ3RCLGFBQWE7RUFDYixZQUFZO0VBQ1osYUFBYSxFQUFBOztBQUdmO0VBQ0Usa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQixlQUFlLEVBQUE7O0FBR2pCOztFQUVFLGNBQWM7RUFDZCxzQkFBc0I7RUFDdEIsbUJBQW1CO0VBQ25CLFlBQVk7RUFDWixZQUFZO0VBQ1osWUFBWTtFQUNaLFlBQVk7RUFDWiw2QkFBNkI7RUFDN0IsaUNBQWlDO0VBQ2pDLGdCQUFnQjtFQUNoQixlQUFlO0VBQ2YscUJBQXFCLEVBQUE7O0FBR3ZCOztFQUVFLGdDQUFnQztFQUNoQyxjQUFjO0VBQ2QscUJBQXFCLEVBQUE7O0FBR3ZCO0VBQ0UsZ0JBQWdCO0VBQ2hCLFlBQVk7RUFDWixZQUFZO0VBQ1osbUJBQW1CO0VBQ25CLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsV0FBVztFQUNYLGlDQUFpQztFQUNqQyxnQkFBZ0I7RUFDaEIseUJBQXlCO0VBQ3pCLHFCQUFxQjtFQUNyQixlQUFlLEVBQUE7O0FBR2pCOztFQUVFLFlBQVk7RUFDWix3Q0FBd0M7RUFDeEMscUJBQXFCLEVBQUE7O0FBR3ZCO0VBQ0UsVUFBVTtFQUNWLHdDQUF3QztFQUN4QyxxQkFBcUIsRUFBQTs7QUFHdkI7RUFDRSxrQkFBa0I7RUFDbEIsTUFBTTtFQUNOLFVBQVU7RUFDVixzQkFBc0I7RUFDdEIsYUFBYTtFQUNiLFlBQVk7RUFDWixhQUFhO0VBQ2Isd0NBQXdDO0VBQ3hDLHNCQUFzQjtFQUN0QiwyQkFBMkI7RUFDM0IsMEJBQTBCLEVBQUE7O0FBRzVCO0VBQ0UsY0FBYztFQUNkLG1CQUFtQjtFQUNuQixlQUFlO0VBQ2YsV0FBVztFQUNYLGtCQUFrQixFQUFBOztBQUdwQjtFQUNFLG1CQUFtQjtFQUNuQixZQUFZO0VBQ1osWUFBWTtFQUNaLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsV0FBVztFQUNYLGlDQUFpQztFQUNqQyxnQkFBZ0I7RUFDaEIscUJBQXFCO0VBQ3JCLGVBQWUsRUFBQTs7QUFHakI7O0VBRUUsd0NBQXdDO0VBQ3hDLHFCQUFxQixFQUFBOztBQUd2QjtFQUNFLHdDQUF3QztFQUN4QyxxQkFBcUIsRUFBQTs7QUFHdkI7RUFDRSxtQkFBbUIsRUFBQTs7QUFHckI7RUFDRSxtQkFBbUIsRUFBQTs7QUFHckI7RUFDRSxtQkFBbUIsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2NvbnRyb2wvYXV0aGVudGlmaWNhdGlvbi9hdXRoZW50aWZpY2F0aW9uLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI2xvZ2luLWJveCB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIG1hcmdpbjogNSUgYXV0bztcclxuICB3aWR0aDogNjAwcHg7XHJcbiAgaGVpZ2h0OiA0MDBweDtcclxuICBiYWNrZ3JvdW5kOiAjRkZGO1xyXG4gIGJvcmRlci1yYWRpdXM6IDJweDtcclxuICBib3gtc2hhZG93OiAwIDJweCA0cHggcmdiYSgwLCAwLCAwLCAwLjQpO1xyXG59XHJcblxyXG4ubGVmdCB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogMDtcclxuICBsZWZ0OiAwO1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgcGFkZGluZzogNDBweDtcclxuICB3aWR0aDogMzAwcHg7XHJcbiAgaGVpZ2h0OiA0MDBweDtcclxufVxyXG5cclxuaDEge1xyXG4gIG1hcmdpbjogMCAwIDIwcHggMDtcclxuICBmb250LXdlaWdodDogMzAwO1xyXG4gIGZvbnQtc2l6ZTogMjhweDtcclxufVxyXG5cclxuaW5wdXRbdHlwZT1cInRleHRcIl0sXHJcbmlucHV0W3R5cGU9XCJwYXNzd29yZFwiXSB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gIHBhZGRpbmc6IDRweDtcclxuICB3aWR0aDogMjIwcHg7XHJcbiAgaGVpZ2h0OiAzMnB4O1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI0FBQTtcclxuICBmb250LWZhbWlseTogJ1JvYm90bycsIHNhbnMtc2VyaWY7XHJcbiAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICBmb250LXNpemU6IDE1cHg7XHJcbiAgdHJhbnNpdGlvbjogMC4ycyBlYXNlO1xyXG59XHJcblxyXG5pbnB1dFt0eXBlPVwidGV4dFwiXTpmb2N1cyxcclxuaW5wdXRbdHlwZT1cInBhc3N3b3JkXCJdOmZvY3VzIHtcclxuICBib3JkZXItYm90dG9tOiAycHggc29saWQgIzE2YTA4NTtcclxuICBjb2xvcjogIzE2YTA4NTtcclxuICB0cmFuc2l0aW9uOiAwLjJzIGVhc2U7XHJcbn1cclxuXHJcbmlucHV0W3R5cGU9XCJzdWJtaXRcIl0ge1xyXG4gIG1hcmdpbi10b3A6IDI4cHg7XHJcbiAgd2lkdGg6IDEyMHB4O1xyXG4gIGhlaWdodDogMzJweDtcclxuICBiYWNrZ3JvdW5kOiAjMTZhMDg1O1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBib3JkZXItcmFkaXVzOiAycHg7XHJcbiAgY29sb3I6ICNGRkY7XHJcbiAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xyXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICB0cmFuc2l0aW9uOiAwLjFzIGVhc2U7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG5pbnB1dFt0eXBlPVwic3VibWl0XCJdOmhvdmVyLFxyXG5pbnB1dFt0eXBlPVwic3VibWl0XCJdOmZvY3VzIHtcclxuICBvcGFjaXR5OiAwLjg7XHJcbiAgYm94LXNoYWRvdzogMCAycHggNHB4IHJnYmEoMCwgMCwgMCwgMC40KTtcclxuICB0cmFuc2l0aW9uOiAwLjFzIGVhc2U7XHJcbn1cclxuXHJcbmlucHV0W3R5cGU9XCJzdWJtaXRcIl06YWN0aXZlIHtcclxuICBvcGFjaXR5OiAxO1xyXG4gIGJveC1zaGFkb3c6IDAgMXB4IDJweCByZ2JhKDAsIDAsIDAsIDAuNCk7XHJcbiAgdHJhbnNpdGlvbjogMC4xcyBlYXNlO1xyXG59XHJcblxyXG4ucmlnaHQge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDA7XHJcbiAgcmlnaHQ6IDI1JTtcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gIHBhZGRpbmc6IDQwcHg7XHJcbiAgd2lkdGg6IDMwMHB4O1xyXG4gIGhlaWdodDogNDAwcHg7XHJcbiAgYmFja2dyb3VuZDogdXJsKCdodHRwczovL2dvby5nbC9ZYmt0U2onKTtcclxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcclxuICBib3JkZXItcmFkaXVzOiAwIDJweCAycHggMDtcclxufVxyXG5cclxuLnJpZ2h0IC5sb2dpbndpdGgge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIG1hcmdpbi1ib3R0b206IDQwcHg7XHJcbiAgZm9udC1zaXplOiAyOHB4O1xyXG4gIGNvbG9yOiAjRkZGO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuYnV0dG9uLnNvY2lhbC1zaWduaW4ge1xyXG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgd2lkdGg6IDIyMHB4O1xyXG4gIGhlaWdodDogMzZweDtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xyXG4gIGNvbG9yOiAjRkZGO1xyXG4gIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcclxuICBmb250LXdlaWdodDogNTAwO1xyXG4gIHRyYW5zaXRpb246IDAuMnMgZWFzZTtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbmJ1dHRvbi5zb2NpYWwtc2lnbmluOmhvdmVyLFxyXG5idXR0b24uc29jaWFsLXNpZ25pbjpmb2N1cyB7XHJcbiAgYm94LXNoYWRvdzogMCAycHggNHB4IHJnYmEoMCwgMCwgMCwgMC40KTtcclxuICB0cmFuc2l0aW9uOiAwLjJzIGVhc2U7XHJcbn1cclxuXHJcbmJ1dHRvbi5zb2NpYWwtc2lnbmluOmFjdGl2ZSB7XHJcbiAgYm94LXNoYWRvdzogMCAxcHggMnB4IHJnYmEoMCwgMCwgMCwgMC40KTtcclxuICB0cmFuc2l0aW9uOiAwLjJzIGVhc2U7XHJcbn1cclxuXHJcbmJ1dHRvbi5zb2NpYWwtc2lnbmluLmZhY2Vib29rIHtcclxuICBiYWNrZ3JvdW5kOiAjMzI1MDhFO1xyXG59XHJcblxyXG5idXR0b24uc29jaWFsLXNpZ25pbi50d2l0dGVyIHtcclxuICBiYWNrZ3JvdW5kOiAjNTVBQ0VFO1xyXG59XHJcblxyXG5idXR0b24uc29jaWFsLXNpZ25pbi5nb29nbGUge1xyXG4gIGJhY2tncm91bmQ6ICNERDRCMzk7XHJcbn1cclxuXHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/control/authentification/authentification.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/control/authentification/authentification.component.ts ***!
  \************************************************************************/
/*! exports provided: AuthentificationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthentificationComponent", function() { return AuthentificationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var angularx_social_login__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angularx-social-login */ "./node_modules/angularx-social-login/angularx-social-login.es5.js");
/* harmony import */ var _services_jwt_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/jwt.service */ "./src/app/services/jwt.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");





var AuthentificationComponent = /** @class */ (function () {
    function AuthentificationComponent(authService, jwtService, http) {
        this.authService = authService;
        this.jwtService = jwtService;
        this.http = http;
    }
    AuthentificationComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.authService.authState.subscribe(function (user) {
            _this.user = user;
            _this.loggedIn = (user != null);
            if (user != null) {
                _this.getJWT(user.name).subscribe(function (sub) {
                    return localStorage.setItem('tokenJwt', sub.token);
                });
            }
        });
    };
    AuthentificationComponent.prototype.signInWithFB = function () {
        this.authService.signIn(angularx_social_login__WEBPACK_IMPORTED_MODULE_2__["FacebookLoginProvider"].PROVIDER_ID);
    };
    AuthentificationComponent.prototype.signOut = function () {
        this.authService.signOut();
        localStorage.clear();
    };
    AuthentificationComponent.prototype.getJWT = function (name) {
        return this.jwtService.getToken(name);
    };
    AuthentificationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-authentification',
            template: __webpack_require__(/*! ./authentification.component.html */ "./src/app/control/authentification/authentification.component.html"),
            styles: [__webpack_require__(/*! ./authentification.component.scss */ "./src/app/control/authentification/authentification.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [angularx_social_login__WEBPACK_IMPORTED_MODULE_2__["AuthService"], _services_jwt_service__WEBPACK_IMPORTED_MODULE_3__["JwtService"], _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]])
    ], AuthentificationComponent);
    return AuthentificationComponent;
}());



/***/ }),

/***/ "./src/app/guards/authentication.guard.ts":
/*!************************************************!*\
  !*** ./src/app/guards/authentication.guard.ts ***!
  \************************************************/
/*! exports provided: AuthenticationGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthenticationGuard", function() { return AuthenticationGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var angularx_social_login__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angularx-social-login */ "./node_modules/angularx-social-login/angularx-social-login.es5.js");
/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! jwt-decode */ "./node_modules/jwt-decode/lib/index.js");
/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(jwt_decode__WEBPACK_IMPORTED_MODULE_4__);





var AuthenticationGuard = /** @class */ (function () {
    function AuthenticationGuard(router, authService) {
        this.router = router;
        this.authService = authService;
    }
    AuthenticationGuard.prototype.canActivate = function (route, state) {
        var _this = this;
        this.authService.authState.subscribe(function (user) {
            _this.user = user;
            _this.loggedIn = (user != null);
        });
        var token = localStorage.getItem('tokenJwt');
        if (this.getDecodedAccessToken(token) !== null &&
            this.getDecodedAccessToken(token).auth[0].authority === 'ROLE_CLIENT') {
            return true;
        }
        else {
            this.router.navigate(['home']);
            if (this.loggedIn === true) {
                this.authService.signOut();
                localStorage.clear();
            }
        }
        return false;
    };
    AuthenticationGuard.prototype.getDecodedAccessToken = function (token) {
        try {
            return jwt_decode__WEBPACK_IMPORTED_MODULE_4__(token);
        }
        catch (Error) {
            return null;
        }
    };
    AuthenticationGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            angularx_social_login__WEBPACK_IMPORTED_MODULE_3__["AuthService"]])
    ], AuthenticationGuard);
    return AuthenticationGuard;
}());



/***/ }),

/***/ "./src/app/mappers/manga-mapper.ts":
/*!*****************************************!*\
  !*** ./src/app/mappers/manga-mapper.ts ***!
  \*****************************************/
/*! exports provided: MangaMapper */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MangaMapper", function() { return MangaMapper; });
var MangaMapper = /** @class */ (function () {
    function MangaMapper() {
    }
    MangaMapper.prototype.MangaPresentationDtoToDomain = function (manga) {
        return {
            categories: manga.c,
            id: manga.i,
            image: manga.im,
            date: manga.ld,
            title: manga.t
        };
    };
    MangaMapper.prototype.MangaInformationDtoToDomain = function (manga) {
        return {
            alias: manga.alias,
            artist: manga.artist,
            author: manga.author,
            categories: manga.categories,
            chapters: manga.chapters,
            chapters_len: manga.chapters_len,
            created: manga.created,
            description: manga.description,
            image: manga.image,
            imageURL: manga.imageURL,
            language: manga.language,
            last_chapter_date: manga.last_chapter_date,
            released: manga.released,
            title: manga.title
        };
    };
    return MangaMapper;
}());



/***/ }),

/***/ "./src/app/services/book.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/book.service.ts ***!
  \******************************************/
/*! exports provided: BookService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BookService", function() { return BookService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var BookService = /** @class */ (function () {
    function BookService(http) {
        this.http = http;
        this.URL_BOOKS = 'https://my-reading-books-back.herokuapp.com/book/';
        this.URL_BOOKS_AUTHOR = 'https://my-reading-books-back.herokuapp.com/book/author/';
        this.URL_BOOK_CHAPTER = 'https://my-reading-books-back.herokuapp.com/chapter/book/';
        this.URL_CHAPTER = 'https://my-reading-books-back.herokuapp.com/chapter/';
        this.URL_DELETE_BOOK = 'https://my-reading-books-back-dev.herokuapp.com/book/delete/';
        this.URL_EDIT_BOOK = 'https://my-reading-books-back-dev.herokuapp.com/book/update/';
        this.URL_DELETE_CHAPTER = 'https://my-reading-books-back-dev.herokuapp.com/chapter/delete/';
        this.URL_EDIT_CHAPTER = 'https://my-reading-books-back-dev.herokuapp.com/chapter/update/';
        this.httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                accept: 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8',
                'accept-language': 'fr-FR,fr;q=0.9,en-US;q=0.8,en;q=0.7',
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'GET, POST, DELETE, PUT',
                Authorization: 'Bearer ' + this.getTokenValid()
            })
        };
        this.jsonApplicationHeader = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Content-Type': 'application/json',
                Authorization: 'Bearer ' + this.getTokenValid()
            })
        };
    }
    BookService.prototype.getBooks = function () {
        return this.http.get(this.URL_BOOKS, this.httpOptions);
    };
    BookService.prototype.getBooksOfAuthor = function (email) {
        return this.http.get(this.URL_BOOKS_AUTHOR + email, this.httpOptions);
    };
    BookService.prototype.getBook = function (id) {
        return this.http.get(this.URL_BOOKS + id, this.httpOptions);
    };
    BookService.prototype.getBookChapter = function (id) {
        return this.http.get(this.URL_BOOK_CHAPTER + id, this.httpOptions);
    };
    BookService.prototype.postBook = function (book) {
        return this.http.post(this.URL_BOOKS, book, this.jsonApplicationHeader);
    };
    BookService.prototype.postChapter = function (bookChapter) {
        var result = this.http.post(this.URL_CHAPTER, bookChapter, this.jsonApplicationHeader);
        result.subscribe();
        return result;
    };
    BookService.prototype.deleteBook = function (id) {
        return this.http.delete(this.URL_DELETE_BOOK + id, this.jsonApplicationHeader);
    };
    BookService.prototype.deleteChapterBook = function (id) {
        return this.http.delete(this.URL_DELETE_CHAPTER + id, this.jsonApplicationHeader);
    };
    BookService.prototype.editBook = function (book, id) {
        return this.http.patch(this.URL_EDIT_BOOK + id, book, this.jsonApplicationHeader);
    };
    BookService.prototype.editBookChapter = function (chapter, id) {
        return this.http.patch(this.URL_EDIT_CHAPTER + id, chapter, this.jsonApplicationHeader);
    };
    BookService.prototype.getTokenValid = function () {
        return localStorage.getItem('tokenJwt');
    };
    BookService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], BookService);
    return BookService;
}());



/***/ }),

/***/ "./src/app/services/definition-of-word.service.ts":
/*!********************************************************!*\
  !*** ./src/app/services/definition-of-word.service.ts ***!
  \********************************************************/
/*! exports provided: DefinitionOfWordService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DefinitionOfWordService", function() { return DefinitionOfWordService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var DefinitionOfWordService = /** @class */ (function () {
    function DefinitionOfWordService(http) {
        this.http = http;
        this.DEF_FR = 'https://fr.wikipedia.org/w/api.php?action=query&prop=extracts&origin=*&format=json&titles=';
        this.DEF_EN = 'https://en.wikipedia.org/w/api.php?action=query&prop=extracts&origin=*&format=json&titles=';
    }
    DefinitionOfWordService.prototype.getDefinitionWord = function (word) {
        return this.http.get(this.DEF_FR + word);
    };
    DefinitionOfWordService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], DefinitionOfWordService);
    return DefinitionOfWordService;
}());



/***/ }),

/***/ "./src/app/services/jwt.service.ts":
/*!*****************************************!*\
  !*** ./src/app/services/jwt.service.ts ***!
  \*****************************************/
/*! exports provided: JwtService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JwtService", function() { return JwtService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var JwtService = /** @class */ (function () {
    function JwtService(http) {
        this.http = http;
        this.URL_JWT_USER = 'https://my-reading-books-back.herokuapp.com/signin/';
        this.httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                accept: 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8',
                'accept-language': 'fr-FR,fr;q=0.9,en-US;q=0.8,en;q=0.7',
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'GET, POST, DELETE, PUT',
                Authorization: ' Bearer eyJhbGciO' +
                    'iJIUzI1NiJ9.eyJzdWIiOiJrZXYiLCJhdXRoIjpbeyJhdXRob3JpdHkiOiJST0xFX0NMSUVOVCJ9XSwi' +
                    'aWF0IjoxNTU1OTI2OTg1LCJleHAiOjE1NTU5MzQxODV9.IVnb2FvENXWjZQ1u4O_DQis6Wda11ZIqJ1QgYQfrf0U',
                responseType: 'text'
            })
        };
    }
    JwtService.prototype.getToken = function (name) {
        return this.http.get(this.URL_JWT_USER +
            name.replace(/[ÿ]/g, 'y').replace(/[Ññ]/g, 'n')
                .replace(/[ÙÚÛÜùúûü]/g, 'u').replace(/[ÌÍÎÏìíîï]/g, 'i')
                .replace(/[Çç]/g, 'c').replace(/[ÒÓÔÕÖØòóôõöø]/g, 'o')
                .replace(' ', '').replace(/[ÈÉÊËèéêë]/g, 'e')
                .replace(/[ÀÁÂÃÄÅàáâãäå]/g, 'a'), this.httpOptions);
    };
    JwtService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], JwtService);
    return JwtService;
}());



/***/ }),

/***/ "./src/app/services/manga.service.ts":
/*!*******************************************!*\
  !*** ./src/app/services/manga.service.ts ***!
  \*******************************************/
/*! exports provided: MangaService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MangaService", function() { return MangaService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var MangaService = /** @class */ (function () {
    function MangaService(http) {
        this.http = http;
        this.URL_MANGA = 'https://www.mangaeden.com/api/list/0/';
        this.URL_MANGA_INFO = 'https://www.mangaeden.com/api/manga/';
        this.URL_MANGA_CHAPTER = 'https://www.mangaeden.com/api/chapter/';
        this.httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                accept: 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8',
                'accept-language': 'fr-FR,fr;q=0.9,en-US;q=0.8,en;q=0.7',
            })
        };
    }
    MangaService.prototype.getMangas = function () {
        return this.http.get(this.URL_MANGA, this.httpOptions);
    };
    MangaService.prototype.getMangasPaginateWith500ByPage = function (pageNumber) {
        return this.http.get(this.URL_MANGA + '?p=' + pageNumber, this.httpOptions);
    };
    MangaService.prototype.getMangasWithPagination = function (pageNumber, numberInPage) {
        return this.http.get(this.URL_MANGA + '?p=' + pageNumber + '&l=' + numberInPage, this.httpOptions);
    };
    MangaService.prototype.getMangaInformation = function (idManga) {
        return this.http.get(this.URL_MANGA_INFO + idManga + '/');
    };
    MangaService.prototype.getMangaChapter = function (idMangaChapter) {
        return this.http.get(this.URL_MANGA_CHAPTER + idMangaChapter + '/');
    };
    MangaService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], MangaService);
    return MangaService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\CARDON\Desktop\Master CCM annee 1\Projet\MyReadingBooksProject\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map