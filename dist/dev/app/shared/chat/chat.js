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
        this.onTextChanged = new core_1.EventEmitter();
        this.messages = [];
    }
    ChatComponent.prototype.send = function () {
        console.log('send');
        this.onMessage.emit(this.message);
        this.message = '';
    };
    ChatComponent.prototype.onMessageChanged = function () {
        this.onTextChanged.emit(this.message);
    };
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], ChatComponent.prototype, "onMessage", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], ChatComponent.prototype, "onTextChanged", void 0);
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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9zaGFyZWQvY2hhdC9jaGF0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBdUQsZUFBZSxDQUFDLENBQUE7QUFRdkU7SUFBQTtRQUVJLFlBQU8sR0FBVyxFQUFFLENBQUM7UUFDWCxjQUFTLEdBQUcsSUFBSSxtQkFBWSxFQUFFLENBQUM7UUFDL0Isa0JBQWEsR0FBRyxJQUFJLG1CQUFZLEVBQUUsQ0FBQztRQUNwQyxhQUFRLEdBQWtCLEVBQUUsQ0FBQztJQVcxQyxDQUFDO0lBVEcsNEJBQUksR0FBSjtRQUNFLE9BQU8sQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDcEIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ2xDLElBQUksQ0FBQyxPQUFPLEdBQUcsRUFBRSxDQUFDO0lBQ3BCLENBQUM7SUFFRCx3Q0FBZ0IsR0FBaEI7UUFDRSxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDeEMsQ0FBQztJQVpEO1FBQUMsYUFBTSxFQUFFOztvREFBQTtJQUNUO1FBQUMsYUFBTSxFQUFFOzt3REFBQTtJQUNUO1FBQUMsWUFBSyxFQUFFOzttREFBQTtJQVZaO1FBQUMsZ0JBQVMsQ0FBQztZQUNWLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixRQUFRLEVBQUUsVUFBVTtZQUNwQixXQUFXLEVBQUUsV0FBVztTQUN4QixDQUFDOztxQkFBQTtJQWlCRixvQkFBQztBQUFELENBaEJBLEFBZ0JDLElBQUE7QUFoQlkscUJBQWEsZ0JBZ0J6QixDQUFBIiwiZmlsZSI6ImFwcC9zaGFyZWQvY2hhdC9jaGF0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPdXRwdXQsIElucHV0LCBFdmVudEVtaXR0ZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENoYXRNZXNzYWdlIH0gZnJvbSAnLi9jaGF0Lm1lc3NhZ2UnO1xuXG5AQ29tcG9uZW50KHtcblx0bW9kdWxlSWQ6IG1vZHVsZS5pZCxcblx0c2VsZWN0b3I6ICdjaGF0LWNtcCcsXG5cdHRlbXBsYXRlVXJsOiAnY2hhdC5odG1sJ1xufSlcbmV4cG9ydCBjbGFzcyBDaGF0Q29tcG9uZW50IHtcblxuICAgIG1lc3NhZ2U6IHN0cmluZyA9ICcnO1xuICAgIEBPdXRwdXQoKSBvbk1lc3NhZ2UgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gICAgQE91dHB1dCgpIG9uVGV4dENoYW5nZWQgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gICAgQElucHV0KCkgbWVzc2FnZXM6IENoYXRNZXNzYWdlW10gPSBbXTtcblxuICAgIHNlbmQoKSB7XG4gICAgICBjb25zb2xlLmxvZygnc2VuZCcpO1xuICAgICAgdGhpcy5vbk1lc3NhZ2UuZW1pdCh0aGlzLm1lc3NhZ2UpO1xuICAgICAgdGhpcy5tZXNzYWdlID0gJyc7XG4gICAgfVxuXG4gICAgb25NZXNzYWdlQ2hhbmdlZCgpIHtcbiAgICAgIHRoaXMub25UZXh0Q2hhbmdlZC5lbWl0KHRoaXMubWVzc2FnZSk7XG4gICAgfVxufVxuIl19
