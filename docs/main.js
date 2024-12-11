(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/haniabdelghani/Documents/hani/job/angular/myProjects/angular-tasktodo-app/src/main.ts */"zUnb");


/***/ }),

/***/ "7aL3":
/*!*****************************************************!*\
  !*** ./src/app/components/modal/modal.component.ts ***!
  \*****************************************************/
/*! exports provided: ModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalComponent", function() { return ModalComponent; });
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/button */ "bTqV");




class ModalComponent {
    constructor(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
    }
    ngOnInit() {
    }
    onCancel() {
        this.dialogRef.close();
    }
}
ModalComponent.ɵfac = function ModalComponent_Factory(t) { return new (t || ModalComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__["MatDialogRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__["MAT_DIALOG_DATA"])); };
ModalComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: ModalComponent, selectors: [["app-modal"]], decls: 10, vars: 2, consts: [["mat-dialog-title", ""], ["mat-dialog-content", ""], ["mat-dialog-actions", ""], ["mat-button", "", 3, "mat-dialog-close"], ["mat-button", "", "cdkFocusInitial", "", 3, "mat-dialog-close"]], template: function ModalComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "h1", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Becarful");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Are you sure to delete this task?");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "Cancel");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "Yes");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("mat-dialog-close", ctx.data.notdelete);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("mat-dialog-close", ctx.data.delete);
    } }, directives: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__["MatDialogTitle"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__["MatDialogContent"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__["MatDialogActions"], _angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatButton"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__["MatDialogClose"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJtb2RhbC5jb21wb25lbnQuY3NzIn0= */"] });


/***/ }),

/***/ "AytR":
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
const environment = {
    production: false,
    firebaseConfig: {
        apiKey: 'AIzaSyByZMfhPNT9G7h9Qlsr8PhiY8LgVyvqjHA',
        authDomain: 'angular-tasktodo-app.firebaseapp.com',
        projectId: 'angular-tasktodo-app',
        storageBucket: 'angular-tasktodo-app.appspot.com',
        messagingSenderId: '57636770904',
        appId: '1:57636770904:web:75bcc23e933d43339aa62d'
    }
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

/***/ "BuFo":
/*!***************************************************!*\
  !*** ./src/app/components/home/home.component.ts ***!
  \***************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _modal_modal_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../modal/modal.component */ "7aL3");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! moment */ "wd/R");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_services_task_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/task.service */ "i6c7");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/datepicker */ "iadO");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/progress-bar */ "bv9b");














function HomeComponent_mat_progress_bar_30_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "mat-progress-bar", 21);
} }
const _c0 = function (a0) { return { "show": a0 }; };
function HomeComponent_div_32_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function HomeComponent_div_32_Template_div_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r7); const i_r5 = ctx.index; const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r6.collapse(i_r5); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](4, "img", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](16, "Created at : ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](18, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](19, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](21, "Description : ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](24, "button", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function HomeComponent_div_32_Template_button_click_24_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r7); const task_r4 = ctx.$implicit; const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r8.editTask(task_r4.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](25, " Edit \u00A0\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](26, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](27, " edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](28, "button", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function HomeComponent_div_32_Template_button_click_28_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r7); const task_r4 = ctx.$implicit; const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r9.opendeleteTaskDialog(task_r4.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](29, " Delete \u00A0\u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](30, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](31, " delete_outline");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const task_r4 = ctx.$implicit;
    const i_r5 = ctx.index;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("Title : ", task_r4.title, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("Status : ", task_r4.status, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", i_r5 === ctx_r3.selectedCollapse ? "keyboard_arrow_down" : "keyboard_arrow_right", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](8, _c0, i_r5 === ctx_r3.selectedCollapse));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](18, 6, task_r4.createdat));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", task_r4.description, " ");
} }
class HomeComponent {
    constructor(dialog, router, taskservice) {
        this.dialog = dialog;
        this.router = router;
        this.taskservice = taskservice;
        this.displayedColumns = ['title', 'duration', 'controls'];
        this.dataSource = [];
        this.selectedCollapse = -1;
        this.Today = new Date();
        this.FromMinDate = new Date('1/1/2020');
    }
    ngOnInit() {
        this.isLoading = true;
        this.taskservice.getAllTasks().then((tasks) => {
            console.log('tasks :', tasks);
            this.isLoading = false;
            this.data = tasks;
            this.dataSource = this.data;
        });
    }
    collapse(index) {
        if (this.selectedCollapse === index) {
            this.selectedCollapse = -1;
        }
        else {
            this.selectedCollapse = index;
        }
    }
    opendeleteTaskDialog(id) {
        const dialogRef = this.dialog.open(_modal_modal_component__WEBPACK_IMPORTED_MODULE_0__["ModalComponent"], {
            width: '250px',
            data: { id: id, delete: 1, notdelete: 2 }
        });
        dialogRef.afterClosed().subscribe(result => {
            if (result === 1) {
                this.isLoading = true;
                this.taskservice.deleteTask(id).then((response) => {
                    console.log(response);
                    this.taskservice.getAllTasks().then((tasks) => {
                        console.log(tasks);
                        this.isLoading = false;
                        this.data = tasks;
                        this.dataSource = this.data;
                    });
                });
                // this.isLoading=false;
            }
        });
    }
    getCollapseClass() {
        return this.selectedCollapse;
    }
    onchange(event) {
        this.dataSource = this.data.filter((element) => {
            return element.title.indexOf(this.title) !== -1;
        });
        console.log(this.dataSource);
    }
    onChangeFromDate(event) {
        this.selectedFromDate = event;
        console.log(event);
    }
    onChangeToDate(event) {
        this.selectedToDate = event;
        console.log(event);
        this.dataSource = this.dataSource.filter((task) => {
            return moment__WEBPACK_IMPORTED_MODULE_1__(new Date(task.createdat)).isSameOrAfter(this.selectedFromDate, 'hours') && moment__WEBPACK_IMPORTED_MODULE_1__(new Date(task.createdat)).isSameOrBefore(this.selectedToDate, 'hours');
        });
    }
    create() {
        this.router.navigate(['create']);
    }
    editTask(id) {
        console.log(id);
        this.router.navigate(['edit', { id }]);
    }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_services_task_service__WEBPACK_IMPORTED_MODULE_5__["TaskService"])); };
HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["app-home"]], decls: 36, vars: 15, consts: [[1, "container", "home-content"], [1, "row", "justify-content-around", "align-items-start"], [1, "col-11", "col-md-10", "align-self-start"], [1, "row", "filter"], [1, "col"], ["appearance", "outline", "color", "primary"], ["matInput", "", "placeholder", "Title", 3, "ngModel", "ngModelChange"], ["color", "primary", "matSuffix", ""], [1, "row", "justify-content-between"], [1, "col-5"], ["matInput", "", "placeholder", "mm/jj/aaaa", 3, "matDatepicker", "min", "max", "ngModel", "ngModelChange"], ["matSuffix", "", 3, "for"], ["color", "primary", 3, "startAt"], ["picker1", ""], ["matInput", "", "placeholder", "mm/jj/aaaa", 3, "matDatepicker", "disabled", "min", "max", "ngModel", "ngModelChange"], ["picker2", ""], [1, "row", "spinner"], ["mode", "indeterminate", 4, "ngIf"], [1, "row", "scrollable"], ["class", "col-sm-12 col-md-6 ", 4, "ngFor", "ngForOf"], ["mat-fab", "", "color", "primary", 1, "fab", 3, "click"], ["mode", "indeterminate"], [1, "col-sm-12", "col-md-6"], [1, "card-c"], [1, "header-c", 3, "click"], ["src", "./assets/task.png", 1, "header-c-img"], [1, "header-c-text"], [1, "header-c-icon"], [1, "collapse", 3, "ngClass"], [1, "body-c"], [1, "body-c-conrtols"], ["color", "primary", "mat-raised-button", "", "type", "button", 3, "click"]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "mat-form-field", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, "Filter");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function HomeComponent_Template_input_ngModelChange_8_listener($event) { return ctx.title = $event; })("ngModelChange", function HomeComponent_Template_input_ngModelChange_8_listener($event) { return ctx.onchange($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "mat-icon", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10, "search");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "mat-form-field", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](15, "From");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function HomeComponent_Template_input_ngModelChange_16_listener($event) { return ctx.selectedFromDate = $event; })("ngModelChange", function HomeComponent_Template_input_ngModelChange_16_listener($event) { return ctx.onChangeFromDate($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](17, "mat-datepicker-toggle", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](18, "mat-datepicker", 12, 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "mat-form-field", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](23, "To");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](24, "input", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function HomeComponent_Template_input_ngModelChange_24_listener($event) { return ctx.todate = $event; })("ngModelChange", function HomeComponent_Template_input_ngModelChange_24_listener($event) { return ctx.onChangeToDate($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](25, "mat-datepicker-toggle", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](26, "mat-datepicker", null, 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](28, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](29, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](30, HomeComponent_mat_progress_bar_30_Template, 1, 0, "mat-progress-bar", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](31, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](32, HomeComponent_div_32_Template, 32, 10, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](33, "button", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function HomeComponent_Template_button_click_33_listener() { return ctx.create(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](34, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](35, "add_circle");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](19);
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](27);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("matDatepicker", _r0)("min", ctx.FromMinDate)("max", ctx.Today)("ngModel", ctx.selectedFromDate);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("for", _r0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("startAt", ctx.fromStartDate);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("matDatepicker", _r1)("disabled", ctx.selectedFromDate == null)("min", ctx.selectedFromDate)("max", ctx.Today)("ngModel", ctx.todate);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("for", _r1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.isLoading);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.dataSource);
    } }, directives: [_angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_7__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgModel"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__["MatIcon"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatSuffix"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_10__["MatDatepickerInput"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_10__["MatDatepickerToggle"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_10__["MatDatepicker"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgForOf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_12__["MatButton"], _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_13__["MatProgressBar"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgClass"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_11__["DatePipe"]], styles: [".home-content[_ngcontent-%COMP%] {\r\n  width: 80%;\r\n  \r\n  padding-bottom: 20px;\r\n  border-radius: 10px;\r\n  margin: auto;\r\n  margin-top: 20px;\r\n  margin-bottom: 20px;\r\n}\r\n\r\n@media screen and (max-width: 900px) {\r\n  .home-content[_ngcontent-%COMP%] {\r\n    width: 90%;\r\n  }\r\n}\r\n\r\nmat-form-field[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n}\r\n\r\nbutton[_ngcontent-%COMP%] {\r\n  outline: none;\r\n}\r\n\r\n.filter[_ngcontent-%COMP%] {\r\n  background-color: white;\r\n  margin: 10px;\r\n  margin-bottom: 20px;\r\n  padding: 10px;\r\n  border-radius: 10px;\r\n  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\r\n}\r\n\r\n.spinner[_ngcontent-%COMP%] {\r\n  margin: 10px;\r\n}\r\n\r\n.scrollable[_ngcontent-%COMP%] {\r\n  background-color: white;\r\n  margin: 10px;\r\n  padding: 10px;\r\n  height: 400px;\r\n  border-radius: 10px;\r\n  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\r\n  overflow-y: auto;\r\n  overflow-x: hidden;\r\n  -ms-overflow-style: none;\r\n  \r\n}\r\n\r\n\r\n\r\n.scrollable[_ngcontent-%COMP%]::-webkit-scrollbar {\r\n  width: 7px;\r\n  background-color: #F5F5F5;\r\n  border-radius: 30px;\r\n}\r\n\r\n.scrollable[_ngcontent-%COMP%]::-webkit-scrollbar-track {\r\n  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);\r\n  background-color: #F5F5F5;\r\n}\r\n\r\n.scrollable[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\r\n  background-color: gray;\r\n}\r\n\r\ntable[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n}\r\n\r\n.fab[_ngcontent-%COMP%] {\r\n  position: fixed;\r\n  bottom: 30px;\r\n  right: 30px;\r\n  width: 70px;\r\n  height: 70px;\r\n  outline: none;\r\n  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\r\n}\r\n\r\nmat-spinner[_ngcontent-%COMP%] {\r\n  \r\n}\r\n\r\n.card-c[_ngcontent-%COMP%] {\r\n  \r\n  margin-bottom: 10px;\r\n}\r\n\r\n.header-c[_ngcontent-%COMP%] {\r\n  width: 99%;\r\n  height: 100px;\r\n  display: flex;\r\n  flex-direction: row;\r\n  justify-content: space-between;\r\n  padding: 16px;\r\n  \r\n  transition-duration: 0.4s;\r\n  cursor: pointer;\r\n  background-color: #3f51b5;\r\n  color: white;\r\n  border-radius: 20px 20px 0px 0px;\r\n}\r\n\r\n\r\n\r\n.header-c-img[_ngcontent-%COMP%] {\r\n  background-color: white;\r\n  width: 70px;\r\n  height: 70px;\r\n  border-radius: 50px;\r\n}\r\n\r\n.header-c-text[_ngcontent-%COMP%] {\r\n  width: inherit;\r\n  font-size: 15px;\r\n  display: flex;\r\n  flex-direction: column;\r\n}\r\n\r\n.header-c-text[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n  margin-left: 10px;\r\n}\r\n\r\n.header-c-icon[_ngcontent-%COMP%] {\r\n  font-size: 20px;\r\n  margin-top: 20px;\r\n}\r\n\r\n.body-c[_ngcontent-%COMP%] {\r\n  width: 99%;\r\n  padding: 10px;\r\n  border: 1px solid #3f51b5;\r\n  border-radius: 0px 0px 10px 10px;\r\n  transition: ease-in-out;\r\n  word-wrap: break-word;\r\n  color: gray;\r\n}\r\n\r\n.body-c-conrtols[_ngcontent-%COMP%] {\r\n  margin-top: 40px;\r\n  margin-bottom: 2px;\r\n  margin-left: 2px;\r\n  margin-right: 2px;\r\n  display: flex;\r\n  flex-direction: row;\r\n  justify-content: space-around;\r\n}\r\n\r\n.body-c-conrtols[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\r\n  width: 48%;\r\n  border-radius: 30px;\r\n  font-size: 13px;\r\n}\r\n\r\n@media only screen and (max-width: 600px) {\r\n  .scrollable[_ngcontent-%COMP%] {\r\n    overflow-y: hidden;\r\n    height: auto;\r\n  }\r\n\r\n  .header-c[_ngcontent-%COMP%] {\r\n    height: 90px;\r\n  }\r\n\r\n  .header-c-img[_ngcontent-%COMP%] {\r\n    height: 50px;\r\n    width: 50px;\r\n  }\r\n\r\n  .header-c-text[_ngcontent-%COMP%] {\r\n    font-size: 0.6rem;\r\n    margin: auto;\r\n  }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFVBQVU7RUFDVixvQkFBb0I7RUFDcEIsb0JBQW9CO0VBQ3BCLG1CQUFtQjtFQUNuQixZQUFZO0VBQ1osZ0JBQWdCO0VBQ2hCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFO0lBQ0UsVUFBVTtFQUNaO0FBQ0Y7O0FBRUE7RUFDRSxXQUFXO0FBQ2I7O0FBRUE7RUFDRSxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSx1QkFBdUI7RUFDdkIsWUFBWTtFQUNaLG1CQUFtQjtFQUNuQixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLDZFQUE2RTtBQUMvRTs7QUFFQTtFQUNFLFlBQVk7QUFDZDs7QUFFQTtFQUNFLHVCQUF1QjtFQUN2QixZQUFZO0VBQ1osYUFBYTtFQUNiLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsNkVBQTZFO0VBQzdFLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIsd0JBQXdCO0VBQ3hCLG1DQUFtQztBQUNyQzs7QUFHQSxnREFBZ0Q7O0FBRWhEO0VBQ0UsVUFBVTtFQUNWLHlCQUF5QjtFQUN6QixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxvREFBb0Q7RUFDcEQseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0Usc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsV0FBVztBQUNiOztBQUVBO0VBQ0UsZUFBZTtFQUNmLFlBQVk7RUFDWixXQUFXO0VBQ1gsV0FBVztFQUNYLFlBQVk7RUFDWixhQUFhO0VBQ2IsNkVBQTZFO0FBQy9FOztBQUVBO0VBQ0U7O2lCQUVlO0FBQ2pCOztBQUVBO0VBQ0Usc0JBQXNCO0VBQ3RCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLFVBQVU7RUFDVixhQUFhO0VBQ2IsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQiw4QkFBOEI7RUFDOUIsYUFBYTtFQUNiO3dCQUNzQjtFQUN0Qix5QkFBeUI7RUFDekIsZUFBZTtFQUNmLHlCQUF5QjtFQUN6QixZQUFZO0VBQ1osZ0NBQWdDO0FBQ2xDOztBQUdBOzs7S0FHSzs7QUFFTDtFQUNFLHVCQUF1QjtFQUN2QixXQUFXO0VBQ1gsWUFBWTtFQUNaLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGNBQWM7RUFDZCxlQUFlO0VBQ2YsYUFBYTtFQUNiLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGVBQWU7RUFDZixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxVQUFVO0VBQ1YsYUFBYTtFQUNiLHlCQUF5QjtFQUN6QixnQ0FBZ0M7RUFDaEMsdUJBQXVCO0VBQ3ZCLHFCQUFxQjtFQUNyQixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQixpQkFBaUI7RUFDakIsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQiw2QkFBNkI7QUFDL0I7O0FBRUE7RUFDRSxVQUFVO0VBQ1YsbUJBQW1CO0VBQ25CLGVBQWU7QUFDakI7O0FBRUE7RUFDRTtJQUNFLGtCQUFrQjtJQUNsQixZQUFZO0VBQ2Q7O0VBRUE7SUFDRSxZQUFZO0VBQ2Q7O0VBRUE7SUFDRSxZQUFZO0lBQ1osV0FBVztFQUNiOztFQUVBO0lBQ0UsaUJBQWlCO0lBQ2pCLFlBQVk7RUFDZDtBQUNGIiwiZmlsZSI6ImhvbWUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5ob21lLWNvbnRlbnQge1xyXG4gIHdpZHRoOiA4MCU7XHJcbiAgLyptYXJnaW4tdG9wOiAyMHB4OyovXHJcbiAgcGFkZGluZy1ib3R0b206IDIwcHg7XHJcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICBtYXJnaW46IGF1dG87XHJcbiAgbWFyZ2luLXRvcDogMjBweDtcclxuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5MDBweCkge1xyXG4gIC5ob21lLWNvbnRlbnQge1xyXG4gICAgd2lkdGg6IDkwJTtcclxuICB9XHJcbn1cclxuXHJcbm1hdC1mb3JtLWZpZWxkIHtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuYnV0dG9uIHtcclxuICBvdXRsaW5lOiBub25lO1xyXG59XHJcblxyXG4uZmlsdGVyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICBtYXJnaW46IDEwcHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICBwYWRkaW5nOiAxMHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgYm94LXNoYWRvdzogMCA4cHggMTZweCAwIHJnYmEoMCwgMCwgMCwgMC4yKSwgMCA2cHggMjBweCAwIHJnYmEoMCwgMCwgMCwgMC4xOSk7XHJcbn1cclxuXHJcbi5zcGlubmVyIHtcclxuICBtYXJnaW46IDEwcHg7XHJcbn1cclxuXHJcbi5zY3JvbGxhYmxlIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICBtYXJnaW46IDEwcHg7XHJcbiAgcGFkZGluZzogMTBweDtcclxuICBoZWlnaHQ6IDQwMHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgYm94LXNoYWRvdzogMCA4cHggMTZweCAwIHJnYmEoMCwgMCwgMCwgMC4yKSwgMCA2cHggMjBweCAwIHJnYmEoMCwgMCwgMCwgMC4xOSk7XHJcbiAgb3ZlcmZsb3cteTogYXV0bztcclxuICBvdmVyZmxvdy14OiBoaWRkZW47XHJcbiAgLW1zLW92ZXJmbG93LXN0eWxlOiBub25lO1xyXG4gIC8qIEhpZGUgc2Nyb2xsYmFyIGZvciBJRSBhbmQgRWRnZSAqL1xyXG59XHJcblxyXG5cclxuLyogSGlkZSBzY3JvbGxiYXIgZm9yIENocm9tZSwgU2FmYXJpIGFuZCBPcGVyYSAqL1xyXG5cclxuLnNjcm9sbGFibGU6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcclxuICB3aWR0aDogN3B4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNGNUY1RjU7XHJcbiAgYm9yZGVyLXJhZGl1czogMzBweDtcclxufVxyXG5cclxuLnNjcm9sbGFibGU6Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrIHtcclxuICAtd2Via2l0LWJveC1zaGFkb3c6IGluc2V0IDAgMCA2cHggcmdiYSgwLCAwLCAwLCAwLjMpO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNGNUY1RjU7XHJcbn1cclxuXHJcbi5zY3JvbGxhYmxlOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogZ3JheTtcclxufVxyXG5cclxudGFibGUge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4uZmFiIHtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgYm90dG9tOiAzMHB4O1xyXG4gIHJpZ2h0OiAzMHB4O1xyXG4gIHdpZHRoOiA3MHB4O1xyXG4gIGhlaWdodDogNzBweDtcclxuICBvdXRsaW5lOiBub25lO1xyXG4gIGJveC1zaGFkb3c6IDAgOHB4IDE2cHggMCByZ2JhKDAsIDAsIDAsIDAuMiksIDAgNnB4IDIwcHggMCByZ2JhKDAsIDAsIDAsIDAuMTkpO1xyXG59XHJcblxyXG5tYXQtc3Bpbm5lciB7XHJcbiAgLyogcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICBsZWZ0OiA0OCU7XHJcbiAgICAgIHRvcDogNDglOyAqL1xyXG59XHJcblxyXG4uY2FyZC1jIHtcclxuICAvKiBtYXJnaW4tdG9wOiAxMHB4OyAqL1xyXG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbn1cclxuXHJcbi5oZWFkZXItYyB7XHJcbiAgd2lkdGg6IDk5JTtcclxuICBoZWlnaHQ6IDEwMHB4O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgcGFkZGluZzogMTZweDtcclxuICAvKiBtYXJnaW4tdG9wOiAgMnB4O1xyXG4gIG1hcmdpbi1ib3R0b206ICAycHg7ICovXHJcbiAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMC40cztcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzNmNTFiNTtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgYm9yZGVyLXJhZGl1czogMjBweCAyMHB4IDBweCAwcHg7XHJcbn1cclxuXHJcblxyXG4vKiAuaGVhZGVyLWM6aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzNmNTFiNTtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICB9ICovXHJcblxyXG4uaGVhZGVyLWMtaW1nIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICB3aWR0aDogNzBweDtcclxuICBoZWlnaHQ6IDcwcHg7XHJcbiAgYm9yZGVyLXJhZGl1czogNTBweDtcclxufVxyXG5cclxuLmhlYWRlci1jLXRleHQge1xyXG4gIHdpZHRoOiBpbmhlcml0O1xyXG4gIGZvbnQtc2l6ZTogMTVweDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbn1cclxuXHJcbi5oZWFkZXItYy10ZXh0IHAge1xyXG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG59XHJcblxyXG4uaGVhZGVyLWMtaWNvbiB7XHJcbiAgZm9udC1zaXplOiAyMHB4O1xyXG4gIG1hcmdpbi10b3A6IDIwcHg7XHJcbn1cclxuXHJcbi5ib2R5LWMge1xyXG4gIHdpZHRoOiA5OSU7XHJcbiAgcGFkZGluZzogMTBweDtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjM2Y1MWI1O1xyXG4gIGJvcmRlci1yYWRpdXM6IDBweCAwcHggMTBweCAxMHB4O1xyXG4gIHRyYW5zaXRpb246IGVhc2UtaW4tb3V0O1xyXG4gIHdvcmQtd3JhcDogYnJlYWstd29yZDtcclxuICBjb2xvcjogZ3JheTtcclxufVxyXG5cclxuLmJvZHktYy1jb25ydG9scyB7XHJcbiAgbWFyZ2luLXRvcDogNDBweDtcclxuICBtYXJnaW4tYm90dG9tOiAycHg7XHJcbiAgbWFyZ2luLWxlZnQ6IDJweDtcclxuICBtYXJnaW4tcmlnaHQ6IDJweDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XHJcbn1cclxuXHJcbi5ib2R5LWMtY29ucnRvbHMgYnV0dG9uIHtcclxuICB3aWR0aDogNDglO1xyXG4gIGJvcmRlci1yYWRpdXM6IDMwcHg7XHJcbiAgZm9udC1zaXplOiAxM3B4O1xyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XHJcbiAgLnNjcm9sbGFibGUge1xyXG4gICAgb3ZlcmZsb3cteTogaGlkZGVuO1xyXG4gICAgaGVpZ2h0OiBhdXRvO1xyXG4gIH1cclxuXHJcbiAgLmhlYWRlci1jIHtcclxuICAgIGhlaWdodDogOTBweDtcclxuICB9XHJcblxyXG4gIC5oZWFkZXItYy1pbWcge1xyXG4gICAgaGVpZ2h0OiA1MHB4O1xyXG4gICAgd2lkdGg6IDUwcHg7XHJcbiAgfVxyXG5cclxuICAuaGVhZGVyLWMtdGV4dCB7XHJcbiAgICBmb250LXNpemU6IDAuNnJlbTtcclxuICAgIG1hcmdpbjogYXV0bztcclxuICB9XHJcbn1cclxuIl19 */"] });


/***/ }),

/***/ "RnhZ":
/*!**************************************************!*\
  !*** ./node_modules/moment/locale sync ^\.\/.*$ ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": "K/tc",
	"./af.js": "K/tc",
	"./ar": "jnO4",
	"./ar-dz": "o1bE",
	"./ar-dz.js": "o1bE",
	"./ar-kw": "Qj4J",
	"./ar-kw.js": "Qj4J",
	"./ar-ly": "HP3h",
	"./ar-ly.js": "HP3h",
	"./ar-ma": "CoRJ",
	"./ar-ma.js": "CoRJ",
	"./ar-sa": "gjCT",
	"./ar-sa.js": "gjCT",
	"./ar-tn": "bYM6",
	"./ar-tn.js": "bYM6",
	"./ar.js": "jnO4",
	"./az": "SFxW",
	"./az.js": "SFxW",
	"./be": "H8ED",
	"./be.js": "H8ED",
	"./bg": "hKrs",
	"./bg.js": "hKrs",
	"./bm": "p/rL",
	"./bm.js": "p/rL",
	"./bn": "kEOa",
	"./bn-bd": "loYQ",
	"./bn-bd.js": "loYQ",
	"./bn.js": "kEOa",
	"./bo": "0mo+",
	"./bo.js": "0mo+",
	"./br": "aIdf",
	"./br.js": "aIdf",
	"./bs": "JVSJ",
	"./bs.js": "JVSJ",
	"./ca": "1xZ4",
	"./ca.js": "1xZ4",
	"./cs": "PA2r",
	"./cs.js": "PA2r",
	"./cv": "A+xa",
	"./cv.js": "A+xa",
	"./cy": "l5ep",
	"./cy.js": "l5ep",
	"./da": "DxQv",
	"./da.js": "DxQv",
	"./de": "tGlX",
	"./de-at": "s+uk",
	"./de-at.js": "s+uk",
	"./de-ch": "u3GI",
	"./de-ch.js": "u3GI",
	"./de.js": "tGlX",
	"./dv": "WYrj",
	"./dv.js": "WYrj",
	"./el": "jUeY",
	"./el.js": "jUeY",
	"./en-au": "Dmvi",
	"./en-au.js": "Dmvi",
	"./en-ca": "OIYi",
	"./en-ca.js": "OIYi",
	"./en-gb": "Oaa7",
	"./en-gb.js": "Oaa7",
	"./en-ie": "4dOw",
	"./en-ie.js": "4dOw",
	"./en-il": "czMo",
	"./en-il.js": "czMo",
	"./en-in": "7C5Q",
	"./en-in.js": "7C5Q",
	"./en-nz": "b1Dy",
	"./en-nz.js": "b1Dy",
	"./en-sg": "t+mt",
	"./en-sg.js": "t+mt",
	"./eo": "Zduo",
	"./eo.js": "Zduo",
	"./es": "iYuL",
	"./es-do": "CjzT",
	"./es-do.js": "CjzT",
	"./es-mx": "tbfe",
	"./es-mx.js": "tbfe",
	"./es-us": "Vclq",
	"./es-us.js": "Vclq",
	"./es.js": "iYuL",
	"./et": "7BjC",
	"./et.js": "7BjC",
	"./eu": "D/JM",
	"./eu.js": "D/JM",
	"./fa": "jfSC",
	"./fa.js": "jfSC",
	"./fi": "gekB",
	"./fi.js": "gekB",
	"./fil": "1ppg",
	"./fil.js": "1ppg",
	"./fo": "ByF4",
	"./fo.js": "ByF4",
	"./fr": "nyYc",
	"./fr-ca": "2fjn",
	"./fr-ca.js": "2fjn",
	"./fr-ch": "Dkky",
	"./fr-ch.js": "Dkky",
	"./fr.js": "nyYc",
	"./fy": "cRix",
	"./fy.js": "cRix",
	"./ga": "USCx",
	"./ga.js": "USCx",
	"./gd": "9rRi",
	"./gd.js": "9rRi",
	"./gl": "iEDd",
	"./gl.js": "iEDd",
	"./gom-deva": "qvJo",
	"./gom-deva.js": "qvJo",
	"./gom-latn": "DKr+",
	"./gom-latn.js": "DKr+",
	"./gu": "4MV3",
	"./gu.js": "4MV3",
	"./he": "x6pH",
	"./he.js": "x6pH",
	"./hi": "3E1r",
	"./hi.js": "3E1r",
	"./hr": "S6ln",
	"./hr.js": "S6ln",
	"./hu": "WxRl",
	"./hu.js": "WxRl",
	"./hy-am": "1rYy",
	"./hy-am.js": "1rYy",
	"./id": "UDhR",
	"./id.js": "UDhR",
	"./is": "BVg3",
	"./is.js": "BVg3",
	"./it": "bpih",
	"./it-ch": "bxKX",
	"./it-ch.js": "bxKX",
	"./it.js": "bpih",
	"./ja": "B55N",
	"./ja.js": "B55N",
	"./jv": "tUCv",
	"./jv.js": "tUCv",
	"./ka": "IBtZ",
	"./ka.js": "IBtZ",
	"./kk": "bXm7",
	"./kk.js": "bXm7",
	"./km": "6B0Y",
	"./km.js": "6B0Y",
	"./kn": "PpIw",
	"./kn.js": "PpIw",
	"./ko": "Ivi+",
	"./ko.js": "Ivi+",
	"./ku": "JCF/",
	"./ku.js": "JCF/",
	"./ky": "lgnt",
	"./ky.js": "lgnt",
	"./lb": "RAwQ",
	"./lb.js": "RAwQ",
	"./lo": "sp3z",
	"./lo.js": "sp3z",
	"./lt": "JvlW",
	"./lt.js": "JvlW",
	"./lv": "uXwI",
	"./lv.js": "uXwI",
	"./me": "KTz0",
	"./me.js": "KTz0",
	"./mi": "aIsn",
	"./mi.js": "aIsn",
	"./mk": "aQkU",
	"./mk.js": "aQkU",
	"./ml": "AvvY",
	"./ml.js": "AvvY",
	"./mn": "lYtQ",
	"./mn.js": "lYtQ",
	"./mr": "Ob0Z",
	"./mr.js": "Ob0Z",
	"./ms": "6+QB",
	"./ms-my": "ZAMP",
	"./ms-my.js": "ZAMP",
	"./ms.js": "6+QB",
	"./mt": "G0Uy",
	"./mt.js": "G0Uy",
	"./my": "honF",
	"./my.js": "honF",
	"./nb": "bOMt",
	"./nb.js": "bOMt",
	"./ne": "OjkT",
	"./ne.js": "OjkT",
	"./nl": "+s0g",
	"./nl-be": "2ykv",
	"./nl-be.js": "2ykv",
	"./nl.js": "+s0g",
	"./nn": "uEye",
	"./nn.js": "uEye",
	"./oc-lnc": "Fnuy",
	"./oc-lnc.js": "Fnuy",
	"./pa-in": "8/+R",
	"./pa-in.js": "8/+R",
	"./pl": "jVdC",
	"./pl.js": "jVdC",
	"./pt": "8mBD",
	"./pt-br": "0tRk",
	"./pt-br.js": "0tRk",
	"./pt.js": "8mBD",
	"./ro": "lyxo",
	"./ro.js": "lyxo",
	"./ru": "lXzo",
	"./ru.js": "lXzo",
	"./sd": "Z4QM",
	"./sd.js": "Z4QM",
	"./se": "//9w",
	"./se.js": "//9w",
	"./si": "7aV9",
	"./si.js": "7aV9",
	"./sk": "e+ae",
	"./sk.js": "e+ae",
	"./sl": "gVVK",
	"./sl.js": "gVVK",
	"./sq": "yPMs",
	"./sq.js": "yPMs",
	"./sr": "zx6S",
	"./sr-cyrl": "E+lV",
	"./sr-cyrl.js": "E+lV",
	"./sr.js": "zx6S",
	"./ss": "Ur1D",
	"./ss.js": "Ur1D",
	"./sv": "X709",
	"./sv.js": "X709",
	"./sw": "dNwA",
	"./sw.js": "dNwA",
	"./ta": "PeUW",
	"./ta.js": "PeUW",
	"./te": "XLvN",
	"./te.js": "XLvN",
	"./tet": "V2x9",
	"./tet.js": "V2x9",
	"./tg": "Oxv6",
	"./tg.js": "Oxv6",
	"./th": "EOgW",
	"./th.js": "EOgW",
	"./tk": "Wv91",
	"./tk.js": "Wv91",
	"./tl-ph": "Dzi0",
	"./tl-ph.js": "Dzi0",
	"./tlh": "z3Vd",
	"./tlh.js": "z3Vd",
	"./tr": "DoHr",
	"./tr.js": "DoHr",
	"./tzl": "z1FC",
	"./tzl.js": "z1FC",
	"./tzm": "wQk9",
	"./tzm-latn": "tT3J",
	"./tzm-latn.js": "tT3J",
	"./tzm.js": "wQk9",
	"./ug-cn": "YRex",
	"./ug-cn.js": "YRex",
	"./uk": "raLr",
	"./uk.js": "raLr",
	"./ur": "UpQW",
	"./ur.js": "UpQW",
	"./uz": "Loxo",
	"./uz-latn": "AQ68",
	"./uz-latn.js": "AQ68",
	"./uz.js": "Loxo",
	"./vi": "KSF8",
	"./vi.js": "KSF8",
	"./x-pseudo": "/X5v",
	"./x-pseudo.js": "/X5v",
	"./yo": "fzPg",
	"./yo.js": "fzPg",
	"./zh-cn": "XDpg",
	"./zh-cn.js": "XDpg",
	"./zh-hk": "SatO",
	"./zh-hk.js": "SatO",
	"./zh-mo": "OmwH",
	"./zh-mo.js": "OmwH",
	"./zh-tw": "kOpN",
	"./zh-tw.js": "kOpN"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "RnhZ";

/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/toolbar */ "/t3+");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");



class AppComponent {
    constructor() { }
    ngOnInit() {
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 4, vars: 0, consts: [[1, "header"], ["color", "primary"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-toolbar", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " TaskTodo ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "router-outlet");
    } }, directives: [_angular_material_toolbar__WEBPACK_IMPORTED_MODULE_1__["MatToolbar"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"]], styles: [".header[_ngcontent-%COMP%] {\r\n    margin:auto;\r\n    width: 80%;\r\n}\r\n@media screen and (max-width: 900px) {\r\n  .header[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n  }\r\n}\r\nmat-toolbar[_ngcontent-%COMP%] {\r\n    height: 25vh;\r\n    border-radius: 0px 0px 50px 50px;\r\n    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksV0FBVztJQUNYLFVBQVU7QUFDZDtBQUNBO0VBQ0U7SUFDRSxXQUFXO0VBQ2I7QUFDRjtBQUNBO0lBQ0ksWUFBWTtJQUdaLGdDQUFnQztJQUNoQywwQ0FBMEM7QUFDOUMiLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaGVhZGVyIHtcclxuICAgIG1hcmdpbjphdXRvO1xyXG4gICAgd2lkdGg6IDgwJTtcclxufVxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5MDBweCkge1xyXG4gIC5oZWFkZXIge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgfVxyXG59XHJcbm1hdC10b29sYmFyIHtcclxuICAgIGhlaWdodDogMjV2aDtcclxuICAgIC13ZWJraXQtYm9yZGVyLXJhZGl1czogMHB4IDBweCA1MHB4IDUwcHg7XHJcbiAgICAtbW96LWJvcmRlci1yYWRpdXM6IDBweCAwcHggNTBweCA1MHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMHB4IDBweCA1MHB4IDUwcHg7XHJcbiAgICBib3gtc2hhZG93OiAwIDRweCA4cHggMCByZ2JhKDAsIDAsIDAsIDAuMik7XHJcbn1cclxuIl19 */"] });


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/home/home.component */ "BuFo");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/select */ "d3UM");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/table */ "+0xr");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/toolbar */ "/t3+");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/progress-spinner */ "Xa2L");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/datepicker */ "iadO");
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/progress-bar */ "bv9b");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _components_create_createorupdate_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/create/createorupdate.component */ "canA");
/* harmony import */ var _components_modal_modal_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/modal/modal.component */ "7aL3");
/* harmony import */ var _angular_fire__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/fire */ "spgP");
/* harmony import */ var _angular_fire_database__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/fire/database */ "sSZD");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/fire/firestore */ "I/3d");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../environments/environment */ "AytR");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/core */ "FKr1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/core */ "fXoL");






