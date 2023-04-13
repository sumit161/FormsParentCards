import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Iproduct, Ptype } from '../../model/interface';

@Component({
  selector: 'app-form-ele',
  templateUrl: './form-ele.component.html',
  styleUrls: ['./form-ele.component.scss'],
})
export class FormEleComponent implements OnInit {
  @Output() customEvent2: EventEmitter<Iproduct> = new EventEmitter<Iproduct>();
  constructor() {}

  ngOnInit(): void {}
  Onclick2(Produ: HTMLInputElement, des: HTMLInputElement, probability: Ptype) {
    let obj: Iproduct = {
      pname: Produ.value,
      pdecs: des.value,
      PCat: probability,
    };
    // console.log(Produ.value)
    if (obj.pname.length > 4 && obj.pdecs.length > 4) {
      this.customEvent2.emit(obj);
    } else {
      alert('Product text length is at least five ');
    }
    Produ.value = '';
    des.value = '';
  }
}
