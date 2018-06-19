import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CandidateFrontpgComponent } from './candidate-frontpg.component';

describe('CandidateFrontpgComponent', () => {
  let component: CandidateFrontpgComponent;
  let fixture: ComponentFixture<CandidateFrontpgComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CandidateFrontpgComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CandidateFrontpgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
