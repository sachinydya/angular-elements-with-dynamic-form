import { Component } from '@angular/core';

import { FormFieldService } from './form-field.service';

@Component({
    selector: 'app-root',
    template: `
        <div>
            <h2>Dynamic form</h2>
            <app-dynamic-form
                *ngIf="formFields.length; else noFormFields"
                [formFields]="formFields">
            </app-dynamic-form>
            <ng-template #noFormFields>
                <div class="alert alert-danger" role="alert">
                    <strong>
                        Cannot render form! No data found!
                    </strong>
                </div>
            </ng-template>
        </div>
    `,
    providers: [FormFieldService]
})

export class AppComponent {

    formFields: any[];
    // @Input() inputDataset: any[];
    // outputDataset: any[];

    inputDataset = [
        {
            fieldType: 'dropdown',
            model: 'brave',
            label: 'Bravery Rating',
            option: [
                { value: 'solid', label: 'Solid', order: 1 },
                { value: 'great', label: 'Great', order: 2 },
                { value: 'good', label: 'Good', order: 3 },
                { value: 'unproven', label: 'Unproven', order: 4 }
            ],
            id: 'braveryRating',
            name: 'braveryRating',
            placeholder: 'Select Bravery Rating',
            order: 3,
            required: false,
            classes: 'form-control form-control-sm',
            parentClasses: 'form-group',
            disabled: false,
            labelClasses: '',
            styles: {
                'color': 'lime',
                'font-size': '20px',
                'font-weight': 'bold'
            },
            // multiple: 'multiple',
            errorClasses: 'text-danger',
            errorStyles: '',
        },
        {
            fieldType: 'input',
            model: 'firstName',
            id: 'firstName',
            name: 'firstName',
            label: 'First name',
            type: 'text',
            placeholder: 'Enter first name',
            value: 'Bombasto',
            required: true,
            styles: {
                color: 'blue',
                // 'background-color': 'red'
            },
            // regex: /^\d+$/,
            regexMessage: 'Only digits allowed. Eg: 123...',
            order: 1,
            classes: 'form-control form-control-sm',
            parentClasses: 'form-group',
        },
        {
            fieldType: 'input',
            model: 'emailAddress',
            id: 'email',
            name: 'email',
            label: 'Email',
            required: true,
            type: 'email',
            placeholder: 'Enter email ID',
            order: 2,
            classes: 'form-control form-control-sm',
            parentClasses: 'form-group',
        },
        {
            fieldType: 'input',
            model: 'number',
            id: 'number',
            name: 'number',
            label: 'Number',
            type: 'number',
            placeholder: 'Enter phone number',
            order: 4,
            // min: 10,
            // max: 12,
            maxLength: 12,
            minLength: 10,
            classes: 'form-control form-control-sm',
            parentClasses: 'form-group',
        },
        {
            fieldType: 'input',
            model: 'age',
            id: 'age',
            required: true,
            name: 'age',
            label: 'Age',
            type: 'number',
            placeholder: 'Enter age',
            order: 5,
            min: 18,
            max: 150,
            value: 10,
            maxLength: 3,
            minLength: 1,
            classes: 'form-control form-control-sm',
            parentClasses: 'form-group',
        },
        {
            fieldType: 'textarea',
            model: 'description',
            id: 'description',
            name: 'description',
            label: 'Description',
            placeholder: 'Enter description',
            order: 6,
            rows: 4,
            // cols: 4,
            required: true,
            classes: 'form-control form-control-sm',
            parentClasses: 'form-group',
        },
        {
            fieldType: 'textarea',
            model: 'description1',
            // id: 'description',
            // name: 'description',
            label: 'Description1',
            // placeholder: 'Enter description3',
            // order: 6,
            // rows: 3,
            // cols: 4,
            // required: true,
            classes: 'form-control form-control-sm',
            parentClasses: 'form-group',
        },
        {
            // fieldType: 'textarea',
            model: 'description1',
            // id: 'description',
            // name: 'description',
            label: 'Description1',
            // placeholder: 'Enter description3',
            // order: 6,
            // rows: 3,
            // cols: 4,
            // required: true,
            classes: 'form-control form-control-sm',
            parentClasses: 'form-group',
        },
        {
            fieldType: 'radio',
            model: 'gender',
            label: 'Gender',
            name: 'sfrfgergerg',
            group: [
                { autofocus: 'autofocus', id: 'male', value: 'male', label: 'Male', order: 1 },
                { id: 'female', value: 'female', label: 'Female', order: 2 },
                { id: 'other', value: 'other', label: 'Other', order: 3 },
            ],
            value: 'female',
            classes: 'form-check-input',
            parentClasses: 'form-group',
            containerClasses: 'form-check form-check-inline',
            containerLabelClasses: 'form-check-label',
        },
        {
            fieldType: 'radio',
            model: 'contact',
            label: 'Contact method',
            name: 'sdf',
            group: [
                { autofocus: 'autofocus', id: 'phone', value: 'phone', label: 'Phone', order: 1 },
                { id: 'mail', value: 'mail', label: 'Mail', order: 2 },
            ],
            classes: 'form-check-input',
            parentClasses: 'form-group',
            containerClasses: 'form-check form-check-inline',
            containerLabelClasses: 'form-check-label',
        },
        {
            fieldType: 'checkbox',
            model: 'languages',
            label: 'Languages',
            name: 'sdf',
            group: [
                { autofocus: 'autofocus', id: 'kannada', value: 'kannada', label: 'Kannada', order: 1, checked: true },
                { id: 'english', value: 'english', label: 'English', order: 2 },
                { id: 'hindi', value: 'hindi', label: 'Hindi', order: 5, checked: true },
                { id: 'tamil', value: 'tamil', label: 'Tamil', order: 6 },
            ],
            classes: 'form-check-input',
            parentClasses: 'form-group',
            containerClasses: 'form-check form-check-inline',
            containerLabelClasses: 'form-check-label',
        },
    ];

    constructor(formFieldService: FormFieldService) {
        // this.outputDataset = JSON.parse(JSON.stringify(this.inputDataset)); // DEEP COPY
        this.formFields = formFieldService.initializeFormFields(this.inputDataset);
    }

}
