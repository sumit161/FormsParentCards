import {
  Component,
  ElementRef,
  EventEmitter,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { Iproduct, Ptype } from '../../model/interface';

@Component({
  selector: 'app-form-viechild',
  templateUrl: './form-viechild.component.html',
  styleUrls: ['./form-viechild.component.scss'],
})
export class FormViechildComponent implements OnInit {
  @Output() customEvent3: EventEmitter<Iproduct> = new EventEmitter<Iproduct>();
  @ViewChild('Pname') Pnamehhh!: ElementRef;
  @ViewChild('PDecs') PDecshhh!: ElementRef;
  constructor() {}

  ngOnInit(): void {}
  Onclick3(probability: Ptype) {
    let obj: Iproduct = {
      pname: this.Pnamehhh.nativeElement.value,
      pdecs: this.PDecshhh.nativeElement.value,
      PCat: probability,
    };
    // console.log(this.Pnamehhh.nativeElement.value)
    if (((this.Pnamehhh.nativeElement.value.length > 4) && (this.PDecshhh.nativeElement.value.length > 4)) ) {
      this.customEvent3.emit(obj);
    }else{
      alert("Product text length is at least five ");
    }
    this.Pnamehhh.nativeElement.value="";
    this.PDecshhh.nativeElement.value="";
  }
}
