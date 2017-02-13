import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SignalRConnection } from 'ng2-signalr';

@Component({
	moduleId: module.id,
    selector: 'bs-element',
    templateUrl: './bs-element.component.html'
})

export class BSElementComponent {

 private _connection1: SignalRConnection = null;
 private _connection2: SignalRConnection = null;
    
 constructor(route: ActivatedRoute) {
    this._connection1 = route.snapshot.data['connections'][0];
    this._connection2 = route.snapshot.data['connections'][1]; 
  }    

}
