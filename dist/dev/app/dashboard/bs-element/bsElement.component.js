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
var BSElementComponent = (function () {
    function BSElementComponent(route) {
        this._connection1 = null;
        this._connection2 = null;
        this._connection1 = route.snapshot.data['connections'][0];
        this._connection2 = route.snapshot.data['connections'][1];
    }
    BSElementComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'bs-element',
            templateUrl: './bs-element.component.html'
        }), 
        __metadata('design:paramtypes', [router_1.ActivatedRoute])
    ], BSElementComponent);
    return BSElementComponent;
}());
exports.BSElementComponent = BSElementComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9kYXNoYm9hcmQvYnMtZWxlbWVudC9ic0VsZW1lbnQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBMEIsZUFBZSxDQUFDLENBQUE7QUFDMUMsdUJBQStCLGlCQUFpQixDQUFDLENBQUE7QUFTakQ7SUFLQyw0QkFBWSxLQUFxQjtRQUh6QixpQkFBWSxHQUFzQixJQUFJLENBQUM7UUFDdkMsaUJBQVksR0FBc0IsSUFBSSxDQUFDO1FBRzVDLElBQUksQ0FBQyxZQUFZLEdBQUcsS0FBSyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDMUQsSUFBSSxDQUFDLFlBQVksR0FBRyxLQUFLLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUM1RCxDQUFDO0lBZEg7UUFBQyxnQkFBUyxDQUFDO1lBQ1YsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ2hCLFFBQVEsRUFBRSxZQUFZO1lBQ3RCLFdBQVcsRUFBRSw2QkFBNkI7U0FDN0MsQ0FBQzs7MEJBQUE7SUFZRix5QkFBQztBQUFELENBVkEsQUFVQyxJQUFBO0FBVlksMEJBQWtCLHFCQVU5QixDQUFBIiwiZmlsZSI6ImFwcC9kYXNoYm9hcmQvYnMtZWxlbWVudC9ic0VsZW1lbnQuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEFjdGl2YXRlZFJvdXRlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcclxuaW1wb3J0IHsgU2lnbmFsUkNvbm5lY3Rpb24gfSBmcm9tICduZzItc2lnbmFscic7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuXHRtb2R1bGVJZDogbW9kdWxlLmlkLFxyXG4gICAgc2VsZWN0b3I6ICdicy1lbGVtZW50JyxcclxuICAgIHRlbXBsYXRlVXJsOiAnLi9icy1lbGVtZW50LmNvbXBvbmVudC5odG1sJ1xyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIEJTRWxlbWVudENvbXBvbmVudCB7XHJcblxyXG4gcHJpdmF0ZSBfY29ubmVjdGlvbjE6IFNpZ25hbFJDb25uZWN0aW9uID0gbnVsbDtcclxuIHByaXZhdGUgX2Nvbm5lY3Rpb24yOiBTaWduYWxSQ29ubmVjdGlvbiA9IG51bGw7XHJcbiAgICBcclxuIGNvbnN0cnVjdG9yKHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZSkge1xyXG4gICAgdGhpcy5fY29ubmVjdGlvbjEgPSByb3V0ZS5zbmFwc2hvdC5kYXRhWydjb25uZWN0aW9ucyddWzBdO1xyXG4gICAgdGhpcy5fY29ubmVjdGlvbjIgPSByb3V0ZS5zbmFwc2hvdC5kYXRhWydjb25uZWN0aW9ucyddWzFdOyBcclxuICB9ICAgIFxyXG5cclxufVxyXG4iXX0=
