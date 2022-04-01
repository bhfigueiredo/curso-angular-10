import { HttpClient } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { MatDialogModule, MatDialog } from '@angular/material/dialog';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { MeetingListComponent } from './components/meeting-list/meeting-list.component';
import { MeetingService } from './service/meeting.service';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        MatDialogModule
      ],
      providers: [
        {
          provide: MatDialog,
          useValue: {}
      },
        {
            provide: MeetingService,
            useValue: {}
        },
        {
            provide: HttpClient,
            useValue: {}
        }
      ],
      declarations: [
        AppComponent,
        MeetingListComponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'angular-mobilebaas'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('angular-mobilebaas');
  });

  // it('should render title', () => {
  //   const fixture = TestBed.createComponent(AppComponent);
  //   fixture.detectChanges();
  //   const compiled = fixture.nativeElement as HTMLElement;
  //   expect(compiled.querySelector('.content span')?.textContent).toContain('angular-mobilebaas app is running!');
  // });
});
