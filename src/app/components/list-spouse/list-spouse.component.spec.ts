import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListSpouseComponent } from './list-spouse.component';

describe('ListSpouseComponent', () => {
  let component: ListSpouseComponent;
  let fixture: ComponentFixture<ListSpouseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListSpouseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListSpouseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
