import { CdkStepper } from '@angular/cdk/stepper';
import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-custom-stepper',
  templateUrl: './custom-stepper.component.html',
  styleUrls: ['./custom-stepper.component.scss'],
  providers: [{ provide: CdkStepper, useExisting: CustomStepperComponent }],
})
export class CustomStepperComponent extends CdkStepper {
  @Input()
  customStepper: CustomStepperComponent | null | undefined;

  @Output() 
  submit = new EventEmitter();

  activeClass = 'active';

  resetFormAndStepper() {
    this.customStepper?.reset();
  }

  submitForm() {
    this.submit.emit();
  }
}
