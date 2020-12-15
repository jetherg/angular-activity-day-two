import { Component, OnInit } from '@angular/core';
import { GlobalService } from 'src/app/services/global.service';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {
  title : string;
  subTitle: string;
  productName: string;

  constructor(private _globalService:GlobalService) {
    this.title = 'Shopping Cart';
    this.subTitle = 'Shop now!';
    this.productName = '';
  }

  ngOnInit(): void {
    this.title = this._globalService.toUpperCase(this.title);
    this.subTitle = this._globalService.appSubTitle;

    this._globalService.subjectName.subscribe(
      (product: any) => {
        setTimeout(() => {
          this.productName = product;
        },10);
      }
    );
  }

}
