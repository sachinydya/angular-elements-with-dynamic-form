import { Injectable } from '@angular/core';

import {
    FormGroup,
    Validators,
    FormBuilder,
} from '@angular/forms';

@Injectable()
export class FormFieldConfigurationService {

    form: FormGroup;

    constructor(private fb: FormBuilder) { }

    configForm (formFields: any[]) {

        // USING FORM CONTROL
        // const group: any = {};

        // formFields.forEach(formField => {
        //     const validator = [];

        //     if (formField.fieldType === 'input') {
        //         if (formField.type === 'number') {
        //             if (formField.min ) { validator.push(Validators.min(formField.min)); }
        //             if (formField.max ) { validator.push(Validators.max(formField.max)); }
        //         }
        //         if (formField.minLength) { validator.push(Validators.minLength(formField.minLength)); }
        //         if (formField.maxLength) { validator.push(Validators.maxLength(formField.maxLength)); }
        //         if (formField.type === 'email') { validator.push(Validators.email); }
        //         if (formField.regex) { validator.push(Validators.pattern(formField.regex)); }
        //     }

        //     if (formField.required) { validator.push(Validators.required); }

        //     group[formField.model] = new FormControl(formField.value || '', validator);

        // });

        // return new FormGroup(group);



        // USING FORM BUILDER
        const group: any = {};

        formFields.forEach(formField => {
            const validator = [];

            if (formField.fieldType === 'input') {
                if (formField.type === 'number') {
                    if (formField.min ) { validator.push(Validators.min(formField.min)); }
                    if (formField.max ) { validator.push(Validators.max(formField.max)); }
                }
                if (formField.minLength) { validator.push(Validators.minLength(formField.minLength)); }
                if (formField.maxLength) { validator.push(Validators.maxLength(formField.maxLength)); }
                if (formField.type === 'email') { validator.push(Validators.email); }
                if (formField.regex) {
                    // console.log(formField);
                    validator.push(Validators.pattern(formField.regex)); }
            }

            if (formField.required) { validator.push(Validators.required); }

            if(formField.fieldType !== 'checkbox') {
                group[formField.model] = [formField.value || '', validator];
            } else {
                const formControlArray = [], checkboxGroup = formField.group;
                checkboxGroup.forEach(single => {
                    formControlArray.push(this.fb.control(single['checked']));
                });

                group[formField.model] = this.fb.array(formControlArray);
            }

        });
        this.form = this.fb.group(group);
        console.log(this.form);

        return this.form;
    }

    get getChechbox () {
        console.log(this.form);

        return this.form;
    }

}
