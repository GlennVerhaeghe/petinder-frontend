import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Pet } from '../model/pet';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PetService {

  private _url: string

  constructor(private http: HttpClient) { 
    this._url = `${environment.backendUrl}/pets`;
   }

   getPets(): Observable<any> {
     return this.http.get<Pet[]>(this._url)
        .pipe(map(response => response.sort((pet1: Pet, pet2: Pet) => pet1.name.localeCompare(pet2.name))));
   }

   addPet(pet: Pet) {
     return this.http.post(this._url, pet);
   }

   deletePet(petId: number): Observable<string> {
     return this.http.delete(`${this._url}/${petId}`, {responseType: 'text'});
   }

   findByName(name: string): Observable<any> {
     return this.http.get(`${this._url}/${name}`);
   }
}
