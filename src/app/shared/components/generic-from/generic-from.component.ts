import { Component, OnInit } from '@angular/core';
import { Gender } from './gender.enum';
import { buildForm } from './buildForm';

@Component({
  selector: 'app-generic-from',
  templateUrl: './generic-from.component.html',
  styleUrls: ['./generic-from.component.css'],
})
export class GenericFormComponent implements OnInit {
  public genderTypes = Object.values(Gender);
  checkout: any;

  constructor() {}

  ngOnInit(): void {
    this.checkout = buildForm();
  }

  submit() {
    console.log(this.checkout);
  }
}
