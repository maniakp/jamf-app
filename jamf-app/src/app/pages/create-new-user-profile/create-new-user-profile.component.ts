import { Component, OnInit } from '@angular/core';
import {
  Validators,
  FormGroup,
  FormBuilder,
  FormControl,
} from '@angular/forms';
import { DataService } from 'src/app/services/data.service';
import { Group } from 'src/app/models/group';

@Component({
  selector: 'app-create-new-user-profile',
  templateUrl: './create-new-user-profile.component.html',
  styleUrls: ['./create-new-user-profile.component.scss'],
})
export class CreateNewUserProfileComponent implements OnInit {
  groups: Group[] = [];
  userDataFormGroup!: FormGroup;

  constructor(private fb: FormBuilder, private dataService: DataService) {}

  ngOnInit() {
    this.userDataFormGroup = this.fb.group({
      step1: this.fb.group({
        email: new FormControl('', [Validators.required, Validators.email]),
        password: new FormControl('', Validators.required),
        passwordConfirm: new FormControl('', Validators.required),
      }),
      step2: this.fb.group({
        group: new FormControl('', Validators.required),
      }),
    });
  }

  getStep1Form() {
    return this.userDataFormGroup.get('step1')! as FormGroup;
  }

  getStep2Form() {
    return this.userDataFormGroup.get('step2')! as FormGroup;
  }

  getStep3Form() {
    return this.userDataFormGroup as FormGroup;
  }

  onSubmit() {
    alert(JSON.stringify(this.userDataFormGroup.value));
  }
}
