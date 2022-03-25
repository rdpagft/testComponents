import { Component, OnInit, OnDestroy } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-reported',
  templateUrl: './reported.component.html',
  styleUrls: ['./reported.component.scss']
})
export class ReportedComponent implements OnInit, OnDestroy {
  confirm:boolean;
  counter: number
  interval: number
  constructor(private dialog: MatDialogRef<ReportedComponent>) { 
    this.confirm = false
    this.counter = 20
    this.interval = 0
  }

  ngOnInit(): void {
    this.agree()
  }

  ngOnDestroy(): void {
    clearInterval(this.interval)
  }

  agree(){
   this.interval = window.setInterval(()=>{
      this.counter = this.counter - 1
      console.log(this.counter);
      if(this.counter == 0) {
        this.dialog.close()
        clearInterval(this.interval)
      }
    }, 1000)
  }

}
