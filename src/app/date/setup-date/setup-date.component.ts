import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router'
import { FormBuilder } from '@angular/forms';
import { Pet } from 'src/app/model/pet';
import { PetService } from 'src/app/service/pet.service';

@Component({
  selector: 'app-setup-date',
  templateUrl: './setup-date.component.html',
  styleUrls: ['./setup-date.component.css']
})
export class SetupDateComponent implements OnInit {

  private _pet!: Pet;

  sendTextForm = this.formBuilder.group( {
    name: ''
  });
  

  constructor( private route: ActivatedRoute, private formBuilder: FormBuilder, private petService: PetService) { }

  ngOnInit(): void {
    let name = this.route.snapshot.params['name'];
    this.petService
      .findByName(name)
      .subscribe(pet => this._pet = pet);

    
  }

  get pet() {
    return this._pet;
  }

}
