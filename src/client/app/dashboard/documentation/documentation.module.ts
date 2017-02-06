import { NgModule } from '@angular/core';

import { DocumentationComponent } from './documentation.component';
import { ChatComponent } from './chat';

@NgModule({
    imports: [],
    declarations: [DocumentationComponent, ChatComponent],
    exports: [DocumentationComponent]
})



export class DocumentationModule { }
