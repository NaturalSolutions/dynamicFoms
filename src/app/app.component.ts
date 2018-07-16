import { Component }       from '@angular/core';

import { FieldService } from './dynamic-form/protocol.service';

@Component({
  selector: 'app-root',
  template: `
    <div>
      <h2>Protocole</h2>
      <app-dynamic-form [fields]="fields"></app-dynamic-form>
    </div>
  `,
  providers:  [FieldService]
})
export class AppComponent {
  fields: any[];

  constructor(service: FieldService) {
    this.fields = service.getFields();
  }
}
