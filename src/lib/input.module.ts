import {NgModule} from '@angular/core';
import {InputComponent} from './input/input.component';
import {ReactiveFormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';


@NgModule({
  declarations: [InputComponent],
  imports: [ReactiveFormsModule, CommonModule],
  exports: [InputComponent]
})
export class FancyInputAngularModule {
}
