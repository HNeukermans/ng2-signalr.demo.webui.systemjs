import { NgModule } from '@angular/core';
import { DocumentationComponent } from './documentation.component';
import { ChatComponent } from './chat';
import { ConnectionResolver } from './documentation.route.resolver';

@NgModule({
  imports: [],
  providers: [ConnectionResolver],
  declarations: [DocumentationComponent, ChatComponent],
  exports: [DocumentationComponent]
})



export class DocumentationModule { }
