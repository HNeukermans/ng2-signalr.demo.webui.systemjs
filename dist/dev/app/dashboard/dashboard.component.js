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
var router_1 = require('@angular/router');
var router_2 = require('@angular/router');
require('rxjs/add/operator/take');
require('rxjs/add/operator/filter');
var DashboardComponent = (function () {
    function DashboardComponent(router) {
        var _this = this;
        this.router = router;
        this.isBusy = false;
        router.events.filter(function (e) { return e instanceof router_2.NavigationStart; }).subscribe(function () {
            _this.isBusy = true;
        });
        router.events.filter(function (e) { return e instanceof router_2.NavigationEnd; }).subscribe(function () {
            _this.isBusy = false;
        });
    }
    DashboardComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'dashboard-cmp',
            templateUrl: 'dashboard.component.html'
        }), 
        __metadata('design:paramtypes', [router_1.Router])
    ], DashboardComponent);
    return DashboardComponent;
}());
exports.DashboardComponent = DashboardComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9kYXNoYm9hcmQvZGFzaGJvYXJkLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEscUJBQTBCLGVBQWUsQ0FBQyxDQUFBO0FBQzFDLHVCQUF1QixpQkFBaUIsQ0FBQyxDQUFBO0FBQ3pDLHVCQUErQyxpQkFBaUIsQ0FBQyxDQUFBO0FBQ2pFLFFBQU8sd0JBQXdCLENBQUMsQ0FBQTtBQUNoQyxRQUFPLDBCQUEwQixDQUFDLENBQUE7QUFZbEM7SUFFRSw0QkFBb0IsTUFBYTtRQUZuQyxpQkFjRTtRQVpvQixXQUFNLEdBQU4sTUFBTSxDQUFPO1FBRGpDLFdBQU0sR0FBWSxLQUFLLENBQUM7UUFFdEIsTUFBTSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsVUFBQSxDQUFDLElBQUksT0FBQSxDQUFDLFlBQVksd0JBQWUsRUFBNUIsQ0FBNEIsQ0FBQyxDQUFDLFNBQVMsQ0FBQztZQUU3RCxLQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztRQUN4QixDQUFDLENBQUMsQ0FBQztRQUVGLE1BQU0sQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLFVBQUEsQ0FBQyxJQUFJLE9BQUEsQ0FBQyxZQUFZLHNCQUFhLEVBQTFCLENBQTBCLENBQUMsQ0FBQyxTQUFTLENBQUM7WUFFN0QsS0FBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7UUFDdkIsQ0FBQyxDQUFDLENBQUM7SUFDTixDQUFDO0lBbEJIO1FBQUMsZ0JBQVMsQ0FBQztZQUNWLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixRQUFRLEVBQUUsZUFBZTtZQUN6QixXQUFXLEVBQUUsMEJBQTBCO1NBQ3ZDLENBQUM7OzBCQUFBO0lBZ0JELHlCQUFDO0FBQUQsQ0FkRCxBQWNFLElBQUE7QUFkVywwQkFBa0IscUJBYzdCLENBQUEiLCJmaWxlIjoiYXBwL2Rhc2hib2FyZC9kYXNoYm9hcmQuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XHJcbmltcG9ydCB7IE5hdmlnYXRpb25FbmQsIE5hdmlnYXRpb25TdGFydCB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XHJcbmltcG9ydCAncnhqcy9hZGQvb3BlcmF0b3IvdGFrZSc7XHJcbmltcG9ydCAncnhqcy9hZGQvb3BlcmF0b3IvZmlsdGVyJztcclxuXHJcbi8qKlxyXG4qXHRUaGlzIGNsYXNzIHJlcHJlc2VudHMgdGhlIGxhenkgbG9hZGVkIERhc2hib2FyZENvbXBvbmVudC5cclxuKi9cclxuXHJcbkBDb21wb25lbnQoe1xyXG5cdG1vZHVsZUlkOiBtb2R1bGUuaWQsXHJcblx0c2VsZWN0b3I6ICdkYXNoYm9hcmQtY21wJyxcclxuXHR0ZW1wbGF0ZVVybDogJ2Rhc2hib2FyZC5jb21wb25lbnQuaHRtbCdcclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBEYXNoYm9hcmRDb21wb25lbnQge1xyXG4gIGlzQnVzeTogYm9vbGVhbiA9IGZhbHNlO1xyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgcm91dGVyOlJvdXRlcikge1xyXG4gICAgcm91dGVyLmV2ZW50cy5maWx0ZXIoZSA9PiBlIGluc3RhbmNlb2YgTmF2aWdhdGlvblN0YXJ0KS5zdWJzY3JpYmUoKCkgPT4ge1xyXG4gICAgICAgICAvLyByZXNvbHZlIGhhcyBiZWVuIGNhbGwgaGVyZSEgXCJpcy1idXN5XCJcclxuICAgICAgICAgdGhpcy5pc0J1c3kgPSB0cnVlO1xyXG4gICAgfSk7XHJcblxyXG4gICAgIHJvdXRlci5ldmVudHMuZmlsdGVyKGUgPT4gZSBpbnN0YW5jZW9mIE5hdmlnYXRpb25FbmQpLnN1YnNjcmliZSgoKSA9PiB7XHJcbiAgICAgICAgLy8gcmVzb2x2ZSBmaW5pc2hlZCBoZXJlISAgZW5kIG9mIFwiaXMtYnVzeVwiIHN0YXJ0IG9mIFwibGVhdmVcIiBhbmltYXRpb25cclxuICAgICAgICB0aGlzLmlzQnVzeSA9IGZhbHNlO1xyXG4gICAgIH0pO1xyXG4gIH1cclxuXHJcbiB9Il19
