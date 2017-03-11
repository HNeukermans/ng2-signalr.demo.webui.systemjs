import { NgModule } from '@angular/core';
import { UnitTestComponent } from './unit-test.component';
//import { ChatComponent } from './chat';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { TabsModule } from 'ng2-bootstrap/ng2-bootstrap';

@NgModule({
  imports: [ FormsModule, CommonModule, TabsModule ],
  declarations: [UnitTestComponent],
  exports: [UnitTestComponent]
})



export class UnitTestModule { }
