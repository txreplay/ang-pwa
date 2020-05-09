import {Routes} from '@angular/router';

import {HomepageComponent} from './routes/homepage/homepage.component';
import {SignupComponent} from './routes/signup/signup.component';
import {MeComponent} from './routes/me/me.component';
import {LoginComponent} from './routes/login/login.component';
import {ChatComponent} from './routes/chat/chat.component';

export const MainRouter: Routes = [{
  path: '',
  component: HomepageComponent
}, {
  path: 'signup',
  component: SignupComponent
}, {
  path: 'login',
  component: LoginComponent
}, {
  path: 'chat',
  component: ChatComponent
}, {
  path: 'me',
  component: MeComponent
}, {
  path: '**',
  redirectTo: '404'
}];
