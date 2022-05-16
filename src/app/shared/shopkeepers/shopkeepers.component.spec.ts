import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopkeepersComponent } from './shopkeepers.component';

describe('ShopkeepersComponent', () => {
  let component: ShopkeepersComponent;
  let fixture: ComponentFixture<ShopkeepersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShopkeepersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShopkeepersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
