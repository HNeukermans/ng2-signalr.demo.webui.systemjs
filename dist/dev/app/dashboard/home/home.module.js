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
var common_1 = require('@angular/common');
var home_component_1 = require('./home.component');
var ng2_bootstrap_1 = require('ng2-bootstrap/ng2-bootstrap');
var home_component_2 = require('./home.component');
var HomeModule = (function () {
    function HomeModule() {
    }
    HomeModule = __decorate([
        core_1.NgModule({
            imports: [common_1.CommonModule, ng2_bootstrap_1.CarouselModule, ng2_bootstrap_1.DropdownModule, ng2_bootstrap_1.AlertModule],
            declarations: [home_component_1.HomeComponent, home_component_2.TimelineComponent, home_component_2.ChatComponent, home_component_2.NotificationComponent],
            exports: [home_component_1.HomeComponent, home_component_2.TimelineComponent, home_component_2.ChatComponent, home_component_2.NotificationComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], HomeModule);
    return HomeModule;
}());
exports.HomeModule = HomeModule;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9kYXNoYm9hcmQvaG9tZS9ob21lLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEscUJBQXlCLGVBQWUsQ0FBQyxDQUFBO0FBQ3pDLHVCQUE2QixpQkFBaUIsQ0FBQyxDQUFBO0FBQy9DLCtCQUE4QixrQkFBa0IsQ0FBQyxDQUFBO0FBQ2pELDhCQUE0RCw2QkFBNkIsQ0FBQyxDQUFBO0FBRTFGLCtCQUF3RSxrQkFBa0IsQ0FBQyxDQUFBO0FBUTNGO0lBQUE7SUFBMEIsQ0FBQztJQU4zQjtRQUFDLGVBQVEsQ0FBQztZQUNOLE9BQU8sRUFBRSxDQUFDLHFCQUFZLEVBQUUsOEJBQWMsRUFBRSw4QkFBYyxFQUFFLDJCQUFXLENBQUM7WUFDcEUsWUFBWSxFQUFFLENBQUMsOEJBQWEsRUFBRSxrQ0FBaUIsRUFBRSw4QkFBYSxFQUFFLHNDQUFxQixDQUFDO1lBQ3RGLE9BQU8sRUFBRSxDQUFDLDhCQUFhLEVBQUUsa0NBQWlCLEVBQUUsOEJBQWEsRUFBRSxzQ0FBcUIsQ0FBQztTQUNwRixDQUFDOztrQkFBQTtJQUV3QixpQkFBQztBQUFELENBQTFCLEFBQTJCLElBQUE7QUFBZCxrQkFBVSxhQUFJLENBQUEiLCJmaWxlIjoiYXBwL2Rhc2hib2FyZC9ob21lL2hvbWUubW9kdWxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBIb21lQ29tcG9uZW50IH0gZnJvbSAnLi9ob21lLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBDYXJvdXNlbE1vZHVsZSwgRHJvcGRvd25Nb2R1bGUsIEFsZXJ0TW9kdWxlIH0gZnJvbSAnbmcyLWJvb3RzdHJhcC9uZzItYm9vdHN0cmFwJztcblxuaW1wb3J0IHsgVGltZWxpbmVDb21wb25lbnQsIENoYXRDb21wb25lbnQsIE5vdGlmaWNhdGlvbkNvbXBvbmVudCB9IGZyb20gJy4vaG9tZS5jb21wb25lbnQnO1xuXG5ATmdNb2R1bGUoe1xuICAgIGltcG9ydHM6IFtDb21tb25Nb2R1bGUsIENhcm91c2VsTW9kdWxlLCBEcm9wZG93bk1vZHVsZSwgQWxlcnRNb2R1bGVdLFxuICAgIGRlY2xhcmF0aW9uczogW0hvbWVDb21wb25lbnQsIFRpbWVsaW5lQ29tcG9uZW50LCBDaGF0Q29tcG9uZW50LCBOb3RpZmljYXRpb25Db21wb25lbnRdLFxuICAgIGV4cG9ydHM6IFtIb21lQ29tcG9uZW50LCBUaW1lbGluZUNvbXBvbmVudCwgQ2hhdENvbXBvbmVudCwgTm90aWZpY2F0aW9uQ29tcG9uZW50XVxufSlcblxuZXhwb3J0IGNsYXNzIEhvbWVNb2R1bGUgeyB9XG4iXX0=
