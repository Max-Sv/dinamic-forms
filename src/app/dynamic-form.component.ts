import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FieldBase } from './field-base';
import { FieldControlService } from './field-control.service';

@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  providers: [FieldControlService]
})
export class DynamicFormComponent implements OnInit {
  @Input() fields: FieldBase<any>[] = [];
  form: FormGroup;

  constructor(private fieldService: FieldControlService) {}

  ngOnInit() {
    this.form = this.fieldService.toFormGroup(this.fields);
  }

  onSubmit() {
    console.log(this.form.value);
  }
}
