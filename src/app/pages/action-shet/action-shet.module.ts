import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ActionShetPageRoutingModule } from './action-shet-routing.module';

import { ActionShetPage } from './action-shet.page';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ActionShetPageRoutingModule,
    ComponentsModule, ReactiveFormsModule
  ],
  declarations: [ActionShetPage]
})
export class ActionShetPageModule {}
