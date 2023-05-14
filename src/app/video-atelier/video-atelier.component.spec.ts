import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoAtelierComponent } from './video-atelier.component';

describe('VideoAtelierComponent', () => {
  let component: VideoAtelierComponent;
  let fixture: ComponentFixture<VideoAtelierComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VideoAtelierComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VideoAtelierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
