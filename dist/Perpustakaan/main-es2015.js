(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
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
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-sidebar></app-sidebar>\r\n<div class=\"sidebar\" *ngIf=\"getLogindata(); else notget\">\r\n  <div id=\"content\" class=\"content-container\" (scroll)=\"onWindowScroll($event);\">\r\n    <router-outlet></router-outlet>\r\n  </div>\r\n</div>\r\n\r\n<ng-template #notget>\r\n  <div id=\"homepage\" (scroll)=\"onWindowScroll($event);\">\r\n    <router-outlet></router-outlet>\r\n  </div>\r\n</ng-template>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/booklist/booklist.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/booklist/booklist.component.html ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div id=\"navbar\" class=\"header-container\">\r\n  <div class=\"row\">\r\n    <div class=\"col-lg-6 col-md-6 col-sm-6 left-navbar\">\r\n      <h2>Daftar Buku</h2>\r\n    </div>\r\n    <div class=\"col-lg-6 col-md-6 col-sm-6 right-navbar\">\r\n      <button class=\"btn btn-icon btn-new-menu\" style=\"color: #fff;margin-right: 20px; background-color: #107c41; box-shadow: 0 0 0 0 rgba(34,36,38,.15)\"\r\n              (click)=\"openDownloadModal(DownloadTemplate)\">\r\n        <i class=\"download icon\"></i>\r\n        Unduh Excel\r\n      </button>\r\n      <button class=\"btn btn-primary btn-icon btn-new-menu\" (click)=\"openModal(template)\">\r\n        <i class=\"plus icon\"></i>\r\n        Tambahkan Buku\r\n      </button>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<div *ngIf=\"loading;else loads\" class=\"ui segment\" style=\"padding: 200px 0 0 0 \">\r\n  <div class=\"ui active inverted dimmer\">\r\n    <div class=\"ui large text loader\">Loading</div>\r\n  </div>\r\n</div>\r\n\r\n<ng-template #loads>\r\n\r\n  <div class=\"mt-3 pb-0\" style=\"width: 100%\">\r\n    <div class=\"row align-self-center\" style=\"margin-top: 20px; z-index: 98;\">\r\n      <div class=\"col-xl-8 col-lg-8 col-md-8 col-sm-8\">\r\n        <div class=\"category\" style=\"display: flex\">\r\n          <ng-select [items]=\"Category\"\r\n                     bindLabel=\"kategori\"\r\n                     placeholder=\"Kategori...\"\r\n                     autofocus\r\n                     bindValue=\"kategori\"\r\n                     [(ngModel)]=\"selectedCategory\"\r\n                     (change)=\"onCategoryChange($event)\"\r\n                     style=\"width: 120%\">\r\n          </ng-select>\r\n          <div class=\"ui icon button\" style=\"margin-left: 5px\" (click)=\"openModal(CategoryTemplate)\">\r\n            <i class=\"edit outline icon\"></i>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"col-xl-4 col-lg-4 col-md-4 col-sm-4\">\r\n        <div class=\"ui search\">\r\n          <input class=\"prompt\" style=\"width: 100%\" type=\"text\" placeholder=\"Mencari buku...\" [(ngModel)]=\"search\" (keyup)=\"onSearch(search)\" (search)=\"onSearch(search)\">\r\n          <div class=\"results\"></div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"row align-self-center\">\r\n    </div>\r\n  </div>\r\n\r\n  <div *ngIf=\"nodata; else theredata\" class=\"card\" style=\"margin-top: 10px; padding: 10px\">\r\n    <div style=\"text-align:center ;\">\r\n      <p class=\"ml-2\" style=\"font-size: 18px; padding: 2rem;\">Pencarian tidak ditemukan!</p>\r\n    </div>\r\n  </div>\r\n\r\n  <ng-template #theredata>\r\n    <table class=\"ui celled padded table\">\r\n      <thead>\r\n      <tr><th class=\"single line\">Buku</th>\r\n        <th>Judul</th>\r\n        <th>Pengarang</th>\r\n        <th>Penerbit</th>\r\n        <th>Tahun Terbit</th>\r\n        <th>Klasifikasi</th>\r\n        <th>Kategori</th>\r\n        <th>Umum/Res</th>\r\n        <th>Bahasa</th>\r\n        <th>Lokasi</th>\r\n        <th>Stok</th>\r\n        <th>Edit</th>\r\n      </tr></thead>\r\n      <tbody>\r\n      <!--  <tr *ngFor=\"let item of pageOfItems | paginate: config\">-->\r\n      <tr *ngFor=\"let item of pageOfItems\">\r\n        <td style=\"text-align: center; margin: 0 auto\"><img src=\"{{item.gambar}}\" style=\"height: 100px\"><div>{{item.buku_id}}</div><div> Rating : {{item.rating}}</div></td>\r\n        <td>{{item.judul}}</td>\r\n        <td>{{item.pengarang}}</td>\r\n        <td>{{item.penerbit}}</td>\r\n        <td>{{item.tahun_terbit}}</td>\r\n        <td>{{item.klasifikasi}}</td>\r\n        <td>{{item.kategori}}</td>\r\n        <td>{{item.umum_res}}</td>\r\n        <td>{{item.bahasa}}</td>\r\n        <td>{{item.lokasi}}</td>\r\n        <td>{{item.stok}}</td>\r\n        <td>\r\n          <div style=\"display: block\">\r\n            <a (click)=\"onView(item.buku_id, update)\"><i class=\"edit outline icon\"></i></a>\r\n            <a></a>\r\n            <a (click)=\"onModalBarcode(item.buku_id, item.judul, BarcodeTemplate)\"><i class=\"barcode icon\"></i></a>\r\n            <a></a>\r\n            <a (click)=\"onModalDelete(item.buku_id, delete)\"><i class=\"trash alternate outline icon\"></i></a>\r\n            <a></a>\r\n            <a routerLink=\"/books/rating/{{item.buku_id}}\"><i class=\"star outline icon\"></i></a>\r\n          </div>\r\n        </td>\r\n      </tr>\r\n      </tbody>\r\n      <tfoot>\r\n      <tr><th colspan=\"12\">\r\n        <pagination previousText=\"&lsaquo;\" nextText=\"&rsaquo;\" firstText=\"&laquo;\" lastText=\"&raquo;\" [boundaryLinks]=\"true\"\r\n                    [totalItems]=\"config.totalItems\" [itemsPerPage]=\"config.itemsPerPage\" [(ngModel)]=\"config.currentPage\" (pageChanged)=\"onPageChange($event)\"></pagination>\r\n      </th></tr>\r\n      </tfoot>\r\n    </table>\r\n  </ng-template>\r\n</ng-template>\r\n\r\n<ng-template #template>\r\n  <div class=\"modal-header\">\r\n    <h4 class=\"modal-title pull-left\">Tambahkan Buku</h4>\r\n    <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"modalRef.hide()\">\r\n      <span aria-hidden=\"true\">&times;</span>\r\n    </button>\r\n  </div>\r\n  <div class=\"modal-body\">\r\n    <form class=\"ui form\" #bookForm=\"ngForm\">\r\n\r\n      <div class=\"required field\" [class.error]=\"judul.invalid && judul.touched\">\r\n        <label>Judul</label>\r\n        <input required #judul=\"ngModel\" type=\"text\" name=\"judul\" placeholder=\"Judul\" [(ngModel)]=\"inputBook.judul\">\r\n      </div>\r\n\r\n      <div class=\"required field\" [class.error]=\"pengarang.invalid && pengarang.touched\">\r\n        <label>Pengarang</label>\r\n        <input required #pengarang=\"ngModel\" type=\"text\" name=\"pengarang\" placeholder=\"pengarang\" [(ngModel)]=\"inputBook.pengarang\">\r\n      </div>\r\n\r\n      <div class=\"required field\" [class.error]=\"deskripsi.invalid && deskripsi.touched\">\r\n        <label>Deskripsi</label>\r\n        <textarea required rows=\"2\" #deskripsi=\"ngModel\" type=\"text\" name=\"Deskripsi\" placeholder=\"Deskripsi\" [(ngModel)]=\"inputBook.deskripsi\"></textarea>\r\n      </div>\r\n\r\n      <div class=\"two fields\">\r\n        <div class=\"field\">\r\n          <label>Edisi</label>\r\n          <input #edisi=\"ngModel\" type=\"text\" name=\"edisi\" placeholder=\"Edisi\" [(ngModel)]=\"inputBook.edisi\">\r\n        </div>\r\n        <div class=\"required field\" [class.error]=\"tahun_terbit.invalid && tahun_terbit.touched\">\r\n          <label>Tahun Terbit</label>\r\n          <input required #tahun_terbit=\"ngModel\" type=\"text\" name=\"tahun_terbit\" placeholder=\"tahun_terbit\" [(ngModel)]=\"inputBook.tahun_terbit\">\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"two fields\">\r\n        <div class=\"required field\" [class.error]=\"penerbit.invalid && penerbit.touched\">\r\n          <label>Penerbit</label>\r\n          <input required #penerbit=\"ngModel\" type=\"text\" name=\"Penerbit\" placeholder=\"Penerbit\" [(ngModel)]=\"inputBook.penerbit\">\r\n        </div>\r\n        <div class=\"required field\">\r\n          <label>ISBN</label>\r\n          <input #isbn=\"ngModel\" type=\"text\" name=\"isbn\" placeholder=\"isbn\" [(ngModel)]=\"inputBook.isbn\">\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"two fields\">\r\n        <div class=\"required field\" [class.error]=\"bahasa.invalid && bahasa.touched\">\r\n          <label>Bahasa</label>\r\n          <input required #bahasa=\"ngModel\" type=\"text\" name=\"bahasa\" placeholder=\"bahasa\" [(ngModel)]=\"inputBook.bahasa\">\r\n        </div>\r\n        <div class=\"field\">\r\n          <label>Kota Terbit</label>\r\n          <input #kota_terbit=\"ngModel\" type=\"text\" name=\"Kota_Terbit\" placeholder=\"Kota Terbit\" [(ngModel)]=\"inputBook.kota_terbit\">\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"fields\">\r\n        <div class=\"required eight wide field\" [class.error]=\"klasifikasi.invalid && klasifikasi.touched\">\r\n          <label>Klasifikasi</label>\r\n          <input required #klasifikasi=\"ngModel\" type=\"text\" name=\"klasifikasi\" placeholder=\"klasifikasi\" [(ngModel)]=\"inputBook.klasifikasi\">\r\n        </div>\r\n        <div class=\"required four wide field\" [class.error]=\"umum_res.invalid && umum_res.touched\">\r\n          <label>Umum/Res</label>\r\n          <input required #umum_res=\"ngModel\" type=\"text\" name=\"Umum/Res\" placeholder=\"Umum/Res\" [(ngModel)]=\"inputBook.umum_res\">\r\n        </div>\r\n        <div class=\"required four wide field\" [class.error]=\"stok.invalid && stok.touched\">\r\n          <label>Stok</label>\r\n          <input required pattern=\"[0-9]*\" #stok=\"ngModel\" type=\"number\" name=\"stok\" placeholder=\"Stok\" [(ngModel)]=\"inputBook.stok\">\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"required field\" [class.error]=\"lokasi.invalid && lokasi.touched\">\r\n        <label>Lokasi Buku</label>\r\n        <input required #lokasi=\"ngModel\" type=\"text\" name=\"lokasi_buku\" placeholder=\"lokasi Buku\" [(ngModel)]=\"inputBook.lokasi\">\r\n      </div>\r\n\r\n      <div class=\"required field\" [class.error]=\"gambar.invalid && gambar.touched\">\r\n        <label>Link Gambar</label>\r\n        <input required #gambar=\"ngModel\" type=\"text\" name=\"gambar\" placeholder=\"Link Gambar\" [(ngModel)]=\"inputBook.gambar\">\r\n      </div>\r\n    </form>\r\n  </div>\r\n  <div class=\"modal-footer\">\r\n    <button class=\"ui button\" type=\"submit\" (click)=\"onSubmit(inputBook, BarcodeTemplate)\">Submit</button>\r\n  </div>\r\n</ng-template>\r\n\r\n<ng-template #update>\r\n  <div class=\"modal-header\">\r\n    <h4 class=\"modal-title pull-left\">Update Buku</h4>\r\n    <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"modalRef.hide()\">\r\n      <span aria-hidden=\"true\">&times;</span>\r\n    </button>\r\n  </div>\r\n  <div class=\"modal-body\">\r\n    <form class=\"ui form\" #bookForm=\"ngForm\">\r\n\r\n      <div class=\"required field\" [class.error]=\"judul.invalid && judul.touched\">\r\n        <label>Judul</label>\r\n        <input required #judul=\"ngModel\" type=\"text\" name=\"judul\" placeholder=\"Judul\" [(ngModel)]=\"updateBook.judul\">\r\n      </div>\r\n\r\n      <div class=\"required field\" [class.error]=\"pengarang.invalid && pengarang.touched\">\r\n        <label>Pengarang</label>\r\n        <input required #pengarang=\"ngModel\" type=\"text\" name=\"pengarang\" placeholder=\"pengarang\" [(ngModel)]=\"updateBook.pengarang\">\r\n      </div>\r\n\r\n      <div class=\"required field\" [class.error]=\"deskripsi.invalid && deskripsi.touched\">\r\n        <label>Deskripsi</label>\r\n        <textarea required rows=\"2\" #deskripsi=\"ngModel\" type=\"text\" name=\"Deskripsi\" placeholder=\"Deskripsi\" [(ngModel)]=\"updateBook.deskripsi\"></textarea>\r\n      </div>\r\n\r\n      <div class=\"two fields\">\r\n        <div class=\"field\">\r\n          <label>Edisi</label>\r\n          <input #edisi=\"ngModel\" type=\"text\" name=\"edisi\" placeholder=\"Edisi\" [(ngModel)]=\"updateBook.edisi\">\r\n        </div>\r\n        <div class=\"required field\" [class.error]=\"tahun_terbit.invalid && tahun_terbit.touched\">\r\n          <label>Tahun Terbit</label>\r\n          <input required #tahun_terbit=\"ngModel\" type=\"text\" name=\"tahun_terbit\" placeholder=\"tahun_terbit\" [(ngModel)]=\"updateBook.tahun_terbit\">\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"two fields\">\r\n        <div class=\"required field\" [class.error]=\"penerbit.invalid && penerbit.touched\">\r\n          <label>Penerbit</label>\r\n          <input required #penerbit=\"ngModel\" type=\"text\" name=\"Penerbit\" placeholder=\"Penerbit\" [(ngModel)]=\"updateBook.penerbit\">\r\n        </div>\r\n        <div class=\"required field\">\r\n          <label>ISBN</label>\r\n          <input #isbn=\"ngModel\" type=\"text\" name=\"isbn\" placeholder=\"isbn\" [(ngModel)]=\"updateBook.isbn\">\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"two fields\">\r\n        <div class=\"required field\" [class.error]=\"bahasa.invalid && bahasa.touched\">\r\n          <label>Bahasa</label>\r\n          <input required #bahasa=\"ngModel\" type=\"text\" name=\"bahasa\" placeholder=\"bahasa\" [(ngModel)]=\"updateBook.bahasa\">\r\n        </div>\r\n        <div class=\"field\">\r\n          <label>Kota Terbit</label>\r\n          <input #kota_terbit=\"ngModel\" type=\"text\" name=\"Kota_Terbit\" placeholder=\"Kota Terbit\" [(ngModel)]=\"updateBook.kota_terbit\">\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"fields\">\r\n        <div class=\"required eight wide field\" [class.error]=\"klasifikasi.invalid && klasifikasi.touched\">\r\n          <label>Klasifikasi</label>\r\n          <input required #klasifikasi=\"ngModel\" type=\"text\" name=\"klasifikasi\" placeholder=\"klasifikasi\" [(ngModel)]=\"updateBook.klasifikasi\">\r\n        </div>\r\n        <div class=\"required four wide field\" [class.error]=\"umum_res.invalid && umum_res.touched\">\r\n          <label>Umum/Res</label>\r\n          <input required #umum_res=\"ngModel\" type=\"text\" name=\"Umum/Res\" placeholder=\"Umum/Res\" [(ngModel)]=\"updateBook.umum_res\">\r\n        </div>\r\n        <div class=\"required four wide field\" [class.error]=\"stok.invalid && stok.touched\">\r\n          <label>Stok</label>\r\n          <input required pattern=\"[0-9]*\" #stok=\"ngModel\" type=\"number\" name=\"stok\" placeholder=\"Stok\" [(ngModel)]=\"updateBook.stok\">\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"required field\" [class.error]=\"lokasi.invalid && lokasi.touched\">\r\n        <label>Lokasi Buku</label>\r\n        <input required #lokasi=\"ngModel\" type=\"text\" name=\"lokasi_buku\" placeholder=\"lokasi Buku\" [(ngModel)]=\"updateBook.lokasi\">\r\n      </div>\r\n\r\n      <div class=\"required field\" [class.error]=\"gambar.invalid && gambar.touched\">\r\n        <label>Link Gambar</label>\r\n        <input required #gambar=\"ngModel\" type=\"text\" name=\"gambar\" placeholder=\"Link Gambar\" [(ngModel)]=\"updateBook.gambar\">\r\n      </div>\r\n    </form>\r\n  </div>\r\n  <div class=\"modal-footer\">\r\n    <button class=\"ui button\" type=\"submit\" (click)=\"onUpdate(updateBook)\">Update</button>\r\n  </div>\r\n</ng-template>\r\n\r\n<ng-template #delete>\r\n  <div class=\"modal-body text-center\">\r\n    <p>Do you want to confirm?</p>\r\n    <button type=\"button\" class=\"btn btn-default\" (click)=\"onDelete(deleteID)\" >Yes</button>\r\n    <button type=\"button\" class=\"btn btn-primary\" (click)=\"onNotDelete()\" >No</button>\r\n  </div>\r\n</ng-template>\r\n\r\n<ng-template #CategoryTemplate>\r\n  <div class=\"modal-header\">\r\n    <h4 class=\"modal-title pull-left\">Edit Kategori</h4>\r\n    <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"modalRef.hide()\">\r\n      <span aria-hidden=\"true\">&times;</span>\r\n    </button>\r\n  </div>\r\n  <div class=\"modal-body\">\r\n    <form class=\"ui form\" #CategoryForm=\"ngForm\">\r\n\r\n      <div *ngFor=\"let type of Category\" class=\"ui left labeled button\" tabindex=\"0\" style=\"margin-top: 2px; margin-right: 2px\">\r\n        <a class=\"ui basic label\">\r\n          {{type.kategori}}\r\n        </a>\r\n        <div class=\"ui icon button\" (click)=\"onDeleteCategory(type.kategori)\">\r\n          <i class=\"trash icon\"></i>\r\n        </div>\r\n      </div>\r\n\r\n\r\n      <div class=\"required field\" [class.error]=\"kategori.invalid && kategori.touched\" style=\"margin-top: 1rem\">\r\n        <label>Kategori</label>\r\n        <input required #kategori=\"ngModel\" type=\"text\" name=\"judul\" placeholder=\"Kategori\" [(ngModel)]=\"inputCategory\">\r\n      </div>\r\n    </form>\r\n  </div>\r\n  <div class=\"modal-footer\">\r\n    <button class=\"ui button\" type=\"submit\" (click)=\"onSubmitCategory(inputCategory)\">Submit</button>\r\n  </div>\r\n</ng-template>\r\n\r\n<ng-template #DownloadTemplate>\r\n  <div class=\"modal-header\">\r\n    <h4 class=\"modal-title pull-left\">Download Tabel</h4>\r\n    <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"modalRef.hide()\">\r\n      <span aria-hidden=\"true\">&times;</span>\r\n    </button>\r\n  </div>\r\n  <div class=\"modal-body\">\r\n    <div *ngIf=\"loadingDL;else loadsDL\" class=\"ui segment\" style=\"padding: 200px 0 0 0 \">\r\n      <div class=\"ui active inverted dimmer\">\r\n        <div class=\"ui large text loader\">Memproses tabel</div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</ng-template>\r\n\r\n<ng-template #loadsDL>\r\n  <div style=\"text-align: center; padding: 10px\">\r\n    <button class=\"btn btn-icon btn-new-menu\" style=\"color: #fff;margin-right: 20px; background-color: #107c41; box-shadow: 0 0 0 0 rgba(34,36,38,.15)\"\r\n            (click)=\"onDownload()\">\r\n      <i class=\"download icon\"></i>\r\n      Unduh\r\n    </button>\r\n  </div>\r\n</ng-template>\r\n\r\n<ng-template #BarcodeTemplate>\r\n  <div class=\"modal-header\">\r\n    <h4 class=\"modal-title pull-left\">Barcode</h4>\r\n    <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"modalRef.hide()\">\r\n      <span aria-hidden=\"true\">&times;</span>\r\n    </button>\r\n  </div>\r\n  <div class=\"modal-body\">\r\n    <div class=\"ui segment\" style=\"padding: 10px 0 0 0 \">\r\n      <p style=\"text-align: center; font-size: 20px; font-weight: bold\">{{this.barcodeTitle}}</p>\r\n      <div style=\"text-align: center; padding: 10px\">\r\n        <ngx-barcode id=\"barcodesvg\" [bc-value]=\"barcode\"\r\n                     [bc-display-value]=\"true\"\r\n                     [bc-format]=\"'CODE128'\"\r\n                     [bc-element-type]=\"'svg'\">\r\n        </ngx-barcode>\r\n      </div>\r\n      <div style=\"text-align: center; padding: 10px\">\r\n        <button class=\"btn btn-icon btn-new-menu\"\r\n                style=\"color: #fff; background-color: #107c41;\r\n                box-shadow: 0 0 0 0 rgba(34,36,38,.15)\"\r\n                (click)=\"onDownloadBarcode()\">\r\n          <i class=\"download icon\"></i>\r\n          Unduh\r\n        </button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</ng-template>\r\n\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/booklist/rating/rating.component.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/booklist/rating/rating.component.html ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div id=\"navbar\" class=\"header-container\">\n  <div class=\"row\">\n    <div class=\"col-lg-6 col-md-6 col-sm-6 left-navbar\">\n      <h2>Komentar dan Rating</h2>\n    </div>\n    <div class=\"col-lg-6 col-md-6 col-sm-6 right-navbar\">\n      <button class=\"btn btn-icon btn-new-menu\" style=\"color: #fff;margin-right: 20px; background-color: #107c41; box-shadow: 0 0 0 0 rgba(34,36,38,.15)\"\n              (click)=\"openDownloadModal(DownloadTemplate)\">\n        <i class=\"download icon\"></i>\n        Unduh Excel\n      </button>\n      <button class=\"btn btn-primary btn-icon btn-new-menu\" routerLink=\"/books\">\n        <i class=\"arrow alternate circle left outline icon\"></i>\n        Kembali\n      </button>\n    </div>\n  </div>\n</div>\n\n<div *ngIf=\"loading;else loads\" class=\"ui segment\" style=\"padding: 200px 0 0 0 \">\n  <div class=\"ui active inverted dimmer\">\n    <div class=\"ui large text loader\">Loading</div>\n  </div>\n</div>\n\n<ng-template #loads>\n\n  <div class=\"mt-3 pb-0\" style=\"width: 100%\">\n    <div class=\"row align-self-center\" style=\"margin-top: 10px; z-index: 98;\">\n      <div class=\"col-xl-6 col-lg-6 col-md-6 col-sm-6\">\n        <table class=\"ui definition table\">\n          <tbody>\n          <tr>\n            <td class=\"two wide column\">Judul Buku</td>\n            <td>{{BookInfo.judul}}</td>\n          </tr>\n          <tr>\n            <td>Pengarang</td>\n            <td>{{BookInfo.pengarang}}</td>\n          </tr>\n          <tr>\n            <td>Penerbit / Tahun</td>\n            <td>{{BookInfo.penerbit}} / {{BookInfo.tahun_terbit}}</td>\n          </tr>\n          <tr>\n            <td>Rating</td>\n            <td>{{BookInfo.rating}}</td>\n          </tr>\n          </tbody>\n        </table>\n      </div>\n    </div>\n    <div class=\"row align-self-center\" style=\"margin-top: 10px\">\n\n    </div>\n  </div>\n\n  <div *ngIf=\"nodata; else theredata\" class=\"card\" style=\"margin-top: 10px; padding: 10px\">\n    <div style=\"text-align:center ;\">\n      <p class=\"ml-2\" style=\"font-size: 18px; padding: 2rem;\">Pencarian tidak ditemukan!</p>\n    </div>\n  </div>\n\n  <ng-template #theredata>\n    <table class=\"ui celled padded table\">\n      <thead>\n      <tr><th class=\"single line\">ID Rating</th>\n        <th>Nama Mahasiswa</th>\n        <th>ID Mahasiswa</th>\n        <th>Rating</th>\n        <th>Komentar</th>\n        <th>Tanggal</th>\n        <th>Hapus</th>\n      </tr></thead>\n      <tbody>\n      <!--  <tr *ngFor=\"let item of pageOfItems | paginate: config\">-->\n      <tr *ngFor=\"let item of pageOfItems\">\n        <td>{{item.id_rating}}</td>\n        <td>{{item.nama}}</td>\n        <td>{{item.id_mhs}}</td>\n        <td>{{item.rating}}</td>\n        <td>{{item.komentar}}</td>\n        <td>{{item.tanggal | date:'d MMMM y HH:mm':'UTC'}}</td>\n\n        <td>\n          <div class=\"ui icon button\" (click)=\"onModalDelete(item.id_rating, delete)\">\n            <i class=\"trash alternate outline icon\"></i>\n          </div>\n        </td>\n      </tr>\n      </tbody>\n      <tfoot>\n      <tr><th colspan=\"9\">\n        <pagination previousText=\"&lsaquo;\" nextText=\"&rsaquo;\" firstText=\"&laquo;\" lastText=\"&raquo;\" [boundaryLinks]=\"true\"\n                    [totalItems]=\"config.totalItems\" [itemsPerPage]=\"config.itemsPerPage\" [(ngModel)]=\"config.currentPage\" (pageChanged)=\"onPageChange($event)\"></pagination>\n      </th></tr>\n      </tfoot>\n    </table>\n  </ng-template>\n</ng-template>\n\n<ng-template #delete>\n  <div class=\"modal-body text-center\">\n    <p>Do you want to confirm?</p>\n    <button type=\"button\" class=\"btn btn-default\" (click)=\"onDelete(deleteID)\" >Yes</button>\n    <button type=\"button\" class=\"btn btn-primary\" (click)=\"onNotDelete()\" >No</button>\n  </div>\n</ng-template>\n\n\n<ng-template #DownloadTemplate>\n  <div class=\"modal-header\">\n    <h4 class=\"modal-title pull-left\">Download Tabel</h4>\n    <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"modalRef.hide()\">\n      <span aria-hidden=\"true\">&times;</span>\n    </button>\n  </div>\n  <div class=\"modal-body\">\n    <div *ngIf=\"loadingDL;else loadsDL\" class=\"ui segment\" style=\"padding: 200px 0 0 0 \">\n      <div class=\"ui active inverted dimmer\">\n        <div class=\"ui large text loader\">Memproses tabel</div>\n      </div>\n    </div>\n  </div>\n</ng-template>\n\n<ng-template #loadsDL>\n  <div style=\"text-align: center; padding: 10px\">\n    <button class=\"btn btn-icon btn-new-menu\" style=\"color: #fff;margin-right: 20px; background-color: #107c41; box-shadow: 0 0 0 0 rgba(34,36,38,.15)\"\n            (click)=\"onDownload()\">\n      <i class=\"download icon\"></i>\n      Unduh\n    </button>\n  </div>\n</ng-template>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/dashboard.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/dashboard.component.html ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div id=\"navbar\" class=\"header-container\">\r\n  <div class=\"row\">\r\n    <div class=\"col-lg-6 col-md-6 col-sm-6 left-navbar\">\r\n      <h2>Dashboard</h2>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"card\" style=\"margin-top: 10px; padding: 10px\">\r\n  <div style=\"text-align:center ;\">\r\n  <h2 class=\"ui image header\" style=\"font-size: 36px\">\r\n    <div class=\"d-flex content\">\r\n      <img style=\"height: 40px; margin: 10px\" src=\"../../../../../assets/img/logo/logo.svg\"\r\n           alt=\"logo\">\r\n      <p class=\"ml-2\">E-LIBRARY</p>\r\n    </div>\r\n  </h2>\r\n  <h2 style=\"text-transform: uppercase; font-size: 20px; margin-top: 0; text-align: center\">\r\n    Selamat datang di Halaman Dashboard Admin E-Library PPNS</h2>\r\n  </div>\r\n</div>\r\n\r\n<div *ngIf=\"loading;else loads\" class=\"ui segment\" style=\"padding: 200px 0 0 0 \">\r\n  <div class=\"ui active inverted dimmer\">\r\n    <div class=\"ui large text loader\">Loading</div>\r\n  </div>\r\n</div>\r\n\r\n<ng-template #loads>\r\n  <div class=\"row\" style=\"padding: 10px\">\r\n    <div class=\"col-xl-4 col-lg-4 col-md-4 col-sm-4\">\r\n      <div class=\"card\">\r\n        <div class=\"container\" style=\"padding: 30px 10px 20px 10px; text-align: center\">\r\n          <i class=\"book icon\" style=\"font-size: 40px\"></i>\r\n          <p style=\"font-size: 20px; font-weight: bold\">Jumlah Buku Terdaftar</p>\r\n          <h2>{{countBook}}</h2>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"col-xl-4 col-lg-4 col-md-4 col-sm-4\">\r\n      <div class=\"card\">\r\n        <div class=\"container\" style=\"padding: 30px 10px 20px 10px; text-align: center\">\r\n          <i class=\"paper plane icon\" style=\"font-size: 40px\"></i>\r\n          <p style=\"font-size: 20px; font-weight: bold\">Jumlah Peminjaman Berlangsung</p>\r\n          <h2>{{countLoan}}</h2>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"col-xl-4 col-lg-4 col-md-4 col-sm-4\">\r\n      <div class=\"card\">\r\n        <div class=\"container\" style=\"padding: 30px 10px 20px 10px; text-align: center\">\r\n          <i class=\"reply all icon\" style=\"font-size: 40px\"></i>\r\n          <p style=\"font-size: 20px; font-weight: bold\">Jumlah Pengembalian Mingguan</p>\r\n          <h2>{{countReturn}}</h2>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"card\" style=\"margin-top: 10px; padding: 10px\">\r\n    <p style=\"font-size: 20px; font-weight: bold\">\r\n      <i class=\"paper plane icon\"></i>\r\n      Peminjaman Berlangsung\r\n    </p>\r\n    <table class=\"ui celled padded table\">\r\n      <thead>\r\n      <tr><th class=\"single line\">ID Peminjaman</th>\r\n        <th>NRP</th>\r\n        <th>Nama</th>\r\n        <th>E-mail</th>\r\n        <th>ID Buku</th>\r\n        <th>Buku</th>\r\n        <th>Pengarang</th>\r\n        <th>Tanggal Peminjaman</th>\r\n      </tr></thead>\r\n      <tbody>\r\n      <!--  <tr *ngFor=\"let item of pageOfItems | paginate: config\">-->\r\n      <tr *ngFor=\"let item of pageOfItemsPeminjaman\">\r\n        <td>{{item.data_peminjaman.id_peminjaman}}</td>\r\n        <td>{{item.detail_mhs.mhs_id}}</td>\r\n        <td>{{item.detail_mhs.nama}}</td>\r\n        <td>{{item.detail_mhs.email}}</td>\r\n        <td>{{item.detail_buku.buku_id}}</td>\r\n        <td>{{item.detail_buku.judul}}</td>\r\n        <td>{{item.detail_buku.pengarang}}</td>\r\n        <td>{{item.data_peminjaman.tanggal_peminjaman | date:'d MMMM y HH:mm':'UTC'}}</td>\r\n      </tr>\r\n      </tbody>\r\n      <tfoot>\r\n      </tfoot>\r\n    </table>\r\n  </div>\r\n\r\n  <div class=\"card\" style=\"margin-top: 30px; margin-bottom: 20px; padding: 10px\">\r\n    <p style=\"font-size: 20px; font-weight: bold\">\r\n      <i class=\"reply all icon\"></i>\r\n      History Pengembalian\r\n    </p>\r\n    <table class=\"ui celled padded table\">\r\n      <thead>\r\n      <tr><th class=\"single line\">ID Peminjaman</th>\r\n        <th>NRP</th>\r\n        <th>Nama</th>\r\n        <th>E-mail</th>\r\n        <th>ID Buku</th>\r\n        <th>Buku</th>\r\n        <th>Pengarang</th>\r\n        <th>Tanggal Pengembalian</th>\r\n      </tr></thead>\r\n      <tbody>\r\n      <!--  <tr *ngFor=\"let item of pageOfItems | paginate: config\">-->\r\n      <tr *ngFor=\"let item of pageOfItemsPengembalian\">\r\n        <td>{{item.data_peminjaman.id_peminjaman}}</td>\r\n        <td>{{item.detail_mhs.mhs_id}}</td>\r\n        <td>{{item.detail_mhs.nama}}</td>\r\n        <td>{{item.detail_mhs.email}}</td>\r\n        <td>{{item.detail_buku.buku_id}}</td>\r\n        <td>{{item.detail_buku.judul}}</td>\r\n        <td>{{item.detail_buku.pengarang}}</td>\r\n        <td>{{item.data_peminjaman.tanggal_kembali | date:'d MMMM y HH:mm':'GMT+7'}}</td>\r\n      </tr>\r\n      </tbody>\r\n      <tfoot>\r\n      </tfoot>\r\n    </table>\r\n  </div>\r\n</ng-template>\r\n\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/loanpage/currentloan/currentloan.component.html":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/loanpage/currentloan/currentloan.component.html ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div id=\"navbar\" class=\"header-container\">\r\n  <div class=\"row\">\r\n    <div class=\"col-lg-6 col-md-6 col-sm-6 left-navbar\">\r\n      <h2>Peminjaman</h2>\r\n    </div>\r\n    <div class=\"col-lg-6 col-md-6 col-sm-6 right-navbar\">\r\n      <button class=\"btn btn-icon btn-new-menu\" style=\"color: #fff;margin-right: 20px; background-color: #107c41; box-shadow: 0 0 0 0 rgba(34,36,38,.15)\"\r\n              (click)=\"openDownloadModal(DownloadTemplate)\">\r\n        <i class=\"download icon\"></i>\r\n        Unduh Excel\r\n      </button>\r\n      <button class=\"btn btn-primary btn-icon btn-new-menu\" routerLink=\"/loans\">\r\n        <i class=\"arrow alternate circle left outline icon\"></i>\r\n        Kembali\r\n      </button>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<div *ngIf=\"loading;else loads\" class=\"ui segment\" style=\"padding: 200px 0 0 0 \">\r\n  <div class=\"ui active inverted dimmer\">\r\n    <div class=\"ui large text loader\">Loading</div>\r\n  </div>\r\n</div>\r\n\r\n<ng-template #loads>\r\n  <div class=\"mt-3 pb-0\" style=\"width: 100%\">\r\n    <div class=\"row align-self-center\" style=\"margin-top: 10px; z-index: 98;\">\r\n      <div class=\"col-xl-6 col-lg-6 col-md-6 col-sm-6\">\r\n        <table class=\"ui definition table\">\r\n          <tbody>\r\n          <tr>\r\n            <td class=\"two wide column\">ID</td>\r\n            <td>{{dataMhs.mhs_id}}</td>\r\n          </tr>\r\n          <tr>\r\n            <td>Nama</td>\r\n            <td>{{dataMhs.nama}}</td>\r\n          </tr>\r\n          <tr>\r\n            <td>E-mail</td>\r\n            <td>{{dataMhs.email}}</td>\r\n          </tr>\r\n          </tbody>\r\n        </table>\r\n      </div>\r\n      <div class=\"col-xl-6 col-lg-6 col-md-6 col-sm-6\">\r\n        <div class=\"ui search\" style=\"width: 100%\">\r\n          <input class=\"prompt marginsearch\" style=\"width: 100%\" type=\"text\" placeholder=\"Mencari ID Buku / Peminjaman...\" [(ngModel)]=\"search\" (keyup)=\"onSearch(search)\" (search)=\"onSearch(search)\">\r\n          <div class=\"results\"></div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"row align-self-center\" style=\"margin-top: 10px\">\r\n    </div>\r\n  </div>\r\n\r\n  <div *ngIf=\"nodata; else theredata\" class=\"card\" style=\"margin-top: 10px; padding: 10px\">\r\n    <div style=\"text-align:center ;\">\r\n      <p class=\"ml-2\" style=\"font-size: 18px; padding: 2rem;\">Pencarian tidak ditemukan!</p>\r\n    </div>\r\n  </div>\r\n\r\n  <ng-template #theredata>\r\n  <table class=\"ui celled padded table\">\r\n    <thead>\r\n    <tr><th class=\"single line\">ID Peminjaman</th>\r\n      <th>ID Buku</th>\r\n      <th>Judul Buku</th>\r\n      <th>Penerbit</th>\r\n      <th>Pengarang</th>\r\n      <th>Tanggal Peminjaman</th>\r\n      <th>Tanggal Pengembalian</th>\r\n      <th>Pengembalian</th>\r\n    </tr></thead>\r\n    <tbody>\r\n    <!--  <tr *ngFor=\"let item of pageOfItems | paginate: config\">-->\r\n    <tr *ngFor=\"let item of pageOfItems\">\r\n      <td>{{item.data_peminjaman.id_peminjaman}}</td>\r\n      <td>{{item.detail_buku.buku_id}}</td>\r\n      <td>{{item.detail_buku.judul}}</td>\r\n      <td>{{item.detail_buku.penerbit}}</td>\r\n      <td>{{item.detail_buku.pengarang}}</td>\r\n      <td>{{item.data_peminjaman.tanggal_peminjaman | date:'d MMMM y HH:mm':'UTC'}}</td>\r\n      <td>{{item.data_peminjaman.tanggal_pengembalian | date:'d MMMM y HH:mm':'UTC'}}</td>\r\n      <td>\r\n        <button class=\"ui labeled icon button\" (click)=\"openModal(Return, item)\">\r\n          <i class=\"book icon\"></i>\r\n          Kembalikan\r\n        </button>\r\n      </td>\r\n    </tr>\r\n    </tbody>\r\n    <tfoot>\r\n    <tr><th colspan=\"9\">\r\n      <pagination previousText=\"&lsaquo;\" nextText=\"&rsaquo;\" firstText=\"&laquo;\" lastText=\"&raquo;\" [boundaryLinks]=\"true\"\r\n                  [totalItems]=\"config.totalItems\" [itemsPerPage]=\"config.itemsPerPage\" [(ngModel)]=\"config.currentPage\" (pageChanged)=\"onPageChange($event)\"></pagination>\r\n    </th></tr>\r\n    </tfoot>\r\n  </table>\r\n  </ng-template>\r\n</ng-template>\r\n\r\n<ng-template #Return>\r\n  <div class=\"modal-header\">\r\n    <h4 class=\"modal-title pull-left\">Pengembalian</h4>\r\n    <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"modalRef.hide()\">\r\n      <span aria-hidden=\"true\">&times;</span>\r\n    </button>\r\n  </div>\r\n  <div class=\"modal-body\">\r\n    <img src=\"{{infoReturn.detail_buku.gambar}}\" style=\"height: 200px; display: block;\r\n            margin-left: auto;\r\n            margin-right: auto;\">\r\n    <table class=\"ui definition table\">\r\n      <tbody>\r\n      <tr>\r\n        <td class=\"two wide column\">ID Buku</td>\r\n        <td>{{infoReturn.detail_buku.buku_id}}</td>\r\n      </tr>\r\n      <tr>\r\n        <td>Judul</td>\r\n        <td>{{infoReturn.detail_buku.judul}}</td>\r\n      </tr>\r\n      <tr>\r\n        <td>Pengarang</td>\r\n        <td>{{infoReturn.detail_buku.pengarang}}</td>\r\n      </tr>\r\n      <tr>\r\n        <td>Penerbit</td>\r\n        <td>{{infoReturn.detail_buku.penerbit}}</td>\r\n      </tr>\r\n      <tr>\r\n        <td>Kategori</td>\r\n        <td>{{infoReturn.detail_buku.kategori}}</td>\r\n      </tr>\r\n      <tr>\r\n        <td>Info Keterlambatan</td>\r\n        <td *ngIf=\"lateTime;else notLate\" style=\"color:red\">{{infoTime}}</td>\r\n        <ng-template #notLate>\r\n          <td>{{infoTime}}</td>\r\n        </ng-template>\r\n      </tr>\r\n      </tbody>\r\n    </table>\r\n\r\n  </div>\r\n  <div class=\"modal-footer\">\r\n    <button class=\"ui button\" type=\"submit\" (click)=\"onSubmitReturn(infoReturn.data_peminjaman.id_peminjaman)\">Kembalikan</button>\r\n  </div>\r\n</ng-template>\r\n\r\n<ng-template #DownloadTemplate>\r\n  <div class=\"modal-header\">\r\n    <h4 class=\"modal-title pull-left\">Download Tabel</h4>\r\n    <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"modalRef.hide()\">\r\n      <span aria-hidden=\"true\">&times;</span>\r\n    </button>\r\n  </div>\r\n  <div class=\"modal-body\">\r\n    <div *ngIf=\"loadingDL;else loadsDL\" class=\"ui segment\" style=\"padding: 200px 0 0 0 \">\r\n      <div class=\"ui active inverted dimmer\">\r\n        <div class=\"ui large text loader\">Memproses tabel</div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</ng-template>\r\n\r\n<ng-template #loadsDL>\r\n  <div style=\"text-align: center; padding: 10px\">\r\n    <button class=\"btn btn-icon btn-new-menu\" style=\"color: #fff;margin-right: 20px; background-color: #107c41; box-shadow: 0 0 0 0 rgba(34,36,38,.15)\"\r\n            (click)=\"onDownload()\">\r\n      <i class=\"download icon\"></i>\r\n      Unduh\r\n    </button>\r\n  </div>\r\n</ng-template>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/loanpage/historyloan/historyloan.component.html":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/loanpage/historyloan/historyloan.component.html ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div id=\"navbar\" class=\"header-container\">\r\n  <div class=\"row\">\r\n    <div class=\"col-lg-6 col-md-6 col-sm-6 left-navbar\">\r\n      <h2>Riwayat</h2>\r\n    </div>\r\n    <div class=\"col-lg-6 col-md-6 col-sm-6 right-navbar\">\r\n      <button class=\"btn btn-icon btn-new-menu\" style=\"color: #fff;margin-right: 20px; background-color: #107c41; box-shadow: 0 0 0 0 rgba(34,36,38,.15)\"\r\n              (click)=\"openDownloadModal(DownloadTemplate)\">\r\n        <i class=\"download icon\"></i>\r\n        Unduh Excel\r\n      </button>\r\n      <button class=\"btn btn-primary btn-icon btn-new-menu\" routerLink=\"/loans\">\r\n        <i class=\"arrow alternate circle left outline icon\"></i>\r\n        Kembali\r\n      </button>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<div *ngIf=\"loading;else loads\" class=\"ui segment\" style=\"padding: 200px 0 0 0 \">\r\n  <div class=\"ui active inverted dimmer\">\r\n    <div class=\"ui large text loader\">Loading</div>\r\n  </div>\r\n</div>\r\n\r\n<ng-template #loads>\r\n\r\n  <div class=\"mt-3 pb-0\" style=\"width: 100%\">\r\n    <div class=\"row align-self-center\" style=\"margin-top: 10px; z-index: 98;\">\r\n      <div class=\"col-xl-6 col-lg-6 col-md-6 col-sm-6\">\r\n        <table class=\"ui definition table\">\r\n          <tbody>\r\n          <tr>\r\n            <td class=\"two wide column\">ID</td>\r\n            <td>{{dataMhs.mhs_id}}</td>\r\n          </tr>\r\n          <tr>\r\n            <td>Nama</td>\r\n            <td>{{dataMhs.nama}}</td>\r\n          </tr>\r\n          <tr>\r\n            <td>E-mail</td>\r\n            <td>{{dataMhs.email}}</td>\r\n          </tr>\r\n          </tbody>\r\n        </table>\r\n      </div>\r\n      <div class=\"col-xl-6 col-lg-6 col-md-6 col-sm-6\">\r\n        <div class=\"ui search\" style=\"width: 100%\">\r\n          <input class=\"prompt marginsearch\" style=\"width: 100%\" type=\"text\" placeholder=\"Mencari ID Buku / Peminjaman...\" [(ngModel)]=\"search\" (keyup)=\"onSearch(search)\" (search)=\"onSearch(search)\">\r\n          <div class=\"results\"></div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"row align-self-center\" style=\"margin-top: 10px\">\r\n\r\n    </div>\r\n  </div>\r\n\r\n  <div *ngIf=\"nodata; else theredata\" class=\"card\" style=\"margin-top: 10px; padding: 10px\">\r\n    <div style=\"text-align:center ;\">\r\n      <p class=\"ml-2\" style=\"font-size: 18px; padding: 2rem;\">Pencarian tidak ditemukan!</p>\r\n    </div>\r\n  </div>\r\n\r\n  <ng-template #theredata>\r\n  <table class=\"ui celled padded table\">\r\n    <thead>\r\n    <tr><th class=\"single line\">ID Peminjaman</th>\r\n      <th>ID Buku</th>\r\n      <th>Judul Buku</th>\r\n      <th>Penerbit</th>\r\n      <th>Pengarang</th>\r\n      <th>Tanggal Peminjaman</th>\r\n      <th>Tanggal Pengembalian</th>\r\n      <th>Tanggal Kembali</th>\r\n      <th>Info</th>\r\n    </tr></thead>\r\n    <tbody>\r\n    <!--  <tr *ngFor=\"let item of pageOfItems | paginate: config\">-->\r\n    <tr *ngFor=\"let item of pageOfItems\">\r\n      <td>{{item.data_peminjaman.id_peminjaman}}</td>\r\n      <td>{{item.detail_buku.buku_id}}</td>\r\n      <td>{{item.detail_buku.judul}}</td>\r\n      <td>{{item.detail_buku.penerbit}}</td>\r\n      <td>{{item.detail_buku.pengarang}}</td>\r\n      <td>{{item.data_peminjaman.tanggal_peminjaman | date:'d MMMM y HH:mm':'UTC'}}</td>\r\n      <td>{{item.data_peminjaman.tanggal_pengembalian | date:'d MMMM y HH:mm':'UTC'}}</td>\r\n      <td>{{item.data_peminjaman.tanggal_kembali | date:'d MMMM y HH:mm':'GMT+7'}}</td>\r\n      <td>\r\n        <div class=\"ui icon button\" (click)=\"openModal(Info, item)\">\r\n          <i class=\"info circle icon\"></i>\r\n        </div>\r\n      </td>\r\n    </tr>\r\n    </tbody>\r\n    <tfoot>\r\n    <tr><th colspan=\"9\">\r\n      <pagination previousText=\"&lsaquo;\" nextText=\"&rsaquo;\" firstText=\"&laquo;\" lastText=\"&raquo;\" [boundaryLinks]=\"true\"\r\n                  [totalItems]=\"config.totalItems\" [itemsPerPage]=\"config.itemsPerPage\" [(ngModel)]=\"config.currentPage\" (pageChanged)=\"onPageChange($event)\"></pagination>\r\n    </th></tr>\r\n    </tfoot>\r\n  </table>\r\n  </ng-template>\r\n</ng-template>\r\n\r\n<ng-template #Info>\r\n  <div class=\"modal-header\">\r\n    <h4 class=\"modal-title pull-left\">Pengembalian</h4>\r\n    <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"modalRef.hide()\">\r\n      <span aria-hidden=\"true\">&times;</span>\r\n    </button>\r\n  </div>\r\n  <div class=\"modal-body\">\r\n    <img src=\"{{infoReturn.detail_buku.gambar}}\" style=\"height: 200px; display: block;\r\n            margin-left: auto;\r\n            margin-right: auto;\">\r\n    <table class=\"ui definition table\">\r\n      <tbody>\r\n      <tr>\r\n        <td class=\"two wide column\">ID Buku</td>\r\n        <td>{{infoReturn.detail_buku.buku_id}}</td>\r\n      </tr>\r\n      <tr>\r\n        <td>Judul</td>\r\n        <td>{{infoReturn.detail_buku.judul}}</td>\r\n      </tr>\r\n      <tr>\r\n        <td>Pengarang</td>\r\n        <td>{{infoReturn.detail_buku.pengarang}}</td>\r\n      </tr>\r\n      <tr>\r\n        <td>Penerbit</td>\r\n        <td>{{infoReturn.detail_buku.penerbit}}</td>\r\n      </tr>\r\n      <tr>\r\n        <td>Kategori</td>\r\n        <td>{{infoReturn.detail_buku.kategori}}</td>\r\n      </tr>\r\n      <tr>\r\n        <td>Info Keterlambatan</td>\r\n        <td *ngIf=\"lateTime;else notLate\" style=\"color:red\">{{infoTime}}</td>\r\n        <ng-template #notLate>\r\n          <td>{{infoTime}}</td>\r\n        </ng-template>\r\n      </tr>\r\n      </tbody>\r\n    </table>\r\n  </div>\r\n</ng-template>\r\n\r\n<ng-template #DownloadTemplate>\r\n  <div class=\"modal-header\">\r\n    <h4 class=\"modal-title pull-left\">Download Tabel</h4>\r\n    <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"modalRef.hide()\">\r\n      <span aria-hidden=\"true\">&times;</span>\r\n    </button>\r\n  </div>\r\n  <div class=\"modal-body\">\r\n    <div *ngIf=\"loadingDL;else loadsDL\" class=\"ui segment\" style=\"padding: 200px 0 0 0 \">\r\n      <div class=\"ui active inverted dimmer\">\r\n        <div class=\"ui large text loader\">Memproses tabel</div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</ng-template>\r\n\r\n<ng-template #loadsDL>\r\n  <div style=\"text-align: center; padding: 10px\">\r\n    <button class=\"btn btn-icon btn-new-menu\" style=\"color: #fff;margin-right: 20px; background-color: #107c41; box-shadow: 0 0 0 0 rgba(34,36,38,.15)\"\r\n            (click)=\"onDownload()\">\r\n      <i class=\"download icon\"></i>\r\n      Unduh\r\n    </button>\r\n  </div>\r\n</ng-template>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/loanpage/loanpage.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/loanpage/loanpage.component.html ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div id=\"navbar\" class=\"header-container\">\r\n  <div class=\"row\">\r\n    <div class=\"col-lg-6 col-md-6 col-sm-6 left-navbar\">\r\n      <h2>Daftar Peminjaman</h2>\r\n    </div>\r\n    <div class=\"col-lg-6 col-md-6 col-sm-6 right-navbar\">\r\n      <button class=\"btn btn-icon btn-new-menu\" style=\"color: #fff;margin-right: 20px; background-color: #107c41; box-shadow: 0 0 0 0 rgba(34,36,38,.15)\"\r\n              (click)=\"openDownloadModal(DownloadTemplate)\">\r\n        <i class=\"download icon\"></i>\r\n        Unduh Excel\r\n      </button>\r\n      <button class=\"btn btn-primary btn-icon btn-new-menu\" (click)=\"openModal(Return)\">\r\n        <i class=\"plus icon\"></i>\r\n        Pengembalian Buku\r\n      </button>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<div *ngIf=\"loading;else loads\" class=\"ui segment\" style=\"padding: 200px 0 0 0 \">\r\n  <div class=\"ui active inverted dimmer\">\r\n    <div class=\"ui large text loader\">Loading</div>\r\n  </div>\r\n</div>\r\n\r\n<ng-template #loads>\r\n\r\n  <div class=\"mt-3 pb-0\" style=\"width: 100%\">\r\n    <div class=\"row align-self-center\" style=\"margin-top: 20px; z-index: 98;\">\r\n      <div class=\"col-xl-8 col-lg-8 col-md-8 col-sm-8 nopadding\">\r\n      </div>\r\n\r\n      <div class=\"col-xl-4 col-lg-4 col-md-4 col-sm-4\">\r\n        <div class=\"ui search\">\r\n          <input class=\"prompt\" style=\"width: 100%\" type=\"text\" placeholder=\"Mencari ID / Nama Mahasiswa...\" [(ngModel)]=\"search\" (keyup)=\"onSearch(search)\" (search)=\"onSearch(search)\">\r\n          <div class=\"results\"></div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"row align-self-center\">\r\n    </div>\r\n  </div>\r\n\r\n  <div *ngIf=\"nodata; else theredata\" class=\"card\" style=\"margin-top: 10px; padding: 10px\">\r\n    <div style=\"text-align:center ;\">\r\n      <p class=\"ml-2\" style=\"font-size: 18px; padding: 2rem;\">Pencarian tidak ditemukan!</p>\r\n    </div>\r\n  </div>\r\n\r\n  <ng-template #theredata>\r\n  <table class=\"ui celled padded table\">\r\n    <thead>\r\n    <tr><th class=\"single line\">NRP</th>\r\n      <th>Nama</th>\r\n      <th>Email</th>\r\n      <th>Tanggal Lahir</th>\r\n      <th>Status</th>\r\n      <th>Peminjaman</th>\r\n      <th>Riwayat</th>\r\n    </tr></thead>\r\n    <tbody>\r\n    <!--  <tr *ngFor=\"let item of pageOfItems | paginate: config\">-->\r\n    <tr *ngFor=\"let item of pageOfItems\">\r\n      <td style=\"padding-top: 22px\">{{item.mhs_id}}</td>\r\n      <td style=\"padding-top: 22px\">{{item.nama}}</td>\r\n      <td style=\"padding-top: 22px\">{{item.email}}</td>\r\n      <td style=\"padding-top: 22px\">{{item.tanggal_lahir |  date:'d MMMM y'}}</td>\r\n      <td *ngIf=\"item.active == 1; else Else\" style=\"padding-top: 22px\">Aktif</td>\r\n      <ng-template #Else>\r\n        <td style=\"padding-top: 22px\">Tidak Aktif</td>\r\n      </ng-template>\r\n      <td>\r\n        <button class=\"ui labeled icon button\" routerLink=\"/loans/current/{{item.mhs_id}}\">\r\n          <i class=\"book icon\"></i>\r\n          Peminjaman\r\n        </button>\r\n      </td>\r\n      <td>\r\n        <button class=\"ui labeled icon button\" routerLink=\"/loans/history/{{item.mhs_id}}\">\r\n          <i class=\"history icon\"></i>\r\n          Riwayat\r\n        </button>\r\n      </td>\r\n    </tr>\r\n    </tbody>\r\n    <tfoot>\r\n    <tr><th colspan=\"9\">\r\n      <pagination previousText=\"&lsaquo;\" nextText=\"&rsaquo;\" firstText=\"&laquo;\" lastText=\"&raquo;\" [boundaryLinks]=\"true\"\r\n                  [totalItems]=\"config.totalItems\" [itemsPerPage]=\"config.itemsPerPage\" [(ngModel)]=\"config.currentPage\" (pageChanged)=\"onPageChange($event)\"></pagination>\r\n    </th></tr>\r\n    </tfoot>\r\n  </table>\r\n  </ng-template>\r\n</ng-template>\r\n\r\n\r\n<ng-template #Return>\r\n  <div class=\"modal-header\">\r\n    <h4 class=\"modal-title pull-left\">Pengembalian</h4>\r\n    <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"closeModal(Return)\">\r\n      <span aria-hidden=\"true\">&times;</span>\r\n    </button>\r\n  </div>\r\n  <div class=\"modal-body\">\r\n\r\n    <div class=\"ui center aligned basic segment\">\r\n      <div class=\"ui left icon action input\">\r\n        <i class=\"search icon\"></i>\r\n        <input type=\"text\" [(ngModel)]=\"peminjamanId\" placeholder=\"Peminjaman ID #\">\r\n        <div class=\"ui blue submit button\" (click)=\"getData(peminjamanId)\">Search</div>\r\n      </div>\r\n    </div>\r\n\r\n    <div *ngIf=\"unhide\">\r\n      <img src=\"{{infoReturn.detail_buku.gambar}}\" style=\"height: 200px; display: block;\r\n            margin-left: auto;\r\n            margin-right: auto;\">\r\n      <table class=\"ui definition table\">\r\n        <tbody>\r\n        <tr>\r\n          <td>NRP</td>\r\n          <td>{{infoReturn.detail_mhs.mhs_id}}</td>\r\n        </tr>\r\n        <tr>\r\n          <td>Nama</td>\r\n          <td>{{infoReturn.detail_mhs.nama}}</td>\r\n        </tr>\r\n        <tr>\r\n          <td class=\"two wide column\">ID Buku</td>\r\n          <td>{{infoReturn.detail_buku.buku_id}}</td>\r\n        </tr>\r\n        <tr>\r\n          <td>Judul</td>\r\n          <td>{{infoReturn.detail_buku.judul}}</td>\r\n        </tr>\r\n        <tr>\r\n          <td>Pengarang</td>\r\n          <td>{{infoReturn.detail_buku.pengarang}}</td>\r\n        </tr>\r\n        <tr>\r\n          <td>Penerbit</td>\r\n          <td>{{infoReturn.detail_buku.penerbit}}</td>\r\n        </tr>\r\n        <tr>\r\n          <td>Kategori</td>\r\n          <td>{{infoReturn.detail_buku.kategori}}</td>\r\n        </tr>\r\n        <tr>\r\n          <td>Info Keterlambatan</td>\r\n          <td *ngIf=\"lateTime;else notLate\" style=\"color:red\">{{infoTime}}</td>\r\n          <ng-template #notLate>\r\n            <td>{{infoTime}}</td>\r\n          </ng-template>\r\n        </tr>\r\n        </tbody>\r\n      </table>\r\n    </div>\r\n  </div>\r\n  <div *ngIf=\"unhide\" class=\"modal-footer\">\r\n    <button class=\"ui button\" type=\"submit\" (click)=\"onSubmitReturn(infoReturn.data_peminjaman.id_peminjaman)\">Kembalikan</button>\r\n  </div>\r\n</ng-template>\r\n\r\n<ng-template #DownloadTemplate>\r\n  <div class=\"modal-header\">\r\n    <h4 class=\"modal-title pull-left\">Download Tabel</h4>\r\n    <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"modalRef.hide()\">\r\n      <span aria-hidden=\"true\">&times;</span>\r\n    </button>\r\n  </div>\r\n  <div class=\"modal-body\">\r\n    <div *ngIf=\"loadingDL;else loadsDL\" class=\"ui segment\" style=\"padding: 200px 0 0 0 \">\r\n      <div class=\"ui active inverted dimmer\">\r\n        <div class=\"ui large text loader\">Memproses tabel</div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</ng-template>\r\n\r\n<ng-template #loadsDL>\r\n  <div style=\"text-align: center; padding: 10px\">\r\n    <button class=\"btn btn-icon btn-new-menu\" style=\"color: #fff;margin-right: 20px; background-color: #107c41; box-shadow: 0 0 0 0 rgba(34,36,38,.15)\"\r\n            (click)=\"onDownload()\">\r\n      <i class=\"download icon\"></i>\r\n      Unduh\r\n    </button>\r\n  </div>\r\n</ng-template>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"content-container\">\r\n  <div id=\"navbar\" class=\"header-container\">\r\n    <div class=\"row\">\r\n      <div class=\"col-lg-6 col-md-6 col-sm-6 left-navbar\">\r\n      </div>\r\n      <div class=\"col-lg-6 col-md-6 col-sm-6 right-navbar\">\r\n        <button class=\"btn btn-primary btn-icon btn-new-menu\" routerLink=\"/home\">\r\n          <i class=\"arrow left icon\"></i>\r\n          Kembali\r\n        </button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n<!-- LOGIN DEFAULT -->\r\n<div class=\"ui container\" style=\"padding-top: 28vh;\">\r\n  <div class=\"ui middle aligned center aligned grid\">\r\n    <div class=\"sixteen wide mobile five wide computer column\">\r\n      <h2 class=\"ui image header\" style=\"font-size: 36px\">\r\n        <div class=\"d-flex content\">\r\n          <img style=\"height: 40px; margin: 10px\" src=\"../../../../../assets/img/logo/logo.svg\"\r\n               alt=\"logo\">\r\n          <p class=\"ml-2\">E-LIBRARY</p>\r\n        </div>\r\n      </h2>\r\n      <form class=\"ui large form\" (keyup)=\"keyDownFunction($event)\" style=\"box-shadow: rgba(0,0,0,0.5)\">\r\n        <div class=\"ui stacked\">\r\n          <div class=\"field\" style=\"margin-bottom: -1px\">\r\n            <div class=\"ui left icon input\">\r\n              <i class=\"user icon\"></i>\r\n              <input type=\"text\" name=\"user_name\" id=\"u_name\" class=\"no-focus\" autocomplete=\"off\"\r\n                     placeholder=\"Username\" #u_name (change)=\"getUname(u_name.value)\"\r\n                     style=\"border-radius: .28571429rem .28571429rem 0 0\" />\r\n            </div>\r\n          </div>\r\n          <div class=\"field\" style=\"margin: 0\">\r\n            <div class=\"ui left icon input\">\r\n              <i class=\"lock icon\"></i>\r\n              <input type=\"password\" name=\"password\" id=\"u_pass\" class=\"no-focus\" autocomplete=\"off\"\r\n                     placeholder=\"Password\" #u_pass (change)=\"getUpass(u_pass.value)\"\r\n                     style=\"border-radius: 0\" />\r\n            </div>\r\n          </div>\r\n          <div class=\"ui fluid large button blue\" (click)=\"onLogin()\"\r\n               style=\"border-radius: 0 0 .28571429rem .28571429rem\">Login</div>\r\n        </div>\r\n      </form>\r\n    </div>\r\n  </div>\r\n</div>\r\n<!-- LOGIN DEFAULT END -->\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/returnlandingpage/returnlandingpage.component.html":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/returnlandingpage/returnlandingpage.component.html ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"content-container\">\r\n  <div id=\"navbar\" class=\"header-container\">\r\n    <div class=\"row\">\r\n      <div class=\"col-lg-6 col-md-6 col-sm-6 left-navbar\">\r\n        <h2 class=\"ui image header\" style=\"font-size: 36px\">\r\n          <div class=\"d-flex content\">\r\n            <img style=\"height: 40px; margin: 10px\" src=\"../../../../../assets/img/logo/logo.svg\"\r\n                 alt=\"logo\">\r\n            <p class=\"ml-2\">E-LIBRARY</p>\r\n          </div>\r\n        </h2>\r\n      </div>\r\n      <div class=\"col-lg-6 col-md-6 col-sm-6 right-navbar\">\r\n        <div style=\"padding-top: 12px\">\r\n        <button class=\"btn btn-primary btn-icon btn-new-menu\" routerLink=\"/login\">\r\n          <i class=\"user icon\"></i>\r\n          Login Admin\r\n        </button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<div style=\"padding: 20px\">\r\n  <div class=\"card\" style=\"margin-top: 10px; padding: 20px\">\r\n    <div style=\"text-align:center ;\">\r\n      <h2 class=\"ui image header\" style=\"font-size: 36px\">\r\n        <div class=\"d-flex content\">\r\n          <img style=\"height: 40px; margin: 10px\" src=\"../../../../../assets/img/logo/logo.svg\"\r\n               alt=\"logo\">\r\n          <p class=\"ml-2\">E-LIBRARY</p>\r\n        </div>\r\n      </h2>\r\n      <h2 style=\"text-transform: uppercase; font-size: 20px; margin-top: 0; text-align: center\">\r\n        Selamat datang di Halaman Pengembalian Buku E-Library PPNS</h2>\r\n    </div>\r\n  </div>\r\n</div>\r\n<div style=\"padding: 0px 20px 20px 20px\">\r\n  <div class=\"card\" style=\"margin-top: 10px; padding: 20px\">\r\n    <div style=\"text-align:center ;\">\r\n      <div class=\"ui container\" style=\"padding-top: 8px;\">\r\n        <div class=\"ui middle aligned center aligned grid\">\r\n          <div class=\"sixteen wide mobile five wide computer column\">\r\n            <form class=\"ui large form\" (keyup)=\"keyDownFunction($event, Return)\" style=\"box-shadow: rgba(0,0,0,0.5)\">\r\n              <div class=\"ui stacked\">\r\n                <div class=\"field\" style=\"margin-bottom: -1px\">\r\n                  <div class=\"ui left icon input\">\r\n                    <i class=\"user icon\"></i>\r\n                    <input type=\"text\" name=\"user_name\" id=\"idMhs\" class=\"no-focus\" autocomplete=\"off\"\r\n                           placeholder=\"ID Mahasiswa\" #idMhs=\"ngModel\" (change)=\"getMhsId(idMhs.value)\" [(ngModel)]=\"input.idMhs\"\r\n                           style=\"border-radius: .28571429rem .28571429rem 0 0\" />\r\n                  </div>\r\n                </div>\r\n                <div class=\"field\" style=\"margin: 0\">\r\n                  <div class=\"ui left icon input\">\r\n                    <i class=\"book icon\"></i>\r\n                    <input type=\"text\" name=\"password\" id=\"idBuku\" class=\"no-focus\" autocomplete=\"off\"\r\n                           placeholder=\"ID Buku\" #idBuku=\"ngModel\" (change)=\"getBukuId(idBuku.value)\" [(ngModel)]=\"input.idBuku\"\r\n                           style=\"border-radius: 0\" />\r\n                  </div>\r\n                </div>\r\n                <div class=\"ui fluid large button blue\" (click)=\"onInput(Return)\"\r\n                     style=\"border-radius: 0 0 .28571429rem .28571429rem\">Pengembalian</div>\r\n              </div>\r\n            </form>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <!-- LOGIN DEFAULT END -->\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<ng-template #Return>\r\n  <div class=\"modal-header\">\r\n    <h4 class=\"modal-title pull-left\">Pengembalian</h4>\r\n    <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"modalRef.hide()\">\r\n      <span aria-hidden=\"true\">&times;</span>\r\n    </button>\r\n  </div>\r\n  <div class=\"modal-body\">\r\n    <img src=\"{{infoReturn.detail_buku.gambar}}\" style=\"height: 200px; display: block;\r\n            margin-left: auto;\r\n            margin-right: auto;\">\r\n    <table class=\"ui definition table\">\r\n      <tbody>\r\n      <tr>\r\n        <td class=\"two wide column\">ID Buku</td>\r\n        <td>{{infoReturn.detail_buku.buku_id}}</td>\r\n      </tr>\r\n      <tr>\r\n        <td>Judul</td>\r\n        <td>{{infoReturn.detail_buku.judul}}</td>\r\n      </tr>\r\n      <tr>\r\n        <td>Pengarang</td>\r\n        <td>{{infoReturn.detail_buku.pengarang}}</td>\r\n      </tr>\r\n      <tr>\r\n        <td>Penerbit</td>\r\n        <td>{{infoReturn.detail_buku.penerbit}}</td>\r\n      </tr>\r\n      <tr>\r\n        <td>Kategori</td>\r\n        <td>{{infoReturn.detail_buku.kategori}}</td>\r\n      </tr>\r\n      <tr>\r\n        <td>Info Keterlambatan</td>\r\n        <td *ngIf=\"lateTime;else notLate\" style=\"color:red\">{{infoTime}}</td>\r\n        <ng-template #notLate>\r\n          <td>{{infoTime}}</td>\r\n        </ng-template>\r\n      </tr>\r\n      </tbody>\r\n    </table>\r\n\r\n  </div>\r\n  <div class=\"modal-footer\">\r\n    <button class=\"ui button\" type=\"submit\" (click)=\"onSubmitReturn(infoReturn.data_peminjaman.id_peminjaman)\">Kembalikan</button>\r\n  </div>\r\n</ng-template>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/returnpage/returnpage.component.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/returnpage/returnpage.component.html ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div id=\"navbar\" class=\"header-container\">\r\n  <div class=\"row\">\r\n    <div class=\"col-lg-6 col-md-6 col-sm-6 left-navbar\">\r\n      <h2>Persetujuan Pengembalian</h2>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<div *ngIf=\"loading;else loads\" class=\"ui segment\" style=\"padding: 200px 0 0 0 \">\r\n  <div class=\"ui active inverted dimmer\">\r\n    <div class=\"ui large text loader\">Loading</div>\r\n  </div>\r\n</div>\r\n\r\n<ng-template #loads>\r\n\r\n  <div *ngIf=\"nodata; else theredata\" class=\"card\" style=\"margin-top: 10px; padding: 10px\">\r\n    <div style=\"text-align:center ;\">\r\n      <p class=\"ml-2\" style=\"font-size: 18px; padding: 2rem;\">Tidak ditemukan permintaan pengembalian!</p>\r\n    </div>\r\n  </div>\r\n\r\n  <ng-template #theredata>\r\n    <table class=\"ui celled padded table\">\r\n      <thead>\r\n      <tr><th class=\"single line\">ID Peminjaman</th>\r\n        <th>ID Buku</th>\r\n        <th>Judul Buku</th>\r\n        <th>ID Peminjam</th>\r\n        <th>Nama</th>\r\n        <th>Tanggal Peminjaman</th>\r\n        <th>Tanggal Pengembalian</th>\r\n        <th>Tanggal Kembali</th>\r\n        <th>Info</th>\r\n      </tr></thead>\r\n      <tbody>\r\n      <!--  <tr *ngFor=\"let item of pageOfItems | paginate: config\">-->\r\n      <tr *ngFor=\"let item of pageOfItems\">\r\n        <td>{{item.data_peminjaman.id_peminjaman}}</td>\r\n        <td>{{item.detail_buku.buku_id}}</td>\r\n        <td>{{item.detail_buku.judul}}</td>\r\n        <td>{{item.detail_mhs.mhs_id}}</td>\r\n        <td>{{item.detail_mhs.nama}}</td>\r\n        <td>{{item.data_peminjaman.tanggal_peminjaman | date:'d MMMM y HH:mm':'UTC'}}</td>\r\n        <td>{{item.data_peminjaman.tanggal_pengembalian | date:'d MMMM y HH:mm':'UTC'}}</td>\r\n        <td>{{item.data_peminjaman.tanggal_kembali | date:'d MMMM y HH:mm':'GMT+7'}}</td>\r\n        <td>\r\n          <div class=\"ui icon button\" (click)=\"openModal(ReturnModal, item)\">\r\n            <i class=\"check circle outline icon\"></i>\r\n          </div>\r\n        </td>\r\n      </tr>\r\n      </tbody>\r\n      <tfoot>\r\n      <tr><th colspan=\"9\">\r\n        <pagination previousText=\"&lsaquo;\" nextText=\"&rsaquo;\" firstText=\"&laquo;\" lastText=\"&raquo;\" [boundaryLinks]=\"true\"\r\n                    [totalItems]=\"config.totalItems\" [itemsPerPage]=\"config.itemsPerPage\" [(ngModel)]=\"config.currentPage\" (pageChanged)=\"onPageChange($event)\"></pagination>\r\n      </th></tr>\r\n      </tfoot>\r\n    </table>\r\n  </ng-template>\r\n</ng-template>\r\n\r\n<ng-template #ReturnModal>\r\n  <div class=\"modal-header\">\r\n    <h4 class=\"modal-title pull-left\">Pengembalian</h4>\r\n    <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"modalRef.hide()\">\r\n      <span aria-hidden=\"true\">&times;</span>\r\n    </button>\r\n  </div>\r\n  <div class=\"modal-body\">\r\n    <img src=\"{{infoReturn.detail_buku.gambar}}\" style=\"height: 200px; display: block;\r\n            margin-left: auto;\r\n            margin-right: auto;\">\r\n    <table class=\"ui definition table\">\r\n      <tbody>\r\n      <tr>\r\n        <td class=\"two wide column\">ID Buku</td>\r\n        <td>{{infoReturn.detail_buku.buku_id}}</td>\r\n      </tr>\r\n      <tr>\r\n        <td>Judul</td>\r\n        <td>{{infoReturn.detail_buku.judul}}</td>\r\n      </tr>\r\n      <tr>\r\n        <td>Pengarang</td>\r\n        <td>{{infoReturn.detail_buku.pengarang}}</td>\r\n      </tr>\r\n      <tr>\r\n        <td>Penerbit</td>\r\n        <td>{{infoReturn.detail_buku.penerbit}}</td>\r\n      </tr>\r\n      <tr>\r\n        <td>Kategori</td>\r\n        <td>{{infoReturn.detail_buku.kategori}}</td>\r\n      </tr>\r\n      <tr>\r\n        <td>Info Keterlambatan</td>\r\n        <td *ngIf=\"lateTime;else notLate\" style=\"color:red\">{{infoTime}}</td>\r\n        <ng-template #notLate>\r\n          <td>{{infoTime}}</td>\r\n        </ng-template>\r\n      </tr>\r\n      </tbody>\r\n    </table>\r\n  </div>\r\n  <div class=\"modal-footer\">\r\n    <button class=\"ui button\" type=\"submit\" (click)=\"onSubmitReturn(infoReturn.data_peminjaman.id_peminjaman)\">Setujui Pengembalian</button>\r\n  </div>\r\n</ng-template>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/sidebar/sidebar.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/sidebar/sidebar.component.html ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"sidebar\" *ngIf=\"getLogindata()\">\r\n  <img style=\"height: 40px; margin: 10px\" src=\"../../../../../assets/img/logo/logo.svg\"\r\n       alt=\"logo\">\r\n  <a routerLink=\"/dashboard\" routerLinkActive=\"active\" placement=\"right\" tooltip=\"Home\" tooltipClass=\"custom-tooltip\"\r\n     container=\"body\">\r\n    <i class=\"home icon\"></i>\r\n  </a>\r\n  <a routerLink=\"/books\" routerLinkActive=\"active\" placement=\"right\" tooltip=\"Buku\" tooltipClass=\"custom-tooltip\"\r\n     container=\"body\">\r\n    <i class=\"book icon\"></i>\r\n  </a>\r\n  <a routerLink=\"/loans\" routerLinkActive=\"active\" placement=\"right\" tooltip=\"Peminjaman\" tooltipClass=\"custom-tooltip\"\r\n     container=\"body\">\r\n    <i class=\"table icon\"></i>\r\n  </a>\r\n  <a routerLink=\"/return_approval\" routerLinkActive=\"active\" placement=\"right\" tooltip=\"Persetujuan Pengembalian\" tooltipClass=\"custom-tooltip\"\r\n     container=\"body\">\r\n    <i class=\"clipboard check icon\"></i>\r\n  </a>\r\n\r\n<!--  <a routerLink=\"#\" routerLinkActive=\"active\" placement=\"right\" tooltip=\"More\" tooltipClass=\"custom-tooltip\"-->\r\n<!--     container=\"body\">-->\r\n<!--    <i class=\"fas fa-ellipsis-h\"></i>-->\r\n<!--  </a>-->\r\n  <div class=\"bottom-menu\">\r\n    <a *ngIf=\"getAccountLoggedIn()\" routerLink=\"/usermanagement\" routerLinkActive=\"active\" placement=\"right\" tooltip=\"Manajemen Pengguna\" tooltipClass=\"custom-tooltip\"\r\n       container=\"body\">\r\n      <i class=\"user secret icon\"></i>\r\n    </a>\r\n    <a href=\"/logout\" placement=\"right\" tooltip=\"Keluar\" tooltipClass=\"custom-tooltip\"\r\n       container=\"body\">\r\n      <i class=\"power off icon\"></i>\r\n    </a>\r\n  </div>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/usermanagement/usermanagement.component.html":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/usermanagement/usermanagement.component.html ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div id=\"navbar\" class=\"header-container\">\r\n  <div class=\"row\">\r\n    <div class=\"col-lg-6 col-md-6 col-sm-6 left-navbar\">\r\n      <h2>Manajemen Pengguna</h2>\r\n    </div>\r\n    <div class=\"col-lg-6 col-md-6 col-sm-6 right-navbar\">\r\n      <button class=\"btn btn-primary btn-icon btn-new-menu\" (click)=\"openModal(template)\">\r\n        <i class=\"plus icon\"></i>\r\n        Tambahkan Pengguna\r\n      </button>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<div *ngIf=\"loading;else loads\" class=\"ui segment\" style=\"padding: 200px 0 0 0 \">\r\n  <div class=\"ui active inverted dimmer\">\r\n    <div class=\"ui large text loader\">Loading</div>\r\n  </div>\r\n</div>\r\n\r\n<ng-template #loads>\r\n\r\n  <div class=\"mt-3 pb-0\" style=\"width: 100%\">\r\n    <div class=\"row align-self-center\" style=\"margin-top: 20px; z-index: 98;\">\r\n      <div class=\"col-xl-8 col-lg-8 col-md-8 col-sm-8\"></div>\r\n      <div class=\"col-xl-4 col-lg-4 col-md-4 col-sm-4\">\r\n        <div class=\"ui search\">\r\n          <input class=\"prompt\" style=\"width: 100%\" type=\"text\" placeholder=\"Mencari Pengguna...\" [(ngModel)]=\"search\" (keyup)=\"onSearch(search)\" (search)=\"onSearch(search)\">\r\n          <div class=\"results\"></div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"row align-self-center\">\r\n    </div>\r\n  </div>\r\n\r\n  <table class=\"ui celled padded table\">\r\n    <thead>\r\n    <tr><th class=\"single line\">Username</th>\r\n      <th>Nama</th>\r\n      <th>Email</th>\r\n      <th>Nomor Telepon</th>\r\n      <th>Role</th>\r\n      <th>Edit</th>\r\n    </tr></thead>\r\n    <tbody>\r\n    <!--  <tr *ngFor=\"let item of pageOfItems | paginate: config\">-->\r\n    <tr *ngFor=\"let item of pageOfItems\">\r\n      <td>{{item.username}}</td>\r\n      <td>{{item.nama}}</td>\r\n      <td>{{item.email}}</td>\r\n      <td>{{item.Phone}}</td>\r\n      <td>{{item.role}}</td>\r\n      <td>\r\n        <div style=\"display: block\">\r\n          <a (click)=\"onView(item, update)\"><i class=\"edit outline icon\"></i></a>\r\n          <a></a>\r\n          <a (click)=\"onModalDelete(item.id, delete)\"><i class=\"trash alternate outline icon\"></i></a>\r\n        </div>\r\n      </td>\r\n    </tr>\r\n    </tbody>\r\n    <tfoot>\r\n    <tr><th colspan=\"9\">\r\n      <pagination previousText=\"&lsaquo;\" nextText=\"&rsaquo;\" firstText=\"&laquo;\" lastText=\"&raquo;\" [boundaryLinks]=\"true\"\r\n                  [totalItems]=\"config.totalItems\" [itemsPerPage]=\"config.itemsPerPage\" [(ngModel)]=\"config.currentPage\" (pageChanged)=\"onPageChange($event)\"></pagination>\r\n    </th></tr>\r\n    </tfoot>\r\n  </table>\r\n</ng-template>\r\n\r\n<ng-template #template>\r\n  <div class=\"modal-header\">\r\n    <h4 class=\"modal-title pull-left\">Tambahkan Pengguna</h4>\r\n    <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"modalRef.hide()\">\r\n      <span aria-hidden=\"true\">&times;</span>\r\n    </button>\r\n  </div>\r\n  <div class=\"modal-body\">\r\n    <form class=\"ui form\" #userForm=\"ngForm\">\r\n\r\n      <div class=\"required field\" [class.error]=\"nama.invalid && nama.touched\">\r\n        <label>Nama</label>\r\n        <input required #nama=\"ngModel\" type=\"text\" name=\"Nama\" placeholder=\"Nama\" [(ngModel)]=\"inputUser.nama\">\r\n      </div>\r\n\r\n      <div class=\"required field\">\r\n        <label>Role</label>\r\n        <ng-select [searchable]=\"false\"\r\n                   [items]=\"Role\"\r\n                   bindLabel=\"name\"\r\n                   placeholder=\"Role\"\r\n                   autofocus\r\n                   bindValue=\"name\"\r\n                   [(ngModel)]=\"getRole\"\r\n                   name=\"input_role\"\r\n                   (change)=\"onChange($event)\">\r\n        </ng-select>\r\n      </div>\r\n\r\n      <div class=\"two fields\">\r\n        <div class=\"required field\" [class.error]=\"username.invalid && username.touched\">\r\n          <label>Username</label>\r\n          <input required #username=\"ngModel\" type=\"text\" name=\"username\" placeholder=\"Username\" [(ngModel)]=\"inputUser.username\">\r\n        </div>\r\n        <div class=\"required field\" [class.error]=\"password.invalid && password.touched\">\r\n          <label>Password</label>\r\n          <input required #password=\"ngModel\" type=\"password\" name=\"password\" placeholder=\"Password\" [(ngModel)]=\"inputUser.password\">\r\n        </div>\r\n      </div>\r\n      <div class=\"required field\" [class.error]=\"phone.invalid && phone.touched\">\r\n        <label>Phone</label>\r\n        <input required #phone=\"ngModel\" type=\"text\" name=\"phone\" placeholder=\"Phone\" [(ngModel)]=\"inputUser.phone\">\r\n      </div>\r\n\r\n      <div class=\"required field\" [class.error]=\"email.invalid && email.touched\">\r\n        <label>E-mail</label>\r\n        <input required #email=\"ngModel\" type=\"text\" name=\"email\" placeholder=\"E-Mail\" [(ngModel)]=\"inputUser.email\">\r\n      </div>\r\n    </form>\r\n  </div>\r\n  <div class=\"modal-footer\">\r\n    <button class=\"ui button\" type=\"submit\" (click)=\"onSubmit(inputUser)\">Submit</button>\r\n  </div>\r\n</ng-template>\r\n\r\n<ng-template #update>\r\n  <div class=\"modal-header\">\r\n    <h4 class=\"modal-title pull-left\">Edit Pengguna</h4>\r\n    <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"modalRef.hide()\">\r\n      <span aria-hidden=\"true\">&times;</span>\r\n    </button>\r\n  </div>\r\n  <div class=\"modal-body\">\r\n    <form class=\"ui form\" #userForm=\"ngForm\">\r\n\r\n      <div class=\"required field\" [class.error]=\"nama.invalid && nama.touched\">\r\n        <label>Nama</label>\r\n        <input required #nama=\"ngModel\" type=\"text\" name=\"Nama\" placeholder=\"Nama\" [(ngModel)]=\"updateUser.nama\">\r\n      </div>\r\n\r\n      <div class=\"required field\">\r\n        <label>Role</label>\r\n        <ng-select [searchable]=\"false\"\r\n                   [items]=\"Role\"\r\n                   bindLabel=\"name\"\r\n                   placeholder=\"Role\"\r\n                   autofocus\r\n                   bindValue=\"name\"\r\n                   [(ngModel)]=\"getRole\"\r\n                   name=\"input_role\"\r\n                   (change)=\"onChange($event)\">\r\n        </ng-select>\r\n      </div>\r\n      <div class=\"required field\" [class.error]=\"username.invalid && username.touched\">\r\n        <label>Username</label>\r\n        <input required #username=\"ngModel\" type=\"text\" name=\"username\" placeholder=\"Username\" [(ngModel)]=\"updateUser.username\">\r\n      </div>\r\n      <div class=\"required field\" [class.error]=\"phone.invalid && phone.touched\">\r\n        <label>Phone</label>\r\n        <input required #phone=\"ngModel\" type=\"text\" name=\"phone\" placeholder=\"Phone\" [(ngModel)]=\"updateUser.Phone\">\r\n      </div>\r\n\r\n      <div class=\"required field\" [class.error]=\"email.invalid && email.touched\">\r\n        <label>E-mail</label>\r\n        <input required #email=\"ngModel\" type=\"text\" name=\"email\" placeholder=\"E-Mail\" [(ngModel)]=\"updateUser.email\">\r\n      </div>\r\n    </form>\r\n  </div>\r\n  <div class=\"modal-footer\">\r\n    <button class=\"ui button\" type=\"submit\" (click)=\"onUpdate(updateUser)\">Submit</button>\r\n  </div>\r\n</ng-template>\r\n\r\n\r\n<ng-template #delete>\r\n  <div class=\"modal-body text-center\">\r\n    <p>Do you want to confirm?</p>\r\n    <button type=\"button\" class=\"btn btn-default\" (click)=\"onDelete(deleteID)\" >Yes</button>\r\n    <button type=\"button\" class=\"btn btn-primary\" (click)=\"onNotDelete()\" >No</button>\r\n  </div>\r\n</ng-template>\r\n\r\n\r\n");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault, __classPrivateFieldGet, __classPrivateFieldSet */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldGet", function() { return __classPrivateFieldGet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldSet", function() { return __classPrivateFieldSet; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}

