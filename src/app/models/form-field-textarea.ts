import { FormField } from './form-field-base';

export class FormFieldTextarea extends FormField<string> {
    rows: number;
    cols: number;
    autocomplete: 'off' | 'on';

    constructor(options: {} = {}) {
        super(options);
        this.rows = options['rows'] || 3;
        this.cols = options['cols'] || 30;
        this.autocomplete = options['autocomplete'] || 'off';
    }
}
