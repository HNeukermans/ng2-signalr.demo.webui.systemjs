import { Component, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SignalRConnection, BroadcastEventListener } from 'ng2-signalr';
import { ChatMessage } from '../../shared/chat/chat.message';
import { Subscription } from 'rxjs/Subscription';
import { Subject } from'rxjs/Subject';


declare var AppInsights: any;

@Component({
  moduleId: module.id,
  selector: 'bs-element',
  templateUrl: './bs-element.component.html'
})

export class BSElementComponent  implements OnDestroy {

  public isConx1Joined: boolean = true;
  public isConx2Joined: boolean = true;
  public conx1Messages: ChatMessage[] = [];
  public conx2Messages: ChatMessage[] = [];
  public onConx1Keyup$: Subject<string> = new Subject<string>();
  public onConx2Keyup$: Subject<string> = new Subject<string>();

  public conn1PeerIsTyping$: Subject<boolean> = new Subject<boolean>();
  public conn2PeerIsTyping$: Subject<boolean> = new Subject<boolean>();

  private _connection1: SignalRConnection = null;
  private _connection2: SignalRConnection = null;
  private _subscription1: Subscription;
  private _subscription2: Subscription;

  constructor(route: ActivatedRoute) {
    this._connection1 = route.snapshot.data['connections'][0];
    this._connection2 = route.snapshot.data['connections'][1];
  }

  ngOnInit() {
    this.changeIsJoined('Conx1', this.isConx1Joined);
    this.changeIsJoined('Conx2', this.isConx2Joined);

    // register the listener
    let onConn1MessageSent$ = this._connection1.listenFor('OnRoomMessageSent');
    let onConn2MessageSent$ = this._connection2.listenFor('OnRoomMessageSent');
    let onConn1KeyUp$ = this._connection1.listenFor('OnRoomKeyupSent');
    let onConn2KeyUp$ = this._connection2.listenFor('OnRoomKeyupSent');

    // subscribe to event
    this._subscription1 = onConn1MessageSent$.subscribe((chatMessage: ChatMessage) => {
      this.conx1Messages.push(chatMessage);
    });

    this._subscription2 = onConn2MessageSent$.subscribe((chatMessage: ChatMessage) => {
      this.conx2Messages.push(chatMessage);
    });

    this._subscription1 = onConn1KeyUp$.subscribe((status: string) => {
      console.log('onConn1KeyUp event received. : '+ status);
      let show = status === 'started' ? true : false;
      this.conn1PeerIsTyping$.next(show);
    });

    this._subscription2 = onConn2KeyUp$.subscribe((status: string) => {
      console.log('onConn2KeyUp event received. : ' + status);
      let show = status === 'started' ? true : false;
       this.conn2PeerIsTyping$.next(show);
    });

    this.onConx1Keyup$.subscribe((text) => {
      let status = text === '' ? 'stopped' : 'started';
      this._connection1.invoke('KeyupInRoom', status);
    });

    this.onConx2Keyup$.subscribe((text) => {
      let status = text === '' ? 'stopped' : 'started';
      this._connection1.invoke('KeyupInRoom', status);
    });

    console.log('logging the connection id: ' + this._connection1.id);
    console.log('logging the connection id: ' + this._connection2.id);

  }


  changeIsJoined(connection: string, isJoined: boolean) {
    console.log('connection: ' + connection);
    console.log('isJoined: ' + isJoined);

    let targetConx = connection === 'Conx1' ? this._connection1 : this._connection2;
    let operation: string = isJoined ? 'JoinRoom' : 'LeaveRoom';
    targetConx.invoke(operation);
  }

  chat(connection: string, message: string) {
    let targetConx = connection === 'Conx1' ? this._connection1 : this._connection2;
    targetConx.invoke('ChatInRoom', new ChatMessage('hannes', message));
  }

   ngOnDestroy() {
    console.log('ngOnDestroy');
    this._subscription1.unsubscribe();
    this._subscription2.unsubscribe();
    this._connection1.stop();
    this._connection2.stop();
  }
}
