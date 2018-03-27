import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }    from '@angular/forms';
import { HttpClientModule }    from '@angular/common/http';

import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';
import { AppRoutingModule } from './app-routing/app-routing.module';

import { AppComponent } from './app.component';
import { FooterComponent } from './components/common/footer/footer.component';
import { SidebarComponent } from './components/common/sidebar/sidebar.component';
import { SearchComponent } from './components/common/search/search.component';
import { SlideComponent } from './components/slide/slide.component';

import { SlideService } from './services/slide.service';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    SidebarComponent,
    SearchComponent,
    SlideComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    // The HttpClientInMemoryWebApiModule module intercepts HTTP requests
    // and returns simulated server responses.
    // Remove it when a real server is ready to receive requests.
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService //, { dataEncapsulation: false }
    )
  ],
  providers: [SlideService],
  bootstrap: [AppComponent]
})
export class AppModule { }
