import { Component, OnInit, OnDestroy } from '@angular/core';
import { GlobalService } from 'src/app/services/global.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {

  color = '';
  constructor(private _globalService:GlobalService) { }

  ngOnInit(): void {
  }

  onClick(): void {
    this._globalService.colorName.next(this.color);
  }

  ngOnDestroy():void{
    this._globalService.colorName.next('dark');
  }
}
