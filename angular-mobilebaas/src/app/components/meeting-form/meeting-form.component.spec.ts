import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { MeetingFormComponent } from './meeting-form.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { FormsModule, ReactiveFormsModule, FormBuilder, NgControl } from '@angular/forms';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';

describe('MeetingFormComponent', () => {
    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [
                FormsModule,
                ReactiveFormsModule,
                RouterTestingModule,
                HttpClientTestingModule,
                MatDialogModule
            ],
            providers: [
                {
                    provide: NgControl,
                    useValue: {}
                },
                {
                    provide: FormBuilder,
                    useValue: {}
                },
                {
                    provide: MatDialogRef,
                    useValue: {}
                }
            ],
            declarations: [
                MeetingFormComponent
            ],
        }).compileComponents();
    });

    it('should create the app', () => {
        const fixture = TestBed.createComponent(MeetingFormComponent);
        const app = fixture.componentInstance;
        expect(app).toBeTruthy();
    });
});
