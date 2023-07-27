import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CharacterGalleryComponent } from './character-gallery/character-gallery.component';
import { CharacterInfoComponent } from './character-info/character-info.component';

const routes: Routes = [
  {path: '', redirectTo: 'characters', pathMatch: 'full'},
  {path: 'characters', component: CharacterGalleryComponent},
  {path: 'characters/:id', component: CharacterInfoComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
