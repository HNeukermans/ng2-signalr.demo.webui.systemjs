import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { BSElementComponent } from './bsElement.component';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';
import { ChatComponent } from '../../shared/chat/chat';
import { ConnectionResolver } from './bsElement.route.resolver';

@NgModule({
    imports: [RouterModule, FormsModule, SharedModule],
    declarations: [BSElementComponent],
    exports: [BSElementComponent],
    providers: [ConnectionResolver]
})

export class BSElementModule { }
