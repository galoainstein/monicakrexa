import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnodizedComponent } from './anodized.component';

describe('AnodizedComponent', () => {
  let component: AnodizedComponent;
  let fixture: ComponentFixture<AnodizedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnodizedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AnodizedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
