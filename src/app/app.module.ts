import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgbCollapseModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeroAddComponent } from './hero-add/hero-add.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { HeroFilterPipe } from './hero-filter.pipe';
import { HeroesComponent } from './heroes/heroes.component';
import { InMemoryDataService } from './in-memory-data.service';
import { MessagesComponent } from './messages/messages.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SearchInputComponent } from './search-input/search-input.component';

@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    HeroDetailComponent,
    MessagesComponent,
    NavbarComponent,
    DashboardComponent,
    HeroAddComponent,
    HeroFilterPipe,
    SearchInputComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    NgbCollapseModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, {
      delay: 500,
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
