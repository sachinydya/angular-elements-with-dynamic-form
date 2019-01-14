import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import {
    NgModule,
    Injector,
} from '@angular/core';

import { createCustomElement } from '@angular/elements';

import { AppComponent } from './app.component';

import { DynamicFormComponent } from './dynamic-form/dynamic-form.component';
import { DynamicFormFieldComponent } from './dynamic-form/dynamic-form-field/dynamic-form-field.component';

@NgModule({
    imports: [
        BrowserModule,
        ReactiveFormsModule
    ],
    declarations: [
        AppComponent,
        DynamicFormComponent,
        DynamicFormFieldComponent
    ],
    // bootstrap: [AppComponent],
    entryComponents: [AppComponent]
})

export class AppModule {
    constructor(private injector: Injector) {
        customElements.define(
            'dynamic-form-web-element',
            createCustomElement(AppComponent, { injector })
        );
    }

    ngDoBootstrap () { }
}
