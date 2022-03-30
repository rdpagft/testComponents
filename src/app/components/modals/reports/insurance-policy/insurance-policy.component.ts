import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-insurance-policy',
  templateUrl: './insurance-policy.component.html',
  styleUrls: ['./insurance-policy.component.scss']
})
export class InsurancePolicyComponent implements OnInit {

  constructor(private dialog: MatDialogRef<InsurancePolicyComponent>) { }

  ngOnInit(): void {
  }

  close(){
    this.dialog.close()
  }

}
