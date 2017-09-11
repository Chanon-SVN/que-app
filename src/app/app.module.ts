import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AppRouting, AppRoutingProviders } from './app.routing';
import { FormsModule }   from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HomeModule } from './home-components/home.module';
import { RestHandlerService } from './services/resthandler.service';
import { PageNotFoundComponent } from './general-components/not-found/not-found.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
//import { AdminModule } from './admin-components/admin.module';

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent
  ],
  imports: [
    HomeModule,
    BrowserAnimationsModule,
    BrowserModule, 
    AppRouting, 
    FormsModule, 
    HttpModule
//    AdminModule
  ],
  providers: [AppRoutingProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
