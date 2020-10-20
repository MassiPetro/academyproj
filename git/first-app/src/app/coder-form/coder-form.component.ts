import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Coder } from '../coder.model';

@Component({
  selector: 'app-coder-form',
  templateUrl: './coder-form.component.html',
  styleUrls: ['./coder-form.component.css']
})
export class CoderFormComponent implements OnInit {

  @Output() out = new EventEmitter<Coder>();

  model: Coder;

  constructor() { this.model = new Coder('Peter', 'White', 5000); }
  
  newCoder() { this.out.emit(this.model); }

  ngOnInit(): void {
  }

}
