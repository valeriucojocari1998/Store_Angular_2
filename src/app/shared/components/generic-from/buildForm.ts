import { FormControl, FormGroup, Validators } from "@angular/forms";
import { Gender } from "./gender.enum";

export function buildForm() {
  return new FormGroup({
    Name: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(20)]),
    Surname: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(20)]),
    Email: new FormControl('', [Validators.required, Validators.email]),
    Address: new FormControl('', [Validators.required, Validators.minLength(1)]),
    Gender: new FormControl(Gender.Default, [Validators.required]),
    Programmer: new FormControl(false, [Validators.requiredTrue]),
    IsHuman: new FormControl(true),
    MaxMoney: new FormControl(0, [Validators.required, Validators.min(1)])
  });
}
