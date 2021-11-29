import { Component, OnInit } from '@angular/core';
import { PetService } from '../service/pet.service';
import { Pet } from '../model/pet';
import { _ParseAST } from '@angular/compiler';

@Component({
  selector: 'app-profile-gallery',
  templateUrl: './profile-gallery.component.html',
  styleUrls: ['./profile-gallery.component.css']
})
export class ProfileGalleryComponent implements OnInit {

  private _pets: Pet[] = [];

  constructor(private petService: PetService) { }

  ngOnInit(): void {
    this.getPets();
  }

  getPets(): void {
    this.petService.getPets().subscribe(pets => this._pets = pets);
  }

  get pets(): Pet[]{
    return this._pets;
  }

}
