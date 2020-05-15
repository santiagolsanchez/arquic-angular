import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { SharedModule } from './shared/shared.module';
import { CoreModule } from './core/core.module';

import { AppRoutingModule } from './screens/app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './screens/dashboard/components/dashboard.component';
import { LoginComponent } from './screens/login/components/login.component';
import { ContactComponent } from './screens/contact/components/contact.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    LoginComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
