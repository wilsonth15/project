import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HkComponent } from './hk/hk.component';
import { HttpClientModule} from '@angular/common/http';
import { FormsModule} from '@angular/forms';
import { SearchService } from "./test/search.service";
import { HomePageComponent } from './home-page/home-page.component';
import { HeaderListComponent } from './header-list/header-list.component';
import { FooterListComponent } from './footer-list/footer-list.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { RegisterPageComponent } from './register-page/register-page.component';

@NgModule({
  declarations: [
    AppComponent,
    HkComponent,
    HomePageComponent,
    HeaderListComponent,
    FooterListComponent,
    LoginPageComponent,
    RegisterPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [HttpClientModule,SearchService],
  bootstrap: [AppComponent]
})
export class AppModule { }
