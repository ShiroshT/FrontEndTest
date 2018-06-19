import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PetitionsItemComponent } from './petitions-item.component';

describe('PetitionsItemComponent', () => {
  let component: PetitionsItemComponent;
  let fixture: ComponentFixture<PetitionsItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PetitionsItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PetitionsItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