function __classPrivateFieldGet(receiver, privateMap) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
    }
    return privateMap.get(receiver);
}

function __classPrivateFieldSet(receiver, privateMap, value) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
    }
    privateMap.set(receiver, value);
    return value;
}


/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".header-container {\r\n  padding: 15px 30px 15px 88px;\r\n  background-color: white;\r\n  z-index: 98;\r\n}\r\n.sticky-header {\r\n  position: fixed;\r\n  top: 0;\r\n  left: 0;\r\n  box-shadow: 0 2px 8px #f0f1f2;\r\n  transition: top .8s!important;\r\n  width: 100%;\r\n}\r\n.content-container {\r\n  padding: 0 20px 0 80px;\r\n  background-color: white;\r\n}\r\n.content-when-sticky-header {\r\n  padding-top: 80px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2FwcC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsNEJBQTRCO0VBQzVCLHVCQUF1QjtFQUN2QixXQUFXO0FBQ2I7QUFDQTtFQUNFLGVBQWU7RUFDZixNQUFNO0VBQ04sT0FBTztFQUNQLDZCQUE2QjtFQUU3Qiw2QkFBNkI7RUFDN0IsV0FBVztBQUNiO0FBRUE7RUFDRSxzQkFBc0I7RUFDdEIsdUJBQXVCO0FBQ3pCO0FBRUE7RUFDRSxpQkFBaUI7QUFDbkIiLCJmaWxlIjoiLi4vYXBwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaGVhZGVyLWNvbnRhaW5lciB7XHJcbiAgcGFkZGluZzogMTVweCAzMHB4IDE1cHggODhweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICB6LWluZGV4OiA5ODtcclxufVxyXG4uc3RpY2t5LWhlYWRlciB7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIHRvcDogMDtcclxuICBsZWZ0OiAwO1xyXG4gIGJveC1zaGFkb3c6IDAgMnB4IDhweCAjZjBmMWYyO1xyXG4gIC13ZWJraXQtdHJhbnNpdGlvbjogdG9wIC44cyFpbXBvcnRhbnQ7XHJcbiAgdHJhbnNpdGlvbjogdG9wIC44cyFpbXBvcnRhbnQ7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5jb250ZW50LWNvbnRhaW5lciB7XHJcbiAgcGFkZGluZzogMCAyMHB4IDAgODBweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuLmNvbnRlbnQtd2hlbi1zdGlja3ktaGVhZGVyIHtcclxuICBwYWRkaW5nLXRvcDogODBweDtcclxufVxyXG4iXX0= */");

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _app_config_app_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @app-config/app.config */ "./src/app/config/app.config.ts");




