import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PetitionsFrontpgComponent } from './petitions-frontpg.component';

describe('PetitionsFrontpgComponent', () => {
  let component: PetitionsFrontpgComponent;
  let fixture: ComponentFixture<PetitionsFrontpgComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PetitionsFrontpgComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PetitionsFrontpgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
