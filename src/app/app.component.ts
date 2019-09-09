import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  myFormFather: FormGroup;

  constructor(private fb: FormBuilder) {
  }

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.myFormFather = this.fb.group({});
  }


}
