import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PocStorybookLibComponent } from './poc-storybook-lib.component';

describe('PocStorybookLibComponent', () => {
  let component: PocStorybookLibComponent;
  let fixture: ComponentFixture<PocStorybookLibComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PocStorybookLibComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PocStorybookLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
