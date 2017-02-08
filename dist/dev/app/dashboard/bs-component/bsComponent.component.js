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
var modal_component_1 = require('ng2-bootstrap/components/modal/modal.component');
var BSComponentComponent = (function () {
    function BSComponentComponent() {
        this.singleModel = '1';
        this.radioModel = 'Middle';
        this.checkModel = { left: false, middle: true, right: false };
        this.disabled = false;
        this.status = { isopen: false };
        this.items = ['The first choice!', 'And another choice for you.', 'but wait! A third!'];
        this.totalItems = 64;
        this.currentPage = 4;
        this.maxSize = 5;
        this.bigTotalItems = 175;
        this.bigCurrentPage = 1;
        this.alerts = [{
                type: 'danger',
                msg: 'Oh snap! Change a few things up and try submitting again.'
            },
            {
                type: 'success',
                msg: 'Well done! You successfully read this important alert message.',
                closable: true
            }
        ];
        this.max = 200;
        this.stacked = [];
        this.x = 5;
        this.y = 2;
        this.maxRating = 10;
        this.rate = 7;
        this.isReadonly = false;
        this.ratingStates = [
            { stateOn: 'fa fa-check', stateOff: 'fa fa-check-circle' },
            { stateOn: 'fa fa-star', stateOff: 'fa fa-star-o' },
            { stateOn: 'fa fa-heart', stateOff: 'fa fa-ban' },
            { stateOn: 'fa fa-heart' },
            { stateOff: 'fa fa-power-off' }
        ];
        this.tabs = [
            { title: 'Title 1', content: 'Dynamic content 1' },
            { title: 'Title 2', content: 'Dynamic content 2', disabled: true },
            { title: 'Title 3', content: 'Dynamic content 3', removable: true }
        ];
        this.selected = '';
        this.asyncSelected = '';
        this.typeaheadLoading = false;
        this.typeaheadNoResults = false;
        this.states = ['Alabama', 'Alaska', 'Arizona', 'Arkansas',
            'California', 'Colorado',
            'Connecticut', 'Delaware', 'Florida', 'Georgia', 'Hawaii', 'Idaho',
            'Illinois', 'Indiana', 'Iowa',
            'Kansas', 'Kentucky', 'Louisiana', 'Maine', 'Maryland', 'Massachusetts',
            'Michigan', 'Minnesota',
            'Mississippi', 'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire',
            'New Jersey', 'New Mexico',
            'New York', 'North Dakota', 'North Carolina', 'Ohio', 'Oklahoma', 'Oregon',
            'Pennsylvania', 'Rhode Island',
            'South Carolina', 'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont',
            'Virginia', 'Washington',
            'West Virginia', 'Wisconsin', 'Wyoming'];
        this.statesComplex = [
            { id: 1, name: 'Alabama' }, { id: 2, name: 'Alaska' }, { id: 3, name: 'Arizona' },
            { id: 4, name: 'Arkansas' }, { id: 5, name: 'California' },
            { id: 6, name: 'Colorado' }, { id: 7, name: 'Connecticut' },
            { id: 8, name: 'Delaware' }, { id: 9, name: 'Florida' },
            { id: 10, name: 'Georgia' }, { id: 11, name: 'Hawaii' },
            { id: 12, name: 'Idaho' }, { id: 13, name: 'Illinois' },
            { id: 14, name: 'Indiana' }, { id: 15, name: 'Iowa' },
            { id: 16, name: 'Kansas' }, { id: 17, name: 'Kentucky' },
            { id: 18, name: 'Louisiana' }, { id: 19, name: 'Maine' },
            { id: 21, name: 'Maryland' }, { id: 22, name: 'Massachusetts' },
            { id: 23, name: 'Michigan' }, { id: 24, name: 'Minnesota' },
            { id: 25, name: 'Mississippi' }, { id: 26, name: 'Missouri' },
            { id: 27, name: 'Montana' }, { id: 28, name: 'Nebraska' },
            { id: 29, name: 'Nevada' }, { id: 30, name: 'New Hampshire' },
            { id: 31, name: 'New Jersey' }, { id: 32, name: 'New Mexico' },
            { id: 33, name: 'New York' }, { id: 34, name: 'North Dakota' },
            { id: 35, name: 'North Carolina' }, { id: 36, name: 'Ohio' },
            { id: 37, name: 'Oklahoma' }, { id: 38, name: 'Oregon' },
            { id: 39, name: 'Pennsylvania' }, { id: 40, name: 'Rhode Island' },
            { id: 41, name: 'South Carolina' }, { id: 42, name: 'South Dakota' },
            { id: 43, name: 'Tennessee' }, { id: 44, name: 'Texas' },
            { id: 45, name: 'Utah' }, { id: 46, name: 'Vermont' },
            { id: 47, name: 'Virginia' }, { id: 48, name: 'Washington' },
            { id: 49, name: 'West Virginia' }, { id: 50, name: 'Wisconsin' },
            { id: 51, name: 'Wyoming' }];
        this.random();
        this.randomStacked();
    }
    BSComponentComponent.prototype.closeAlert = function (i) {
        this.alerts.splice(i, 1);
    };
    BSComponentComponent.prototype.addAlert = function () {
        this.alerts.push({ msg: 'Another alert!', type: 'warning', closable: true });
    };
    BSComponentComponent.prototype.toggled = function (open) {
        console.log('Dropdown is now: ', open);
    };
    BSComponentComponent.prototype.toggleDropdown = function ($event) {
        $event.preventDefault();
        $event.stopPropagation();
        this.status.isopen = !this.status.isopen;
    };
    BSComponentComponent.prototype.setPage = function (pageNo) {
        this.currentPage = pageNo;
    };
    ;
    BSComponentComponent.prototype.pageChanged = function (event) {
        console.log('Page changed to: ' + event.page);
        console.log('Number items per page: ' + event.itemsPerPage);
    };
    ;
    BSComponentComponent.prototype.random = function () {
        var value = Math.floor((Math.random() * 100) + 1);
        var type;
        if (value < 25) {
            type = 'success';
        }
        else if (value < 50) {
            type = 'info';
        }
        else if (value < 75) {
            type = 'warning';
        }
        else {
            type = 'danger';
        }
        this.showWarning = (type === 'danger' || type === 'warning');
        this.dynamic = value;
        this.type = type;
    };
    ;
    BSComponentComponent.prototype.randomStacked = function () {
        var types = ['success', 'info', 'warning', 'danger'];
        this.stacked = [];
        var total = 0;
        var n = Math.floor((Math.random() * 4) + 1);
        for (var i = 0; i < n; i++) {
            var index = Math.floor((Math.random() * 4));
            var value = Math.floor((Math.random() * 30) + 1);
            total += value;
            this.stacked.push({
                value: value,
                max: value,
                type: types[index]
            });
        }
    };
    ;
    BSComponentComponent.prototype.hoveringOver = function (value) {
        this.overStar = value;
        this.percent = 100 * (value / this.max);
    };
    ;
    BSComponentComponent.prototype.resetStar = function () {
        this.overStar = void 0;
    };
    BSComponentComponent.prototype.alertMe = function () {
        setTimeout(function () {
            alert('You\'ve selected the alert tab!');
        });
    };
    ;
    BSComponentComponent.prototype.setActiveTab = function (index) {
        this.tabs[index].active = true;
    };
    ;
    BSComponentComponent.prototype.removeTabHandler = function () {
        console.log('Remove Tab handler');
    };
    ;
    BSComponentComponent.prototype.getContext = function () {
        return this;
    };
    BSComponentComponent.prototype.getAsyncData = function (context) {
        if (this._prevContext === context) {
            return this._cache;
        }
        this._prevContext = context;
        var f = function () {
            var p = new Promise(function (resolve) {
                setTimeout(function () {
                    var query = new RegExp(context.asyncSelected, 'ig');
                    return resolve(context.states.filter(function (state) {
                        return query.test(state);
                    }));
                }, 200);
            });
            return p;
        };
        this._cache = f;
        return this._cache;
    };
    BSComponentComponent.prototype.changeTypeaheadLoading = function (e) {
        this.typeaheadLoading = e;
    };
    BSComponentComponent.prototype.changeTypeaheadNoResults = function (e) {
        this.typeaheadNoResults = e;
    };
    BSComponentComponent.prototype.typeaheadOnSelect = function (e) {
        console.log("Selected value: " + e.item);
    };
    __decorate([
        core_1.ViewChild('childModal'), 
        __metadata('design:type', modal_component_1.ModalDirective)
    ], BSComponentComponent.prototype, "childModal", void 0);
    BSComponentComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'bs-component',
            changeDetection: core_1.ChangeDetectionStrategy.OnPush,
            templateUrl: './bs-component.component.html',
            styles: ["\n    \t.tooltip.customClass .tooltip-inner {\n    \t\tcolor: #880000;\n    \t\tbackground-color: #ffff66;\n    \t\tbox-shadow: 0 6px 12px rgba(0,0,0,.175);\n    \t}\n    \t.tooltip.customClass .tooltip-arrow {\n    \t\tdisplay: none;\n    \t}\n    "]
        }), 
        __metadata('design:paramtypes', [])
    ], BSComponentComponent);
    return BSComponentComponent;
}());
exports.BSComponentComponent = BSComponentComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9kYXNoYm9hcmQvYnMtY29tcG9uZW50L2JzQ29tcG9uZW50LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEscUJBQThELGVBQWUsQ0FBQyxDQUFBO0FBRTlFLGdDQUErQixnREFBZ0QsQ0FBQyxDQUFBO0FBbUJoRjtJQWtIQztRQTdHTyxnQkFBVyxHQUFVLEdBQUcsQ0FBQztRQUN6QixlQUFVLEdBQVUsUUFBUSxDQUFDO1FBQzdCLGVBQVUsR0FBTyxFQUFDLElBQUksRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFDLENBQUM7UUFHM0QsYUFBUSxHQUFXLEtBQUssQ0FBQztRQUN6QixXQUFNLEdBQW9CLEVBQUMsTUFBTSxFQUFFLEtBQUssRUFBQyxDQUFDO1FBQzFDLFVBQUssR0FBa0IsQ0FBQyxtQkFBbUIsRUFBRSw2QkFBNkIsRUFBRSxvQkFBb0IsQ0FBQyxDQUFDO1FBR2xHLGVBQVUsR0FBVSxFQUFFLENBQUM7UUFDdkIsZ0JBQVcsR0FBVSxDQUFDLENBQUM7UUFFdkIsWUFBTyxHQUFVLENBQUMsQ0FBQztRQUNuQixrQkFBYSxHQUFVLEdBQUcsQ0FBQztRQUMzQixtQkFBYyxHQUFVLENBQUMsQ0FBQztRQUcxQixXQUFNLEdBQWtCLENBQUM7Z0JBQy9CLElBQUksRUFBRSxRQUFRO2dCQUNkLEdBQUcsRUFBRSwyREFBMkQ7YUFDL0Q7WUFDRDtnQkFDQyxJQUFJLEVBQUUsU0FBUztnQkFDZixHQUFHLEVBQUUsZ0VBQWdFO2dCQUNyRSxRQUFRLEVBQUUsSUFBSTthQUNkO1NBQ0QsQ0FBQztRQUdLLFFBQUcsR0FBVSxHQUFHLENBQUM7UUFJakIsWUFBTyxHQUFTLEVBQUUsQ0FBQztRQUduQixNQUFDLEdBQVUsQ0FBQyxDQUFDO1FBQ2IsTUFBQyxHQUFVLENBQUMsQ0FBQztRQUNiLGNBQVMsR0FBVSxFQUFFLENBQUM7UUFDdEIsU0FBSSxHQUFVLENBQUMsQ0FB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QUFFLElBQUksRUFBRSxVQUFVLEVBQUM7WUFDbkQsRUFBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLElBQUksRUFBRSxTQUFTLEVBQUMsRUFBRSxFQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBQztZQUNqRCxFQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsSUFBSSxFQUFFLFFBQVEsRUFBQyxFQUFFLEVBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxJQUFJLEVBQUUsVUFBVSxFQUFDO1lBQ3BELEVBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxJQUFJLEVBQUUsV0FBVyxFQUFDLEVBQUUsRUFBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLElBQUksRUFBRSxPQUFPLEVBQUM7WUFDcEQsRUFBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLElBQUksRUFBRSxVQUFVLEVBQUMsRUFBRSxFQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsSUFBSSxFQUFFLGVBQWUsRUFBQztZQUMzRCxFQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsSUFBSSxFQUFFLFVBQVUsRUFBQyxFQUFFLEVBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxJQUFJLEVBQUUsV0FBVyxFQUFDO1lBQ3ZELEVBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxJQUFJLEVBQUUsYUFBYSxFQUFDLEVBQUUsRUFBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLElBQUksRUFBRSxVQUFVLEVBQUM7WUFDekQsRUFBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLElBQUksRUFBRSxTQUFTLEVBQUMsRUFBRSxFQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsSUFBSSxFQUFFLFVBQVUsRUFBQztZQUNyRCxFQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsSUFBSSxFQUFFLFFBQVEsRUFBQyxFQUFFLEVBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxJQUFJLEVBQUUsZUFBZSxFQUFDO1lBQ3pELEVBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxJQUFJLEVBQUUsWUFBWSxFQUFDLEVBQUUsRUFBQyxFQUFFLEVB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LENBQUM7SUFFTSxnREFBaUIsR0FBeEIsVUFBeUIsQ0FBSztRQUM3QixPQUFPLENBQUMsR0FBRyxDQUFDLHFCQUFtQixDQUFDLENBQUMsSUFBTSxDQUFDLENBQUM7SUFDMUMsQ0FBQztJQWxQRDtRQUFDLGdCQUFTLENBQUMsWUFBWSxDQUFDOzs0REFBQTtJQW5CekI7UUFBQyxnQkFBUyxDQUFDO1lBQ1YsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ2hCLFFBQVEsRUFBRSxjQUFjO1lBQ3hCLGVBQWUsRUFBRSw4QkFBdUIsQ0FBQyxNQUFNO1lBQy9DLFdBQVcsRUFBRSwrQkFBK0I7WUFDNUMsTUFBTSxFQUFFLENBQUMsMlBBU1IsQ0FBQztTQUNMLENBQUM7OzRCQUFBO0lBdVBGLDJCQUFDO0FBQUQsQ0FyUEEsQUFxUEMsSUFBQTtBQXJQWSw0QkFBb0IsdUJBcVBoQyxDQUFBIiwiZmlsZSI6ImFwcC9kYXNoYm9hcmQvYnMtY29tcG9uZW50L2JzQ29tcG9uZW50LmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIFZpZXdDaGlsZCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBNb2RhbERpcmVjdGl2ZSB9IGZyb20gJ25nMi1ib290c3RyYXAvY29tcG9uZW50cy9tb2RhbC9tb2RhbC5jb21wb25lbnQnO1xuXG5AQ29tcG9uZW50KHtcblx0bW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgICBzZWxlY3RvcjogJ2JzLWNvbXBvbmVudCcsXG4gICAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gICAgdGVtcGxhdGVVcmw6ICcuL2JzLWNvbXBvbmVudC5jb21wb25lbnQuaHRtbCcsXG4gICAgc3R5bGVzOiBbYFxuICAgIFx0LnRvb2x0aXAuY3VzdG9tQ2xhc3MgLnRvb2x0aXAtaW5uZXIge1xuICAgIFx0XHRjb2xvcjogIzg4MDAwMDtcbiAgICBcdFx0YmFja2dyb3VuZC1jb2xvcjogI2ZmZmY2NjtcbiAgICBcdFx0Ym94LXNoYWRvdzogMCA2cHggMTJweCByZ2JhKDAsMCwwLC4xNzUpO1xuICAgIFx0fVxuICAgIFx0LnRvb2x0aXAuY3VzdG9tQ2xhc3MgLnRvb2x0aXAtYXJyb3cge1xuICAgIFx0XHRkaXNwbGF5OiBub25lO1xuICAgIFx0fVxuICAgIGBdXG59KVxuXG5leHBvcnQgY2xhc3MgQlNDb21wb25lbnRDb21wb25lbnQge1xuXG5cdEBWaWV3Q2hpbGQoJ2NoaWxkTW9kYWwnKSBwdWJsaWMgY2hpbGRNb2RhbDpNb2RhbERpcmVjdGl2ZTtcblxuXHQvLyBCdXR0b25cblx0cHVibGljIHNpbmdsZU1vZGVsOnN0cmluZyA9ICcxJztcblx0cHVibGljIHJhZGlvTW9kZWw6c3RyaW5nID0gJ01pZGRsZSc7XG5cdHB1YmxpYyBjaGVja01vZGVsOmFueSA9IHtsZWZ0OiBmYWxzZSwgbWlkZGxlOiB0cnVlLCByaWdodDogZmFsc2V9O1xuXG5cdC8vIERyb3Bkb3duXG5cdHB1YmxpYyBkaXNhYmxlZDpib29sZWFuID0gZmFsc2U7XG5cdHB1YmxpYyBzdGF0dXM6e2lzb3Blbjpib29sZWFufSA9IHtpc29wZW46IGZhbHNlfTtcblx0cHVibGljIGl0ZW1zOiBBcnJheTxzdHJpbmc+ID0gWydUaGUgZmlyc3QgY2hvaWNlIScsICdBbmQgYW5vdGhlciBjaG9pY2UgZm9yIHlvdS4nLCAnYnV0IHdhaXQhIEEgdGhpcmQhJ107XG5cblx0Ly8gUGFnaW5hdGlvblxuXHRwdWJsaWMgdG90YWxJdGVtczpudW1iZXIgPSA2NDtcblx0cHVibGljIGN1cnJlbnRQYWdlOm51bWJlciA9IDQ7XG5cblx0cHVibGljIG1heFNpemU6bnVtYmVyID0gNTtcblx0cHVibGljIGJpZ1RvdGFsSXRlbXM6bnVtYmVyID0gMTc1O1xuXHRwdWJsaWMgYmlnQ3VycmVudFBhZ2U6bnVtYmVyID0gMTtcblxuXHQvLyBBbGVydFxuXHRwdWJsaWMgYWxlcnRzOiBBcnJheTxPYmplY3Q+ID0gW3tcblx0XHR0eXBlOiAnZGFuZ2VyJyxcblx0XHRtc2c6ICdPaCBzbmFwISBDaGFuZ2UgYSBmZXcgdGhpbmdzIHVwIGFuZCB0cnkgc3VibWl0dGluZyBhZ2Fpbi4nXG5cdFx0fSxcblx0XHR7XG5cdFx0XHR0eXBlOiAnc3VjY2VzcycsXG5cdFx0XHRtc2c6ICdXZWxsIGRvbmUhIFlvdSBzdWNjZXNzZnVsbHkgcmVhZCB0aGlzIGltcG9ydGFudCBhbGVydCBtZXNzYWdlLicsXG5cdFx0XHRjbG9zYWJsZTogdHJ1ZVxuXHRcdH1cblx0XTtcblxuXHQvLyBQcm9ncmVzc2JhclxuXHRwdWJsaWMgbWF4Om51bWJlciA9IDIwMDtcblx0cHVibGljIHNob3dXYXJuaW5nOmJvb2xlYW47XG5cdHB1YmxpYyBkeW5hbWljOm51bWJlcjtcblx0cHVibGljIHR5cGU6c3RyaW5nO1xuXHRwdWJsaWMgc3RhY2tlZDphbnlbXSA9IFtdO1xuXG5cdC8vIFJhdGluZ1xuXHRwdWJsaWMgeDpudW1iZXIgPSA1O1xuXHRwdWJsaWMgeTpudW1iZXIgPSAyO1xuXHRwdWJsaWMgbWF4UmF0aW5nOm51bWJlciA9IDEwO1xuXHRwdWJsaWMgcmF0ZTpudW1iZXIgPSA3O1xuXHRwdWJsaWMgaXNSZWFkb25seTpib29sZWFuID0gZmFsc2U7XG5cblx0cHVibGljIG92ZXJTdGFyOm51bWJlcjtcblx0cHVibGljIHBlcmNlbnQ6bnVtYmVyO1xuXG5cdHB1YmxpYyByYXRpbmdTdGF0ZXM6YW55ID0gW1xuXHRcdHtzdGF0ZU9uOiAnZmEgZmEtY2hlY2snLCBzdGF0ZU9mZjogJ2ZhIGZhLWNoZWNrLWNpcmNsZSd9LFxuXHRcdHtzdGF0ZU9uOiAnZmEgZmEtc3RhcicsIHN0YXRlT2ZmOiAnZmEgZmEtc3Rhci1vJ30sXG5cdFx0e3N0YXRlT246ICdmYSBmYS1oZWFydCcsIHN0YXRlT2ZmOiAnZmEgZmEtYmFuJ30sXG5cdFx0e3N0YXRlT246ICdmYSBmYS1oZWFydCcgfSxcblx0XHR7c3RhdGVPZmY6ICdmYSBmYS1wb3dlci1vZmYnfVxuXHRdO1xuXG5cdC8vIFRhYnNcblx0cHVibGljIHRhYnM6QXJyYXk8YW55PiA9IFtcblx0ICAgIHt0aXRsZTogJ1RpdGxlIDEnLCBjb250ZW50OiAnRHluYW1pYyBjb250ZW50IDEnfSxcblx0ICAgIHt0aXRsZTogJ1RpdGxlIDInLCBjb250ZW50OiAnRHluYW1pYyBjb250ZW50IDInLCBkaXNhYmxlZDogdHJ1ZX0sXG5cdCAgICB7dGl0bGU6ICdUaXRsZSAzJywgY29udGVudDogJ0R5bmFtaWMgY29udGVudCAzJywgcmVtb3ZhYmxlOiB0cnVlfVxuXHRdO1xuXG5cdC8vIFR5cGVoZWFkXG5cdHB1YmxpYyBzZWxlY3RlZDpzdHJpbmcgPSAnJztcblx0cHVibGljIGFzeW5jU2VsZWN0ZWQ6c3RyaW5nID0gJyc7XG5cdHB1YmxpYyB0eXBlYWhlYWRMb2FkaW5nOmJvb2xlYW4gPSBmYWxzZTtcblx0cHVibGljIHR5cGVhaGVhZE5vUmVzdWx0czpib29sZWFuID0gZmFsc2U7XG5cdHB1YmxpYyBzdGF0ZXM6QXJyYXk8c3RyaW5nPiA9IFsnQWxhYmFtYScsICdBbGFza2EnLCAnQXJpem9uYScsICdBcmthbnNhcycsXG5cdCdDYWxpZm9ybmlhJywgJ0NvbG9yYWRvJyxcblx0J0Nvbm5lY3RpY3V0JywgJ0RlbGF3YXJlJywgJ0Zsb3JpZGEnLCAnR2VvcmdpYScsICdIYXdhaWknLCAnSWRhaG8nLFxuXHQnSWxsaW5vaXMnLCAnSW5kaWFuYScsICdJb3dhJyxcblx0J0thbnNhcycsICdLZW50dWNreScsICdMb3Vpc2lhbmEnLCAnTWFpbmUnLCAnTWFyeWxhbmQnLCAnTWFzc2FjaHVzZXR0cycsXG5cdCdNaWNoaWdhbicsICdNaW5uZXNvdGEnLFxuXHQnTWlzc2lzc2lwcGknLCAnTWlzc291cmknLCAnTW9udGFuYScsICdOZWJyYXNrYScsICdOZXZhZGEnLCAnTmV3IEhhbXBzaGlyZScsXG5cdCdOZXcgSmVyc2V5JywgJ05ldyBNZXhpY28nLFxuXHQnTmV3IFlvcmsnLCAnTm9ydGggRGFrb3RhJywgJ05vcnRoIENhcm9saW5hJywgJ09oaW8nLCAnT2tsYWhvbWEnLCAnT3JlZ29uJyxcblx0J1Blbm5zeWx2YW5pYScsICdSaG9kZSBJc2xhbmQnLFxuXHQnU291dGggQ2Fyb2xpbmEnLCAnU291dGggRGFrb3RhJywgJ1Rlbm5lc3NlZScsICdUZXhhcycsICdVdGFoJywgJ1Zlcm1vbnQnLFxuXHQnVmlyZ2luaWEnLCAnV2FzaGluZ3RvbicsXG5cdCdXZXN0IFZpcmdpbmlhJywgJ1dpc2NvbnNpbicsICdXeW9taW5nJ107XG5cdHB1YmxpYyBzdGF0ZXNDb21wbGV4OkFycmF5PGFueT4gPSBbXG5cdHtpZDogMSwgbmFtZTogJ0FsYWJhbWEnfSwge2lkOiAyLCBuYW1lOiAnQWxhc2thJ30sIHtpZDogMywgbmFtZTogJ0FyaXpvbmEnfSxcblx0e2lkOiA0LCBuYW1lOiAnQXJrYW5zYXMnfSwge2lkOiA1LCBuYW1lOiAnQ2FsaWZvcm5pYSd9LFxuXHR7aWQ6IDYsIG5hbWU6ICdDb2xvcmFkbyd9LCB7aWQ6IDcsIG5hbWU6ICdDb25uZWN0aWN1dCd9LFxuXHR7aWQ6IDgsIG5hbWU6ICdEZWxhd2FyZSd9LCB7aWQ6IDksIG5hbWU6ICdGbG9yaWRhJ30sXG5cdHtpZDogMTAsIG5hbWU6ICdHZW9yZ2lhJ30sIHtpZDogMTEsIG5hbWU6ICdIYXdhaWknfSxcblx0e2lkOiAxMiwgbmFtZTogJ0lkYWhvJ30sIHtpZDogMTMsIG5hbWU6ICdJbGxpbm9pcyd9LFxuXHR7aWQ6IDE0LCBuYW1lOiAnSW5kaWFuYSd9LCB7aWQ6IDE1LCBuYW1lOiAnSW93YSd9LFxuXHR7aWQ6IDE2LCBuYW1lOiAnS2Fuc2FzJ30sIHtpZDogMTcsIG5hbWU6ICdLZW50dWNreSd9LFxuXHR7aWQ6IDE4LCBuYW1lOiAnTG91aXNpYW5hJ30sIHtpZDogMTksIG5hbWU6ICdNYWluZSd9LFxuXHR7aWQ6IDIxLCBuYW1lOiAnTWFyeWxhbmQnfSwge2lkOiAyMiwgbmFtZTogJ01hc3NhY2h1c2V0dHMnfSxcblx0e2lkOiAyMywgbmFtZTogJ01pY2hpZ2FuJ30sIHtpZDogMjQsIG5hbWU6ICdNaW5uZXNvdGEnfSxcblx0e2lkOiAyNSwgbmFtZTogJ01pc3Npc3NpcHBpJ30sIHtpZDogMjYsIG5hbWU6ICdNaXNzb3VyaSd9LFxuXHR7aWQ6IDI3LCBuYW1lOiAnTW9udGFuYSd9LCB7aWQ6IDI4LCBuYW1lOiAnTmVicmFza2EnfSxcblx0e2lkOiAyOSwgbmFtZTogJ05ldmFkYSd9LCB7aWQ6IDMwLCBuYW1lOiAnTmV3IEhhbXBzaGlyZSd9LFxuXHR7aWQ6IDMxLCBuYW1lOiAnTmV3IEplcnNleSd9LCB7aWQ6IDMyLCBuYW1lOiAnTmV3IE1leGljbyd9LFxuXHR7aWQ6IDMzLCBuYW1lOiAnTmV3IFlvcmsnfSwge2lkOiAzNCwgbmFtZTogJ05vcnRoIERha290YSd9LFxuXHR7aWQ6IDM1LCBuYW1lOiAnTm9ydGggQ2Fyb2xpbmEnfSwge2lkOiAzNiwgbmFtZTogJ09oaW8nfSxcblx0e2lkOiAzNywgbmFtZTogJ09rbGFob21hJ30sIHtpZDogMzgsIG5hbWU6ICdPcmVnb24nfSxcblx0e2lkOiAzOSwgbmFtZTogJ1Blbm5zeWx2YW5pYSd9LCB7aWQ6IDQwLCBuYW1lOiAnUmhvZGUgSXNsYW5kJ30sXG5cdHtpZDogNDEsIG5hbWU6ICdTb3V0aCBDYXJvbGluYSd9LCB7aWQ6IDQyLCBuYW1lOiAnU291dGggRGFrb3RhJ30sXG5cdHtpZDogNDMsIG5hbWU6ICdUZW5uZXNzZWUnfSwge2lkOiA0NCwgbmFtZTogJ1RleGFzJ30sXG5cdHtpZDogNDUsIG5hbWU6ICdVdGFoJ30sIHtpZDogNDYsIG5hbWU6ICdWZXJtb250J30sXG5cdHtpZDogNDcsIG5hbWU6ICdWaXJnaW5pYSd9LCB7aWQ6IDQ4LCBuYW1lOiAnV2FzaGluZ3Rvbid9LFxuXHR7aWQ6IDQ5LCBuYW1lOiAnV2VzdCBWaXJnaW5pYSd9LCB7aWQ6IDUwLCBuYW1lOiAnV2lzY29uc2luJ30sXG5cdHtpZDogNTEsIG5hbWU6ICdXeW9taW5nJ31dO1xuXG5cdHByaXZhdGUgX2NhY2hlOmFueTtcblx0cHJpdmF0ZSBfcHJldkNvbnRleHQ6YW55O1xuXG5cdHB1YmxpYyBjb25zdHJ1Y3RvcigpIHtcblx0XHR0aGlzLnJhbmRvbSgpO1xuXHRcdHRoaXMucmFuZG9tU3RhY2tlZCgpO1xuXHR9XG5cblx0Ly8gQWxlcnRcblx0cHVibGljIGNsb3NlQWxlcnQoaTpudW1iZXIpOnZvaWQge1xuXHRcdHRoaXMuYWxlcnRzLnNwbGljZShpLCAxKTtcblx0fVxuXHRwdWJsaWMgYWRkQWxlcnQoKTp2b2lkIHtcblx0XHR0aGlzLmFsZXJ0cy5wdXNoKHttc2c6ICdBbm90aGVyIGFsZXJ0IScsIHR5cGU6ICd3YXJuaW5nJywgY2xvc2FibGU6IHRydWV9KTtcblx0fVxuXG5cdC8vIERyb3Bkb3duXG5cdHB1YmxpYyB0b2dnbGVkKG9wZW46Ym9vbGVhbik6dm9pZCB7XG5cdFx0Y29uc29sZS5sb2coJ0Ryb3Bkb3duIGlzIG5vdzogJywgb3Blbik7XG5cdH1cblxuXHRwdWJsaWMgdG9nZ2xlRHJvcGRvd24oJGV2ZW50Ok1vdXNlRXZlbnQpOnZvaWQge1xuXHRcdCRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdCRldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcblx0XHR0aGlzLnN0YXR1cy5pc29wZW4gPSAhdGhpcy5zdGF0dXMuaXNvcGVuO1xuXHR9XG5cblx0Ly8gUGFnaW5hdGlvblxuXHRwdWJsaWMgc2V0UGFnZShwYWdlTm86bnVtYmVyKTp2b2lkIHtcblx0XHR0aGlzLmN1cnJlbnRQYWdlID0gcGFnZU5vO1xuXHR9O1xuXG5cdHB1YmxpYyBwYWdlQ2hhbmdlZChldmVudDphbnkpOnZvaWQge1xuXHRcdGNvbnNvbGUubG9nKCdQYWdlIGNoYW5nZWQgdG86ICcgKyBldmVudC5wYWdlKTtcblx0XHRjb25zb2xlLmxvZygnTnVtYmVyIGl0ZW1zIHBlciBwYWdlOiAnICsgZXZlbnQuaXRlbXNQZXJQYWdlKTtcblx0fTtcblx0Ly8gUHJvZ3Jlc3NiYXJcblx0cHVibGljIHJhbmRvbSgpOnZvaWQge1xuXHRcdGxldCB2YWx1ZSA9IE1hdGguZmxvb3IoKE1hdGgucmFuZG9tKCkgKiAxMDApICsgMSk7XG5cdFx0bGV0IHR5cGU6c3RyaW5nO1xuXG5cdFx0aWYgKHZhbHVlIDwgMjUpIHtcblx0XHRcdHR5cGUgPSAnc3VjY2Vzcyc7XG5cdFx0fSBlbHNlIGlmICh2YWx1ZSA8IDUwKSB7XG5cdFx0XHR0eXBlID0gJ2luZm8nO1xuXHRcdH0gZWxzZSBpZiAodmFsdWUgPCA3NSkge1xuXHRcdFx0dHlwZSA9ICd3YXJuaW5nJztcblx0XHR9IGVsc2Uge1xuXHRcdFx0dHlwZSA9ICdkYW5nZXInO1xuXHRcdH1cblxuXHRcdHRoaXMuc2hvd1dhcm5pbmcgPSAodHlwZSA9PT0gJ2RhbmdlcicgfHwgdHlwZSA9PT0gJ3dhcm5pbmcnKTtcblx0XHR0aGlzLmR5bmFtaWMgPSB2YWx1ZTtcblx0XHR0aGlzLnR5cGUgPSB0eXBlO1xuXHR9O1xuXG5cdHB1YmxpYyByYW5kb21TdGFja2VkKCk6dm9pZCB7XG5cdFx0bGV0IHR5cGVzID0gWydzdWNjZXNzJywgJ2luZm8nLCAnd2FybmluZycsICdkYW5nZXInXTtcblxuXHRcdHRoaXMuc3RhY2tlZCA9IFtdO1xuXHRcdGxldCB0b3RhbCA9IDA7XG5cdFx0bGV0IG4gPSBNYXRoLmZsb29yKChNYXRoLnJhbmRvbSgpICogNCkgKyAxKTtcblx0XHRmb3IgKGxldCBpID0gMDsgaSA8IG47IGkrKykge1xuXHRcdFx0bGV0IGluZGV4ID0gTWF0aC5mbG9vcigoTWF0aC5yYW5kb20oKSAqIDQpKTtcblx0XHRcdGxldCB2YWx1ZSA9IE1hdGguZmxvb3IoKE1hdGgucmFuZG9tKCkgKiAzMCkgKyAxKTtcblx0XHRcdHRvdGFsICs9IHZhbHVlO1xuXHRcdFx0dGhpcy5zdGFja2VkLnB1c2goe1xuXHRcdFx0XHR2YWx1ZTogdmFsdWUsXG5cdCAgICAgICAgbWF4OiB2YWx1ZSwgLy8gaSAhPT0gKG4gLSAxKSA/IHZhbHVlIDogMTAwLFxuXHQgICAgICAgIHR5cGU6IHR5cGVzW2luZGV4XVxuXHQgICAgfSk7XG5cdFx0fVxuXHR9O1xuXHQvLyBSYXRpbmdcblx0cHVibGljIGhvdmVyaW5nT3Zlcih2YWx1ZTpudW1iZXIpOnZvaWQge1xuXHRcdHRoaXMub3ZlclN0YXIgPSB2YWx1ZTtcblx0XHR0aGlzLnBlcmNlbnQgPSAxMDAgKiAodmFsdWUgLyB0aGlzLm1heCk7XG5cdH07XG5cblx0cHVibGljIHJlc2V0U3RhcigpOnZvaWQge1xuXHRcdHRoaXMub3ZlclN0YXIgPSB2b2lkIDA7XG5cdH1cblx0Ly8gVGFic1xuXHRwdWJsaWMgYWxlcnRNZSgpOnZvaWQge1xuXHRcdHNldFRpbWVvdXQoZnVuY3Rpb24gKCk6dm9pZCB7XG5cdFx0XHRhbGVydCgnWW91XFwndmUgc2VsZWN0ZWQgdGhlIGFsZXJ0IHRhYiEnKTtcblx0XHR9KTtcblx0fTtcblxuXHRwdWJsaWMgc2V0QWN0aXZlVGFiKGluZGV4Om51bWJlcik6dm9pZCB7XG5cdFx0dGhpcy50YWJzW2luZGV4XS5hY3RpdmUgPSB0cnVlO1xuXHR9O1xuXG5cdHB1YmxpYyByZW1vdmVUYWJIYW5kbGVyKC8qdGFiOmFueSovKTp2b2lkIHtcblx0XHRjb25zb2xlLmxvZygnUmVtb3ZlIFRhYiBoYW5kbGVyJyk7XG5cdH07XG5cblx0Ly8gVHlwZWhlYWRcblx0cHVibGljIGdldENvbnRleHQoKTphbnkge1xuXHRcdHJldHVybiB0aGlzO1xuXHR9XG5cblx0cHVibGljIGdldEFzeW5jRGF0YShjb250ZXh0OmFueSk6RnVuY3Rpb24ge1xuXHRcdGlmICh0aGlzLl9wcmV2Q29udGV4dCA9PT0gY29udGV4dCkge1xuXHRcdFx0cmV0dXJuIHRoaXMuX2NhY2hlO1xuXHRcdH1cblxuXHRcdHRoaXMuX3ByZXZDb250ZXh0ID0gY29udGV4dDtcblx0XHRsZXQgZjpGdW5jdGlvbiA9IGZ1bmN0aW9uICgpOlByb21pc2U8c3RyaW5nW10+IHtcblx0XHRcdGxldCBwOlByb21pc2U8c3RyaW5nW10+ID0gbmV3IFByb21pc2UoKHJlc29sdmU6RnVuY3Rpb24pID0+IHtcblx0XHRcdFx0c2V0VGltZW91dCgoKSA9PiB7XG5cdFx0XHRcdFx0bGV0IHF1ZXJ5ID0gbmV3IFJlZ0V4cChjb250ZXh0LmFzeW5jU2VsZWN0ZWQsICdpZycpO1xuXHRcdFx0XHRcdHJldHVybiByZXNvbHZlKGNvbnRleHQuc3RhdGVzLmZpbHRlcigoc3RhdGU6YW55KSA9PiB7XG5cdFx0XHRcdFx0XHRyZXR1cm4gcXVlcnkudGVzdChzdGF0ZSk7XG5cdFx0XHRcdFx0fSkpO1xuXHRcdFx0XHR9LCAyMDApO1xuXHRcdFx0fSk7XG5cdFx0XHRyZXR1cm4gcDtcblx0XHR9O1xuXHRcdHRoaXMuX2NhY2hlID0gZjtcblx0XHRyZXR1cm4gdGhpcy5fY2FjaGU7XG5cdH1cblxuXHRwdWJsaWMgY2hhbmdlVHlwZWFoZWFkTG9hZGluZyhlOmJvb2xlYW4pOnZvaWQge1xuXHRcdHRoaXMudHlwZWFoZWFkTG9hZGluZyA9IGU7XG5cdH1cblxuXHRwdWJsaWMgY2hhbmdlVHlwZWFoZWFkTm9SZXN1bHRzKGU6Ym9vbGVhbik6dm9pZCB7XG5cdFx0dGhpcy50eXBlYWhlYWROb1Jlc3VsdHMgPSBlO1xuXHR9XG5cblx0cHVibGljIHR5cGVhaGVhZE9uU2VsZWN0KGU6YW55KTp2b2lkIHtcblx0XHRjb25zb2xlLmxvZyhgU2VsZWN0ZWQgdmFsdWU6ICR7ZS5pdGVtfWApO1xuXHR9XG59XG4iXX0=
