import { Component, OnInit } from '@angular/core';
import { PetService } from '../service/pet.service';
import { Pet } from '../model/pet';
import { _ParseAST } from '@angular/compiler';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-profile-gallery',
  templateUrl: './profile-gallery.component.html',
  styleUrls: ['./profile-gallery.component.css']
})
export class ProfileGalleryComponent implements OnInit {

  private _pets: Pet[] = [];
  private _selectedPet: Pet | any;
  _searchForName: string;

  constructor(private petService: PetService, private formBuilder: FormBuilder) { 
    this._searchForName = '';
  }

    newPetForm = this.formBuilder.group( {
    name: '',
    kind: '',
    image: '',
    profileText: '',
    popularity: ''
  });

   onSubmit() {
    this.petService.addPet(this.newPetForm.value).subscribe( () => {
      this.newPetForm.reset();
      this.getPets();
    });
  }

  ngOnInit(): void {
    this.getPets();
  }

  getPets(): void {
    this.petService.getPets().subscribe(pets => this._pets = pets);
  }

  selectPet(pet: Pet): void {
    this._selectedPet = pet;
  }

  deletePet(): void {
    this.petService.deletePet(this.selectedPet.id).subscribe( (response) => { 
      console.log(response);
      this.getPets();
      this._selectedPet = undefined;
    });
  }
 

  get pets(): Pet[]{
    return this._pets;
  }

  get searchForName() {
    return this._searchForName;
  }

  get selectedPet() {
    return this._selectedPet;
  }

}
