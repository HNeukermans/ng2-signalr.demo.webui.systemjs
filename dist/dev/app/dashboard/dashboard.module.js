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
                devSetup_module_1.DevSetupModule
            ],
            declarations: [dashboard_component_1.DashboardComponent, index_1.TopNavComponent, index_2.SidebarComponent],
            exports: [dashboard_component_1.DashboardComponent, index_1.TopNavComponent, index_2.SidebarComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], DashboardModule);
    return DashboardModule;
}());
exports.DashboardModule = DashboardModule;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9kYXNoYm9hcmQvZGFzaGJvYXJkLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEscUJBQXlCLGVBQWUsQ0FBQyxDQUFBO0FBQ3pDLHVCQUE2QixpQkFBaUIsQ0FBQyxDQUFBO0FBQy9DLHVCQUE2QixpQkFBaUIsQ0FBQyxDQUFBO0FBQy9DLDhCQUErQiw2QkFBNkIsQ0FBQyxDQUFBO0FBQzdELDhCQUE0Qiw2QkFBNkIsQ0FBQyxDQUFBO0FBRTFELDRCQUEyQixvQkFBb0IsQ0FBQyxDQUFBO0FBQ2hELDZCQUE0Qix1QkFBdUIsQ0FBQyxDQUFBO0FBQ3BELHFDQUFvQyxzQ0FBc0MsQ0FBQyxDQUFBO0FBQzNFLDZCQUE0Qix1QkFBdUIsQ0FBQyxDQUFBO0FBQ3BELDZCQUEyQixzQkFBc0IsQ0FBQyxDQUFBO0FBQ2xELDRCQUEyQixvQkFBb0IsQ0FBQyxDQUFBO0FBQ2hELG1DQUFrQyxtQ0FBbUMsQ0FBQyxDQUFBO0FBQ3RFLGlDQUFnQywrQkFBK0IsQ0FBQyxDQUFBO0FBRWhFLG9DQUFtQyx1QkFBdUIsQ0FBQyxDQUFBO0FBRTNELHNCQUE4QixpQkFBaUIsQ0FBQyxDQUFBO0FBQ2hELHNCQUErQixpQkFBaUIsQ0FBQyxDQUFBO0FBQ2pELGdDQUErQiw2QkFBNkIsQ0FBQyxDQUFBO0FBdUI3RDtJQUFBO0lBQStCLENBQUM7SUFwQmhDO1FBQUMsZUFBUSxDQUFDO1lBQ04sT0FBTyxFQUFFO2dCQUNMLHFCQUFZO2dCQUNmLHFCQUFZO2dCQUNaLDhCQUFjO2dCQUNYLDJCQUFXO2dCQUNkLHdCQUFVO2dCQUNQLDBCQUFXO2dCQUNYLDBCQUFXO2dCQUNYLHlCQUFVO2dCQUNWLHdCQUFVO2dCQUNiLHNDQUFpQjtnQkFDZCxrQ0FBZTtnQkFDakIsMENBQW1CO2dCQUNqQixnQ0FBYzthQUNqQjtZQUNELFlBQVksRUFBRSxDQUFDLHdDQUFrQixFQUFFLHVCQUFlLEVBQUUsd0JBQWdCLENBQUM7WUFDckUsT0FBTyxFQUFFLENBQUMsd0NBQWtCLEVBQUUsdUJBQWUsRUFBRSx3QkFBZ0IsQ0FBQztTQUNuRSxDQUFDOzt1QkFBQTtJQUU2QixzQkFBQztBQUFELENBQS9CLEFBQWdDLElBQUE7QUFBbkIsdUJBQWUsa0JBQUksQ0FBQSIsImZpbGUiOiJhcHAvZGFzaGJvYXJkL2Rhc2hib2FyZC5tb2R1bGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IFJvdXRlck1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBEcm9wZG93bk1vZHVsZSB9IGZyb20gJ25nMi1ib290c3RyYXAvbmcyLWJvb3RzdHJhcCc7XG5pbXBvcnQgeyBNb2RhbE1vZHVsZSB9IGZyb20gJ25nMi1ib290c3RyYXAvbmcyLWJvb3RzdHJhcCc7XG5cbmltcG9ydCB7IEhvbWVNb2R1bGUgfSBmcm9tICcuL2hvbWUvaG9tZS5tb2R1bGUnO1xuaW1wb3J0IHsgQ2hhcnRNb2R1bGUgfSBmcm9tICcuL2NoYXJ0cy9jaGFydC5tb2R1bGUnO1xuaW1wb3J0IHsgRG9jdW1lbnRhdGlvbk1vZHVsZSB9IGZyb20gJy4vZG9jdW1lbnRhdGlvbi9kb2N1bWVudGF0aW9uLm1vZHVsZSc7XG5pbXBvcnQgeyBUYWJsZU1vZHVsZSB9IGZyb20gJy4vdGFibGVzL3RhYmxlLm1vZHVsZSc7XG5pbXBvcnQgeyBGb3JtTW9kdWxlIH0gZnJvbSAnLi9mb3Jtcy9mb3Jtcy5tb2R1bGUnO1xuaW1wb3J0IHsgR3JpZE1vZHVsZSB9IGZyb20gJy4vZ3JpZC9ncmlkLm1vZHVsZSc7XG5pbXBvcnQgeyBCU0NvbXBvbmVudE1vZHVsZSB9IGZyb20gJy4vYnMtY29tcG9uZW50L2JzQ29tcG9uZW50Lm1vZHVsZSc7XG5pbXBvcnQgeyBCU0VsZW1lbnRNb2R1bGUgfSBmcm9tICcuL2JzLWVsZW1lbnQvYnNFbGVtZW50Lm1vZHVsZSc7XG5cbmltcG9ydCB7IERhc2hib2FyZENvbXBvbmVudCB9IGZyb20gJy4vZGFzaGJvYXJkLmNvbXBvbmVudCc7XG5cbmltcG9ydCB7VG9wTmF2Q29tcG9uZW50fSBmcm9tICcuLi9zaGFyZWQvaW5kZXgnO1xuaW1wb3J0IHtTaWRlYmFyQ29tcG9uZW50fSBmcm9tICcuLi9zaGFyZWQvaW5kZXgnO1xuaW1wb3J0IHsgRGV2U2V0dXBNb2R1bGUgfSBmcm9tICcuL2Rldi1zZXR1cC9kZXZTZXR1cC5tb2R1bGUnO1xuXG5cbkBOZ01vZHVsZSh7XG4gICAgaW1wb3J0czogW1xuICAgICAgICBDb21tb25Nb2R1bGUsXG4gICAgXHRSb3V0ZXJNb2R1bGUsXG4gICAgXHREcm9wZG93bk1vZHVsZSxcbiAgICAgICAgTW9kYWxNb2R1bGUsXG4gICAgXHRIb21lTW9kdWxlLFxuICAgICAgICBDaGFydE1vZHVsZSxcbiAgICAgICAgVGFibGVNb2R1bGUsXG4gICAgICAgIEZvcm1Nb2R1bGUsXG4gICAgICAgIEdyaWRNb2R1bGUsXG4gICAgXHRCU0NvbXBvbmVudE1vZHVsZSxcbiAgICAgICAgQlNFbGVtZW50TW9kdWxlLFxuICAgICAgRG9jdW1lbnRhdGlvbk1vZHVsZSxcbiAgICAgICAgRGV2U2V0dXBNb2R1bGVcbiAgICBdLFxuICAgIGRlY2xhcmF0aW9uczogW0Rhc2hib2FyZENvbXBvbmVudCwgVG9wTmF2Q29tcG9uZW50LCBTaWRlYmFyQ29tcG9uZW50XSxcbiAgICBleHBvcnRzOiBbRGFzaGJvYXJkQ29tcG9uZW50LCBUb3BOYXZDb21wb25lbnQsIFNpZGViYXJDb21wb25lbnRdXG59KVxuXG5leHBvcnQgY2xhc3MgRGFzaGJvYXJkTW9kdWxlIHsgfVxuIl19
