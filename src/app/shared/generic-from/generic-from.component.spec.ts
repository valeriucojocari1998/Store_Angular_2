import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenericFromComponent } from './generic-from.component';

describe('GenericFromComponent', () => {
  let component: GenericFromComponent;
  let fixture: ComponentFixture<GenericFromComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GenericFromComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GenericFromComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
