import { Component, OnInit } from '@angular/core';
import { Character } from '../character';
import { CharacterService } from '../character.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-character-gallery',
  templateUrl: './character-gallery.component.html',
  styleUrls: ['./character-gallery.component.css']
})
export class CharacterGalleryComponent implements OnInit {
  public characters: Character[] = [];

  constructor(private router: Router, private characterService: CharacterService) {}

  ngOnInit(): void {
    this.getCharacters();
  }

  public getCharacters(): void {
    this.characterService.getCharacters().subscribe(data => {
      this.characters = data
    });
  }

  public routeToCharacterInfo(id: number): void {
    this.router.navigate(['characters', id]);
  }
}
