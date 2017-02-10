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
var TopNavComponent = (function () {
    function TopNavComponent() {
    }
    TopNavComponent.prototype.changeTheme = function (color) {
        var link = $('<link>');
        link
            .appendTo('head')
            .attr({ type: 'text/css', rel: 'stylesheet' })
            .attr('href', 'themes/app-' + color + '.css');
    };
    TopNavComponent.prototype.rtl = function () {
        var body = $('body');
        body.toggleClass('rtl');
    };
    TopNavComponent.prototype.sidebarToggler = function () {
        var sidebar = $('#sidebar');
        var mainContainer = $('.main-container');
        sidebar.toggleClass('sidebar-left-zero');
        mainContainer.toggleClass('main-container-ml-zero');
    };
    TopNavComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'top-nav',
            templateUrl: 'topnav.html',
        }), 
        __metadata('design:paramtypes', [])
    ], TopNavComponent);
    return TopNavComponent;
}());
exports.TopNavComponent = TopNavComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9zaGFyZWQvdG9wbmF2L3RvcG5hdi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEscUJBQTBCLGVBQWUsQ0FBQyxDQUFBO0FBUTFDO0lBQUE7SUFvQkEsQ0FBQztJQW5CQSxxQ0FBVyxHQUFYLFVBQVksS0FBYTtRQUN4QixJQUFJLElBQUksR0FBUSxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDNUIsSUFBSTthQUNGLFFBQVEsQ0FBQyxNQUFNLENBQUM7YUFDaEIsSUFBSSxDQUFDLEVBQUMsSUFBSSxFQUFHLFVBQVUsRUFBRSxHQUFHLEVBQUcsWUFBWSxFQUFDLENBQUM7YUFDN0MsSUFBSSxDQUFDLE1BQU0sRUFBRSxhQUFhLEdBQUMsS0FBSyxHQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQzVDLENBQUM7SUFFRCw2QkFBRyxHQUFIO1FBQ0MsSUFBSSxJQUFJLEdBQVEsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQzFCLElBQUksQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDekIsQ0FBQztJQUVELHdDQUFjLEdBQWQ7UUFDQyxJQUFJLE9BQU8sR0FBUSxDQUFDLENBQUMsVUFBVSxDQUFDLENBQUM7UUFDakMsSUFBSSxhQUFhLEdBQVEsQ0FBQyxDQUFDLGlCQUFpQixDQUFDLENBQUM7UUFDOUMsT0FBTyxDQUFDLFdBQVcsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDO1FBQ3pDLGFBQWEsQ0FBQyxXQUFXLENBQUMsd0JBQXdCLENBQUMsQ0FBQztJQUNyRCxDQUFDO0lBekJGO1FBQUMsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixRQUFRLEVBQUUsU0FBUztZQUNuQixXQUFXLEVBQUUsYUFBYTtTQUM3QixDQUFDOzt1QkFBQTtJQXNCRixzQkFBQztBQUFELENBcEJBLEFBb0JDLElBQUE7QUFwQlksdUJBQWUsa0JBb0IzQixDQUFBIiwiZmlsZSI6ImFwcC9zaGFyZWQvdG9wbmF2L3RvcG5hdi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxyXG4gICAgc2VsZWN0b3I6ICd0b3AtbmF2JyxcclxuICAgIHRlbXBsYXRlVXJsOiAndG9wbmF2Lmh0bWwnLFxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIFRvcE5hdkNvbXBvbmVudCB7XHJcblx0Y2hhbmdlVGhlbWUoY29sb3I6IHN0cmluZyk6IHZvaWQge1xyXG5cdFx0dmFyIGxpbms6IGFueSA9ICQoJzxsaW5rPicpO1xyXG5cdFx0bGlua1xyXG5cdFx0XHQuYXBwZW5kVG8oJ2hlYWQnKVxyXG5cdFx0XHQuYXR0cih7dHlwZSA6ICd0ZXh0L2NzcycsIHJlbCA6ICdzdHlsZXNoZWV0J30pXHJcblx0XHRcdC5hdHRyKCdocmVmJywgJ3RoZW1lcy9hcHAtJytjb2xvcisnLmNzcycpO1xyXG5cdH1cclxuXHJcblx0cnRsKCk6IHZvaWQge1xyXG5cdFx0dmFyIGJvZHk6IGFueSA9ICQoJ2JvZHknKTtcclxuXHRcdGJvZHkudG9nZ2xlQ2xhc3MoJ3J0bCcpO1xyXG5cdH1cclxuXHJcblx0c2lkZWJhclRvZ2dsZXIoKTogdm9pZCAge1xyXG5cdFx0dmFyIHNpZGViYXI6IGFueSA9ICQoJyNzaWRlYmFyJyk7XHJcblx0XHR2YXIgbWFpbkNvbnRhaW5lcjogYW55ID0gJCgnLm1haW4tY29udGFpbmVyJyk7XHJcblx0XHRzaWRlYmFyLnRvZ2dsZUNsYXNzKCdzaWRlYmFyLWxlZnQtemVybycpO1xyXG5cdFx0bWFpbkNvbnRhaW5lci50b2dnbGVDbGFzcygnbWFpbi1jb250YWluZXItbWwtemVybycpO1xyXG5cdH1cclxufVxyXG4iXX0=
