"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var SidebarComponent = (function () {
    function SidebarComponent() {
        this.isActive = false;
        this.showMenu = '';
    }
    SidebarComponent.prototype.eventCalled = function () {
        this.isActive = !this.isActive;
    };
    SidebarComponent.prototype.addExpandClass = function (element) {
        if (element === this.showMenu) {
            this.showMenu = '0';
        }
        else {
            this.showMenu = element;
        }
    };
    SidebarComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'sidebar-cmp',
            templateUrl: 'sidebar.html'
        }), 
        __metadata('design:paramtypes', [])
    ], SidebarComponent);
    return SidebarComponent;
}());
exports.SidebarComponent = SidebarComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9zaGFyZWQvc2lkZWJhci9zaWRlYmFyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBMEIsZUFBZSxDQUFDLENBQUE7QUFRMUM7SUFBQTtRQUNDLGFBQVEsR0FBRyxLQUFLLENBQUM7UUFDakIsYUFBUSxHQUFXLEVBQUUsQ0FBQztJQVd2QixDQUFDO0lBVkEsc0NBQVcsR0FBWDtRQUNDLElBQUksQ0FBQyxRQUFRLEdBQUcsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDO0lBQ2hDLENBQUM7SUFDRCx5Q0FBYyxHQUFkLFVBQWUsT0FBWTtRQUMxQixFQUFFLENBQUMsQ0FBQyxPQUFPLEtBQUssSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7WUFDL0IsSUFBSSxDQUFDLFFBQVEsR0FBRyxHQUFHLENBQUM7UUFDckIsQ0FBQztRQUFDLElBQUksQ0FBQyxDQUFDO1lBQ1AsSUFBSSxDQUFDLFFBQVEsR0FBRyxPQUFPLENBQUM7UUFDekIsQ0FBQztJQUNGLENBQUM7SUFsQkY7UUFBQyxnQkFBUyxDQUFDO1lBQ1YsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFFBQVEsRUFBRSxhQUFhO1lBQ3ZCLFdBQVcsRUFBRSxjQUFjO1NBQzNCLENBQUM7O3dCQUFBO0lBZUYsdUJBQUM7QUFBRCxDQWJBLEFBYUMsSUFBQTtBQWJZLHdCQUFnQixtQkFhNUIsQ0FBQSIsImZpbGUiOiJhcHAvc2hhcmVkL3NpZGViYXIvc2lkZWJhci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcblx0bW9kdWxlSWQ6IG1vZHVsZS5pZCxcclxuXHRzZWxlY3RvcjogJ3NpZGViYXItY21wJyxcclxuXHR0ZW1wbGF0ZVVybDogJ3NpZGViYXIuaHRtbCdcclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBTaWRlYmFyQ29tcG9uZW50IHtcclxuXHRpc0FjdGl2ZSA9IGZhbHNlO1xyXG5cdHNob3dNZW51OiBzdHJpbmcgPSAnJztcclxuXHRldmVudENhbGxlZCgpIHtcclxuXHRcdHRoaXMuaXNBY3RpdmUgPSAhdGhpcy5pc0FjdGl2ZTtcclxuXHR9XHJcblx0YWRkRXhwYW5kQ2xhc3MoZWxlbWVudDogYW55KSB7XHJcblx0XHRpZiAoZWxlbWVudCA9PT0gdGhpcy5zaG93TWVudSkge1xyXG5cdFx0XHR0aGlzLnNob3dNZW51ID0gJzAnO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0dGhpcy5zaG93TWVudSA9IGVsZW1lbnQ7XHJcblx0XHR9XHJcblx0fVxyXG59XHJcbiJdfQ==
