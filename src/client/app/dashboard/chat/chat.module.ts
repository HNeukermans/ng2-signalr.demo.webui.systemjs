import { NgModule } from '@angular/core';
import { ChatComponent } from './chat.component';
//import { ChatComponent } from './chat';
import { ConnectionResolver } from './chat.route.resolver';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { TabsModule } from 'ng2-bootstrap/ng2-bootstrap';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  imports: [ FormsModule, CommonModule, TabsModule, SharedModule ],
  providers: [ConnectionResolver],
  declarations: [ChatComponent],
  exports: [ChatComponent]
})



export class ChatModule { }
