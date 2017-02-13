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
var index_1 = require('./shared/index');
var AppComponent = (function () {
    function AppComponent(viewContainerRef) {
        this.viewContainerRef = viewContainerRef;
        console.log('Environment config', index_1.Config);
    }
    AppComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'sd-app',
            templateUrl: 'app.component.html',
        }), 
        __metadata('design:paramtypes', [core_1.ViewContainerRef])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9hcHAuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBNEMsZUFBZSxDQUFDLENBQUE7QUFDNUQsc0JBQXVCLGdCQUFnQixDQUFDLENBQUE7QUFZeEM7SUFFQyxzQkFBbUIsZ0JBQWlDO1FBRW5ELElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxnQkFBZ0IsQ0FBQztRQUN6QyxPQUFPLENBQUMsR0FBRyxDQUFDLG9CQUFvQixFQUFFLGNBQU0sQ0FBQyxDQUFDO0lBQzNDLENBQUM7SUFaRjtRQUFDLGdCQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsUUFBUSxFQUFFLFFBQVE7WUFDbEIsV0FBVyxFQUFFLG9CQUFvQjtTQUNsQyxDQUFDOztvQkFBQTtJQVNGLG1CQUFDO0FBQUQsQ0FQQSxBQU9DLElBQUE7QUFQWSxvQkFBWSxlQU94QixDQUFBIiwiZmlsZSI6ImFwcC9hcHAuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBWaWV3Q29udGFpbmVyUmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IENvbmZpZyB9IGZyb20gJy4vc2hhcmVkL2luZGV4JztcclxuXHJcbi8qKlxyXG4gKiBUaGlzIGNsYXNzIHJlcHJlc2VudHMgdGhlIG1haW4gYXBwbGljYXRpb24gY29tcG9uZW50LiBXaXRoaW4gdGhlIEBSb3V0ZXMgYW5ub3RhdGlvbiBpcyB0aGUgY29uZmlndXJhdGlvbiBvZiB0aGVcclxuICogYXBwbGljYXRpb25zIHJvdXRlcywgY29uZmlndXJpbmcgdGhlIHBhdGhzIGZvciB0aGUgbGF6eSBsb2FkZWQgY29tcG9uZW50cyAoSG9tZUNvbXBvbmVudCwgQWJvdXRDb21wb25lbnQpLlxyXG4gKi9cclxuQENvbXBvbmVudCh7XHJcbiAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcclxuICBzZWxlY3RvcjogJ3NkLWFwcCcsXHJcbiAgdGVtcGxhdGVVcmw6ICdhcHAuY29tcG9uZW50Lmh0bWwnLFxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIEFwcENvbXBvbmVudCB7XHJcblx0cHJpdmF0ZSB2aWV3Q29udGFpbmVyUmVmOiBWaWV3Q29udGFpbmVyUmVmO1xyXG5cdHB1YmxpYyBjb25zdHJ1Y3Rvcih2aWV3Q29udGFpbmVyUmVmOlZpZXdDb250YWluZXJSZWYpIHtcclxuXHRcdC8vIFlvdSBuZWVkIHRoaXMgc21hbGwgaGFjayBpbiBvcmRlciB0byBjYXRjaCBhcHBsaWNhdGlvbiByb290IHZpZXcgY29udGFpbmVyIHJlZlxyXG5cdFx0dGhpcy52aWV3Q29udGFpbmVyUmVmID0gdmlld0NvbnRhaW5lclJlZjtcclxuXHRcdGNvbnNvbGUubG9nKCdFbnZpcm9ubWVudCBjb25maWcnLCBDb25maWcpO1xyXG5cdH1cclxufVxyXG4iXX0=
