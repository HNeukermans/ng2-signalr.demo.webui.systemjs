import { Component, Output, Input, EventEmitter } from '@angular/core';
import { ChatMessage } from './chat.message';

@Component({
	moduleId: module.id,
	selector: 'chat-cmp',
	templateUrl: 'chat.html'
})
export class ChatComponent {

    message: string = '';
    @Output() onMessage = new EventEmitter();
    @Output() onTextChanged = new EventEmitter();
    @Input() messages: ChatMessage[] = [];

    send() {
      console.log('send');
      this.onMessage.emit(this.message);
      this.message = '';
    }

    onMessageChanged() {
      this.onTextChanged.emit(this.message);
    }
}