// import { MatInputModule, MatNativeDateModule } from '@angular/material';
















// import {MatDatepickerModule} from '@angular/material/datepicker';




class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵdefineInjector"]({ providers: [_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_20__["AngularFirestore"]], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_1__["AppRoutingModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"],
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__["MatFormFieldModule"],
            _angular_material_input__WEBPACK_IMPORTED_MODULE_22__["MatInputModule"],
            _angular_material_select__WEBPACK_IMPORTED_MODULE_6__["MatSelectModule"],
            _angular_material_table__WEBPACK_IMPORTED_MODULE_7__["MatTableModule"],
            _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_8__["MatToolbarModule"],
            _angular_material_core__WEBPACK_IMPORTED_MODULE_23__["MatNativeDateModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_9__["MatButtonModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__["MatIconModule"],
            _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_11__["MatProgressSpinnerModule"],
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_12__["MatDialogModule"],
            _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_13__["MatDatepickerModule"],
            _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_14__["MatProgressBarModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_15__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_15__["ReactiveFormsModule"],
            _angular_fire__WEBPACK_IMPORTED_MODULE_18__["AngularFireModule"].initializeApp(_environments_environment__WEBPACK_IMPORTED_MODULE_21__["environment"].firebaseConfig),
            _angular_fire_database__WEBPACK_IMPORTED_MODULE_19__["AngularFireDatabaseModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
        _components_home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"],
        _components_create_createorupdate_component__WEBPACK_IMPORTED_MODULE_16__["CreateOrUpdateComponent"],
        _components_modal_modal_component__WEBPACK_IMPORTED_MODULE_17__["ModalComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_1__["AppRoutingModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"],
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__["MatFormFieldModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_22__["MatInputModule"],
        _angular_material_select__WEBPACK_IMPORTED_MODULE_6__["MatSelectModule"],
        _angular_material_table__WEBPACK_IMPORTED_MODULE_7__["MatTableModule"],
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_8__["MatToolbarModule"],
        _angular_material_core__WEBPACK_IMPORTED_MODULE_23__["MatNativeDateModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_9__["MatButtonModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__["MatIconModule"],
        _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_11__["MatProgressSpinnerModule"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_12__["MatDialogModule"],
        _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_13__["MatDatepickerModule"],
        _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_14__["MatProgressBarModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_15__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_15__["ReactiveFormsModule"], _angular_fire__WEBPACK_IMPORTED_MODULE_18__["AngularFireModule"], _angular_fire_database__WEBPACK_IMPORTED_MODULE_19__["AngularFireDatabaseModule"]] }); })();


/***/ }),

/***/ "canA":
/*!***************************************************************!*\
  !*** ./src/app/components/create/createorupdate.component.ts ***!
  \***************************************************************/
/*! exports provided: CreateOrUpdateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateOrUpdateComponent", function() { return CreateOrUpdateComponent; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_services_task_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/task.service */ "i6c7");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/select */ "d3UM");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/core */ "FKr1");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/progress-bar */ "bv9b");













function CreateOrUpdateComponent_mat_progress_bar_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "mat-progress-bar", 18);
} }
function CreateOrUpdateComponent_mat_error_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Title is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function CreateOrUpdateComponent_mat_error_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Title' length must be less than maximum 20 characters ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function CreateOrUpdateComponent_mat_error_41_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Description is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
class CreateOrUpdateComponent {
    constructor(router, route, taskservice) {
        this.router = router;
        this.route = route;
        this.taskservice = taskservice;
        this.isUpdatePage = false;
    }
    ngOnInit() {
        this.taskFormGroup = new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroup"]({
            'title': new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].maxLength(20)]),
            'duration': new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](1),
            'status': new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]('New'),
            'description': new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]),
        });
        this.route.params.subscribe((params) => {
            if (params.id != null) {
                this.isUpdatePage = true;
                this.tasktoedit = this.taskservice.getTaskById(params.id);
                this.taskFormGroup.setValue({
                    'title': this.tasktoedit.title,
                    'duration': this.tasktoedit.duration,
                    'status': this.tasktoedit.status,
                    'description': this.tasktoedit.description,
                });
            }
        });
    }
    hasError(controlName, errorName) {
        return this.taskFormGroup.controls[controlName].hasError(errorName);
    }
    saveTask() {
        this.isLoading = true;
        console.log('form values :', this.taskFormGroup.value);
        if (this.isUpdatePage) {
            let task = Object.assign(Object.assign({ id: this.tasktoedit.id }, this.taskFormGroup.value), { createdat: new Date(this.tasktoedit.createdat).getTime().toString() });
            this.taskservice.updateTask(this.tasktoedit.id, task).then((response) => {
                this.isLoading = false;
                console.log('upadated task', response);
                this.router.navigate(["home"]);
            });
        }
        else {
            let task = Object.assign(Object.assign({}, this.taskFormGroup.value), { createdat: new Date().getTime().toString() });
            this.taskservice.saveTask(task).then((response) => {
                this.isLoading = false;
                console.log('created task', response);
                this.router.navigate(["home"]);
            });
        }
    }
}
CreateOrUpdateComponent.ɵfac = function CreateOrUpdateComponent_Factory(t) { return new (t || CreateOrUpdateComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_task_service__WEBPACK_IMPORTED_MODULE_3__["TaskService"])); };
CreateOrUpdateComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: CreateOrUpdateComponent, selectors: [["app-create"]], decls: 48, vars: 8, consts: [[1, "container", "createorupdate-content"], [1, "row", "justify-content-around", "align-items-start"], [1, "col-11", "col-md-10", "align-self-start"], [1, "row"], [1, "col"], ["mode", "indeterminate", 4, "ngIf"], [3, "formGroup", "ngSubmit"], ["appearance", "outline", "color", "primary"], ["matInput", "", "placeholder", "Title", "required", "", "formControlName", "title"], [4, "ngIf"], ["matInput", "", "type", "number", "placeholder", "Number of hours", "min", "1", "max", "72", "formControlName", "duration"], ["matSuffix", ""], ["placeholder", "Status", "formControlName", "status"], ["value", "New "], ["value", "In progress"], ["value", "Closed"], ["matInput", "", "placeholder", "Description", "required", "", "formControlName", "description"], ["color", "primary", "mat-raised-button", "", "type", "submit", 1, "saveBtn", 3, "disabled"], ["mode", "indeterminate"]], template: function CreateOrUpdateComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, CreateOrUpdateComponent_mat_progress_bar_5_Template, 1, 0, "mat-progress-bar", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "form", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function CreateOrUpdateComponent_Template_form_ngSubmit_6_listener() { return ctx.saveTask(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "mat-form-field", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "Title");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](12, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](13, CreateOrUpdateComponent_mat_error_13_Template, 2, 0, "mat-error", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](14, CreateOrUpdateComponent_mat_error_14_Template, 2, 0, "mat-error", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "mat-form-field", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, "Duration");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](20, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, "hours");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "mat-form-field", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](27, "Status");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "mat-select", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "mat-option", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](30, "New");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "mat-option", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](32, "In progress");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "mat-option", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](34, "Closed");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "mat-form-field", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](39, "Description");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](40, "textarea", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](41, CreateOrUpdateComponent_mat_error_41_Template, 2, 0, "mat-error", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](42, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](43, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](44, "button", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](45);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](46, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](47);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.isLoading);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.taskFormGroup);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.hasError("title", "required"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.hasError("title", "maxlength"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](27);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.hasError("description", "required"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", !ctx.taskFormGroup.valid);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", ctx.tasktoedit ? "Update" : "Create", "\u00A0\u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.tasktoedit ? "edit" : "add_circle");
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroupDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_6__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NumberValueAccessor"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatSuffix"], _angular_material_select__WEBPACK_IMPORTED_MODULE_7__["MatSelect"], _angular_material_core__WEBPACK_IMPORTED_MODULE_8__["MatOption"], _angular_material_button__WEBPACK_IMPORTED_MODULE_9__["MatButton"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__["MatIcon"], _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_11__["MatProgressBar"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatError"]], styles: [".createorupdate-content[_ngcontent-%COMP%] {\r\n  width: 80%;\r\n  \r\n  padding-bottom: 20px;\r\n  margin: auto;\r\n  margin-top: 20px;\r\n  border-radius: 10px;\r\n  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\r\n}\r\n\r\n@media screen and (max-width: 900px) {\r\n  .createorupdate-content[_ngcontent-%COMP%] {\r\n    width: 90%;\r\n  }\r\n}\r\n\r\nform[_ngcontent-%COMP%]{\r\n  background-color: white;\r\n  padding: 20px;\r\n  border-radius: 10px;\r\n\r\n}\r\n\r\nmat-form-field[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n}\r\n\r\ntextarea[_ngcontent-%COMP%] {\r\n  height: 150px;\r\n}\r\n\r\n.saveBtn[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n  height: 60px;\r\n}\r\n\r\nmat-spinner[_ngcontent-%COMP%] {\r\n  position: relative;\r\n  left: 48%;\r\n  top: 48%;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNyZWF0ZW9ydXBkYXRlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxVQUFVO0VBQ1YscUJBQXFCO0VBQ3JCLG9CQUFvQjtFQUNwQixZQUFZO0VBQ1osZ0JBQWdCO0VBQ2hCLG1CQUFtQjtFQUNuQiw2RUFBNkU7QUFDL0U7O0FBRUE7RUFDRTtJQUNFLFVBQVU7RUFDWjtBQUNGOztBQUNBO0VBQ0UsdUJBQXVCO0VBQ3ZCLGFBQWE7RUFDYixtQkFBbUI7O0FBRXJCOztBQUNBO0VBQ0UsV0FBVztBQUNiOztBQUVBO0VBQ0UsYUFBYTtBQUNmOztBQUVBO0VBQ0UsV0FBVztFQUNYLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixTQUFTO0VBQ1QsUUFBUTtBQUNWIiwiZmlsZSI6ImNyZWF0ZW9ydXBkYXRlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY3JlYXRlb3J1cGRhdGUtY29udGVudCB7XHJcbiAgd2lkdGg6IDgwJTtcclxuICAvKnBhZGRpbmctdG9wOiAyMHB4OyovXHJcbiAgcGFkZGluZy1ib3R0b206IDIwcHg7XHJcbiAgbWFyZ2luOiBhdXRvO1xyXG4gIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICBib3gtc2hhZG93OiAwIDhweCAxNnB4IDAgcmdiYSgwLCAwLCAwLCAwLjIpLCAwIDZweCAyMHB4IDAgcmdiYSgwLCAwLCAwLCAwLjE5KTtcclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTAwcHgpIHtcclxuICAuY3JlYXRlb3J1cGRhdGUtY29udGVudCB7XHJcbiAgICB3aWR0aDogOTAlO1xyXG4gIH1cclxufVxyXG5mb3Jte1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gIHBhZGRpbmc6IDIwcHg7XHJcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuXHJcbn1cclxubWF0LWZvcm0tZmllbGQge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG50ZXh0YXJlYSB7XHJcbiAgaGVpZ2h0OiAxNTBweDtcclxufVxyXG5cclxuLnNhdmVCdG4ge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogNjBweDtcclxufVxyXG5cclxubWF0LXNwaW5uZXIge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBsZWZ0OiA0OCU7XHJcbiAgdG9wOiA0OCU7XHJcbn1cclxuIl19 */"] });


/***/ }),

/***/ "i6c7":
/*!******************************************!*\
  !*** ./src/app/services/task.service.ts ***!
  \******************************************/
/*! exports provided: TaskService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaskService", function() { return TaskService; });
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! moment */ "wd/R");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/firestore */ "I/3d");



