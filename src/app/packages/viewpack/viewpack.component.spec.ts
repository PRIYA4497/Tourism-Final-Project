import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewpackComponent } from './viewpack.component';

describe('ViewpackComponent', () => {
  let component: ViewpackComponent;
  let fixture: ComponentFixture<ViewpackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewpackComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewpackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
