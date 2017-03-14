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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9kYXNoYm9hcmQvYnMtZWxlbWVudC9ic0VsZW1lbnQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBcUMsZUFBZSxDQUFDLENBQUE7QUFDckQsdUJBQStCLGlCQUFpQixDQUFDLENBQUE7QUFFakQsNkJBQTRCLGdDQUFnQyxDQUFDLENBQUE7QUFFN0Qsd0JBQXVCLGNBQWMsQ0FBQyxDQUFBO0FBV3RDO0lBaUJFLDRCQUFZLEtBQXFCO1FBZjFCLGtCQUFhLEdBQVksSUFBSSxDQUFDO1FBQzlCLGtCQUFhLEdBQVksSUFBSSxDQUFDO1FBQzlCLGtCQUFhLEdBQWtCLEVBQUUsQ0FBQztRQUNsQyxrQkFBYSxHQUFrQixFQUFFLENBQUM7UUFDbEMsa0JBQWEsR0FBb0IsSUFBSSxpQkFBTyxFQUFVLENBQUM7UUFDdkQsa0JBQWEsR0FBb0IsSUFBSSxpQkFBTyxFQUFVLENBQUM7UUFFdkQsdUJBQWtCLEdBQXFCLElBQUksaUJBQU8sRUFBVyxDQUFDO1FBQzlELHVCQUFrQixHQUFxQixJQUFJLGlCQUFPLEVBQVcsQ0FBQztRQUU3RCxpQkFBWSxHQUFzQixJQUFJLENBQUM7UUFDdkMsaUJBQVksR0FBc0IsSUFBSSxDQUFDO1FBSzdDLElBQUksQ0FBQyxZQUFZLEdBQUcsS0FBSyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDMUQsSUFBSSxDQUFDLFlBQVksR0FBRyxLQUFLLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUM1RCxDQUFDO0lBRUQscUNBQVEsR0FBUjtRQUFBLGlCQTRDQztRQTNDQyxJQUFJLENBQUMsY0FBYyxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUM7UUFDakQsSUFBSSxDQUFDLGNBQWMsQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLGFBQWEsQ0FBQyxD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LFFBQVEsR0FBRyxVQUFVLEdBQUcsV0FBVyxDQUFDO1FBQzVELFVBQVUsQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLENBQUM7SUFDL0IsQ0FBQztJQUVELGlDQUFJLEdBQUosVUFBSyxVQUFrQixFQUFFLE9BQWU7UUFDdEMsSUFBSSxVQUFVLEdBQUcsVUFBVSxLQUFLLE9BQU8sR0FBRyxJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUM7UUFDaEYsVUFBVSxDQUFDLE1BQU0sQ0FBQyxZQUFZLEVBQUUsSUFBSSwwQkFBVyxDQUFDLFFBQVEsRUFBRSxPQUFPLENBQUMsQ0FBQyxDQUFDO0lBQ3RFLENBQUM7SUFFQSx3Q0FBVyxHQUFYO1FBQ0MsT0FBTyxDQUFDLEdBQUcsQ0FBQyxhQUFhLENBQUMsQ0FBQztRQUMzQixJQUFJLENBQUMsY0FBYyxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQ2xDLElBQUksQ0FBQyxjQUFjLENBQUMsV0FBVyxFQUFFLENBQUM7UUFDbEMsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUN6QixJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksRUFBRSxDQUFDO0lBQzNCLENBQUM7SUEvRkg7UUFBQyxnQkFBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFFBQVEsRUFBRSxZQUFZO1lBQ3RCLFdBQVcsRUFBRSw2QkFBNkI7U0FDM0MsQ0FBQzs7MEJBQUE7SUE0RkYseUJBQUM7QUFBRCxDQTFGQSxBQTBGQyxJQUFBO0FBMUZZLDBCQUFrQixxQkEwRjlCLENBQUEiLCJmaWxlIjoiYXBwL2Rhc2hib2FyZC9icy1lbGVtZW50L2JzRWxlbWVudC5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uRGVzdHJveSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQWN0aXZhdGVkUm91dGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgU2lnbmFsUkNvbm5lY3Rpb24sIEJyb2FkY2FzdEV2ZW50TGlzdGVuZXIgfSBmcm9tICduZzItc2lnbmFscic7XG5pbXBvcnQgeyBDaGF0TWVzc2FnZSB9IGZyb20gJy4uLy4uL3NoYXJlZC9jaGF0L2NoYXQubWVzc2FnZSc7XG5pbXBvcnQgeyBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzL1N1YnNjcmlwdGlvbic7XG5pbXBvcnQgeyBTdWJqZWN0IH0gZnJvbSdyeGpzL1N1YmplY3QnO1xuXG5cbmRlY2xhcmUgdmFyIEFwcEluc2lnaHRzOiBhbnk7XG5cbkBDb21wb25lbnQoe1xuICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICBzZWxlY3RvcjogJ2JzLWVsZW1lbnQnLFxuICB0ZW1wbGF0ZVVybDogJy4vYnMtZWxlbWVudC5jb21wb25lbnQuaHRtbCdcbn0pXG5cbmV4cG9ydCBjbGFzcyBCU0VsZW1lbnRDb21wb25lbnQgIGltcGxlbWVudHMgT25EZXN0cm95IHtcblxuICBwdWJsaWMgaXNDb254MUpvaW5lZDogYm9vbGVhbiA9IHRydWU7XG4gIHB1YmxpYyBpc0NvbngySm9pbmVkOiBib29sZWFuID0gdHJ1ZTtcbiAgcHVibGljIGNvbngxTWVzc2FnZXM6IENoYXRNZXNzYWdlW10gPSBbXTtcbiAgcHVibGljIGNvbngyTWVzc2FnZXM6IENoYXRNZXNzYWdlW10gPSBbXTtcbiAgcHVibGljIG9uQ29ueDFLZXl1cCQ6IFN1YmplY3Q8c3RyaW5nPiA9IG5ldyBTdWJqZWN0PHN0cmluZz4oKTtcbiAgcHVibGljIG9uQ29ueDJLZXl1cCQ6IFN1YmplY3Q8c3RyaW5nPiA9IG5ldyBTdWJqZWN0PHN0cmluZz4oKTtcblxuICBwdWJsaWMgY29ubjFQZWVySXNUeXBpbmckOiBTdWJqZWN0PGJvb2xlYW4+ID0gbmV3IFN1YmplY3Q8Ym9vbGVhbj4oKTtcbiAgcHVibGljIGNvbm4yUGVlcklzVHlwaW5nJDogU3ViamVjdDxib29sZWFuPiA9IG5ldyBTdWJqZWN0PGJvb2xlYW4+KCk7XG5cbiAgcHJpdmF0ZSBfY29ubmVjdGlvbjE6IFNpZ25hbFJDb25uZWN0aW9uID0gbnVsbDtcbiAgcHJpdmF0ZSBfY29ubmVjdGlvbjI6IFNpZ25hbFJDb25uZWN0aW9uID0gbnVsbDtcbiAgcHJpdmF0ZSBfc3Vic2NyaXB0aW9uMTogU3Vic2NyaXB0aW9uO1xuICBwcml2YXRlIF9zdWJzY3JpcHRpb24yOiBTdWJzY3JpcHRpb247XG5cbiAgY29uc3RydWN0b3Iocm91dGU6IEFjdGl2YXRlZFJvdXRlKSB7XG4gICAgdGhpcy5fY29ubmVjdGlvbjEgPSByb3V0ZS5zbmFwc2hvdC5kYXRhWydjb25uZWN0aW9ucyddWzBdO1xuICAgIHRoaXMuX2Nvbm5lY3Rpb24yID0gcm91dGUuc25hcHNob3QuZGF0YVsnY29ubmVjdGlvbnMnXVsxXTtcbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMuY2hhbmdlSXNKb2luZWQoJ0NvbngxJywgdGhpcy5pc0NvbngxSm9pbmVkKTtcbiAgICB0aGlzLmNoYW5nZUlzSm9pbmVkKCdDb254MicsIHRoaXMuaXNDb254MkpvaW5lZCk7XG5cbiAgICAvLyByZWdpc3RlciB0aGUgbGlzdGVuZXJcbiAgICBsZXQgb25Db25uMU1lc3NhZ2VTZW50JCA9IHRoaXMuX2Nvbm5lY3Rpb24xLmxpc3RlbkZvcignT25Sb29tTWVzc2FnZVNlbnQnKTtcbiAgICBsZXQgb25Db25uMk1lc3NhZ2VTZW50JCA9IHRoaXMuX2Nvbm5lY3Rpb24yLmxpc3RlbkZvcignT25Sb29tTWVzc2FnZVNlbnQnKTtcbiAgICBsZXQgb25Db25uMUtleVVwJCA9IHRoaXMuX2Nvbm5lY3Rpb24xLmxpc3RlbkZvcignT25Sb29tS2V5dXBTZW50Jyk7XG4gICAgbGV0IG9uQ29ubjJLZXlVcCQgPSB0aGlzLl9jb25uZWN0aW9uMi5saXN0ZW5Gb3IoJ09uUm9vbUtleXVwU2VudCcpO1xuXG4gICAgLy8gc3Vic2NyaWJlIHRvIGV2ZW50XG4gICAgdGhpcy5fc3Vic2NyaXB0aW9uMSA9IG9uQ29ubjFNZXNzYWdlU2VudCQuc3Vic2NyaWJlKChjaGF0TWVzc2FnZTogQ2hhdE1lc3NhZ2UpID0+IHtcbiAgICAgIHRoaXMuY29ueDFNZXNzYWdlcy5wdXNoKGNoYXRNZXNzYWdlKTtcbiAgICB9KTtcblxuICAgIHRoaXMuX3N1YnNjcmlwdGlvbjIgPSBvbkNvbm4yTWVzc2FnZVNlbnQkLnN1YnNjcmliZSgoY2hhdE1lc3NhZ2U6IENoYXRNZXNzYWdlKSA9PiB7XG4gICAgICB0aGlzLmNvbngyTWVzc2FnZXMucHVzaChjaGF0TWVzc2FnZSk7XG4gICAgfSk7XG5cbiAgICB0aGlzLl9zdWJzY3JpcHRpb24xID0gb25Db25uMUtleVVwJC5zdWJzY3JpYmUoKHN0YXR1czogc3RyaW5nKSA9PiB7XG4gICAgICBjb25zb2xlLmxvZygnb25Db25uMUtleVVwIGV2ZW50IHJlY2VpdmVkLiA6ICcrIHN0YXR1cyk7XG4gICAgICBsZXQgc2hvdyA9IHN0YXR1cyA9PT0gJ3N0YXJ0ZWQnID8gdHJ1ZSA6IGZhbHNlO1xuICAgICAgdGhpcy5jb25uMVBlZXJJc1R5cGluZyQubmV4dChzaG93KTtcbiAgICB9KTtcblxuICAgIHRoaXMuX3N1YnNjcmlwdGlvbjIgPSBvbkNvbm4yS2V5VXAkLnN1YnNjcmliZSgoc3RhdHVzOiBzdHJpbmcpID0+IHtcbiAgICAgIGNvbnNvbGUubG9nKCdvbkNvbm4yS2V5VXAgZXZlbnQgcmVjZWl2ZWQuIDogJyArIHN0YXR1cyk7XG4gICAgICBsZXQgc2hvdyA9IHN0YXR1cyA9PT0gJ3N0YXJ0ZWQnID8gdHJ1ZSA6IGZhbHNlO1xuICAgICAgIHRoaXMuY29ubjJQZWVySXNUeXBpbmckLm5leHQoc2hvdyk7XG4gICAgfSk7XG5cbiAgICB0aGlzLm9uQ29ueDFLZXl1cCQuc3Vic2NyaWJlKCh0ZXh0KSA9PiB7XG4gICAgICBsZXQgc3RhdHVzID0gdGV4dCA9PT0gJycgPyAnc3RvcHBlZCcgOiAnc3RhcnRlZCc7XG4gICAgICB0aGlzLl9jb25uZWN0aW9uMS5pbnZva2UoJ0tleXVwSW5Sb29tJywgc3RhdHVzKTtcbiAgICB9KTtcblxuICAgIHRoaXMub25Db254MktleXVwJC5zdWJzY3JpYmUoKHRleHQpID0+IHtcbiAgICAgIGxldCBzdGF0dXMgPSB0ZXh0ID09PSAnJyA/ICdzdG9wcGVkJyA6ICdzdGFydGVkJztcbiAgICAgIHRoaXMuX2Nvbm5lY3Rpb24xLmludm9rZSgnS2V5dXBJblJvb20nLCBzdGF0dXMpO1xuICAgIH0pO1xuXG4gICAgY29uc29sZS5sb2coJ2xvZ2dpbmcgdGhlIGNvbm5lY3Rpb24gaWQ6ICcgKyB0aGlzLl9jb25uZWN0aW9uMS5pZCk7XG4gICAgY29uc29sZS5sb2coJ2xvZ2dpbmcgdGhlIGNvbm5lY3Rpb24gaWQ6ICcgKyB0aGlzLl9jb25uZWN0aW9uMi5pZCk7XG5cbiAgfVxuXG5cbiAgY2hhbmdlSXNKb2luZWQoY29ubmVjdGlvbjogc3RyaW5nLCBpc0pvaW5lZDogYm9vbGVhbikge1xuICAgIGNvbnNvbGUubG9nKCdjb25uZWN0aW9uOiAnICsgY29ubmVjdGlvbik7XG4gICAgY29uc29sZS5sb2coJ2lzSm9pbmVkOiAnICsgaXNKb2luZWQpO1xuXG4gICAgbGV0IHRhcmdldENvbnggPSBjb25uZWN0aW9uID09PSAnQ29ueDEnID8gdGhpcy5fY29ubmVjdGlvbjEgOiB0aGlzLl9jb25uZWN0aW9uMjtcbiAgICBsZXQgb3BlcmF0aW9uOiBzdHJpbmcgPSBpc0pvaW5lZCA/ICdKb2luUm9vbScgOiAnTGVhdmVSb29tJztcbiAgICB0YXJnZXRDb254Lmludm9rZShvcGVyYXRpb24pO1xuICB9XG5cbiAgY2hhdChjb25uZWN0aW9uOiBzdHJpbmcsIG1lc3NhZ2U6IHN0cmluZykge1xuICAgIGxldCB0YXJnZXRDb254ID0gY29ubmVjdGlvbiA9PT0gJ0NvbngxJyA/IHRoaXMuX2Nvbm5lY3Rpb24xIDogdGhpcy5fY29ubmVjdGlvbjI7XG4gICAgdGFyZ2V0Q29ueC5pbnZva2UoJ0NoYXRJblJvb20nLCBuZXcgQ2hhdE1lc3NhZ2UoJ2hhbm5lcycsIG1lc3NhZ2UpKTtcbiAgfVxuXG4gICBuZ09uRGVzdHJveSgpIHtcbiAgICBjb25zb2xlLmxvZygnbmdPbkRlc3Ryb3knKTtcbiAgICB0aGlzLl9zdWJzY3JpcHRpb24xLnVuc3Vic2NyaWJlKCk7XG4gICAgdGhpcy5fc3Vic2NyaXB0aW9uMi51bnN1YnNjcmliZSgpO1xuICAgIHRoaXMuX2Nvbm5lY3Rpb24xLnN0b3AoKTtcbiAgICB0aGlzLl9jb25uZWN0aW9uMi5zdG9wKCk7XG4gIH1cbn1cbiJdfQ==
