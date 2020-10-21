import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoderRformComponent } from './coder-rform.component';

describe('CoderRformComponent', () => {
  let component: CoderRformComponent;
  let fixture: ComponentFixture<CoderRformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoderRformComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CoderRformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
