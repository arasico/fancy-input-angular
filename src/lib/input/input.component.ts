import { Component, Input, OnInit, ElementRef, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'fancy-input-angular',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {

  @ViewChild('input', {static: false}) inputElement: ElementRef;

  @Input() id: string;
  @Input() name: string;
  @Input() type: string;
  @Input() error: string;
  @Input() placeholder: string;
  @Input() disabled: boolean;
  @Input() label: string;
  @Input() value: string;
  @Input() src: string;
  @Input() nameForm: any = FormGroup;


  handleFocus() {
    this.inputElement.nativeElement.focus();
  }

  constructor(private fb: FormBuilder) {
  }

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.nameForm.addControl(this.name, new FormControl({
      value: this.value,
      disabled: this.disabled
    }));
  }
}
