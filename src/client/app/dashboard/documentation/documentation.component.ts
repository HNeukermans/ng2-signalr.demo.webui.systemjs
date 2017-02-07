import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SignalRConnection, BroadcastEventListener } from 'ng2-signalr';
import { ChatMessage } from './chat.message';
import { Subscription } from 'rxjs/Subscription';

@Component({
	moduleId: module.id,
    selector: 'documentation',
    templateUrl: './documentation.component.html'
})

export class DocumentationComponent {

  private _connection: SignalRConnection;
  private _subscription: Subscription;
  public chatMessages: ChatMessage[] = [];
  public content: string = '';
  constructor(route: ActivatedRoute) {
    this._connection = route.snapshot.data['connection'];
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
