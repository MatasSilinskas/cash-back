import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FullNamePipe } from './pipes/full-name.pipe';

@NgModule({
  declarations: [FullNamePipe],
  exports: [
    FullNamePipe
  ],
  imports: [
    CommonModule
  ]
})
export class SharedServicesModule { }
