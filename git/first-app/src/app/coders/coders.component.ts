import { Component, OnInit } from '@angular/core';
import { Coder } from '../coder.model';

@Component({
  selector: 'app-coders',
  templateUrl: './coders.component.html',
  styleUrls: ['./coders.component.css']
})
export class CodersComponent implements OnInit {
  coders: Array<Coder>;

  constructor() {
    this.coders = [new Coder('Mario', 'Rossi', 2000), new Coder('Luca', 'Bianchi', 3000), new Coder('Matteo', 'Verdi', 4000)];
   }

  ngOnInit(): void {
  }

}
