import { BrowserModule } from '@angular/platform-browser';
import { CUSTOM_ELEMENTS_SCHEMA,NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule }   from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppComponent } from './app.component';
import { SignupComponent } from './signup/signup.component';
import { SigninComponent } from './signin/signin.component';
import { Router,RouterModule } from '@angular/router';
import { routing } from './app.routing';
import { AuthService } from './service/auth/auth.service';
import { MatButtonModule, MatToolbarModule, MatIconModule, MatCardModule } from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    SigninComponent
  ],
  imports: [
  	BrowserAnimationsModule,
    BrowserModule,
    HttpClientModule,
    FormsModule,
    MatButtonModule, 
    MatToolbarModule, 
    MatIconModule, 
    MatCardModule,
    RouterModule,
    routing
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
