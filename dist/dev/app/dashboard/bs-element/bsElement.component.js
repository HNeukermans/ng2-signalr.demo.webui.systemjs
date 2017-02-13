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
var BSElementComponent = (function () {
    function BSElementComponent(route) {
        this.isConx1Joined = true;
        this.isConx2Joined = true;
        this.conx1Messages = [];
        this.conx2Messages = [];
        this._connection1 = null;
        this._connection2 = null;
        this._connection1 = route.snapshot.data['connections'][0];
        this._connection2 = route.snapshot.data['connections'][1];
    }
    BSElementComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.changeIsJoined('Conx1', this.isConx1Joined);
        this.changeIsJoined('Conx2', this.isConx2Joined);
        var onConn1MessageSent$ = new ng2_signalr_1.BroadcastEventListener('OnRoomMessageSent');
        var onConn2MessageSent$ = new ng2_signalr_1.BroadcastEventListener('OnRoomMessageSent');
        this._connection1.listen(onConn1MessageSent$);
        this._connection2.listen(onConn2MessageSent$);
        this._subscription1 = onConn1MessageSent$.subscribe(function (chatMessage) {
            _this.conx1Messages.push(chatMessage);
        });
        this._subscription2 = onConn2MessageSent$.subscribe(function (chatMessage) {
            _this.conx2Messages.push(chatMessage);
        });
    };
    BSElementComponent.prototype.changeIsJoined = function (connection, isJoined) {
        console.log('connection: ' + connection);
        console.log('isJoined: ' + isJoined);
        var targetConx = connection === 'Conx1' ? this._connection1 : this._connection2;
        var operation = isJoined ? 'JoinRoom' : 'LeaveRoom';
        targetConx.invoke(operation);
    };
    BSElementComponent.prototype.chat = function (connection, message) {
        var targetConx = connection === 'Conx1' ? this._connection1 : this._connection2;
        targetConx.invoke('ChatInRoom', new chat_message_1.ChatMessage('hannes', message));
    };
    BSElementComponent.prototype.ngOnDestroy = function () {
        console.log('ngOnDestroy');
        this._subscription1.unsubscribe();
        this._subscription2.unsubscribe();
        this._connection1.stop();
        this._connection2.stop();
    };
    BSElementComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'bs-element',
            templateUrl: './bs-element.component.html'
        }), 
        __metadata('design:paramtypes', [router_1.ActivatedRoute])
    ], BSElementComponent);
    return BSElementComponent;
}());
exports.BSElementComponent = BSElementComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9kYXNoYm9hcmQvYnMtZWxlbWVudC9ic0VsZW1lbnQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBcUMsZUFBZSxDQUFDLENBQUE7QUFDckQsdUJBQStCLGlCQUFpQixDQUFDLENBQUE7QUFDakQsNEJBQTBELGFBQWEsQ0FBQyxDQUFBO0FBQ3hFLDZCQUE0QixnQ0FBZ0MsQ0FBQyxDQUFBO0FBUzdEO0lBV0UsNEJBQVksS0FBcUI7UUFUMUIsa0JBQWEsR0FBWSxJQUFJLENBQUM7UUFDOUIsa0JBQWEsR0FBWSxJQUFJLENBQUM7UUFDOUIsa0JBQWEsR0FBa0IsRUFBRSxDQUFDO1FBQ2xDLGtCQUFhLEdBQWtCLEVBQUUsQ0FBQztRQUNqQyxpQkFBWSxHQUFzQixJQUFJLENBQUM7UUFDdkMsaUJBQVksR0FBc0IsSUFBSSxDQUFDO1FBSzdDLElBQUksQ0FBQyxZQUFZLEdBQUcsS0FBSyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDMUQsSUFBSSxDQUFDLFlBQVksR0FBRyxLQUFLLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUM1RCxDQUFDO0lBRUQscUNBQVEsR0FBUjtRQUFBLGlCQW1CQztRQWxCQyxJQUFJLENBQUMsY0FBYyxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUM7UUFDakQsSUFBSSxDQUFDLGNBQWMsQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDO1FBRWpELElBQUksbUJBQW1CLEdBQUcsSUFBSSxvQ0FBc0IsQ0FBYyxtQkFBbUIsQ0FBQyxDQUFDO1FBQ3ZGLElBQUksbUJBQW1CLEdBQUcsSUFBSSxvQ0FBc0IsQ0FBYyxtQkFBbUIsQ0FBQyxDQUFDO1FBR3ZGLElBQUksQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFDLG1CQUFtQixDQUFDLENBQUM7UUFDOUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUMsbUJBQW1CLENBQUMsQ0FBQztRQUc5QyxJQUFJLENBQUMsY0FBYyxHQUFHLG1CQUFtQixDQUFDLFNBQVMsQ0FBQyxVQUFDLFdBQXdCO1lBQzNFLEtBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBQ3ZDLENBQUMsQ0FBQyxDQUFDO1FBRUgsSUFBSSxDQUFDLGNBQWMsR0FBRyxtQkFBbUIsQ0FBQyxTQUFTLENBQUMsVUFBQyxXQUF3QjtZQUMzRSxLQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUN2QyxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFRCwyQ0FBYyxHQUFkLFVBQWUsVUFBa0IsRUFBRSxRQUFpQjtRQUNsRCxPQUFPLENBQUMsR0FBRyxDQUFDLGNBQWMsR0FBRyxVQUFVLENBQUMsQ0FBQztRQUN6QyxPQUFPLENBQUMsR0FBRyxDQUFDLFlBQVksR0FBRyxRQUFRLENBQUMsQ0FBQztRQUVyQyxJQUFJLFVBQVUsR0FBRyxVQUFVLEtBQUssT0FBTyxHQUFHLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQztRQUNoRixJQUFJLFNBQVMsR0FBVyxRQUFRLEdBQUcsVUFBVSxHQUFHLFdBQVcsQ0FBQztRQUM1RCxVQUFVLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBQy9CLENBQUM7SUFFRCxpQ0FBSSxHQUFKLFVBQUssVUFBa0IsRUFBRSxPQUFlO1FBQ3RDLElBQUksVUFBVSxHQUFHLFVBQVUsS0FBSyxPQUFPLEdBQUcsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDO1FBQ2hGLFVBQVUsQ0FBQyxNQUFNLENBQUMsWUFBWSxFQUFFLElBQUksMEJBQVcsQ0FBQyxRQUFRLEVBQUUsT0FBTyxDQUFDLENBQUMsQ0FBQztJQUN0RSxDQUFDO0lBRUEsd0NBQVcsR0FBWDtRQUNDLE9BQU8sQ0FBQyxHQUFHLENBQUMsYUFBYSxDQUFDLENBQUM7UUFDM0IsSUFBSSxDQUFDLGNBQWMsQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUNsQyxJQUFJLENBQUMsY0FBYyxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQ2xDLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDekIsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUMzQixDQUFDO0lBL0RIO1FBQUMsZ0JBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixRQUFRLEVBQUUsWUFBWTtZQUN0QixXQUFXLEVBQUUsNkJBQTZCO1NBQzNDLENBQUM7OzBCQUFBO0lBNERGLHlCQUFDO0FBQUQsQ0ExREEsQUEwREMsSUFBQTtBQTFEWSwwQkFBa0IscUJBMEQ5QixDQUFBIiwiZmlsZSI6ImFwcC9kYXNoYm9hcmQvYnMtZWxlbWVudC9ic0VsZW1lbnQuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkRlc3Ryb3kgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEFjdGl2YXRlZFJvdXRlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IFNpZ25hbFJDb25uZWN0aW9uLCBCcm9hZGNhc3RFdmVudExpc3RlbmVyIH0gZnJvbSAnbmcyLXNpZ25hbHInO1xuaW1wb3J0IHsgQ2hhdE1lc3NhZ2UgfSBmcm9tICcuLi8uLi9zaGFyZWQvY2hhdC9jaGF0Lm1lc3NhZ2UnO1xuaW1wb3J0IHsgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcy9TdWJzY3JpcHRpb24nO1xuXG5AQ29tcG9uZW50KHtcbiAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgc2VsZWN0b3I6ICdicy1lbGVtZW50JyxcbiAgdGVtcGxhdGVVcmw6ICcuL2JzLWVsZW1lbnQuY29tcG9uZW50Lmh0bWwnXG59KVxuXG5leHBvcnQgY2xhc3MgQlNFbGVtZW50Q29tcG9uZW50ICBpbXBsZW1lbnRzIE9uRGVzdHJveSB7XG5cbiAgcHVibGljIGlzQ29ueDFKb2luZWQ6IGJvb2xlYW4gPSB0cnVlO1xuICBwdWJsaWMgaXNDb254MkpvaW5lZDogYm9vbGVhbiA9IHRydWU7XG4gIHB1YmxpYyBjb254MU1lc3NhZ2VzOiBDaGF0TWVzc2FnZVtdID0gW107XG4gIHB1YmxpYyBjb254Mk1lc3NhZ2VzOiBDaGF0TWVzc2FnZVtdID0gW107XG4gIHByaXZhdGUgX2Nvbm5lY3Rpb24xOiBTaWduYWxSQ29ubmVjdGlvbiA9IG51bGw7XG4gIHByaXZhdGUgX2Nvbm5lY3Rpb24yOiBTaWduYWxSQ29ubmVjdGlvbiA9IG51bGw7XG4gIHByaXZhdGUgX3N1YnNjcmlwdGlvbjE6IFN1YnNjcmlwdGlvbjtcbiAgcHJpdmF0ZSBfc3Vic2NyaXB0aW9uMjogU3Vic2NyaXB0aW9uO1xuXG4gIGNvbnN0cnVjdG9yKHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZSkge1xuICAgIHRoaXMuX2Nvbm5lY3Rpb24xID0gcm91dGUuc25hcHNob3QuZGF0YVsnY29ubmVjdGlvbnMnXVswXTtcbiAgICB0aGlzLl9jb25uZWN0aW9uMiA9IHJvdXRlLnNuYXBzaG90LmRhdGFbJ2Nvbm5lY3Rpb25zJ11bMV07XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLmNoYW5nZUlzSm9pbmVkKCdDb254MScsIHRoaXMuaXNDb254MUpvaW5lZCk7XG4gICAgdGhpcy5jaGFuZ2VJc0pvaW5lZCgnQ29ueDInLCB0aGlzLmlzQ29ueDJKb2luZWQpO1xuXG4gICAgbGV0IG9uQ29ubjFNZXNzYWdlU2VudCQgPSBuZXcgQnJvYWRjYXN0RXZlbnRMaXN0ZW5lcjxDaGF0TWVzc2FnZT4oJ09uUm9vbU1lc3NhZ2VTZW50Jyk7XG4gICAgbGV0IG9uQ29ubjJNZXNzYWdlU2VudCQgPSBuZXcgQnJvYWRjYXN0RXZlbnRMaXN0ZW5lcjxDaGF0TWVzc2FnZT4oJ09uUm9vbU1lc3NhZ2VTZW50Jyk7XG5cbiAgICAvLyByZWdpc3RlciB0aGUgbGlzdGVuZXJcbiAgICB0aGlzLl9jb25uZWN0aW9uMS5saXN0ZW4ob25Db25uMU1lc3NhZ2VTZW50JCk7XG4gICAgdGhpcy5fY29ubmVjdGlvbjIubGlzdGVuKG9uQ29ubjJNZXNzYWdlU2VudCQpO1xuXG4gICAgLy8gc3Vic2NyaWJlIHRvIGV2ZW50XG4gICAgdGhpcy5fc3Vic2NyaXB0aW9uMSA9IG9uQ29ubjFNZXNzYWdlU2VudCQuc3Vic2NyaWJlKChjaGF0TWVzc2FnZTogQ2hhdE1lc3NhZ2UpID0+IHtcbiAgICAgIHRoaXMuY29ueDFNZXNzYWdlcy5wdXNoKGNoYXRNZXNzYWdlKTtcbiAgICB9KTtcblxuICAgIHRoaXMuX3N1YnNjcmlwdGlvbjIgPSBvbkNvbm4yTWVzc2FnZVNlbnQkLnN1YnNjcmliZSgoY2hhdE1lc3NhZ2U6IENoYXRNZXNzYWdlKSA9PiB7XG4gICAgICB0aGlzLmNvbngyTWVzc2FnZXMucHVzaChjaGF0TWVzc2FnZSk7XG4gICAgfSk7XG4gIH1cblxuICBjaGFuZ2VJc0pvaW5lZChjb25uZWN0aW9uOiBzdHJpbmcsIGlzSm9pbmVkOiBib29sZWFuKSB7XG4gICAgY29uc29sZS5sb2coJ2Nvbm5lY3Rpb246ICcgKyBjb25uZWN0aW9uKTtcbiAgICBjb25zb2xlLmxvZygnaXNKb2luZWQ6ICcgKyBpc0pvaW5lZCk7XG5cbiAgICBsZXQgdGFyZ2V0Q29ueCA9IGNvbm5lY3Rpb24gPT09ICdDb254MScgPyB0aGlzLl9jb25uZWN0aW9uMSA6IHRoaXMuX2Nvbm5lY3Rpb24yO1xuICAgIGxldCBvcGVyYXRpb246IHN0cmluZyA9IGlzSm9pbmVkID8gJ0pvaW5Sb29tJyA6ICdMZWF2ZVJvb20nO1xuICAgIHRhcmdldENvbnguaW52b2tlKG9wZXJhdGlvbik7XG4gIH1cblxuICBjaGF0KGNvbm5lY3Rpb246IHN0cmluZywgbWVzc2FnZTogc3RyaW5nKSB7XG4gICAgbGV0IHRhcmdldENvbnggPSBjb25uZWN0aW9uID09PSAnQ29ueDEnID8gdGhpcy5fY29ubmVjdGlvbjEgOiB0aGlzLl9jb25uZWN0aW9uMjtcbiAgICB0YXJnZXRDb254Lmludm9rZSgnQ2hhdEluUm9vbScsIG5ldyBDaGF0TWVzc2FnZSgnaGFubmVzJywgbWVzc2FnZSkpO1xuICB9XG5cbiAgIG5nT25EZXN0cm95KCkge1xuICAgIGNvbnNvbGUubG9nKCduZ09uRGVzdHJveScpO1xuICAgIHRoaXMuX3N1YnNjcmlwdGlvbjEudW5zdWJzY3JpYmUoKTtcbiAgICB0aGlzLl9zdWJzY3JpcHRpb24yLnVuc3Vic2NyaWJlKCk7XG4gICAgdGhpcy5fY29ubmVjdGlvbjEuc3RvcCgpO1xuICAgIHRoaXMuX2Nvbm5lY3Rpb24yLnN0b3AoKTtcbiAgfVxufVxuIl19
