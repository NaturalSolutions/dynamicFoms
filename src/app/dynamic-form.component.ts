import { Component, Input, OnInit }  from '@angular/core';
import { FormGroup }                 from '@angular/forms';

import { FieldBase }              from './dynamic-form/field-base';
import { FieldControlService }    from './dynamic-form/field-control.service';

@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  providers: [ FieldControlService ]
})
export class DynamicFormComponent implements OnInit {

  @Input() fields: FieldBase<any>[] = [];
  form: FormGroup;
  payLoad = '';

  constructor(private qcs: FieldControlService) {  }

  ngOnInit() {
    this.form = this.qcs.toFormGroup(this.fields);
  }

  onSubmit() {
    this.payLoad = JSON.stringify(this.form.value);
  }
}
