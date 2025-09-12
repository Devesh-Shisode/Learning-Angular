import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicrouteComponent } from './dynamicroute.component';

describe('DynamicrouteComponent', () => {
  let component: DynamicrouteComponent;
  let fixture: ComponentFixture<DynamicrouteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DynamicrouteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DynamicrouteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
