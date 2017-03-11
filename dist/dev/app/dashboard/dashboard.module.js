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
var ng2_bootstrap_1 = require('ng2-bootstrap/ng2-bootstrap');
var ng2_bootstrap_2 = require('ng2-bootstrap/ng2-bootstrap');
var chat_module_1 = require('./chat/chat.module');
var unit_test_module_1 = require('./unit-test/unit-test.module');
var bsElement_module_1 = require('./bs-element/bsElement.module');
var dashboard_component_1 = require('./dashboard.component');
var index_1 = require('../shared/index');
var index_2 = require('../shared/index');
var devSetup_module_1 = require('./dev-setup/devSetup.module');
var forms_1 = require('@angular/forms');
var DashboardModule = (function () {
    function DashboardModule() {
    }
    DashboardModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule,
                router_1.RouterModule,
                ng2_bootstrap_1.DropdownModule,
                ng2_bootstrap_2.ModalModule,
                bsElement_module_1.BSElementModule,
                chat_module_1.ChatModule,
                unit_test_module_1.UnitTestModule,
                devSetup_module_1.DevSetupModule,
                forms_1.FormsModule
            ],
            declarations: [dashboard_component_1.DashboardComponent, index_1.TopNavComponent, index_2.SidebarComponent],
            exports: [dashboard_component_1.DashboardComponent, index_1.TopNavComponent, index_2.SidebarComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], DashboardModule);
    return DashboardModule;
}());
exports.DashboardModule = DashboardModule;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9kYXNoYm9hcmQvZGFzaGJvYXJkLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEscUJBQXlCLGVBQWUsQ0FBQyxDQUFBO0FBQ3pDLHVCQUE2QixpQkFBaUIsQ0FBQyxDQUFBO0FBQy9DLHVCQUE2QixpQkFBaUIsQ0FBQyxDQUFBO0FBQy9DLDhCQUErQiw2QkFBNkIsQ0FBQyxDQUFBO0FBQzdELDhCQUE0Qiw2QkFBNkIsQ0FBQyxDQUFBO0FBRTFELDRCQUEyQixvQkFBb0IsQ0FBQyxDQUFBO0FBQ2hELGlDQUErQiw4QkFBOEIsQ0FBQyxDQUFBO0FBQzlELGlDQUFnQywrQkFBK0IsQ0FBQyxDQUFBO0FBRWhFLG9DQUFtQyx1QkFBdUIsQ0FBQyxDQUFBO0FBRTNELHNCQUFnQyxpQkFBaUIsQ0FBQyxDQUFBO0FBQ2xELHNCQUFpQyxpQkFBaUIsQ0FBQyxDQUFBO0FBQ25ELGdDQUErQiw2QkFBNkIsQ0FBQyxDQUFBO0FBQzdELHNCQUE0QixnQkFBZ0IsQ0FBQyxDQUFBO0FBbUI3QztJQUFBO0lBQStCLENBQUM7SUFoQmhDO1FBQUMsZUFBUSxDQUFDO1lBQ1IsT0FBTyxFQUFFO2dCQUNQLHFCQUFZO2dCQUNaLHFCQUFZO2dCQUNaLDhCQUFjO2dCQUNkLDJCQUFXO2dCQUNYLGtDQUFlO2dCQUNmLHdCQUFVO2dCQUNWLGlDQUFjO2dCQUNkLGdDQUFjO2dCQUNkLG1CQUFXO2FBQ1o7WUFDRCxZQUFZLEVBQUUsQ0FBQyx3Q0FBa0IsRUFBRSx1QkFBZSxFQUFFLHdCQUFnQixDQUFDO1lBQ3JFLE9BQU8sRUFBRSxDQUFDLHdDQUFrQixFQUFFLHVCQUFlLEVBQUUsd0JBQWdCLENBQUM7U0FDakUsQ0FBQzs7dUJBQUE7SUFFNkIsc0JBQUM7QUFBRCxDQUEvQixBQUFnQyxJQUFBO0FBQW5CLHVCQUFlLGtCQUFJLENBQUEiLCJmaWxlIjoiYXBwL2Rhc2hib2FyZC9kYXNoYm9hcmQubW9kdWxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBSb3V0ZXJNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgRHJvcGRvd25Nb2R1bGUgfSBmcm9tICduZzItYm9vdHN0cmFwL25nMi1ib290c3RyYXAnO1xuaW1wb3J0IHsgTW9kYWxNb2R1bGUgfSBmcm9tICduZzItYm9vdHN0cmFwL25nMi1ib290c3RyYXAnO1xuXG5pbXBvcnQgeyBDaGF0TW9kdWxlIH0gZnJvbSAnLi9jaGF0L2NoYXQubW9kdWxlJztcbmltcG9ydCB7IFVuaXRUZXN0TW9kdWxlIH0gZnJvbSAnLi91bml0LXRlc3QvdW5pdC10ZXN0Lm1vZHVsZSc7XG5pbXBvcnQgeyBCU0VsZW1lbnRNb2R1bGUgfSBmcm9tICcuL2JzLWVsZW1lbnQvYnNFbGVtZW50Lm1vZHVsZSc7XG5cbmltcG9ydCB7IERhc2hib2FyZENvbXBvbmVudCB9IGZyb20gJy4vZGFzaGJvYXJkLmNvbXBvbmVudCc7XG5cbmltcG9ydCB7IFRvcE5hdkNvbXBvbmVudCB9IGZyb20gJy4uL3NoYXJlZC9pbmRleCc7XG5pbXBvcnQgeyBTaWRlYmFyQ29tcG9uZW50IH0gZnJvbSAnLi4vc2hhcmVkL2luZGV4JztcbmltcG9ydCB7IERldlNldHVwTW9kdWxlIH0gZnJvbSAnLi9kZXYtc2V0dXAvZGV2U2V0dXAubW9kdWxlJztcbmltcG9ydCB7IEZvcm1zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuXG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBDb21tb25Nb2R1bGUsXG4gICAgUm91dGVyTW9kdWxlLFxuICAgIERyb3Bkb3duTW9kdWxlLFxuICAgIE1vZGFsTW9kdWxlLFxuICAgIEJTRWxlbWVudE1vZHVsZSxcbiAgICBDaGF0TW9kdWxlLFxuICAgIFVuaXRUZXN0TW9kdWxlLFxuICAgIERldlNldHVwTW9kdWxlLFxuICAgIEZvcm1zTW9kdWxlXG4gIF0sXG4gIGRlY2xhcmF0aW9uczogW0Rhc2hib2FyZENvbXBvbmVudCwgVG9wTmF2Q29tcG9uZW50LCBTaWRlYmFyQ29tcG9uZW50XSxcbiAgZXhwb3J0czogW0Rhc2hib2FyZENvbXBvbmVudCwgVG9wTmF2Q29tcG9uZW50LCBTaWRlYmFyQ29tcG9uZW50XVxufSlcblxuZXhwb3J0IGNsYXNzIERhc2hib2FyZE1vZHVsZSB7IH1cbiJdfQ==
