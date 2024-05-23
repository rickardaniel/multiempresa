import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableroEmpresasComponent } from './tablero-empresas.component';

describe('TableroEmpresasComponent', () => {
  let component: TableroEmpresasComponent;
  let fixture: ComponentFixture<TableroEmpresasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableroEmpresasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TableroEmpresasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
