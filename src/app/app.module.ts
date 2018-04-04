import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }    from '@angular/forms';

import { AppRoutingModule } from './app-routing/app-routing.module';

import { AppComponent } from './app.component';
import { FooterComponent } from './components/common/footer/footer.component';
import { SidebarComponent } from './components/common/sidebar/sidebar.component';
import { SearchComponent } from './components/common/search/search.component';
import { RootSlideComponent } from './components/root-slide/root-slide.component';

import { SlideService } from './services/slide.service';
import { TemplateDirective } from './directives/template.directive';
import { ControlsComponent } from './components/controls/controls.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    SidebarComponent,
    SearchComponent,
    TemplateDirective,
    RootSlideComponent,
    ControlsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [SlideService],
  bootstrap: [AppComponent]
})
export class AppModule {}