let AppComponent = class AppComponent {
    constructor(document) {
        this.title = 'Perpustakaan';
    }
    onWindowScroll(e) {
        if (window.pageYOffset > 60) {
            const element = document.getElementById('navbar');
            element.classList.add('sticky-header');
            const element2 = document.getElementById('content');
            element2.classList.add('content-when-sticky-header');
        }
        else {
            const element = document.getElementById('navbar');
            element.classList.remove('sticky-header');
            const element2 = document.getElementById('content');
            element2.classList.remove('content-when-sticky-header');
        }
    }
    getLogindata() {
        if (localStorage.getItem(_app_config_app_config__WEBPACK_IMPORTED_MODULE_3__["_app_config"].localstorage_prefix + 'user')) {
            return true;
        }
        else {
            return false;
        }
    }
};
AppComponent.ctorParameters = () => [
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["DOCUMENT"],] }] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('window:scroll', ['$event'])
], AppComponent.prototype, "onWindowScroll", null);
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_common__WEBPACK_IMPORTED_MODULE_2__["DOCUMENT"]))
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/dashboard/dashboard.component.ts");
/* harmony import */ var _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./sidebar/sidebar.component */ "./src/app/sidebar/sidebar.component.ts");
/* harmony import */ var _routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./routing.module */ "./src/app/routing.module.ts");
/* harmony import */ var _booklist_booklist_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./booklist/booklist.component */ "./src/app/booklist/booklist.component.ts");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/fesm2015/ngx-bootstrap-modal.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");
/* harmony import */ var ngx_barcode__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ngx-barcode */ "./node_modules/ngx-barcode/index.js");
/* harmony import */ var ngx_bootstrap_pagination__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ngx-bootstrap/pagination */ "./node_modules/ngx-bootstrap/pagination/fesm2015/ngx-bootstrap-pagination.js");
/* harmony import */ var ngx_bootstrap_tooltip__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ngx-bootstrap/tooltip */ "./node_modules/ngx-bootstrap/tooltip/fesm2015/ngx-bootstrap-tooltip.js");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _loanpage_loanpage_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./loanpage/loanpage.component */ "./src/app/loanpage/loanpage.component.ts");
/* harmony import */ var _loanpage_currentloan_currentloan_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./loanpage/currentloan/currentloan.component */ "./src/app/loanpage/currentloan/currentloan.component.ts");
/* harmony import */ var _loanpage_historyloan_historyloan_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./loanpage/historyloan/historyloan.component */ "./src/app/loanpage/historyloan/historyloan.component.ts");
/* harmony import */ var _usermanagement_usermanagement_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./usermanagement/usermanagement.component */ "./src/app/usermanagement/usermanagement.component.ts");
/* harmony import */ var _auth_guard__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./auth.guard */ "./src/app/auth.guard.ts");
/* harmony import */ var _login_logout_logout_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./login/logout/logout.component */ "./src/app/login/logout/logout.component.ts");
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @ng-select/ng-select */ "./node_modules/@ng-select/ng-select/fesm2015/ng-select-ng-select.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _returnpage_returnpage_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./returnpage/returnpage.component */ "./src/app/returnpage/returnpage.component.ts");
/* harmony import */ var _returnlandingpage_returnlandingpage_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./returnlandingpage/returnlandingpage.component */ "./src/app/returnlandingpage/returnlandingpage.component.ts");
/* harmony import */ var _booklist_rating_rating_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./booklist/rating/rating.component */ "./src/app/booklist/rating/rating.component.ts");












// import {NgxPaginationModule} from 'ngx-pagination';










/* Directive */





let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
            _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_4__["DashboardComponent"],
            _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_5__["SidebarComponent"],
            _booklist_booklist_component__WEBPACK_IMPORTED_MODULE_7__["BooklistComponent"],
            _login_login_component__WEBPACK_IMPORTED_MODULE_15__["LoginComponent"],
            _login_logout_logout_component__WEBPACK_IMPORTED_MODULE_21__["LogoutComponent"],
            _loanpage_loanpage_component__WEBPACK_IMPORTED_MODULE_16__["LoanpageComponent"],
            _loanpage_currentloan_currentloan_component__WEBPACK_IMPORTED_MODULE_17__["CurrentloanComponent"],
            _loanpage_historyloan_historyloan_component__WEBPACK_IMPORTED_MODULE_18__["HistoryloanComponent"],
            _usermanagement_usermanagement_component__WEBPACK_IMPORTED_MODULE_19__["UsermanagementComponent"],
            _returnpage_returnpage_component__WEBPACK_IMPORTED_MODULE_24__["ReturnpageComponent"],
            _returnlandingpage_returnlandingpage_component__WEBPACK_IMPORTED_MODULE_25__["ReturnlandingpageComponent"],
            _booklist_rating_rating_component__WEBPACK_IMPORTED_MODULE_26__["RatingComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__["BrowserAnimationsModule"],
            _routing_module__WEBPACK_IMPORTED_MODULE_6__["RoutingModule"],
            ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_8__["ModalModule"].forRoot(),
            _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HttpClientModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_23__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_23__["ReactiveFormsModule"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_11__["ToastrModule"].forRoot(),
            // NgxPaginationModule
            ngx_bootstrap_pagination__WEBPACK_IMPORTED_MODULE_13__["PaginationModule"].forRoot(),
            ngx_bootstrap_tooltip__WEBPACK_IMPORTED_MODULE_14__["TooltipModule"].forRoot(),
            _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_22__["NgSelectModule"],
            ngx_barcode__WEBPACK_IMPORTED_MODULE_12__["NgxBarcodeModule"]
        ],
        providers: [_auth_guard__WEBPACK_IMPORTED_MODULE_20__["AuthGuard"]],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/auth.guard.ts":
/*!*******************************!*\
  !*** ./src/app/auth.guard.ts ***!
  \*******************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _app_config_app_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @app-config/app.config */ "./src/app/config/app.config.ts");


// tslint:disable-next-line:max-line-length


/* Config */
// @ts-ignore

let AuthGuard = class AuthGuard {
    constructor(router, route) {
        this.router = router;
        this.route = route;
    }
    canActivate(next, state) {
        if (!localStorage.getItem(_app_config_app_config__WEBPACK_IMPORTED_MODULE_4__["_app_config"].localstorage_prefix + 'user')) {
            // alert('You don\'t have authentication to entrance this page.');
            this.router.navigate(['/home']);
            return false;
        }
        else {
            this.router.events
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["filter"])(e => e instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationEnd"]))
                .subscribe((e) => {
                // this.router.navigate(['/dashboard']);
            });
        }
        return true;
    }
};
AuthGuard.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }
];
AuthGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], AuthGuard);



/***/ }),

