import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { DropdownModule } from 'ng2-bootstrap/ng2-bootstrap';
import { ModalModule } from 'ng2-bootstrap/ng2-bootstrap';

import { ChatModule } from './chat/chat.module';
import { UnitTestModule } from './unit-test/unit-test.module';
import { BSElementModule } from './bs-element/bsElement.module';

import { DashboardComponent } from './dashboard.component';

import { TopNavComponent } from '../shared/index';
import { SidebarComponent } from '../shared/index';
import { DevSetupModule } from './dev-setup/devSetup.module';
import { FormsModule } from '@angular/forms';


@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    DropdownModule,
    ModalModule,
    BSElementModule,
    ChatModule,
    UnitTestModule,
    DevSetupModule,
    FormsModule
  ],
  declarations: [DashboardComponent, TopNavComponent, SidebarComponent],
  exports: [DashboardComponent, TopNavComponent, SidebarComponent]
})

export class DashboardModule { }
