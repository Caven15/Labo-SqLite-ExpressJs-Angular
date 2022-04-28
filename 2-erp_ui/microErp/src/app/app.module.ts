import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { JwtInterceptor } from './tools/intercepteur/jwt.interceptor';

import { AppComponent } from './app.component';
import { AccueilComponent } from './modules/main/components/pages/accueil/accueil.component';
import { NavItemComponent } from './modules/main/components/shared/nav-item/nav-item.component';
import { NavigationMenuComponent } from './modules/main/components/shared/navigation-menu/navigation-menu.component';
import { FooterMenuComponent } from './modules/main/components/shared/footer-menu/footer-menu.component';
import { AuthModule } from './modules/auth/auth.module';

@NgModule({
  declarations: [
    AppComponent,
    AccueilComponent,
    NavItemComponent,
    NavigationMenuComponent,
    FooterMenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AuthModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
