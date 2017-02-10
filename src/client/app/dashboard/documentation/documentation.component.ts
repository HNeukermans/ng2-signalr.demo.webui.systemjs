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
  public listenCode: string = '';
  public chatCode: string = '';

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

    this.showChatClientCode();
    this.showListenClientCode();
 }

  ngOnDestroy() {
    console.log('ngOnDestroy');
    this._subscription.unsubscribe();
  }

  onChatMessage(message: string) {
    console.log('onChatMessage');
    this._connection.invoke('Chat', new ChatMessage('Hannes', message))
      .catch((err:any) => console.log('Failed to invoke \'Chat\'. Error occured. Error:' + err));
  }

  showChatClientCode() {
    let code = `
      // send chat message to server
      chat() {
        this._connection.invoke('Chat', new ChatMessage('Hannes', message))
          .catch((err:any) => console.log('Failed to invoke \'Chat\'. Error occured. Error:' + err));
        }
      }`;
    this.chatCode = Prism.highlight(code, Prism.languages.javascript);
  }

  showChatServerCode() {
    let code = `
// chat
public void Chat(ChatMessage message)
{
    //do stuff
    ....
}`
    this.chatCode = Prism.highlight(code, Prism.languages.javascript);
  }

  showChatSpecCode() {
    let code = `
it('chat() should invoke Chat with message',
  inject([DocumentationComponent], (component: DocumentationComponent) => {

    spyOn(connectionMock, 'invoke').and.returnValue(Promise.resolve([]));

    component.message = 'My message';
    component.chat();

    expect(connectionMock.invoke)
      .toHaveBeenCalledWith('Chat', jasmine.objectContaining({ content: component.message }));
  }));`
    this.chatCode = Prism.highlight(code, Prism.languages.javascript);

  }


  showListenServerCode() {
    let code = `
// broadcast
public void xxx(ChatMessage message)
{
    // broadcast to all clients
    Clients.All.OnMessageSent(new ChatMessage('Hannes', 'Message'));
}`
    this.listenCode = Prism.highlight(code, Prism.languages.javascript);
  }

  showListenSpecCode() {

    let code = `
it('ngInit() should listen for broadcast event',
  inject([DocumentationComponent], (component: DocumentationComponent) => {

    spyOn(connectionMock, 'listen').and.callThrough();

    component.ngOnInit();

    expect(connectionMock.listen)
      .toHaveBeenCalledWith(jasmine.objectContaining({ event: 'OnMessageSent' }));

    expect(connectionMock.listeners['OnMessageSent'].observers.length)
      .toBe(1);

}));`

  this.listenCode = Prism.highlight(code, Prism.languages.javascript);

  }

  showListenClientCode() {

    let code =`
// start listening for server messages in ngOnInit
ngOnInit() {
    let onMessageSent$ = new BroadcastEventListener<ChatMessage>('OnMessageSent');
    // register the listener
    this._connection.listen(onMessageSent$);

    // subscribe to event
    this._subscription = onMessageSent$.subscribe((chatMessage: ChatMessage) => {
      this.chatMessages.push(chatMessage);
    });
}`;

    this.listenCode = Prism.highlight(code, Prism.languages.javascript);

  }

    showChatMessageCode() {
    let code = `
export class ChatMessage {
  constructor(public user: string, public content: string) {
}`
    this.listenCode = Prism.highlight(code, Prism.languages.javascript);
  }

}
