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
var login_module_1 = require('./login/login.module');
var signup_module_1 = require('./signup/signup.module');
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
                login_module_1.LoginModule,
                signup_module_1.SignupModule,
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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9hcHAubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBeUIsZUFBZSxDQUFDLENBQUE7QUFDekMsaUNBQThCLDJCQUEyQixDQUFDLENBQUE7QUFDMUQsdUJBQThCLGlCQUFpQixDQUFDLENBQUE7QUFDaEQsdUJBQTZCLGlCQUFpQixDQUFDLENBQUE7QUFDL0MscUJBQTJCLGVBQWUsQ0FBQyxDQUFBO0FBQzNDLDhCQUE2QixpQkFBaUIsQ0FBQyxDQUFBO0FBQy9DLDJCQUF1QixjQUFjLENBQUMsQ0FBQTtBQUV0Qyw2QkFBNEIsc0JBQXNCLENBQUMsQ0FBQTtBQUNuRCw4QkFBNkIsd0JBQXdCLENBQUMsQ0FBQTtBQUN0RCxpQ0FBZ0MsOEJBQThCLENBQUMsQ0FBQTtBQUMvRCw4QkFBNkIsd0JBQXdCLENBQUMsQ0FBQTtBQUN0RCw0QkFBb0QsYUFBYSxDQUFDLENBQUE7QUFFbEUsSUFBSSxvQkFBb0IsR0FBRyxJQUFJLGtDQUFvQixFQUFFLENBQUM7QUFDdEQsb0JBQW9CLENBQUMsT0FBTyxHQUFHLGVBQWUsQ0FBQztBQUMvQyxvQkFBb0IsQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO0FBQ3BDLG9CQUFvQixDQUFDLEdBQUcsR0FBRywrQ0FBK0MsQ0FBQztBQUMzRSxvQkFBb0IsQ0FBQyxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFFLENBQUM7QUF1QjdDO0lBQUE7SUFBeUIsQ0FBQztJQXBCMUI7UUFBQyxlQUFRLENBQUM7WUFDVCxPQUFPLEVBQUU7Z0JBQ1IsZ0NBQWE7Z0JBQ2IsaUJBQVU7Z0JBQ1YscUJBQVksQ0FBQyxPQUFPLENBQUMsbUJBQU0sQ0FBQztnQkFDNUIsMEJBQVc7Z0JBQ1gsNEJBQVk7Z0JBQ1osa0NBQWU7Z0JBQ2IsNEJBQVksQ0FBQyxPQUFPLEVBQUU7Z0JBQ3RCLDJCQUFhLENBQUMsU0FBUyxDQUFDLG9CQUFvQixDQUFDO2FBQy9DO1lBQ0QsWUFBWSxFQUFFLENBQUMsNEJBQVksQ0FBQztZQUM1QixTQUFTLEVBQUUsQ0FBQztvQkFDWCxPQUFPLEVBQUUsc0JBQWE7b0JBQ3RCLFFBQVEsRUFBRSxpQkFBaUI7aUJBQzNCLENBQUM7WUFDRixTQUFTLEVBQUUsQ0FBQyw0QkFBWSxDQUFDO1NBRXpCLENBQUM7O2lCQUFBO0lBRXVCLGdCQUFDO0FBQUQsQ0FBekIsQUFBMEIsSUFBQTtBQUFiLGlCQUFTLFlBQUksQ0FBQSIsImZpbGUiOiJhcHAvYXBwLm1vZHVsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEJyb3dzZXJNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyJztcclxuaW1wb3J0IHsgQVBQX0JBU0VfSFJFRiB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcbmltcG9ydCB7IFJvdXRlck1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XHJcbmltcG9ydCB7IEh0dHBNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9odHRwJztcclxuaW1wb3J0IHsgQXBwQ29tcG9uZW50IH0gZnJvbSAnLi9hcHAuY29tcG9uZW50JztcclxuaW1wb3J0IHsgcm91dGVzIH0gZnJvbSAnLi9hcHAucm91dGVzJztcclxuXHJcbmltcG9ydCB7IExvZ2luTW9kdWxlIH0gZnJvbSAnLi9sb2dpbi9sb2dpbi5tb2R1bGUnO1xyXG5pbXBvcnQgeyBTaWdudXBNb2R1bGUgfSBmcm9tICcuL3NpZ251cC9zaWdudXAubW9kdWxlJztcclxuaW1wb3J0IHsgRGFzaGJvYXJkTW9kdWxlIH0gZnJvbSAnLi9kYXNoYm9hcmQvZGFzaGJvYXJkLm1vZHVsZSc7XHJcbmltcG9ydCB7IFNoYXJlZE1vZHVsZSB9IGZyb20gJy4vc2hhcmVkL3NoYXJlZC5tb2R1bGUnO1xyXG5pbXBvcnQgeyBTaWduYWxSTW9kdWxlLCBTaWduYWxSQ29uZmlndXJhdGlvbiB9IGZyb20gJ25nMi1zaWduYWxyJztcclxuXHJcbmxldCBzaWduYWxyQ29uZmlndXJhdGlvbiA9IG5ldyBTaWduYWxSQ29uZmlndXJhdGlvbigpO1xyXG5zaWduYWxyQ29uZmlndXJhdGlvbi5odWJOYW1lID0gJ05nMlNpZ25hbFJIdWInO1xyXG5zaWduYWxyQ29uZmlndXJhdGlvbi5sb2dnaW5nID0gdHJ1ZTtcclxuc2lnbmFsckNvbmZpZ3VyYXRpb24udXJsID0gJ2h0dHA6Ly9uZzItc2lnbmFsci1iYWNrZW5kLmF6dXJld2Vic2l0ZXMubmV0Lyc7XHJcbnNpZ25hbHJDb25maWd1cmF0aW9uLnFzID0geyB1c2VyOiAnZG9uYWxkJyB9O1xyXG5cclxuXHJcbkBOZ01vZHVsZSh7XHJcblx0aW1wb3J0czogW1xyXG5cdFx0QnJvd3Nlck1vZHVsZSxcclxuXHRcdEh0dHBNb2R1bGUsXHJcblx0XHRSb3V0ZXJNb2R1bGUuZm9yUm9vdChyb3V0ZXMpLFxyXG5cdFx0TG9naW5Nb2R1bGUsXHJcblx0XHRTaWdudXBNb2R1bGUsXHJcblx0XHREYXNoYm9hcmRNb2R1bGUsXHJcbiAgICBTaGFyZWRNb2R1bGUuZm9yUm9vdCgpLFxyXG4gICAgU2lnbmFsUk1vZHVsZS5jb25maWd1cmUoc2lnbmFsckNvbmZpZ3VyYXRpb24pXHJcblx0XSxcclxuXHRkZWNsYXJhdGlvbnM6IFtBcHBDb21wb25lbnRdLFxyXG5cdHByb3ZpZGVyczogW3tcclxuXHRcdHByb3ZpZGU6IEFQUF9CQVNFX0hSRUYsXHJcblx0XHR1c2VWYWx1ZTogJzwlPSBBUFBfQkFTRSAlPidcclxuXHR9XSxcclxuXHRib290c3RyYXA6IFtBcHBDb21wb25lbnRdXHJcblxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIEFwcE1vZHVsZSB7IH1cclxuIl19
