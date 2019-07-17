import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewCupsComponent } from './view-cups.component';

describe('ViewCupsComponent', () => {
  let component: ViewCupsComponent;
  let fixture: ComponentFixture<ViewCupsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewCupsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewCupsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
