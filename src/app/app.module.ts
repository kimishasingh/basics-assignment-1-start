import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { warningAlertComponent } from './warningAlert/warningAlert.component';
import { successAlertComponent } from './successAlert/successAlert.component';

@NgModule({
  declarations: [
    AppComponent,
    warningAlertComponent,
    successAlertComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
