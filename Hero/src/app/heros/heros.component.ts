import { Component, OnInit } from '@angular/core';
import { HEROS } from '../mock-heros';
import { Heros } from '../heros';

import { HerosListService } from '../heros-list.service';


@Component({
  selector: 'app-heros',
  templateUrl: './heros.component.html',
  styleUrls: ['./heros.component.css']
})
export class HerosComponent implements OnInit {

  heros: Heros[];
  selectedHero: Heros;

  constructor( private _herosService: HerosListService ) { }

  ngOnInit() {
    this.getHeros();
  }

  getHeros() {
    this._herosService.getHeros()
        .subscribe(heros => (this.heros = heros));
  }

  onSelect(hero: Heros){
    this.selectedHero = hero;
    console.log(this.selectedHero);
  }
}
