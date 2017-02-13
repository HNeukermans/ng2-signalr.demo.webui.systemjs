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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9kYXNoYm9hcmQvZG9jdW1lbnRhdGlvbi9kb2N1bWVudGF0aW9uLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEscUJBQXlCLGVBQWUsQ0FBQyxDQUFBO0FBQ3pDLHdDQUF1QywyQkFBMkIsQ0FBQyxDQUFBO0FBRW5FLDZDQUFtQyxnQ0FBZ0MsQ0FBQyxDQUFBO0FBQ3BFLHNCQUE0QixnQkFBZ0IsQ0FBQyxDQUFBO0FBQzdDLHVCQUE2QixpQkFBaUIsQ0FBQyxDQUFBO0FBQy9DLDhCQUEyQiw2QkFBNkIsQ0FBQyxDQUFBO0FBQ3pELDhCQUE2Qiw0QkFBNEIsQ0FBQyxDQUFBO0FBVzFEO0lBQUE7SUFBbUMsQ0FBQztJQVRwQztRQUFDLGVBQVEsQ0FBQztZQUNSLE9BQU8sRUFBRSxDQUFFLG1CQUFXLEVBQUUscUJBQVksRUFBRSwwQkFBVSxFQUFFLDRCQUFZLENBQUU7WUFDaEUsU0FBUyxFQUFFLENBQUMsaURBQWtCLENBQUM7WUFDL0IsWUFBWSxFQUFFLENBQUMsZ0RBQXNCLENBQUM7WUFDdEMsT0FBTyxFQUFFLENBQUMsZ0RBQXNCLENBQUM7U0FDbEMsQ0FBQzs7MkJBQUE7SUFJaUMsMEJBQUM7QUFBRCxDQUFuQyxBQUFvQyxJQUFBO0FBQXZCLDJCQUFtQixzQkFBSSxDQUFBIiwiZmlsZSI6ImFwcC9kYXNoYm9hcmQvZG9jdW1lbnRhdGlvbi9kb2N1bWVudGF0aW9uLm1vZHVsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IERvY3VtZW50YXRpb25Db21wb25lbnQgfSBmcm9tICcuL2RvY3VtZW50YXRpb24uY29tcG9uZW50JztcclxuLy9pbXBvcnQgeyBDaGF0Q29tcG9uZW50IH0gZnJvbSAnLi9jaGF0JztcclxuaW1wb3J0IHsgQ29ubmVjdGlvblJlc29sdmVyIH0gZnJvbSAnLi9kb2N1bWVudGF0aW9uLnJvdXRlLnJlc29sdmVyJztcclxuaW1wb3J0IHsgRm9ybXNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcbmltcG9ydCB7IFRhYnNNb2R1bGUgfSBmcm9tICduZzItYm9vdHN0cmFwL25nMi1ib290c3RyYXAnO1xyXG5pbXBvcnQgeyBTaGFyZWRNb2R1bGUgfSBmcm9tICcuLi8uLi9zaGFyZWQvc2hhcmVkLm1vZHVsZSc7XHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gIGltcG9ydHM6IFsgRm9ybXNNb2R1bGUsIENvbW1vbk1vZHVsZSwgVGFic01vZHVsZSwgU2hhcmVkTW9kdWxlIF0sXHJcbiAgcHJvdmlkZXJzOiBbQ29ubmVjdGlvblJlc29sdmVyXSxcclxuICBkZWNsYXJhdGlvbnM6IFtEb2N1bWVudGF0aW9uQ29tcG9uZW50XSxcclxuICBleHBvcnRzOiBbRG9jdW1lbnRhdGlvbkNvbXBvbmVudF1cclxufSlcclxuXHJcblxyXG5cclxuZXhwb3J0IGNsYXNzIERvY3VtZW50YXRpb25Nb2R1bGUgeyB9XHJcbiJdfQ==
