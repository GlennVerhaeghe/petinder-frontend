import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Pet } from '../model/pet';

@Injectable({
  providedIn: 'root'
})
export class PetService {

  private _url: string

  constructor(private http: HttpClient) { 
    this._url = `${environment.backendUrl}/pets`;
   }

   getPets(): Observable<any> {
     return this.http.get<Pet[]>(this._url);
   }
}
