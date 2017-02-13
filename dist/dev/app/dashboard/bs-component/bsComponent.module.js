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
var router_1 = require('@angular/router');
var forms_1 = require('@angular/forms');
var ng2_bootstrap_1 = require('ng2-bootstrap/ng2-bootstrap');
var bsComponent_component_1 = require('./bsComponent.component');
var BSComponentModule = (function () {
    function BSComponentModule() {
    }
    BSComponentModule = __decorate([
        core_1.NgModule({
            imports: [
                router_1.RouterModule,
                forms_1.FormsModule,
                common_1.CommonModule,
                ng2_bootstrap_1.AlertModule,
                ng2_bootstrap_1.ButtonsModule,
                ng2_bootstrap_1.DropdownModule,
                ng2_bootstrap_1.PaginationModule,
                ng2_bootstrap_1.ProgressbarModule,
                ng2_bootstrap_1.RatingModule,
                ng2_bootstrap_1.TabsModule,
                ng2_bootstrap_1.TooltipModule,
                ng2_bootstrap_1.ModalModule,
                ng2_bootstrap_1.TypeaheadModule
            ],
            declarations: [bsComponent_component_1.BSComponentComponent],
            exports: [bsComponent_component_1.BSComponentComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], BSComponentModule);
    return BSComponentModule;
}());
exports.BSComponentModule = BSComponentModule;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9kYXNoYm9hcmQvYnMtY29tcG9uZW50L2JzQ29tcG9uZW50Lm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEscUJBQXlCLGVBQWUsQ0FBQyxDQUFBO0FBQ3pDLHVCQUE2QixpQkFBaUIsQ0FBQyxDQUFBO0FBQy9DLHVCQUE2QixpQkFBaUIsQ0FBQyxDQUFBO0FBQy9DLHNCQUE0QixnQkFBZ0IsQ0FBQyxDQUFBO0FBRTdDLDhCQVdRLDZCQUE2QixDQUFDLENBQUE7QUFHdEMsc0NBQXFDLHlCQUF5QixDQUFDLENBQUE7QUFzQi9EO0lBQUE7SUFBaUMsQ0FBQztJQXBCbEM7UUFBQyxlQUFRLENBQUM7WUFDTixPQUFPLEVBQUU7Z0JBQ1IscUJBQVk7Z0JBQ1osbUJBQVc7Z0JBQ2QscUJBQVk7Z0JBQ1osMkJBQVc7Z0JBQ1gsNkJBQWE7Z0JBQ2IsOEJBQWM7Z0JBQ2QsZ0NBQWdCO2dCQUNoQixpQ0FBaUI7Z0JBQ2pCLDRCQUFZO2dCQUNaLDBCQUFVO2dCQUNWLDZCQUFhO2dCQUNiLDJCQUFXO2dCQUNYLCtCQUFlO2FBQ2Y7WUFDRSxZQUFZLEVBQUUsQ0FBQyw0Q0FBb0IsQ0FBQztZQUNwQyxPQUFPLEVBQUUsQ0FBQyw0Q0FBb0IsQ0FBQztTQUNsQyxDQUFDOzt5QkFBQTtJQUUrQix3QkFBQztBQUFELENBQWpDLEFBQWtDLElBQUE7QUFBckIseUJBQWlCLG9CQUFJLENBQUEiLCJmaWxlIjoiYXBwL2Rhc2hib2FyZC9icy1jb21wb25lbnQvYnNDb21wb25lbnQubW9kdWxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBSb3V0ZXJNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgRm9ybXNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5cbmltcG9ydCB7XG5cdFx0QWxlcnRNb2R1bGUsXG5cdFx0QnV0dG9uc01vZHVsZSxcblx0XHREcm9wZG93bk1vZHVsZSxcblx0XHRQYWdpbmF0aW9uTW9kdWxlLFxuXHRcdFByb2dyZXNzYmFyTW9kdWxlLFxuXHRcdFJhdGluZ01vZHVsZSxcblx0XHRUYWJzTW9kdWxlLFxuXHRcdFRvb2x0aXBNb2R1bGUsXG5cdFx0TW9kYWxNb2R1bGUsXG5cdFx0VHlwZWFoZWFkTW9kdWxlXG5cdH0gZnJvbSAnbmcyLWJvb3RzdHJhcC9uZzItYm9vdHN0cmFwJztcblxuXG5pbXBvcnQgeyBCU0NvbXBvbmVudENvbXBvbmVudCB9IGZyb20gJy4vYnNDb21wb25lbnQuY29tcG9uZW50JztcblxuQE5nTW9kdWxlKHtcbiAgICBpbXBvcnRzOiBbXG4gICAgXHRSb3V0ZXJNb2R1bGUsXG4gICAgXHRGb3Jtc01vZHVsZSxcblx0XHRDb21tb25Nb2R1bGUsXG5cdFx0QWxlcnRNb2R1bGUsXG5cdFx0QnV0dG9uc01vZHVsZSxcblx0XHREcm9wZG93bk1vZHVsZSxcblx0XHRQYWdpbmF0aW9uTW9kdWxlLFxuXHRcdFByb2dyZXNzYmFyTW9kdWxlLFxuXHRcdFJhdGluZ01vZHVsZSxcblx0XHRUYWJzTW9kdWxlLFxuXHRcdFRvb2x0aXBNb2R1bGUsXG5cdFx0TW9kYWxNb2R1bGUsXG5cdFx0VHlwZWFoZWFkTW9kdWxlXG5cdF0sXG4gICAgZGVjbGFyYXRpb25zOiBbQlNDb21wb25lbnRDb21wb25lbnRdLFxuICAgIGV4cG9ydHM6IFtCU0NvbXBvbmVudENvbXBvbmVudF1cbn0pXG5cbmV4cG9ydCBjbGFzcyBCU0NvbXBvbmVudE1vZHVsZSB7IH1cbiJdfQ==