/***/ "./src/app/booklist/booklist.component.css":
/*!*************************************************!*\
  !*** ./src/app/booklist/booklist.component.css ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("[class*='col-'] {\r\n  padding: 10px;\r\n}\r\ndiv.left-navbar {\r\n  padding: 0;\r\n}\r\ndiv.left-navbar h2 {\r\n  text-align: left;\r\n  text-transform: uppercase;\r\n  font-size: 2.2rem;\r\n  font-weight: 700;\r\n  line-height: 2rem;\r\n  cursor: pointer;\r\n  -webkit-touch-callout: none;\r\n  -webkit-user-select: none;\r\n  -moz-user-select: none;\r\n  -ms-user-select: none;\r\n  user-select: none;\r\n  margin: 0;\r\n}\r\ndiv.right-navbar {\r\n  padding: 0;\r\n  text-align: right;\r\n}\r\n.nopadding {\r\n  padding: 0 !important;\r\n  margin: 0 !important;\r\n}\r\nbutton .icon {\r\n  position: absolute;\r\n  height: 100%;\r\n  border-radius: 0;\r\n  border-top-left-radius: inherit;\r\n  border-bottom-left-radius: inherit;\r\n  text-align: center;\r\n  margin: 0;\r\n  width: 2.57142857em;\r\n  background-color: rgba(0,0,0,.05);\r\n  box-shadow: -1px 0 0 0 transparent inset;\r\n  top: 0;\r\n  left: 0;\r\n  line-height: 2.3;\r\n  color: white;\r\n}\r\n@media only screen and (max-width: 640px) {\r\n  div.left-navbar h2 {\r\n    transition: all .5s ease-in-out;\r\n    opacity: 0;\r\n    display: none;\r\n  }\r\n}\r\n@media only screen and (min-width: 641px) {\r\n  .category {\r\n    width: 100%\r\n  }\r\n}\r\n@media only screen and (min-width: 576px){\r\n  .category {\r\n    width: 80%\r\n  }\r\n}\r\n@media only screen and (min-width: 769px) {\r\n  .category {\r\n    width: 60%\r\n  }\r\n}\r\n@media only screen and (min-width: 1200px) {\r\n  .category {\r\n    width: 40%\r\n  }\r\n}\r\n.header-container {\r\n  padding: 15px 20px 15px 10px;\r\n  background-color: white;\r\n  z-index: 98;\r\n  box-shadow: 0 2px 2px -2px rgba(0,0,0,.2);\r\n}\r\n.sticky-header {\r\n  position: fixed;\r\n  top: 0;\r\n  left: 10px;\r\n  box-shadow: 0 2px 8px #f0f1f2;\r\n  transition: top .8s!important;\r\n  width: 100%;\r\n  padding-right: 50px;\r\n  padding-left: 80px;\r\n}\r\n.content-container {\r\n  padding: 0 20px 0 80px;\r\n  background-color: white;\r\n}\r\n.content-when-sticky-header {\r\n  padding-top: 80px;\r\n}\r\n.my-pagination /deep/ .ngx-pagination .current {\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJvb2tsaXN0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFhO0FBQ2Y7QUFDQTtFQUNFLFVBQVU7QUFDWjtBQUNBO0VBQ0UsZ0JBQWdCO0VBQ2hCLHlCQUF5QjtFQUN6QixpQkFBaUI7RUFDakIsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtFQUNqQixlQUFlO0VBQ2YsMkJBQTJCO0VBQzNCLHlCQUF5QjtFQUN6QixzQkFBc0I7RUFDdEIscUJBQXFCO0VBQ3JCLGlCQUFpQjtFQUNqQixTQUFTO0FBQ1g7QUFDQTtFQUNFLFVBQVU7RUFDVixpQkFBaUI7QUFDbkI7QUFFQTtFQUNFLHFCQUFxQjtFQUNyQixvQkFBb0I7QUFDdEI7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osZ0JBQWdCO0VBQ2hCLCtCQUErQjtFQUMvQixrQ0FBa0M7RUFDbEMsa0JBQWtCO0VBQ2xCLFNBQVM7RUFDVCxtQkFBbUI7RUFDbkIsaUNBQWlDO0VBQ2pDLHdDQUF3QztFQUN4QyxNQUFNO0VBQ04sT0FBTztFQUNQLGdCQUFnQjtFQUNoQixZQUFZO0FBQ2Q7QUFHQTtFQUNFO0lBQ0UsK0JBQStCO0lBQy9CLFVBQVU7SUFDVixhQUFhO0VBQ2Y7QUFDRjtBQUVBO0VBQ0U7SUFDRTtFQUNGO0FBQ0Y7QUFFQTtFQUNFO0lBQ0U7RUFDRjtBQUNGO0FBRUE7RUFDRTtJQUNFO0VBQ0Y7QUFDRjtBQUdBO0VBQ0U7SUFDRTtFQUNGO0FBQ0Y7QUFFQTtFQUNFLDRCQUE0QjtFQUM1Qix1QkFBdUI7RUFDdkIsV0FBVztFQUNYLHlDQUF5QztBQUMzQztBQUNBO0VBQ0UsZUFBZTtFQUNmLE1BQU07RUFDTixVQUFVO0VBQ1YsNkJBQTZCO0VBRTdCLDZCQUE2QjtFQUM3QixXQUFXO0VBQ1gsbUJBQW1CO0VBQ25CLGtCQUFrQjtBQUNwQjtBQUVBO0VBQ0Usc0JBQXNCO0VBQ3RCLHVCQUF1QjtBQUN6QjtBQUNBO0VBQ0UsaUJBQWlCO0FBQ25CO0FBRUE7QUFDQSIsImZpbGUiOiJib29rbGlzdC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiW2NsYXNzKj0nY29sLSddIHtcclxuICBwYWRkaW5nOiAxMHB4O1xyXG59XHJcbmRpdi5sZWZ0LW5hdmJhciB7XHJcbiAgcGFkZGluZzogMDtcclxufVxyXG5kaXYubGVmdC1uYXZiYXIgaDIge1xyXG4gIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICBmb250LXNpemU6IDIuMnJlbTtcclxuICBmb250LXdlaWdodDogNzAwO1xyXG4gIGxpbmUtaGVpZ2h0OiAycmVtO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICAtd2Via2l0LXRvdWNoLWNhbGxvdXQ6IG5vbmU7XHJcbiAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcclxuICAtbW96LXVzZXItc2VsZWN0OiBub25lO1xyXG4gIC1tcy11c2VyLXNlbGVjdDogbm9uZTtcclxuICB1c2VyLXNlbGVjdDogbm9uZTtcclxuICBtYXJnaW46IDA7XHJcbn1cclxuZGl2LnJpZ2h0LW5hdmJhciB7XHJcbiAgcGFkZGluZzogMDtcclxuICB0ZXh0LWFsaWduOiByaWdodDtcclxufVxyXG5cclxuLm5vcGFkZGluZyB7XHJcbiAgcGFkZGluZzogMCAhaW1wb3J0YW50O1xyXG4gIG1hcmdpbjogMCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG5idXR0b24gLmljb24ge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgYm9yZGVyLXJhZGl1czogMDtcclxuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiBpbmhlcml0O1xyXG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IGluaGVyaXQ7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIG1hcmdpbjogMDtcclxuICB3aWR0aDogMi41NzE0Mjg1N2VtO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwwLDAsLjA1KTtcclxuICBib3gtc2hhZG93OiAtMXB4IDAgMCAwIHRyYW5zcGFyZW50IGluc2V0O1xyXG4gIHRvcDogMDtcclxuICBsZWZ0OiAwO1xyXG4gIGxpbmUtaGVpZ2h0OiAyLjM7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2NDBweCkge1xyXG4gIGRpdi5sZWZ0LW5hdmJhciBoMiB7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgLjVzIGVhc2UtaW4tb3V0O1xyXG4gICAgb3BhY2l0eTogMDtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDY0MXB4KSB7XHJcbiAgLmNhdGVnb3J5IHtcclxuICAgIHdpZHRoOiAxMDAlXHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDU3NnB4KXtcclxuICAuY2F0ZWdvcnkge1xyXG4gICAgd2lkdGg6IDgwJVxyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NjlweCkge1xyXG4gIC5jYXRlZ29yeSB7XHJcbiAgICB3aWR0aDogNjAlXHJcbiAgfVxyXG59XHJcblxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMjAwcHgpIHtcclxuICAuY2F0ZWdvcnkge1xyXG4gICAgd2lkdGg6IDQwJVxyXG4gIH1cclxufVxyXG5cclxuLmhlYWRlci1jb250YWluZXIge1xyXG4gIHBhZGRpbmc6IDE1cHggMjBweCAxNXB4IDEwcHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgei1pbmRleDogOTg7XHJcbiAgYm94LXNoYWRvdzogMCAycHggMnB4IC0ycHggcmdiYSgwLDAsMCwuMik7XHJcbn1cclxuLnN0aWNreS1oZWFkZXIge1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICB0b3A6IDA7XHJcbiAgbGVmdDogMTBweDtcclxuICBib3gtc2hhZG93OiAwIDJweCA4cHggI2YwZjFmMjtcclxuICAtd2Via2l0LXRyYW5zaXRpb246IHRvcCAuOHMhaW1wb3J0YW50O1xyXG4gIHRyYW5zaXRpb246IHRvcCAuOHMhaW1wb3J0YW50O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIHBhZGRpbmctcmlnaHQ6IDUwcHg7XHJcbiAgcGFkZGluZy1sZWZ0OiA4MHB4O1xyXG59XHJcblxyXG4uY29udGVudC1jb250YWluZXIge1xyXG4gIHBhZGRpbmc6IDAgMjBweCAwIDgwcHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbn1cclxuLmNvbnRlbnQtd2hlbi1zdGlja3ktaGVhZGVyIHtcclxuICBwYWRkaW5nLXRvcDogODBweDtcclxufVxyXG5cclxuLm15LXBhZ2luYXRpb24gL2RlZXAvIC5uZ3gtcGFnaW5hdGlvbiAuY3VycmVudCB7XHJcbn1cclxuIl19 */");

/***/ }),

/***/ "./src/app/booklist/booklist.component.ts":
/*!************************************************!*\
  !*** ./src/app/booklist/booklist.component.ts ***!
  \************************************************/
/*! exports provided: BooklistComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BooklistComponent", function() { return BooklistComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/fesm2015/ngx-bootstrap-modal.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _bookmodel__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./bookmodel */ "./src/app/booklist/bookmodel.ts");
/* harmony import */ var _notification_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../notification.service */ "./src/app/notification.service.ts");
/* harmony import */ var save_svg_as_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! save-svg-as-png */ "./node_modules/save-svg-as-png/lib/saveSvgAsPng.js");
/* harmony import */ var save_svg_as_png__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(save_svg_as_png__WEBPACK_IMPORTED_MODULE_7__);








let BooklistComponent = class BooklistComponent {
    constructor(modalService, http, route, toastr, router) {
        this.modalService = modalService;
        this.http = http;
        this.route = route;
        this.toastr = toastr;
        this.router = router;
        this.title = 'Book List';
        this.uri = 'https://lib-ws-mdb.herokuapp.com/';
        this.pager = {};
        this.pageOfItems = [];
        this.inputBook = new _bookmodel__WEBPACK_IMPORTED_MODULE_5__["BookModel"]('', '', '', '', '', '', '', '', '', '', '', '', 1, '');
        this.updateBook = new _bookmodel__WEBPACK_IMPORTED_MODULE_5__["BookModel"]('', '', '', '', '', '', '', '', '', '', '', '', 0, '');
        this.loading = true;
        this.nodata = false;
    }
    ngOnInit() {
        this.loading = true;
        this.config = {
            itemsPerPage: 10,
            currentPage: 1,
            totalItems: 0
        };
        this.route.queryParams.subscribe(x => this.loadPage(x.page || 1));
        this.http.get(this.uri + 'perpustakaan/api/v1/kategori/list')
            .subscribe(x => {
            this.data = x;
            this.Category = this.data.data;
        });
    }
    onCategoryChange($event) {
        this.route.queryParams.subscribe(x => this.loadPage(x.page || 1));
    }
    onChange($event) {
    }
    onSearch(searchInput) {
        this.route.queryParams.subscribe(x => this.loadPage(x.page || 1));
    }
    openModal(template) {
        this.inputCategory = '';
        this.getKategori = null;
        this.inputBook.judul = '';
        this.inputBook.edisi = '';
        this.inputBook.penerbit = '';
        this.inputBook.tahun_terbit = '';
        this.inputBook.deskripsi = '';
        this.inputBook.pengarang = '';
        this.inputBook.umum_res = '';
        this.inputBook.bahasa = '';
        this.inputBook.isbn = '';
        this.inputBook.lokasi = '';
        this.inputBook.kota_terbit = '';
        this.inputBook.gambar = '';
        this.inputBook.klasifikasi = '';
        this.modalRef = this.modalService.show(template);
    }
    onPageChange(event) {
        this.router.navigate(['/books'], { queryParams: { page: event.page } });
    }
    onView(id, template) {
        this.http.get(this.uri + 'perpustakaan/api/v1/data_buku/view/' + id)
            .subscribe(x => {
            this.updateBook = x.data;
        });
        this.modalRef = this.modalService.show(template);
    }
    onModalDelete(id, template) {
        this.deleteID = id;
        this.modalRef = this.modalService.show(template);
    }
    onDelete(id) {
        this.http.delete(this.uri + 'perpustakaan/api/v1/data_buku/delete/' + id)
            .subscribe(x => {
            this.modalRef.hide();
            if (x.status === true) {
                this.toastr.showSuccess(x.message, 'Berhasil');
            }
            else {
                this.toastr.showError(x.message, 'Gagal');
            }
            this.ngOnInit();
            this.deleteID = '';
        });
    }
    onNotDelete() {
        this.deleteID = '';
        this.modalRef.hide();
    }
    loadPage(num) {
        if (this.selectedCategory === '') {
            this.selectedCategory = 'All';
        }
        this.http.post(this.uri + 'perpustakaan/api/v1/data_buku/list', { category: this.selectedCategory, search: this.search, page: +num, size: 10 })
            .subscribe(x => {
            console.log(x);
            if (x.data.total_record === 0) {
                this.nodata = true;
            }
            else {
                this.nodata = false;
                this.pager = x.data;
                this.pageOfItems = x.data.records;
                this.config = {
                    itemsPerPage: x.data.limit,
                    currentPage: x.data.page,
                    totalItems: x.data.total_record
                };
            }
            this.loading = false;
        });
    }
    onSubmit(data, template) {
        if (this.inputBook.judul === '' &&
            this.inputBook.edisi === '' &&
            this.inputBook.penerbit === '' &&
            this.inputBook.tahun_terbit === '' &&
            this.inputBook.deskripsi === '' &&
            this.inputBook.pengarang === '' &&
            this.inputBook.umum_res === '' &&
            this.inputBook.bahasa === '' &&
            this.inputBook.isbn === '' &&
            this.inputBook.lokasi === '' &&
            this.inputBook.kota_terbit === '' &&
            this.inputBook.gambar === '' &&
            this.inputBook.klasifikasi === '') {
            this.toastr.showError('Data yang dibutuhkan Kosong!', 'Gagal');
        }
        else {
            this.http.post(this.uri + 'perpustakaan/api/v1/data_buku/create', data).subscribe(x => {
                this.modalRef.hide();
                if (x.status === true) {
                    this.toastr.showSuccess(x.message, 'Berhasil');
                }
                else {
                    this.toastr.showError(x.message, 'Gagal');
                }
                console.log(x);
                this.ngOnInit();
                this.onModalBarcode(x.data.buku_id, x.data.judul, template);
            });
        }
    }
    onUpdate(data) {
        this.http.put(this.uri + 'perpustakaan/api/v1/data_buku/update', data).subscribe(x => {
            this.modalRef.hide();
            if (x.status === true) {
                this.toastr.showSuccess(x.message, 'Berhasil');
            }
            else {
                this.toastr.showError(x.message, 'Gagal');
            }
            this.ngOnInit();
        });
    }
    onSubmitCategory(input) {
        this.http.get(this.uri + 'perpustakaan/api/v1/kategori/tambah/' + input)
            .subscribe(x => {
            console.log(x);
            this.modalRef.hide();
            if (x.status === true) {
                this.toastr.showSuccess(x.message, 'Berhasil');
            }
            else {
                this.toastr.showError(x.message, 'Gagal');
            }
            this.ngOnInit();
        });
    }
    onDeleteCategory(CategoryName) {
        this.http.delete(this.uri + 'perpustakaan/api/v1/kategori/hapus/' + CategoryName)
            .subscribe(x => {
            console.log(x);
            if (x.status === true) {
                this.toastr.showSuccess(x.message, 'Berhasil');
            }
            else {
                this.toastr.showError(x.message, 'Gagal');
            }
            this.http.get(this.uri + 'perpustakaan/api/v1/kategori/list')
                .subscribe(dataset => {
                this.data = dataset;
                this.Category = this.data.data;
            });
        });
    }
    returnBlob(res) {
        return new Blob([res], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
    }
    onDownload() {
        this.http.get(this.uri + 'perpustakaan/api/v1/data_buku/download', { responseType: 'blob' })
            .subscribe(res => {
            if (res) {
                const url = window.URL.createObjectURL(this.returnBlob(res));
                window.open(url);
            }
        });
    }
    openDownloadModal(template) {
        this.modalRef = this.modalService.show(template);
        this.loadingDL = true;
        this.http.post(this.uri + 'perpustakaan/api/v1/data_buku/createlistbuku', { category: this.selectedCategory, search: this.search, page: 1, size: this.config.totalItems })
            .subscribe(x => {
            console.log(x);
            if (x.status === true) {
                setTimeout(() => {
                    this.loadingDL = false;
                }, 1000);
                this.toastr.showSuccess('Data berhasil didapat', 'Berhasil');
            }
            else {
                this.toastr.showError('Data gagal Diolah', 'Gagal');
            }
        });
    }
    setBlobBarcode(base64Data, sliceSize = 512) {
        const split = base64Data.split(',', 2);
        const byteCharacters = atob(split[1]);
        const byteArrays = [];
        for (let offset = 0; offset < byteCharacters.length; offset += sliceSize) {
            const slice = byteCharacters.slice(offset, offset + sliceSize);
            const byteNumbers = new Array(slice.length);
            for (let i = 0; i < slice.length; i++) {
                byteNumbers[i] = slice.charCodeAt(i);
            }
            const byteArray = new Uint8Array(byteNumbers);
            byteArrays.push(byteArray);
        }
        return new Blob(byteArrays, { type: 'image/png' });
    }
    onDownloadBarcode() {
        save_svg_as_png__WEBPACK_IMPORTED_MODULE_7__["svgAsPngUri"](document.getElementsByTagName('svg')[0], {}, (uri) => {
            const url = window.URL.createObjectURL(this.setBlobBarcode(uri));
            window.open(url);
        });
    }
    onModalBarcode(id, judul, template) {
        this.barcode = id;
        this.barcodeTitle = judul;
        this.modalRef = this.modalService.show(template);
    }
};
BooklistComponent.ctorParameters = () => [
    { type: ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_2__["BsModalService"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
    { type: _notification_service__WEBPACK_IMPORTED_MODULE_6__["NotificationService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
];
BooklistComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-booklist',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./booklist.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/booklist/booklist.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./booklist.component.css */ "./src/app/booklist/booklist.component.css")).default]
    })
], BooklistComponent);



/***/ }),

/***/ "./src/app/booklist/bookmodel.ts":
/*!***************************************!*\
  !*** ./src/app/booklist/bookmodel.ts ***!
  \***************************************/
/*! exports provided: BookModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BookModel", function() { return BookModel; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class BookModel {
    constructor(
    // tslint:disable-next-line:variable-name
    judul, edisi, pengarang, 
    // tslint:disable-next-line:variable-name
    kota_terbit, penerbit, tahun_terbit, isbn, klasifikasi, umum_res, 
    // tslint:disable-next-line:variable-name
    bahasa, 
    // tslint:disable-next-line:variable-name
    lokasi, deskripsi, stok, gambar) {
        this.judul = judul;
        this.edisi = edisi;
        this.pengarang = pengarang;
        this.kota_terbit = kota_terbit;
        this.penerbit = penerbit;
        this.tahun_terbit = tahun_terbit;
        this.isbn = isbn;
        this.klasifikasi = klasifikasi;
        this.umum_res = umum_res;
        this.bahasa = bahasa;
        this.lokasi = lokasi;
        this.deskripsi = deskripsi;
        this.stok = stok;
        this.gambar = gambar;
    }
}


/***/ }),

/***/ "./src/app/booklist/rating/rating.component.css":
/*!******************************************************!*\
  !*** ./src/app/booklist/rating/rating.component.css ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("[class*='col-'] {\r\n  padding: 10px;\r\n}\r\ndiv.left-navbar {\r\n  padding: 0;\r\n}\r\ndiv.left-navbar h2 {\r\n  text-align: left;\r\n  text-transform: uppercase;\r\n  font-size: 2.2rem;\r\n  font-weight: 700;\r\n  line-height: 2rem;\r\n  cursor: pointer;\r\n  -webkit-touch-callout: none;\r\n  -webkit-user-select: none;\r\n  -moz-user-select: none;\r\n  -ms-user-select: none;\r\n  user-select: none;\r\n  margin: 0;\r\n}\r\ndiv.right-navbar {\r\n  padding: 0;\r\n  text-align: right;\r\n}\r\n.nopadding {\r\n  padding: 0 !important;\r\n  margin: 0 !important;\r\n}\r\nbutton .icon {\r\n  position: absolute;\r\n  height: 100%;\r\n  border-radius: 0;\r\n  border-top-left-radius: inherit;\r\n  border-bottom-left-radius: inherit;\r\n  text-align: center;\r\n  margin: 0;\r\n  width: 2.57142857em;\r\n  background-color: rgba(0,0,0,.05);\r\n  box-shadow: -1px 0 0 0 transparent inset;\r\n  top: 0;\r\n  left: 0;\r\n  line-height: 2.3;\r\n  color: white;\r\n}\r\n@media only screen and (max-width: 640px) {\r\n  div.left-navbar h2 {\r\n    transition: all .5s ease-in-out;\r\n    opacity: 0;\r\n    display: none;\r\n  }\r\n}\r\n.header-container {\r\n  padding: 15px 20px 15px 10px;\r\n  background-color: white;\r\n  z-index: 98;\r\n  box-shadow: 0 2px 2px -2px rgba(0,0,0,.2);\r\n}\r\n.sticky-header {\r\n  position: fixed;\r\n  top: 0;\r\n  left: 10px;\r\n  box-shadow: 0 2px 8px #f0f1f2;\r\n  transition: top .8s!important;\r\n  width: 100%;\r\n  padding-right: 50px;\r\n  padding-left: 80px;\r\n}\r\n.content-container {\r\n  padding: 0 20px 0 80px;\r\n  background-color: white;\r\n}\r\n.content-when-sticky-header {\r\n  padding-top: 80px;\r\n}\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJhdGluZy9yYXRpbmcuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQWE7QUFDZjtBQUNBO0VBQ0UsVUFBVTtBQUNaO0FBQ0E7RUFDRSxnQkFBZ0I7RUFDaEIseUJBQXlCO0VBQ3pCLGlCQUFpQjtFQUNqQixnQkFBZ0I7RUFDaEIsaUJBQWlCO0VBQ2pCLGVBQWU7RUFDZiwyQkFBMkI7RUFDM0IseUJBQXlCO0VBQ3pCLHNCQUFzQjtFQUN0QixxQkFBcUI7RUFDckIsaUJBQWlCO0VBQ2pCLFNBQVM7QUFDWDtBQUNBO0VBQ0UsVUFBVTtFQUNWLGlCQUFpQjtBQUNuQjtBQUVBO0VBQ0UscUJBQXFCO0VBQ3JCLG9CQUFvQjtBQUN0QjtBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixnQkFBZ0I7RUFDaEIsK0JBQStCO0VBQy9CLGtDQUFrQztFQUNsQyxrQkFBa0I7RUFDbEIsU0FBUztFQUNULG1CQUFtQjtFQUNuQixpQ0FBaUM7RUFDakMsd0NBQXdDO0VBQ3hDLE1BQU07RUFDTixPQUFPO0VBQ1AsZ0JBQWdCO0VBQ2hCLFlBQVk7QUFDZDtBQUVBO0VBQ0U7SUFDRSwrQkFBK0I7SUFDL0IsVUFBVTtJQUNWLGFBQWE7RUFDZjtBQUNGO0FBR0E7RUFDRSw0QkFBNEI7RUFDNUIsdUJBQXVCO0VBQ3ZCLFdBQVc7RUFDWCx5Q0FBeUM7QUFDM0M7QUFDQTtFQUNFLGVBQWU7RUFDZixNQUFNO0VBQ04sVUFBVTtFQUNWLDZCQUE2QjtFQUU3Qiw2QkFBNkI7RUFDN0IsV0FBVztFQUNYLG1CQUFtQjtFQUNuQixrQkFBa0I7QUFDcEI7QUFFQTtFQUNFLHNCQUFzQjtFQUN0Qix1QkFBdUI7QUFDekI7QUFDQTtFQUNFLGlCQUFpQjtBQUNuQiIsImZpbGUiOiJyYXRpbmcvcmF0aW5nLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJbY2xhc3MqPSdjb2wtJ10ge1xyXG4gIHBhZGRpbmc6IDEwcHg7XHJcbn1cclxuZGl2LmxlZnQtbmF2YmFyIHtcclxuICBwYWRkaW5nOiAwO1xyXG59XHJcbmRpdi5sZWZ0LW5hdmJhciBoMiB7XHJcbiAgdGV4dC1hbGlnbjogbGVmdDtcclxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gIGZvbnQtc2l6ZTogMi4ycmVtO1xyXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgbGluZS1oZWlnaHQ6IDJyZW07XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIC13ZWJraXQtdG91Y2gtY2FsbG91dDogbm9uZTtcclxuICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xyXG4gIC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgLW1zLXVzZXItc2VsZWN0OiBub25lO1xyXG4gIHVzZXItc2VsZWN0OiBub25lO1xyXG4gIG1hcmdpbjogMDtcclxufVxyXG5kaXYucmlnaHQtbmF2YmFyIHtcclxuICBwYWRkaW5nOiAwO1xyXG4gIHRleHQtYWxpZ246IHJpZ2h0O1xyXG59XHJcblxyXG4ubm9wYWRkaW5nIHtcclxuICBwYWRkaW5nOiAwICFpbXBvcnRhbnQ7XHJcbiAgbWFyZ2luOiAwICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbmJ1dHRvbiAuaWNvbiB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBib3JkZXItcmFkaXVzOiAwO1xyXG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IGluaGVyaXQ7XHJcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogaW5oZXJpdDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgbWFyZ2luOiAwO1xyXG4gIHdpZHRoOiAyLjU3MTQyODU3ZW07XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLDAsMCwuMDUpO1xyXG4gIGJveC1zaGFkb3c6IC0xcHggMCAwIDAgdHJhbnNwYXJlbnQgaW5zZXQ7XHJcbiAgdG9wOiAwO1xyXG4gIGxlZnQ6IDA7XHJcbiAgbGluZS1oZWlnaHQ6IDIuMztcclxuICBjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjQwcHgpIHtcclxuICBkaXYubGVmdC1uYXZiYXIgaDIge1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIC41cyBlYXNlLWluLW91dDtcclxuICAgIG9wYWNpdHk6IDA7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG4gIH1cclxufVxyXG5cclxuXHJcbi5oZWFkZXItY29udGFpbmVyIHtcclxuICBwYWRkaW5nOiAxNXB4IDIwcHggMTVweCAxMHB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gIHotaW5kZXg6IDk4O1xyXG4gIGJveC1zaGFkb3c6IDAgMnB4IDJweCAtMnB4IHJnYmEoMCwwLDAsLjIpO1xyXG59XHJcbi5zdGlja3ktaGVhZGVyIHtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgdG9wOiAwO1xyXG4gIGxlZnQ6IDEwcHg7XHJcbiAgYm94LXNoYWRvdzogMCAycHggOHB4ICNmMGYxZjI7XHJcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiB0b3AgLjhzIWltcG9ydGFudDtcclxuICB0cmFuc2l0aW9uOiB0b3AgLjhzIWltcG9ydGFudDtcclxuICB3aWR0aDogMTAwJTtcclxuICBwYWRkaW5nLXJpZ2h0OiA1MHB4O1xyXG4gIHBhZGRpbmctbGVmdDogODBweDtcclxufVxyXG5cclxuLmNvbnRlbnQtY29udGFpbmVyIHtcclxuICBwYWRkaW5nOiAwIDIwcHggMCA4MHB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG59XHJcbi5jb250ZW50LXdoZW4tc3RpY2t5LWhlYWRlciB7XHJcbiAgcGFkZGluZy10b3A6IDgwcHg7XHJcbn1cclxuXHJcbiJdfQ== */");

/***/ }),

/***/ "./src/app/booklist/rating/rating.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/booklist/rating/rating.component.ts ***!
  \*****************************************************/
/*! exports provided: RatingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RatingComponent", function() { return RatingComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/fesm2015/ngx-bootstrap-modal.js");
/* harmony import */ var _notification_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../notification.service */ "./src/app/notification.service.ts");






let RatingComponent = class RatingComponent {
    constructor(route, http, modalService, toastr, router) {
        this.route = route;
        this.http = http;
        this.modalService = modalService;
        this.toastr = toastr;
        this.router = router;
        this.uri = 'https://lib-ws-mdb.herokuapp.com/';
        this.pageOfItems = [];
        this.nodata = false;
        this.pager = {};
    }
    ngOnInit() {
        this.loading = true;
        this.BookId = this.route.snapshot.paramMap.get('id');
        this.getBookInfo(this.BookId);
        this.config = {
            itemsPerPage: 10,
            currentPage: 1,
            totalItems: 0
        };
        this.route.queryParams.subscribe(x => this.getRatingInfo(x.page || 1));
    }
    getRatingInfo(num) {
        this.http.post(this.uri + 'perpustakaan/api/v1/data_buku/rating/list', { id_buku: this.BookId, page: +num, size: 10 })
            .subscribe(x => {
            if (x.data.total_record === 0) {
                this.nodata = true;
            }
            else {
                this.nodata = false;
                this.pager = x.data;
                this.pageOfItems = x.data.records;
                this.config = {
                    itemsPerPage: x.data.limit,
                    currentPage: x.data.page,
                    totalItems: x.data.total_record
                };
            }
            this.loading = false;
        });
    }
    getBookInfo(id) {
        this.http.get(this.uri + 'perpustakaan/api/v1/data_buku/view/' + id)
            .subscribe(x => {
            this.BookInfo = x.data;
        });
    }
    onPageChange(event) {
        this.router.navigate(['/book/rating/' + this.BookId], { queryParams: { page: event.page } });
    }
    onModalDelete(id, template) {
        this.deleteID = id;
        this.modalRef = this.modalService.show(template);
    }
    onDelete(id) {
        this.http.delete(this.uri + 'perpustakaan/api/v1/data_buku/rating/delete/' + id)
            .subscribe(x => {
            this.modalRef.hide();
            if (x.data === 1) {
                this.toastr.showSuccess(x.message, 'Berhasil');
            }
            else {
                this.toastr.showError(x.message, 'Gagal');
            }
            this.ngOnInit();
            this.deleteID = '';
        });
    }
    onNotDelete() {
        this.deleteID = '';
        this.modalRef.hide();
    }
    returnBlob(res) {
        return new Blob([res], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
    }
    onDownload() {
        this.http.get(this.uri + 'perpustakaan/api/v1/data_buku/rating/download', { responseType: 'blob' })
            .subscribe(res => {
            if (res) {
                const url = window.URL.createObjectURL(this.returnBlob(res));
                window.open(url);
            }
        });
    }
    openDownloadModal(template) {
        this.modalRef = this.modalService.show(template);
        this.loadingDL = true;
        this.http.post(this.uri + 'perpustakaan/api/v1/data_buku/rating/createlistrating', { id_buku: this.BookId, page: 1, size: this.config.totalItems })
            .subscribe(x => {
            console.log(x);
            if (x.status === true) {
                setTimeout(() => {
                    this.loadingDL = false;
                }, 1000);
                this.toastr.showSuccess('Data berhasil didapat', 'Berhasil');
            }
            else {
                this.modalRef.hide();
                this.toastr.showError('Data gagal Diolah', 'Gagal');
            }
        });
    }
};
RatingComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] },
    { type: ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_4__["BsModalService"] },
    { type: _notification_service__WEBPACK_IMPORTED_MODULE_5__["NotificationService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
RatingComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-rating',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./rating.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/booklist/rating/rating.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./rating.component.css */ "./src/app/booklist/rating/rating.component.css")).default]
    })
], RatingComponent);



