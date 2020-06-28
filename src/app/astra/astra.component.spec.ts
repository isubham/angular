import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AstraComponent } from './astra.component';

describe('AstraComponent', () => {
  let component: AstraComponent;
  let fixture: ComponentFixture<AstraComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AstraComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AstraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
