import { Component, OnInit } from '@angular/core';
import { ListItem } from '../list';
import { LISTITEMS } from '../mock-list';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  listItems = LISTITEMS;
 


  constructor() { }

  ngOnInit(): void {
  }

}
