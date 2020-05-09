import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HomepageComponent } from './routes/homepage/homepage.component';
import { SignupComponent } from './routes/signup/signup.component';
import { MeComponent } from './routes/me/me.component';
import {MainRouter} from './app.router';
import { HeaderComponent } from './partials/header/header.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { LoginComponent } from './routes/login/login.component';
import { ChatComponent } from './routes/chat/chat.component';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    SignupComponent,
    MeComponent,
    HeaderComponent,
    LoginComponent,
    ChatComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(MainRouter)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
