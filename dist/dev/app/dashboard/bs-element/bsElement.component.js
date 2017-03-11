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
var chat_message_1 = require('../../shared/chat/chat.message');
var Subject_1 = require('rxjs/Subject');
var BSElementComponent = (function () {
    function BSElementComponent(route) {
        this.isConx1Joined = true;
        this.isConx2Joined = true;
        this.conx1Messages = [];
        this.conx2Messages = [];
        this.onConx1Keyup$ = new Subject_1.Subject();
        this.onConx2Keyup$ = new Subject_1.Subject();
        this.conn1PeerIsTyping$ = new Subject_1.Subject();
        this.conn2PeerIsTyping$ = new Subject_1.Subject();
        this._connection1 = null;
        this._connection2 = null;
        this._connection1 = route.snapshot.data['connections'][0];
        this._connection2 = route.snapshot.data['connections'][1];
    }
    BSElementComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.changeIsJoined('Conx1', this.isConx1Joined);
        this.changeIsJoined('Conx2', this.isConx2Joined);
        var onConn1MessageSent$ = this._connection1.listenFor('OnRoomMessageSent');
        var onConn2MessageSent$ = this._connection2.listenFor('OnRoomMessageSent');
        var onConn1KeyUp$ = this._connection1.listenFor('OnRoomKeyupSent');
        var onConn2KeyUp$ = this._connection2.listenFor('OnRoomKeyupSent');
        this._subscription1 = onConn1MessageSent$.subscribe(function (chatMessage) {
            _this.conx1Messages.push(chatMessage);
        });
        this._subscription2 = onConn2MessageSent$.subscribe(function (chatMessage) {
            _this.conx2Messages.push(chatMessage);
        });
        this._subscription1 = onConn1KeyUp$.subscribe(function (status) {
            console.log('onConn1KeyUp event received. : ' + status);
            var show = status === 'started' ? true : false;
            _this.conn1PeerIsTyping$.next(show);
        });
        this._subscription2 = onConn2KeyUp$.subscribe(function (status) {
            console.log('onConn2KeyUp event received. : ' + status);
            var show = status === 'started' ? true : false;
            _this.conn2PeerIsTyping$.next(show);
        });
        this.onConx1Keyup$.subscribe(function (text) {
            var status = text === '' ? 'stopped' : 'started';
            _this._connection1.invoke('KeyupInRoom', status);
        });
        this.onConx2Keyup$.subscribe(function (text) {
            var status = text === '' ? 'stopped' : 'started';
            _this._connection1.invoke('KeyupInRoom', status);
        });
        console.log('logging the connection id: ' + this._connection1.id);
        console.log('logging the connection id: ' + this._connection2.id);
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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9kYXNoYm9hcmQvYnMtZWxlbWVudC9ic0VsZW1lbnQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBcUMsZUFBZSxDQUFDLENBQUE7QUFDckQsdUJBQStCLGlCQUFpQixDQUFDLENBQUE7QUFFakQsNkJBQTRCLGdDQUFnQyxDQUFDLENBQUE7QUFFN0Qsd0JBQXVCLGNBQWMsQ0FBQyxDQUFBO0FBUXRDO0lBaUJFLDRCQUFZLEtBQXFCO1FBZjFCLGtCQUFhLEdBQVksSUFBSSxDQUFDO1FBQzlCLGtCQUFhLEdBQVksSUFBSSxDQUFDO1FBQzlCLGtCQUFhLEdBQWtCLEVBQUUsQ0FBQztRQUNsQyxrQkFBYSxHQUFrQixFQUFFLENBQUM7UUFDbEMsa0JBQWEsR0FBb0IsSUFBSSxpQkFBTyxFQUFVLENBQUM7UUFDdkQsa0JBQWEsR0FBb0IsSUFBSSxpQkFBTyxFQUFVLENBQUM7UUFFdkQsdUJBQWtCLEdBQXFCLElBQUksaUJBQU8sRUFBVyxDQUFDO1FBQzlELHVCQUFrQixHQUFxQixJQUFJLGlCQUFPLEVBQVcsQ0FBQztRQUU3RCxpQkFBWSxHQUFzQixJQUFJLENBQUM7UUFDdkMsaUJBQVksR0FBc0IsSUFBSSxDQUFDO1FBSzdDLElBQUksQ0FBQyxZQUFZLEdBQUcsS0FBSyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDMUQsSUFBSSxDQUFDLFlBQVksR0FBRyxLQUFLLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUM1RCxDQUFDO0lBRUQscUNBQVEsR0FBUjtRQUFBLGlCQTJDQztRQTFDQyxJQUFJLENBQUMsY0FBYyxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUM7UUFDakQsSUFBSSxDQUFDLGNBQWMsQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLGFBQWEsQ0FBQyxD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LFFBQVEsR0FBRyxVQUFVLEdBQUcsV0FBVyxDQUFDO1FBQzVELFVBQVUsQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLENBQUM7SUFDL0IsQ0FBQztJQUVELGlDQUFJLEdBQUosVUFBSyxVQUFrQixFQUFFLE9BQWU7UUFDdEMsSUFBSSxVQUFVLEdBQUcsVUFBVSxLQUFLLE9BQU8sR0FBRyxJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUM7UUFDaEYsVUFBVSxDQUFDLE1BQU0sQ0FBQyxZQUFZLEVBQUUsSUFBSSwwQkFBVyxDQUFDLFFBQVEsRUFBRSxPQUFPLENBQUMsQ0FBQyxDQUFDO0lBQ3RFLENBQUM7SUFFQSx3Q0FBVyxHQUFYO1FBQ0MsT0FBTyxDQUFDLEdBQUcsQ0FBQyxhQUFhLENBQUMsQ0FBQztRQUMzQixJQUFJLENBQUMsY0FBYyxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQ2xDLElBQUksQ0FBQyxjQUFjLENBQUMsV0FBVyxFQUFFLENBQUM7UUFDbEMsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUN6QixJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksRUFBRSxDQUFDO0lBQzNCLENBQUM7SUE5Rkg7UUFBQyxnQkFBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFFBQVEsRUFBRSxZQUFZO1lBQ3RCLFdBQVcsRUFBRSw2QkFBNkI7U0FDM0MsQ0FBQzs7MEJBQUE7SUEyRkYseUJBQUM7QUFBRCxDQXpGQSxBQXlGQyxJQUFBO0FBekZZLDBCQUFrQixxQkF5RjlCLENBQUEiLCJmaWxlIjoiYXBwL2Rhc2hib2FyZC9icy1lbGVtZW50L2JzRWxlbWVudC5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uRGVzdHJveSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQWN0aXZhdGVkUm91dGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgU2lnbmFsUkNvbm5lY3Rpb24sIEJyb2FkY2FzdEV2ZW50TGlzdGVuZXIgfSBmcm9tICduZzItc2lnbmFscic7XG5pbXBvcnQgeyBDaGF0TWVzc2FnZSB9IGZyb20gJy4uLy4uL3NoYXJlZC9jaGF0L2NoYXQubWVzc2FnZSc7XG5pbXBvcnQgeyBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzL1N1YnNjcmlwdGlvbic7XG5pbXBvcnQgeyBTdWJqZWN0IH0gZnJvbSdyeGpzL1N1YmplY3QnO1xuXG5AQ29tcG9uZW50KHtcbiAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgc2VsZWN0b3I6ICdicy1lbGVtZW50JyxcbiAgdGVtcGxhdGVVcmw6ICcuL2JzLWVsZW1lbnQuY29tcG9uZW50Lmh0bWwnXG59KVxuXG5leHBvcnQgY2xhc3MgQlNFbGVtZW50Q29tcG9uZW50ICBpbXBsZW1lbnRzIE9uRGVzdHJveSB7XG5cbiAgcHVibGljIGlzQ29ueDFKb2luZWQ6IGJvb2xlYW4gPSB0cnVlO1xuICBwdWJsaWMgaXNDb254MkpvaW5lZDogYm9vbGVhbiA9IHRydWU7XG4gIHB1YmxpYyBjb254MU1lc3NhZ2VzOiBDaGF0TWVzc2FnZVtdID0gW107XG4gIHB1YmxpYyBjb254Mk1lc3NhZ2VzOiBDaGF0TWVzc2FnZVtdID0gW107XG4gIHB1YmxpYyBvbkNvbngxS2V5dXAkOiBTdWJqZWN0PHN0cmluZz4gPSBuZXcgU3ViamVjdDxzdHJpbmc+KCk7XG4gIHB1YmxpYyBvbkNvbngyS2V5dXAkOiBTdWJqZWN0PHN0cmluZz4gPSBuZXcgU3ViamVjdDxzdHJpbmc+KCk7XG5cbiAgcHVibGljIGNvbm4xUGVlcklzVHlwaW5nJDogU3ViamVjdDxib29sZWFuPiA9IG5ldyBTdWJqZWN0PGJvb2xlYW4+KCk7XG4gIHB1YmxpYyBjb25uMlBlZXJJc1R5cGluZyQ6IFN1YmplY3Q8Ym9vbGVhbj4gPSBuZXcgU3ViamVjdDxib29sZWFuPigpO1xuXG4gIHByaXZhdGUgX2Nvbm5lY3Rpb24xOiBTaWduYWxSQ29ubmVjdGlvbiA9IG51bGw7XG4gIHByaXZhdGUgX2Nvbm5lY3Rpb24yOiBTaWduYWxSQ29ubmVjdGlvbiA9IG51bGw7XG4gIHByaXZhdGUgX3N1YnNjcmlwdGlvbjE6IFN1YnNjcmlwdGlvbjtcbiAgcHJpdmF0ZSBfc3Vic2NyaXB0aW9uMjogU3Vic2NyaXB0aW9uO1xuXG4gIGNvbnN0cnVjdG9yKHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZSkge1xuICAgIHRoaXMuX2Nvbm5lY3Rpb24xID0gcm91dGUuc25hcHNob3QuZGF0YVsnY29ubmVjdGlvbnMnXVswXTtcbiAgICB0aGlzLl9jb25uZWN0aW9uMiA9IHJvdXRlLnNuYXBzaG90LmRhdGFbJ2Nvbm5lY3Rpb25zJ11bMV07XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLmNoYW5nZUlzSm9pbmVkKCdDb254MScsIHRoaXMuaXNDb254MUpvaW5lZCk7XG4gICAgdGhpcy5jaGFuZ2VJc0pvaW5lZCgnQ29ueDInLCB0aGlzLmlzQ29ueDJKb2luZWQpO1xuXG4gICAgLy8gcmVnaXN0ZXIgdGhlIGxpc3RlbmVyXG4gICAgbGV0IG9uQ29ubjFNZXNzYWdlU2VudCQgPSB0aGlzLl9jb25uZWN0aW9uMS5saXN0ZW5Gb3IoJ09uUm9vbU1lc3NhZ2VTZW50Jyk7XG4gICAgbGV0IG9uQ29ubjJNZXNzYWdlU2VudCQgPSB0aGlzLl9jb25uZWN0aW9uMi5saXN0ZW5Gb3IoJ09uUm9vbU1lc3NhZ2VTZW50Jyk7XG4gICAgbGV0IG9uQ29ubjFLZXlVcCQgPSB0aGlzLl9jb25uZWN0aW9uMS5saXN0ZW5Gb3IoJ09uUm9vbUtleXVwU2VudCcpO1xuICAgIGxldCBvbkNvbm4yS2V5VXAkID0gdGhpcy5fY29ubmVjdGlvbjIubGlzdGVuRm9yKCdPblJvb21LZXl1cFNlbnQnKTtcblxuICAgIC8vIHN1YnNjcmliZSB0byBldmVudFxuICAgIHRoaXMuX3N1YnNjcmlwdGlvbjEgPSBvbkNvbm4xTWVzc2FnZVNlbnQkLnN1YnNjcmliZSgoY2hhdE1lc3NhZ2U6IENoYXRNZXNzYWdlKSA9PiB7XG4gICAgICB0aGlzLmNvbngxTWVzc2FnZXMucHVzaChjaGF0TWVzc2FnZSk7XG4gICAgfSk7XG5cbiAgICB0aGlzLl9zdWJzY3JpcHRpb24yID0gb25Db25uMk1lc3NhZ2VTZW50JC5zdWJzY3JpYmUoKGNoYXRNZXNzYWdlOiBDaGF0TWVzc2FnZSkgPT4ge1xuICAgICAgdGhpcy5jb254Mk1lc3NhZ2VzLnB1c2goY2hhdE1lc3NhZ2UpO1xuICAgIH0pO1xuXG4gICAgdGhpcy5fc3Vic2NyaXB0aW9uMSA9IG9uQ29ubjFLZXlVcCQuc3Vic2NyaWJlKChzdGF0dXM6IHN0cmluZykgPT4ge1xuICAgICAgY29uc29sZS5sb2coJ29uQ29ubjFLZXlVcCBldmVudCByZWNlaXZlZC4gOiAnKyBzdGF0dXMpO1xuICAgICAgbGV0IHNob3cgPSBzdGF0dXMgPT09ICdzdGFydGVkJyA/IHRydWUgOiBmYWxzZTtcbiAgICAgIHRoaXMuY29ubjFQZWVySXNUeXBpbmckLm5leHQoc2hvdyk7XG4gICAgfSk7XG5cbiAgICB0aGlzLl9zdWJzY3JpcHRpb24yID0gb25Db25uMktleVVwJC5zdWJzY3JpYmUoKHN0YXR1czogc3RyaW5nKSA9PiB7XG4gICAgICBjb25zb2xlLmxvZygnb25Db25uMktleVVwIGV2ZW50IHJlY2VpdmVkLiA6ICcgKyBzdGF0dXMpO1xuICAgICAgbGV0IHNob3cgPSBzdGF0dXMgPT09ICdzdGFydGVkJyA/IHRydWUgOiBmYWxzZTtcbiAgICAgICB0aGlzLmNvbm4yUGVlcklzVHlwaW5nJC5uZXh0KHNob3cpO1xuICAgIH0pO1xuXG4gICAgdGhpcy5vbkNvbngxS2V5dXAkLnN1YnNjcmliZSgodGV4dCkgPT4ge1xuICAgICAgbGV0IHN0YXR1cyA9IHRleHQgPT09ICcnID8gJ3N0b3BwZWQnIDogJ3N0YXJ0ZWQnO1xuICAgICAgdGhpcy5fY29ubmVjdGlvbjEuaW52b2tlKCdLZXl1cEluUm9vbScsIHN0YXR1cyk7XG4gICAgfSk7XG5cbiAgICB0aGlzLm9uQ29ueDJLZXl1cCQuc3Vic2NyaWJlKCh0ZXh0KSA9PiB7XG4gICAgICBsZXQgc3RhdHVzID0gdGV4dCA9PT0gJycgPyAnc3RvcHBlZCcgOiAnc3RhcnRlZCc7XG4gICAgICB0aGlzLl9jb25uZWN0aW9uMS5pbnZva2UoJ0tleXVwSW5Sb29tJywgc3RhdHVzKTtcbiAgICB9KTtcblxuICAgIGNvbnNvbGUubG9nKCdsb2dnaW5nIHRoZSBjb25uZWN0aW9uIGlkOiAnICsgdGhpcy5fY29ubmVjdGlvbjEuaWQpO1xuICAgIGNvbnNvbGUubG9nKCdsb2dnaW5nIHRoZSBjb25uZWN0aW9uIGlkOiAnICsgdGhpcy5fY29ubmVjdGlvbjIuaWQpO1xuICB9XG5cblxuICBjaGFuZ2VJc0pvaW5lZChjb25uZWN0aW9uOiBzdHJpbmcsIGlzSm9pbmVkOiBib29sZWFuKSB7XG4gICAgY29uc29sZS5sb2coJ2Nvbm5lY3Rpb246ICcgKyBjb25uZWN0aW9uKTtcbiAgICBjb25zb2xlLmxvZygnaXNKb2luZWQ6ICcgKyBpc0pvaW5lZCk7XG5cbiAgICBsZXQgdGFyZ2V0Q29ueCA9IGNvbm5lY3Rpb24gPT09ICdDb254MScgPyB0aGlzLl9jb25uZWN0aW9uMSA6IHRoaXMuX2Nvbm5lY3Rpb24yO1xuICAgIGxldCBvcGVyYXRpb246IHN0cmluZyA9IGlzSm9pbmVkID8gJ0pvaW5Sb29tJyA6ICdMZWF2ZVJvb20nO1xuICAgIHRhcmdldENvbnguaW52b2tlKG9wZXJhdGlvbik7XG4gIH1cblxuICBjaGF0KGNvbm5lY3Rpb246IHN0cmluZywgbWVzc2FnZTogc3RyaW5nKSB7XG4gICAgbGV0IHRhcmdldENvbnggPSBjb25uZWN0aW9uID09PSAnQ29ueDEnID8gdGhpcy5fY29ubmVjdGlvbjEgOiB0aGlzLl9jb25uZWN0aW9uMjtcbiAgICB0YXJnZXRDb254Lmludm9rZSgnQ2hhdEluUm9vbScsIG5ldyBDaGF0TWVzc2FnZSgnaGFubmVzJywgbWVzc2FnZSkpO1xuICB9XG5cbiAgIG5nT25EZXN0cm95KCkge1xuICAgIGNvbnNvbGUubG9nKCduZ09uRGVzdHJveScpO1xuICAgIHRoaXMuX3N1YnNjcmlwdGlvbjEudW5zdWJzY3JpYmUoKTtcbiAgICB0aGlzLl9zdWJzY3JpcHRpb24yLnVuc3Vic2NyaWJlKCk7XG4gICAgdGhpcy5fY29ubmVjdGlvbjEuc3RvcCgpO1xuICAgIHRoaXMuX2Nvbm5lY3Rpb24yLnN0b3AoKTtcbiAgfVxufVxuIl19
