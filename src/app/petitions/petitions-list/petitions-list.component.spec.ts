import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PetitionsListComponent } from './petitions-list.component';

describe('PetitionsListComponent', () => {
  let component: PetitionsListComponent;
  let fixture: ComponentFixture<PetitionsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PetitionsListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PetitionsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
