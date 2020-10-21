import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { User } from '../user.model';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {
  public fUser: FormGroup;
  private users: UsersService;
  
  constructor(fb: FormBuilder, us: UsersService) {
    this.fUser = fb.group(new User('Kim', 12));
    this.users = us;
  }
  submit() {
    console.log(this.fUser.value);
    this.users.add(this.fUser.value);
  }

  ngOnInit(): void {
  }

}
