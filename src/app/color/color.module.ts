import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ColorComponent } from './color.component';
import { AnodizedComponent } from './anodized/anodized.component';
import { MaintainingComponent } from './maintaining/maintaining.component';



@NgModule({
  declarations: [
    ColorComponent,
    AnodizedComponent,
    MaintainingComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ColorComponent
  ]
})
export class ColorModule { }