/***/ }),

/***/ "./src/app/config/app.config.ts":
/*!**************************************!*\
  !*** ./src/app/config/app.config.ts ***!
  \**************************************/
/*! exports provided: _app_config */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_app_config", function() { return _app_config; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

/**
 * App global config
 */
// tslint:disable-next-line:variable-name
const _app_config = Object.freeze({
    name: 'E-Library',
    title: 'Electronic Library System',
    google_maps: {
        default_latlng: { lat: -2.10507, lng: 117.743829 },
        api: 'https://maps.googleapis.com/maps/api/geocode/json?address=',
        key: 'AIzaSyCVpLll3uEv0-jMEbIrMK_eZyG9zR2GOC8',
    },
    security_encription_pass: '!PPNSE-L1B!',
    localstorage_prefix: 'els.'
});


/***/ }),

/***/ "./src/app/dashboard/dashboard.component.css":
/*!***************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.css ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("[class*='col-'] {\r\n  padding: 10px;\r\n}\r\ndiv.left-navbar {\r\n  padding: 0;\r\n}\r\ndiv.left-navbar h2 {\r\n  text-align: left;\r\n  text-transform: uppercase;\r\n  font-size: 2.2rem;\r\n  font-weight: 700;\r\n  line-height: 2rem;\r\n  cursor: pointer;\r\n  -webkit-touch-callout: none;\r\n  -webkit-user-select: none;\r\n  -moz-user-select: none;\r\n  -ms-user-select: none;\r\n  user-select: none;\r\n  margin: 0;\r\n}\r\ndiv.right-navbar {\r\n  padding: 0;\r\n  text-align: right;\r\n}\r\n.nopadding {\r\n  padding: 0 !important;\r\n  margin: 0 !important;\r\n}\r\nbutton .icon {\r\n  position: absolute;\r\n  height: 100%;\r\n  border-radius: 0;\r\n  border-top-left-radius: inherit;\r\n  border-bottom-left-radius: inherit;\r\n  text-align: center;\r\n  margin: 0;\r\n  width: 2.57142857em;\r\n  background-color: rgba(0,0,0,.05);\r\n  box-shadow: -1px 0 0 0 transparent inset;\r\n  top: 0;\r\n  left: 0;\r\n  line-height: 2.3;\r\n  color: white;\r\n}\r\n@media only screen and (min-width: 641px) {\r\n  .category {\r\n    width: 100%\r\n  }\r\n}\r\n@media only screen and (min-width: 576px){\r\n  .category {\r\n    width: 80%\r\n  }\r\n}\r\n@media only screen and (min-width: 769px) {\r\n  .category {\r\n    width: 60%\r\n  }\r\n}\r\n@media only screen and (min-width: 1200px) {\r\n  .category {\r\n    width: 40%\r\n  }\r\n}\r\n.header-container {\r\n  padding: 15px 20px 15px 10px;\r\n  background-color: white;\r\n  z-index: 98;\r\n  box-shadow: 0 2px 2px -2px rgba(0,0,0,.2);\r\n}\r\n.sticky-header {\r\n  position: fixed;\r\n  top: 0;\r\n  left: 10px;\r\n  box-shadow: 0 2px 8px #f0f1f2;\r\n  transition: top .8s!important;\r\n  width: 100%;\r\n  padding-right: 50px;\r\n  padding-left: 80px;\r\n}\r\n.content-container {\r\n  padding: 0 20px 0 80px;\r\n  background-color: white;\r\n}\r\n.content-when-sticky-header {\r\n  padding-top: 80px;\r\n}\r\n.my-pagination /deep/ .ngx-pagination .current {\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2Rhc2hib2FyZC9kYXNoYm9hcmQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQWE7QUFDZjtBQUNBO0VBQ0UsVUFBVTtBQUNaO0FBQ0E7RUFDRSxnQkFBZ0I7RUFDaEIseUJBQXlCO0VBQ3pCLGlCQUFpQjtFQUNqQixnQkFBZ0I7RUFDaEIsaUJBQWlCO0VBQ2pCLGVBQWU7RUFDZiwyQkFBMkI7RUFDM0IseUJBQXlCO0VBQ3pCLHNCQUFzQjtFQUN0QixxQkFBcUI7RUFDckIsaUJBQWlCO0VBQ2pCLFNBQVM7QUFDWDtBQUNBO0VBQ0UsVUFBVTtFQUNWLGlCQUFpQjtBQUNuQjtBQUVBO0VBQ0UscUJBQXFCO0VBQ3JCLG9CQUFvQjtBQUN0QjtBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixnQkFBZ0I7RUFDaEIsK0JBQStCO0VBQy9CLGtDQUFrQztFQUNsQyxrQkFBa0I7RUFDbEIsU0FBUztFQUNULG1CQUFtQjtFQUNuQixpQ0FBaUM7RUFDakMsd0NBQXdDO0VBQ3hDLE1BQU07RUFDTixPQUFPO0VBQ1AsZ0JBQWdCO0VBQ2hCLFlBQVk7QUFDZDtBQUdBO0VBQ0U7SUFDRTtFQUNGO0FBQ0Y7QUFFQTtFQUNFO0lBQ0U7RUFDRjtBQUNGO0FBRUE7RUFDRTtJQUNFO0VBQ0Y7QUFDRjtBQUdBO0VBQ0U7SUFDRTtFQUNGO0FBQ0Y7QUFFQTtFQUNFLDRCQUE0QjtFQUM1Qix1QkFBdUI7RUFDdkIsV0FBVztFQUNYLHlDQUF5QztBQUMzQztBQUNBO0VBQ0UsZUFBZTtFQUNmLE1BQU07RUFDTixVQUFVO0VBQ1YsNkJBQTZCO0VBRTdCLDZCQUE2QjtFQUM3QixXQUFXO0VBQ1gsbUJBQW1CO0VBQ25CLGtCQUFrQjtBQUNwQjtBQUVBO0VBQ0Usc0JBQXNCO0VBQ3RCLHVCQUF1QjtBQUN6QjtBQUNBO0VBQ0UsaUJBQWlCO0FBQ25CO0FBRUE7QUFDQSIsImZpbGUiOiIuLi9kYXNoYm9hcmQvZGFzaGJvYXJkLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJbY2xhc3MqPSdjb2wtJ10ge1xyXG4gIHBhZGRpbmc6IDEwcHg7XHJcbn1cclxuZGl2LmxlZnQtbmF2YmFyIHtcclxuICBwYWRkaW5nOiAwO1xyXG59XHJcbmRpdi5sZWZ0LW5hdmJhciBoMiB7XHJcbiAgdGV4dC1hbGlnbjogbGVmdDtcclxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gIGZvbnQtc2l6ZTogMi4ycmVtO1xyXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgbGluZS1oZWlnaHQ6IDJyZW07XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIC13ZWJraXQtdG91Y2gtY2FsbG91dDogbm9uZTtcclxuICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xyXG4gIC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgLW1zLXVzZXItc2VsZWN0OiBub25lO1xyXG4gIHVzZXItc2VsZWN0OiBub25lO1xyXG4gIG1hcmdpbjogMDtcclxufVxyXG5kaXYucmlnaHQtbmF2YmFyIHtcclxuICBwYWRkaW5nOiAwO1xyXG4gIHRleHQtYWxpZ246IHJpZ2h0O1xyXG59XHJcblxyXG4ubm9wYWRkaW5nIHtcclxuICBwYWRkaW5nOiAwICFpbXBvcnRhbnQ7XHJcbiAgbWFyZ2luOiAwICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbmJ1dHRvbiAuaWNvbiB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBib3JkZXItcmFkaXVzOiAwO1xyXG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IGluaGVyaXQ7XHJcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogaW5oZXJpdDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgbWFyZ2luOiAwO1xyXG4gIHdpZHRoOiAyLjU3MTQyODU3ZW07XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLDAsMCwuMDUpO1xyXG4gIGJveC1zaGFkb3c6IC0xcHggMCAwIDAgdHJhbnNwYXJlbnQgaW5zZXQ7XHJcbiAgdG9wOiAwO1xyXG4gIGxlZnQ6IDA7XHJcbiAgbGluZS1oZWlnaHQ6IDIuMztcclxuICBjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDY0MXB4KSB7XHJcbiAgLmNhdGVnb3J5IHtcclxuICAgIHdpZHRoOiAxMDAlXHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDU3NnB4KXtcclxuICAuY2F0ZWdvcnkge1xyXG4gICAgd2lkdGg6IDgwJVxyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NjlweCkge1xyXG4gIC5jYXRlZ29yeSB7XHJcbiAgICB3aWR0aDogNjAlXHJcbiAgfVxyXG59XHJcblxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMjAwcHgpIHtcclxuICAuY2F0ZWdvcnkge1xyXG4gICAgd2lkdGg6IDQwJVxyXG4gIH1cclxufVxyXG5cclxuLmhlYWRlci1jb250YWluZXIge1xyXG4gIHBhZGRpbmc6IDE1cHggMjBweCAxNXB4IDEwcHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgei1pbmRleDogOTg7XHJcbiAgYm94LXNoYWRvdzogMCAycHggMnB4IC0ycHggcmdiYSgwLDAsMCwuMik7XHJcbn1cclxuLnN0aWNreS1oZWFkZXIge1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICB0b3A6IDA7XHJcbiAgbGVmdDogMTBweDtcclxuICBib3gtc2hhZG93OiAwIDJweCA4cHggI2YwZjFmMjtcclxuICAtd2Via2l0LXRyYW5zaXRpb246IHRvcCAuOHMhaW1wb3J0YW50O1xyXG4gIHRyYW5zaXRpb246IHRvcCAuOHMhaW1wb3J0YW50O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIHBhZGRpbmctcmlnaHQ6IDUwcHg7XHJcbiAgcGFkZGluZy1sZWZ0OiA4MHB4O1xyXG59XHJcblxyXG4uY29udGVudC1jb250YWluZXIge1xyXG4gIHBhZGRpbmc6IDAgMjBweCAwIDgwcHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbn1cclxuLmNvbnRlbnQtd2hlbi1zdGlja3ktaGVhZGVyIHtcclxuICBwYWRkaW5nLXRvcDogODBweDtcclxufVxyXG5cclxuLm15LXBhZ2luYXRpb24gL2RlZXAvIC5uZ3gtcGFnaW5hdGlvbiAuY3VycmVudCB7XHJcbn1cclxuIl19 */");

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.ts":
/*!**************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.ts ***!
  \**************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");



let DashboardComponent = class DashboardComponent {
    constructor(http) {
        this.http = http;
        this.title = 'dashboard';
        this.uri = 'https://lib-ws-mdb.herokuapp.com/';
    }
    ngOnInit() {
        this.loading = true;
        this.getPeminjaman();
        this.getPengembalian();
        this.getBooksCount();
        this.getLoanCount();
        this.getRetunrCount();
    }
    getPeminjaman() {
        this.http.post(this.uri + 'perpustakaan/api/v1/peminjaman/berlangsung', { page: 1, size: 5 })
            .subscribe(x => {
            this.pageOfItemsPeminjaman = x.data.records;
        });
    }
    getPengembalian() {
        this.http.post(this.uri + 'perpustakaan/api/v1/peminjaman/riwayat', { page: 1, size: 5 })
            .subscribe(x => {
            this.pageOfItemsPengembalian = x.data.records;
        });
    }
    getBooksCount() {
        this.http.get(this.uri + 'perpustakaan/api/v1/summary/buku')
            .subscribe(x => {
            this.countBook = x.data;
        });
    }
    getLoanCount() {
        this.http.get(this.uri + 'perpustakaan/api/v1/summary/peminjaman')
            .subscribe(x => {
            this.countLoan = x.data;
        });
    }
    getRetunrCount() {
        this.http.get(this.uri + 'perpustakaan/api/v1/summary/pengembalian')
            .subscribe(x => {
            this.countReturn = x.data;
            this.loading = false;
        });
    }
};
DashboardComponent.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
DashboardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-dashboard',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./dashboard.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/dashboard.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./dashboard.component.css */ "./src/app/dashboard/dashboard.component.css")).default]
    })
], DashboardComponent);



/***/ }),

/***/ "./src/app/loanpage/currentloan/currentloan.component.css":
/*!****************************************************************!*\
  !*** ./src/app/loanpage/currentloan/currentloan.component.css ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("[class*='col-'] {\r\n  padding: 10px;\r\n}\r\ndiv.left-navbar {\r\n  padding: 0;\r\n}\r\ndiv.left-navbar h2 {\r\n  text-align: left;\r\n  text-transform: uppercase;\r\n  font-size: 2.2rem;\r\n  font-weight: 700;\r\n  line-height: 2rem;\r\n  cursor: pointer;\r\n  -webkit-touch-callout: none;\r\n  -webkit-user-select: none;\r\n  -moz-user-select: none;\r\n  -ms-user-select: none;\r\n  user-select: none;\r\n  margin: 0;\r\n}\r\ndiv.right-navbar {\r\n  padding: 0;\r\n  text-align: right;\r\n}\r\n.nopadding {\r\n  padding: 0 !important;\r\n  margin: 0 !important;\r\n}\r\nbutton .icon {\r\n  position: absolute;\r\n  height: 100%;\r\n  border-radius: 0;\r\n  border-top-left-radius: inherit;\r\n  border-bottom-left-radius: inherit;\r\n  text-align: center;\r\n  margin: 0;\r\n  width: 2.57142857em;\r\n  background-color: rgba(0,0,0,.05);\r\n  box-shadow: -1px 0 0 0 transparent inset;\r\n  top: 0;\r\n  left: 0;\r\n  line-height: 2.3;\r\n  color: white;\r\n}\r\n@media only screen and (max-width: 640px) {\r\n  div.left-navbar h2 {\r\n    transition: all .5s ease-in-out;\r\n    opacity: 0;\r\n    display: none;\r\n  }\r\n}\r\n.header-container {\r\n  padding: 15px 20px 15px 10px;\r\n  background-color: white;\r\n  z-index: 98;\r\n  box-shadow: 0 2px 2px -2px rgba(0,0,0,.2);\r\n}\r\n.sticky-header {\r\n  position: fixed;\r\n  top: 0;\r\n  left: 10px;\r\n  box-shadow: 0 2px 8px #f0f1f2;\r\n  transition: top .8s!important;\r\n  width: 100%;\r\n  padding-right: 50px;\r\n  padding-left: 80px;\r\n}\r\n.content-container {\r\n  padding: 0 20px 0 80px;\r\n  background-color: white;\r\n}\r\n.content-when-sticky-header {\r\n  padding-top: 80px;\r\n}\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2xvYW5wYWdlL2N1cnJlbnRsb2FuL2N1cnJlbnRsb2FuLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFhO0FBQ2Y7QUFDQTtFQUNFLFVBQVU7QUFDWjtBQUNBO0VBQ0UsZ0JBQWdCO0VBQ2hCLHlCQUF5QjtFQUN6QixpQkFBaUI7RUFDakIsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtFQUNqQixlQUFlO0VBQ2YsMkJBQTJCO0VBQzNCLHlCQUF5QjtFQUN6QixzQkFBc0I7RUFDdEIscUJBQXFCO0VBQ3JCLGlCQUFpQjtFQUNqQixTQUFTO0FBQ1g7QUFDQTtFQUNFLFVBQVU7RUFDVixpQkFBaUI7QUFDbkI7QUFFQTtFQUNFLHFCQUFxQjtFQUNyQixvQkFBb0I7QUFDdEI7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osZ0JBQWdCO0VBQ2hCLCtCQUErQjtFQUMvQixrQ0FBa0M7RUFDbEMsa0JBQWtCO0VBQ2xCLFNBQVM7RUFDVCxtQkFBbUI7RUFDbkIsaUNBQWlDO0VBQ2pDLHdDQUF3QztFQUN4QyxNQUFNO0VBQ04sT0FBTztFQUNQLGdCQUFnQjtFQUNoQixZQUFZO0FBQ2Q7QUFFQTtFQUNFO0lBQ0UsK0JBQStCO0lBQy9CLFVBQVU7SUFDVixhQUFhO0VBQ2Y7QUFDRjtBQUdBO0VBQ0UsNEJBQTRCO0VBQzVCLHVCQUF1QjtFQUN2QixXQUFXO0VBQ1gseUNBQXlDO0FBQzNDO0FBQ0E7RUFDRSxlQUFlO0VBQ2YsTUFBTTtFQUNOLFVBQVU7RUFDViw2QkFBNkI7RUFFN0IsNkJBQTZCO0VBQzdCLFdBQVc7RUFDWCxtQkFBbUI7RUFDbkIsa0JBQWtCO0FBQ3BCO0FBRUE7RUFDRSxzQkFBc0I7RUFDdEIsdUJBQXVCO0FBQ3pCO0FBQ0E7RUFDRSxpQkFBaUI7QUFDbkIiLCJmaWxlIjoiLi4vbG9hbnBhZ2UvY3VycmVudGxvYW4vY3VycmVudGxvYW4uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIltjbGFzcyo9J2NvbC0nXSB7XHJcbiAgcGFkZGluZzogMTBweDtcclxufVxyXG5kaXYubGVmdC1uYXZiYXIge1xyXG4gIHBhZGRpbmc6IDA7XHJcbn1cclxuZGl2LmxlZnQtbmF2YmFyIGgyIHtcclxuICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgZm9udC1zaXplOiAyLjJyZW07XHJcbiAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICBsaW5lLWhlaWdodDogMnJlbTtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgLXdlYmtpdC10b3VjaC1jYWxsb3V0OiBub25lO1xyXG4gIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgLW1vei11c2VyLXNlbGVjdDogbm9uZTtcclxuICAtbXMtdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgbWFyZ2luOiAwO1xyXG59XHJcbmRpdi5yaWdodC1uYXZiYXIge1xyXG4gIHBhZGRpbmc6IDA7XHJcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbn1cclxuXHJcbi5ub3BhZGRpbmcge1xyXG4gIHBhZGRpbmc6IDAgIWltcG9ydGFudDtcclxuICBtYXJnaW46IDAgIWltcG9ydGFudDtcclxufVxyXG5cclxuYnV0dG9uIC5pY29uIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIGJvcmRlci1yYWRpdXM6IDA7XHJcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogaW5oZXJpdDtcclxuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiBpbmhlcml0O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBtYXJnaW46IDA7XHJcbiAgd2lkdGg6IDIuNTcxNDI4NTdlbTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsMCwwLC4wNSk7XHJcbiAgYm94LXNoYWRvdzogLTFweCAwIDAgMCB0cmFuc3BhcmVudCBpbnNldDtcclxuICB0b3A6IDA7XHJcbiAgbGVmdDogMDtcclxuICBsaW5lLWhlaWdodDogMi4zO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2NDBweCkge1xyXG4gIGRpdi5sZWZ0LW5hdmJhciBoMiB7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgLjVzIGVhc2UtaW4tb3V0O1xyXG4gICAgb3BhY2l0eTogMDtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgfVxyXG59XHJcblxyXG5cclxuLmhlYWRlci1jb250YWluZXIge1xyXG4gIHBhZGRpbmc6IDE1cHggMjBweCAxNXB4IDEwcHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgei1pbmRleDogOTg7XHJcbiAgYm94LXNoYWRvdzogMCAycHggMnB4IC0ycHggcmdiYSgwLDAsMCwuMik7XHJcbn1cclxuLnN0aWNreS1oZWFkZXIge1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICB0b3A6IDA7XHJcbiAgbGVmdDogMTBweDtcclxuICBib3gtc2hhZG93OiAwIDJweCA4cHggI2YwZjFmMjtcclxuICAtd2Via2l0LXRyYW5zaXRpb246IHRvcCAuOHMhaW1wb3J0YW50O1xyXG4gIHRyYW5zaXRpb246IHRvcCAuOHMhaW1wb3J0YW50O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIHBhZGRpbmctcmlnaHQ6IDUwcHg7XHJcbiAgcGFkZGluZy1sZWZ0OiA4MHB4O1xyXG59XHJcblxyXG4uY29udGVudC1jb250YWluZXIge1xyXG4gIHBhZGRpbmc6IDAgMjBweCAwIDgwcHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbn1cclxuLmNvbnRlbnQtd2hlbi1zdGlja3ktaGVhZGVyIHtcclxuICBwYWRkaW5nLXRvcDogODBweDtcclxufVxyXG5cclxuIl19 */");

/***/ }),

/***/ "./src/app/loanpage/currentloan/currentloan.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/loanpage/currentloan/currentloan.component.ts ***!
  \***************************************************************/
/*! exports provided: CurrentloanComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CurrentloanComponent", function() { return CurrentloanComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/fesm2015/ngx-bootstrap-modal.js");
/* harmony import */ var _notification_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../notification.service */ "./src/app/notification.service.ts");






let CurrentloanComponent = class CurrentloanComponent {
    constructor(route, http, modalService, toastr, router) {
        this.route = route;
        this.http = http;
        this.modalService = modalService;
        this.toastr = toastr;
        this.router = router;
        this.uri = 'https://lib-ws-mdb.herokuapp.com/';
        this.pager = {};
        this.pageOfItems = [];
        this.loading = true;
        this.nodata = false;
    }
    ngOnInit() {
        this.MhsId = this.route.snapshot.paramMap.get('id');
        this.getMhsInfo();
        this.config = {
            itemsPerPage: 10,
            currentPage: 1,
            totalItems: 0
        };
        this.route.queryParams.subscribe(x => this.getLoanInfo(x.page || 1));
        this.loading = true;
    }
    getMhsInfo() {
        this.http.get(this.uri + 'perpustakaan/api/v1/data_mhs/view/'
            + this.MhsId).subscribe(x => {
            this.dataMhs = x.data;
        });
    }
    getLoanInfo(num) {
        this.http.post(this.uri + 'perpustakaan/api/v1/peminjaman/berlangsung', { id: this.MhsId, search: this.search, page: +num, size: 10 })
            .subscribe(x => {
            if (x.data.total_record === 0) {
                this.nodata = true;
            }
            else {
                this.nodata = false;
                this.pager = x.data;
                this.pageOfItems = x.data.records;
                this.config = {
                    itemsPerPage: x.data.limit,
                    currentPage: x.data.page,
                    totalItems: x.data.total_record
                };
            }
            this.loading = false;
        });
    }
    onSearch(searchInput) {
        this.route.queryParams.subscribe(x => this.getLoanInfo(x.page || 1));
    }
    openModal(template, data) {
        this.infoReturn = data;
        const Today = new Date();
        const startDate = new Date(data.data_peminjaman.tanggal_peminjaman);
        const endDate = new Date(data.data_peminjaman.tanggal_pengembalian);
        const acc = endDate.getTime() - startDate.getTime();
        const set = Today.getTime() - startDate.getTime();
        let time = set - acc;
        time = time / 1000;
        time = time / 60;
        time = time / 60;
        time = time / 24;
        time = Math.round(time);
        if (time <= 0) {
            this.infoTime = 'Tidak Terlambat';
            this.lateTime = false;
        }
        else {
            this.infoTime = 'Terlambat ' + time + ' Hari';
            this.lateTime = true;
            this.toastr.showWarning('ID ' + this.MhsId + ' terlambat ' + time + ' Hari', 'Warning!');
        }
        this.modalRef = this.modalService.show(template);
    }
    onSubmitReturn(id) {
        this.http.post(this.uri + 'perpustakaan/api/v1/peminjaman/kembali', { id_peminjaman: id })
            .subscribe(x => {
            this.modalRef.hide();
            if (x.status === true) {
                this.toastr.showSuccess(x.message, 'Berhasil');
            }
            else {
                this.toastr.showError(x.message, 'Gagal');
            }
            this.ngOnInit();
        });
    }
    onPageChange(event) {
        this.router.navigate(['/loans/current/' + this.MhsId], { queryParams: { page: event.page } });
    }
    returnBlob(res) {
        return new Blob([res], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
    }
    onDownload() {
        this.http.get(this.uri + 'perpustakaan/api/v1/peminjaman/downloadberlangsung', { responseType: 'blob' })
            .subscribe(res => {
            if (res) {
                const url = window.URL.createObjectURL(this.returnBlob(res));
                window.open(url);
            }
        });
    }
    openDownloadModal(template) {
        this.modalRef = this.modalService.show(template);
        this.loadingDL = true;
        this.http.post(this.uri + 'perpustakaan/api/v1/peminjaman/createlistberlangsung', { id: this.MhsId, search: this.search, page: 1, size: this.config.totalItems })
            .subscribe(x => {
            console.log(x);
            if (x.status === true) {
                if (this.nodata === false) {
                    setTimeout(() => {
                        this.loadingDL = false;
                    }, 1000);
                    this.toastr.showSuccess('Data berhasil didapat', 'Berhasil');
                }
                else {
                    this.modalRef.hide();
                    this.toastr.showError('Data Tidak bisa Diolah', 'Tidak ditemukan data');
                }
            }
            else {
                this.toastr.showError('Data gagal Diolah', 'Gagal');
            }
        });
    }
};
CurrentloanComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] },
    { type: ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_4__["BsModalService"] },
    { type: _notification_service__WEBPACK_IMPORTED_MODULE_5__["NotificationService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
CurrentloanComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-currentloan',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./currentloan.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/loanpage/currentloan/currentloan.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./currentloan.component.css */ "./src/app/loanpage/currentloan/currentloan.component.css")).default]
    })
], CurrentloanComponent);



/***/ }),

/***/ "./src/app/loanpage/historyloan/historyloan.component.css":
/*!****************************************************************!*\
  !*** ./src/app/loanpage/historyloan/historyloan.component.css ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("[class*='col-'] {\r\n  padding: 10px;\r\n}\r\ndiv.left-navbar {\r\n  padding: 0;\r\n}\r\ndiv.left-navbar h2 {\r\n  text-align: left;\r\n  text-transform: uppercase;\r\n  font-size: 2.2rem;\r\n  font-weight: 700;\r\n  line-height: 2rem;\r\n  cursor: pointer;\r\n  -webkit-touch-callout: none;\r\n  -webkit-user-select: none;\r\n  -moz-user-select: none;\r\n  -ms-user-select: none;\r\n  user-select: none;\r\n  margin: 0;\r\n}\r\ndiv.right-navbar {\r\n  padding: 0;\r\n  text-align: right;\r\n}\r\n.nopadding {\r\n  padding: 0 !important;\r\n  margin: 0 !important;\r\n}\r\nbutton .icon {\r\n  position: absolute;\r\n  height: 100%;\r\n  border-radius: 0;\r\n  border-top-left-radius: inherit;\r\n  border-bottom-left-radius: inherit;\r\n  text-align: center;\r\n  margin: 0;\r\n  width: 2.57142857em;\r\n  background-color: rgba(0,0,0,.05);\r\n  box-shadow: -1px 0 0 0 transparent inset;\r\n  top: 0;\r\n  left: 0;\r\n  line-height: 2.3;\r\n  color: white;\r\n}\r\n@media only screen and (max-width: 640px) {\r\n  div.left-navbar h2 {\r\n    transition: all .5s ease-in-out;\r\n    opacity: 0;\r\n    display: none;\r\n  }\r\n}\r\n.header-container {\r\n  padding: 15px 20px 15px 10px;\r\n  background-color: white;\r\n  z-index: 98;\r\n  box-shadow: 0 2px 2px -2px rgba(0,0,0,.2);\r\n}\r\n.sticky-header {\r\n  position: fixed;\r\n  top: 0;\r\n  left: 10px;\r\n  box-shadow: 0 2px 8px #f0f1f2;\r\n  transition: top .8s!important;\r\n  width: 100%;\r\n  padding-right: 50px;\r\n  padding-left: 80px;\r\n}\r\n.content-container {\r\n  padding: 0 20px 0 80px;\r\n  background-color: white;\r\n}\r\n.content-when-sticky-header {\r\n  padding-top: 80px;\r\n}\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2xvYW5wYWdlL2hpc3Rvcnlsb2FuL2hpc3Rvcnlsb2FuLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFhO0FBQ2Y7QUFDQTtFQUNFLFVBQVU7QUFDWjtBQUNBO0VBQ0UsZ0JBQWdCO0VBQ2hCLHlCQUF5QjtFQUN6QixpQkFBaUI7RUFDakIsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtFQUNqQixlQUFlO0VBQ2YsMkJBQTJCO0VBQzNCLHlCQUF5QjtFQUN6QixzQkFBc0I7RUFDdEIscUJBQXFCO0VBQ3JCLGlCQUFpQjtFQUNqQixTQUFTO0FBQ1g7QUFDQTtFQUNFLFVBQVU7RUFDVixpQkFBaUI7QUFDbkI7QUFFQTtFQUNFLHFCQUFxQjtFQUNyQixvQkFBb0I7QUFDdEI7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osZ0JBQWdCO0VBQ2hCLCtCQUErQjtFQUMvQixrQ0FBa0M7RUFDbEMsa0JBQWtCO0VBQ2xCLFNBQVM7RUFDVCxtQkFBbUI7RUFDbkIsaUNBQWlDO0VBQ2pDLHdDQUF3QztFQUN4QyxNQUFNO0VBQ04sT0FBTztFQUNQLGdCQUFnQjtFQUNoQixZQUFZO0FBQ2Q7QUFFQTtFQUNFO0lBQ0UsK0JBQStCO0lBQy9CLFVBQVU7SUFDVixhQUFhO0VBQ2Y7QUFDRjtBQUdBO0VBQ0UsNEJBQTRCO0VBQzVCLHVCQUF1QjtFQUN2QixXQUFXO0VBQ1gseUNBQXlDO0FBQzNDO0FBQ0E7RUFDRSxlQUFlO0VBQ2YsTUFBTTtFQUNOLFVBQVU7RUFDViw2QkFBNkI7RUFFN0IsNkJBQTZCO0VBQzdCLFdBQVc7RUFDWCxtQkFBbUI7RUFDbkIsa0JBQWtCO0FBQ3BCO0FBRUE7RUFDRSxzQkFBc0I7RUFDdEIsdUJBQXVCO0FBQ3pCO0FBQ0E7RUFDRSxpQkFBaUI7QUFDbkIiLCJmaWxlIjoiLi4vbG9hbnBhZ2UvaGlzdG9yeWxvYW4vaGlzdG9yeWxvYW4uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIltjbGFzcyo9J2NvbC0nXSB7XHJcbiAgcGFkZGluZzogMTBweDtcclxufVxyXG5kaXYubGVmdC1uYXZiYXIge1xyXG4gIHBhZGRpbmc6IDA7XHJcbn1cclxuZGl2LmxlZnQtbmF2YmFyIGgyIHtcclxuICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgZm9udC1zaXplOiAyLjJyZW07XHJcbiAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICBsaW5lLWhlaWdodDogMnJlbTtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgLXdlYmtpdC10b3VjaC1jYWxsb3V0OiBub25lO1xyXG4gIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgLW1vei11c2VyLXNlbGVjdDogbm9uZTtcclxuICAtbXMtdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgbWFyZ2luOiAwO1xyXG59XHJcbmRpdi5yaWdodC1uYXZiYXIge1xyXG4gIHBhZGRpbmc6IDA7XHJcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbn1cclxuXHJcbi5ub3BhZGRpbmcge1xyXG4gIHBhZGRpbmc6IDAgIWltcG9ydGFudDtcclxuICBtYXJnaW46IDAgIWltcG9ydGFudDtcclxufVxyXG5cclxuYnV0dG9uIC5pY29uIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIGJvcmRlci1yYWRpdXM6IDA7XHJcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogaW5oZXJpdDtcclxuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiBpbmhlcml0O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBtYXJnaW46IDA7XHJcbiAgd2lkdGg6IDIuNTcxNDI4NTdlbTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsMCwwLC4wNSk7XHJcbiAgYm94LXNoYWRvdzogLTFweCAwIDAgMCB0cmFuc3BhcmVudCBpbnNldDtcclxuICB0b3A6IDA7XHJcbiAgbGVmdDogMDtcclxuICBsaW5lLWhlaWdodDogMi4zO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2NDBweCkge1xyXG4gIGRpdi5sZWZ0LW5hdmJhciBoMiB7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgLjVzIGVhc2UtaW4tb3V0O1xyXG4gICAgb3BhY2l0eTogMDtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgfVxyXG59XHJcblxyXG5cclxuLmhlYWRlci1jb250YWluZXIge1xyXG4gIHBhZGRpbmc6IDE1cHggMjBweCAxNXB4IDEwcHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgei1pbmRleDogOTg7XHJcbiAgYm94LXNoYWRvdzogMCAycHggMnB4IC0ycHggcmdiYSgwLDAsMCwuMik7XHJcbn1cclxuLnN0aWNreS1oZWFkZXIge1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICB0b3A6IDA7XHJcbiAgbGVmdDogMTBweDtcclxuICBib3gtc2hhZG93OiAwIDJweCA4cHggI2YwZjFmMjtcclxuICAtd2Via2l0LXRyYW5zaXRpb246IHRvcCAuOHMhaW1wb3J0YW50O1xyXG4gIHRyYW5zaXRpb246IHRvcCAuOHMhaW1wb3J0YW50O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIHBhZGRpbmctcmlnaHQ6IDUwcHg7XHJcbiAgcGFkZGluZy1sZWZ0OiA4MHB4O1xyXG59XHJcblxyXG4uY29udGVudC1jb250YWluZXIge1xyXG4gIHBhZGRpbmc6IDAgMjBweCAwIDgwcHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbn1cclxuLmNvbnRlbnQtd2hlbi1zdGlja3ktaGVhZGVyIHtcclxuICBwYWRkaW5nLXRvcDogODBweDtcclxufVxyXG5cclxuIl19 */");

