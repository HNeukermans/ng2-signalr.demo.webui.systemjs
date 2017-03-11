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
var platform_browser_1 = require('@angular/platform-browser');
var common_1 = require('@angular/common');
var router_1 = require('@angular/router');
var http_1 = require('@angular/http');
var app_component_1 = require('./app.component');
var app_routes_1 = require('./app.routes');
var dashboard_module_1 = require('./dashboard/dashboard.module');
var shared_module_1 = require('./shared/shared.module');
var ng2_signalr_1 = require('ng2-signalr');
var signalrConfiguration = new ng2_signalr_1.SignalRConfiguration();
signalrConfiguration.hubName = 'Ng2SignalRHub';
signalrConfiguration.logging = true;
signalrConfiguration.url = 'http://ng2-signalr-backend.azurewebsites.net/';
signalrConfiguration.qs = { user: 'donald' };
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [
                platform_browser_1.BrowserModule,
                http_1.HttpModule,
                router_1.RouterModule.forRoot(app_routes_1.routes),
                dashboard_module_1.DashboardModule,
                shared_module_1.SharedModule.forRoot(),
                ng2_signalr_1.SignalRModule.configure(signalrConfiguration)
            ],
            declarations: [app_component_1.AppComponent],
            providers: [{
                    provide: common_1.APP_BASE_HREF,
                    useValue: '/'
                }],
            bootstrap: [app_component_1.AppComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9hcHAubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBeUIsZUFBZSxDQUFDLENBQUE7QUFDekMsaUNBQThCLDJCQUEyQixDQUFDLENBQUE7QUFDMUQsdUJBQThCLGlCQUFpQixDQUFDLENBQUE7QUFDaEQsdUJBQTZCLGlCQUFpQixDQUFDLENBQUE7QUFDL0MscUJBQTJCLGVBQWUsQ0FBQyxDQUFBO0FBQzNDLDhCQUE2QixpQkFBaUIsQ0FBQyxDQUFBO0FBQy9DLDJCQUF1QixjQUFjLENBQUMsQ0FBQTtBQUV0QyxpQ0FBZ0MsOEJBQThCLENBQUMsQ0FBQTtBQUMvRCw4QkFBNkIsd0JBQXdCLENBQUMsQ0FBQTtBQUN0RCw0QkFBb0QsYUFBYSxDQUFDLENBQUE7QUFFbEUsSUFBSSxvQkFBb0IsR0FBRyxJQUFJLGtDQUFvQixFQUFFLENBQUM7QUFDdEQsb0JBQW9CLENBQUMsT0FBTyxHQUFHLGVBQWUsQ0FBQztBQUMvQyxvQkFBb0IsQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO0FBQ3BDLG9CQUFvQixDQUFDLEdBQUcsR0FBSywrQ0FBK0MsQ0FBQztBQUM3RSxvQkFBb0IsQ0FBQyxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFFLENBQUM7QUFxQjdDO0lBQUE7SUFBeUIsQ0FBQztJQWxCMUI7UUFBQyxlQUFRLENBQUM7WUFDVCxPQUFPLEVBQUU7Z0JBQ1IsZ0NBQWE7Z0JBQ2IsaUJBQVU7Z0JBQ1YscUJBQVksQ0FBQyxPQUFPLENBQUMsbUJBQU0sQ0FBQztnQkFDNUIsa0NBQWU7Z0JBQ2IsNEJBQVksQ0FBQyxPQUFPLEVBQUU7Z0JBQ3RCLDJCQUFhLENBQUMsU0FBUyxDQUFDLG9CQUFvQixDQUFDO2FBQy9DO1lBQ0QsWUFBWSxFQUFFLENBQUMsNEJBQVksQ0FBQztZQUM1QixTQUFTLEVBQUUsQ0FBQztvQkFDWCxPQUFPLEVBQUUsc0JBQWE7b0JBQ3RCLFFBQVEsRUFBRSxpQkFBaUI7aUJBQzNCLENBQUM7WUFDRixTQUFTLEVBQUUsQ0FBQyw0QkFBWSxDQUFDO1NBRXpCLENBQUM7O2lCQUFBO0lBRXVCLGdCQUFDO0FBQUQsQ0FBekIsQUFBMEIsSUFBQTtBQUFiLGlCQUFTLFlBQUksQ0FBQSIsImZpbGUiOiJhcHAvYXBwLm1vZHVsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBCcm93c2VyTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlcic7XG5pbXBvcnQgeyBBUFBfQkFTRV9IUkVGIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IFJvdXRlck1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBIdHRwTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvaHR0cCc7XG5pbXBvcnQgeyBBcHBDb21wb25lbnQgfSBmcm9tICcuL2FwcC5jb21wb25lbnQnO1xuaW1wb3J0IHsgcm91dGVzIH0gZnJvbSAnLi9hcHAucm91dGVzJztcblxuaW1wb3J0IHsgRGFzaGJvYXJkTW9kdWxlIH0gZnJvbSAnLi9kYXNoYm9hcmQvZGFzaGJvYXJkLm1vZHVsZSc7XG5pbXBvcnQgeyBTaGFyZWRNb2R1bGUgfSBmcm9tICcuL3NoYXJlZC9zaGFyZWQubW9kdWxlJztcbmltcG9ydCB7IFNpZ25hbFJNb2R1bGUsIFNpZ25hbFJDb25maWd1cmF0aW9uIH0gZnJvbSAnbmcyLXNpZ25hbHInO1xuXG5sZXQgc2lnbmFsckNvbmZpZ3VyYXRpb24gPSBuZXcgU2lnbmFsUkNvbmZpZ3VyYXRpb24oKTtcbnNpZ25hbHJDb25maWd1cmF0aW9uLmh1Yk5hbWUgPSAnTmcyU2lnbmFsUkh1Yic7XG5zaWduYWxyQ29uZmlndXJhdGlvbi5sb2dnaW5nID0gdHJ1ZTtcbnNpZ25hbHJDb25maWd1cmF0aW9uLnVybCA9ICAgJ2h0dHA6Ly9uZzItc2lnbmFsci1iYWNrZW5kLmF6dXJld2Vic2l0ZXMubmV0Lyc7IC8vJ2h0dHA6Ly9sb2NhbGhvc3Q6MTA3NzIvJzsvL1xuc2lnbmFsckNvbmZpZ3VyYXRpb24ucXMgPSB7IHVzZXI6ICdkb25hbGQnIH07XG5cblxuQE5nTW9kdWxlKHtcblx0aW1wb3J0czogW1xuXHRcdEJyb3dzZXJNb2R1bGUsXG5cdFx0SHR0cE1vZHVsZSxcblx0XHRSb3V0ZXJNb2R1bGUuZm9yUm9vdChyb3V0ZXMpLFxuXHRcdERhc2hib2FyZE1vZHVsZSxcbiAgICBTaGFyZWRNb2R1bGUuZm9yUm9vdCgpLFxuICAgIFNpZ25hbFJNb2R1bGUuY29uZmlndXJlKHNpZ25hbHJDb25maWd1cmF0aW9uKVxuXHRdLFxuXHRkZWNsYXJhdGlvbnM6IFtBcHBDb21wb25lbnRdLFxuXHRwcm92aWRlcnM6IFt7XG5cdFx0cHJvdmlkZTogQVBQX0JBU0VfSFJFRixcblx0XHR1c2VWYWx1ZTogJzwlPSBBUFBfQkFTRSAlPidcblx0fV0sXG5cdGJvb3RzdHJhcDogW0FwcENvbXBvbmVudF1cblxufSlcblxuZXhwb3J0IGNsYXNzIEFwcE1vZHVsZSB7IH1cbiJdfQ==
