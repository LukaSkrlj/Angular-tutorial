import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MesagesComponent } from './mesages.component';

describe('MesagesComponent', () => {
  let component: MesagesComponent;
  let fixture: ComponentFixture<MesagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MesagesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MesagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