/***/ }),

/***/ "./src/app/loanpage/historyloan/historyloan.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/loanpage/historyloan/historyloan.component.ts ***!
  \***************************************************************/
/*! exports provided: HistoryloanComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HistoryloanComponent", function() { return HistoryloanComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/fesm2015/ngx-bootstrap-modal.js");
/* harmony import */ var _notification_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../notification.service */ "./src/app/notification.service.ts");






let HistoryloanComponent = class HistoryloanComponent {
    constructor(route, http, modalService, toastr, router) {
        this.route = route;
        this.http = http;
        this.modalService = modalService;
        this.toastr = toastr;
        this.router = router;
        this.uri = 'https://lib-ws-mdb.herokuapp.com/';
        this.pager = {};
        this.pageOfItems = [];
        this.loading = true;
        this.nodata = false;
    }
    ngOnInit() {
        this.loading = true;
        this.MhsId = this.route.snapshot.paramMap.get('id');
        this.getMhsInfo();
        this.config = {
            itemsPerPage: 10,
            currentPage: 1,
            totalItems: 0
        };
        this.route.queryParams.subscribe(x => this.getLoanInfo(x.page || 1));
    }
    getMhsInfo() {
        this.http.get(this.uri + 'perpustakaan/api/v1/data_mhs/view/'
            + this.MhsId).subscribe(x => {
            this.dataMhs = x.data;
            console.log(x);
        });
    }
    getLoanInfo(num) {
        this.http.post(this.uri + 'perpustakaan/api/v1/peminjaman/riwayat', { id: this.MhsId, search: this.search, page: +num, size: 10 })
            .subscribe(x => {
            if (x.data.total_record === 0) {
                this.nodata = true;
            }
            else {
                this.nodata = false;
                this.pager = x.data;
                this.pageOfItems = x.data.records;
                this.config = {
                    itemsPerPage: x.data.limit,
                    currentPage: x.data.page,
                    totalItems: x.data.total_record
                };
            }
            this.loading = false;
        });
    }
    onSearch(searchInput) {
        this.route.queryParams.subscribe(x => this.getLoanInfo(x.page || 1));
    }
    openModal(template, data) {
        this.infoReturn = data;
        const Today = new Date(data.data_peminjaman.tanggal_kembali);
        const startDate = new Date(data.data_peminjaman.tanggal_peminjaman);
        const endDate = new Date(data.data_peminjaman.tanggal_pengembalian);
        const acc = endDate.getTime() - startDate.getTime();
        const set = Today.getTime() - startDate.getTime();
        let time = set - acc;
        time = time / 1000;
        time = time / 60;
        time = time / 60;
        time = time / 24;
        time = Math.round(time);
        if (time <= 0) {
            this.infoTime = 'Tidak Terlambat';
            this.lateTime = false;
        }
        else {
            this.infoTime = 'Terlambat ' + time + ' Hari';
            this.lateTime = true;
            this.toastr.showWarning('ID ' + this.MhsId + ' terlambat ' + time + ' Hari', 'Warning!');
        }
        this.modalRef = this.modalService.show(template);
    }
    onPageChange(event) {
        this.router.navigate(['/loans/history/' + this.MhsId], { queryParams: { page: event.page } });
    }
    returnBlob(res) {
        return new Blob([res], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
    }
    onDownload() {
        this.http.get(this.uri + 'perpustakaan/api/v1/peminjaman/downloadriwayat', { responseType: 'blob' })
            .subscribe(res => {
            if (res) {
                const url = window.URL.createObjectURL(this.returnBlob(res));
                window.open(url);
            }
        });
    }
    openDownloadModal(template) {
        this.modalRef = this.modalService.show(template);
        this.loadingDL = true;
        this.http.post(this.uri + 'perpustakaan/api/v1/peminjaman/createlistriwayat', { id: this.MhsId, search: this.search, page: 1, size: this.config.totalItems })
            .subscribe(x => {
            console.log(x);
            if (x.status === true) {
                if (this.nodata === false) {
                    setTimeout(() => {
                        this.loadingDL = false;
                    }, 1000);
                    this.toastr.showSuccess('Data berhasil didapat', 'Berhasil');
                }
                else {
                    this.modalRef.hide();
                    this.toastr.showError('Data Tidak bisa Diolah', 'Tidak ditemukan data');
                }
            }
            else {
                this.toastr.showError('Data gagal Diolah', 'Gagal');
            }
        });
    }
};
HistoryloanComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] },
    { type: ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_4__["BsModalService"] },
    { type: _notification_service__WEBPACK_IMPORTED_MODULE_5__["NotificationService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
HistoryloanComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-historyloan',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./historyloan.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/loanpage/historyloan/historyloan.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./historyloan.component.css */ "./src/app/loanpage/historyloan/historyloan.component.css")).default]
    })
], HistoryloanComponent);



/***/ }),

/***/ "./src/app/loanpage/loanpage.component.css":
/*!*************************************************!*\
  !*** ./src/app/loanpage/loanpage.component.css ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("[class*='col-'] {\r\n  padding: 10px;\r\n}\r\ndiv.left-navbar {\r\n  padding: 0;\r\n}\r\ndiv.left-navbar h2 {\r\n  text-align: left;\r\n  text-transform: uppercase;\r\n  font-size: 2.2rem;\r\n  font-weight: 700;\r\n  line-height: 2rem;\r\n  cursor: pointer;\r\n  -webkit-touch-callout: none;\r\n  -webkit-user-select: none;\r\n  -moz-user-select: none;\r\n  -ms-user-select: none;\r\n  user-select: none;\r\n  margin: 0;\r\n}\r\ndiv.right-navbar {\r\n  padding: 0;\r\n  text-align: right;\r\n}\r\n.nopadding {\r\n  padding: 0 !important;\r\n  margin: 0 !important;\r\n}\r\nbutton .icon {\r\n  position: absolute;\r\n  height: 100%;\r\n  border-radius: 0;\r\n  border-top-left-radius: inherit;\r\n  border-bottom-left-radius: inherit;\r\n  text-align: center;\r\n  margin: 0;\r\n  width: 2.57142857em;\r\n  background-color: rgba(0,0,0,.05);\r\n  box-shadow: -1px 0 0 0 transparent inset;\r\n  top: 0;\r\n  left: 0;\r\n  line-height: 2.3;\r\n  color: white;\r\n}\r\n@media only screen and (max-width: 640px) {\r\n  div.left-navbar h2 {\r\n    transition: all .5s ease-in-out;\r\n    opacity: 0;\r\n    display: none;\r\n  }\r\n}\r\n@media only screen and (min-width: 641px) {\r\n  .category {\r\n    width: 100%\r\n  }\r\n}\r\n@media only screen and (min-width: 576px){\r\n  .category {\r\n    width: 80%\r\n  }\r\n}\r\n@media only screen and (min-width: 769px) {\r\n  .category {\r\n    width: 60%\r\n  }\r\n}\r\n@media only screen and (min-width: 1200px) {\r\n  .category {\r\n    width: 40%\r\n  }\r\n}\r\n.header-container {\r\n  padding: 15px 20px 15px 10px;\r\n  background-color: white;\r\n  z-index: 98;\r\n  box-shadow: 0 2px 2px -2px rgba(0,0,0,.2);\r\n}\r\n.sticky-header {\r\n  position: fixed;\r\n  top: 0;\r\n  left: 10px;\r\n  box-shadow: 0 2px 8px #f0f1f2;\r\n  transition: top .8s!important;\r\n  width: 100%;\r\n  padding-right: 50px;\r\n  padding-left: 80px;\r\n}\r\n.content-container {\r\n  padding: 0 20px 0 80px;\r\n  background-color: white;\r\n}\r\n.content-when-sticky-header {\r\n  padding-top: 80px;\r\n}\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2xvYW5wYWdlL2xvYW5wYWdlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFhO0FBQ2Y7QUFDQTtFQUNFLFVBQVU7QUFDWjtBQUNBO0VBQ0UsZ0JBQWdCO0VBQ2hCLHlCQUF5QjtFQUN6QixpQkFBaUI7RUFDakIsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtFQUNqQixlQUFlO0VBQ2YsMkJBQTJCO0VBQzNCLHlCQUF5QjtFQUN6QixzQkFBc0I7RUFDdEIscUJBQXFCO0VBQ3JCLGlCQUFpQjtFQUNqQixTQUFTO0FBQ1g7QUFDQTtFQUNFLFVBQVU7RUFDVixpQkFBaUI7QUFDbkI7QUFFQTtFQUNFLHFCQUFxQjtFQUNyQixvQkFBb0I7QUFDdEI7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osZ0JBQWdCO0VBQ2hCLCtCQUErQjtFQUMvQixrQ0FBa0M7RUFDbEMsa0JBQWtCO0VBQ2xCLFNBQVM7RUFDVCxtQkFBbUI7RUFDbkIsaUNBQWlDO0VBQ2pDLHdDQUF3QztFQUN4QyxNQUFNO0VBQ04sT0FBTztFQUNQLGdCQUFnQjtFQUNoQixZQUFZO0FBQ2Q7QUFFQTtFQUNFO0lBQ0UsK0JBQStCO0lBQy9CLFVBQVU7SUFDVixhQUFhO0VBQ2Y7QUFDRjtBQUVBO0VBQ0U7SUFDRTtFQUNGO0FBQ0Y7QUFFQTtFQUNFO0lBQ0U7RUFDRjtBQUNGO0FBRUE7RUFDRTtJQUNFO0VBQ0Y7QUFDRjtBQUdBO0VBQ0U7SUFDRTtFQUNGO0FBQ0Y7QUFFQTtFQUNFLDRCQUE0QjtFQUM1Qix1QkFBdUI7RUFDdkIsV0FBVztFQUNYLHlDQUF5QztBQUMzQztBQUNBO0VBQ0UsZUFBZTtFQUNmLE1BQU07RUFDTixVQUFVO0VBQ1YsNkJBQTZCO0VBRTdCLDZCQUE2QjtFQUM3QixXQUFXO0VBQ1gsbUJBQW1CO0VBQ25CLGtCQUFrQjtBQUNwQjtBQUVBO0VBQ0Usc0JBQXNCO0VBQ3RCLHVCQUF1QjtBQUN6QjtBQUNBO0VBQ0UsaUJBQWlCO0FBQ25CIiwiZmlsZSI6Ii4uL2xvYW5wYWdlL2xvYW5wYWdlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJbY2xhc3MqPSdjb2wtJ10ge1xyXG4gIHBhZGRpbmc6IDEwcHg7XHJcbn1cclxuZGl2LmxlZnQtbmF2YmFyIHtcclxuICBwYWRkaW5nOiAwO1xyXG59XHJcbmRpdi5sZWZ0LW5hdmJhciBoMiB7XHJcbiAgdGV4dC1hbGlnbjogbGVmdDtcclxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gIGZvbnQtc2l6ZTogMi4ycmVtO1xyXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgbGluZS1oZWlnaHQ6IDJyZW07XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIC13ZWJraXQtdG91Y2gtY2FsbG91dDogbm9uZTtcclxuICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xyXG4gIC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgLW1zLXVzZXItc2VsZWN0OiBub25lO1xyXG4gIHVzZXItc2VsZWN0OiBub25lO1xyXG4gIG1hcmdpbjogMDtcclxufVxyXG5kaXYucmlnaHQtbmF2YmFyIHtcclxuICBwYWRkaW5nOiAwO1xyXG4gIHRleHQtYWxpZ246IHJpZ2h0O1xyXG59XHJcblxyXG4ubm9wYWRkaW5nIHtcclxuICBwYWRkaW5nOiAwICFpbXBvcnRhbnQ7XHJcbiAgbWFyZ2luOiAwICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbmJ1dHRvbiAuaWNvbiB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBib3JkZXItcmFkaXVzOiAwO1xyXG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IGluaGVyaXQ7XHJcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogaW5oZXJpdDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgbWFyZ2luOiAwO1xyXG4gIHdpZHRoOiAyLjU3MTQyODU3ZW07XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLDAsMCwuMDUpO1xyXG4gIGJveC1zaGFkb3c6IC0xcHggMCAwIDAgdHJhbnNwYXJlbnQgaW5zZXQ7XHJcbiAgdG9wOiAwO1xyXG4gIGxlZnQ6IDA7XHJcbiAgbGluZS1oZWlnaHQ6IDIuMztcclxuICBjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjQwcHgpIHtcclxuICBkaXYubGVmdC1uYXZiYXIgaDIge1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIC41cyBlYXNlLWluLW91dDtcclxuICAgIG9wYWNpdHk6IDA7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA2NDFweCkge1xyXG4gIC5jYXRlZ29yeSB7XHJcbiAgICB3aWR0aDogMTAwJVxyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA1NzZweCl7XHJcbiAgLmNhdGVnb3J5IHtcclxuICAgIHdpZHRoOiA4MCVcclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzY5cHgpIHtcclxuICAuY2F0ZWdvcnkge1xyXG4gICAgd2lkdGg6IDYwJVxyXG4gIH1cclxufVxyXG5cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTIwMHB4KSB7XHJcbiAgLmNhdGVnb3J5IHtcclxuICAgIHdpZHRoOiA0MCVcclxuICB9XHJcbn1cclxuXHJcbi5oZWFkZXItY29udGFpbmVyIHtcclxuICBwYWRkaW5nOiAxNXB4IDIwcHggMTVweCAxMHB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gIHotaW5kZXg6IDk4O1xyXG4gIGJveC1zaGFkb3c6IDAgMnB4IDJweCAtMnB4IHJnYmEoMCwwLDAsLjIpO1xyXG59XHJcbi5zdGlja3ktaGVhZGVyIHtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgdG9wOiAwO1xyXG4gIGxlZnQ6IDEwcHg7XHJcbiAgYm94LXNoYWRvdzogMCAycHggOHB4ICNmMGYxZjI7XHJcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiB0b3AgLjhzIWltcG9ydGFudDtcclxuICB0cmFuc2l0aW9uOiB0b3AgLjhzIWltcG9ydGFudDtcclxuICB3aWR0aDogMTAwJTtcclxuICBwYWRkaW5nLXJpZ2h0OiA1MHB4O1xyXG4gIHBhZGRpbmctbGVmdDogODBweDtcclxufVxyXG5cclxuLmNvbnRlbnQtY29udGFpbmVyIHtcclxuICBwYWRkaW5nOiAwIDIwcHggMCA4MHB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG59XHJcbi5jb250ZW50LXdoZW4tc3RpY2t5LWhlYWRlciB7XHJcbiAgcGFkZGluZy10b3A6IDgwcHg7XHJcbn1cclxuXHJcbiJdfQ== */");

/***/ }),

/***/ "./src/app/loanpage/loanpage.component.ts":
/*!************************************************!*\
  !*** ./src/app/loanpage/loanpage.component.ts ***!
  \************************************************/
/*! exports provided: LoanpageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoanpageComponent", function() { return LoanpageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/fesm2015/ngx-bootstrap-modal.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _notification_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../notification.service */ "./src/app/notification.service.ts");






let LoanpageComponent = class LoanpageComponent {
    constructor(modalService, http, route, toastr, router) {
        this.modalService = modalService;
        this.http = http;
        this.route = route;
        this.toastr = toastr;
        this.router = router;
        this.uri = 'https://lib-ws-mdb.herokuapp.com/';
        this.pager = {};
        this.pageOfItems = [];
        this.loading = true;
        this.unhide = false;
        this.nodata = false;
    }
    ngOnInit() {
        this.loading = true;
        this.config = {
            itemsPerPage: 10,
            currentPage: 1,
            totalItems: 0
        };
        this.route.queryParams.subscribe(x => this.loadPage(x.page || 1));
    }
    loadPage(num) {
        this.http.post(this.uri + 'perpustakaan/api/v1/data_mhs/list', { search: this.search, page: +num, size: 10 }).subscribe(x => {
            if (x.data.total_record === 0) {
                this.nodata = true;
            }
            else {
                this.nodata = false;
                this.pager = x.data;
                this.pageOfItems = x.data.records;
                this.config = {
                    itemsPerPage: x.data.limit,
                    currentPage: x.data.page,
                    totalItems: x.data.total_record
                };
            }
            this.loading = false;
        });
    }
    onSearch(searchInput) {
        this.route.queryParams.subscribe(x => this.loadPage(x.page || 1));
    }
    openModal(template) {
        this.modalRef = this.modalService.show(template);
    }
    closeModal(Template) {
        this.modalRef.hide();
        this.peminjamanId = '';
        this.unhide = false;
    }
    getData(id) {
        if (id === '') {
            this.unhide = false;
            this.infoReturn = null;
        }
        else {
            this.http.get(this.uri + 'perpustakaan/api/v1/peminjaman/view/' + id)
                .subscribe(x => {
                if (x.status === true) {
                    this.unhide = true;
                    this.infoReturn = x.data;
                    const Today = new Date();
                    const startDate = new Date(x.data.data_peminjaman.tanggal_peminjaman);
                    const endDate = new Date(x.data.data_peminjaman.tanggal_pengembalian);
                    const acc = endDate.getTime() - startDate.getTime();
                    const set = Today.getTime() - startDate.getTime();
                    let time = set - acc;
                    time = time / 1000;
                    time = time / 60;
                    time = time / 60;
                    time = time / 24;
                    time = Math.round(time);
                    if (time <= 0) {
                        this.infoTime = 'Tidak Terlambat';
                        this.lateTime = false;
                    }
                    else {
                        this.infoTime = 'Terlambat ' + time + ' Hari';
                        this.lateTime = true;
                        this.toastr.showWarning('ID ' + ' terlambat ' + time + ' Hari', 'Warning!');
                    }
                }
                else {
                    this.unhide = false;
                    this.infoReturn = null;
                }
            });
        }
    }
    onSubmitReturn(id) {
        this.http.post(this.uri + 'perpustakaan/api/v1/peminjaman/kembali', { id_peminjaman: id })
            .subscribe(x => {
            this.modalRef.hide();
            if (x.status === true) {
                this.toastr.showSuccess(x.message, 'Berhasil');
                this.unhide = false;
                this.infoReturn = null;
            }
            else {
                this.toastr.showError(x.message, 'Gagal');
            }
            this.ngOnInit();
        });
    }
    onPageChange(event) {
        this.router.navigate(['/loans'], { queryParams: { page: event.page } });
    }
    returnBlob(res) {
        return new Blob([res], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
    }
    onDownload() {
        this.http.get(this.uri + 'perpustakaan/api/v1/data_mhs/download', { responseType: 'blob' })
            .subscribe(res => {
            if (res) {
                const url = window.URL.createObjectURL(this.returnBlob(res));
                window.open(url);
            }
        });
    }
    openDownloadModal(template) {
        this.modalRef = this.modalService.show(template);
        this.loadingDL = true;
        this.http.post(this.uri + 'perpustakaan/api/v1/data_mhs/createlistmhs', { search: this.search, page: 1, size: this.config.totalItems })
            .subscribe(x => {
            console.log(x);
            if (x.status === true) {
                setTimeout(() => {
                    this.loadingDL = false;
                }, 1000);
                this.toastr.showSuccess('Data berhasil didapat', 'Berhasil');
            }
            else {
                this.toastr.showError('Data gagal Diolah', 'Gagal');
            }
        });
    }
};
LoanpageComponent.ctorParameters = () => [
    { type: ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_2__["BsModalService"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
    { type: _notification_service__WEBPACK_IMPORTED_MODULE_5__["NotificationService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
];
LoanpageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-loanpage',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./loanpage.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/loanpage/loanpage.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./loanpage.component.css */ "./src/app/loanpage/loanpage.component.css")).default]
    })
], LoanpageComponent);



/***/ }),

/***/ "./src/app/login/login.component.css":
/*!*******************************************!*\
  !*** ./src/app/login/login.component.css ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("[class*='col-'] {\r\n  padding: 10px;\r\n}\r\ndiv.left-navbar {\r\n  padding: 0;\r\n}\r\ndiv.left-navbar h2 {\r\n  text-align: left;\r\n  text-transform: uppercase;\r\n  font-size: 2.2rem;\r\n  font-weight: 700;\r\n  line-height: 2rem;\r\n  cursor: pointer;\r\n  -webkit-touch-callout: none;\r\n  -webkit-user-select: none;\r\n  -moz-user-select: none;\r\n  -ms-user-select: none;\r\n  user-select: none;\r\n  margin: 0;\r\n}\r\ndiv.right-navbar {\r\n  padding: 0;\r\n  text-align: right;\r\n}\r\n.nopadding {\r\n  padding: 0 !important;\r\n  margin: 0 !important;\r\n}\r\nbutton .icon {\r\n  position: absolute;\r\n  height: 100%;\r\n  border-radius: 0;\r\n  border-top-left-radius: inherit;\r\n  border-bottom-left-radius: inherit;\r\n  text-align: center;\r\n  margin: 0;\r\n  width: 2.57142857em;\r\n  background-color: rgba(0,0,0,.05);\r\n  box-shadow: -1px 0 0 0 transparent inset;\r\n  top: 0;\r\n  left: 0;\r\n  line-height: 2.3;\r\n  color: white;\r\n}\r\n@media only screen and (max-width: 640px) {\r\n  div.left-navbar h2 {\r\n    transition: all .5s ease-in-out;\r\n    opacity: 0;\r\n    display: none;\r\n  }\r\n}\r\n@media only screen and (min-width: 641px) {\r\n  .category {\r\n    width: 100%\r\n  }\r\n}\r\n@media only screen and (min-width: 576px){\r\n  .category {\r\n    width: 80%\r\n  }\r\n}\r\n@media only screen and (min-width: 769px) {\r\n  .category {\r\n    width: 60%\r\n  }\r\n}\r\n@media only screen and (min-width: 1200px) {\r\n  .category {\r\n    width: 40%\r\n  }\r\n}\r\n.header-container {\r\n  padding: 15px 20px 15px 10px;\r\n  background-color: white;\r\n  z-index: 70;\r\n  box-shadow: 0 2px 2px -2px rgba(0,0,0,.2);\r\n}\r\n.sticky-header {\r\n  position: fixed;\r\n  top: 0;\r\n  left: 10px;\r\n  box-shadow: 0 2px 8px #f0f1f2;\r\n  transition: top .8s!important;\r\n  width: 100%;\r\n  padding-right: 50px;\r\n  padding-left: 80px;\r\n}\r\n.content-container {\r\n  padding: 0 20px 0 20px;\r\n  background-color: white;\r\n}\r\n.content-when-sticky-header {\r\n  padding-top: 80px;\r\n}\r\n.my-pagination /deep/ .ngx-pagination .current {\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFhO0FBQ2Y7QUFDQTtFQUNFLFVBQVU7QUFDWjtBQUNBO0VBQ0UsZ0JBQWdCO0VBQ2hCLHlCQUF5QjtFQUN6QixpQkFBaUI7RUFDakIsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtFQUNqQixlQUFlO0VBQ2YsMkJBQTJCO0VBQzNCLHlCQUF5QjtFQUN6QixzQkFBc0I7RUFDdEIscUJBQXFCO0VBQ3JCLGlCQUFpQjtFQUNqQixTQUFTO0FBQ1g7QUFDQTtFQUNFLFVBQVU7RUFDVixpQkFBaUI7QUFDbkI7QUFFQTtFQUNFLHFCQUFxQjtFQUNyQixvQkFBb0I7QUFDdEI7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osZ0JBQWdCO0VBQ2hCLCtCQUErQjtFQUMvQixrQ0FBa0M7RUFDbEMsa0JBQWtCO0VBQ2xCLFNBQVM7RUFDVCxtQkFBbUI7RUFDbkIsaUNBQWlDO0VBQ2pDLHdDQUF3QztFQUN4QyxNQUFNO0VBQ04sT0FBTztFQUNQLGdCQUFnQjtFQUNoQixZQUFZO0FBQ2Q7QUFFQTtFQUNFO0lBQ0UsK0JBQStCO0lBQy9CLFVBQVU7SUFDVixhQUFhO0VBQ2Y7QUFDRjtBQUVBO0VBQ0U7SUFDRTtFQUNGO0FBQ0Y7QUFFQTtFQUNFO0lBQ0U7RUFDRjtBQUNGO0FBRUE7RUFDRTtJQUNFO0VBQ0Y7QUFDRjtBQUdBO0VBQ0U7SUFDRTtFQUNGO0FBQ0Y7QUFFQTtFQUNFLDRCQUE0QjtFQUM1Qix1QkFBdUI7RUFDdkIsV0FBVztFQUNYLHlDQUF5QztBQUMzQztBQUNBO0VBQ0UsZUFBZTtFQUNmLE1BQU07RUFDTixVQUFVO0VBQ1YsNkJBQTZCO0VBRTdCLDZCQUE2QjtFQUM3QixXQUFXO0VBQ1gsbUJBQW1CO0VBQ25CLGtCQUFrQjtBQUNwQjtBQUVBO0VBQ0Usc0JBQXNCO0VBQ3RCLHVCQUF1QjtBQUN6QjtBQUNBO0VBQ0UsaUJBQWlCO0FBQ25CO0FBRUE7QUFDQSIsImZpbGUiOiIuLi9sb2dpbi9sb2dpbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiW2NsYXNzKj0nY29sLSddIHtcclxuICBwYWRkaW5nOiAxMHB4O1xyXG59XHJcbmRpdi5sZWZ0LW5hdmJhciB7XHJcbiAgcGFkZGluZzogMDtcclxufVxyXG5kaXYubGVmdC1uYXZiYXIgaDIge1xyXG4gIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICBmb250LXNpemU6IDIuMnJlbTtcclxuICBmb250LXdlaWdodDogNzAwO1xyXG4gIGxpbmUtaGVpZ2h0OiAycmVtO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICAtd2Via2l0LXRvdWNoLWNhbGxvdXQ6IG5vbmU7XHJcbiAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcclxuICAtbW96LXVzZXItc2VsZWN0OiBub25lO1xyXG4gIC1tcy11c2VyLXNlbGVjdDogbm9uZTtcclxuICB1c2VyLXNlbGVjdDogbm9uZTtcclxuICBtYXJnaW46IDA7XHJcbn1cclxuZGl2LnJpZ2h0LW5hdmJhciB7XHJcbiAgcGFkZGluZzogMDtcclxuICB0ZXh0LWFsaWduOiByaWdodDtcclxufVxyXG5cclxuLm5vcGFkZGluZyB7XHJcbiAgcGFkZGluZzogMCAhaW1wb3J0YW50O1xyXG4gIG1hcmdpbjogMCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG5idXR0b24gLmljb24ge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgYm9yZGVyLXJhZGl1czogMDtcclxuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiBpbmhlcml0O1xyXG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IGluaGVyaXQ7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIG1hcmdpbjogMDtcclxuICB3aWR0aDogMi41NzE0Mjg1N2VtO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwwLDAsLjA1KTtcclxuICBib3gtc2hhZG93OiAtMXB4IDAgMCAwIHRyYW5zcGFyZW50IGluc2V0O1xyXG4gIHRvcDogMDtcclxuICBsZWZ0OiAwO1xyXG4gIGxpbmUtaGVpZ2h0OiAyLjM7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDY0MHB4KSB7XHJcbiAgZGl2LmxlZnQtbmF2YmFyIGgyIHtcclxuICAgIHRyYW5zaXRpb246IGFsbCAuNXMgZWFzZS1pbi1vdXQ7XHJcbiAgICBvcGFjaXR5OiAwO1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNjQxcHgpIHtcclxuICAuY2F0ZWdvcnkge1xyXG4gICAgd2lkdGg6IDEwMCVcclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNTc2cHgpe1xyXG4gIC5jYXRlZ29yeSB7XHJcbiAgICB3aWR0aDogODAlXHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc2OXB4KSB7XHJcbiAgLmNhdGVnb3J5IHtcclxuICAgIHdpZHRoOiA2MCVcclxuICB9XHJcbn1cclxuXHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEyMDBweCkge1xyXG4gIC5jYXRlZ29yeSB7XHJcbiAgICB3aWR0aDogNDAlXHJcbiAgfVxyXG59XHJcblxyXG4uaGVhZGVyLWNvbnRhaW5lciB7XHJcbiAgcGFkZGluZzogMTVweCAyMHB4IDE1cHggMTBweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICB6LWluZGV4OiA3MDtcclxuICBib3gtc2hhZG93OiAwIDJweCAycHggLTJweCByZ2JhKDAsMCwwLC4yKTtcclxufVxyXG4uc3RpY2t5LWhlYWRlciB7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIHRvcDogMDtcclxuICBsZWZ0OiAxMHB4O1xyXG4gIGJveC1zaGFkb3c6IDAgMnB4IDhweCAjZjBmMWYyO1xyXG4gIC13ZWJraXQtdHJhbnNpdGlvbjogdG9wIC44cyFpbXBvcnRhbnQ7XHJcbiAgdHJhbnNpdGlvbjogdG9wIC44cyFpbXBvcnRhbnQ7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgcGFkZGluZy1yaWdodDogNTBweDtcclxuICBwYWRkaW5nLWxlZnQ6IDgwcHg7XHJcbn1cclxuXHJcbi5jb250ZW50LWNvbnRhaW5lciB7XHJcbiAgcGFkZGluZzogMCAyMHB4IDAgMjBweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxufVxyXG4uY29udGVudC13aGVuLXN0aWNreS1oZWFkZXIge1xyXG4gIHBhZGRpbmctdG9wOiA4MHB4O1xyXG59XHJcblxyXG4ubXktcGFnaW5hdGlvbiAvZGVlcC8gLm5neC1wYWdpbmF0aW9uIC5jdXJyZW50IHtcclxufVxyXG4iXX0= */");

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _app_config_app_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @app-config/app.config */ "./src/app/config/app.config.ts");
/* harmony import */ var src_app_shared_security_helper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/security.helper */ "./src/app/shared/security.helper.ts");
/* harmony import */ var _notification_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../notification.service */ "./src/app/notification.service.ts");




