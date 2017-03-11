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
var documentation_component_1 = require('./documentation.component');
var documentation_route_resolver_1 = require('./documentation.route.resolver');
var forms_1 = require('@angular/forms');
var common_1 = require('@angular/common');
var ng2_bootstrap_1 = require('ng2-bootstrap/ng2-bootstrap');
var shared_module_1 = require('../../shared/shared.module');
var DocumentationModule = (function () {
    function DocumentationModule() {
    }
    DocumentationModule = __decorate([
        core_1.NgModule({
            imports: [forms_1.FormsModule, common_1.CommonModule, ng2_bootstrap_1.TabsModule, shared_module_1.SharedModule],
            providers: [documentation_route_resolver_1.ConnectionResolver],
            declarations: [documentation_component_1.DocumentationComponent],
            exports: [documentation_component_1.DocumentationComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], DocumentationModule);
    return DocumentationModule;
}());
exports.DocumentationModule = DocumentationModule;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9kYXNoYm9hcmQvZG9jdW1lbnRhdGlvbi9kb2N1bWVudGF0aW9uLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEscUJBQXlCLGVBQWUsQ0FBQyxDQUFBO0FBQ3pDLHdDQUF1QywyQkFBMkIsQ0FBQyxDQUFBO0FBRW5FLDZDQUFtQyxnQ0FBZ0MsQ0FBQyxDQUFBO0FBQ3BFLHNCQUE0QixnQkFBZ0IsQ0FBQyxDQUFBO0FBQzdDLHVCQUE2QixpQkFBaUIsQ0FBQyxDQUFBO0FBQy9DLDhCQUEyQiw2QkFBNkIsQ0FBQyxDQUFBO0FBQ3pELDhCQUE2Qiw0QkFBNEIsQ0FBQyxDQUFBO0FBVzFEO0lBQUE7SUFBbUMsQ0FBQztJQVRwQztRQUFDLGVBQVEsQ0FBQztZQUNSLE9BQU8sRUFBRSxDQUFFLG1CQUFXLEVBQUUscUJBQVksRUFBRSwwQkFBVSxFQUFFLDRCQUFZLENBQUU7WUFDaEUsU0FBUyxFQUFFLENBQUMsaURBQWtCLENBQUM7WUFDL0IsWUFBWSxFQUFFLENBQUMsZ0RBQXNCLENBQUM7WUFDdEMsT0FBTyxFQUFFLENBQUMsZ0RBQXNCLENBQUM7U0FDbEMsQ0FBQzs7MkJBQUE7SUFJaUMsMEJBQUM7QUFBRCxDQUFuQyxBQUFvQyxJQUFBO0FBQXZCLDJCQUFtQixzQkFBSSxDQUFBIiwiZmlsZSI6ImFwcC9kYXNoYm9hcmQvZG9jdW1lbnRhdGlvbi9kb2N1bWVudGF0aW9uLm1vZHVsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBEb2N1bWVudGF0aW9uQ29tcG9uZW50IH0gZnJvbSAnLi9kb2N1bWVudGF0aW9uLmNvbXBvbmVudCc7XG4vL2ltcG9ydCB7IENoYXRDb21wb25lbnQgfSBmcm9tICcuL2NoYXQnO1xuaW1wb3J0IHsgQ29ubmVjdGlvblJlc29sdmVyIH0gZnJvbSAnLi9kb2N1bWVudGF0aW9uLnJvdXRlLnJlc29sdmVyJztcbmltcG9ydCB7IEZvcm1zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IFRhYnNNb2R1bGUgfSBmcm9tICduZzItYm9vdHN0cmFwL25nMi1ib290c3RyYXAnO1xuaW1wb3J0IHsgU2hhcmVkTW9kdWxlIH0gZnJvbSAnLi4vLi4vc2hhcmVkL3NoYXJlZC5tb2R1bGUnO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbIEZvcm1zTW9kdWxlLCBDb21tb25Nb2R1bGUsIFRhYnNNb2R1bGUsIFNoYXJlZE1vZHVsZSBdLFxuICBwcm92aWRlcnM6IFtDb25uZWN0aW9uUmVzb2x2ZXJdLFxuICBkZWNsYXJhdGlvbnM6IFtEb2N1bWVudGF0aW9uQ29tcG9uZW50XSxcbiAgZXhwb3J0czogW0RvY3VtZW50YXRpb25Db21wb25lbnRdXG59KVxuXG5cblxuZXhwb3J0IGNsYXNzIERvY3VtZW50YXRpb25Nb2R1bGUgeyB9XG4iXX0=
