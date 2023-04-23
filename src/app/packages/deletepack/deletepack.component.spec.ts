import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeletepackComponent } from './deletepack.component';

describe('DeletepackComponent', () => {
  let component: DeletepackComponent;
  let fixture: ComponentFixture<DeletepackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeletepackComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeletepackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
