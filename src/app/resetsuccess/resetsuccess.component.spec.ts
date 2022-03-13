import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResetsuccessComponent } from './resetsuccess.component';

describe('ResetsuccessComponent', () => {
  let component: ResetsuccessComponent;
  let fixture: ComponentFixture<ResetsuccessComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResetsuccessComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResetsuccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
