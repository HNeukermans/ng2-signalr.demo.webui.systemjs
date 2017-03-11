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
var ConnectionResolver = (function () {
    function ConnectionResolver(_signalR) {
        this._signalR = _signalR;
    }
    ConnectionResolver.prototype.resolve = function () {
        console.log('ConnectionResolver. Resolving...');
        var options = {};
        return this._signalR.connect(options);
    };
    ConnectionResolver = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [ng2_signalr_1.SignalR])
    ], ConnectionResolver);
    return ConnectionResolver;
}());
exports.ConnectionResolver = ConnectionResolver;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9kYXNoYm9hcmQvZG9jdW1lbnRhdGlvbi9kb2N1bWVudGF0aW9uLnJvdXRlLnJlc29sdmVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFDQSw0QkFBOEQsYUFBYSxDQUFDLENBQUE7QUFDNUUscUJBQTJCLGVBQWUsQ0FBQyxDQUFBO0FBRzNDO0lBRUUsNEJBQW9CLFFBQWlCO1FBQWpCLGFBQVEsR0FBUixRQUFRLENBQVM7SUFBSSxDQUFDO0lBRTFDLG9DQUFPLEdBQVA7UUFDRSxPQUFPLENBQUMsR0FBRyxDQUFDLGtDQUFrQyxDQUFDLENBQUM7UUFDaEQsSUFBSSxPQUFPLEdBQXVCLEVBQUUsQ0FBQztRQUNyQyxNQUFNLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDeEMsQ0FBQztJQVRIO1FBQUMsaUJBQVUsRUFBRTs7MEJBQUE7SUFVYix5QkFBQztBQUFELENBVEEsQUFTQyxJQUFBO0FBVFksMEJBQWtCLHFCQVM5QixDQUFBIiwiZmlsZSI6ImFwcC9kYXNoYm9hcmQvZG9jdW1lbnRhdGlvbi9kb2N1bWVudGF0aW9uLnJvdXRlLnJlc29sdmVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUmVzb2x2ZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBTaWduYWxSLCBTaWduYWxSQ29ubmVjdGlvbiwgQ29ubmVjdGlvbk9wdGlvbnMgfSBmcm9tICduZzItc2lnbmFscic7XG5pbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBDb25uZWN0aW9uUmVzb2x2ZXIgaW1wbGVtZW50cyBSZXNvbHZlPFNpZ25hbFJDb25uZWN0aW9uPiB7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBfc2lnbmFsUjogU2lnbmFsUikgeyB9XG5cbiAgcmVzb2x2ZSgpIHtcbiAgICBjb25zb2xlLmxvZygnQ29ubmVjdGlvblJlc29sdmVyLiBSZXNvbHZpbmcuLi4nKTtcbiAgICBsZXQgb3B0aW9ucyA6IENvbm5lY3Rpb25PcHRpb25zID0ge307XG4gICAgcmV0dXJuIHRoaXMuX3NpZ25hbFIuY29ubmVjdChvcHRpb25zKTtcbiAgfVxufVxuIl19
