import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DefaultModule } from './layouts/default/default.module';
import { FullpageAdminModule } from './layouts/fullpage-admin/fullpage-admin.module';
import { FullpageModule } from './layouts/fullpage/fullpage.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DefaultModule,
    FullpageModule,
    FullpageAdminModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
