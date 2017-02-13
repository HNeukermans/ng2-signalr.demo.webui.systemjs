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
var ng2_signalr_1 = require('ng2-signalr');
var core_1 = require('@angular/core');
var rxjs_1 = require('rxjs');
var ConnectionResolver = (function () {
    function ConnectionResolver(_signalR) {
        this._signalR = _signalR;
    }
    ConnectionResolver.prototype.resolve = function () {
        console.log('Group ConnectionResolver. Resolving...');
        var connection1 = rxjs_1.Observable.fromPromise(this._signalR.connect());
        var connection2 = rxjs_1.Observable.fromPromise(this._signalR.connect());
        return rxjs_1.Observable.forkJoin([connection1, connection2]);
    };
    ConnectionResolver = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [ng2_signalr_1.SignalR])
    ], ConnectionResolver);
    return ConnectionResolver;
}());
exports.ConnectionResolver = ConnectionResolver;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9kYXNoYm9hcmQvYnMtZWxlbWVudC9ic0VsZW1lbnQucm91dGUucmVzb2x2ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUNBLDRCQUEyQyxhQUFhLENBQUMsQ0FBQTtBQUN6RCxxQkFBMkIsZUFBZSxDQUFDLENBQUE7QUFDM0MscUJBQTJCLE1BQU0sQ0FBQyxDQUFBO0FBR2xDO0lBRUUsNEJBQW9CLFFBQWlCO1FBQWpCLGFBQVEsR0FBUixRQUFRLENBQVM7SUFBSSxDQUFDO0lBRTFDLG9DQUFPLEdBQVA7UUFDRSxPQUFPLENBQUMsR0FBRyxDQUFDLHdDQUF3QyxDQUFDLENBQUM7UUFDdEQsSUFBSSxXQUFXLEdBQUcsaUJBQVUsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFDO1FBQ2xFLElBQUksV0FBVyxHQUFJLGlCQUFVLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsT0FBTyxFQUFFLENBQUMsQ0FBQztRQUVuRSxNQUFNLENBQUMsaUJBQVUsQ0FBQyxRQUFRLENBQUMsQ0FBQyxXQUFXLEVBQUUsV0FBVyxDQUFDLENBQUMsQ0FBQTtJQUN4RCxDQUFDO0lBWEg7UUFBQyxpQkFBVSxFQUFFOzswQkFBQTtJQVliLHlCQUFDO0FBQUQsQ0FYQSxBQVdDLElBQUE7QUFYWSwwQkFBa0IscUJBVzlCLENBQUEiLCJmaWxlIjoiYXBwL2Rhc2hib2FyZC9icy1lbGVtZW50L2JzRWxlbWVudC5yb3V0ZS5yZXNvbHZlci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFJlc29sdmUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xyXG5pbXBvcnQgeyBTaWduYWxSLCBTaWduYWxSQ29ubmVjdGlvbiB9IGZyb20gJ25nMi1zaWduYWxyJztcclxuaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBDb25uZWN0aW9uUmVzb2x2ZXIgaW1wbGVtZW50cyBSZXNvbHZlPFNpZ25hbFJDb25uZWN0aW9uPiB7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgX3NpZ25hbFI6IFNpZ25hbFIpIHsgfVxyXG5cclxuICByZXNvbHZlKCkge1xyXG4gICAgY29uc29sZS5sb2coJ0dyb3VwIENvbm5lY3Rpb25SZXNvbHZlci4gUmVzb2x2aW5nLi4uJyk7XHJcbiAgICBsZXQgY29ubmVjdGlvbjEgPSBPYnNlcnZhYmxlLmZyb21Qcm9taXNlKHRoaXMuX3NpZ25hbFIuY29ubmVjdCgpKTtcclxuICAgIGxldCBjb25uZWN0aW9uMiA9ICBPYnNlcnZhYmxlLmZyb21Qcm9taXNlKHRoaXMuX3NpZ25hbFIuY29ubmVjdCgpKTtcclxuXHJcbiAgICByZXR1cm4gT2JzZXJ2YWJsZS5mb3JrSm9pbihbY29ubmVjdGlvbjEsIGNvbm5lY3Rpb24yXSlcclxuICB9XHJcbn1cclxuIl19
