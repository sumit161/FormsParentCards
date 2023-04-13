import { Component, Input, OnInit } from '@angular/core';
import { Iproduct } from '../../model/interface';

@Component({
  selector: 'app-viewchild-table',
  templateUrl: './viewchild-table.component.html',
  styleUrls: ['./viewchild-table.component.scss']
})
export class ViewchildTableComponent implements OnInit {
@Input() propertybinding3!:Array<Iproduct>
  constructor() { }

  ngOnInit(): void {
  }

}
