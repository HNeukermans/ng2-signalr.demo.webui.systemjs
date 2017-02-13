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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9kYXNoYm9hcmQvaG9tZS9ob21lLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEscUJBQTBCLGVBQWUsQ0FBQyxDQUFBO0FBWTFDO0lBQUE7SUFBaUMsQ0FBQztJQU5sQztRQUFDLGdCQUFTLENBQUM7WUFDVixRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsUUFBUSxFQUFFLGNBQWM7WUFDeEIsV0FBVyxFQUFFLGVBQWU7WUFDNUIsU0FBUyxFQUFFLENBQUMsY0FBYyxDQUFDO1NBQzNCLENBQUM7O3lCQUFBO0lBQytCLHdCQUFDO0FBQUQsQ0FBakMsQUFBa0MsSUFBQTtBQUFyQix5QkFBaUIsb0JBQUksQ0FBQTtBQU9sQztJQUFBO0lBQTRCLENBQUM7SUFMN0I7UUFBQyxnQkFBUyxDQUFDO1lBQ1YsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFFBQVEsRUFBRSxVQUFVO1lBQ3BCLFdBQVcsRUFBRSxXQUFXO1NBQ3hCLENBQUM7O3FCQUFBO0lBQzBCLG9CQUFDO0FBQUQsQ0FBNUIsQUFBNkIsSUFBQTtBQUFoQixxQkFBYSxnQkFBRyxDQUFBO0FBTzdCO0lBQUE7SUFBcUMsQ0FBQztJQUx0QztRQUFDLGdCQUFTLENBQUM7WUFDVixRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsUUFBUSxFQUFFLG1CQUFtQjtZQUM3QixXQUFXLEVBQUUsb0JBQW9CO1NBQ2pDLENBQUM7OzZCQUFBO0lBQ21DLDRCQUFDO0FBQUQsQ0FBckMsQUFBc0MsSUFBQTtBQUF6Qiw2QkFBcUIsd0JBQUksQ0FBQTtBQVF0QztJQThCQztRQTVCQSxlQUFVLEdBQVcsSUFBSSxDQUFDO1FBQzFCLFVBQUssR0FBVyxDQUFDLENBQUM7UUFDbEIsV0FBTSxHQUFlLEVBQUUsQ0FBQztRQUN4QixXQUFNLEdBQWU7WUFDcEIsd0JBQXdCO1lBQ3hCLHdCQUF3QjtZQUN4Qix3QkFBd0I7WUFDeEIsd0JBQXdCO1NBQ3hCLENBQUM7UUFHSyxXQUFNLEdBQWlCO1lBQzNCO2dCQUNFLElBQUksRUFBRSxRQUFRO2dCQUNkLEdBQUcsRUFBRSwyREFBMkQ7YUFDakU7WUFDRDtnQkFDRSxJQUFJLEVBQUUsU0FBUztnQkFDZixHQUFHLEVBQUUsZ0VBQWdFO2dCQUNyRSxRQUFRLEVBQUUsSUFBSTthQUNmO1NBQ0YsQ0FBQztRQVFGLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUM7WUFDNUIsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO1FBQ2pCLENBQUM7SUFDRixDQUFDO0lBVE8sa0NBQVUsR0FBakIsVUFBa0IsQ0FBUTtRQUN4QixJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFDM0IsQ0FBQztJQVVGLGdDQUFRLEdBQVI7UUFDQyxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQztRQUMzQixJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQztZQUNoQixLQUFLLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7WUFDckIsSUFBSSxFQUFLLENBQUMsUUFBUSxFQUFFLFFBQVEsRUFBRSxRQUFRLEVBQUUsUUFBUSxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLHNCQUNqRSxDQUFDLFFBQVEsRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFFLFFBQVEsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBRztTQUMxRSxDQUFDLENBQUM7SUFDSixDQUFDO0lBbERGO1FBQUMsZ0JBQVMsQ0FBQztZQUNWLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixRQUFRLEVBQUUsVUFBVTtZQUNwQixXQUFXLEVBQUUscUJBQXFCO1NBQ2xDLENBQUM7O3FCQUFBO0lBZ0RGLG9CQUFDO0FBQUQsQ0E5Q0EsQUE4Q0MsSUFBQTtBQTlDWSxxQkFBYSxnQkE4Q3pCLENBQUEiLCJmaWxlIjoiYXBwL2Rhc2hib2FyZC9ob21lL2hvbWUuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG4vKipcclxuKlx0VGhpcyBjbGFzcyByZXByZXNlbnRzIHRoZSBsYXp5IGxvYWRlZCBIb21lQ29tcG9uZW50LlxyXG4qL1xyXG5cclxuQENvbXBvbmVudCh7XHJcblx0bW9kdWxlSWQ6IG1vZHVsZS5pZCxcclxuXHRzZWxlY3RvcjogJ3RpbWVsaW5lLWNtcCcsXHJcblx0dGVtcGxhdGVVcmw6ICd0aW1lbGluZS5odG1sJyxcclxuXHRzdHlsZVVybHM6IFsndGltZWxpbmUuY3NzJ10sXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBUaW1lbGluZUNvbXBvbmVudCB7IH1cclxuXHJcbkBDb21wb25lbnQoe1xyXG5cdG1vZHVsZUlkOiBtb2R1bGUuaWQsXHJcblx0c2VsZWN0b3I6ICdjaGF0LWNtcCcsXHJcblx0dGVtcGxhdGVVcmw6ICdjaGF0Lmh0bWwnXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBDaGF0Q29tcG9uZW50IHt9XHJcblxyXG5AQ29tcG9uZW50KHtcclxuXHRtb2R1bGVJZDogbW9kdWxlLmlkLFxyXG5cdHNlbGVjdG9yOiAnbm90aWZpY2F0aW9ucy1jbXAnLFxyXG5cdHRlbXBsYXRlVXJsOiAnbm90aWZpY2F0aW9ucy5odG1sJ1xyXG59KVxyXG5leHBvcnQgY2xhc3MgTm90aWZpY2F0aW9uQ29tcG9uZW50IHsgfVxyXG5cclxuQENvbXBvbmVudCh7XHJcblx0bW9kdWxlSWQ6IG1vZHVsZS5pZCxcclxuXHRzZWxlY3RvcjogJ2hvbWUtY21wJyxcclxuXHR0ZW1wbGF0ZVVybDogJ2hvbWUuY29tcG9uZW50Lmh0bWwnXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgSG9tZUNvbXBvbmVudCB7XHJcblx0LyogQ2Fyb3VzZWwgVmFyaWFibGUgKi9cclxuXHRteUludGVydmFsOiBudW1iZXIgPSA1MDAwO1xyXG5cdGluZGV4OiBudW1iZXIgPSAwO1xyXG5cdHNsaWRlczogQXJyYXk8YW55PiA9IFtdO1xyXG5cdGltZ1VybDogQXJyYXk8YW55PiA9IFtcclxuXHRcdGBhc3NldHMvaW1nL3NsaWRlcjEuanBnYCxcclxuXHRcdGBhc3NldHMvaW1nL3NsaWRlcjIuanBnYCxcclxuXHRcdGBhc3NldHMvaW1nL3NsaWRlcjMuanBnYCxcclxuXHRcdGBhc3NldHMvaW1nL3NsaWRlcjAuanBnYFxyXG5cdF07XHJcblx0LyogRU5EICovXHJcblx0LyogQWxlcnQgY29tcG9uZW50ICovXHJcblx0cHVibGljIGFsZXJ0czpBcnJheTxPYmplY3Q+ID0gW1xyXG5cdCAgIHtcclxuXHQgICAgIHR5cGU6ICdkYW5nZXInLFxyXG5cdCAgICAgbXNnOiAnT2ggc25hcCEgQ2hhbmdlIGEgZmV3IHRoaW5ncyB1cCBhbmQgdHJ5IHN1Ym1pdHRpbmcgYWdhaW4uJ1xyXG5cdCAgIH0sXHJcblx0ICAge1xyXG5cdCAgICAgdHlwZTogJ3N1Y2Nlc3MnLFxyXG5cdCAgICAgbXNnOiAnV2VsbCBkb25lISBZb3Ugc3VjY2Vzc2Z1bGx5IHJlYWQgdGhpcyBpbXBvcnRhbnQgYWxlcnQgbWVzc2FnZS4nLFxyXG5cdCAgICAgY2xvc2FibGU6IHRydWVcclxuXHQgICB9XHJcblx0IF07XHJcblxyXG5cdCBwdWJsaWMgY2xvc2VBbGVydChpOm51bWJlcik6dm9pZCB7XHJcblx0ICAgdGhpcy5hbGVydHMuc3BsaWNlKGksIDEpO1xyXG5cdCB9XHJcblx0LyogRU5EKi9cclxuXHJcblx0Y29uc3RydWN0b3IoKSB7XHJcblx0XHRmb3IgKGxldCBpID0gMDsgaSA8IDQ7IGkrKykge1xyXG5cdFx0XHR0aGlzLmFkZFNsaWRlKCk7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHQvKiBDYXJvdXNlbCAqL1xyXG5cdGFkZFNsaWRlKCkge1xyXG5cdFx0bGV0IGkgPSB0aGlzLnNsaWRlcy5sZW5ndGg7XHJcblx0XHR0aGlzLnNsaWRlcy5wdXNoKHtcclxuXHRcdFx0aW1hZ2U6IHRoaXMuaW1nVXJsW2ldLFxyXG5cdFx0XHR0ZXh0OiBgJHtbJ0R1bW15ICcsICdEdW1teSAnLCAnRHVtbXkgJywgJ0R1bW15ICddW3RoaXMuc2xpZGVzLmxlbmd0aCAlIDRdfVxyXG4gICAgICBcdFx0XHQke1sndGV4dCAwJywgJ3RleHQgMScsICd0ZXh0IDInLCAndGV4dCAzJ11bdGhpcy5zbGlkZXMubGVuZ3RoICUgNF19YFxyXG5cdFx0fSk7XHJcblx0fVxyXG5cdC8qIEVORCAqL1xyXG59XHJcbiJdfQ==
