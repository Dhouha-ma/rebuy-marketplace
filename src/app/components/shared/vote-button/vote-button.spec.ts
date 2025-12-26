import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VoteButton } from './vote-button';

describe('VoteButton', () => {
  let component: VoteButton;
  let fixture: ComponentFixture<VoteButton>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VoteButton],
    }).compileComponents();

    fixture = TestBed.createComponent(VoteButton);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('onClick: on button click behavior', () => {
    it('should emit vote event when onClick is called', () => {
      spyOn(component.vote, 'emit');

      component.onClick();

      expect(component.vote.emit).toHaveBeenCalledTimes(1);
    });
  });
});
