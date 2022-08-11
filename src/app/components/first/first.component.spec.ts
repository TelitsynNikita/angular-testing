import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstComponent } from './first.component';
import {By} from "@angular/platform-browser";

describe('FirstComponent', () => {
  let component: FirstComponent;
  let fixture: ComponentFixture<FirstComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FirstComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FirstComponent);
    component = fixture.componentInstance;

    component.user = {
      firstName: 'John',
      secondName: 'Weak'
    }

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('component renders first name and second name', () => {
    component.user = {
      firstName: 'John',
      secondName: 'Smith'
    }

    expect(component.user.firstName).toBe('John')
    expect(component.user.secondName).toBe('Smith')
  })

  it('components`s method sum has to return value', () => {
    const value = component.sum(3,5)
    expect(value).toBe(8)
  })

  it('component has to send click an event with users`s name', () => {
    const event = spyOn(component.buttonClicked, 'emit')

    component.user = {
      firstName: 'Lisa',
      secondName: 'Pavlova'
    }

    component.clickOnButton()
    expect(event).toHaveBeenCalledWith('Lisa')
  })

  it('component has to send an event for click on button', () => {
    const event = spyOn(component.buttonClicked, 'emit')
    const button = fixture.debugElement.query(By.css('button'))
    event.calls.reset()
    button.nativeElement.click()

    expect(event).toHaveBeenCalledWith('John')
  })
});
