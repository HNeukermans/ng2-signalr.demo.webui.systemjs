import { TestBed, inject } from '@angular/core/testing';
import { SignalRConnectionMockManager, ConnectionStatus, ActivatedRouteMock } from 'ng2-signalr';
import { ActivatedRoute } from '@angular/router';
import { ChatComponent } from './chat.component';
import { ChatMessage } from '../../shared/chat/chat.message';

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
  });

   beforeEach(inject([ChatComponent], (Chat: ChatComponent) => {
    Chat.ngOnInit();
  }));

it('I want to test if my code has subscribed to my server event',
  inject([ChatComponent], (component: ChatComponent) => {

    //Subsription to server events is done by invoking listen method on the connection object, with BroadcastEventListener passed in.
    //The BroadcastEventListener holds the name of the server event.

    //In our tests we can verify, subscriptionhas indeed happened by
    spyOn(connectionMockManager.mock, 'listen').and.callThrough();

    component.ngOnInit();

    expect(connectionMockManager.mock.listen)
      .toHaveBeenCalledWith(jasmine.objectContaining({ event: 'OnMessageSent' }));

    expect(connectionMockManager.invokeListeners['OnMessageSent'].observers.length)
      .toBe(1);

}));

  it('Received "OnMessageSent" event should bind to chatmessages',
    inject([ChatComponent], (component: ChatComponent) => {

      let publisher = connectionMockManager
        .invokeListeners['OnMessageSent'];

      publisher.next(new ChatMessage('Hannes', 'a message'))
      publisher.next(new ChatMessage('Hannes', 'a second message'));

      expect(component.chatMessages)
        .toEqual([
          new ChatMessage('Hannes', 'a message'),
          new ChatMessage('Hannes', 'a second message')
          ]);
    }));

});
