import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-vote-button',
  imports: [],
  templateUrl: './vote-button.html',
  styleUrl: './vote-button.scss',
})
export class VoteButton {
  @Input() icon: string = '';
  @Input() count: number = 0;
  @Input() active: boolean = false;
  @Input() type: 'like' | 'dislike' = 'like';

  @Output() vote = new EventEmitter<void>();

  public onClick() {
    this.active = !this.active;
    this.vote.emit();
  }
}
