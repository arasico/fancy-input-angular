# Fancy Input Reactive Forms Angular

![alt text](https://raw.githubusercontent.com/arasico/fancy-input-angular/style-review/src/assets/img/sample.png "Fancy Input Reactive Forms Angular ")


This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.2.0.
 

> AngularJS Fancy input Reactive Forms

* [Overview](#overview)
* [Demo](#)
* [Installation](#installation)
* [Usage](#usage)
* [Contributing](.github/CONTRIBUTING.md)
* [License](#license)

<a name="overview"></a>
## Overview
The number-input is an angular directive which provides text validation, parsing and formatting capabilities
on any HTML element.

## Demo
[Live Demo](https://github.io/)


<a name="installation"></a>
## Installation
Run npm install in your project as follows:

```sh
npm i fancy-input-angular --save
```

<a name="usage"></a>
## Usage
In order to use the fancy-input directive you first must add the relevant dependencies:

Next you must define it as a dependency in your main angular module as follows:

in app module.js

```js
import { FancyInputAngularModule } from 'fancy-input-angular';

@NgModule({
  imports: [
    // ...
    FancyInputAngularModule
  ]
})
```

in ts component beacuse is reactive form 
```ts
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

```

```html
<fancy-input-angular
    id="lastname"
    name="lastname"
    [nameForm]="myFormFather"
    disabled=""
    value=""
    src="https://image.flaticon.com/icons/svg/74/74472.svg"
    type="text"
    error=""
    placeholder="نام خانوادگی"
    label="وارد نمودن نام خانوادگی اجباری می باشد">
    </fancy-input-angular>
```

## Contributing
See [contributing guide](.github/CONTRIBUTING.md)

<a name="license"></a>
## License
Developed by [Yaser Darzi](https://github.com/yaserdarzi) & [Aras Emami](https://github.com/arasemami) and licensed under the Arasico open source license.


