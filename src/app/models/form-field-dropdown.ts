import { FormField } from './form-field-base';

export class FormFieldDropdown extends FormField<string> {
    option: any[] = [];
    multiple: 'mulitple' | null;

    constructor(options: {} = {}) {
        super(options);
        this.option = options['option'] || [];
        this.multiple = options['multiple'] || null;
    }
}
