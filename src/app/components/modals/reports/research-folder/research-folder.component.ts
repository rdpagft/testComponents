import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-research-folder',
  templateUrl: './research-folder.component.html',
  styleUrls: ['./research-folder.component.scss']
})
export class ResearchFolderComponent implements OnInit {

  constructor(private dialog: MatDialogRef<ResearchFolderComponent>) { }

  ngOnInit(): void {
  }
  
  close(){
    this.dialog.close()
  }
}
