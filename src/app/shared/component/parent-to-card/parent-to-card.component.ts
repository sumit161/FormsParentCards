import { Component, Input, OnInit } from '@angular/core';
import { Iproduct } from '../../model/interface';

@Component({
  selector: 'app-parent-to-card',
  templateUrl: './parent-to-card.component.html',
  styleUrls: ['./parent-to-card.component.scss']
})
export class ParentToCardComponent implements OnInit {
 @Input() propertybinding1!:Array<Iproduct>
  constructor() { }

  ngOnInit(): void {
  }

}
