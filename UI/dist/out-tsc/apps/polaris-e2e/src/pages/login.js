import * as tslib_1 from "tslib";
import { element, by, browser, ExpectedConditions } from 'protractor';
import { UiParams } from '../../config/params';
const params = new UiParams();
export class LoginPage {
    constructor() {
        this.elements = {
            id: element(by.id('usernameField')),
            password: element(by.id('legacyPassword')),
            siteid: element(by.id('IDField')),
            loginButton: element(by.className('loginButton')),
            practiceID: element(by.className('at-practiceId')),
            practiceNamesAll: element.all(by.css('.practiceList span')),
            logoutButton: element(by.className('logout-text')),
        };
    }
    login() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            yield browser.waitForAngularEnabled(false);
            yield browser.get(params.parameters.url);
            yield browser.wait(ExpectedConditions.visibilityOf(this.elements.id), 50000);
            yield this.elements.id.clear();
            yield this.elements.id.sendKeys('lk');
            yield this.elements.password.clear();
            yield this.elements.password.sendKeys('demo');
            yield this.elements.siteid.sendKeys('demo-qaautopol1');
            yield this.elements.loginButton.click();
            yield browser.wait(ExpectedConditions.elementToBeClickable(this.elements.practiceNamesAll.get(0)), 45000);
            yield this.elements.practiceNamesAll.get(0).click();
            yield browser.waitForAngularEnabled(true);
        });
    }
    logout() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            yield browser.wait(ExpectedConditions.elementToBeClickable(this.elements.logoutButton), 250000);
            yield this.elements.logoutButton.click();
        });
    }
}
//# sourceMappingURL=login.js.map