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
var ChatComponent = (function () {
    function ChatComponent() {
        this.message = '';
        this.onMessage = new core_1.EventEmitter();
        this.messages = [];
    }
    ChatComponent.prototype.send = function () {
        console.log('send');
        this.onMessage.emit(this.message);
        this.message = '';
    };
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], ChatComponent.prototype, "onMessage", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Array)
    ], ChatComponent.prototype, "messages", void 0);
    ChatComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'chat-cmp',
            templateUrl: 'chat.html'
        }), 
        __metadata('design:paramtypes', [])
    ], ChatComponent);
    return ChatComponent;
}());
exports.ChatComponent = ChatComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9zaGFyZWQvY2hhdC9jaGF0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBdUQsZUFBZSxDQUFDLENBQUE7QUFRdkU7SUFBQTtRQUVJLFlBQU8sR0FBVyxFQUFFLENBQUM7UUFDWCxjQUFTLEdBQUcsSUFBSSxtQkFBWSxFQUFFLENBQUM7UUFDaEMsYUFBUSxHQUFrQixFQUFFLENBQUM7SUFPMUMsQ0FBQztJQUxHLDRCQUFJLEdBQUo7UUFDRSxPQUFPLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ3BCLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUNsQyxJQUFJLENBQUMsT0FBTyxHQUFHLEVBQUUsQ0FBQztJQUNwQixDQUFDO0lBUEQ7UUFBQyxhQUFNLEVBQUU7O29EQUFBO0lBQ1Q7UUFBQyxZQUFLLEVBQUU7O21EQUFBO0lBVFo7UUFBQyxnQkFBUyxDQUFDO1lBQ1YsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFFBQVEsRUFBRSxVQUFVO1lBQ3BCLFdBQVcsRUFBRSxXQUFXO1NBQ3hCLENBQUM7O3FCQUFBO0lBWUYsb0JBQUM7QUFBRCxDQVhBLEFBV0MsSUFBQTtBQVhZLHFCQUFhLGdCQVd6QixDQUFBIiwiZmlsZSI6ImFwcC9zaGFyZWQvY2hhdC9jaGF0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPdXRwdXQsIElucHV0LCBFdmVudEVtaXR0ZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQ2hhdE1lc3NhZ2UgfSBmcm9tICcuL2NoYXQubWVzc2FnZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuXHRtb2R1bGVJZDogbW9kdWxlLmlkLFxyXG5cdHNlbGVjdG9yOiAnY2hhdC1jbXAnLFxyXG5cdHRlbXBsYXRlVXJsOiAnY2hhdC5odG1sJ1xyXG59KVxyXG5leHBvcnQgY2xhc3MgQ2hhdENvbXBvbmVudCB7XHJcblxyXG4gICAgbWVzc2FnZTogc3RyaW5nID0gJyc7XHJcbiAgICBAT3V0cHV0KCkgb25NZXNzYWdlID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG4gICAgQElucHV0KCkgbWVzc2FnZXM6IENoYXRNZXNzYWdlW10gPSBbXTtcclxuXHJcbiAgICBzZW5kKCkge1xyXG4gICAgICBjb25zb2xlLmxvZygnc2VuZCcpO1xyXG4gICAgICB0aGlzLm9uTWVzc2FnZS5lbWl0KHRoaXMubWVzc2FnZSk7XHJcbiAgICAgIHRoaXMubWVzc2FnZSA9ICcnO1xyXG4gICAgfVxyXG59XHJcbiJdfQ==
