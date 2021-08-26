import { Component, EventEmitter, OnInit, Output, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class HeaderComponent implements OnInit {
  @Output() toogleSidebar = new EventEmitter<boolean>();
  sidebarOpen: boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

  onClickTrophy(){
    this.sidebarOpen = !this.sidebarOpen;
    this.toogleSidebar.emit(this.sidebarOpen);
  }
}
