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
        router.events.filter(function (ne) { return ne instanceof router_2.NavigationStart; }).subscribe(function (ne) {
            _this.isBusy = true;
            AppInsights.startTrackPage(ne.url);
        });
        router.events.filter(function (e) { return e instanceof router_2.NavigationEnd; }).subscribe(function (ne) {
            _this.isBusy = false;
            AppInsights.stopTrackPage(ne.url);
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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9kYXNoYm9hcmQvZGFzaGJvYXJkLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEscUJBQTBCLGVBQWUsQ0FBQyxDQUFBO0FBQzFDLHVCQUF1QixpQkFBaUIsQ0FBQyxDQUFBO0FBQ3pDLHVCQUErQyxpQkFBaUIsQ0FBQyxDQUFBO0FBQ2pFLFFBQU8sd0JBQXdCLENBQUMsQ0FBQTtBQUNoQyxRQUFPLDBCQUEwQixDQUFDLENBQUE7QUFZbEM7SUFFRSw0QkFBb0IsTUFBYTtRQUZuQyxpQkFnQkU7UUFkb0IsV0FBTSxHQUFOLE1BQU0sQ0FBTztRQURqQyxXQUFNLEdBQVksS0FBSyxDQUFDO1FBRXRCLE1BQU0sQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLFVBQUEsRUFBRSxJQUFJLE9BQUEsRUFBRSxZQUFZLHdCQUFlLEVBQTdCLENBQTZCLENBQUMsQ0FBQyxTQUFTLENBQUMsVUFBQyxFQUFtQjtZQUVuRixLQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztZQUNuQixXQUFXLENBQUMsY0FBYyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUN4QyxDQUFDLENBQUMsQ0FBQztRQUVGLE1BQU0sQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLFVBQUEsQ0FBQyxJQUFJLE9BQUEsQ0FBQyxZQUFZLHNCQUFhLEVBQTFCLENBQTBCLENBQUMsQ0FBQyxTQUFTLENBQUMsVUFBQyxFQUFpQjtZQUUvRSxLQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztZQUNwQixXQUFXLENBQUMsYUFBYSxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNyQyxDQUFDLENBQUMsQ0FBQztJQUNOLENBQUM7SUFwQkg7UUFBQyxnQkFBUyxDQUFDO1lBQ1YsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFFBQVEsRUFBRSxlQUFlO1lBQ3pCLFdBQVcsRUFBRSwwQkFBMEI7U0FDdkMsQ0FBQzs7MEJBQUE7SUFrQkQseUJBQUM7QUFBRCxDQWhCRCxBQWdCRSxJQUFBO0FBaEJXLDBCQUFrQixxQkFnQjdCLENBQUEiLCJmaWxlIjoiYXBwL2Rhc2hib2FyZC9kYXNoYm9hcmQuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgTmF2aWdhdGlvbkVuZCwgTmF2aWdhdGlvblN0YXJ0IH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCAncnhqcy9hZGQvb3BlcmF0b3IvdGFrZSc7XG5pbXBvcnQgJ3J4anMvYWRkL29wZXJhdG9yL2ZpbHRlcic7XG5kZWNsYXJlIHZhciBBcHBJbnNpZ2h0czogYW55O1xuLyoqXG4qXHRUaGlzIGNsYXNzIHJlcHJlc2VudHMgdGhlIGxhenkgbG9hZGVkIERhc2hib2FyZENvbXBvbmVudC5cbiovXG5cbkBDb21wb25lbnQoe1xuXHRtb2R1bGVJZDogbW9kdWxlLmlkLFxuXHRzZWxlY3RvcjogJ2Rhc2hib2FyZC1jbXAnLFxuXHR0ZW1wbGF0ZVVybDogJ2Rhc2hib2FyZC5jb21wb25lbnQuaHRtbCdcbn0pXG5cbmV4cG9ydCBjbGFzcyBEYXNoYm9hcmRDb21wb25lbnQge1xuICBpc0J1c3k6IGJvb2xlYW4gPSBmYWxzZTtcbiAgY29uc3RydWN0b3IocHJpdmF0ZSByb3V0ZXI6Um91dGVyKSB7XG4gICAgcm91dGVyLmV2ZW50cy5maWx0ZXIobmUgPT4gbmUgaW5zdGFuY2VvZiBOYXZpZ2F0aW9uU3RhcnQpLnN1YnNjcmliZSgobmU6IE5hdmlnYXRpb25TdGFydCkgPT4ge1xuICAgICAgICAgLy8gcmVzb2x2ZSBoYXMgYmVlbiBjYWxsIGhlcmUhIFwiaXMtYnVzeVwiXG4gICAgICAgICB0aGlzLmlzQnVzeSA9IHRydWU7XG4gICAgICAgICBBcHBJbnNpZ2h0cy5zdGFydFRyYWNrUGFnZShuZS51cmwpO1xuICAgIH0pO1xuXG4gICAgIHJvdXRlci5ldmVudHMuZmlsdGVyKGUgPT4gZSBpbnN0YW5jZW9mIE5hdmlnYXRpb25FbmQpLnN1YnNjcmliZSgobmU6IE5hdmlnYXRpb25FbmQpID0+IHtcbiAgICAgICAgLy8gcmVzb2x2ZSBmaW5pc2hlZCBoZXJlISAgZW5kIG9mIFwiaXMtYnVzeVwiIHN0YXJ0IG9mIFwibGVhdmVcIiBhbmltYXRpb25cbiAgICAgICAgdGhpcy5pc0J1c3kgPSBmYWxzZTtcbiAgICAgICAgQXBwSW5zaWdodHMuc3RvcFRyYWNrUGFnZShuZS51cmwpO1xuICAgICB9KTtcbiAgfVxuXG4gfVxuIl19
