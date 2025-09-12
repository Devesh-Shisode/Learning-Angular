import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddedittodoComponent } from './addedittodo.component';

describe('AddedittodoComponent', () => {
  let component: AddedittodoComponent;
  let fixture: ComponentFixture<AddedittodoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddedittodoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddedittodoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
