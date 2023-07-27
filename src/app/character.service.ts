import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http"
import { Observable } from "rxjs"
import { Character } from "./character";
import { environment } from "src/environments/environment.development";

@Injectable({ providedIn: 'root' })
export class CharacterService {
    private readonly url = `${environment.apiUrl}/characters`;

    constructor(private http: HttpClient) {}

    public getCharacters(): Observable<Character[]> {
        return this.http.get<Character[]>(this.url);
    }

    public getCharacterById(id: number): Observable<Character> {
        return this.http.get<Character>(`${this.url}/${id}`);
    }
}