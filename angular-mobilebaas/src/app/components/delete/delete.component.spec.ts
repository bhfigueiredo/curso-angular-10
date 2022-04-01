import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { DeleteComponent } from './delete.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';

describe('DeleteComponent', () => {
    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [
                RouterTestingModule,
                HttpClientTestingModule,
                MatDialogModule
            ],
            providers: [
                {
                    provide: MatDialogRef,
                    useValue: {}
                }
            ],
            declarations: [
                DeleteComponent
            ],
        }).compileComponents();
    });

    it('should create the app', () => {
        const fixture = TestBed.createComponent(DeleteComponent);
        const app = fixture.componentInstance;
        expect(app).toBeTruthy();
    });
});
