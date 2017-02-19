import { TestBed, inject } from '@angular/core/testing';
import { SignalRConnectionMockManager, ConnectionStatus, ActivatedRouteMock } from 'ng2-signalr';
import { ActivatedRoute } from '@angular/router';
import { DocumentationComponent } from './documentation.component';
import { ChatMessage } from '../../shared/chat/chat.message';

describe('Documentation', () => {

  let connectionMockManager = new SignalRConnectionMockManager();
  let activatedRouteMock = new ActivatedRouteMock();
  activatedRouteMock.snapshot.data = { 'connection': connectionMockManager.mock };

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        DocumentationComponent,
        { provide: ActivatedRoute, useValue: activatedRouteMock }
      ]
    });
  });

   beforeEach(inject([DocumentationComponent], (documentation: DocumentationComponent) => {
    documentation.ngOnInit();
  }));

  it('Received "OnMessageSent" event should bind to chatmessages',
    inject([DocumentationComponent], (component: DocumentationComponent) => {

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
