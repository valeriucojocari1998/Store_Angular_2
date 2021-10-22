import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Gender } from './gender.enum';

@Component({
  selector: 'app-generic-from',
  templateUrl: './generic-from.component.html',
  styleUrls: ['./generic-from.component.css'],
})
export class GenericFormComponent implements OnInit {
  checkout!: FormGroup;
  public genderTypes = Object.values(Gender);

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.buildForm()
  }

  buildForm() {
    this.checkout = this.formBuilder.group({
      Name: [''],
      Surname: [''],
      Email: [''],
      Address: [''],
      Gender: [Gender.Default],
      Programmer: [false],
      IsHuman: [true],
      MaxMoney: [0],
    });
  }

  submit() {
    console.log(this.checkout.value);
  }
}
