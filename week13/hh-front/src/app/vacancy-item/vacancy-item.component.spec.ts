import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VacancyItemComponent } from './vacancy-item.component';

describe('VacancyItemComponent', () => {
  let component: VacancyItemComponent;
  let fixture: ComponentFixture<VacancyItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VacancyItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VacancyItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
