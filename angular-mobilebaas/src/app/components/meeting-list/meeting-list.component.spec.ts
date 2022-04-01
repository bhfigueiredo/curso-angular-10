import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { MeetingListComponent } from './meeting-list.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { MatDialogModule, MatDialog } from '@angular/material/dialog';

describe('MeetingListComponent', () => {
    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [
                RouterTestingModule,
                HttpClientTestingModule,
                MatDialogModule
            ],
            providers: [
                {
                    provide: MatDialog,
                    useValue: {}
                }
            ],
            declarations: [
                MeetingListComponent
            ],
        }).compileComponents();
    });

    it('should create the app', () => {
        const fixture = TestBed.createComponent(MeetingListComponent);
        const app = fixture.componentInstance;
        expect(app).toBeTruthy();
    });
});
