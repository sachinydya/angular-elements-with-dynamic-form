import { FormField } from './form-field-base';

export class FormFieldCheckbox extends FormField<string> {
    containerClasses: string;
    containerLabelClasses: string;
    group: any[];

    constructor(options: {} = {}) {
        if (options['model'] !== options['name']) {
            // tslint:disable-next-line:max-line-length
            console.warn(`For ${ options['model'] } formControlName and name attributes should be same. By assumption name is changed!`);
            options['name'] = options['model'];
            // console.log(options['name']);
        }
        super(options);
        this.containerClasses = options['containerClasses'];
        this.containerLabelClasses = options['containerLabelClasses'];
        this.group = options['group'] || [];
        this.group.forEach(item => {
            item.checked = item.checked || false;
        });
    }
}
