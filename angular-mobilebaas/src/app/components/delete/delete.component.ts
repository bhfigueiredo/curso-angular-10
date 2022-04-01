import { Component, Inject, OnInit, Optional } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MeetingService } from 'src/app/service/meeting.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit {

  public idDelete: string = '';

  constructor(private service: MeetingService,
    public dialogRef: MatDialogRef<DeleteComponent>,
    @Optional() @Inject(MAT_DIALOG_DATA) public data: string,
    private router: Router) { 
      this.idDelete = data;
    }

  ngOnInit(): void {
  }

  cancel(): void {
    this.dialogRef.close();
  }

  delete(){
    this.service.delete(this.idDelete).subscribe(result => {
      console.log('Deleted with success', result);
    },
    err => {
      console.log('Err ', err);
    });
    this.dialogRef.close(true);
    window.location.reload();
  }

}
