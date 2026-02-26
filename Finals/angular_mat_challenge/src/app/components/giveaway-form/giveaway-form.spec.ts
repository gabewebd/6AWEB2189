import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GiveawayForm } from './giveaway-form';

describe('GiveawayForm', () => {
  let component: GiveawayForm;
  let fixture: ComponentFixture<GiveawayForm>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GiveawayForm]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GiveawayForm);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
