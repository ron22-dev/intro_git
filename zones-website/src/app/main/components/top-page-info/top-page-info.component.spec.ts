import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopPageInfoComponent } from './top-page-info.component';

describe('TopPageInfoComponent', () => {
  let component: TopPageInfoComponent;
  let fixture: ComponentFixture<TopPageInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TopPageInfoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TopPageInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
