import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pip-ex',
  templateUrl: './pip-ex.component.html',
  styleUrls: ['./pip-ex.component.css']
})
export class PipExComponent implements OnInit {
  word: string;

  constructor() { 
    this.word = "ciao";
  }

  ngOnInit(): void {
  }

}
