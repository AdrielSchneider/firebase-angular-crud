import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TabelaCrudComponent } from './tabela-crud.component';

describe('TabelaCrudComponent', () => {
  let component: TabelaCrudComponent;
  let fixture: ComponentFixture<TabelaCrudComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TabelaCrudComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TabelaCrudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
