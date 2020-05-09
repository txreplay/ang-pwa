import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  providers: [AuthService]
})
export class SignupComponent implements OnInit {

  public form: FormGroup;

  constructor(private formBuilder: FormBuilder, private authService: AuthService) { }

  private initForm = () => {
    this.form = this.formBuilder.group({
      firstname: [undefined, Validators.required],
      lastname: [undefined, Validators.required],
      email: [undefined, Validators.required],
      password: [undefined, Validators.required],
    });
  };

  public signup = () => {
    this.authService.signup(this.form.value)
      .then(apiRes => console.log(apiRes))
      .catch(apiResErr => console.log(apiResErr));
  };

  ngOnInit() {
    this.initForm();
  }

}
