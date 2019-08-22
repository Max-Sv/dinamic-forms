import { FieldBase } from './field-base';

export class InputField extends FieldBase<string> {
  controlType = 'input';
  type: string;

  constructor(options: {} = {}) {
    super(options);
    this.type = options['type'] || '';
  }
}
