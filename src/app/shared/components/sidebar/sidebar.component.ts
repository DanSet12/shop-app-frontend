import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  categories = ['Kategoria_1', 'Kategoria_2', 'Kategoria_3', 'Kategoria_4', 'Kategoria_5']

  constructor() { }

  ngOnInit(): void {
  }

}
