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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9kYXNoYm9hcmQvYnMtZWxlbWVudC9ic0VsZW1lbnQubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBeUIsZUFBZSxDQUFDLENBQUE7QUFDekMsdUJBQTZCLGlCQUFpQixDQUFDLENBQUE7QUFFL0Msb0NBQW1DLHVCQUF1QixDQUFDLENBQUE7QUFDM0Qsc0JBQTRCLGdCQUFnQixDQUFDLENBQUE7QUFDN0MsOEJBQTZCLDRCQUE0QixDQUFDLENBQUE7QUFFMUQseUNBQW1DLDRCQUE0QixDQUFDLENBQUE7QUFTaEU7SUFBQTtJQUErQixDQUFDO0lBUGhDO1FBQUMsZUFBUSxDQUFDO1lBQ04sT0FBTyxFQUFFLENBQUMscUJBQVksRUFBRSxtQkFBVyxFQUFFLDRCQUFZLENBQUM7WUFDbEQsWUFBWSxFQUFFLENBQUMsd0NBQWtCLENBQUM7WUFDbEMsT0FBTyxFQUFFLENBQUMsd0NBQWtCLENBQUM7WUFDN0IsU0FBUyxFQUFFLENBQUMsNkNBQWtCLENBQUM7U0FDbEMsQ0FBQzs7dUJBQUE7SUFFNkIsc0JBQUM7QUFBRCxDQUEvQixBQUFnQyxJQUFBO0FBQW5CLHVCQUFlLGtCQUFJLENBQUEiLCJmaWxlIjoiYXBwL2Rhc2hib2FyZC9icy1lbGVtZW50L2JzRWxlbWVudC5tb2R1bGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUm91dGVyTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcblxuaW1wb3J0IHsgQlNFbGVtZW50Q29tcG9uZW50IH0gZnJvbSAnLi9ic0VsZW1lbnQuY29tcG9uZW50JztcbmltcG9ydCB7IEZvcm1zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgU2hhcmVkTW9kdWxlIH0gZnJvbSAnLi4vLi4vc2hhcmVkL3NoYXJlZC5tb2R1bGUnO1xuaW1wb3J0IHsgQ2hhdENvbXBvbmVudCB9IGZyb20gJy4uLy4uL3NoYXJlZC9jaGF0L2NoYXQnO1xuaW1wb3J0IHsgQ29ubmVjdGlvblJlc29sdmVyIH0gZnJvbSAnLi9ic0VsZW1lbnQucm91dGUucmVzb2x2ZXInO1xuXG5ATmdNb2R1bGUoe1xuICAgIGltcG9ydHM6IFtSb3V0ZXJNb2R1bGUsIEZvcm1zTW9kdWxlLCBTaGFyZWRNb2R1bGVdLFxuICAgIGRlY2xhcmF0aW9uczogW0JTRWxlbWVudENvbXBvbmVudF0sXG4gICAgZXhwb3J0czogW0JTRWxlbWVudENvbXBvbmVudF0sXG4gICAgcHJvdmlkZXJzOiBbQ29ubmVjdGlvblJlc29sdmVyXVxufSlcblxuZXhwb3J0IGNsYXNzIEJTRWxlbWVudE1vZHVsZSB7IH1cbiJdfQ==
