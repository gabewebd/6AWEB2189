import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubmissionDialog } from './submission-dialog';

describe('SubmissionDialog', () => {
  let component: SubmissionDialog;
  let fixture: ComponentFixture<SubmissionDialog>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SubmissionDialog]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SubmissionDialog);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
