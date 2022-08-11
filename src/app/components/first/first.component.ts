import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.scss']
})
export class FirstComponent {
  @Input() user: User
  @Output() buttonClicked: EventEmitter<string> = new EventEmitter<string>()

  get userFirstName() {
    return this.user.firstName
  }

  get userSecondName() {
    return this.user.secondName
  }

  constructor() {
    this.user = {
      firstName: 'John',
      secondName: 'Weak'
    }
  }

  sum(a: number, b: number) {
    return a + b
  }

  clickOnButton(): void {
    this.buttonClicked.emit(this.user.firstName)
  }

}

export interface User {
  firstName: string
  secondName: string
}
