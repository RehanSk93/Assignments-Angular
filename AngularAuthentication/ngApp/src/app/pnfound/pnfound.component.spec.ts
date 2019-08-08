import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PnfoundComponent } from './pnfound.component';

describe('PnfoundComponent', () => {
  let component: PnfoundComponent;
  let fixture: ComponentFixture<PnfoundComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PnfoundComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PnfoundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
