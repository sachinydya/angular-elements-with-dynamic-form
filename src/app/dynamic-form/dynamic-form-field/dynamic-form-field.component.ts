import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { FormField } from '../../models/form-field-base';

@Component({
    selector: 'app-form-field',
    templateUrl: './dynamic-form-field.component.html'
})

export class DynamicFormFieldComponent {

    @Input() formField: FormField<any>;

    @Input() form: FormGroup;

}
