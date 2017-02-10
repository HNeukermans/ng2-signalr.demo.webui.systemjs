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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9kYXNoYm9hcmQvYnMtY29tcG9uZW50L2JzQ29tcG9uZW50LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEscUJBQThELGVBQWUsQ0FBQyxDQUFBO0FBRTlFLGdDQUErQixnREFBZ0QsQ0FBQyxDQUFBO0FBbUJoRjtJQWtIQztRQTdHTyxnQkFBVyxHQUFVLEdBQUcsQ0FBQztRQUN6QixlQUFVLEdBQVUsUUFBUSxDQUFDO1FBQzdCLGVBQVUsR0FBTyxFQUFDLElBQUksRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFDLENBQUM7UUFHM0QsYUFBUSxHQUFXLEtBQUssQ0FBQztRQUN6QixXQUFNLEdBQW9CLEVBQUMsTUFBTSxFQUFFLEtBQUssRUFBQyxDQUFDO1FBQzFDLFVBQUssR0FBa0IsQ0FBQyxtQkFBbUIsRUFBRSw2QkFBNkIsRUFBRSxvQkFBb0IsQ0FBQyxDQUFDO1FBR2xHLGVBQVUsR0FBVSxFQUFFLENBQUM7UUFDdkIsZ0JBQVcsR0FBVSxDQUFDLENBQUM7UUFFdkIsWUFBTyxHQUFVLENBQUMsQ0FBQztRQUNuQixrQkFBYSxHQUFVLEdBQUcsQ0FBQztRQUMzQixtQkFBYyxHQUFVLENBQUMsQ0FBQztRQUcxQixXQUFNLEdBQWtCLENBQUM7Z0JBQy9CLElBQUksRUFBRSxRQUFRO2dCQUNkLEdBQUcsRUFBRSwyREFBMkQ7YUFDL0Q7WUFDRDtnQkFDQyxJQUFJLEVBQUUsU0FBUztnQkFDZixHQUFHLEVBQUUsZ0VBQWdFO2dCQUNyRSxRQUFRLEVBQUUsSUFBSTthQUNkO1NBQ0QsQ0FBQztRQUdLLFFBQUcsR0FBVSxHQUFHLENBQUM7UUFJakIsWUFBTyxHQUFTLEVBQUUsQ0FBQztRQUduQixNQUFDLEdBQVUsQ0FBQyxDQUFDO1FBQ2IsTUFBQyxHQUFVLENBQUMsQ0FBQztRQUNiLGNBQVMsR0FBVSxFQUFFLENBQUM7UUFDdEIsU0FBSSxHQUFVLENBQUMsQ0FB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QUFFLElBQUksRUFBRSxVQUFVLEVBQUM7WUFDbkQsRUFBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLElBQUksRUFBRSxTQUFTLEVBQUMsRUFBRSxFQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBQztZQUNqRCxFQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsSUFBSSxFQUFFLFFBQVEsRUFBQyxFQUFFLEVBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxJQUFJLEVBQUUsVUFBVSxFQUFDO1lBQ3BELEVBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxJQUFJLEVBQUUsV0FBVyxFQUFDLEVBQUUsRUFBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLElBQUksRUFBRSxPQUFPLEVBQUM7WUFDcEQsRUFBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLElBQUksRUFBRSxVQUFVLEVBQUMsRUFBRSxFQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsSUFBSSxFQUFFLGVBQWUsRUFBQztZQUMzRCxFQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsSUFBSSxFQUFFLFVBQVUsRUFBQyxFQUFFLEVBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxJQUFJLEVBQUUsV0FBVyxFQUFDO1lBQ3ZELEVBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxJQUFJLEVBQUUsYUFBYSxFQUFDLEVBQUUsRUFBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLElBQUksRUFBRSxVQUFVLEVBQUM7WUFDekQsRUFBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLElBQUksRUFBRSxTQUFTLEVBQUMsRUFBRSxFQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsSUFBSSxFQUFFLFVBQVUsRUFBQztZQUNyRCxFQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsSUFBSSxFQUFFLFFBQVEsRUFBQyxFQUFFLEVBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxJQUFJLEVBQUUsZUFBZSxFQUFDO1lBQ3pELEVBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxJQUFJLEVBQUUsWUFBWSxFQUFDLEVBQUUsRUFBQyxFQUFFLEVB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LENBQUM7SUFFTSxnREFBaUIsR0FBeEIsVUFBeUIsQ0FBSztRQUM3QixPQUFPLENBQUMsR0FBRyxDQUFDLHFCQUFtQixDQUFDLENBQUMsSUFBTSxDQUFDLENBQUM7SUFDMUMsQ0FBQztJQWxQRDtRQUFDLGdCQUFTLENBQUMsWUFBWSxDQUFDOzs0REFBQTtJQW5CekI7UUFBQyxnQkFBUyxDQUFDO1lBQ1YsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ2hCLFFBQVEsRUFBRSxjQUFjO1lBQ3hCLGVBQWUsRUFBRSw4QkFBdUIsQ0FBQyxNQUFNO1lBQy9DLFdBQVcsRUFBRSwrQkFBK0I7WUFDNUMsTUFBTSxFQUFFLENBQUMsMlBBU1IsQ0FBQztTQUNMLENBQUM7OzRCQUFBO0lBdVBGLDJCQUFDO0FBQUQsQ0FyUEEsQUFxUEMsSUFBQTtBQXJQWSw0QkFBb0IsdUJBcVBoQyxDQUFBIiwiZmlsZSI6ImFwcC9kYXNoYm9hcmQvYnMtY29tcG9uZW50L2JzQ29tcG9uZW50LmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIFZpZXdDaGlsZCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuaW1wb3J0IHsgTW9kYWxEaXJlY3RpdmUgfSBmcm9tICduZzItYm9vdHN0cmFwL2NvbXBvbmVudHMvbW9kYWwvbW9kYWwuY29tcG9uZW50JztcclxuXHJcbkBDb21wb25lbnQoe1xyXG5cdG1vZHVsZUlkOiBtb2R1bGUuaWQsXHJcbiAgICBzZWxlY3RvcjogJ2JzLWNvbXBvbmVudCcsXHJcbiAgICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcclxuICAgIHRlbXBsYXRlVXJsOiAnLi9icy1jb21wb25lbnQuY29tcG9uZW50Lmh0bWwnLFxyXG4gICAgc3R5bGVzOiBbYFxyXG4gICAgXHQudG9vbHRpcC5jdXN0b21DbGFzcyAudG9vbHRpcC1pbm5lciB7XHJcbiAgICBcdFx0Y29sb3I6ICM4ODAwMDA7XHJcbiAgICBcdFx0YmFja2dyb3VuZC1jb2xvcjogI2ZmZmY2NjtcclxuICAgIFx0XHRib3gtc2hhZG93OiAwIDZweCAxMnB4IHJnYmEoMCwwLDAsLjE3NSk7XHJcbiAgICBcdH1cclxuICAgIFx0LnRvb2x0aXAuY3VzdG9tQ2xhc3MgLnRvb2x0aXAtYXJyb3cge1xyXG4gICAgXHRcdGRpc3BsYXk6IG5vbmU7XHJcbiAgICBcdH1cclxuICAgIGBdXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgQlNDb21wb25lbnRDb21wb25lbnQge1xyXG5cclxuXHRAVmlld0NoaWxkKCdjaGlsZE1vZGFsJykgcHVibGljIGNoaWxkTW9kYWw6TW9kYWxEaXJlY3RpdmU7XHJcblxyXG5cdC8vIEJ1dHRvblxyXG5cdHB1YmxpYyBzaW5nbGVNb2RlbDpzdHJpbmcgPSAnMSc7XHJcblx0cHVibGljIHJhZGlvTW9kZWw6c3RyaW5nID0gJ01pZGRsZSc7XHJcblx0cHVibGljIGNoZWNrTW9kZWw6YW55ID0ge2xlZnQ6IGZhbHNlLCBtaWRkbGU6IHRydWUsIHJpZ2h0OiBmYWxzZX07XHJcblxyXG5cdC8vIERyb3Bkb3duXHJcblx0cHVibGljIGRpc2FibGVkOmJvb2xlYW4gPSBmYWxzZTtcclxuXHRwdWJsaWMgc3RhdHVzOntpc29wZW46Ym9vbGVhbn0gPSB7aXNvcGVuOiBmYWxzZX07XHJcblx0cHVibGljIGl0ZW1zOiBBcnJheTxzdHJpbmc+ID0gWydUaGUgZmlyc3QgY2hvaWNlIScsICdBbmQgYW5vdGhlciBjaG9pY2UgZm9yIHlvdS4nLCAnYnV0IHdhaXQhIEEgdGhpcmQhJ107XHJcblxyXG5cdC8vIFBhZ2luYXRpb25cclxuXHRwdWJsaWMgdG90YWxJdGVtczpudW1iZXIgPSA2NDtcclxuXHRwdWJsaWMgY3VycmVudFBhZ2U6bnVtYmVyID0gNDtcclxuXHJcblx0cHVibGljIG1heFNpemU6bnVtYmVyID0gNTtcclxuXHRwdWJsaWMgYmlnVG90YWxJdGVtczpudW1iZXIgPSAxNzU7XHJcblx0cHVibGljIGJpZ0N1cnJlbnRQYWdlOm51bWJlciA9IDE7XHJcblxyXG5cdC8vIEFsZXJ0XHJcblx0cHVibGljIGFsZXJ0czogQXJyYXk8T2JqZWN0PiA9IFt7XHJcblx0XHR0eXBlOiAnZGFuZ2VyJyxcclxuXHRcdG1zZzogJ09oIHNuYXAhIENoYW5nZSBhIGZldyB0aGluZ3MgdXAgYW5kIHRyeSBzdWJtaXR0aW5nIGFnYWluLidcclxuXHRcdH0sXHJcblx0XHR7XHJcblx0XHRcdHR5cGU6ICdzdWNjZXNzJyxcclxuXHRcdFx0bXNnOiAnV2VsbCBkb25lISBZb3Ugc3VjY2Vzc2Z1bGx5IHJlYWQgdGhpcyBpbXBvcnRhbnQgYWxlcnQgbWVzc2FnZS4nLFxyXG5cdFx0XHRjbG9zYWJsZTogdHJ1ZVxyXG5cdFx0fVxyXG5cdF07XHJcblxyXG5cdC8vIFByb2dyZXNzYmFyXHJcblx0cHVibGljIG1heDpudW1iZXIgPSAyMDA7XHJcblx0cHVibGljIHNob3dXYXJuaW5nOmJvb2xlYW47XHJcblx0cHVibGljIGR5bmFtaWM6bnVtYmVyO1xyXG5cdHB1YmxpYyB0eXBlOnN0cmluZztcclxuXHRwdWJsaWMgc3RhY2tlZDphbnlbXSA9IFtdO1xyXG5cclxuXHQvLyBSYXRpbmdcclxuXHRwdWJsaWMgeDpudW1iZXIgPSA1O1xyXG5cdHB1YmxpYyB5Om51bWJlciA9IDI7XHJcblx0cHVibGljIG1heFJhdGluZzpudW1iZXIgPSAxMDtcclxuXHRwdWJsaWMgcmF0ZTpudW1iZXIgPSA3O1xyXG5cdHB1YmxpYyBpc1JlYWRvbmx5OmJvb2xlYW4gPSBmYWxzZTtcclxuXHJcblx0cHVibGljIG92ZXJTdGFyOm51bWJlcjtcclxuXHRwdWJsaWMgcGVyY2VudDpudW1iZXI7XHJcblxyXG5cdHB1YmxpYyByYXRpbmdTdGF0ZXM6YW55ID0gW1xyXG5cdFx0e3N0YXRlT246ICdmYSBmYS1jaGVjaycsIHN0YXRlT2ZmOiAnZmEgZmEtY2hlY2stY2lyY2xlJ30sXHJcblx0XHR7c3RhdGVPbjogJ2ZhIGZhLXN0YXInLCBzdGF0ZU9mZjogJ2ZhIGZhLXN0YXItbyd9LFxyXG5cdFx0e3N0YXRlT246ICdmYSBmYS1oZWFydCcsIHN0YXRlT2ZmOiAnZmEgZmEtYmFuJ30sXHJcblx0XHR7c3RhdGVPbjogJ2ZhIGZhLWhlYXJ0JyB9LFxyXG5cdFx0e3N0YXRlT2ZmOiAnZmEgZmEtcG93ZXItb2ZmJ31cclxuXHRdO1xyXG5cclxuXHQvLyBUYWJzXHJcblx0cHVibGljIHRhYnM6QXJyYXk8YW55PiA9IFtcclxuXHQgICAge3RpdGxlOiAnVGl0bGUgMScsIGNvbnRlbnQ6ICdEeW5hbWljIGNvbnRlbnQgMSd9LFxyXG5cdCAgICB7dGl0bGU6ICdUaXRsZSAyJywgY29udGVudDogJ0R5bmFtaWMgY29udGVudCAyJywgZGlzYWJsZWQ6IHRydWV9LFxyXG5cdCAgICB7dGl0bGU6ICdUaXRsZSAzJywgY29udGVudDogJ0R5bmFtaWMgY29udGVudCAzJywgcmVtb3ZhYmxlOiB0cnVlfVxyXG5cdF07XHJcblxyXG5cdC8vIFR5cGVoZWFkXHJcblx0cHVibGljIHNlbGVjdGVkOnN0cmluZyA9ICcnO1xyXG5cdHB1YmxpYyBhc3luY1NlbGVjdGVkOnN0cmluZyA9ICcnO1xyXG5cdHB1YmxpYyB0eXBlYWhlYWRMb2FkaW5nOmJvb2xlYW4gPSBmYWxzZTtcclxuXHRwdWJsaWMgdHlwZWFoZWFkTm9SZXN1bHRzOmJvb2xlYW4gPSBmYWxzZTtcclxuXHRwdWJsaWMgc3RhdGVzOkFycmF5PHN0cmluZz4gPSBbJ0FsYWJhbWEnLCAnQWxhc2thJywgJ0FyaXpvbmEnLCAnQXJrYW5zYXMnLFxyXG5cdCdDYWxpZm9ybmlhJywgJ0NvbG9yYWRvJyxcclxuXHQnQ29ubmVjdGljdXQnLCAnRGVsYXdhcmUnLCAnRmxvcmlkYScsICdHZW9yZ2lhJywgJ0hhd2FpaScsICdJZGFobycsXHJcblx0J0lsbGlub2lzJywgJ0luZGlhbmEnLCAnSW93YScsXHJcblx0J0thbnNhcycsICdLZW50dWNreScsICdMb3Vpc2lhbmEnLCAnTWFpbmUnLCAnTWFyeWxhbmQnLCAnTWFzc2FjaHVzZXR0cycsXHJcblx0J01pY2hpZ2FuJywgJ01pbm5lc290YScsXHJcblx0J01pc3Npc3NpcHBpJywgJ01pc3NvdXJpJywgJ01vbnRhbmEnLCAnTmVicmFza2EnLCAnTmV2YWRhJywgJ05ldyBIYW1wc2hpcmUnLFxyXG5cdCdOZXcgSmVyc2V5JywgJ05ldyBNZXhpY28nLFxyXG5cdCdOZXcgWW9yaycsICdOb3J0aCBEYWtvdGEnLCAnTm9ydGggQ2Fyb2xpbmEnLCAnT2hpbycsICdPa2xhaG9tYScsICdPcmVnb24nLFxyXG5cdCdQZW5uc3lsdmFuaWEnLCAnUmhvZGUgSXNsYW5kJyxcclxuXHQnU291dGggQ2Fyb2xpbmEnLCAnU291dGggRGFrb3RhJywgJ1Rlbm5lc3NlZScsICdUZXhhcycsICdVdGFoJywgJ1Zlcm1vbnQnLFxyXG5cdCdWaXJnaW5pYScsICdXYXNoaW5ndG9uJyxcclxuXHQnV2VzdCBWaXJnaW5pYScsICdXaXNjb25zaW4nLCAnV3lvbWluZyddO1xyXG5cdHB1YmxpYyBzdGF0ZXNDb21wbGV4OkFycmF5PGFueT4gPSBbXHJcblx0e2lkOiAxLCBuYW1lOiAnQWxhYmFtYSd9LCB7aWQ6IDIsIG5hbWU6ICdBbGFza2EnfSwge2lkOiAzLCBuYW1lOiAnQXJpem9uYSd9LFxyXG5cdHtpZDogNCwgbmFtZTogJ0Fya2Fuc2FzJ30sIHtpZDogNSwgbmFtZTogJ0NhbGlmb3JuaWEnfSxcclxuXHR7aWQ6IDYsIG5hbWU6ICdDb2xvcmFkbyd9LCB7aWQ6IDcsIG5hbWU6ICdDb25uZWN0aWN1dCd9LFxyXG5cdHtpZDogOCwgbmFtZTogJ0RlbGF3YXJlJ30sIHtpZDogOSwgbmFtZTogJ0Zsb3JpZGEnfSxcclxuXHR7aWQ6IDEwLCBuYW1lOiAnR2VvcmdpYSd9LCB7aWQ6IDExLCBuYW1lOiAnSGF3YWlpJ30sXHJcblx0e2lkOiAxMiwgbmFtZTogJ0lkYWhvJ30sIHtpZDogMTMsIG5hbWU6ICdJbGxpbm9pcyd9LFxyXG5cdHtpZDogMTQsIG5hbWU6ICdJbmRpYW5hJ30sIHtpZDogMTUsIG5hbWU6ICdJb3dhJ30sXHJcblx0e2lkOiAxNiwgbmFtZTogJ0thbnNhcyd9LCB7aWQ6IDE3LCBuYW1lOiAnS2VudHVja3knfSxcclxuXHR7aWQ6IDE4LCBuYW1lOiAnTG91aXNpYW5hJ30sIHtpZDogMTksIG5hbWU6ICdNYWluZSd9LFxyXG5cdHtpZDogMjEsIG5hbWU6ICdNYXJ5bGFuZCd9LCB7aWQ6IDIyLCBuYW1lOiAnTWFzc2FjaHVzZXR0cyd9LFxyXG5cdHtpZDogMjMsIG5hbWU6ICdNaWNoaWdhbid9LCB7aWQ6IDI0LCBuYW1lOiAnTWlubmVzb3RhJ30sXHJcblx0e2lkOiAyNSwgbmFtZTogJ01pc3Npc3NpcHBpJ30sIHtpZDogMjYsIG5hbWU6ICdNaXNzb3VyaSd9LFxyXG5cdHtpZDogMjcsIG5hbWU6ICdNb250YW5hJ30sIHtpZDogMjgsIG5hbWU6ICdOZWJyYXNrYSd9LFxyXG5cdHtpZDogMjksIG5hbWU6ICdOZXZhZGEnfSwge2lkOiAzMCwgbmFtZTogJ05ldyBIYW1wc2hpcmUnfSxcclxuXHR7aWQ6IDMxLCBuYW1lOiAnTmV3IEplcnNleSd9LCB7aWQ6IDMyLCBuYW1lOiAnTmV3IE1leGljbyd9LFxyXG5cdHtpZDogMzMsIG5hbWU6ICdOZXcgWW9yayd9LCB7aWQ6IDM0LCBuYW1lOiAnTm9ydGggRGFrb3RhJ30sXHJcblx0e2lkOiAzNSwgbmFtZTogJ05vcnRoIENhcm9saW5hJ30sIHtpZDogMzYsIG5hbWU6ICdPaGlvJ30sXHJcblx0e2lkOiAzNywgbmFtZTogJ09rbGFob21hJ30sIHtpZDogMzgsIG5hbWU6ICdPcmVnb24nfSxcclxuXHR7aWQ6IDM5LCBuYW1lOiAnUGVubnN5bHZhbmlhJ30sIHtpZDogNDAsIG5hbWU6ICdSaG9kZSBJc2xhbmQnfSxcclxuXHR7aWQ6IDQxLCBuYW1lOiAnU291dGggQ2Fyb2xpbmEnfSwge2lkOiA0MiwgbmFtZTogJ1NvdXRoIERha290YSd9LFxyXG5cdHtpZDogNDMsIG5hbWU6ICdUZW5uZXNzZWUnfSwge2lkOiA0NCwgbmFtZTogJ1RleGFzJ30sXHJcblx0e2lkOiA0NSwgbmFtZTogJ1V0YWgnfSwge2lkOiA0NiwgbmFtZTogJ1Zlcm1vbnQnfSxcclxuXHR7aWQ6IDQ3LCBuYW1lOiAnVmlyZ2luaWEnfSwge2lkOiA0OCwgbmFtZTogJ1dhc2hpbmd0b24nfSxcclxuXHR7aWQ6IDQ5LCBuYW1lOiAnV2VzdCBWaXJnaW5pYSd9LCB7aWQ6IDUwLCBuYW1lOiAnV2lzY29uc2luJ30sXHJcblx0e2lkOiA1MSwgbmFtZTogJ1d5b21pbmcnfV07XHJcblxyXG5cdHByaXZhdGUgX2NhY2hlOmFueTtcclxuXHRwcml2YXRlIF9wcmV2Q29udGV4dDphbnk7XHJcblxyXG5cdHB1YmxpYyBjb25zdHJ1Y3RvcigpIHtcclxuXHRcdHRoaXMucmFuZG9tKCk7XHJcblx0XHR0aGlzLnJhbmRvbVN0YWNrZWQoKTtcclxuXHR9XHJcblxyXG5cdC8vIEFsZXJ0XHJcblx0cHVibGljIGNsb3NlQWxlcnQoaTpudW1iZXIpOnZvaWQge1xyXG5cdFx0dGhpcy5hbGVydHMuc3BsaWNlKGksIDEpO1xyXG5cdH1cclxuXHRwdWJsaWMgYWRkQWxlcnQoKTp2b2lkIHtcclxuXHRcdHRoaXMuYWxlcnRzLnB1c2goe21zZzogJ0Fub3RoZXIgYWxlcnQhJywgdHlwZTogJ3dhcm5pbmcnLCBjbG9zYWJsZTogdHJ1ZX0pO1xyXG5cdH1cclxuXHJcblx0Ly8gRHJvcGRvd25cclxuXHRwdWJsaWMgdG9nZ2xlZChvcGVuOmJvb2xlYW4pOnZvaWQge1xyXG5cdFx0Y29uc29sZS5sb2coJ0Ryb3Bkb3duIGlzIG5vdzogJywgb3Blbik7XHJcblx0fVxyXG5cclxuXHRwdWJsaWMgdG9nZ2xlRHJvcGRvd24oJGV2ZW50Ok1vdXNlRXZlbnQpOnZvaWQge1xyXG5cdFx0JGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcblx0XHQkZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XHJcblx0XHR0aGlzLnN0YXR1cy5pc29wZW4gPSAhdGhpcy5zdGF0dXMuaXNvcGVuO1xyXG5cdH1cclxuXHJcblx0Ly8gUGFnaW5hdGlvblxyXG5cdHB1YmxpYyBzZXRQYWdlKHBhZ2VObzpudW1iZXIpOnZvaWQge1xyXG5cdFx0dGhpcy5jdXJyZW50UGFnZSA9IHBhZ2VObztcclxuXHR9O1xyXG5cclxuXHRwdWJsaWMgcGFnZUNoYW5nZWQoZXZlbnQ6YW55KTp2b2lkIHtcclxuXHRcdGNvbnNvbGUubG9nKCdQYWdlIGNoYW5nZWQgdG86ICcgKyBldmVudC5wYWdlKTtcclxuXHRcdGNvbnNvbGUubG9nKCdOdW1iZXIgaXRlbXMgcGVyIHBhZ2U6ICcgKyBldmVudC5pdGVtc1BlclBhZ2UpO1xyXG5cdH07XHJcblx0Ly8gUHJvZ3Jlc3NiYXJcclxuXHRwdWJsaWMgcmFuZG9tKCk6dm9pZCB7XHJcblx0XHRsZXQgdmFsdWUgPSBNYXRoLmZsb29yKChNYXRoLnJhbmRvbSgpICogMTAwKSArIDEpO1xyXG5cdFx0bGV0IHR5cGU6c3RyaW5nO1xyXG5cclxuXHRcdGlmICh2YWx1ZSA8IDI1KSB7XHJcblx0XHRcdHR5cGUgPSAnc3VjY2Vzcyc7XHJcblx0XHR9IGVsc2UgaWYgKHZhbHVlIDwgNTApIHtcclxuXHRcdFx0dHlwZSA9ICdpbmZvJztcclxuXHRcdH0gZWxzZSBpZiAodmFsdWUgPCA3NSkge1xyXG5cdFx0XHR0eXBlID0gJ3dhcm5pbmcnO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0dHlwZSA9ICdkYW5nZXInO1xyXG5cdFx0fVxyXG5cclxuXHRcdHRoaXMuc2hvd1dhcm5pbmcgPSAodHlwZSA9PT0gJ2RhbmdlcicgfHwgdHlwZSA9PT0gJ3dhcm5pbmcnKTtcclxuXHRcdHRoaXMuZHluYW1pYyA9IHZhbHVlO1xyXG5cdFx0dGhpcy50eXBlID0gdHlwZTtcclxuXHR9O1xyXG5cclxuXHRwdWJsaWMgcmFuZG9tU3RhY2tlZCgpOnZvaWQge1xyXG5cdFx0bGV0IHR5cGVzID0gWydzdWNjZXNzJywgJ2luZm8nLCAnd2FybmluZycsICdkYW5nZXInXTtcclxuXHJcblx0XHR0aGlzLnN0YWNrZWQgPSBbXTtcclxuXHRcdGxldCB0b3RhbCA9IDA7XHJcblx0XHRsZXQgbiA9IE1hdGguZmxvb3IoKE1hdGgucmFuZG9tKCkgKiA0KSArIDEpO1xyXG5cdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCBuOyBpKyspIHtcclxuXHRcdFx0bGV0IGluZGV4ID0gTWF0aC5mbG9vcigoTWF0aC5yYW5kb20oKSAqIDQpKTtcclxuXHRcdFx0bGV0IHZhbHVlID0gTWF0aC5mbG9vcigoTWF0aC5yYW5kb20oKSAqIDMwKSArIDEpO1xyXG5cdFx0XHR0b3RhbCArPSB2YWx1ZTtcclxuXHRcdFx0dGhpcy5zdGFja2VkLnB1c2goe1xyXG5cdFx0XHRcdHZhbHVlOiB2YWx1ZSxcclxuXHQgICAgICAgIG1heDogdmFsdWUsIC8vIGkgIT09IChuIC0gMSkgPyB2YWx1ZSA6IDEwMCxcclxuXHQgICAgICAgIHR5cGU6IHR5cGVzW2luZGV4XVxyXG5cdCAgICB9KTtcclxuXHRcdH1cclxuXHR9O1xyXG5cdC8vIFJhdGluZ1xyXG5cdHB1YmxpYyBob3ZlcmluZ092ZXIodmFsdWU6bnVtYmVyKTp2b2lkIHtcclxuXHRcdHRoaXMub3ZlclN0YXIgPSB2YWx1ZTtcclxuXHRcdHRoaXMucGVyY2VudCA9IDEwMCAqICh2YWx1ZSAvIHRoaXMubWF4KTtcclxuXHR9O1xyXG5cclxuXHRwdWJsaWMgcmVzZXRTdGFyKCk6dm9pZCB7XHJcblx0XHR0aGlzLm92ZXJTdGFyID0gdm9pZCAwO1xyXG5cdH1cclxuXHQvLyBUYWJzXHJcblx0cHVibGljIGFsZXJ0TWUoKTp2b2lkIHtcclxuXHRcdHNldFRpbWVvdXQoZnVuY3Rpb24gKCk6dm9pZCB7XHJcblx0XHRcdGFsZXJ0KCdZb3VcXCd2ZSBzZWxlY3RlZCB0aGUgYWxlcnQgdGFiIScpO1xyXG5cdFx0fSk7XHJcblx0fTtcclxuXHJcblx0cHVibGljIHNldEFjdGl2ZVRhYihpbmRleDpudW1iZXIpOnZvaWQge1xyXG5cdFx0dGhpcy50YWJzW2luZGV4XS5hY3RpdmUgPSB0cnVlO1xyXG5cdH07XHJcblxyXG5cdHB1YmxpYyByZW1vdmVUYWJIYW5kbGVyKC8qdGFiOmFueSovKTp2b2lkIHtcclxuXHRcdGNvbnNvbGUubG9nKCdSZW1vdmUgVGFiIGhhbmRsZXInKTtcclxuXHR9O1xyXG5cclxuXHQvLyBUeXBlaGVhZFxyXG5cdHB1YmxpYyBnZXRDb250ZXh0KCk6YW55IHtcclxuXHRcdHJldHVybiB0aGlzO1xyXG5cdH1cclxuXHJcblx0cHVibGljIGdldEFzeW5jRGF0YShjb250ZXh0OmFueSk6RnVuY3Rpb24ge1xyXG5cdFx0aWYgKHRoaXMuX3ByZXZDb250ZXh0ID09PSBjb250ZXh0KSB7XHJcblx0XHRcdHJldHVybiB0aGlzLl9jYWNoZTtcclxuXHRcdH1cclxuXHJcblx0XHR0aGlzLl9wcmV2Q29udGV4dCA9IGNvbnRleHQ7XHJcblx0XHRsZXQgZjpGdW5jdGlvbiA9IGZ1bmN0aW9uICgpOlByb21pc2U8c3RyaW5nW10+IHtcclxuXHRcdFx0bGV0IHA6UHJvbWlzZTxzdHJpbmdbXT4gPSBuZXcgUHJvbWlzZSgocmVzb2x2ZTpGdW5jdGlvbikgPT4ge1xyXG5cdFx0XHRcdHNldFRpbWVvdXQoKCkgPT4ge1xyXG5cdFx0XHRcdFx0bGV0IHF1ZXJ5ID0gbmV3IFJlZ0V4cChjb250ZXh0LmFzeW5jU2VsZWN0ZWQsICdpZycpO1xyXG5cdFx0XHRcdFx0cmV0dXJuIHJlc29sdmUoY29udGV4dC5zdGF0ZXMuZmlsdGVyKChzdGF0ZTphbnkpID0+IHtcclxuXHRcdFx0XHRcdFx0cmV0dXJuIHF1ZXJ5LnRlc3Qoc3RhdGUpO1xyXG5cdFx0XHRcdFx0fSkpO1xyXG5cdFx0XHRcdH0sIDIwMCk7XHJcblx0XHRcdH0pO1xyXG5cdFx0XHRyZXR1cm4gcDtcclxuXHRcdH07XHJcblx0XHR0aGlzLl9jYWNoZSA9IGY7XHJcblx0XHRyZXR1cm4gdGhpcy5fY2FjaGU7XHJcblx0fVxyXG5cclxuXHRwdWJsaWMgY2hhbmdlVHlwZWFoZWFkTG9hZGluZyhlOmJvb2xlYW4pOnZvaWQge1xyXG5cdFx0dGhpcy50eXBlYWhlYWRMb2FkaW5nID0gZTtcclxuXHR9XHJcblxyXG5cdHB1YmxpYyBjaGFuZ2VUeXBlYWhlYWROb1Jlc3VsdHMoZTpib29sZWFuKTp2b2lkIHtcclxuXHRcdHRoaXMudHlwZWFoZWFkTm9SZXN1bHRzID0gZTtcclxuXHR9XHJcblxyXG5cdHB1YmxpYyB0eXBlYWhlYWRPblNlbGVjdChlOmFueSk6dm9pZCB7XHJcblx0XHRjb25zb2xlLmxvZyhgU2VsZWN0ZWQgdmFsdWU6ICR7ZS5pdGVtfWApO1xyXG5cdH1cclxufVxyXG4iXX0=
