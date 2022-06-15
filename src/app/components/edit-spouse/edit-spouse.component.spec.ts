import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditSpouseComponent } from './edit-spouse.component';

describe('EditSpouseComponent', () => {
  let component: EditSpouseComponent;
  let fixture: ComponentFixture<EditSpouseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditSpouseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditSpouseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
