import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { CharacterInfoComponent } from './character-info/character-info.component';
import { CharacterGalleryComponent } from './character-gallery/character-gallery.component';

@NgModule({
  declarations: [
    AppComponent,
    CharacterInfoComponent,
    CharacterGalleryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
