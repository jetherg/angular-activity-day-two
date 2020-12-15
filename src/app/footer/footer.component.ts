import { Component, OnInit } from '@angular/core';
import { GlobalService } from '../services/global.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  color = 'dark';
  constructor(private _globalService:GlobalService) { }

  ngOnInit(): void {
    this._globalService.colorName.subscribe(
      (color: any) => {
        setTimeout(() => {
          this.color = color;
        },10);
      }
    );
  }

}
