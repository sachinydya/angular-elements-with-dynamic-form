import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { FormField } from '../models/form-field-base';
import { FormFieldConfigurationService } from '../form-field-control.service';

@Component({
    selector: 'app-dynamic-form',
    templateUrl: './dynamic-form.component.html',
    providers: [FormFieldConfigurationService]
})

export class DynamicFormComponent implements OnInit {

    @Input() formFields: FormField<any>[] = [];
    form: FormGroup;
    payLoad = '';

    constructor(private formFieldConfigurationService: FormFieldConfigurationService) { }

    ngOnInit () {
        this.form = this.formFieldConfigurationService.configForm(this.formFields);
        console.log('formFields: ', this.formFields);

    }

    onSubmit () {
        console.log(this.form.value);

        this.payLoad = JSON.stringify(this.form.value);
    }
}
