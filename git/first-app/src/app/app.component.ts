import { Component } from '@angular/core';
import { Coder } from './coder.model';

import { User } from './user.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'first-app';

  addUser(user: User) {
    console.log(user);
  }

  addCoder(coder: Coder) {
    console.log(coder);
  }

}
