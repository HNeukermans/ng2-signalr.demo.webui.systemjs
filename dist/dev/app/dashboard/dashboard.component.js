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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9kYXNoYm9hcmQvZGFzaGJvYXJkLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEscUJBQTBCLGVBQWUsQ0FBQyxDQUFBO0FBQzFDLHVCQUF1QixpQkFBaUIsQ0FBQyxDQUFBO0FBQ3pDLHVCQUErQyxpQkFBaUIsQ0FBQyxDQUFBO0FBQ2pFLFFBQU8sd0JBQXdCLENBQUMsQ0FBQTtBQUNoQyxRQUFPLDBCQUEwQixDQUFDLENBQUE7QUFZbEM7SUFFRSw0QkFBb0IsTUFBYTtRQUZuQyxpQkFjRTtRQVpvQixXQUFNLEdBQU4sTUFBTSxDQUFPO1FBRGpDLFdBQU0sR0FBWSxLQUFLLENBQUM7UUFFdEIsTUFBTSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsVUFBQSxDQUFDLElBQUksT0FBQSxDQUFDLFlBQVksd0JBQWUsRUFBNUIsQ0FBNEIsQ0FBQyxDQUFDLFNBQVMsQ0FBQztZQUU3RCxLQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztRQUN4QixDQUFDLENBQUMsQ0FBQztRQUVGLE1BQU0sQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLFVBQUEsQ0FBQyxJQUFJLE9BQUEsQ0FBQyxZQUFZLHNCQUFhLEVBQTFCLENBQTBCLENBQUMsQ0FBQyxTQUFTLENBQUM7WUFFN0QsS0FBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7UUFDdkIsQ0FBQyxDQUFDLENBQUM7SUFDTixDQUFDO0lBbEJIO1FBQUMsZ0JBQVMsQ0FBQztZQUNWLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixRQUFRLEVBQUUsZUFBZTtZQUN6QixXQUFXLEVBQUUsMEJBQTBCO1NBQ3ZDLENBQUM7OzBCQUFBO0lBZ0JELHlCQUFDO0FBQUQsQ0FkRCxBQWNFLElBQUE7QUFkVywwQkFBa0IscUJBYzdCLENBQUEiLCJmaWxlIjoiYXBwL2Rhc2hib2FyZC9kYXNoYm9hcmQuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgTmF2aWdhdGlvbkVuZCwgTmF2aWdhdGlvblN0YXJ0IH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCAncnhqcy9hZGQvb3BlcmF0b3IvdGFrZSc7XG5pbXBvcnQgJ3J4anMvYWRkL29wZXJhdG9yL2ZpbHRlcic7XG5cbi8qKlxuKlx0VGhpcyBjbGFzcyByZXByZXNlbnRzIHRoZSBsYXp5IGxvYWRlZCBEYXNoYm9hcmRDb21wb25lbnQuXG4qL1xuXG5AQ29tcG9uZW50KHtcblx0bW9kdWxlSWQ6IG1vZHVsZS5pZCxcblx0c2VsZWN0b3I6ICdkYXNoYm9hcmQtY21wJyxcblx0dGVtcGxhdGVVcmw6ICdkYXNoYm9hcmQuY29tcG9uZW50Lmh0bWwnXG59KVxuXG5leHBvcnQgY2xhc3MgRGFzaGJvYXJkQ29tcG9uZW50IHtcbiAgaXNCdXN5OiBib29sZWFuID0gZmFsc2U7XG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgcm91dGVyOlJvdXRlcikge1xuICAgIHJvdXRlci5ldmVudHMuZmlsdGVyKGUgPT4gZSBpbnN0YW5jZW9mIE5hdmlnYXRpb25TdGFydCkuc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgICAgIC8vIHJlc29sdmUgaGFzIGJlZW4gY2FsbCBoZXJlISBcImlzLWJ1c3lcIlxuICAgICAgICAgdGhpcy5pc0J1c3kgPSB0cnVlO1xuICAgIH0pO1xuXG4gICAgIHJvdXRlci5ldmVudHMuZmlsdGVyKGUgPT4gZSBpbnN0YW5jZW9mIE5hdmlnYXRpb25FbmQpLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICAgIC8vIHJlc29sdmUgZmluaXNoZWQgaGVyZSEgIGVuZCBvZiBcImlzLWJ1c3lcIiBzdGFydCBvZiBcImxlYXZlXCIgYW5pbWF0aW9uXG4gICAgICAgIHRoaXMuaXNCdXN5ID0gZmFsc2U7XG4gICAgIH0pO1xuICB9XG5cbiB9Il19
