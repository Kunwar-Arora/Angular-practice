import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServerAppComponent } from './server-app.component';

describe('ServerAppComponent', () => {
  let component: ServerAppComponent;
  let fixture: ComponentFixture<ServerAppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServerAppComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ServerAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
