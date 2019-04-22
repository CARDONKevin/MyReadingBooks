import {Component, Input, OnInit} from '@angular/core';
import {AuthService} from 'angularx-social-login';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  @Input() user: any;

  constructor(private authService: AuthService) {
  }
  ngOnInit() {
  }

  signOut(): void {
    this.authService.signOut();
    localStorage.clear();
  }

}
