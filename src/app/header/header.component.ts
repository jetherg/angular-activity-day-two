import { Component, OnInit, OnDestroy } from '@angular/core';
import { GlobalService } from '../services/global.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnDestroy {

  title = 'Angular'
  subTitle = 'Angular Subtitle';

  color = 'dark';


  constructor(private _globalService:GlobalService) { }

  ngOnInit(): void {
    this.title = this._globalService.toUpperCase(this._globalService.appTitle);
    this.subTitle = this._globalService.appSubTitle;

    this._globalService.subjectName.subscribe(
      (name:any) => {
        this.title = this._globalService.toUpperCase(name) ||this._globalService.toUpperCase(this._globalService.appTitle);
      }
    );

    this._globalService.colorName.subscribe(
      (color: any) => {
        setTimeout(() => {
          this.color = color;
        },10);
      }
    );

  }

  ngOnDestroy():void{
    this._globalService.subjectName.next('');
  }
}
