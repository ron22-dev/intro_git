import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FujiPageComponent } from './fuji-page.component';

describe('FujiPageComponent', () => {
  let component: FujiPageComponent;
  let fixture: ComponentFixture<FujiPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FujiPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FujiPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
