import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Coder } from '../coder.model';

@Component({
  selector: 'app-coder-rform',
  templateUrl: './coder-rform.component.html',
  styleUrls: ['./coder-rform.component.css']
})
export class CoderRformComponent implements OnInit {
  public fCoder: FormGroup;
  constructor(fb: FormBuilder) {
    this.fCoder = fb.group(new Coder('Kim', 'Brown', 1200));
  }
  submit() {
    console.log(this.fCoder.value);
  }
  ngOnInit(): void {
  }

}
