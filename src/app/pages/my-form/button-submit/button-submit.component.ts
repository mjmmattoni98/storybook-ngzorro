import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'button-submit',
  templateUrl: './button-submit.component.html',
  styleUrls: ['./button-submit.component.scss']
})
export class ButtonSubmitComponent implements OnInit {
  @Input() text: string = 'Submit';
  @Input() type: 'primary' | 'secondary' = 'primary';
  @Input() size: 'small' | 'medium' | 'large' = 'medium';
  @Input() disabled: boolean = false;
  @Input() loading: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  public get classes(): string[] {
    return [`storybook-button--${this.size}`, `storybook-button--${this.type}`];
  }
}
