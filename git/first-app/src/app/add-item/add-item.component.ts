import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.css']
})
export class AddItemComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  add(id: HTMLInputElement, name: HTMLInputElement): boolean {
    // da es6 usare back tick (accento grave alt+96) per fare stringhe, interpolando valori al suo interno! 
    console.log(`(${id.value}, ${name.value})`);
    return false;
  }


}
