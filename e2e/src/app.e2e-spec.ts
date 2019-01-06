'use strict'; // necessary for es6 output in node

import { browser, element, by } from 'protractor';

/* tslint:disable:quotemark */
describe('Dynamic Form', function () {

    beforeAll(function () {
        browser.get('');
    });

    it('should submit form', function () {
        const firstNameElement = element.all(by.css('input[id=firstName]')).get(0);
        expect(firstNameElement.getAttribute('value')).toEqual('Bombasto');

        const emailElement = element.all(by.css('input[id=emailAddress]')).get(0);
        const email = 'test@test.com';
        emailElement.sendKeys(email);
        expect(emailElement.getAttribute('value')).toEqual(email);

        element(by.css('select option[value="solid"]')).click();

        const saveButton = element.all(by.css('button')).get(0);
        saveButton.click().then(function () {
            expect(element(by.xpath("//strong[contains(text(),'Saved the following values')]")).isPresent()).toBe(true);
        });
    });

});
