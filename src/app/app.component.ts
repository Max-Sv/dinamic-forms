import { Component } from '@angular/core';
import { FieldService } from './field.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass'],
  providers: [FieldService]
})
export class AppComponent {
  title = 'dinamic-forms';
  fields: any[];

  constructor(service: FieldService) {
    this.fields = service.getFields();
  }
}