/* Config */
// @ts-ignore

/* Helper */


let LoginComponent = class LoginComponent {
    constructor(http, router, toastr) {
        this.http = http;
        this.router = router;
        this.toastr = toastr;
        this.uri = 'https://lib-ws-mdb.herokuapp.com/';
        // uri = 'http://localhost:6996/';
        this.loginObj = { password: '', username: '' };
        this.showLoginForm = false;
    }
    ngOnInit() {
        this.showLoginForm = true;
        /* IF HAVE A LOGIN SESSION */
        if (localStorage.getItem(_app_config_app_config__WEBPACK_IMPORTED_MODULE_4__["_app_config"].localstorage_prefix + 'user')) {
            this.router.navigate(['/dashboard']);
        }
    }
    onLogin() {
        this.loginSub = this.http.post(this.uri + 'perpustakaan/api/v1/usermanagement/login', this.loginObj).subscribe(x => {
            const account = x.data;
            if (x.status === true) {
                this.toastr.showSuccess(x.message, 'Berhasil');
                const enc = Object(src_app_shared_security_helper__WEBPACK_IMPORTED_MODULE_5__["dataEncryption"])(account);
                localStorage.setItem(_app_config_app_config__WEBPACK_IMPORTED_MODULE_4__["_app_config"].localstorage_prefix + 'user', enc);
                this.router.navigate(['/dashboard']);
            }
            else {
                this.toastr.showError(x.message, 'Gagal');
            }
        });
    }
    getUname(value) {
        this.loginObj.username = value;
    }
    getUpass(value) {
        this.loginObj.password = value;
    }
    keyDownFunction(event) {
        if (event.key === 'Enter') {
            this.onLogin();
        }
    }
};
LoginComponent.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _notification_service__WEBPACK_IMPORTED_MODULE_6__["NotificationService"] }
];
LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-login',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./login.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./login.component.css */ "./src/app/login/login.component.css")).default]
    })
], LoginComponent);



/***/ }),

/***/ "./src/app/login/logout/logout.component.ts":
/*!**************************************************!*\
  !*** ./src/app/login/logout/logout.component.ts ***!
  \**************************************************/
/*! exports provided: LogoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogoutComponent", function() { return LogoutComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _app_config_app_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @app-config/app.config */ "./src/app/config/app.config.ts");
/* harmony import */ var _shared_security_helper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/security.helper */ "./src/app/shared/security.helper.ts");
/* harmony import */ var _notification_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../notification.service */ "./src/app/notification.service.ts");



/* Service */
// @ts-ignore



let LogoutComponent = class LogoutComponent {
    constructor(router, toastr) {
        this.router = router;
        this.toastr = toastr;
    }
    ngOnInit() {
        this.logout();
    }
    getAccountLoggedIn() {
        let result;
        const acc = localStorage.getItem(_app_config_app_config__WEBPACK_IMPORTED_MODULE_3__["_app_config"].localstorage_prefix + 'user');
        if (acc) {
            result = Object(_shared_security_helper__WEBPACK_IMPORTED_MODULE_4__["dataDecryption"])(acc);
        }
        return result;
    }
    logout() {
        const account = this.getAccountLoggedIn();
        if (account !== undefined) {
            localStorage.clear();
            this.router.navigate(['/login']);
        }
        else {
            this.router.navigate(['/login']);
        }
        this.toastr.showSuccess('Anda berhasil Keluar', 'Berhasil');
    }
};
LogoutComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _notification_service__WEBPACK_IMPORTED_MODULE_5__["NotificationService"] }
];
LogoutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-logout',
        template: ``,
        styles: [""]
    })
], LogoutComponent);



/***/ }),

/***/ "./src/app/notification.service.ts":
/*!*****************************************!*\
  !*** ./src/app/notification.service.ts ***!
  \*****************************************/
/*! exports provided: NotificationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationService", function() { return NotificationService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");



let NotificationService = class NotificationService {
    constructor(toastr) {
        this.toastr = toastr;
    }
    showSuccess(message, title) {
        this.toastr.success(message, title);
    }
    showError(message, title) {
        this.toastr.error(message, title);
    }
    showInfo(message, title) {
        this.toastr.info(message, title);
    }
    showWarning(message, title) {
        this.toastr.warning(message, title);
    }
};
NotificationService.ctorParameters = () => [
    { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_2__["ToastrService"] }
];
NotificationService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], NotificationService);



/***/ }),

/***/ "./src/app/returnlandingpage/returnlandingpage.component.css":
/*!*******************************************************************!*\
  !*** ./src/app/returnlandingpage/returnlandingpage.component.css ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("[class*='col-'] {\r\n  padding: 10px;\r\n}\r\ndiv.left-navbar {\r\n  padding: 0;\r\n}\r\ndiv.left-navbar h2 {\r\n  text-align: left;\r\n  text-transform: uppercase;\r\n  font-size: 2.2rem;\r\n  font-weight: 700;\r\n  line-height: 2rem;\r\n  cursor: pointer;\r\n  -webkit-touch-callout: none;\r\n  -webkit-user-select: none;\r\n  -moz-user-select: none;\r\n  -ms-user-select: none;\r\n  user-select: none;\r\n  margin: 0;\r\n}\r\ndiv.right-navbar {\r\n  padding: 0;\r\n  text-align: right;\r\n}\r\n.nopadding {\r\n  padding: 0 !important;\r\n  margin: 0 !important;\r\n}\r\nbutton .icon {\r\n  position: absolute;\r\n  height: 100%;\r\n  border-radius: 0;\r\n  border-top-left-radius: inherit;\r\n  border-bottom-left-radius: inherit;\r\n  text-align: center;\r\n  margin: 0;\r\n  width: 2.57142857em;\r\n  background-color: rgba(0,0,0,.05);\r\n  box-shadow: -1px 0 0 0 transparent inset;\r\n  top: 0;\r\n  left: 0;\r\n  line-height: 2.3;\r\n  color: white;\r\n}\r\n@media only screen and (max-width: 640px) {\r\n  div.left-navbar h2 {\r\n    transition: all .5s ease-in-out;\r\n    opacity: 0;\r\n    display: none;\r\n  }\r\n}\r\n@media only screen and (min-width: 641px) {\r\n  .category {\r\n    width: 100%\r\n  }\r\n}\r\n@media only screen and (min-width: 576px){\r\n  .category {\r\n    width: 80%\r\n  }\r\n}\r\n@media only screen and (min-width: 769px) {\r\n  .category {\r\n    width: 60%\r\n  }\r\n}\r\n@media only screen and (min-width: 1200px) {\r\n  .category {\r\n    width: 40%\r\n  }\r\n}\r\n.header-container {\r\n  padding: 15px 20px 15px 10px;\r\n  background-color: white;\r\n  z-index: 70;\r\n  box-shadow: 0 2px 2px -2px rgba(0,0,0,.2);\r\n}\r\n.sticky-header {\r\n  position: fixed;\r\n  top: 0;\r\n  left: 10px;\r\n  box-shadow: 0 2px 8px #f0f1f2;\r\n  transition: top .8s!important;\r\n  width: 100%;\r\n  padding-right: 50px;\r\n  padding-left: 80px;\r\n}\r\n.content-container {\r\n  padding: 0 20px 0 20px;\r\n  background-color: white;\r\n}\r\n.content-when-sticky-header {\r\n  padding-top: 80px;\r\n}\r\n.my-pagination /deep/ .ngx-pagination .current {\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3JldHVybmxhbmRpbmdwYWdlL3JldHVybmxhbmRpbmdwYWdlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFhO0FBQ2Y7QUFDQTtFQUNFLFVBQVU7QUFDWjtBQUNBO0VBQ0UsZ0JBQWdCO0VBQ2hCLHlCQUF5QjtFQUN6QixpQkFBaUI7RUFDakIsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtFQUNqQixlQUFlO0VBQ2YsMkJBQTJCO0VBQzNCLHlCQUF5QjtFQUN6QixzQkFBc0I7RUFDdEIscUJBQXFCO0VBQ3JCLGlCQUFpQjtFQUNqQixTQUFTO0FBQ1g7QUFDQTtFQUNFLFVBQVU7RUFDVixpQkFBaUI7QUFDbkI7QUFFQTtFQUNFLHFCQUFxQjtFQUNyQixvQkFBb0I7QUFDdEI7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osZ0JBQWdCO0VBQ2hCLCtCQUErQjtFQUMvQixrQ0FBa0M7RUFDbEMsa0JBQWtCO0VBQ2xCLFNBQVM7RUFDVCxtQkFBbUI7RUFDbkIsaUNBQWlDO0VBQ2pDLHdDQUF3QztFQUN4QyxNQUFNO0VBQ04sT0FBTztFQUNQLGdCQUFnQjtFQUNoQixZQUFZO0FBQ2Q7QUFFQTtFQUNFO0lBQ0UsK0JBQStCO0lBQy9CLFVBQVU7SUFDVixhQUFhO0VBQ2Y7QUFDRjtBQUVBO0VBQ0U7SUFDRTtFQUNGO0FBQ0Y7QUFFQTtFQUNFO0lBQ0U7RUFDRjtBQUNGO0FBRUE7RUFDRTtJQUNFO0VBQ0Y7QUFDRjtBQUdBO0VBQ0U7SUFDRTtFQUNGO0FBQ0Y7QUFFQTtFQUNFLDRCQUE0QjtFQUM1Qix1QkFBdUI7RUFDdkIsV0FBVztFQUNYLHlDQUF5QztBQUMzQztBQUNBO0VBQ0UsZUFBZTtFQUNmLE1BQU07RUFDTixVQUFVO0VBQ1YsNkJBQTZCO0VBRTdCLDZCQUE2QjtFQUM3QixXQUFXO0VBQ1gsbUJBQW1CO0VBQ25CLGtCQUFrQjtBQUNwQjtBQUVBO0VBQ0Usc0JBQXNCO0VBQ3RCLHVCQUF1QjtBQUN6QjtBQUNBO0VBQ0UsaUJBQWlCO0FBQ25CO0FBRUE7QUFDQSIsImZpbGUiOiIuLi9yZXR1cm5sYW5kaW5ncGFnZS9yZXR1cm5sYW5kaW5ncGFnZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiW2NsYXNzKj0nY29sLSddIHtcclxuICBwYWRkaW5nOiAxMHB4O1xyXG59XHJcbmRpdi5sZWZ0LW5hdmJhciB7XHJcbiAgcGFkZGluZzogMDtcclxufVxyXG5kaXYubGVmdC1uYXZiYXIgaDIge1xyXG4gIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICBmb250LXNpemU6IDIuMnJlbTtcclxuICBmb250LXdlaWdodDogNzAwO1xyXG4gIGxpbmUtaGVpZ2h0OiAycmVtO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICAtd2Via2l0LXRvdWNoLWNhbGxvdXQ6IG5vbmU7XHJcbiAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcclxuICAtbW96LXVzZXItc2VsZWN0OiBub25lO1xyXG4gIC1tcy11c2VyLXNlbGVjdDogbm9uZTtcclxuICB1c2VyLXNlbGVjdDogbm9uZTtcclxuICBtYXJnaW46IDA7XHJcbn1cclxuZGl2LnJpZ2h0LW5hdmJhciB7XHJcbiAgcGFkZGluZzogMDtcclxuICB0ZXh0LWFsaWduOiByaWdodDtcclxufVxyXG5cclxuLm5vcGFkZGluZyB7XHJcbiAgcGFkZGluZzogMCAhaW1wb3J0YW50O1xyXG4gIG1hcmdpbjogMCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG5idXR0b24gLmljb24ge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgYm9yZGVyLXJhZGl1czogMDtcclxuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiBpbmhlcml0O1xyXG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IGluaGVyaXQ7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIG1hcmdpbjogMDtcclxuICB3aWR0aDogMi41NzE0Mjg1N2VtO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwwLDAsLjA1KTtcclxuICBib3gtc2hhZG93OiAtMXB4IDAgMCAwIHRyYW5zcGFyZW50IGluc2V0O1xyXG4gIHRvcDogMDtcclxuICBsZWZ0OiAwO1xyXG4gIGxpbmUtaGVpZ2h0OiAyLjM7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDY0MHB4KSB7XHJcbiAgZGl2LmxlZnQtbmF2YmFyIGgyIHtcclxuICAgIHRyYW5zaXRpb246IGFsbCAuNXMgZWFzZS1pbi1vdXQ7XHJcbiAgICBvcGFjaXR5OiAwO1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNjQxcHgpIHtcclxuICAuY2F0ZWdvcnkge1xyXG4gICAgd2lkdGg6IDEwMCVcclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNTc2cHgpe1xyXG4gIC5jYXRlZ29yeSB7XHJcbiAgICB3aWR0aDogODAlXHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc2OXB4KSB7XHJcbiAgLmNhdGVnb3J5IHtcclxuICAgIHdpZHRoOiA2MCVcclxuICB9XHJcbn1cclxuXHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEyMDBweCkge1xyXG4gIC5jYXRlZ29yeSB7XHJcbiAgICB3aWR0aDogNDAlXHJcbiAgfVxyXG59XHJcblxyXG4uaGVhZGVyLWNvbnRhaW5lciB7XHJcbiAgcGFkZGluZzogMTVweCAyMHB4IDE1cHggMTBweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICB6LWluZGV4OiA3MDtcclxuICBib3gtc2hhZG93OiAwIDJweCAycHggLTJweCByZ2JhKDAsMCwwLC4yKTtcclxufVxyXG4uc3RpY2t5LWhlYWRlciB7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIHRvcDogMDtcclxuICBsZWZ0OiAxMHB4O1xyXG4gIGJveC1zaGFkb3c6IDAgMnB4IDhweCAjZjBmMWYyO1xyXG4gIC13ZWJraXQtdHJhbnNpdGlvbjogdG9wIC44cyFpbXBvcnRhbnQ7XHJcbiAgdHJhbnNpdGlvbjogdG9wIC44cyFpbXBvcnRhbnQ7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgcGFkZGluZy1yaWdodDogNTBweDtcclxuICBwYWRkaW5nLWxlZnQ6IDgwcHg7XHJcbn1cclxuXHJcbi5jb250ZW50LWNvbnRhaW5lciB7XHJcbiAgcGFkZGluZzogMCAyMHB4IDAgMjBweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxufVxyXG4uY29udGVudC13aGVuLXN0aWNreS1oZWFkZXIge1xyXG4gIHBhZGRpbmctdG9wOiA4MHB4O1xyXG59XHJcblxyXG4ubXktcGFnaW5hdGlvbiAvZGVlcC8gLm5neC1wYWdpbmF0aW9uIC5jdXJyZW50IHtcclxufVxyXG4iXX0= */");

/***/ }),

/***/ "./src/app/returnlandingpage/returnlandingpage.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/returnlandingpage/returnlandingpage.component.ts ***!
  \******************************************************************/
/*! exports provided: ReturnlandingpageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReturnlandingpageComponent", function() { return ReturnlandingpageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_config_app_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app-config/app.config */ "./src/app/config/app.config.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _notification_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../notification.service */ "./src/app/notification.service.ts");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/fesm2015/ngx-bootstrap-modal.js");







let ReturnlandingpageComponent = class ReturnlandingpageComponent {
    constructor(modalService, http, route, toastr, router) {
        this.modalService = modalService;
        this.http = http;
        this.route = route;
        this.toastr = toastr;
        this.router = router;
        this.uri = 'https://lib-ws-mdb.herokuapp.com/';
        // uri = this.uri + '';
        this.input = { idMhs: '', idBuku: '' };
        this.object = { mhs_id: '', buku_id: '' };
    }
    ngOnInit() {
        this.input.idMhs = '';
        this.input.idBuku = '';
        if (localStorage.getItem(_app_config_app_config__WEBPACK_IMPORTED_MODULE_2__["_app_config"].localstorage_prefix + 'user')) {
            this.router.navigate(['/dashboard']);
        }
    }
    onInput(template) {
        this.http.post(this.uri + 'perpustakaan/api/v1/pengembalian/get', { id_mhs: this.object.mhs_id, id_buku: this.object.buku_id })
            .subscribe(x => {
            this.infoReturn = x.data;
            if (x.status === true) {
                const Today = new Date();
                const startDate = new Date(x.data.data_peminjaman.tanggal_peminjaman);
                const endDate = new Date(x.data.data_peminjaman.tanggal_pengembalian);
                const acc = endDate.getTime() - startDate.getTime();
                const set = Today.getTime() - startDate.getTime();
                let time = set - acc;
                time = time / 1000;
                time = time / 60;
                time = time / 60;
                time = time / 24;
                time = Math.round(time);
                if (time <= 0) {
                    this.infoTime = 'Tidak Terlambat';
                    this.lateTime = false;
                }
                else {
                    this.infoTime = 'Terlambat ' + time + ' Hari';
                    this.lateTime = true;
                    this.toastr.showWarning('ID ' + this.infoReturn.detail_mhs.mhs_id + ' terlambat ' + time + ' Hari', 'Warning!');
                }
                this.toastr.showSuccess(x.message, 'Berhasil');
                this.modalRef = this.modalService.show(template);
            }
            else {
                this.toastr.showWarning(x.message, 'Perhatian!');
                this.ngOnInit();
            }
        });
    }
    getMhsId(value) {
        this.object.mhs_id = value;
    }
    getBukuId(value) {
        this.object.buku_id = value;
    }
    keyDownFunction(event, template) {
        if (event.key === 'Enter') {
            this.onInput(template);
        }
    }
    onSubmitReturn(id) {
        this.http.post(this.uri + 'perpustakaan/api/v1/pengembalian/set', { id_peminjaman: id })
            .subscribe(x => {
            this.modalRef.hide();
            if (x.status === true) {
                this.toastr.showSuccess(x.message, 'Berhasil');
            }
            else {
                this.toastr.showError(x.message, 'Gagal');
            }
            this.ngOnInit();
        });
    }
};
ReturnlandingpageComponent.ctorParameters = () => [
    { type: ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_6__["BsModalService"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
    { type: _notification_service__WEBPACK_IMPORTED_MODULE_5__["NotificationService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
];
ReturnlandingpageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-returnlandingpage',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./returnlandingpage.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/returnlandingpage/returnlandingpage.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./returnlandingpage.component.css */ "./src/app/returnlandingpage/returnlandingpage.component.css")).default]
    })
], ReturnlandingpageComponent);



/***/ }),

/***/ "./src/app/returnpage/returnpage.component.css":
/*!*****************************************************!*\
  !*** ./src/app/returnpage/returnpage.component.css ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("[class*='col-'] {\r\n  padding: 10px;\r\n}\r\ndiv.left-navbar {\r\n  padding: 0;\r\n}\r\ndiv.left-navbar h2 {\r\n  text-align: left;\r\n  text-transform: uppercase;\r\n  font-size: 2.2rem;\r\n  font-weight: 700;\r\n  line-height: 2rem;\r\n  cursor: pointer;\r\n  -webkit-touch-callout: none;\r\n  -webkit-user-select: none;\r\n  -moz-user-select: none;\r\n  -ms-user-select: none;\r\n  user-select: none;\r\n  margin: 0;\r\n}\r\ndiv.right-navbar {\r\n  padding: 0;\r\n  text-align: right;\r\n}\r\n.nopadding {\r\n  padding: 0 !important;\r\n  margin: 0 !important;\r\n}\r\nbutton .icon {\r\n  position: absolute;\r\n  height: 100%;\r\n  border-radius: 0;\r\n  border-top-left-radius: inherit;\r\n  border-bottom-left-radius: inherit;\r\n  text-align: center;\r\n  margin: 0;\r\n  width: 2.57142857em;\r\n  background-color: rgba(0,0,0,.05);\r\n  box-shadow: -1px 0 0 0 transparent inset;\r\n  top: 0;\r\n  left: 0;\r\n  line-height: 2.3;\r\n  color: white;\r\n}\r\n@media only screen and (max-width: 640px) {\r\n  div.left-navbar h2 {\r\n    transition: all .5s ease-in-out;\r\n    opacity: 0;\r\n    display: none;\r\n  }\r\n}\r\n.header-container {\r\n  padding: 15px 20px 15px 10px;\r\n  background-color: white;\r\n  z-index: 98;\r\n  box-shadow: 0 2px 2px -2px rgba(0,0,0,.2);\r\n}\r\n.sticky-header {\r\n  position: fixed;\r\n  top: 0;\r\n  left: 10px;\r\n  box-shadow: 0 2px 8px #f0f1f2;\r\n  transition: top .8s!important;\r\n  width: 100%;\r\n  padding-right: 50px;\r\n  padding-left: 80px;\r\n}\r\n.content-container {\r\n  padding: 0 20px 0 80px;\r\n  background-color: white;\r\n}\r\n.content-when-sticky-header {\r\n  padding-top: 80px;\r\n}\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3JldHVybnBhZ2UvcmV0dXJucGFnZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBYTtBQUNmO0FBQ0E7RUFDRSxVQUFVO0FBQ1o7QUFDQTtFQUNFLGdCQUFnQjtFQUNoQix5QkFBeUI7RUFDekIsaUJBQWlCO0VBQ2pCLGdCQUFnQjtFQUNoQixpQkFBaUI7RUFDakIsZUFBZTtFQUNmLDJCQUEyQjtFQUMzQix5QkFBeUI7RUFDekIsc0JBQXNCO0VBQ3RCLHFCQUFxQjtFQUNyQixpQkFBaUI7RUFDakIsU0FBUztBQUNYO0FBQ0E7RUFDRSxVQUFVO0VBQ1YsaUJBQWlCO0FBQ25CO0FBRUE7RUFDRSxxQkFBcUI7RUFDckIsb0JBQW9CO0FBQ3RCO0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLGdCQUFnQjtFQUNoQiwrQkFBK0I7RUFDL0Isa0NBQWtDO0VBQ2xDLGtCQUFrQjtFQUNsQixTQUFTO0VBQ1QsbUJBQW1CO0VBQ25CLGlDQUFpQztFQUNqQyx3Q0FBd0M7RUFDeEMsTUFBTTtFQUNOLE9BQU87RUFDUCxnQkFBZ0I7RUFDaEIsWUFBWTtBQUNkO0FBRUE7RUFDRTtJQUNFLCtCQUErQjtJQUMvQixVQUFVO0lBQ1YsYUFBYTtFQUNmO0FBQ0Y7QUFHQTtFQUNFLDRCQUE0QjtFQUM1Qix1QkFBdUI7RUFDdkIsV0FBVztFQUNYLHlDQUF5QztBQUMzQztBQUNBO0VBQ0UsZUFBZTtFQUNmLE1BQU07RUFDTixVQUFVO0VBQ1YsNkJBQTZCO0VBRTdCLDZCQUE2QjtFQUM3QixXQUFXO0VBQ1gsbUJBQW1CO0VBQ25CLGtCQUFrQjtBQUNwQjtBQUVBO0VBQ0Usc0JBQXNCO0VBQ3RCLHVCQUF1QjtBQUN6QjtBQUNBO0VBQ0UsaUJBQWlCO0FBQ25CIiwiZmlsZSI6Ii4uL3JldHVybnBhZ2UvcmV0dXJucGFnZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiW2NsYXNzKj0nY29sLSddIHtcclxuICBwYWRkaW5nOiAxMHB4O1xyXG59XHJcbmRpdi5sZWZ0LW5hdmJhciB7XHJcbiAgcGFkZGluZzogMDtcclxufVxyXG5kaXYubGVmdC1uYXZiYXIgaDIge1xyXG4gIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICBmb250LXNpemU6IDIuMnJlbTtcclxuICBmb250LXdlaWdodDogNzAwO1xyXG4gIGxpbmUtaGVpZ2h0OiAycmVtO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICAtd2Via2l0LXRvdWNoLWNhbGxvdXQ6IG5vbmU7XHJcbiAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcclxuICAtbW96LXVzZXItc2VsZWN0OiBub25lO1xyXG4gIC1tcy11c2VyLXNlbGVjdDogbm9uZTtcclxuICB1c2VyLXNlbGVjdDogbm9uZTtcclxuICBtYXJnaW46IDA7XHJcbn1cclxuZGl2LnJpZ2h0LW5hdmJhciB7XHJcbiAgcGFkZGluZzogMDtcclxuICB0ZXh0LWFsaWduOiByaWdodDtcclxufVxyXG5cclxuLm5vcGFkZGluZyB7XHJcbiAgcGFkZGluZzogMCAhaW1wb3J0YW50O1xyXG4gIG1hcmdpbjogMCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG5idXR0b24gLmljb24ge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgYm9yZGVyLXJhZGl1czogMDtcclxuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiBpbmhlcml0O1xyXG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IGluaGVyaXQ7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIG1hcmdpbjogMDtcclxuICB3aWR0aDogMi41NzE0Mjg1N2VtO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwwLDAsLjA1KTtcclxuICBib3gtc2hhZG93OiAtMXB4IDAgMCAwIHRyYW5zcGFyZW50IGluc2V0O1xyXG4gIHRvcDogMDtcclxuICBsZWZ0OiAwO1xyXG4gIGxpbmUtaGVpZ2h0OiAyLjM7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDY0MHB4KSB7XHJcbiAgZGl2LmxlZnQtbmF2YmFyIGgyIHtcclxuICAgIHRyYW5zaXRpb246IGFsbCAuNXMgZWFzZS1pbi1vdXQ7XHJcbiAgICBvcGFjaXR5OiAwO1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICB9XHJcbn1cclxuXHJcblxyXG4uaGVhZGVyLWNvbnRhaW5lciB7XHJcbiAgcGFkZGluZzogMTVweCAyMHB4IDE1cHggMTBweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICB6LWluZGV4OiA5ODtcclxuICBib3gtc2hhZG93OiAwIDJweCAycHggLTJweCByZ2JhKDAsMCwwLC4yKTtcclxufVxyXG4uc3RpY2t5LWhlYWRlciB7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIHRvcDogMDtcclxuICBsZWZ0OiAxMHB4O1xyXG4gIGJveC1zaGFkb3c6IDAgMnB4IDhweCAjZjBmMWYyO1xyXG4gIC13ZWJraXQtdHJhbnNpdGlvbjogdG9wIC44cyFpbXBvcnRhbnQ7XHJcbiAgdHJhbnNpdGlvbjogdG9wIC44cyFpbXBvcnRhbnQ7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgcGFkZGluZy1yaWdodDogNTBweDtcclxuICBwYWRkaW5nLWxlZnQ6IDgwcHg7XHJcbn1cclxuXHJcbi5jb250ZW50LWNvbnRhaW5lciB7XHJcbiAgcGFkZGluZzogMCAyMHB4IDAgODBweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxufVxyXG4uY29udGVudC13aGVuLXN0aWNreS1oZWFkZXIge1xyXG4gIHBhZGRpbmctdG9wOiA4MHB4O1xyXG59XHJcblxyXG4iXX0= */");

/***/ }),

/***/ "./src/app/returnpage/returnpage.component.ts":
/*!****************************************************!*\
  !*** ./src/app/returnpage/returnpage.component.ts ***!
  \****************************************************/
/*! exports provided: ReturnpageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReturnpageComponent", function() { return ReturnpageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/fesm2015/ngx-bootstrap-modal.js");
/* harmony import */ var _notification_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../notification.service */ "./src/app/notification.service.ts");






let ReturnpageComponent = class ReturnpageComponent {
    constructor(route, http, modalService, toastr, router) {
        this.route = route;
        this.http = http;
        this.modalService = modalService;
        this.toastr = toastr;
        this.router = router;
        this.uri = 'https://lib-ws-mdb.herokuapp.com/';
        this.pager = {};
        this.pageOfItems = [];
        this.nodata = false;
    }
    ngOnInit() {
        this.loading = true;
        this.config = {
            itemsPerPage: 10,
            currentPage: 1,
            totalItems: 0
        };
        this.route.queryParams.subscribe(x => this.getReturnApproval(x.page || 1));
    }
    getReturnApproval(num) {
        this.http.post(this.uri + 'perpustakaan/api/v1/pengembalian/adminlist', { id: '', search: '', page: +num, size: 10 })
            .subscribe(x => {
            if (x.data.records === null) {
                this.nodata = true;
            }
            else {
                this.pager = x.data;
                this.pageOfItems = x.data.records;
                this.config = {
                    itemsPerPage: x.data.limit,
                    currentPage: x.data.page,
                    totalItems: x.data.total_record
                };
            }
            this.loading = false;
        });
    }
    openModal(template, data) {
        this.infoReturn = data;
        const Today = new Date(data.data_peminjaman.tanggal_kembali);
        const startDate = new Date(data.data_peminjaman.tanggal_peminjaman);
        const endDate = new Date(data.data_peminjaman.tanggal_pengembalian);
        const acc = endDate.getTime() - startDate.getTime();
        const set = Today.getTime() - startDate.getTime();
        let time = set - acc;
        time = time / 1000;
        time = time / 60;
        time = time / 60;
        time = time / 24;
        time = Math.round(time);
        if (time <= 0) {
            this.infoTime = 'Tidak Terlambat';
            this.lateTime = false;
        }
        else {
            this.infoTime = 'Terlambat ' + time + ' Hari';
            this.lateTime = true;
            this.toastr.showWarning('ID ' + this.infoReturn.detail_mhs.mhs_id + ' terlambat ' + time + ' Hari', 'Warning!');
        }
        this.modalRef = this.modalService.show(template);
    }
    onSubmitReturn(id) {
        this.http.post(this.uri + 'perpustakaan/api/v1/pengembalian/admin', { id_peminjaman: id })
            .subscribe(x => {
            this.modalRef.hide();
            if (x.status === true) {
                this.toastr.showSuccess(x.message, 'Berhasil');
            }
            else {
                this.toastr.showError(x.message, 'Gagal');
            }
            this.ngOnInit();
        });
    }
    onPageChange(event) {
        this.router.navigate(['/return_approval'], { queryParams: { page: event.page } });
    }
};
ReturnpageComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] },
    { type: ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_4__["BsModalService"] },
    { type: _notification_service__WEBPACK_IMPORTED_MODULE_5__["NotificationService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
ReturnpageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-returnpage',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./returnpage.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/returnpage/returnpage.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./returnpage.component.css */ "./src/app/returnpage/returnpage.component.css")).default]
    })
], ReturnpageComponent);



