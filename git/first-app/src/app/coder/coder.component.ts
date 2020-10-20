import { Component, OnInit, Input} from '@angular/core';
import { Coder } from '../coder.model';


@Component({
  selector: 'app-coder',
  templateUrl: './coder.component.html',
  styleUrls: ['./coder.component.css']
})
export class CoderComponent implements OnInit {
  @Input() coder: Coder;
  
  constructor() { }

  ngOnInit() { }

  

}
