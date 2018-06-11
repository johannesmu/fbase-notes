import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CreatenotePage } from './createnote';

@NgModule({
  declarations: [
    CreatenotePage,
  ],
  imports: [
    IonicPageModule.forChild(CreatenotePage),
  ],
})
export class CreatenotePageModule {}
