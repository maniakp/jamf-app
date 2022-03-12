import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Group } from 'src/app/models/group';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-step2',
  templateUrl: './step2.component.html',
  styleUrls: ['./step2.component.scss'],
})
export class Step2Component implements OnInit {
  @Input() form: FormGroup | null | undefined;

  options: Group[] = [];

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.dataService.getUserGroups().subscribe((x) => {
      this.options = x.map((r) => new Group(r.id, r.name));
    });
  }

  get groups() {
    return this.form!.get('groups');
  }
}
