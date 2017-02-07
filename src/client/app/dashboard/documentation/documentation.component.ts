import { Component, AfterViewChecked, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SignalRConnection, BroadcastEventListener } from 'ng2-signalr';
import { ChatMessage } from './chat.message';
import { Subscription } from 'rxjs/Subscription';

declare var Prism: any;

@Component({
  moduleId: module.id,
  selector: 'documentation',
  templateUrl: './documentation.component.html'
})

export class DocumentationComponent  implements AfterViewChecked, OnDestroy {

  public chatMessages: ChatMessage[] = [];
  public content: string = '';

  private _connection: SignalRConnection;
  private _subscription: Subscription;

  constructor(route: ActivatedRoute) {
    this._connection = route.snapshot.data['connection'];
  }

  ngAfterViewChecked(): any {
    return Prism.highlightAll();
  }

  ngOnInit() {
    let onMessageSent$ = new BroadcastEventListener<ChatMessage>('OnMessageSent');
    // register the listener
    this._connection.listen(onMessageSent$);

    // subscribe to event
    this._subscription = onMessageSent$.subscribe((chatMessage: ChatMessage) => {
      this.chatMessages.push(chatMessage);
    });
  }

  ngOnDestroy() {
    console.log('ngOnDestroy');
    this._subscription.unsubscribe();
  }

  onChatMessage(message: string) {
    console.log('onChatMessage');
    this._connection.invoke('Chat', new ChatMessage('Hannes', message))
      .then((data) => {
      });
  }

  setServerCode() {
    this.content = `onChatMessage(message: string) {
    console.log('onChatMessage');
    this._connection.invoke('Chat', new ChatMessage('Hannes', message))
      .then((data) => {
      });`;
  }

  setUnitTestCode() {
    this.content = `onChatMessage(message: string) {
    console.log('onChatMessage');
    this._connection.invoke('Chat', new ChatMessage('Hannes', message))
      .then((data) => {
      });`;
  }

  setClientCode() {
    this.content = `onChatMessage(message: string) {
      console.log('onChatMessage');
      this._connection.invoke('Chat', new ChatMessage('Hannes', message))
        .then((data) => {
        });`;
  }

}
