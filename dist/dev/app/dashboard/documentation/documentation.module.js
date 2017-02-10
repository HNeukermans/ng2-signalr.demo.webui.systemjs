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
var chat_1 = require('./chat');
var documentation_route_resolver_1 = require('./documentation.route.resolver');
var forms_1 = require('@angular/forms');
var common_1 = require('@angular/common');
var ng2_bootstrap_1 = require('ng2-bootstrap/ng2-bootstrap');
var DocumentationModule = (function () {
    function DocumentationModule() {
    }
    DocumentationModule = __decorate([
        core_1.NgModule({
            imports: [forms_1.FormsModule, common_1.CommonModule, ng2_bootstrap_1.TabsModule],
            providers: [documentation_route_resolver_1.ConnectionResolver],
            declarations: [documentation_component_1.DocumentationComponent, chat_1.ChatComponent],
            exports: [documentation_component_1.DocumentationComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], DocumentationModule);
    return DocumentationModule;
}());
exports.DocumentationModule = DocumentationModule;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9kYXNoYm9hcmQvZG9jdW1lbnRhdGlvbi9kb2N1bWVudGF0aW9uLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEscUJBQXlCLGVBQWUsQ0FBQyxDQUFBO0FBQ3pDLHdDQUF1QywyQkFBMkIsQ0FBQyxDQUFBO0FBQ25FLHFCQUE4QixRQUFRLENBQUMsQ0FBQTtBQUN2Qyw2Q0FBbUMsZ0NBQWdDLENBQUMsQ0FBQTtBQUNwRSxzQkFBNEIsZ0JBQWdCLENBQUMsQ0FBQTtBQUM3Qyx1QkFBNkIsaUJBQWlCLENBQUMsQ0FBQTtBQUMvQyw4QkFBMkIsNkJBQTZCLENBQUMsQ0FBQTtBQVl6RDtJQUFBO0lBQW1DLENBQUM7SUFUcEM7UUFBQyxlQUFRLENBQUM7WUFDUixPQUFPLEVBQUUsQ0FBRSxtQkFBVyxFQUFFLHFCQUFZLEVBQUUsMEJBQVUsQ0FBRTtZQUNsRCxTQUFTLEVBQUUsQ0FBQyxpREFBa0IsQ0FBQztZQUMvQixZQUFZLEVBQUUsQ0FBQyxnREFBc0IsRUFBRSxvQkFBYSxDQUFDO1lBQ3JELE9BQU8sRUFBRSxDQUFDLGdEQUFzQixDQUFDO1NBQ2xDLENBQUM7OzJCQUFBO0lBSWlDLDBCQUFDO0FBQUQsQ0FBbkMsQUFBb0MsSUFBQTtBQUF2QiwyQkFBbUIsc0JBQUksQ0FBQSIsImZpbGUiOiJhcHAvZGFzaGJvYXJkL2RvY3VtZW50YXRpb24vZG9jdW1lbnRhdGlvbi5tb2R1bGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBEb2N1bWVudGF0aW9uQ29tcG9uZW50IH0gZnJvbSAnLi9kb2N1bWVudGF0aW9uLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IENoYXRDb21wb25lbnQgfSBmcm9tICcuL2NoYXQnO1xyXG5pbXBvcnQgeyBDb25uZWN0aW9uUmVzb2x2ZXIgfSBmcm9tICcuL2RvY3VtZW50YXRpb24ucm91dGUucmVzb2x2ZXInO1xyXG5pbXBvcnQgeyBGb3Jtc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcclxuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuaW1wb3J0IHsgVGFic01vZHVsZSB9IGZyb20gJ25nMi1ib290c3RyYXAvbmcyLWJvb3RzdHJhcCc7XHJcblxyXG5cclxuQE5nTW9kdWxlKHtcclxuICBpbXBvcnRzOiBbIEZvcm1zTW9kdWxlLCBDb21tb25Nb2R1bGUsIFRhYnNNb2R1bGUgXSxcclxuICBwcm92aWRlcnM6IFtDb25uZWN0aW9uUmVzb2x2ZXJdLFxyXG4gIGRlY2xhcmF0aW9uczogW0RvY3VtZW50YXRpb25Db21wb25lbnQsIENoYXRDb21wb25lbnRdLFxyXG4gIGV4cG9ydHM6IFtEb2N1bWVudGF0aW9uQ29tcG9uZW50XVxyXG59KVxyXG5cclxuXHJcblxyXG5leHBvcnQgY2xhc3MgRG9jdW1lbnRhdGlvbk1vZHVsZSB7IH1cclxuIl19