/***/ }),

/***/ "./src/app/routing.module.ts":
/*!***********************************!*\
  !*** ./src/app/routing.module.ts ***!
  \***********************************/
/*! exports provided: RoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoutingModule", function() { return RoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/dashboard/dashboard.component.ts");
/* harmony import */ var _booklist_booklist_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./booklist/booklist.component */ "./src/app/booklist/booklist.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _auth_guard__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./auth.guard */ "./src/app/auth.guard.ts");
/* harmony import */ var _login_logout_logout_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./login/logout/logout.component */ "./src/app/login/logout/logout.component.ts");
/* harmony import */ var _loanpage_loanpage_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./loanpage/loanpage.component */ "./src/app/loanpage/loanpage.component.ts");
/* harmony import */ var _loanpage_currentloan_currentloan_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./loanpage/currentloan/currentloan.component */ "./src/app/loanpage/currentloan/currentloan.component.ts");
/* harmony import */ var _loanpage_historyloan_historyloan_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./loanpage/historyloan/historyloan.component */ "./src/app/loanpage/historyloan/historyloan.component.ts");
/* harmony import */ var _usermanagement_usermanagement_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./usermanagement/usermanagement.component */ "./src/app/usermanagement/usermanagement.component.ts");
/* harmony import */ var _returnpage_returnpage_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./returnpage/returnpage.component */ "./src/app/returnpage/returnpage.component.ts");
/* harmony import */ var _returnlandingpage_returnlandingpage_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./returnlandingpage/returnlandingpage.component */ "./src/app/returnlandingpage/returnlandingpage.component.ts");
/* harmony import */ var _booklist_rating_rating_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./booklist/rating/rating.component */ "./src/app/booklist/rating/rating.component.ts");















const routes = [
    { path: 'login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_5__["LoginComponent"] },
    { path: 'logout', component: _login_logout_logout_component__WEBPACK_IMPORTED_MODULE_7__["LogoutComponent"] },
    { path: '', redirectTo: '/home', pathMatch: 'full', canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_6__["AuthGuard"]] },
    { path: 'dashboard', component: _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_3__["DashboardComponent"], canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_6__["AuthGuard"]] },
    { path: 'books', component: _booklist_booklist_component__WEBPACK_IMPORTED_MODULE_4__["BooklistComponent"], canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_6__["AuthGuard"]] },
    { path: 'loans', component: _loanpage_loanpage_component__WEBPACK_IMPORTED_MODULE_8__["LoanpageComponent"], canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_6__["AuthGuard"]] },
    { path: 'loans/current/:id', component: _loanpage_currentloan_currentloan_component__WEBPACK_IMPORTED_MODULE_9__["CurrentloanComponent"], canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_6__["AuthGuard"]] },
    { path: 'loans/history/:id', component: _loanpage_historyloan_historyloan_component__WEBPACK_IMPORTED_MODULE_10__["HistoryloanComponent"], canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_6__["AuthGuard"]] },
    { path: 'usermanagement', component: _usermanagement_usermanagement_component__WEBPACK_IMPORTED_MODULE_11__["UsermanagementComponent"], canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_6__["AuthGuard"]] },
    { path: 'logout', component: _login_logout_logout_component__WEBPACK_IMPORTED_MODULE_7__["LogoutComponent"], canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_6__["AuthGuard"]] },
    { path: 'return_approval', component: _returnpage_returnpage_component__WEBPACK_IMPORTED_MODULE_12__["ReturnpageComponent"], canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_6__["AuthGuard"]] },
    { path: 'home', component: _returnlandingpage_returnlandingpage_component__WEBPACK_IMPORTED_MODULE_13__["ReturnlandingpageComponent"] },
    { path: 'books/rating/:id', component: _booklist_rating_rating_component__WEBPACK_IMPORTED_MODULE_14__["RatingComponent"], canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_6__["AuthGuard"]] }
];
let RoutingModule = class RoutingModule {
};
RoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes, { enableTracing: true } // <-- debugging purposes only
            )
        ],
        exports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]
        ]
    })
], RoutingModule);



/***/ }),

/***/ "./src/app/shared/function.helper.ts":
/*!*******************************************!*\
  !*** ./src/app/shared/function.helper.ts ***!
  \*******************************************/
/*! exports provided: concatAndDeDuplicateObjectsArray, isJson */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "concatAndDeDuplicateObjectsArray", function() { return concatAndDeDuplicateObjectsArray; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isJson", function() { return isJson; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

function concatAndDeDuplicateObjectsArray(key, array1, array2) {
    const concatArray = (p, ...arrs) => [].concat(...arrs).reduce((a, b) => !a.filter(c => b[p] === c[p]).length ? [...a, b] : a, []);
    let result;
    if (Array.isArray(array1) && Array.isArray(array2)) {
        result = concatArray(key, array1, array2);
    }
    return result;
}
/* Checking data string can parse to json */
function isJson(str) {
    try {
        JSON.parse(str);
    }
    catch (e) {
        return false;
    }
    return true;
}


/***/ }),

/***/ "./src/app/shared/security.helper.ts":
/*!*******************************************!*\
  !*** ./src/app/shared/security.helper.ts ***!
  \*******************************************/
/*! exports provided: AppHelper, dataEncryption, dataDecryption */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppHelper", function() { return AppHelper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dataEncryption", function() { return dataEncryption; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dataDecryption", function() { return dataDecryption; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var crypto_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! crypto-js */ "./node_modules/crypto-js/index.js");
/* harmony import */ var crypto_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(crypto_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _app_config_app_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app-config/app.config */ "./src/app/config/app.config.ts");
/* harmony import */ var _function_helper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./function.helper */ "./src/app/shared/function.helper.ts");


// @ts-ignore


/*
 * Class Function
 * =====
 */
class AppHelper {
}
/*
 * Direct Function Without class
 * =====
 */
function dataEncryption(data) {
    const obj = (typeof data === 'object') ? JSON.stringify(data) : data;
    const result = crypto_js__WEBPACK_IMPORTED_MODULE_1__["Rabbit"].encrypt(obj, _app_config_app_config__WEBPACK_IMPORTED_MODULE_2__["_app_config"].security_encription_pass).toString();
    return result;
}
function dataDecryption(data) {
    const predicate = crypto_js__WEBPACK_IMPORTED_MODULE_1__["Rabbit"].decrypt(data, _app_config_app_config__WEBPACK_IMPORTED_MODULE_2__["_app_config"].security_encription_pass);
    const decrypted = predicate.toString(crypto_js__WEBPACK_IMPORTED_MODULE_1__["enc"].Utf8);
    const result = (Object(_function_helper__WEBPACK_IMPORTED_MODULE_3__["isJson"])(decrypted)) ? JSON.parse(decrypted) : decrypted;
    return result;
}


/***/ }),

/***/ "./src/app/sidebar/sidebar.component.css":
/*!***********************************************!*\
  !*** ./src/app/sidebar/sidebar.component.css ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".sidebar {\r\n  margin: 0;\r\n  padding: 0;\r\n  top: 0;\r\n  position: fixed;\r\n  height: 100%;\r\n  font-size: 1.1em;\r\n  width: 55px;\r\n  overflow: hidden;\r\n  z-index: 99;\r\n  background: white;\r\n  border-right: 2px solid #f1f1f1;\r\n}\r\n.sidebar a {\r\n  display: block;\r\n  padding: 12px 5px;\r\n  text-align: center;\r\n  text-decoration: none;\r\n}\r\n.sidebar a:hover {\r\n  background-color: #f9f9f9;\r\n}\r\n.sidebar a.active {\r\n  background-color: #f9f9f9;\r\n  color: #007aff;\r\n  box-shadow: inset 3px 0 0 0 #007aff, inset 0 -1px 0 0 transparent, inset 0 1px 0 0 transparent;\r\n}\r\n.sidebar .bottom-menu {\r\n  position: absolute;\r\n  bottom: 0;\r\n  text-align: center;\r\n}\r\n.sidebar .bottom-menu a {\r\n  padding: 12px 18px;\r\n}\r\n.sidebar .logo {\r\n  display: block;\r\n  padding: 15px 5px;\r\n  text-align: center;\r\n  margin: 0\r\n}\r\n.custom-tooltip .tooltip-inner {\r\n  background: white;\r\n  color: #484848;\r\n  padding: 10px;\r\n  border: 1px solid #f1f1f1;\r\n  border-radius: 0;\r\n  font-size: 125%;\r\n  box-shadow: 0 2px 2px 0 rgba(34,36,38,.12), 0 2px 6px 0 rgba(34,36,38,.15);\r\n  opacity: 1;\r\n  transition: all .1s ease;\r\n}\r\n.custom-tooltip .arrow::before {\r\n  border-top-color: white;\r\n}\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NpZGViYXIvc2lkZWJhci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsU0FBUztFQUNULFVBQVU7RUFDVixNQUFNO0VBQ04sZUFBZTtFQUNmLFlBQVk7RUFDWixnQkFBZ0I7RUFDaEIsV0FBVztFQUNYLGdCQUFnQjtFQUNoQixXQUFXO0VBQ1gsaUJBQWlCO0VBQ2pCLCtCQUErQjtBQUNqQztBQUNBO0VBQ0UsY0FBYztFQUNkLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIscUJBQXFCO0FBQ3ZCO0FBQ0E7RUFDRSx5QkFBeUI7QUFDM0I7QUFDQTtFQUNFLHlCQUF5QjtFQUN6QixjQUFjO0VBQ2QsOEZBQThGO0FBQ2hHO0FBQ0E7RUFDRSxrQkFBa0I7RUFDbEIsU0FBUztFQUNULGtCQUFrQjtBQUNwQjtBQUNBO0VBQ0Usa0JBQWtCO0FBQ3BCO0FBQ0E7RUFDRSxjQUFjO0VBQ2QsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQjtBQUNGO0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsY0FBYztFQUNkLGFBQWE7RUFDYix5QkFBeUI7RUFDekIsZ0JBQWdCO0VBQ2hCLGVBQWU7RUFDZiwwRUFBMEU7RUFDMUUsVUFBVTtFQUNWLHdCQUF3QjtBQUMxQjtBQUNBO0VBQ0UsdUJBQXVCO0FBQ3pCIiwiZmlsZSI6Ii4uL3NpZGViYXIvc2lkZWJhci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNpZGViYXIge1xyXG4gIG1hcmdpbjogMDtcclxuICBwYWRkaW5nOiAwO1xyXG4gIHRvcDogMDtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIGZvbnQtc2l6ZTogMS4xZW07XHJcbiAgd2lkdGg6IDU1cHg7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICB6LWluZGV4OiA5OTtcclxuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICBib3JkZXItcmlnaHQ6IDJweCBzb2xpZCAjZjFmMWYxO1xyXG59XHJcbi5zaWRlYmFyIGEge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIHBhZGRpbmc6IDEycHggNXB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbn1cclxuLnNpZGViYXIgYTpob3ZlciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y5ZjlmOTtcclxufVxyXG4uc2lkZWJhciBhLmFjdGl2ZSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y5ZjlmOTtcclxuICBjb2xvcjogIzAwN2FmZjtcclxuICBib3gtc2hhZG93OiBpbnNldCAzcHggMCAwIDAgIzAwN2FmZiwgaW5zZXQgMCAtMXB4IDAgMCB0cmFuc3BhcmVudCwgaW5zZXQgMCAxcHggMCAwIHRyYW5zcGFyZW50O1xyXG59XHJcbi5zaWRlYmFyIC5ib3R0b20tbWVudSB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGJvdHRvbTogMDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuLnNpZGViYXIgLmJvdHRvbS1tZW51IGEge1xyXG4gIHBhZGRpbmc6IDEycHggMThweDtcclxufVxyXG4uc2lkZWJhciAubG9nbyB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgcGFkZGluZzogMTVweCA1cHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIG1hcmdpbjogMFxyXG59XHJcblxyXG4uY3VzdG9tLXRvb2x0aXAgLnRvb2x0aXAtaW5uZXIge1xyXG4gIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gIGNvbG9yOiAjNDg0ODQ4O1xyXG4gIHBhZGRpbmc6IDEwcHg7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgI2YxZjFmMTtcclxuICBib3JkZXItcmFkaXVzOiAwO1xyXG4gIGZvbnQtc2l6ZTogMTI1JTtcclxuICBib3gtc2hhZG93OiAwIDJweCAycHggMCByZ2JhKDM0LDM2LDM4LC4xMiksIDAgMnB4IDZweCAwIHJnYmEoMzQsMzYsMzgsLjE1KTtcclxuICBvcGFjaXR5OiAxO1xyXG4gIHRyYW5zaXRpb246IGFsbCAuMXMgZWFzZTtcclxufVxyXG4uY3VzdG9tLXRvb2x0aXAgLmFycm93OjpiZWZvcmUge1xyXG4gIGJvcmRlci10b3AtY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG4iXX0= */");

/***/ }),

/***/ "./src/app/sidebar/sidebar.component.ts":
/*!**********************************************!*\
  !*** ./src/app/sidebar/sidebar.component.ts ***!
  \**********************************************/
/*! exports provided: SidebarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidebarComponent", function() { return SidebarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_config_app_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app-config/app.config */ "./src/app/config/app.config.ts");
/* harmony import */ var _shared_security_helper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/security.helper */ "./src/app/shared/security.helper.ts");


// @ts-ignore


let SidebarComponent = class SidebarComponent {
    constructor() { }
    ngOnInit() {
        this.LoginDetails = this.getAccountLoggedIn();
    }
    getLogindata() {
        if (localStorage.getItem(_app_config_app_config__WEBPACK_IMPORTED_MODULE_2__["_app_config"].localstorage_prefix + 'user')) {
            return true;
        }
        else {
            return false;
        }
    }
    getAccountLoggedIn() {
        const acc = localStorage.getItem(_app_config_app_config__WEBPACK_IMPORTED_MODULE_2__["_app_config"].localstorage_prefix + 'user');
        if (acc) {
            this.LoginDetails = Object(_shared_security_helper__WEBPACK_IMPORTED_MODULE_3__["dataDecryption"])(acc);
        }
        if (this.LoginDetails.role === 'superadmin') {
            return true;
        }
        else {
            return false;
        }
    }
};
SidebarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-sidebar',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./sidebar.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/sidebar/sidebar.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./sidebar.component.css */ "./src/app/sidebar/sidebar.component.css")).default]
    })
], SidebarComponent);



/***/ }),

/***/ "./src/app/usermanagement/usermanagement.component.css":
/*!*************************************************************!*\
  !*** ./src/app/usermanagement/usermanagement.component.css ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("[class*='col-'] {\r\n  padding: 10px;\r\n}\r\ndiv.left-navbar {\r\n  padding: 0;\r\n}\r\ndiv.left-navbar h2 {\r\n  text-align: left;\r\n  text-transform: uppercase;\r\n  font-size: 2.2rem;\r\n  font-weight: 700;\r\n  line-height: 2rem;\r\n  cursor: pointer;\r\n  -webkit-touch-callout: none;\r\n  -webkit-user-select: none;\r\n  -moz-user-select: none;\r\n  -ms-user-select: none;\r\n  user-select: none;\r\n  margin: 0;\r\n}\r\ndiv.right-navbar {\r\n  padding: 0;\r\n  text-align: right;\r\n}\r\n.nopadding {\r\n  padding: 0 !important;\r\n  margin: 0 !important;\r\n}\r\nbutton .icon {\r\n  position: absolute;\r\n  height: 100%;\r\n  border-radius: 0;\r\n  border-top-left-radius: inherit;\r\n  border-bottom-left-radius: inherit;\r\n  text-align: center;\r\n  margin: 0;\r\n  width: 2.57142857em;\r\n  background-color: rgba(0,0,0,.05);\r\n  box-shadow: -1px 0 0 0 transparent inset;\r\n  top: 0;\r\n  left: 0;\r\n  line-height: 2.3;\r\n  color: white;\r\n}\r\n@media only screen and (max-width: 640px) {\r\n  div.left-navbar h2 {\r\n    transition: all .5s ease-in-out;\r\n    opacity: 0;\r\n    display: none;\r\n  }\r\n}\r\n@media only screen and (min-width: 641px) {\r\n  .category {\r\n    width: 100%\r\n  }\r\n}\r\n@media only screen and (min-width: 576px){\r\n  .category {\r\n    width: 80%\r\n  }\r\n}\r\n@media only screen and (min-width: 769px) {\r\n  .category {\r\n    width: 60%\r\n  }\r\n}\r\n@media only screen and (min-width: 1200px) {\r\n  .category {\r\n    width: 40%\r\n  }\r\n}\r\n.header-container {\r\n  padding: 15px 20px 15px 10px;\r\n  background-color: white;\r\n  z-index: 98;\r\n  box-shadow: 0 2px 2px -2px rgba(0,0,0,.2);\r\n}\r\n.sticky-header {\r\n  position: fixed;\r\n  top: 0;\r\n  left: 10px;\r\n  box-shadow: 0 2px 8px #f0f1f2;\r\n  transition: top .8s!important;\r\n  width: 100%;\r\n  padding-right: 50px;\r\n  padding-left: 80px;\r\n}\r\n.content-container {\r\n  padding: 0 20px 0 80px;\r\n  background-color: white;\r\n}\r\n.content-when-sticky-header {\r\n  padding-top: 80px;\r\n}\r\n.my-pagination /deep/ .ngx-pagination .current {\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3VzZXJtYW5hZ2VtZW50L3VzZXJtYW5hZ2VtZW50LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFhO0FBQ2Y7QUFDQTtFQUNFLFVBQVU7QUFDWjtBQUNBO0VBQ0UsZ0JBQWdCO0VBQ2hCLHlCQUF5QjtFQUN6QixpQkFBaUI7RUFDakIsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtFQUNqQixlQUFlO0VBQ2YsMkJBQTJCO0VBQzNCLHlCQUF5QjtFQUN6QixzQkFBc0I7RUFDdEIscUJBQXFCO0VBQ3JCLGlCQUFpQjtFQUNqQixTQUFTO0FBQ1g7QUFDQTtFQUNFLFVBQVU7RUFDVixpQkFBaUI7QUFDbkI7QUFFQTtFQUNFLHFCQUFxQjtFQUNyQixvQkFBb0I7QUFDdEI7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osZ0JBQWdCO0VBQ2hCLCtCQUErQjtFQUMvQixrQ0FBa0M7RUFDbEMsa0JBQWtCO0VBQ2xCLFNBQVM7RUFDVCxtQkFBbUI7RUFDbkIsaUNBQWlDO0VBQ2pDLHdDQUF3QztFQUN4QyxNQUFNO0VBQ04sT0FBTztFQUNQLGdCQUFnQjtFQUNoQixZQUFZO0FBQ2Q7QUFFQTtFQUNFO0lBQ0UsK0JBQStCO0lBQy9CLFVBQVU7SUFDVixhQUFhO0VBQ2Y7QUFDRjtBQUVBO0VBQ0U7SUFDRTtFQUNGO0FBQ0Y7QUFFQTtFQUNFO0lBQ0U7RUFDRjtBQUNGO0FBRUE7RUFDRTtJQUNFO0VBQ0Y7QUFDRjtBQUdBO0VBQ0U7SUFDRTtFQUNGO0FBQ0Y7QUFFQTtFQUNFLDRCQUE0QjtFQUM1Qix1QkFBdUI7RUFDdkIsV0FBVztFQUNYLHlDQUF5QztBQUMzQztBQUNBO0VBQ0UsZUFBZTtFQUNmLE1BQU07RUFDTixVQUFVO0VBQ1YsNkJBQTZCO0VBRTdCLDZCQUE2QjtFQUM3QixXQUFXO0VBQ1gsbUJBQW1CO0VBQ25CLGtCQUFrQjtBQUNwQjtBQUVBO0VBQ0Usc0JBQXNCO0VBQ3RCLHVCQUF1QjtBQUN6QjtBQUNBO0VBQ0UsaUJBQWlCO0FBQ25CO0FBRUE7QUFDQSIsImZpbGUiOiIuLi91c2VybWFuYWdlbWVudC91c2VybWFuYWdlbWVudC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiW2NsYXNzKj0nY29sLSddIHtcclxuICBwYWRkaW5nOiAxMHB4O1xyXG59XHJcbmRpdi5sZWZ0LW5hdmJhciB7XHJcbiAgcGFkZGluZzogMDtcclxufVxyXG5kaXYubGVmdC1uYXZiYXIgaDIge1xyXG4gIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICBmb250LXNpemU6IDIuMnJlbTtcclxuICBmb250LXdlaWdodDogNzAwO1xyXG4gIGxpbmUtaGVpZ2h0OiAycmVtO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICAtd2Via2l0LXRvdWNoLWNhbGxvdXQ6IG5vbmU7XHJcbiAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcclxuICAtbW96LXVzZXItc2VsZWN0OiBub25lO1xyXG4gIC1tcy11c2VyLXNlbGVjdDogbm9uZTtcclxuICB1c2VyLXNlbGVjdDogbm9uZTtcclxuICBtYXJnaW46IDA7XHJcbn1cclxuZGl2LnJpZ2h0LW5hdmJhciB7XHJcbiAgcGFkZGluZzogMDtcclxuICB0ZXh0LWFsaWduOiByaWdodDtcclxufVxyXG5cclxuLm5vcGFkZGluZyB7XHJcbiAgcGFkZGluZzogMCAhaW1wb3J0YW50O1xyXG4gIG1hcmdpbjogMCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG5idXR0b24gLmljb24ge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgYm9yZGVyLXJhZGl1czogMDtcclxuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiBpbmhlcml0O1xyXG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IGluaGVyaXQ7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIG1hcmdpbjogMDtcclxuICB3aWR0aDogMi41NzE0Mjg1N2VtO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwwLDAsLjA1KTtcclxuICBib3gtc2hhZG93OiAtMXB4IDAgMCAwIHRyYW5zcGFyZW50IGluc2V0O1xyXG4gIHRvcDogMDtcclxuICBsZWZ0OiAwO1xyXG4gIGxpbmUtaGVpZ2h0OiAyLjM7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDY0MHB4KSB7XHJcbiAgZGl2LmxlZnQtbmF2YmFyIGgyIHtcclxuICAgIHRyYW5zaXRpb246IGFsbCAuNXMgZWFzZS1pbi1vdXQ7XHJcbiAgICBvcGFjaXR5OiAwO1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNjQxcHgpIHtcclxuICAuY2F0ZWdvcnkge1xyXG4gICAgd2lkdGg6IDEwMCVcclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNTc2cHgpe1xyXG4gIC5jYXRlZ29yeSB7XHJcbiAgICB3aWR0aDogODAlXHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc2OXB4KSB7XHJcbiAgLmNhdGVnb3J5IHtcclxuICAgIHdpZHRoOiA2MCVcclxuICB9XHJcbn1cclxuXHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEyMDBweCkge1xyXG4gIC5jYXRlZ29yeSB7XHJcbiAgICB3aWR0aDogNDAlXHJcbiAgfVxyXG59XHJcblxyXG4uaGVhZGVyLWNvbnRhaW5lciB7XHJcbiAgcGFkZGluZzogMTVweCAyMHB4IDE1cHggMTBweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICB6LWluZGV4OiA5ODtcclxuICBib3gtc2hhZG93OiAwIDJweCAycHggLTJweCByZ2JhKDAsMCwwLC4yKTtcclxufVxyXG4uc3RpY2t5LWhlYWRlciB7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIHRvcDogMDtcclxuICBsZWZ0OiAxMHB4O1xyXG4gIGJveC1zaGFkb3c6IDAgMnB4IDhweCAjZjBmMWYyO1xyXG4gIC13ZWJraXQtdHJhbnNpdGlvbjogdG9wIC44cyFpbXBvcnRhbnQ7XHJcbiAgdHJhbnNpdGlvbjogdG9wIC44cyFpbXBvcnRhbnQ7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgcGFkZGluZy1yaWdodDogNTBweDtcclxuICBwYWRkaW5nLWxlZnQ6IDgwcHg7XHJcbn1cclxuXHJcbi5jb250ZW50LWNvbnRhaW5lciB7XHJcbiAgcGFkZGluZzogMCAyMHB4IDAgODBweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxufVxyXG4uY29udGVudC13aGVuLXN0aWNreS1oZWFkZXIge1xyXG4gIHBhZGRpbmctdG9wOiA4MHB4O1xyXG59XHJcblxyXG4ubXktcGFnaW5hdGlvbiAvZGVlcC8gLm5neC1wYWdpbmF0aW9uIC5jdXJyZW50IHtcclxufVxyXG4iXX0= */");

/***/ }),

/***/ "./src/app/usermanagement/usermanagement.component.ts":
/*!************************************************************!*\
  !*** ./src/app/usermanagement/usermanagement.component.ts ***!
  \************************************************************/
/*! exports provided: UsermanagementComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsermanagementComponent", function() { return UsermanagementComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/fesm2015/ngx-bootstrap-modal.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _notification_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../notification.service */ "./src/app/notification.service.ts");
/* harmony import */ var _usermodel__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./usermodel */ "./src/app/usermanagement/usermodel.ts");
/* harmony import */ var _app_config_app_config__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @app-config/app.config */ "./src/app/config/app.config.ts");
/* harmony import */ var _shared_security_helper__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../shared/security.helper */ "./src/app/shared/security.helper.ts");









let UsermanagementComponent = class UsermanagementComponent {
    constructor(modalService, http, route, toastr, router) {
        this.modalService = modalService;
        this.http = http;
        this.route = route;
        this.toastr = toastr;
        this.router = router;
        this.uri = 'https://lib-ws-mdb.herokuapp.com/';
        this.pager = {};
        this.pageOfItems = [];
        this.loading = true;
        this.unhide = false;
        this.deleteID = '';
        this.inputUser = new _usermodel__WEBPACK_IMPORTED_MODULE_6__["UserModel"]('', '', '', '', '', '');
        this.updateUser = new _usermodel__WEBPACK_IMPORTED_MODULE_6__["UserModel"]('', '', '', '', '', '');
    }
    ngOnInit() {
        const acc = localStorage.getItem(_app_config_app_config__WEBPACK_IMPORTED_MODULE_7__["_app_config"].localstorage_prefix + 'user');
        if (acc) {
            this.LoginDetails = Object(_shared_security_helper__WEBPACK_IMPORTED_MODULE_8__["dataDecryption"])(acc);
        }
        if (this.LoginDetails.role === 'superadmin') {
            this.Role = [
                { id: '2', name: 'user' },
                { id: '1', name: 'superadmin' }
            ];
            this.loading = true;
            this.config = {
                itemsPerPage: 10,
                currentPage: 1,
                totalItems: 0
            };
            this.route.queryParams.subscribe(x => this.loadPage(x.page || 1));
        }
        else {
            this.toastr.showWarning('Anda tidak memiliki akses untuk laman manajemen', 'Perhatian!');
            this.router.navigate(['/dashboard']);
        }
    }
    loadPage(num) {
        this.http.post(this.uri + 'perpustakaan/api/v1/usermanagement/list', { search: this.search, page: +num, size: 10 }).subscribe(x => {
            this.pager = x.data;
            this.pageOfItems = x.data.records;
            this.config = {
                itemsPerPage: x.data.limit,
                currentPage: x.data.page,
                totalItems: x.data.total_record
            };
            this.loading = false;
        });
    }
    onSearch(searchInput) {
        this.route.queryParams.subscribe(x => this.loadPage(x.page || 1));
    }
    openModal(template) {
        this.getRole = 'user';
        this.inputUser.nama = '';
        this.inputUser.username = '';
        this.inputUser.password = '';
        this.inputUser.role = 'user';
        this.inputUser.email = '';
        this.inputUser.Phone = '';
        this.modalRef = this.modalService.show(template);
    }
    onChange($event) {
        this.inputUser.role = this.getRole;
        this.updateUser.role = this.getRole;
    }
    onSubmit(data) {
        if (this.inputUser.nama === '' &&
            this.inputUser.username === '' &&
            this.inputUser.password === '' &&
            this.inputUser.role === ' ' &&
            this.inputUser.email === '' &&
            this.inputUser.Phone === '') {
            this.toastr.showError('Data yang dibutuhkan Kosong!', 'Gagal');
        }
        else {
            this.http.post(this.uri + 'perpustakaan/api/v1/usermanagement/create', data).subscribe(x => {
                this.modalRef.hide();
                if (x.status === true) {
                    this.toastr.showSuccess(x.message, 'Berhasil');
                }
                else {
                    this.toastr.showError(x.message, 'Gagal');
                }
                this.ngOnInit();
            });
        }
    }
    onView(item, template) {
        this.updateUser = item;
        this.getRole = item.role;
        this.modalRef = this.modalService.show(template);
    }
    onUpdate(data) {
        this.http.put(this.uri + 'perpustakaan/api/v1/usermanagement/update', data).subscribe(x => {
            console.log(x);
            this.modalRef.hide();
            if (x.status === true) {
                this.toastr.showSuccess(x.message, 'Berhasil');
            }
            else {
                this.toastr.showError(x.message, 'Gagal');
            }
            this.ngOnInit();
        });
    }
    onModalDelete(id, template) {
        this.deleteID = id;
        this.modalRef = this.modalService.show(template);
    }
    onDelete(id) {
        this.http.delete(this.uri + 'perpustakaan/api/v1/usermanagement/delete/' + id)
            .subscribe(x => {
            this.modalRef.hide();
            if (x.status === true) {
                this.toastr.showSuccess(x.message, 'Berhasil');
            }
            else {
                this.toastr.showError(x.message, 'Gagal');
            }
            this.ngOnInit();
            this.deleteID = '';
        });
    }
    onNotDelete() {
        this.deleteID = '';
        this.modalRef.hide();
    }
};
UsermanagementComponent.ctorParameters = () => [
    { type: ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_2__["BsModalService"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
    { type: _notification_service__WEBPACK_IMPORTED_MODULE_5__["NotificationService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
];
UsermanagementComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-usermanagement',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./usermanagement.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/usermanagement/usermanagement.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./usermanagement.component.css */ "./src/app/usermanagement/usermanagement.component.css")).default]
    })
], UsermanagementComponent);



/***/ }),

/***/ "./src/app/usermanagement/usermodel.ts":
/*!*********************************************!*\
  !*** ./src/app/usermanagement/usermodel.ts ***!
  \*********************************************/
/*! exports provided: UserModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserModel", function() { return UserModel; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class UserModel {
    constructor(
    // tslint:disable-next-line:variable-name
    nama, username, password, Phone, email, role) {
        this.nama = nama;
        this.username = username;
        this.password = password;
        this.Phone = Phone;
        this.email = email;
        this.role = role;
    }
}


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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const environment = {
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\dzaky\WebstormProjects\perpustakaan-v2\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map