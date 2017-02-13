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
var bsElement_component_1 = require('./bsElement.component');
var forms_1 = require('@angular/forms');
var shared_module_1 = require('../../shared/shared.module');
var bsElement_route_resolver_1 = require('./bsElement.route.resolver');
var BSElementModule = (function () {
    function BSElementModule() {
    }
    BSElementModule = __decorate([
        core_1.NgModule({
            imports: [router_1.RouterModule, forms_1.FormsModule, shared_module_1.SharedModule],
            declarations: [bsElement_component_1.BSElementComponent],
            exports: [bsElement_component_1.BSElementComponent],
            providers: [bsElement_route_resolver_1.ConnectionResolver]
        }), 
        __metadata('design:paramtypes', [])
    ], BSElementModule);
    return BSElementModule;
}());
exports.BSElementModule = BSElementModule;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9kYXNoYm9hcmQvYnMtZWxlbWVudC9ic0VsZW1lbnQubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBeUIsZUFBZSxDQUFDLENBQUE7QUFDekMsdUJBQTZCLGlCQUFpQixDQUFDLENBQUE7QUFFL0Msb0NBQW1DLHVCQUF1QixDQUFDLENBQUE7QUFDM0Qsc0JBQTRCLGdCQUFnQixDQUFDLENBQUE7QUFDN0MsOEJBQTZCLDRCQUE0QixDQUFDLENBQUE7QUFFMUQseUNBQW1DLDRCQUE0QixDQUFDLENBQUE7QUFTaEU7SUFBQTtJQUErQixDQUFDO0lBUGhDO1FBQUMsZUFBUSxDQUFDO1lBQ04sT0FBTyxFQUFFLENBQUMscUJBQVksRUFBRSxtQkFBVyxFQUFFLDRCQUFZLENBQUM7WUFDbEQsWUFBWSxFQUFFLENBQUMsd0NBQWtCLENBQUM7WUFDbEMsT0FBTyxFQUFFLENBQUMsd0NBQWtCLENBQUM7WUFDN0IsU0FBUyxFQUFFLENBQUMsNkNBQWtCLENBQUM7U0FDbEMsQ0FBQzs7dUJBQUE7SUFFNkIsc0JBQUM7QUFBRCxDQUEvQixBQUFnQyxJQUFBO0FBQW5CLHVCQUFlLGtCQUFJLENBQUEiLCJmaWxlIjoiYXBwL2Rhc2hib2FyZC9icy1lbGVtZW50L2JzRWxlbWVudC5tb2R1bGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBSb3V0ZXJNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xyXG5cclxuaW1wb3J0IHsgQlNFbGVtZW50Q29tcG9uZW50IH0gZnJvbSAnLi9ic0VsZW1lbnQuY29tcG9uZW50JztcclxuaW1wb3J0IHsgRm9ybXNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcbmltcG9ydCB7IFNoYXJlZE1vZHVsZSB9IGZyb20gJy4uLy4uL3NoYXJlZC9zaGFyZWQubW9kdWxlJztcclxuaW1wb3J0IHsgQ2hhdENvbXBvbmVudCB9IGZyb20gJy4uLy4uL3NoYXJlZC9jaGF0L2NoYXQnO1xyXG5pbXBvcnQgeyBDb25uZWN0aW9uUmVzb2x2ZXIgfSBmcm9tICcuL2JzRWxlbWVudC5yb3V0ZS5yZXNvbHZlcic7XHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gICAgaW1wb3J0czogW1JvdXRlck1vZHVsZSwgRm9ybXNNb2R1bGUsIFNoYXJlZE1vZHVsZV0sXHJcbiAgICBkZWNsYXJhdGlvbnM6IFtCU0VsZW1lbnRDb21wb25lbnRdLFxyXG4gICAgZXhwb3J0czogW0JTRWxlbWVudENvbXBvbmVudF0sXHJcbiAgICBwcm92aWRlcnM6IFtDb25uZWN0aW9uUmVzb2x2ZXJdXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgQlNFbGVtZW50TW9kdWxlIHsgfVxyXG4iXX0=
