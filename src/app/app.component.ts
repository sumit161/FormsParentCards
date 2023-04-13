import { Component } from '@angular/core';
import { Iproduct } from './shared/model/interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = '10aprilClassTaskProductNgModel';
  ProductArray1: Array<Iproduct> = [
    {
      pname: 'Nokia',
      pdecs: 'mp900',
      PCat: 'Product', //"Catlog"
    },
  ];
  ProductArray2: Array<Iproduct> = [
    {
      pname: 'vivo',
      pdecs: 'p9060',
      PCat: 'Product', //"Catlog"
    },
  ];
  ProductArray3: Array<Iproduct> = [
    {
      pname: 'apple',
      pdecs: 'm800',
      PCat: 'Product', //"Catlog"
    },
  ];
  doller1(std: Iproduct) {
    this.ProductArray1.push(std);
  }

  doller2(std: Iproduct) {
    this.ProductArray2.push(std);
  }
  doller3(std: Iproduct) {
    this.ProductArray3.push(std);
  }
}
