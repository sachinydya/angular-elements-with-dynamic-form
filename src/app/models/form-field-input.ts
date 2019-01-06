import { FormField } from './form-field-base';

export class FormFieldInput extends FormField<string> {
    type: string;
    autocomplete: 'off' | 'on';
    regex: RegExp;
    regexMessage: string;
    min: number;
    max: number;
    minLength: number;
    maxLength: number;

    constructor(options: {} = {}) {
        super(options);
        this.type = options['type'] || '';
        this.autocomplete = options['autocomplete'] || 'off';
        this.regex = options['regex'];
        this.regexMessage = options['regexMessage'];
        this.min = options['min'];
        this.max = options['max'];
        this.minLength = options['minLength'];
        this.maxLength = options['maxLength'];
    }
}
