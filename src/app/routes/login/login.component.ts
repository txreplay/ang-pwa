import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AuthService} from '../../services/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  providers: [AuthService]
})
export class LoginComponent implements OnInit {
  public form: FormGroup;

  constructor(private formBuilder: FormBuilder, private authService: AuthService) { }

  private initForm = () => {
    this.form = this.formBuilder.group({
      email: ['txreplay@gmail.com', Validators.required],
      password: ['123', Validators.required],
    });
  };

  public login = () => {
    this.authService.login(this.form.value.email, this.form.value.password)
      .then(apiRes => console.log(apiRes))
      .catch(apiResErr => console.log(apiResErr));
  };

  ngOnInit() {
    this.initForm();
  }
}
