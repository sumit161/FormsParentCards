import { Component, Input, OnInit } from '@angular/core';
import { Iproduct } from '../../model/interface';

@Component({
  selector: 'app-table-ele',
  templateUrl: './table-ele.component.html',
  styleUrls: ['./table-ele.component.scss']
})
export class TableEleComponent implements OnInit {
  @Input() propertybinding2!:Array<Iproduct>

  constructor() { }

  ngOnInit(): void {
  }

}
