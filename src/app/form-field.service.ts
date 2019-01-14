import { Injectable } from '@angular/core';

import { FormFieldDropdown } from './models/form-field-dropdown';
import { FormFieldTextarea } from './models/form-field-textarea';
import { FormFieldInput } from './models/form-field-input';
import { FormFieldRadio } from './models/form-field-radio';
import { FormFieldCheckbox } from './models/form-field-checkbox';

@Injectable()
export class FormFieldService {
    formFields = [];

    initializeFormFields (dataset) {
        dataset.forEach((field: any) => {
            switch (field.fieldType) {
                case 'textarea':
                    this.formFields.push(new FormFieldTextarea(field));
                    break;

                case 'dropdown':
                    field.option.sort((a: any, b: any) => a.order - b.order); // SORT OPTION BY ORDER
                    this.formFields.push(new FormFieldDropdown(field));
                    break;

                case 'radio':
                    field.group.sort((a: any, b: any) => a.order - b.order); // SORT RADIO OPTIONS BY ORDER
                    this.formFields.push(new FormFieldRadio(field));
                    break;

                case 'checkbox':
                    this.formFields.push(new FormFieldCheckbox(field));
                    break;

                default: this.formFields.push(new FormFieldInput(field));
            }

        });

        return this.formFields.sort((a, b) => a.order - b.order); // SORT FIELDS BY ORDER

    }

}
