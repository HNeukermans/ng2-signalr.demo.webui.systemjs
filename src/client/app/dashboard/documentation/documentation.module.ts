import { NgModule } from '@angular/core';
import { DocumentationComponent } from './documentation.component';
//import { ChatComponent } from './chat';
import { ConnectionResolver } from './documentation.route.resolver';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { TabsModule } from 'ng2-bootstrap/ng2-bootstrap';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  imports: [ FormsModule, CommonModule, TabsModule, SharedModule ],
  providers: [ConnectionResolver],
  declarations: [DocumentationComponent],
  exports: [DocumentationComponent]
})



export class DocumentationModule { }
