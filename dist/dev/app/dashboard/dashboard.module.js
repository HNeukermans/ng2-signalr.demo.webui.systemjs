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
var home_module_1 = require('./home/home.module');
var chart_module_1 = require('./charts/chart.module');
var documentation_module_1 = require('./documentation/documentation.module');
var table_module_1 = require('./tables/table.module');
var forms_module_1 = require('./forms/forms.module');
var grid_module_1 = require('./grid/grid.module');
var bsComponent_module_1 = require('./bs-component/bsComponent.module');
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
                home_module_1.HomeModule,
                chart_module_1.ChartModule,
                table_module_1.TableModule,
                forms_module_1.FormModule,
                grid_module_1.GridModule,
                bsComponent_module_1.BSComponentModule,
                bsElement_module_1.BSElementModule,
                documentation_module_1.DocumentationModule,
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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9kYXNoYm9hcmQvZGFzaGJvYXJkLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEscUJBQXlCLGVBQWUsQ0FBQyxDQUFBO0FBQ3pDLHVCQUE2QixpQkFBaUIsQ0FBQyxDQUFBO0FBQy9DLHVCQUE2QixpQkFBaUIsQ0FBQyxDQUFBO0FBQy9DLDhCQUErQiw2QkFBNkIsQ0FBQyxDQUFBO0FBQzdELDhCQUE0Qiw2QkFBNkIsQ0FBQyxDQUFBO0FBRTFELDRCQUEyQixvQkFBb0IsQ0FBQyxDQUFBO0FBQ2hELDZCQUE0Qix1QkFBdUIsQ0FBQyxDQUFBO0FBQ3BELHFDQUFvQyxzQ0FBc0MsQ0FBQyxDQUFBO0FBQzNFLDZCQUE0Qix1QkFBdUIsQ0FBQyxDQUFBO0FBQ3BELDZCQUEyQixzQkFBc0IsQ0FBQyxDQUFBO0FBQ2xELDRCQUEyQixvQkFBb0IsQ0FBQyxDQUFBO0FBQ2hELG1DQUFrQyxtQ0FBbUMsQ0FBQyxDQUFBO0FBQ3RFLGlDQUFnQywrQkFBK0IsQ0FBQyxDQUFBO0FBRWhFLG9DQUFtQyx1QkFBdUIsQ0FBQyxDQUFBO0FBRTNELHNCQUE4QixpQkFBaUIsQ0FBQyxDQUFBO0FBQ2hELHNCQUFpQyxpQkFBaUIsQ0FBQyxDQUFBO0FBQ25ELGdDQUErQiw2QkFBNkIsQ0FBQyxDQUFBO0FBQzdELHNCQUE0QixnQkFBZ0IsQ0FBQyxDQUFBO0FBd0I3QztJQUFBO0lBQStCLENBQUM7SUFyQmhDO1FBQUMsZUFBUSxDQUFDO1lBQ04sT0FBTyxFQUFFO2dCQUNMLHFCQUFZO2dCQUNmLHFCQUFZO2dCQUNaLDhCQUFjO2dCQUNYLDJCQUFXO2dCQUNkLHdCQUFVO2dCQUNQLDBCQUFXO2dCQUNYLDBCQUFXO2dCQUNYLHlCQUFVO2dCQUNWLHdCQUFVO2dCQUNiLHNDQUFpQjtnQkFDZCxrQ0FBZTtnQkFDakIsMENBQW1CO2dCQUNqQixnQ0FBYztnQkFDZCxtQkFBVzthQUNkO1lBQ0QsWUFBWSxFQUFFLENBQUMsd0NBQWtCLEVBQUUsdUJBQWUsRUFBRSx3QkFBZ0IsQ0FBQztZQUNyRSxPQUFPLEVBQUUsQ0FBQyx3Q0FBa0IsRUFBRSx1QkFBZSxFQUFFLHdCQUFnQixDQUFDO1NBQ25FLENBQUM7O3VCQUFBO0lBRTZCLHNCQUFDO0FBQUQsQ0FBL0IsQUFBZ0MsSUFBQTtBQUFuQix1QkFBZSxrQkFBSSxDQUFBIiwiZmlsZSI6ImFwcC9kYXNoYm9hcmQvZGFzaGJvYXJkLm1vZHVsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcbmltcG9ydCB7IFJvdXRlck1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XHJcbmltcG9ydCB7IERyb3Bkb3duTW9kdWxlIH0gZnJvbSAnbmcyLWJvb3RzdHJhcC9uZzItYm9vdHN0cmFwJztcclxuaW1wb3J0IHsgTW9kYWxNb2R1bGUgfSBmcm9tICduZzItYm9vdHN0cmFwL25nMi1ib290c3RyYXAnO1xyXG5cclxuaW1wb3J0IHsgSG9tZU1vZHVsZSB9IGZyb20gJy4vaG9tZS9ob21lLm1vZHVsZSc7XHJcbmltcG9ydCB7IENoYXJ0TW9kdWxlIH0gZnJvbSAnLi9jaGFydHMvY2hhcnQubW9kdWxlJztcclxuaW1wb3J0IHsgRG9jdW1lbnRhdGlvbk1vZHVsZSB9IGZyb20gJy4vZG9jdW1lbnRhdGlvbi9kb2N1bWVudGF0aW9uLm1vZHVsZSc7XHJcbmltcG9ydCB7IFRhYmxlTW9kdWxlIH0gZnJvbSAnLi90YWJsZXMvdGFibGUubW9kdWxlJztcclxuaW1wb3J0IHsgRm9ybU1vZHVsZSB9IGZyb20gJy4vZm9ybXMvZm9ybXMubW9kdWxlJztcclxuaW1wb3J0IHsgR3JpZE1vZHVsZSB9IGZyb20gJy4vZ3JpZC9ncmlkLm1vZHVsZSc7XHJcbmltcG9ydCB7IEJTQ29tcG9uZW50TW9kdWxlIH0gZnJvbSAnLi9icy1jb21wb25lbnQvYnNDb21wb25lbnQubW9kdWxlJztcclxuaW1wb3J0IHsgQlNFbGVtZW50TW9kdWxlIH0gZnJvbSAnLi9icy1lbGVtZW50L2JzRWxlbWVudC5tb2R1bGUnO1xyXG5cclxuaW1wb3J0IHsgRGFzaGJvYXJkQ29tcG9uZW50IH0gZnJvbSAnLi9kYXNoYm9hcmQuY29tcG9uZW50JztcclxuXHJcbmltcG9ydCB7VG9wTmF2Q29tcG9uZW50fSBmcm9tICcuLi9zaGFyZWQvaW5kZXgnO1xyXG5pbXBvcnQgeyBTaWRlYmFyQ29tcG9uZW50IH0gZnJvbSAnLi4vc2hhcmVkL2luZGV4JztcclxuaW1wb3J0IHsgRGV2U2V0dXBNb2R1bGUgfSBmcm9tICcuL2Rldi1zZXR1cC9kZXZTZXR1cC5tb2R1bGUnO1xyXG5pbXBvcnQgeyBGb3Jtc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcclxuXHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gICAgaW1wb3J0czogW1xyXG4gICAgICAgIENvbW1vbk1vZHVsZSxcclxuICAgIFx0Um91dGVyTW9kdWxlLFxyXG4gICAgXHREcm9wZG93bk1vZHVsZSxcclxuICAgICAgICBNb2RhbE1vZHVsZSxcclxuICAgIFx0SG9tZU1vZHVsZSxcclxuICAgICAgICBDaGFydE1vZHVsZSxcclxuICAgICAgICBUYWJsZU1vZHVsZSxcclxuICAgICAgICBGb3JtTW9kdWxlLFxyXG4gICAgICAgIEdyaWRNb2R1bGUsXHJcbiAgICBcdEJTQ29tcG9uZW50TW9kdWxlLFxyXG4gICAgICAgIEJTRWxlbWVudE1vZHVsZSxcclxuICAgICAgRG9jdW1lbnRhdGlvbk1vZHVsZSxcclxuICAgICAgICBEZXZTZXR1cE1vZHVsZSxcclxuICAgICAgICBGb3Jtc01vZHVsZVxyXG4gICAgXSxcclxuICAgIGRlY2xhcmF0aW9uczogW0Rhc2hib2FyZENvbXBvbmVudCwgVG9wTmF2Q29tcG9uZW50LCBTaWRlYmFyQ29tcG9uZW50XSxcclxuICAgIGV4cG9ydHM6IFtEYXNoYm9hcmRDb21wb25lbnQsIFRvcE5hdkNvbXBvbmVudCwgU2lkZWJhckNvbXBvbmVudF1cclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBEYXNoYm9hcmRNb2R1bGUgeyB9XHJcbiJdfQ==
