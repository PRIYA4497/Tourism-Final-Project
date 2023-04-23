import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InsertpackComponent } from './insertpack.component';

describe('InsertpackComponent', () => {
  let component: InsertpackComponent;
  let fixture: ComponentFixture<InsertpackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InsertpackComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InsertpackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
