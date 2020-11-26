import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentTicketComponent } from './component-ticket.component';

describe('ComponentTicketComponent', () => {
  let component: ComponentTicketComponent;
  let fixture: ComponentFixture<ComponentTicketComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComponentTicketComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponentTicketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
