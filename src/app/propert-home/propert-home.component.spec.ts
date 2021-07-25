import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PropertHomeComponent } from './propert-home.component';

describe('PropertHomeComponent', () => {
  let component: PropertHomeComponent;
  let fixture: ComponentFixture<PropertHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PropertHomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PropertHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
