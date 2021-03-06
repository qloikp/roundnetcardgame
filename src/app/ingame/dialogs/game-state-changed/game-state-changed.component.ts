import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-game-state-changed',
  templateUrl: './game-state-changed.component.html',
  styleUrls: ['./game-state-changed.component.scss']
})
export class GameStateChangedComponent {



  constructor(
    public dialogRef: MatDialogRef<GameStateChangedComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    console.log(this.data);
  }

  onNoClick(): void {

    this.dialogRef.close();


  }
}
