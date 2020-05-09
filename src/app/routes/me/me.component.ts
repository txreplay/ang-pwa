import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../services/auth/auth.service';


@Component({
  selector: 'app-me',
  templateUrl: './me.component.html',
  providers: [AuthService]
})
export class MeComponent implements OnInit {

  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.authService.me().then(data => console.log(data));
  }

}
