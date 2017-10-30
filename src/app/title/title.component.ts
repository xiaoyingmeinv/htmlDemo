import {Component, OnInit, Input} from '@angular/core';
import {UserService} from "../service/user.service";

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.css']
})
export class TitleComponent implements OnInit {
  @Input() subtitle = '';
  title = 'NgModules';
  user = '';
  constructor(userService: UserService) {
    this.user = userService.userName;
  }

  ngOnInit() {
  }

}
