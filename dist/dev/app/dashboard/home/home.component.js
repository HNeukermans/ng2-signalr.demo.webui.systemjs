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
var TimelineComponent = (function () {
    function TimelineComponent() {
    }
    TimelineComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'timeline-cmp',
            templateUrl: 'timeline.html',
            styleUrls: ['timeline.css'],
        }), 
        __metadata('design:paramtypes', [])
    ], TimelineComponent);
    return TimelineComponent;
}());
exports.TimelineComponent = TimelineComponent;
var ChatComponent = (function () {
    function ChatComponent() {
    }
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
var NotificationComponent = (function () {
    function NotificationComponent() {
    }
    NotificationComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'notifications-cmp',
            templateUrl: 'notifications.html'
        }), 
        __metadata('design:paramtypes', [])
    ], NotificationComponent);
    return NotificationComponent;
}());
exports.NotificationComponent = NotificationComponent;
var HomeComponent = (function () {
    function HomeComponent() {
        this.myInterval = 5000;
        this.index = 0;
        this.slides = [];
        this.imgUrl = [
            "assets/img/slider1.jpg",
            "assets/img/slider2.jpg",
            "assets/img/slider3.jpg",
            "assets/img/slider0.jpg"
        ];
        this.alerts = [
            {
                type: 'danger',
                msg: 'Oh snap! Change a few things up and try submitting again.'
            },
            {
                type: 'success',
                msg: 'Well done! You successfully read this important alert message.',
                closable: true
            }
        ];
        for (var i = 0; i < 4; i++) {
            this.addSlide();
        }
    }
    HomeComponent.prototype.closeAlert = function (i) {
        this.alerts.splice(i, 1);
    };
    HomeComponent.prototype.addSlide = function () {
        var i = this.slides.length;
        this.slides.push({
            image: this.imgUrl[i],
            text: ['Dummy ', 'Dummy ', 'Dummy ', 'Dummy '][this.slides.length % 4] + "\n      \t\t\t" + ['text 0', 'text 1', 'text 2', 'text 3'][this.slides.length % 4]
        });
    };
    HomeComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'home-cmp',
            templateUrl: 'home.component.html'
        }), 
        __metadata('design:paramtypes', [])
    ], HomeComponent);
    return HomeComponent;
}());
exports.HomeComponent = HomeComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9kYXNoYm9hcmQvaG9tZS9ob21lLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEscUJBQTBCLGVBQWUsQ0FBQyxDQUFBO0FBWTFDO0lBQUE7SUFBaUMsQ0FBQztJQU5sQztRQUFDLGdCQUFTLENBQUM7WUFDVixRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsUUFBUSxFQUFFLGNBQWM7WUFDeEIsV0FBVyxFQUFFLGVBQWU7WUFDNUIsU0FBUyxFQUFFLENBQUMsY0FBYyxDQUFDO1NBQzNCLENBQUM7O3lCQUFBO0lBQytCLHdCQUFDO0FBQUQsQ0FBakMsQUFBa0MsSUFBQTtBQUFyQix5QkFBaUIsb0JBQUksQ0FBQTtBQU9sQztJQUFBO0lBQTRCLENBQUM7SUFMN0I7UUFBQyxnQkFBUyxDQUFDO1lBQ1YsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFFBQVEsRUFBRSxVQUFVO1lBQ3BCLFdBQVcsRUFBRSxXQUFXO1NBQ3hCLENBQUM7O3FCQUFBO0lBQzBCLG9CQUFDO0FBQUQsQ0FBNUIsQUFBNkIsSUFBQTtBQUFoQixxQkFBYSxnQkFBRyxDQUFBO0FBTzdCO0lBQUE7SUFBcUMsQ0FBQztJQUx0QztRQUFDLGdCQUFTLENBQUM7WUFDVixRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsUUFBUSxFQUFFLG1CQUFtQjtZQUM3QixXQUFXLEVBQUUsb0JBQW9CO1NBQ2pDLENBQUM7OzZCQUFBO0lBQ21DLDRCQUFDO0FBQUQsQ0FBckMsQUFBc0MsSUFBQTtBQUF6Qiw2QkFBcUIsd0JBQUksQ0FBQTtBQVF0QztJQThCQztRQTVCQSxlQUFVLEdBQVcsSUFBSSxDQUFDO1FBQzFCLFVBQUssR0FBVyxDQUFDLENBQUM7UUFDbEIsV0FBTSxHQUFlLEVBQUUsQ0FBQztRQUN4QixXQUFNLEdBQWU7WUFDcEIsd0JBQXdCO1lBQ3hCLHdCQUF3QjtZQUN4Qix3QkFBd0I7WUFDeEIsd0JBQXdCO1NBQ3hCLENBQUM7UUFHSyxXQUFNLEdBQWlCO1lBQzNCO2dCQUNFLElBQUksRUFBRSxRQUFRO2dCQUNkLEdBQUcsRUFBRSwyREFBMkQ7YUFDakU7WUFDRDtnQkFDRSxJQUFJLEVBQUUsU0FBUztnQkFDZixHQUFHLEVBQUUsZ0VBQWdFO2dCQUNyRSxRQUFRLEVBQUUsSUFBSTthQUNmO1NBQ0YsQ0FBQztRQVFGLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUM7WUFDNUIsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO1FBQ2pCLENBQUM7SUFDRixDQUFDO0lBVE8sa0NBQVUsR0FBakIsVUFBa0IsQ0FBUTtRQUN4QixJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFDM0IsQ0FBQztJQVVGLGdDQUFRLEdBQVI7UUFDQyxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQztRQUMzQixJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQztZQUNoQixLQUFLLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7WUFDckIsSUFBSSxFQUFLLENBQUMsUUFBUSxFQUFFLFFBQVEsRUFBRSxRQUFRLEVBQUUsUUFBUSxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLHNCQUNqRSxDQUFDLFFBQVEsRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFFLFFBQVEsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBRztTQUMxRSxDQUFDLENBQUM7SUFDSixDQUFDO0lBbERGO1FBQUMsZ0JBQVMsQ0FBQztZQUNWLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixRQUFRLEVBQUUsVUFBVTtZQUNwQixXQUFXLEVBQUUscUJBQXFCO1NBQ2xDLENBQUM7O3FCQUFBO0lBZ0RGLG9CQUFDO0FBQUQsQ0E5Q0EsQUE4Q0MsSUFBQTtBQTlDWSxxQkFBYSxnQkE4Q3pCLENBQUEiLCJmaWxlIjoiYXBwL2Rhc2hib2FyZC9ob21lL2hvbWUuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbi8qKlxuKlx0VGhpcyBjbGFzcyByZXByZXNlbnRzIHRoZSBsYXp5IGxvYWRlZCBIb21lQ29tcG9uZW50LlxuKi9cblxuQENvbXBvbmVudCh7XG5cdG1vZHVsZUlkOiBtb2R1bGUuaWQsXG5cdHNlbGVjdG9yOiAndGltZWxpbmUtY21wJyxcblx0dGVtcGxhdGVVcmw6ICd0aW1lbGluZS5odG1sJyxcblx0c3R5bGVVcmxzOiBbJ3RpbWVsaW5lLmNzcyddLFxufSlcbmV4cG9ydCBjbGFzcyBUaW1lbGluZUNvbXBvbmVudCB7IH1cblxuQENvbXBvbmVudCh7XG5cdG1vZHVsZUlkOiBtb2R1bGUuaWQsXG5cdHNlbGVjdG9yOiAnY2hhdC1jbXAnLFxuXHR0ZW1wbGF0ZVVybDogJ2NoYXQuaHRtbCdcbn0pXG5leHBvcnQgY2xhc3MgQ2hhdENvbXBvbmVudCB7fVxuXG5AQ29tcG9uZW50KHtcblx0bW9kdWxlSWQ6IG1vZHVsZS5pZCxcblx0c2VsZWN0b3I6ICdub3RpZmljYXRpb25zLWNtcCcsXG5cdHRlbXBsYXRlVXJsOiAnbm90aWZpY2F0aW9ucy5odG1sJ1xufSlcbmV4cG9ydCBjbGFzcyBOb3RpZmljYXRpb25Db21wb25lbnQgeyB9XG5cbkBDb21wb25lbnQoe1xuXHRtb2R1bGVJZDogbW9kdWxlLmlkLFxuXHRzZWxlY3RvcjogJ2hvbWUtY21wJyxcblx0dGVtcGxhdGVVcmw6ICdob21lLmNvbXBvbmVudC5odG1sJ1xufSlcblxuZXhwb3J0IGNsYXNzIEhvbWVDb21wb25lbnQge1xuXHQvKiBDYXJvdXNlbCBWYXJpYWJsZSAqL1xuXHRteUludGVydmFsOiBudW1iZXIgPSA1MDAwO1xuXHRpbmRleDogbnVtYmVyID0gMDtcblx0c2xpZGVzOiBBcnJheTxhbnk+ID0gW107XG5cdGltZ1VybDogQXJyYXk8YW55PiA9IFtcblx0XHRgYXNzZXRzL2ltZy9zbGlkZXIxLmpwZ2AsXG5cdFx0YGFzc2V0cy9pbWcvc2xpZGVyMi5qcGdgLFxuXHRcdGBhc3NldHMvaW1nL3NsaWRlcjMuanBnYCxcblx0XHRgYXNzZXRzL2ltZy9zbGlkZXIwLmpwZ2Bcblx0XTtcblx0LyogRU5EICovXG5cdC8qIEFsZXJ0IGNvbXBvbmVudCAqL1xuXHRwdWJsaWMgYWxlcnRzOkFycmF5PE9iamVjdD4gPSBbXG5cdCAgIHtcblx0ICAgICB0eXBlOiAnZGFuZ2VyJyxcblx0ICAgICBtc2c6ICdPaCBzbmFwISBDaGFuZ2UgYSBmZXcgdGhpbmdzIHVwIGFuZCB0cnkgc3VibWl0dGluZyBhZ2Fpbi4nXG5cdCAgIH0sXG5cdCAgIHtcblx0ICAgICB0eXBlOiAnc3VjY2VzcycsXG5cdCAgICAgbXNnOiAnV2VsbCBkb25lISBZb3Ugc3VjY2Vzc2Z1bGx5IHJlYWQgdGhpcyBpbXBvcnRhbnQgYWxlcnQgbWVzc2FnZS4nLFxuXHQgICAgIGNsb3NhYmxlOiB0cnVlXG5cdCAgIH1cblx0IF07XG5cblx0IHB1YmxpYyBjbG9zZUFsZXJ0KGk6bnVtYmVyKTp2b2lkIHtcblx0ICAgdGhpcy5hbGVydHMuc3BsaWNlKGksIDEpO1xuXHQgfVxuXHQvKiBFTkQqL1xuXG5cdGNvbnN0cnVjdG9yKCkge1xuXHRcdGZvciAobGV0IGkgPSAwOyBpIDwgNDsgaSsrKSB7XG5cdFx0XHR0aGlzLmFkZFNsaWRlKCk7XG5cdFx0fVxuXHR9XG5cblx0LyogQ2Fyb3VzZWwgKi9cblx0YWRkU2xpZGUoKSB7XG5cdFx0bGV0IGkgPSB0aGlzLnNsaWRlcy5sZW5ndGg7XG5cdFx0dGhpcy5zbGlkZXMucHVzaCh7XG5cdFx0XHRpbWFnZTogdGhpcy5pbWdVcmxbaV0sXG5cdFx0XHR0ZXh0OiBgJHtbJ0R1bW15ICcsICdEdW1teSAnLCAnRHVtbXkgJywgJ0R1bW15ICddW3RoaXMuc2xpZGVzLmxlbmd0aCAlIDRdfVxuICAgICAgXHRcdFx0JHtbJ3RleHQgMCcsICd0ZXh0IDEnLCAndGV4dCAyJywgJ3RleHQgMyddW3RoaXMuc2xpZGVzLmxlbmd0aCAlIDRdfWBcblx0XHR9KTtcblx0fVxuXHQvKiBFTkQgKi9cbn1cbiJdfQ==
