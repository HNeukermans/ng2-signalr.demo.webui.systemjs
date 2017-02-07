import { NgModule } from '@angular/core';
import { DocumentationComponent } from './documentation.component';
import { ChatComponent } from './chat';
import { ConnectionResolver } from './documentation.route.resolver';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { TabsModule } from 'ng2-bootstrap/ng2-bootstrap';


@NgModule({
  imports: [ FormsModule, CommonModule, TabsModule ],
  providers: [ConnectionResolver],
  declarations: [DocumentationComponent, ChatComponent],
  exports: [DocumentationComponent]
})



export class DocumentationModule { }
