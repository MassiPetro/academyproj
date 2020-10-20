import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { Coder } from '../coder.model';


@Component({
  selector: 'app-coder',
  templateUrl: './coder.component.html',
  styleUrls: ['./coder.component.css']
})
export class CoderComponent implements OnInit {
  @Input() coder: Coder;
  @Output() increased: EventEmitter<Coder>;
  
  constructor() { this.increased = new EventEmitter(); }

  ngOnInit() { }

  increaseSalary() {
    this.coder.salary += 100;
    this.increased.emit(this.coder);
  }
  

}
