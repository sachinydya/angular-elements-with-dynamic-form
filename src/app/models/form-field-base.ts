export class FormField<T> {
    value?: T;
    model?: string;
    label?: string;
    required?: boolean;
    order?: number;
    fieldType?: string;
    id?: string;
    name?: string;
    placeholder?: string;
    classes?: string;
    labelClasses?: string;
    parentClasses?: string;
    styles?: any;
    type?: string;
    disabled?: boolean;
    errorClasses?: string;
    errorStyles?: string;
    autofocus?: string;

    constructor(options: {
        value?: T,
        model?: string,
        label?: string,
        required?: boolean,
        order?: number,
        fieldType?: string,
        id?: string,
        name?: string,
        placeholder?: string,
        classes?: string,
        labelClasses?: string,
        parentClasses?: string,
        styles?: any,
        type?: string,
        disabled?: false,
        errorClasses?: string,
        errorStyles?: string,
        autofocus?: string,
    } = {}) {
        this.value = options.value;
        this.model = options.model;
        this.label = options.label || '';
        this.required = options.required || false;
        this.order = options.order === undefined ? 1 : options.order;
        this.fieldType = options.fieldType;
        this.id = options.id || this.model;
        this.name = options.name || this.model;
        this.placeholder = options.placeholder || this.model;
        this.classes = options.classes;
        this.labelClasses = options.labelClasses;
        this.parentClasses = options.parentClasses;
        this.styles = options.styles;
        this.type = options.type;
        this.disabled = options.disabled || false;
        this.errorClasses = options.errorClasses;
        this.errorStyles = options.errorStyles;
        this.autofocus = options.autofocus;

        // console.log(
        //     'this.value = ', this.value, '\n',
        //     'this.model = ', this.model, '\n',
        //     'this.label = ', this.label, '\n',
        //     'this.required = ', this.required, '\n',
        //     'this.order = ', this.order, '\n',
        //     'this.fieldType = ', this.fieldType, '\n',
        //     'this.id = ', this.id, '\n',
        //     'this.name = ', this.name, '\n',
        //     'this.autocomplete = ', this.autocomplete, '\n',
        //     'this.placeholder = ', this.placeholder, '\n',
        //     'this.styles = ', this.styles, '\n',
        //     'this.parentClasses = ', this.parentClasses, '\n',
        //     'this.labelClasses = ', this.labelClasses, '\n',
        //     'this.classes = ', this.classes, '\n',
        //     'this.multiple = ', this.multiple, '\n',
        //     'this.type = ', this.type, '\n',
            // 'this.rows = ', this.rows, '\n',
        //     'this.cols = ', this.cols, '\n',
        //     'this.checked = ', this.checked, '\n',
        //     'this.min = ', this.min, '\n',
        //     'this.minLength = ', this.minLength, '\n',
        //     'this.max = ', this.max, '\n',
        //     'this.maxLength = ', this.maxLength, '\n',
        //     'this.option = ', this.option, '\n',
        //     'this.regex = ', this.regex, '\n',
        //     'this.disabled = ', this.disabled, '\n',
        // );
    }
}

// INPUT FEILD => CHECKBOX
// id: '',
// name: '',
// value: ,
// type: '',
// disabled: '',
// required: '',
// classes: '',
// parentClasses: '',
// styles: '',
// checked: '',
// label: '',
// order: ,
// labelClasses: '',

// // BUTTON
// id: '',
// name: '',
// type: '',
// disabled: '',
// classes: '',
// parentClasses: '',
// styles: '',
// label: '',
// order: ,
// labelClasses: '',
