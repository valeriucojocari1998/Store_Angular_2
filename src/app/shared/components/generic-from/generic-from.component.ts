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
      Name: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(20)]),
      Surname: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(20)]],
      Email: ['', [Validators.required, Validators.email]],
      Address: ['', [Validators.required, Validators.minLength(1)]],
      Gender: [Gender.Default, [Validators.required]],
      Programmer: [false, [Validators.requiredTrue]],
      IsHuman: [true],
      MaxMoney: [0, [Validators.required, Validators.min(1)]],
    });
  }

  submit() {
    console.log(this.checkout)
  }
}
