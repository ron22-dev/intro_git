import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavBarInfoComponent } from './nav-bar-info.component';

describe('NavBarInfoComponent', () => {
  let component: NavBarInfoComponent;
  let fixture: ComponentFixture<NavBarInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavBarInfoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavBarInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
