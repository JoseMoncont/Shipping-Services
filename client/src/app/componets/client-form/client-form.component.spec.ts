import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClienteFormComponent } from './client-form.component';

describe('ClienteFormComponent', () => {
  let component: ClienteFormComponent;
  let fixture: ComponentFixture<ClienteFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClienteFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClienteFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
