import { Injectable } from '@angular/core';

import { SelectField } from './field-select';
import { FieldBase } from './field-base';
import { InputField } from './field-input';

@Injectable()
export class FieldService {
  getFields() {
    const fields: FieldBase<any>[] = [
      new SelectField({
        key: 'event',
        label: 'Add event',
        options: [
          { key: 'ng', value: 'Mifort - Angular' },
          { key: 'ts', value: 'Mifort - Type Script' },
          { key: 'css', value: 'Mifort - CSS/Sass' },
          { key: 'test', value: 'Mifort - Units test' }
        ],
        order: 5
      }),

      new InputField({
        key: 'time',
        label: 'Add time',
        value: '20.08 15:00',
        required: true,
        order: 1
      }),

      new InputField({
        key: 'guests',
        label: 'Add guests',
        order: 2
      }),
      new InputField({
        key: 'location',
        label: 'Add location or conferencing',
        order: 3
      }),
      new InputField({
        key: 'description',
        label: 'Add description',
        order: 4
      })
    ];

    return fields.sort((a, b) => a.order - b.order);
  }
}
