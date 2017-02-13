import { Resolve } from '@angular/router';
import { SignalR, SignalRConnection } from 'ng2-signalr';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class ConnectionResolver implements Resolve<SignalRConnection> {

  constructor(private _signalR: SignalR) { }

  resolve() {
    console.log('Group ConnectionResolver. Resolving...');
    let connection1 = Observable.fromPromise(this._signalR.connect());
    let connection2 =  Observable.fromPromise(this._signalR.connect());

    return Observable.forkJoin([connection1, connection2])
  }
}
