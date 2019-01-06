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
                    // tslint:disable-next-line:no-unused-expression
                    this.formFields.push(new FormFieldTextarea(field));
                    break;

                case 'dropdown':
                    field.option.sort((a, b) => a.order - b.order); // SORT OPTION BY ORDER
                    // tslint:disable-next-line:no-unused-expression
                    this.formFields.push(new FormFieldDropdown(field));
                    break;

                case 'radio':
                    field.group.sort((a, b) => a.order - b.order); // SORT RADIO OPTIONS BY ORDER
                    // tslint:disable-next-line:no-unused-expression
                    this.formFields.push(new FormFieldRadio(field));
                    break;

                case 'checkbox':
                    // tslint:disable-next-line:no-unused-expression
                    this.formFields.push(new FormFieldCheckbox(field));
                    break;

                // tslint:disable-next-line:no-unused-expression
                default: this.formFields.push(new FormFieldInput(field));
            }
            // console.log(this.formFields[index]);

        });

        return this.formFields.sort((a, b) => a.order - b.order); // SORT FIELDS BY ORDER

    }

    // // TODO: get from a remote source of formField metadata
    // // TODO: make asynchronous
    // initializeFormFields () {

    //     let dataset: FormField<any>[] = [

    //         new FormFieldDropdown({
    //             fieldType: 'dropdown',
    //             model: 'brave',
    //             label: 'Bravery Rating',
    //             option: [
    //                 { value: 'solid', label: 'Solid' },
    //                 { value: 'great', label: 'Great' },
    //                 { value: 'good', label: 'Good' },
    //                 { value: 'unproven', label: 'Unproven' }
    //             ],
    //             id: 'braveryRating',
    //             name: 'braveryRating',
    //             placeholder: 'Select Bravery Rating',
    //             order: 3,
    //             required: false,
    //             classes: 'form-control form-control-sm',
    //             parentClasses: 'form-group',
    //             disabled: false,
    //             labelClasses: '',
    //             styles: {
    //                 'color': 'lime',
    //                 'font-size': '20px',
    //                 'font-weight': 'bold'
    //             },
    //             multiple: 'true',
    //             errorClasses: 'text-danger',
    //             errorStyles: '',
    //         }),

    //         new FormFieldInput({
    //             fieldType: 'input',
    //             model: 'firstName',
    //             id: 'firstName',
    //             name: 'firstName',
    //             label: 'First name',
    //             type: 'text',
    //             placeholder: 'Enter first name',
    //             value: 'Bombasto',
    //             required: true,
    //             styles: {
    //                 color: 'blue',
    //                 // 'background-color': 'red'
    //             },
    //             regex: /^\d+$/,
    //             regexMessage: 'Only digits allowed. Eg: 123...',
    //             order: 1,
    //             classes: 'form-control form-control-sm',
    //             parentClasses: 'form-group',
    //         }),

    //         new FormFieldInput({
    //             fieldType: 'input',
    //             model: 'emailAddress',
    //             id: 'email',
    //             name: 'email',
    //             label: 'Email',
    //             type: 'email',
    //             placeholder: 'Enter email ID',
    //             order: 2,
    //             classes: 'form-control form-control-sm',
    //             parentClasses: 'form-group',
    //         }),

    //         new FormFieldInput({
    //             fieldType: 'input',
    //             model: 'number',
    //             id: 'number',
    //             name: 'number',
    //             label: 'Number',
    //             type: 'number',
    //             placeholder: 'Enter phone number',
    //             order: 4,
    //             // min: 10,
    //             // max: 12,
    //             maxLength: 12,
    //             minLength: 10,
    //             classes: 'form-control form-control-sm',
    //             parentClasses: 'form-group',
    //         }),

    //         new FormFieldInput({
    //             fieldType: 'input',
    //             model: 'age',
    //             id: 'age',
    //             name: 'age',
    //             label: 'Age',
    //             type: 'number',
    //             placeholder: 'Enter age',
    //             order: 5,
    //             min: 18,
    //             max: 150,
    //             maxLength: 3,
    //             minLength: 1,
    //             classes: 'form-control form-control-sm',
    //             parentClasses: 'form-group',
    //         }),

    //         new FormFieldTextarea({
    //             fieldType: 'textarea',
    //             model: 'description',
    //             id: 'description',
    //             name: 'description',
    //             label: 'Description',
    //             placeholder: 'Enter description',
    //             order: 6,
    //             rows: 3,
    //             // cols: 4,
    //             required: true,
    //             classes: 'form-control form-control-sm',
    //             parentClasses: 'form-group',
    //         })
    //     ];

    //     dataset.forEach((field) => {
    //         switch (field.fieldType) {
    //             case 'textarea':
    //                 new FormFieldTextarea(field);
    //                 break;

    //             case 'dropdown':
    //                 new FormFieldDropdown(field);
    //                 break;

    //             default: new FormFieldInput(field);
    //         }
    //     });

    //     return dataset.sort((a, b) => a.order - b.order);
    // }
}
