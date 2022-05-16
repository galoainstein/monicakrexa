import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaintainingComponent } from './maintaining.component';

describe('MaintainingComponent', () => {
  let component: MaintainingComponent;
  let fixture: ComponentFixture<MaintainingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MaintainingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MaintainingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
