import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeStaysComponent } from './home-stays.component';

describe('HomeStaysComponent', () => {
  let component: HomeStaysComponent;
  let fixture: ComponentFixture<HomeStaysComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeStaysComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeStaysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
