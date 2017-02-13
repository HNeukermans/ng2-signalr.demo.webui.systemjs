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
var ng2_signalr_1 = require('ng2-signalr');
var chat_message_1 = require('../../shared/chat/chat.message');
var DocumentationComponent = (function () {
    function DocumentationComponent(route) {
        this.chatMessages = [];
        this.listenCode = '';
        this.chatCode = '';
        this._connection = route.snapshot.data['connection'];
    }
    DocumentationComponent.prototype.ngAfterViewChecked = function () {
        return Prism.highlightAll();
    };
    DocumentationComponent.prototype.ngOnInit = function () {
        var _this = this;
        var onMessageSent$ = new ng2_signalr_1.BroadcastEventListener('OnMessageSent');
        this._connection.listen(onMessageSent$);
        this._subscription = onMessageSent$.subscribe(function (chatMessage) {
            _this.chatMessages.push(chatMessage);
        });
        this.showChatClientCode();
        this.showListenClientCode();
    };
    DocumentationComponent.prototype.ngOnDestroy = function () {
        console.log('ngOnDestroy');
        this._subscription.unsubscribe();
    };
    DocumentationComponent.prototype.onChatMessage = function (message) {
        console.log('onChatMessage');
        this._connection.invoke('Chat', new chat_message_1.ChatMessage('Hannes', message))
            .catch(function (err) { return console.log('Failed to invoke \'Chat\'. Error occured. Error:' + err); });
    };
    DocumentationComponent.prototype.showChatClientCode = function () {
        var code = "\n      // send chat message to server\n      chat() {\n        this._connection.invoke('Chat', new ChatMessage('Hannes', message))\n          .catch((err:any) => console.log('Failed to invoke 'Chat'. Error occured. Error:' + err));\n        }\n      }";
        this.chatCode = Prism.highlight(code, Prism.languages.javascript);
    };
    DocumentationComponent.prototype.showChatServerCode = function () {
        var code = "\n// chat\npublic void Chat(ChatMessage message)\n{\n    //do stuff\n    ....\n}";
        this.chatCode = Prism.highlight(code, Prism.languages.javascript);
    };
    DocumentationComponent.prototype.showChatSpecCode = function () {
        var code = "\nit('chat() should invoke Chat with message',\n  inject([DocumentationComponent], (component: DocumentationComponent) => {\n\n    spyOn(connectionMock, 'invoke').and.returnValue(Promise.resolve([]));\n\n    component.message = 'My message';\n    component.chat();\n\n    expect(connectionMock.invoke)\n      .toHaveBeenCalledWith('Chat', jasmine.objectContaining({ content: component.message }));\n  }));";
        this.chatCode = Prism.highlight(code, Prism.languages.javascript);
    };
    DocumentationComponent.prototype.showListenServerCode = function () {
        var code = "\n// broadcast\npublic void xxx(ChatMessage message)\n{\n    // broadcast to all clients\n    Clients.All.OnMessageSent(new ChatMessage('Hannes', 'Message'));\n}";
        this.listenCode = Prism.highlight(code, Prism.languages.javascript);
    };
    DocumentationComponent.prototype.showListenSpecCode = function () {
        var code = "\nit('ngInit() should listen for broadcast event',\n  inject([DocumentationComponent], (component: DocumentationComponent) => {\n\n    spyOn(connectionMock, 'listen').and.callThrough();\n\n    component.ngOnInit();\n\n    expect(connectionMock.listen)\n      .toHaveBeenCalledWith(jasmine.objectContaining({ event: 'OnMessageSent' }));\n\n    expect(connectionMock.listeners['OnMessageSent'].observers.length)\n      .toBe(1);\n\n}));";
        this.listenCode = Prism.highlight(code, Prism.languages.javascript);
    };
    DocumentationComponent.prototype.showListenClientCode = function () {
        var code = "\n// start listening for server messages in ngOnInit\nngOnInit() {\n    let onMessageSent$ = new BroadcastEventListener<ChatMessage>('OnMessageSent');\n    // register the listener\n    this._connection.listen(onMessageSent$);\n\n    // subscribe to event\n    this._subscription = onMessageSent$.subscribe((chatMessage: ChatMessage) => {\n      this.chatMessages.push(chatMessage);\n    });\n}";
        this.listenCode = Prism.highlight(code, Prism.languages.javascript);
    };
    DocumentationComponent.prototype.showChatMessageCode = function () {
        var code = "\nexport class ChatMessage {\n  constructor(public user: string, public content: string) {\n}";
        this.listenCode = Prism.highlight(code, Prism.languages.javascript);
    };
    DocumentationComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'documentation',
            templateUrl: './documentation.component.html'
        }), 
        __metadata('design:paramtypes', [router_1.ActivatedRoute])
    ], DocumentationComponent);
    return DocumentationComponent;
}());
exports.DocumentationComponent = DocumentationComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9kYXNoYm9hcmQvZG9jdW1lbnRhdGlvbi9kb2N1bWVudGF0aW9uLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEscUJBQXVELGVBQWUsQ0FBQyxDQUFBO0FBQ3ZFLHVCQUErQixpQkFBaUIsQ0FBQyxDQUFBO0FBQ2pELDRCQUEwRCxhQUFhLENBQUMsQ0FBQTtBQUV4RSw2QkFBNEIsZ0NBQWdDLENBQUMsQ0FBQTtBQVU3RDtJQVNFLGdDQUFZLEtBQXFCO1FBUDFCLGlCQUFZLEdBQWtCLEVBQUUsQ0FBQztRQUNqQyxlQUFVLEdBQVcsRUFBRSxDQUFDO1FBQ3hCLGFBQVEsR0FBVyxFQUFFLENBQUM7UUFNM0IsSUFBSSxDQUFDLFdBQVcsR0FBRyxLQUFLLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQztJQUN2RCxDQUFDO0lBRUQsbURBQWtCLEdBQWxCO1FBQ0UsTUFBTSxDQUFDLEtBQUssQ0FBQyxZQUFZLEVBQUUsQ0FBQztJQUM5QixDQUFDO0lBRUQseUNBQVEsR0FBUjtRQUFBLGlCQVlBO1FBWEUsSUFBSSxjQUFjLEdBQUcsSUFBSSxvQ0FBc0IsQ0FBYyxlQUFlLENBQUMsQ0FBQztRQUU5RSxJQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxjQUFjLENBQUMsQ0FBQztRQUd4QyxJQUFJLENBQUMsYUFBYSxHQUFHLGNBQWMsQ0FBQyxTQUFTLENBQUMsVUFBQyxXQUF3QjtZQUNyRSxLQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUN0QyxDQUFDLENBQUMsQ0FBQztRQUVILElBQUksQ0FBQyxrQkFBa0IsRUFBRSxDQUFDO1FBQzFCLElBQUksQ0FBQyxvQkFBb0IsRUFBRSxDQUFDO0lBQy9CLENBQUM7SUFFQSw0Q0FBVyxHQUFYO1FBQ0UsT0FBTyxDQUFDLEdBQUcsQ0FBQyxhQUFhLENBQUMsQ0FBQztRQUMzQixJQUFJLENBQUMsYUFBYSxDQUFDLFdBQVcsRUFBRSxDQUFDO0lBQ25DLENBQUM7SUFFRCw4Q0FBYSxHQUFiLFVBQWMsT0FBZTtRQUMzQixPQUFPLENBQUMsR0FBRyxDQUFDLGVBQWUsQ0FBQyxDQUFDO1FBQzdCLElBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDLE1BQU0sRUFBRSxJQUFJLDBCQUFXLENBQUMsUUFBUSxFQUFFLE9BQU8sQ0FBQyxDQUFDO2FBQ2hFLEtBQUssQ0FBQyxVQUFDLEdBQU8sSUFBSyxPQUFBLE9BQU8sQ0FBQyxHQUFHLENBQUMsa0RBQWtELEdBQUcsR0FBRyxDQUFDLEVBQXJFLENBQXFFLENBQUMsQ0FBQztJQUMvRixDQUFDO0lBRUQsbURBQWtCLEdBQWxCO1FBQ0UsSUFBSSxJQUFJLEdBQUcsOFBBTVAsQ0FBQztRQUNMLElBQUksQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFDLFNBQVMsQ0FBQyxJQUFJLEVBQUUsS0FBSyxDQUFDLFNBQVMsQ0FBQyxVQUFVLENBQUMsQ0FBQztJQUNwRSxDQUFDO0lBRUQsbURBQWtCLEdBQWxCO1FBQ0UsSUFBSSxJQUFJLEdBQUcsa0ZBTWIsQ0FBQTtRQUNFLElBQUksQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFDLFNBQVMsQ0FBQyxJQUFJLEVBQUUsS0FBSyxDQUFDLFNBQVMsQ0FBQyxVQUFVLENBQUMsQ0FBQztJQUNwRSxDQUFDO0lBRUQsaURBQWdCLEdBQWhCO1FBQ0UsSUFBSSxJQUFJLEdBQUcsdVpBV1IsQ0FBQTtRQUNILElBQUksQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFDLFNBQVMsQ0FBQyxJQUFJLEVBQUUsS0FBSyxDQUFDLFNBQVMsQ0FBQyxVQUFVLENBQUMsQ0FBQztJQUVwRSxDQUFDO0lBR0QscURBQW9CLEdBQXBCO1FBQ0UsSUFBSSxJQUFJLEdBQUcsbUtBTWIsQ0FBQTtRQUNFLElBQUksQ0FBQyxVQUFVLEdBQUcsS0FBSyxDQUFDLFNBQVMsQ0FBQyxJQUFJLEVBQUUsS0FBSyxDQUFDLFNBQVMsQ0FBQyxVQUFVLENBQUMsQ0FBQztJQUN0RSxDQUFDO0lBRUQsbURBQWtCLEdBQWxCO1FBRUUsSUFBSSxJQUFJLEdBQUcsb2JBY1YsQ0FBQTtRQUVILElBQUksQ0FBQyxVQUFVLEdBQUcsS0FBSyxDQUFDLFNBQVMsQ0FBQyxJQUFJLEVBQUUsS0FBSyxDQUFDLFNBQVMsQ0FBQyxVQUFVLENBQUMsQ0FBQztJQUVwRSxDQUFDO0lBRUQscURBQW9CLEdBQXBCO1FBRUUsSUFBSSxJQUFJLEdBQUUsNFlBV1osQ0FBQztRQUVDLElBQUksQ0FBQyxVQUFVLEdBQUcsS0FBSyxDQUFDLFNBQVMsQ0FBQyxJQUFJLEVBQUUsS0FBSyxDQUFDLFNBQVMsQ0FBQyxVQUFVLENBQUMsQ0FBQztJQUV0RSxDQUFDO0lBRUMsb0RBQW1CLEdBQW5CO1FBQ0EsSUFBSSxJQUFJLEdBQUcsK0ZBR2IsQ0FBQTtRQUNFLElBQUksQ0FBQyxVQUFVLEdBQUcsS0FBSyxDQUFDLFNBQVMsQ0FBQyxJQUFJLEVBQUUsS0FBSyxDQUFDLFNBQVMsQ0FBQyxVQUFVLENBQUMsQ0FBQztJQUN0RSxDQUFDO0lBbEpIO1FBQUMsZ0JBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixRQUFRLEVBQUUsZUFBZTtZQUN6QixXQUFXLEVBQUUsZ0NBQWdDO1NBQzlDLENBQUM7OzhCQUFBO0lBZ0pGLDZCQUFDO0FBQUQsQ0E5SUEsQUE4SUMsSUFBQTtBQTlJWSw4QkFBc0IseUJBOElsQyxDQUFBIiwiZmlsZSI6ImFwcC9kYXNoYm9hcmQvZG9jdW1lbnRhdGlvbi9kb2N1bWVudGF0aW9uLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgQWZ0ZXJWaWV3Q2hlY2tlZCwgT25EZXN0cm95IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBBY3RpdmF0ZWRSb3V0ZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBTaWduYWxSQ29ubmVjdGlvbiwgQnJvYWRjYXN0RXZlbnRMaXN0ZW5lciB9IGZyb20gJ25nMi1zaWduYWxyJztcbmltcG9ydCB7IFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMvU3Vic2NyaXB0aW9uJztcbmltcG9ydCB7IENoYXRNZXNzYWdlIH0gZnJvbSAnLi4vLi4vc2hhcmVkL2NoYXQvY2hhdC5tZXNzYWdlJztcblxuZGVjbGFyZSB2YXIgUHJpc206IGFueTtcblxuQENvbXBvbmVudCh7XG4gIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gIHNlbGVjdG9yOiAnZG9jdW1lbnRhdGlvbicsXG4gIHRlbXBsYXRlVXJsOiAnLi9kb2N1bWVudGF0aW9uLmNvbXBvbmVudC5odG1sJ1xufSlcblxuZXhwb3J0IGNsYXNzIERvY3VtZW50YXRpb25Db21wb25lbnQgIGltcGxlbWVudHMgQWZ0ZXJWaWV3Q2hlY2tlZCwgT25EZXN0cm95IHtcblxuICBwdWJsaWMgY2hhdE1lc3NhZ2VzOiBDaGF0TWVzc2FnZVtdID0gW107XG4gIHB1YmxpYyBsaXN0ZW5Db2RlOiBzdHJpbmcgPSAnJztcbiAgcHVibGljIGNoYXRDb2RlOiBzdHJpbmcgPSAnJztcblxuICBwcml2YXRlIF9jb25uZWN0aW9uOiBTaWduYWxSQ29ubmVjdGlvbjtcbiAgcHJpdmF0ZSBfc3Vic2NyaXB0aW9uOiBTdWJzY3JpcHRpb247XG5cbiAgY29uc3RydWN0b3Iocm91dGU6IEFjdGl2YXRlZFJvdXRlKSB7XG4gICAgdGhpcy5fY29ubmVjdGlvbiA9IHJvdXRlLnNuYXBzaG90LmRhdGFbJ2Nvbm5lY3Rpb24nXTtcbiAgfVxuXG4gIG5nQWZ0ZXJWaWV3Q2hlY2tlZCgpOiBhbnkge1xuICAgIHJldHVybiBQcmlzbS5oaWdobGlnaHRBbGwoKTtcbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIGxldCBvbk1lc3NhZ2VTZW50JCA9IG5ldyBCcm9hZGNhc3RFdmVudExpc3RlbmVyPENoYXRNZXNzYWdlPignT25NZXNzYWdlU2VudCcpO1xuICAgIC8vIHJlZ2lzdGVyIHRoZSBsaXN0ZW5lclxuICAgIHRoaXMuX2Nvbm5lY3Rpb24ubGlzdGVuKG9uTWVzc2FnZVNlbnQkKTtcblxuICAgIC8vIHN1YnNjcmliZSB0byBldmVudFxuICAgIHRoaXMuX3N1YnNjcmlwdGlvbiA9IG9uTWVzc2FnZVNlbnQkLnN1YnNjcmliZSgoY2hhdE1lc3NhZ2U6IENoYXRNZXNzYWdlKSA9PiB7XG4gICAgICB0aGlzLmNoYXRNZXNzYWdlcy5wdXNoKGNoYXRNZXNzYWdlKTtcbiAgICB9KTtcblxuICAgIHRoaXMuc2hvd0NoYXRDbGllbnRDb2RlKCk7XG4gICAgdGhpcy5zaG93TGlzdGVuQ2xpZW50Q29kZSgpO1xuIH1cblxuICBuZ09uRGVzdHJveSgpIHtcbiAgICBjb25zb2xlLmxvZygnbmdPbkRlc3Ryb3knKTtcbiAgICB0aGlzLl9zdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcbiAgfVxuXG4gIG9uQ2hhdE1lc3NhZ2UobWVzc2FnZTogc3RyaW5nKSB7XG4gICAgY29uc29sZS5sb2coJ29uQ2hhdE1lc3NhZ2UnKTtcbiAgICB0aGlzLl9jb25uZWN0aW9uLmludm9rZSgnQ2hhdCcsIG5ldyBDaGF0TWVzc2FnZSgnSGFubmVzJywgbWVzc2FnZSkpXG4gICAgICAuY2F0Y2goKGVycjphbnkpID0+IGNvbnNvbGUubG9nKCdGYWlsZWQgdG8gaW52b2tlIFxcJ0NoYXRcXCcuIEVycm9yIG9jY3VyZWQuIEVycm9yOicgKyBlcnIpKTtcbiAgfVxuXG4gIHNob3dDaGF0Q2xpZW50Q29kZSgpIHtcbiAgICBsZXQgY29kZSA9IGBcbiAgICAgIC8vIHNlbmQgY2hhdCBtZXNzYWdlIHRvIHNlcnZlclxuICAgICAgY2hhdCgpIHtcbiAgICAgICAgdGhpcy5fY29ubmVjdGlvbi5pbnZva2UoJ0NoYXQnLCBuZXcgQ2hhdE1lc3NhZ2UoJ0hhbm5lcycsIG1lc3NhZ2UpKVxuICAgICAgICAgIC5jYXRjaCgoZXJyOmFueSkgPT4gY29uc29sZS5sb2coJ0ZhaWxlZCB0byBpbnZva2UgXFwnQ2hhdFxcJy4gRXJyb3Igb2NjdXJlZC4gRXJyb3I6JyArIGVycikpO1xuICAgICAgICB9XG4gICAgICB9YDtcbiAgICB0aGlzLmNoYXRDb2RlID0gUHJpc20uaGlnaGxpZ2h0KGNvZGUsIFByaXNtLmxhbmd1YWdlcy5qYXZhc2NyaXB0KTtcbiAgfVxuXG4gIHNob3dDaGF0U2VydmVyQ29kZSgpIHtcbiAgICBsZXQgY29kZSA9IGBcbi8vIGNoYXRcbnB1YmxpYyB2b2lkIENoYXQoQ2hhdE1lc3NhZ2UgbWVzc2FnZSlcbntcbiAgICAvL2RvIHN0dWZmXG4gICAgLi4uLlxufWBcbiAgICB0aGlzLmNoYXRDb2RlID0gUHJpc20uaGlnaGxpZ2h0KGNvZGUsIFByaXNtLmxhbmd1YWdlcy5qYXZhc2NyaXB0KTtcbiAgfVxuXG4gIHNob3dDaGF0U3BlY0NvZGUoKSB7XG4gICAgbGV0IGNvZGUgPSBgXG5pdCgnY2hhdCgpIHNob3VsZCBpbnZva2UgQ2hhdCB3aXRoIG1lc3NhZ2UnLFxuICBpbmplY3QoW0RvY3VtZW50YXRpb25Db21wb25lbnRdLCAoY29tcG9uZW50OiBEb2N1bWVudGF0aW9uQ29tcG9uZW50KSA9PiB7XG5cbiAgICBzcHlPbihjb25uZWN0aW9uTW9jaywgJ2ludm9rZScpLmFuZC5yZXR1cm5WYWx1ZShQcm9taXNlLnJlc29sdmUoW10pKTtcblxuICAgIGNvbXBvbmVudC5tZXNzYWdlID0gJ015IG1lc3NhZ2UnO1xuICAgIGNvbXBvbmVudC5jaGF0KCk7XG5cbiAgICBleHBlY3QoY29ubmVjdGlvbk1vY2suaW52b2tlKVxuICAgICAgLnRvSGF2ZUJlZW5DYWxsZWRXaXRoKCdDaGF0JywgamFzbWluZS5vYmplY3RDb250YWluaW5nKHsgY29udGVudDogY29tcG9uZW50Lm1lc3NhZ2UgfSkpO1xuICB9KSk7YFxuICAgIHRoaXMuY2hhdENvZGUgPSBQcmlzbS5oaWdobGlnaHQoY29kZSwgUHJpc20ubGFuZ3VhZ2VzLmphdmFzY3JpcHQpO1xuXG4gIH1cblxuXG4gIHNob3dMaXN0ZW5TZXJ2ZXJDb2RlKCkge1xuICAgIGxldCBjb2RlID0gYFxuLy8gYnJvYWRjYXN0XG5wdWJsaWMgdm9pZCB4eHgoQ2hhdE1lc3NhZ2UgbWVzc2FnZSlcbntcbiAgICAvLyBicm9hZGNhc3QgdG8gYWxsIGNsaWVudHNcbiAgICBDbGllbnRzLkFsbC5Pbk1lc3NhZ2VTZW50KG5ldyBDaGF0TWVzc2FnZSgnSGFubmVzJywgJ01lc3NhZ2UnKSk7XG59YFxuICAgIHRoaXMubGlzdGVuQ29kZSA9IFByaXNtLmhpZ2hsaWdodChjb2RlLCBQcmlzbS5sYW5ndWFnZXMuamF2YXNjcmlwdCk7XG4gIH1cblxuICBzaG93TGlzdGVuU3BlY0NvZGUoKSB7XG5cbiAgICBsZXQgY29kZSA9IGBcbml0KCduZ0luaXQoKSBzaG91bGQgbGlzdGVuIGZvciBicm9hZGNhc3QgZXZlbnQnLFxuICBpbmplY3QoW0RvY3VtZW50YXRpb25Db21wb25lbnRdLCAoY29tcG9uZW50OiBEb2N1bWVudGF0aW9uQ29tcG9uZW50KSA9PiB7XG5cbiAgICBzcHlPbihjb25uZWN0aW9uTW9jaywgJ2xpc3RlbicpLmFuZC5jYWxsVGhyb3VnaCgpO1xuXG4gICAgY29tcG9uZW50Lm5nT25Jbml0KCk7XG5cbiAgICBleHBlY3QoY29ubmVjdGlvbk1vY2subGlzdGVuKVxuICAgICAgLnRvSGF2ZUJlZW5DYWxsZWRXaXRoKGphc21pbmUub2JqZWN0Q29udGFpbmluZyh7IGV2ZW50OiAnT25NZXNzYWdlU2VudCcgfSkpO1xuXG4gICAgZXhwZWN0KGNvbm5lY3Rpb25Nb2NrLmxpc3RlbmVyc1snT25NZXNzYWdlU2VudCddLm9ic2VydmVycy5sZW5ndGgpXG4gICAgICAudG9CZSgxKTtcblxufSkpO2BcblxuICB0aGlzLmxpc3RlbkNvZGUgPSBQcmlzbS5oaWdobGlnaHQoY29kZSwgUHJpc20ubGFuZ3VhZ2VzLmphdmFzY3JpcHQpO1xuXG4gIH1cblxuICBzaG93TGlzdGVuQ2xpZW50Q29kZSgpIHtcblxuICAgIGxldCBjb2RlID1gXG4vLyBzdGFydCBsaXN0ZW5pbmcgZm9yIHNlcnZlciBtZXNzYWdlcyBpbiBuZ09uSW5pdFxubmdPbkluaXQoKSB7XG4gICAgbGV0IG9uTWVzc2FnZVNlbnQkID0gbmV3IEJyb2FkY2FzdEV2ZW50TGlzdGVuZXI8Q2hhdE1lc3NhZ2U+KCdPbk1lc3NhZ2VTZW50Jyk7XG4gICAgLy8gcmVnaXN0ZXIgdGhlIGxpc3RlbmVyXG4gICAgdGhpcy5fY29ubmVjdGlvbi5saXN0ZW4ob25NZXNzYWdlU2VudCQpO1xuXG4gICAgLy8gc3Vic2NyaWJlIHRvIGV2ZW50XG4gICAgdGhpcy5fc3Vic2NyaXB0aW9uID0gb25NZXNzYWdlU2VudCQuc3Vic2NyaWJlKChjaGF0TWVzc2FnZTogQ2hhdE1lc3NhZ2UpID0+IHtcbiAgICAgIHRoaXMuY2hhdE1lc3NhZ2VzLnB1c2goY2hhdE1lc3NhZ2UpO1xuICAgIH0pO1xufWA7XG5cbiAgICB0aGlzLmxpc3RlbkNvZGUgPSBQcmlzbS5oaWdobGlnaHQoY29kZSwgUHJpc20ubGFuZ3VhZ2VzLmphdmFzY3JpcHQpO1xuXG4gIH1cblxuICAgIHNob3dDaGF0TWVzc2FnZUNvZGUoKSB7XG4gICAgbGV0IGNvZGUgPSBgXG5leHBvcnQgY2xhc3MgQ2hhdE1lc3NhZ2Uge1xuICBjb25zdHJ1Y3RvcihwdWJsaWMgdXNlcjogc3RyaW5nLCBwdWJsaWMgY29udGVudDogc3RyaW5nKSB7XG59YFxuICAgIHRoaXMubGlzdGVuQ29kZSA9IFByaXNtLmhpZ2hsaWdodChjb2RlLCBQcmlzbS5sYW5ndWFnZXMuamF2YXNjcmlwdCk7XG4gIH1cblxufVxuIl19
