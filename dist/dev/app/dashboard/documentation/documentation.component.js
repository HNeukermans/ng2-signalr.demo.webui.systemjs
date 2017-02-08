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
        var code = "\n// send chat message to server\nchat() {\n  this._connection.invoke('Chat', new ChatMessage('Hannes', message))\n    .catch((err:any) => console.log('Failed to invoke 'Chat'. Error occured. Error:' + err));\n  }\n}";
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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9kYXNoYm9hcmQvZG9jdW1lbnRhdGlvbi9kb2N1bWVudGF0aW9uLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEscUJBQXVELGVBQWUsQ0FBQyxDQUFBO0FBQ3ZFLHVCQUErQixpQkFBaUIsQ0FBQyxDQUFBO0FBQ2pELDRCQUEwRCxhQUFhLENBQUMsQ0FBQTtBQUN4RSw2QkFBNEIsZ0JBQWdCLENBQUMsQ0FBQTtBQVc3QztJQVNFLGdDQUFZLEtBQXFCO1FBUDFCLGlCQUFZLEdBQWtCLEVBQUUsQ0FBQztRQUNqQyxlQUFVLEdBQVcsRUFBRSxDQUFDO1FBQ3hCLGFBQVEsR0FBVyxFQUFFLENBQUM7UUFNM0IsSUFBSSxDQUFDLFdBQVcsR0FBRyxLQUFLLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQztJQUN2RCxDQUFDO0lBRUQsbURBQWtCLEdBQWxCO1FBQ0UsTUFBTSxDQUFDLEtBQUssQ0FBQyxZQUFZLEVBQUUsQ0FBQztJQUM5QixDQUFDO0lBRUQseUNBQVEsR0FBUjtRQUFBLGlCQVNDO1FBUkMsSUFBSSxjQUFjLEdBQUcsSUFBSSxvQ0FBc0IsQ0FBYyxlQUFlLENBQUMsQ0FBQztRQUU5RSxJQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxjQUFjLENBQUMsQ0FBQztRQUd4QyxJQUFJLENBQUMsYUFBYSxHQUFHLGNBQWMsQ0FBQyxTQUFTLENBQUMsVUFBQyxXQUF3QjtZQUNyRSxLQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUN0QyxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFRCw0Q0FBVyxHQUFYO1FBQ0UsT0FBTyxDQUFDLEdBQUcsQ0FBQyxhQUFhLENBQUMsQ0FBQztRQUMzQixJQUFJLENBQUMsYUFBYSxDQUFDLFdBQVcsRUFBRSxDQUFDO0lBQ25DLENBQUM7SUFFRCw4Q0FBYSxHQUFiLFVBQWMsT0FBZTtRQUMzQixPQUFPLENBQUMsR0FBRyxDQUFDLGVBQWUsQ0FBQyxDQUFDO1FBQzdCLElBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDLE1BQU0sRUFBRSxJQUFJLDBCQUFXLENBQUMsUUFBUSxFQUFFLE9BQU8sQ0FBQyxDQUFDO2FBQ2hFLEtBQUssQ0FBQyxVQUFDLEdBQU8sSUFBSyxPQUFBLE9BQU8sQ0FBQyxHQUFHLENBQUMsa0RBQWtELEdBQUcsR0FBRyxDQUFDLEVBQXJFLENBQXFFLENBQUMsQ0FBQztJQUMvRixDQUFDO0lBRUQsbURBQWtCLEdBQWxCO1FBQ0UsSUFBSSxJQUFJLEdBQUcsME5BTWIsQ0FBQztRQUNDLElBQUksQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFDLFNBQVMsQ0FBQyxJQUFJLEVBQUUsS0FBSyxDQUFDLFNBQVMsQ0FBQyxVQUFVLENBQUMsQ0FBQztJQUNwRSxDQUFDO0lBRUQsbURBQWtCLEdBQWxCO1FBQ0UsSUFBSSxJQUFJLEdBQUcsa0ZBTWIsQ0FBQTtRQUNFLElBQUksQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFDLFNBQVMsQ0FBQyxJQUFJLEVBQUUsS0FBSyxDQUFDLFNBQVMsQ0FBQyxVQUFVLENBQUMsQ0FBQztJQUNwRSxDQUFDO0lBRUQsaURBQWdCLEdBQWhCO1FBQ0UsSUFBSSxJQUFJLEdBQUcsdVpBV1IsQ0FBQTtRQUNILElBQUksQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFDLFNBQVMsQ0FBQyxJQUFJLEVBQUUsS0FBSyxDQUFDLFNBQVMsQ0FBQyxVQUFVLENBQUMsQ0FBQztJQUVwRSxDQUFDO0lBRUQscURBQW9CLEdBQXBCO1FBQ0UsSUFBSSxJQUFJLEdBQUcsbUtBTWIsQ0FBQTtRQUNFLElBQUksQ0FBQyxVQUFVLEdBQUcsS0FBSyxDQUFDLFNBQVMsQ0FBQyxJQUFJLEVBQUUsS0FBSyxDQUFDLFNBQVMsQ0FBQyxVQUFVLENBQUMsQ0FBQztJQUN0RSxDQUFDO0lBRUQsbURBQWtCLEdBQWxCO1FBRUUsSUFBSSxJQUFJLEdBQUcsb2JBY1YsQ0FBQTtRQUVILElBQUksQ0FBQyxVQUFVLEdBQUcsS0FBSyxDQUFDLFNBQVMsQ0FBQyxJQUFJLEVBQUUsS0FBSyxDQUFDLFNBQVMsQ0FBQyxVQUFVLENBQUMsQ0FBQztJQUVwRSxDQUFDO0lBRUQscURBQW9CLEdBQXBCO1FBRUUsSUFBSSxJQUFJLEdBQUUsNFlBV1osQ0FBQztRQUVDLElBQUksQ0FBQyxVQUFVLEdBQUcsS0FBSyxDQUFDLFNBQVMsQ0FBQyxJQUFJLEVBQUUsS0FBSyxDQUFDLFNBQVMsQ0FBQyxVQUFVLENBQUMsQ0FBQztJQUV0RSxDQUFDO0lBRUMsb0RBQW1CLEdBQW5CO1FBQ0EsSUFBSSxJQUFJLEdBQUcsK0ZBR2IsQ0FBQTtRQUNFLElBQUksQ0FBQyxVQUFVLEdBQUcsS0FBSyxDQUFDLFNBQVMsQ0FBQyxJQUFJLEVBQUUsS0FBSyxDQUFDLFNBQVMsQ0FBQyxVQUFVLENBQUMsQ0FBQztJQUN0RSxDQUFDO0lBOUlIO1FBQUMsZ0JBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixRQUFRLEVBQUUsZUFBZTtZQUN6QixXQUFXLEVBQUUsZ0NBQWdDO1NBQzlDLENBQUM7OzhCQUFBO0lBNElGLDZCQUFDO0FBQUQsQ0ExSUEsQUEwSUMsSUFBQTtBQTFJWSw4QkFBc0IseUJBMElsQyxDQUFBIiwiZmlsZSI6ImFwcC9kYXNoYm9hcmQvZG9jdW1lbnRhdGlvbi9kb2N1bWVudGF0aW9uLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgQWZ0ZXJWaWV3Q2hlY2tlZCwgT25EZXN0cm95IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBBY3RpdmF0ZWRSb3V0ZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBTaWduYWxSQ29ubmVjdGlvbiwgQnJvYWRjYXN0RXZlbnRMaXN0ZW5lciB9IGZyb20gJ25nMi1zaWduYWxyJztcbmltcG9ydCB7IENoYXRNZXNzYWdlIH0gZnJvbSAnLi9jaGF0Lm1lc3NhZ2UnO1xuaW1wb3J0IHsgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcy9TdWJzY3JpcHRpb24nO1xuXG5kZWNsYXJlIHZhciBQcmlzbTogYW55O1xuXG5AQ29tcG9uZW50KHtcbiAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgc2VsZWN0b3I6ICdkb2N1bWVudGF0aW9uJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2RvY3VtZW50YXRpb24uY29tcG9uZW50Lmh0bWwnXG59KVxuXG5leHBvcnQgY2xhc3MgRG9jdW1lbnRhdGlvbkNvbXBvbmVudCAgaW1wbGVtZW50cyBBZnRlclZpZXdDaGVja2VkLCBPbkRlc3Ryb3kge1xuXG4gIHB1YmxpYyBjaGF0TWVzc2FnZXM6IENoYXRNZXNzYWdlW10gPSBbXTtcbiAgcHVibGljIGxpc3RlbkNvZGU6IHN0cmluZyA9ICcnO1xuICBwdWJsaWMgY2hhdENvZGU6IHN0cmluZyA9ICcnO1xuXG4gIHByaXZhdGUgX2Nvbm5lY3Rpb246IFNpZ25hbFJDb25uZWN0aW9uO1xuICBwcml2YXRlIF9zdWJzY3JpcHRpb246IFN1YnNjcmlwdGlvbjtcblxuICBjb25zdHJ1Y3Rvcihyb3V0ZTogQWN0aXZhdGVkUm91dGUpIHtcbiAgICB0aGlzLl9jb25uZWN0aW9uID0gcm91dGUuc25hcHNob3QuZGF0YVsnY29ubmVjdGlvbiddO1xuICB9XG5cbiAgbmdBZnRlclZpZXdDaGVja2VkKCk6IGFueSB7XG4gICAgcmV0dXJuIFByaXNtLmhpZ2hsaWdodEFsbCgpO1xuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgbGV0IG9uTWVzc2FnZVNlbnQkID0gbmV3IEJyb2FkY2FzdEV2ZW50TGlzdGVuZXI8Q2hhdE1lc3NhZ2U+KCdPbk1lc3NhZ2VTZW50Jyk7XG4gICAgLy8gcmVnaXN0ZXIgdGhlIGxpc3RlbmVyXG4gICAgdGhpcy5fY29ubmVjdGlvbi5saXN0ZW4ob25NZXNzYWdlU2VudCQpO1xuXG4gICAgLy8gc3Vic2NyaWJlIHRvIGV2ZW50XG4gICAgdGhpcy5fc3Vic2NyaXB0aW9uID0gb25NZXNzYWdlU2VudCQuc3Vic2NyaWJlKChjaGF0TWVzc2FnZTogQ2hhdE1lc3NhZ2UpID0+IHtcbiAgICAgIHRoaXMuY2hhdE1lc3NhZ2VzLnB1c2goY2hhdE1lc3NhZ2UpO1xuICAgIH0pO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKSB7XG4gICAgY29uc29sZS5sb2coJ25nT25EZXN0cm95Jyk7XG4gICAgdGhpcy5fc3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XG4gIH1cblxuICBvbkNoYXRNZXNzYWdlKG1lc3NhZ2U6IHN0cmluZykge1xuICAgIGNvbnNvbGUubG9nKCdvbkNoYXRNZXNzYWdlJyk7XG4gICAgdGhpcy5fY29ubmVjdGlvbi5pbnZva2UoJ0NoYXQnLCBuZXcgQ2hhdE1lc3NhZ2UoJ0hhbm5lcycsIG1lc3NhZ2UpKVxuICAgICAgLmNhdGNoKChlcnI6YW55KSA9PiBjb25zb2xlLmxvZygnRmFpbGVkIHRvIGludm9rZSBcXCdDaGF0XFwnLiBFcnJvciBvY2N1cmVkLiBFcnJvcjonICsgZXJyKSk7XG4gIH1cblxuICBzaG93Q2hhdENsaWVudENvZGUoKSB7XG4gICAgbGV0IGNvZGUgPSBgXG4vLyBzZW5kIGNoYXQgbWVzc2FnZSB0byBzZXJ2ZXJcbmNoYXQoKSB7XG4gIHRoaXMuX2Nvbm5lY3Rpb24uaW52b2tlKCdDaGF0JywgbmV3IENoYXRNZXNzYWdlKCdIYW5uZXMnLCBtZXNzYWdlKSlcbiAgICAuY2F0Y2goKGVycjphbnkpID0+IGNvbnNvbGUubG9nKCdGYWlsZWQgdG8gaW52b2tlIFxcJ0NoYXRcXCcuIEVycm9yIG9jY3VyZWQuIEVycm9yOicgKyBlcnIpKTtcbiAgfVxufWA7XG4gICAgdGhpcy5jaGF0Q29kZSA9IFByaXNtLmhpZ2hsaWdodChjb2RlLCBQcmlzbS5sYW5ndWFnZXMuamF2YXNjcmlwdCk7XG4gIH1cblxuICBzaG93Q2hhdFNlcnZlckNvZGUoKSB7XG4gICAgbGV0IGNvZGUgPSBgXG4vLyBjaGF0XG5wdWJsaWMgdm9pZCBDaGF0KENoYXRNZXNzYWdlIG1lc3NhZ2UpXG57XG4gICAgLy9kbyBzdHVmZlxuICAgIC4uLi5cbn1gXG4gICAgdGhpcy5jaGF0Q29kZSA9IFByaXNtLmhpZ2hsaWdodChjb2RlLCBQcmlzbS5sYW5ndWFnZXMuamF2YXNjcmlwdCk7XG4gIH1cblxuICBzaG93Q2hhdFNwZWNDb2RlKCkge1xuICAgIGxldCBjb2RlID0gYFxuaXQoJ2NoYXQoKSBzaG91bGQgaW52b2tlIENoYXQgd2l0aCBtZXNzYWdlJyxcbiAgaW5qZWN0KFtEb2N1bWVudGF0aW9uQ29tcG9uZW50XSwgKGNvbXBvbmVudDogRG9jdW1lbnRhdGlvbkNvbXBvbmVudCkgPT4ge1xuXG4gICAgc3B5T24oY29ubmVjdGlvbk1vY2ssICdpbnZva2UnKS5hbmQucmV0dXJuVmFsdWUoUHJvbWlzZS5yZXNvbHZlKFtdKSk7XG5cbiAgICBjb21wb25lbnQubWVzc2FnZSA9ICdNeSBtZXNzYWdlJztcbiAgICBjb21wb25lbnQuY2hhdCgpO1xuXG4gICAgZXhwZWN0KGNvbm5lY3Rpb25Nb2NrLmludm9rZSlcbiAgICAgIC50b0hhdmVCZWVuQ2FsbGVkV2l0aCgnQ2hhdCcsIGphc21pbmUub2JqZWN0Q29udGFpbmluZyh7IGNvbnRlbnQ6IGNvbXBvbmVudC5tZXNzYWdlIH0pKTtcbiAgfSkpO2BcbiAgICB0aGlzLmNoYXRDb2RlID0gUHJpc20uaGlnaGxpZ2h0KGNvZGUsIFByaXNtLmxhbmd1YWdlcy5qYXZhc2NyaXB0KTtcblxuICB9XG5cbiAgc2hvd0xpc3RlblNlcnZlckNvZGUoKSB7XG4gICAgbGV0IGNvZGUgPSBgXG4vLyBicm9hZGNhc3RcbnB1YmxpYyB2b2lkIHh4eChDaGF0TWVzc2FnZSBtZXNzYWdlKVxue1xuICAgIC8vIGJyb2FkY2FzdCB0byBhbGwgY2xpZW50c1xuICAgIENsaWVudHMuQWxsLk9uTWVzc2FnZVNlbnQobmV3IENoYXRNZXNzYWdlKCdIYW5uZXMnLCAnTWVzc2FnZScpKTtcbn1gXG4gICAgdGhpcy5saXN0ZW5Db2RlID0gUHJpc20uaGlnaGxpZ2h0KGNvZGUsIFByaXNtLmxhbmd1YWdlcy5qYXZhc2NyaXB0KTtcbiAgfVxuXG4gIHNob3dMaXN0ZW5TcGVjQ29kZSgpIHtcblxuICAgIGxldCBjb2RlID0gYFxuaXQoJ25nSW5pdCgpIHNob3VsZCBsaXN0ZW4gZm9yIGJyb2FkY2FzdCBldmVudCcsXG4gIGluamVjdChbRG9jdW1lbnRhdGlvbkNvbXBvbmVudF0sIChjb21wb25lbnQ6IERvY3VtZW50YXRpb25Db21wb25lbnQpID0+IHtcblxuICAgIHNweU9uKGNvbm5lY3Rpb25Nb2NrLCAnbGlzdGVuJykuYW5kLmNhbGxUaHJvdWdoKCk7XG5cbiAgICBjb21wb25lbnQubmdPbkluaXQoKTtcblxuICAgIGV4cGVjdChjb25uZWN0aW9uTW9jay5saXN0ZW4pXG4gICAgICAudG9IYXZlQmVlbkNhbGxlZFdpdGgoamFzbWluZS5vYmplY3RDb250YWluaW5nKHsgZXZlbnQ6ICdPbk1lc3NhZ2VTZW50JyB9KSk7XG5cbiAgICBleHBlY3QoY29ubmVjdGlvbk1vY2subGlzdGVuZXJzWydPbk1lc3NhZ2VTZW50J10ub2JzZXJ2ZXJzLmxlbmd0aClcbiAgICAgIC50b0JlKDEpO1xuXG59KSk7YFxuXG4gIHRoaXMubGlzdGVuQ29kZSA9IFByaXNtLmhpZ2hsaWdodChjb2RlLCBQcmlzbS5sYW5ndWFnZXMuamF2YXNjcmlwdCk7XG5cbiAgfVxuXG4gIHNob3dMaXN0ZW5DbGllbnRDb2RlKCkge1xuXG4gICAgbGV0IGNvZGUgPWBcbi8vIHN0YXJ0IGxpc3RlbmluZyBmb3Igc2VydmVyIG1lc3NhZ2VzIGluIG5nT25Jbml0XG5uZ09uSW5pdCgpIHtcbiAgICBsZXQgb25NZXNzYWdlU2VudCQgPSBuZXcgQnJvYWRjYXN0RXZlbnRMaXN0ZW5lcjxDaGF0TWVzc2FnZT4oJ09uTWVzc2FnZVNlbnQnKTtcbiAgICAvLyByZWdpc3RlciB0aGUgbGlzdGVuZXJcbiAgICB0aGlzLl9jb25uZWN0aW9uLmxpc3Rlbihvbk1lc3NhZ2VTZW50JCk7XG5cbiAgICAvLyBzdWJzY3JpYmUgdG8gZXZlbnRcbiAgICB0aGlzLl9zdWJzY3JpcHRpb24gPSBvbk1lc3NhZ2VTZW50JC5zdWJzY3JpYmUoKGNoYXRNZXNzYWdlOiBDaGF0TWVzc2FnZSkgPT4ge1xuICAgICAgdGhpcy5jaGF0TWVzc2FnZXMucHVzaChjaGF0TWVzc2FnZSk7XG4gICAgfSk7XG59YDtcblxuICAgIHRoaXMubGlzdGVuQ29kZSA9IFByaXNtLmhpZ2hsaWdodChjb2RlLCBQcmlzbS5sYW5ndWFnZXMuamF2YXNjcmlwdCk7XG5cbiAgfVxuXG4gICAgc2hvd0NoYXRNZXNzYWdlQ29kZSgpIHtcbiAgICBsZXQgY29kZSA9IGBcbmV4cG9ydCBjbGFzcyBDaGF0TWVzc2FnZSB7XG4gIGNvbnN0cnVjdG9yKHB1YmxpYyB1c2VyOiBzdHJpbmcsIHB1YmxpYyBjb250ZW50OiBzdHJpbmcpIHtcbn1gXG4gICAgdGhpcy5saXN0ZW5Db2RlID0gUHJpc20uaGlnaGxpZ2h0KGNvZGUsIFByaXNtLmxhbmd1YWdlcy5qYXZhc2NyaXB0KTtcbiAgfVxuXG59XG4iXX0=
