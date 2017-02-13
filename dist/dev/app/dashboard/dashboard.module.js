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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9kYXNoYm9hcmQvZGFzaGJvYXJkLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEscUJBQXlCLGVBQWUsQ0FBQyxDQUFBO0FBQ3pDLHVCQUE2QixpQkFBaUIsQ0FBQyxDQUFBO0FBQy9DLHVCQUE2QixpQkFBaUIsQ0FBQyxDQUFBO0FBQy9DLDhCQUErQiw2QkFBNkIsQ0FBQyxDQUFBO0FBQzdELDhCQUE0Qiw2QkFBNkIsQ0FBQyxDQUFBO0FBRTFELDRCQUEyQixvQkFBb0IsQ0FBQyxDQUFBO0FBQ2hELDZCQUE0Qix1QkFBdUIsQ0FBQyxDQUFBO0FBQ3BELHFDQUFvQyxzQ0FBc0MsQ0FBQyxDQUFBO0FBQzNFLDZCQUE0Qix1QkFBdUIsQ0FBQyxDQUFBO0FBQ3BELDZCQUEyQixzQkFBc0IsQ0FBQyxDQUFBO0FBQ2xELDRCQUEyQixvQkFBb0IsQ0FBQyxDQUFBO0FBQ2hELG1DQUFrQyxtQ0FBbUMsQ0FBQyxDQUFBO0FBQ3RFLGlDQUFnQywrQkFBK0IsQ0FBQyxDQUFBO0FBRWhFLG9DQUFtQyx1QkFBdUIsQ0FBQyxDQUFBO0FBRTNELHNCQUE4QixpQkFBaUIsQ0FBQyxDQUFBO0FBQ2hELHNCQUFpQyxpQkFBaUIsQ0FBQyxDQUFBO0FBQ25ELGdDQUErQiw2QkFBNkIsQ0FBQyxDQUFBO0FBQzdELHNCQUE0QixnQkFBZ0IsQ0FBQyxDQUFBO0FBd0I3QztJQUFBO0lBQStCLENBQUM7SUFyQmhDO1FBQUMsZUFBUSxDQUFDO1lBQ04sT0FBTyxFQUFFO2dCQUNMLHFCQUFZO2dCQUNmLHFCQUFZO2dCQUNaLDhCQUFjO2dCQUNYLDJCQUFXO2dCQUNkLHdCQUFVO2dCQUNQLDBCQUFXO2dCQUNYLDBCQUFXO2dCQUNYLHlCQUFVO2dCQUNWLHdCQUFVO2dCQUNiLHNDQUFpQjtnQkFDZCxrQ0FBZTtnQkFDakIsMENBQW1CO2dCQUNqQixnQ0FBYztnQkFDZCxtQkFBVzthQUNkO1lBQ0QsWUFBWSxFQUFFLENBQUMsd0NBQWtCLEVBQUUsdUJBQWUsRUFBRSx3QkFBZ0IsQ0FBQztZQUNyRSxPQUFPLEVBQUUsQ0FBQyx3Q0FBa0IsRUFBRSx1QkFBZSxFQUFFLHdCQUFnQixDQUFDO1NBQ25FLENBQUM7O3VCQUFBO0lBRTZCLHNCQUFDO0FBQUQsQ0FBL0IsQUFBZ0MsSUFBQTtBQUFuQix1QkFBZSxrQkFBSSxDQUFBIiwiZmlsZSI6ImFwcC9kYXNoYm9hcmQvZGFzaGJvYXJkLm1vZHVsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgUm91dGVyTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IERyb3Bkb3duTW9kdWxlIH0gZnJvbSAnbmcyLWJvb3RzdHJhcC9uZzItYm9vdHN0cmFwJztcbmltcG9ydCB7IE1vZGFsTW9kdWxlIH0gZnJvbSAnbmcyLWJvb3RzdHJhcC9uZzItYm9vdHN0cmFwJztcblxuaW1wb3J0IHsgSG9tZU1vZHVsZSB9IGZyb20gJy4vaG9tZS9ob21lLm1vZHVsZSc7XG5pbXBvcnQgeyBDaGFydE1vZHVsZSB9IGZyb20gJy4vY2hhcnRzL2NoYXJ0Lm1vZHVsZSc7XG5pbXBvcnQgeyBEb2N1bWVudGF0aW9uTW9kdWxlIH0gZnJvbSAnLi9kb2N1bWVudGF0aW9uL2RvY3VtZW50YXRpb24ubW9kdWxlJztcbmltcG9ydCB7IFRhYmxlTW9kdWxlIH0gZnJvbSAnLi90YWJsZXMvdGFibGUubW9kdWxlJztcbmltcG9ydCB7IEZvcm1Nb2R1bGUgfSBmcm9tICcuL2Zvcm1zL2Zvcm1zLm1vZHVsZSc7XG5pbXBvcnQgeyBHcmlkTW9kdWxlIH0gZnJvbSAnLi9ncmlkL2dyaWQubW9kdWxlJztcbmltcG9ydCB7IEJTQ29tcG9uZW50TW9kdWxlIH0gZnJvbSAnLi9icy1jb21wb25lbnQvYnNDb21wb25lbnQubW9kdWxlJztcbmltcG9ydCB7IEJTRWxlbWVudE1vZHVsZSB9IGZyb20gJy4vYnMtZWxlbWVudC9ic0VsZW1lbnQubW9kdWxlJztcblxuaW1wb3J0IHsgRGFzaGJvYXJkQ29tcG9uZW50IH0gZnJvbSAnLi9kYXNoYm9hcmQuY29tcG9uZW50JztcblxuaW1wb3J0IHtUb3BOYXZDb21wb25lbnR9IGZyb20gJy4uL3NoYXJlZC9pbmRleCc7XG5pbXBvcnQgeyBTaWRlYmFyQ29tcG9uZW50IH0gZnJvbSAnLi4vc2hhcmVkL2luZGV4JztcbmltcG9ydCB7IERldlNldHVwTW9kdWxlIH0gZnJvbSAnLi9kZXYtc2V0dXAvZGV2U2V0dXAubW9kdWxlJztcbmltcG9ydCB7IEZvcm1zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuXG5cbkBOZ01vZHVsZSh7XG4gICAgaW1wb3J0czogW1xuICAgICAgICBDb21tb25Nb2R1bGUsXG4gICAgXHRSb3V0ZXJNb2R1bGUsXG4gICAgXHREcm9wZG93bk1vZHVsZSxcbiAgICAgICAgTW9kYWxNb2R1bGUsXG4gICAgXHRIb21lTW9kdWxlLFxuICAgICAgICBDaGFydE1vZHVsZSxcbiAgICAgICAgVGFibGVNb2R1bGUsXG4gICAgICAgIEZvcm1Nb2R1bGUsXG4gICAgICAgIEdyaWRNb2R1bGUsXG4gICAgXHRCU0NvbXBvbmVudE1vZHVsZSxcbiAgICAgICAgQlNFbGVtZW50TW9kdWxlLFxuICAgICAgRG9jdW1lbnRhdGlvbk1vZHVsZSxcbiAgICAgICAgRGV2U2V0dXBNb2R1bGUsXG4gICAgICAgIEZvcm1zTW9kdWxlXG4gICAgXSxcbiAgICBkZWNsYXJhdGlvbnM6IFtEYXNoYm9hcmRDb21wb25lbnQsIFRvcE5hdkNvbXBvbmVudCwgU2lkZWJhckNvbXBvbmVudF0sXG4gICAgZXhwb3J0czogW0Rhc2hib2FyZENvbXBvbmVudCwgVG9wTmF2Q29tcG9uZW50LCBTaWRlYmFyQ29tcG9uZW50XVxufSlcblxuZXhwb3J0IGNsYXNzIERhc2hib2FyZE1vZHVsZSB7IH1cbiJdfQ==
