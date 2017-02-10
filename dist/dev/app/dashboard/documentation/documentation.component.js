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
var chat_message_1 = require('./chat.message');
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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9kYXNoYm9hcmQvZG9jdW1lbnRhdGlvbi9kb2N1bWVudGF0aW9uLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEscUJBQXVELGVBQWUsQ0FBQyxDQUFBO0FBQ3ZFLHVCQUErQixpQkFBaUIsQ0FBQyxDQUFBO0FBQ2pELDRCQUEwRCxhQUFhLENBQUMsQ0FBQTtBQUN4RSw2QkFBNEIsZ0JBQWdCLENBQUMsQ0FBQTtBQVc3QztJQVNFLGdDQUFZLEtBQXFCO1FBUDFCLGlCQUFZLEdBQWtCLEVBQUUsQ0FBQztRQUNqQyxlQUFVLEdBQVcsRUFBRSxDQUFDO1FBQ3hCLGFBQVEsR0FBVyxFQUFFLENBQUM7UUFNM0IsSUFBSSxDQUFDLFdBQVcsR0FBRyxLQUFLLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQztJQUN2RCxDQUFDO0lBRUQsbURBQWtCLEdBQWxCO1FBQ0UsTUFBTSxDQUFDLEtBQUssQ0FBQyxZQUFZLEVBQUUsQ0FBQztJQUM5QixDQUFDO0lBRUQseUNBQVEsR0FBUjtRQUFBLGlCQVlBO1FBWEUsSUFBSSxjQUFjLEdBQUcsSUFBSSxvQ0FBc0IsQ0FBYyxlQUFlLENBQUMsQ0FBQztRQUU5RSxJQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxjQUFjLENBQUMsQ0FBQztRQUd4QyxJQUFJLENBQUMsYUFBYSxHQUFHLGNBQWMsQ0FBQyxTQUFTLENBQUMsVUFBQyxXQUF3QjtZQUNyRSxLQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUN0QyxDQUFDLENBQUMsQ0FBQztRQUVILElBQUksQ0FBQyxrQkFBa0IsRUFBRSxDQUFDO1FBQzFCLElBQUksQ0FBQyxvQkFBb0IsRUFBRSxDQUFDO0lBQy9CLENBQUM7SUFFQSw0Q0FBVyxHQUFYO1FBQ0UsT0FBTyxDQUFDLEdBQUcsQ0FBQyxhQUFhLENBQUMsQ0FBQztRQUMzQixJQUFJLENBQUMsYUFBYSxDQUFDLFdBQVcsRUFBRSxDQUFDO0lBQ25DLENBQUM7SUFFRCw4Q0FBYSxHQUFiLFVBQWMsT0FBZTtRQUMzQixPQUFPLENBQUMsR0FBRyxDQUFDLGVBQWUsQ0FBQyxDQUFDO1FBQzdCLElBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDLE1BQU0sRUFBRSxJQUFJLDBCQUFXLENBQUMsUUFBUSxFQUFFLE9BQU8sQ0FBQyxDQUFDO2FBQ2hFLEtBQUssQ0FBQyxVQUFDLEdBQU8sSUFBSyxPQUFBLE9BQU8sQ0FBQyxHQUFHLENBQUMsa0RBQWtELEdBQUcsR0FBRyxDQUFDLEVBQXJFLENBQXFFLENBQUMsQ0FBQztJQUMvRixDQUFDO0lBRUQsbURBQWtCLEdBQWxCO1FBQ0UsSUFBSSxJQUFJLEdBQUcsOFBBTVAsQ0FBQztRQUNMLElBQUksQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFDLFNBQVMsQ0FBQyxJQUFJLEVBQUUsS0FBSyxDQUFDLFNBQVMsQ0FBQyxVQUFVLENBQUMsQ0FBQztJQUNwRSxDQUFDO0lBRUQsbURBQWtCLEdBQWxCO1FBQ0UsSUFBSSxJQUFJLEdBQUcsa0ZBTWIsQ0FBQTtRQUNFLElBQUksQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFDLFNBQVMsQ0FBQyxJQUFJLEVBQUUsS0FBSyxDQUFDLFNBQVMsQ0FBQyxVQUFVLENBQUMsQ0FBQztJQUNwRSxDQUFDO0lBRUQsaURBQWdCLEdBQWhCO1FBQ0UsSUFBSSxJQUFJLEdBQUcsdVpBV1IsQ0FBQTtRQUNILElBQUksQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFDLFNBQVMsQ0FBQyxJQUFJLEVBQUUsS0FBSyxDQUFDLFNBQVMsQ0FBQyxVQUFVLENBQUMsQ0FBQztJQUVwRSxDQUFDO0lBR0QscURBQW9CLEdBQXBCO1FBQ0UsSUFBSSxJQUFJLEdBQUcsbUtBTWIsQ0FBQTtRQUNFLElBQUksQ0FBQyxVQUFVLEdBQUcsS0FBSyxDQUFDLFNBQVMsQ0FBQyxJQUFJLEVBQUUsS0FBSyxDQUFDLFNBQVMsQ0FBQyxVQUFVLENBQUMsQ0FBQztJQUN0RSxDQUFDO0lBRUQsbURBQWtCLEdBQWxCO1FBRUUsSUFBSSxJQUFJLEdBQUcsb2JBY1YsQ0FBQTtRQUVILElBQUksQ0FBQyxVQUFVLEdBQUcsS0FBSyxDQUFDLFNBQVMsQ0FBQyxJQUFJLEVBQUUsS0FBSyxDQUFDLFNBQVMsQ0FBQyxVQUFVLENBQUMsQ0FBQztJQUVwRSxDQUFDO0lBRUQscURBQW9CLEdBQXBCO1FBRUUsSUFBSSxJQUFJLEdBQUUsNFlBV1osQ0FBQztRQUVDLElBQUksQ0FBQyxVQUFVLEdBQUcsS0FBSyxDQUFDLFNBQVMsQ0FBQyxJQUFJLEVBQUUsS0FBSyxDQUFDLFNBQVMsQ0FBQyxVQUFVLENBQUMsQ0FBQztJQUV0RSxDQUFDO0lBRUMsb0RBQW1CLEdBQW5CO1FBQ0EsSUFBSSxJQUFJLEdBQUcsK0ZBR2IsQ0FBQTtRQUNFLElBQUksQ0FBQyxVQUFVLEdBQUcsS0FBSyxDQUFDLFNBQVMsQ0FBQyxJQUFJLEVBQUUsS0FBSyxDQUFDLFNBQVMsQ0FBQyxVQUFVLENBQUMsQ0FBQztJQUN0RSxDQUFDO0lBbEpIO1FBQUMsZ0JBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixRQUFRLEVBQUUsZUFBZTtZQUN6QixXQUFXLEVBQUUsZ0NBQWdDO1NBQzlDLENBQUM7OzhCQUFBO0lBZ0pGLDZCQUFDO0FBQUQsQ0E5SUEsQUE4SUMsSUFBQTtBQTlJWSw4QkFBc0IseUJBOElsQyxDQUFBIiwiZmlsZSI6ImFwcC9kYXNoYm9hcmQvZG9jdW1lbnRhdGlvbi9kb2N1bWVudGF0aW9uLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgQWZ0ZXJWaWV3Q2hlY2tlZCwgT25EZXN0cm95IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEFjdGl2YXRlZFJvdXRlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcclxuaW1wb3J0IHsgU2lnbmFsUkNvbm5lY3Rpb24sIEJyb2FkY2FzdEV2ZW50TGlzdGVuZXIgfSBmcm9tICduZzItc2lnbmFscic7XHJcbmltcG9ydCB7IENoYXRNZXNzYWdlIH0gZnJvbSAnLi9jaGF0Lm1lc3NhZ2UnO1xyXG5pbXBvcnQgeyBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzL1N1YnNjcmlwdGlvbic7XHJcblxyXG5kZWNsYXJlIHZhciBQcmlzbTogYW55O1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcclxuICBzZWxlY3RvcjogJ2RvY3VtZW50YXRpb24nLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9kb2N1bWVudGF0aW9uLmNvbXBvbmVudC5odG1sJ1xyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIERvY3VtZW50YXRpb25Db21wb25lbnQgIGltcGxlbWVudHMgQWZ0ZXJWaWV3Q2hlY2tlZCwgT25EZXN0cm95IHtcclxuXHJcbiAgcHVibGljIGNoYXRNZXNzYWdlczogQ2hhdE1lc3NhZ2VbXSA9IFtdO1xyXG4gIHB1YmxpYyBsaXN0ZW5Db2RlOiBzdHJpbmcgPSAnJztcclxuICBwdWJsaWMgY2hhdENvZGU6IHN0cmluZyA9ICcnO1xyXG5cclxuICBwcml2YXRlIF9jb25uZWN0aW9uOiBTaWduYWxSQ29ubmVjdGlvbjtcclxuICBwcml2YXRlIF9zdWJzY3JpcHRpb246IFN1YnNjcmlwdGlvbjtcclxuXHJcbiAgY29uc3RydWN0b3Iocm91dGU6IEFjdGl2YXRlZFJvdXRlKSB7XHJcbiAgICB0aGlzLl9jb25uZWN0aW9uID0gcm91dGUuc25hcHNob3QuZGF0YVsnY29ubmVjdGlvbiddO1xyXG4gIH1cclxuXHJcbiAgbmdBZnRlclZpZXdDaGVja2VkKCk6IGFueSB7XHJcbiAgICByZXR1cm4gUHJpc20uaGlnaGxpZ2h0QWxsKCk7XHJcbiAgfVxyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuICAgIGxldCBvbk1lc3NhZ2VTZW50JCA9IG5ldyBCcm9hZGNhc3RFdmVudExpc3RlbmVyPENoYXRNZXNzYWdlPignT25NZXNzYWdlU2VudCcpO1xyXG4gICAgLy8gcmVnaXN0ZXIgdGhlIGxpc3RlbmVyXHJcbiAgICB0aGlzLl9jb25uZWN0aW9uLmxpc3Rlbihvbk1lc3NhZ2VTZW50JCk7XHJcblxyXG4gICAgLy8gc3Vic2NyaWJlIHRvIGV2ZW50XHJcbiAgICB0aGlzLl9zdWJzY3JpcHRpb24gPSBvbk1lc3NhZ2VTZW50JC5zdWJzY3JpYmUoKGNoYXRNZXNzYWdlOiBDaGF0TWVzc2FnZSkgPT4ge1xyXG4gICAgICB0aGlzLmNoYXRNZXNzYWdlcy5wdXNoKGNoYXRNZXNzYWdlKTtcclxuICAgIH0pO1xyXG5cclxuICAgIHRoaXMuc2hvd0NoYXRDbGllbnRDb2RlKCk7XHJcbiAgICB0aGlzLnNob3dMaXN0ZW5DbGllbnRDb2RlKCk7XHJcbiB9XHJcblxyXG4gIG5nT25EZXN0cm95KCkge1xyXG4gICAgY29uc29sZS5sb2coJ25nT25EZXN0cm95Jyk7XHJcbiAgICB0aGlzLl9zdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcclxuICB9XHJcblxyXG4gIG9uQ2hhdE1lc3NhZ2UobWVzc2FnZTogc3RyaW5nKSB7XHJcbiAgICBjb25zb2xlLmxvZygnb25DaGF0TWVzc2FnZScpO1xyXG4gICAgdGhpcy5fY29ubmVjdGlvbi5pbnZva2UoJ0NoYXQnLCBuZXcgQ2hhdE1lc3NhZ2UoJ0hhbm5lcycsIG1lc3NhZ2UpKVxyXG4gICAgICAuY2F0Y2goKGVycjphbnkpID0+IGNvbnNvbGUubG9nKCdGYWlsZWQgdG8gaW52b2tlIFxcJ0NoYXRcXCcuIEVycm9yIG9jY3VyZWQuIEVycm9yOicgKyBlcnIpKTtcclxuICB9XHJcblxyXG4gIHNob3dDaGF0Q2xpZW50Q29kZSgpIHtcclxuICAgIGxldCBjb2RlID0gYFxyXG4gICAgICAvLyBzZW5kIGNoYXQgbWVzc2FnZSB0byBzZXJ2ZXJcclxuICAgICAgY2hhdCgpIHtcclxuICAgICAgICB0aGlzLl9jb25uZWN0aW9uLmludm9rZSgnQ2hhdCcsIG5ldyBDaGF0TWVzc2FnZSgnSGFubmVzJywgbWVzc2FnZSkpXHJcbiAgICAgICAgICAuY2F0Y2goKGVycjphbnkpID0+IGNvbnNvbGUubG9nKCdGYWlsZWQgdG8gaW52b2tlIFxcJ0NoYXRcXCcuIEVycm9yIG9jY3VyZWQuIEVycm9yOicgKyBlcnIpKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1gO1xyXG4gICAgdGhpcy5jaGF0Q29kZSA9IFByaXNtLmhpZ2hsaWdodChjb2RlLCBQcmlzbS5sYW5ndWFnZXMuamF2YXNjcmlwdCk7XHJcbiAgfVxyXG5cclxuICBzaG93Q2hhdFNlcnZlckNvZGUoKSB7XHJcbiAgICBsZXQgY29kZSA9IGBcclxuLy8gY2hhdFxyXG5wdWJsaWMgdm9pZCBDaGF0KENoYXRNZXNzYWdlIG1lc3NhZ2UpXHJcbntcclxuICAgIC8vZG8gc3R1ZmZcclxuICAgIC4uLi5cclxufWBcclxuICAgIHRoaXMuY2hhdENvZGUgPSBQcmlzbS5oaWdobGlnaHQoY29kZSwgUHJpc20ubGFuZ3VhZ2VzLmphdmFzY3JpcHQpO1xyXG4gIH1cclxuXHJcbiAgc2hvd0NoYXRTcGVjQ29kZSgpIHtcclxuICAgIGxldCBjb2RlID0gYFxyXG5pdCgnY2hhdCgpIHNob3VsZCBpbnZva2UgQ2hhdCB3aXRoIG1lc3NhZ2UnLFxyXG4gIGluamVjdChbRG9jdW1lbnRhdGlvbkNvbXBvbmVudF0sIChjb21wb25lbnQ6IERvY3VtZW50YXRpb25Db21wb25lbnQpID0+IHtcclxuXHJcbiAgICBzcHlPbihjb25uZWN0aW9uTW9jaywgJ2ludm9rZScpLmFuZC5yZXR1cm5WYWx1ZShQcm9taXNlLnJlc29sdmUoW10pKTtcclxuXHJcbiAgICBjb21wb25lbnQubWVzc2FnZSA9ICdNeSBtZXNzYWdlJztcclxuICAgIGNvbXBvbmVudC5jaGF0KCk7XHJcblxyXG4gICAgZXhwZWN0KGNvbm5lY3Rpb25Nb2NrLmludm9rZSlcclxuICAgICAgLnRvSGF2ZUJlZW5DYWxsZWRXaXRoKCdDaGF0JywgamFzbWluZS5vYmplY3RDb250YWluaW5nKHsgY29udGVudDogY29tcG9uZW50Lm1lc3NhZ2UgfSkpO1xyXG4gIH0pKTtgXHJcbiAgICB0aGlzLmNoYXRDb2RlID0gUHJpc20uaGlnaGxpZ2h0KGNvZGUsIFByaXNtLmxhbmd1YWdlcy5qYXZhc2NyaXB0KTtcclxuXHJcbiAgfVxyXG5cclxuXHJcbiAgc2hvd0xpc3RlblNlcnZlckNvZGUoKSB7XHJcbiAgICBsZXQgY29kZSA9IGBcclxuLy8gYnJvYWRjYXN0XHJcbnB1YmxpYyB2b2lkIHh4eChDaGF0TWVzc2FnZSBtZXNzYWdlKVxyXG57XHJcbiAgICAvLyBicm9hZGNhc3QgdG8gYWxsIGNsaWVudHNcclxuICAgIENsaWVudHMuQWxsLk9uTWVzc2FnZVNlbnQobmV3IENoYXRNZXNzYWdlKCdIYW5uZXMnLCAnTWVzc2FnZScpKTtcclxufWBcclxuICAgIHRoaXMubGlzdGVuQ29kZSA9IFByaXNtLmhpZ2hsaWdodChjb2RlLCBQcmlzbS5sYW5ndWFnZXMuamF2YXNjcmlwdCk7XHJcbiAgfVxyXG5cclxuICBzaG93TGlzdGVuU3BlY0NvZGUoKSB7XHJcblxyXG4gICAgbGV0IGNvZGUgPSBgXHJcbml0KCduZ0luaXQoKSBzaG91bGQgbGlzdGVuIGZvciBicm9hZGNhc3QgZXZlbnQnLFxyXG4gIGluamVjdChbRG9jdW1lbnRhdGlvbkNvbXBvbmVudF0sIChjb21wb25lbnQ6IERvY3VtZW50YXRpb25Db21wb25lbnQpID0+IHtcclxuXHJcbiAgICBzcHlPbihjb25uZWN0aW9uTW9jaywgJ2xpc3RlbicpLmFuZC5jYWxsVGhyb3VnaCgpO1xyXG5cclxuICAgIGNvbXBvbmVudC5uZ09uSW5pdCgpO1xyXG5cclxuICAgIGV4cGVjdChjb25uZWN0aW9uTW9jay5saXN0ZW4pXHJcbiAgICAgIC50b0hhdmVCZWVuQ2FsbGVkV2l0aChqYXNtaW5lLm9iamVjdENvbnRhaW5pbmcoeyBldmVudDogJ09uTWVzc2FnZVNlbnQnIH0pKTtcclxuXHJcbiAgICBleHBlY3QoY29ubmVjdGlvbk1vY2subGlzdGVuZXJzWydPbk1lc3NhZ2VTZW50J10ub2JzZXJ2ZXJzLmxlbmd0aClcclxuICAgICAgLnRvQmUoMSk7XHJcblxyXG59KSk7YFxyXG5cclxuICB0aGlzLmxpc3RlbkNvZGUgPSBQcmlzbS5oaWdobGlnaHQoY29kZSwgUHJpc20ubGFuZ3VhZ2VzLmphdmFzY3JpcHQpO1xyXG5cclxuICB9XHJcblxyXG4gIHNob3dMaXN0ZW5DbGllbnRDb2RlKCkge1xyXG5cclxuICAgIGxldCBjb2RlID1gXHJcbi8vIHN0YXJ0IGxpc3RlbmluZyBmb3Igc2VydmVyIG1lc3NhZ2VzIGluIG5nT25Jbml0XHJcbm5nT25Jbml0KCkge1xyXG4gICAgbGV0IG9uTWVzc2FnZVNlbnQkID0gbmV3IEJyb2FkY2FzdEV2ZW50TGlzdGVuZXI8Q2hhdE1lc3NhZ2U+KCdPbk1lc3NhZ2VTZW50Jyk7XHJcbiAgICAvLyByZWdpc3RlciB0aGUgbGlzdGVuZXJcclxuICAgIHRoaXMuX2Nvbm5lY3Rpb24ubGlzdGVuKG9uTWVzc2FnZVNlbnQkKTtcclxuXHJcbiAgICAvLyBzdWJzY3JpYmUgdG8gZXZlbnRcclxuICAgIHRoaXMuX3N1YnNjcmlwdGlvbiA9IG9uTWVzc2FnZVNlbnQkLnN1YnNjcmliZSgoY2hhdE1lc3NhZ2U6IENoYXRNZXNzYWdlKSA9PiB7XHJcbiAgICAgIHRoaXMuY2hhdE1lc3NhZ2VzLnB1c2goY2hhdE1lc3NhZ2UpO1xyXG4gICAgfSk7XHJcbn1gO1xyXG5cclxuICAgIHRoaXMubGlzdGVuQ29kZSA9IFByaXNtLmhpZ2hsaWdodChjb2RlLCBQcmlzbS5sYW5ndWFnZXMuamF2YXNjcmlwdCk7XHJcblxyXG4gIH1cclxuXHJcbiAgICBzaG93Q2hhdE1lc3NhZ2VDb2RlKCkge1xyXG4gICAgbGV0IGNvZGUgPSBgXHJcbmV4cG9ydCBjbGFzcyBDaGF0TWVzc2FnZSB7XHJcbiAgY29uc3RydWN0b3IocHVibGljIHVzZXI6IHN0cmluZywgcHVibGljIGNvbnRlbnQ6IHN0cmluZykge1xyXG59YFxyXG4gICAgdGhpcy5saXN0ZW5Db2RlID0gUHJpc20uaGlnaGxpZ2h0KGNvZGUsIFByaXNtLmxhbmd1YWdlcy5qYXZhc2NyaXB0KTtcclxuICB9XHJcblxyXG59XHJcbiJdfQ==