class TaskService {
    constructor(firestore) {
        this.firestore = firestore;
        this.tasks = [];
    }
    getAllTasks() {
        return new Promise((resolve, reject) => {
            this.firestore.collection('/task').snapshotChanges()
                .subscribe(data => {
                this.tasks = data.map(e => {
                    let task = e.payload.doc.data();
                    let id = e.payload.doc.id;
                    return {
                        id: id,
                        title: task.title,
                        duration: task.duration,
                        status: task.status,
                        description: task.description,
                        createdat: moment__WEBPACK_IMPORTED_MODULE_0__(parseInt(task.createdat)).toString()
                    };
                });
                resolve(this.tasks);
            });
        });
        // return new Promise(function (resolve, reject) {
        //   setTimeout(function () {
        //     resolve(JSON.parse(localStorage.getItem('tasks')));
        //   }, 1000);
        // });
    }
    saveTask(task) {
        return this.firestore.collection('task').add(task);
        // return new Promise(function (resolve, reject) {
        //   setTimeout(function () {
        //     this.tasks = JSON.parse(localStorage.getItem('tasks'));
        //     if (this.tasks == null) {
        //       this.tasks = [];
        //     }
        //     this.tasks.push(task);
        //     localStorage.setItem('tasks', JSON.stringify(this.tasks));
        //     resolve(task);
        //   }, 1000);
        // });
    }
    updateTask(id, newTask) {
        return this.firestore.collection('task').doc(id).set(newTask);
        // return new Promise(function (resolve, reject) {
        //   setTimeout(function () {
        //     this.tasks = JSON.parse(localStorage.getItem('tasks'));
        //     let taskIndex = this.tasks.findIndex((task) => {
        //       return task.id == newtask.id;
        //     });
        //     this.tasks[taskIndex] = newtask;
        //     localStorage.setItem('tasks', JSON.stringify(this.tasks));
        //     resolve(newtask);
        //   }, 1000);
        // });
    }
    deleteTask(id) {
        return this.firestore.collection('task').doc(id).delete();
        // return new Promise(function (resolve, reject) {
        //   setTimeout(function () {
        //     this.tasks = JSON.parse(localStorage.getItem('tasks'));
        //     this.tasks = this.tasks.filter((task) => {
        //       return task.id != id;
        //     });
        //     localStorage.setItem('tasks', JSON.stringify(this.tasks));
        //     resolve('done');
        //   }, 1000);
        // });
    }
    getTaskById(id) {
        return this.tasks.find(task => task.id == id);
        // return new Promise<any>((resolve, reject) => {
        //   this.firestore.collection('/task').snapshotChanges()
        //     .subscribe(data => {
        //        taskdata = data.filter(e => {
        //         let taskid: any = e.payload.doc.id;
        //         return id == taskid;
        //       })
        //       let task=taskdata[0].payload.doc;
        //       resolve({
        //         id: task.id,
        //         title: task.title,
        //         duration: task.duration,
        //         status: task.status,
        //         description: task.description,
        //         createdat: new Date(task.createdat.seconds * 1000).toString()
        //       } );
        //     });
        // });
    }
}
TaskService.ɵfac = function TaskService_Factory(t) { return new (t || TaskService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"])); };
TaskService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: TaskService, factory: TaskService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/home/home.component */ "BuFo");
/* harmony import */ var _components_create_createorupdate_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/create/createorupdate.component */ "canA");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");





const routes = [{ path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: _components_home_home_component__WEBPACK_IMPORTED_MODULE_1__["HomeComponent"] },
    { path: 'create', component: _components_create_createorupdate_component__WEBPACK_IMPORTED_MODULE_2__["CreateOrUpdateComponent"] },
    { path: 'edit', component: _components_create_createorupdate_component__WEBPACK_IMPORTED_MODULE_2__["CreateOrUpdateComponent"] }];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(routes, { useHash: true, onSameUrlNavigation: 'reload' })], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
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
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map