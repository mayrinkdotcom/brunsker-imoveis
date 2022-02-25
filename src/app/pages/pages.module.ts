import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { ComponentsModule } from '../core/components/components.module';
import { ManagePropertiesComponent } from './manage-properties/manage-properties.component';



@NgModule({
  declarations: [
    LandingPageComponent,
    ManagePropertiesComponent,
  ],
  imports: [
    CommonModule,
    ComponentsModule,
  ]
})
export class PagesModule { }
