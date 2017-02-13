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
var chart_component_1 = require('./chart.component');
var ChartModule = (function () {
    function ChartModule() {
    }
    ChartModule = __decorate([
        core_1.NgModule({
            imports: [router_1.RouterModule],
            declarations: [chart_component_1.ChartComponent],
            exports: [chart_component_1.ChartComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], ChartModule);
    return ChartModule;
}());
exports.ChartModule = ChartModule;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9kYXNoYm9hcmQvY2hhcnRzL2NoYXJ0Lm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEscUJBQXlCLGVBQWUsQ0FBQyxDQUFBO0FBQ3pDLHVCQUE2QixpQkFBaUIsQ0FBQyxDQUFBO0FBRS9DLGdDQUErQixtQkFBbUIsQ0FBQyxDQUFBO0FBUW5EO0lBQUE7SUFBMkIsQ0FBQztJQU41QjtRQUFDLGVBQVEsQ0FBQztZQUNOLE9BQU8sRUFBRSxDQUFDLHFCQUFZLENBQUM7WUFDdkIsWUFBWSxFQUFFLENBQUMsZ0NBQWMsQ0FBQztZQUM5QixPQUFPLEVBQUUsQ0FBQyxnQ0FBYyxDQUFDO1NBQzVCLENBQUM7O21CQUFBO0lBRXlCLGtCQUFDO0FBQUQsQ0FBM0IsQUFBNEIsSUFBQTtBQUFmLG1CQUFXLGNBQUksQ0FBQSIsImZpbGUiOiJhcHAvZGFzaGJvYXJkL2NoYXJ0cy9jaGFydC5tb2R1bGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBSb3V0ZXJNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xyXG5cclxuaW1wb3J0IHsgQ2hhcnRDb21wb25lbnQgfSBmcm9tICcuL2NoYXJ0LmNvbXBvbmVudCc7XHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gICAgaW1wb3J0czogW1JvdXRlck1vZHVsZV0sXHJcbiAgICBkZWNsYXJhdGlvbnM6IFtDaGFydENvbXBvbmVudF0sXHJcbiAgICBleHBvcnRzOiBbQ2hhcnRDb21wb25lbnRdXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgQ2hhcnRNb2R1bGUgeyB9XHJcbiJdfQ==
