import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PageEvent } from '@angular/material/paginator';
import * as moment from 'moment';
import { MeetingService } from 'src/app/service/meeting.service';
import { DeleteComponent } from '../delete/delete.component';
import { MeetingFormComponent } from '../meeting-form/meeting-form.component';

@Component({
  selector: 'app-meeting-list',
  templateUrl: './meeting-list.component.html',
  styleUrls: ['./meeting-list.component.css']
})
export class MeetingListComponent implements OnInit {
  
  displayedColumns: string[] = ['meetingName', 'meetingSubject', 'meetingResponsible', 'meetingDate', 'meetingTime', 'action'];
  meetings = [];
  length: number = 1;
  pageSize: number = 5;
  totalRecordsPerPage: number = 5;
  meetingNameFind: string = '';
  meetingDateFind: string = '';

  constructor(
    private service: MeetingService,
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.findAll(0, 'meetingDate', null);
  }

  findAll(pageNumber: number, sortField: string, filters: any){
    this.service.getAll(pageNumber, this.totalRecordsPerPage, sortField, filters).subscribe(meetingsReturn => {
      this.meetings = meetingsReturn['meeting'];
      this.length = meetingsReturn['page'].size;
    }, 
    err => {
      console.log('Err ', err);

      if(err.error.message == "Record not found"){
        alert("The search not found records with these parameters. Try again.");
        window.location.reload();
      }
    });
  }

  findByParameter(){
    let filters = '';

    if(this.meetingNameFind != null && this.meetingNameFind != ''){
      filters += 'meetingName=' + this.meetingNameFind;
    }

    if(this.meetingDateFind != null && this.meetingDateFind != ''){
      if(filters != ''){
        filters += ';';
      }
      
      let newDate: moment.Moment = moment.utc(this.meetingDateFind).local();
      filters += 'meetingDate=' + newDate.format('YYYY-MM-DDT23:mm:ss') + '.000Z'; 
    }

    this.findAll(0,'meetingDate', filters);
  }

  getServerData(event: PageEvent){
    this.findAll(event.pageIndex, 'meetingDate',null);
  }

  edit(idEdit: string) {
    const dialogRef = this.dialog.open(MeetingFormComponent, {
      width: '500px',
      data: idEdit
    });
  }

  confirmDelete(id: string) {
    const dialogRef = this.dialog.open(DeleteComponent, {
      width: '500px',
      data: id
    });
  }
}
