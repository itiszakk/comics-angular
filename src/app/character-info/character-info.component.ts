import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Character } from '../character';
import { CharacterService } from '../character.service';

@Component({
  selector: 'app-character-info',
  templateUrl: './character-info.component.html',
  styleUrls: ['./character-info.component.css']
})
export class CharacterInfoComponent implements OnInit {
  public character: Character = {} as Character;

  constructor(private route: ActivatedRoute, private characterService: CharacterService) {}

  ngOnInit(): void {
    this.getCharacterById(this.route.snapshot.params['id']);
  }

  public getCharacterById(id: number): void {
    this.characterService.getCharacterById(id).subscribe(data => {
      this.character = data;
    })
  }
}
