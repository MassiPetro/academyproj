import { Component, OnInit } from '@angular/core';
import { User } from '../user.model';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-users-service',
  templateUrl: './users-service.component.html',
  styleUrls: ['./users-service.component.css']
})
export class UsersServiceComponent implements OnInit {
  users: Array<User>

  constructor(us: UsersService) { 
    this.users = us.get();
  }

  ngOnInit(): void {
  }

  moreLikes(user: User) {
    console.log(`Likes for ${user.name} are ${user.likes}`);
  }

}
