import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-step3',
  templateUrl: './step3.component.html',
  styleUrls: ['./step3.component.scss'],
})
export class Step3Component implements OnInit {
  @Input() form: FormGroup | null | undefined;
  constructor() {}

  ngOnInit(): void {}

  get email() {
    return this.form!.get('step1')!.get('email')?.value;
  }

  get selectedGroup() {
    return this.form!.get('step2')!.get('group')?.value?.name;
  }
}
