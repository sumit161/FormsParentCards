import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Iproduct, Ptype } from '../../model/interface';

@Component({
  selector: 'app-form-to-parent',
  templateUrl: './form-to-parent.component.html',
  styleUrls: ['./form-to-parent.component.scss'],
})
export class FormToParentComponent implements OnInit {
  @Output() customEvent1: EventEmitter<Iproduct> = new EventEmitter<Iproduct>();
  Pnameval: string="";
  Descrval: string="";
  Onclick(Probability: Ptype) {
    let obj: Iproduct = {
      pname: this.Pnameval,
      pdecs: this.Descrval,
      PCat: Probability,
    };
    if (((this.Pnameval.length > 4) && (this.Descrval.length > 4)) ) {
      this.customEvent1.emit(obj);
    }else{
      alert("Product text length is at least five ");
    }
    this.Pnameval = '';
    this.Descrval = '';
  }
  constructor() {}

  ngOnInit(): void {}
}
