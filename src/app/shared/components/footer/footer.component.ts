import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
    footerGuard: boolean  = true;;
    versionApp: string = "v2.0";
    constructor() {}
  
    ngOnInit() {
      if (localStorage.getItem('Guard') !== null) {
        this.footerGuard = true;
      }
    }
  }