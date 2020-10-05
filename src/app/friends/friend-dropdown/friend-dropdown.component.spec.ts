import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FriendDropdownComponent } from './friend-dropdown.component';

describe('FriendDropdownComponent', () => {
  let component: FriendDropdownComponent;
  let fixture: ComponentFixture<FriendDropdownComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FriendDropdownComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FriendDropdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
