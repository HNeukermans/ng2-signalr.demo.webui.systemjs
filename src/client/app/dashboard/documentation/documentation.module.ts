import { NgModule } from '@angular/core';
import { DocumentationComponent } from './documentation.component';
import { ChatComponent } from './chat';
import { ConnectionResolver } from './documentation.route.resolver';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [ FormsModule, CommonModule ],
  providers: [ConnectionResolver],
  declarations: [DocumentationComponent, ChatComponent],
  exports: [DocumentationComponent]
})



export class DocumentationModule { }
