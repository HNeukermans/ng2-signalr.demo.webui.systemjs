import { Component, AfterViewChecked, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SignalRConnection, BroadcastEventListener } from 'ng2-signalr';
import { Subscription } from 'rxjs/Subscription';
import { ChatMessage } from '../../shared/chat/chat.message';

declare var Prism: any;

@Component({
  moduleId: module.id,
  selector: 'unit-test',
  templateUrl: './unit-test.component.html'
})

export class UnitTestComponent  implements AfterViewChecked, OnDestroy {
   public chatCode: string = '';

  constructor(route: ActivatedRoute) {
  }

  ngAfterViewChecked(): any {
    return Prism.highlightAll();
  }

  ngOnInit() {
    this.showSetupCode();
  }

  ngOnDestroy() {
    console.log('ngOnDestroy');
  }

showVerifySubscriptionCode() {
      let code = `
  // Context:
  // Subsription to server events is done by invoking listen method on the connection object, with BroadcastEventListener passed in.
  // The BroadcastEventListener holds the name of the server event.

  // In our tests we can verify, subscription has indeed happened using 2 ways.

  it('I want to test if my code has subscribed to my server event',
    inject([ChatComponent], (component: ChatComponent) => {
      // arrange
      spyOn(connectionMockManager.mock, 'listen').and.callThrough();
      // act
      component.ngOnInit();
      // assert
      expect(connectionMockManager.mock.listen).toHaveBeenCalledWith(jasmine.objectContaining({ event: 'OnMessageSent' }));
   }));

   it('I want to test if my code has subscribed to my server event',
    inject([ChatComponent], (component: ChatComponent) => {
      // act
      component.ngOnInit();
      // assert
      expect(connectionMockManager.listeners['OnMessageSent']).not.toBeNull();
      expect(connectionMockManager.listeners['OnMessageSent'].observers.length).toBe(1);
   }));

  // explanation:
  // 1. First way, is to spy on the mock 'listen' method, and expect that it has been called with on object containing an event property with the value equal to your server event.
  // 2. A second approach is by asking the connectionMockManager, listener collection for an BroadcastEventListener with name = your server event name. You can then verify that the entry is both not null & has observers.

  // The second approach can be favorable, as it doesn't require spying.
`;
   this.chatCode = Prism.highlight(code, Prism.languages.javascript);
}

showServerEventSimulationCode() {
      let code = `
  // Context:
  // When observing the server and an incoming message is received, the subscriber code is executed. You want to write a unit test that verifies if
  // everything is working correctly inside your subscription code. Also, often, you want to test your client code, that reacts to a certain sequence of server messages.
  // ng2-signalr alllows you to simulate server behavior in your unit tests.

  // Using ng2-signalr, in our tests we can simulate server eventing by using the BroadcastEventListener we get back from the connectionMockManager listener collection. BroadcastEventListeners,
  // are technically speaken rxjs 'Subjects', meaning we can use them to publish events.

  it('I want to simulate several ChatMessages received, in my unit test',
    inject([ChatComponent], (component: ChatComponent) => {

      let publisher = connectionMockManager.listeners['OnMessageSent'];

      publisher.next(new ChatMessage('Hannes', 'a message')); //triggers the BroadcastEventListener.subscribe(() => {});
      publisher.next(new ChatMessage('Hannes', 'a second message')); // ''

      expect(component.chatMessages).toEqual([
            new ChatMessage('Hannes', 'a message'),
            new ChatMessage('Hannes', 'a second message')
          ]);
  }));

  // This approach is even more interesting when we combine this with the errors$ & status$ subjects that live on the connectionMockManager.
  // Both errors$ & status$ properties return rxjs subjects, that allow you to publish (simulate) server error or status events.
  // This means that you can test you client code against scenarios, where, for example, a message would be received, during a slow server connection.
  // (which would otherwise be very difficult to reproduce)

  it('I want to simulate an error or status event, in my unit test',
    inject([ChatComponent], (component: ChatComponent) => {

      connectionMockManager.errors$.next('An error occured');  //triggers the connection.error.subscribe(() => {});
      connectionMockManager.status$.next(ConnectionStatuses.slowConnection); //triggers the connection.status.subscribe(() => {});
      ....

  }));


  `


  ;

  this.chatCode = Prism.highlight(code, Prism.languages.javascript);
}

showSetupCode() {
    let code = `
import { inject, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SignalRConnectionMockManager, ActivatedRouteMock } from 'ng2-signalr';

describe('Chat', () => {

  let connectionMockManager = new SignalRConnectionMockManager();
  let activatedRouteMock = new ActivatedRouteMock();
  activatedRouteMock.snapshot.data = { 'connection': connectionMockManager.mock };

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        ChatComponent,
        { provide: ActivatedRoute, useValue: activatedRouteMock }
      ]
    });
  });`;
    this.chatCode = Prism.highlight(code, Prism.languages.javascript);
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
}`;
    this.chatCode = Prism.highlight(code, Prism.languages.javascript);
  }

  showChatSpecCode() {
    let code = `
it('chat() should invoke Chat with message',
  inject([ChatComponent], (component: ChatComponent) => {

    spyOn(connectionMockManager.mock, 'invoke').and.returnValue(Promise.resolve([]));

    component.message = 'My message';
    component.chat();

    expect(connectionMockManager.mock.invoke)
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
    this.chatCode = Prism.highlight(code, Prism.languages.javascript);
  }

  showListenSpecCode() {

    let code = `
it('ngInit() should listen for broadcast event',
  inject([ChatComponent], (component: ChatComponent) => {

    spyOn(connectionMockManager.mock, 'listen').and.callThrough();

    component.ngOnInit();

    expect(connectionMockManager.mock.listen)
      .toHaveBeenCalledWith(jasmine.objectContaining({ event: 'OnMessageSent' }));

    expect(connectionMockManager.invokeListeners['OnMessageSent'].observers.length)
      .toBe(1);

}));`;

  this.chatCode = Prism.highlight(code, Prism.languages.javascript);

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

    this.chatCode = Prism.highlight(code, Prism.languages.javascript);

  }

    showChatMessageCode() {
    let code = `
export class ChatMessage {
  constructor(public user: string, public content: string) {
}`
    this.chatCode = Prism.highlight(code, Prism.languages.javascript);
  }

}
