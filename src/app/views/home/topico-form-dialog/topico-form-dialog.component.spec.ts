import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopicoFormDialogComponent } from './topico-form-dialog.component';

describe('TopicoFormDialogComponent', () => {
  let component: TopicoFormDialogComponent;
  let fixture: ComponentFixture<TopicoFormDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TopicoFormDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TopicoFormDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
