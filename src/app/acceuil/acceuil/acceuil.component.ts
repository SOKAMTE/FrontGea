import { Component, OnInit } from '@angular/core';
import {SelectItem} from 'primeng/api';

interface City {
  name: string;
  code: string;
}

@Component({
  selector: 'app-acceuil',
  templateUrl: './acceuil.component.html',
  styleUrls: ['./acceuil.component.css']
})
export class AcceuilComponent implements OnInit {

  cities1: SelectItem[];

  selectedCity1: City;

  constructor() {

    this.cities1 = [
      {label: 'Select City', value: null},
      {label: 'New York', value: {id: 1, name: 'New York', code: 'NY'}},
      {label: 'Rome', value: { id: 2, name: 'Rome', code: 'RM'}},
      {label: 'London', value: { id: 3, name: 'London', code: 'LDN'}},
      {label: 'Istanbul', value: { id: 4, name: 'Istanbul', code: 'IST'}},
      {label: 'Paris', value: {id: 5, name: 'Paris', code: 'PRS'}}
    ];
  }

  ngOnInit() {
  }

}
