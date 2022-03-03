import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-badges',
  templateUrl: './badges.component.html',
  styleUrls: ['./badges.component.scss']
})
export class BadgesComponent implements OnInit {
  size:number|string;
  constructor() {
    this.size = 100
   }

  ngOnInit(): void {
    this.checkSize()
  }

  checkSize(){
    this.size > 99 ? this.size = "99+" :this.size
  }

}
