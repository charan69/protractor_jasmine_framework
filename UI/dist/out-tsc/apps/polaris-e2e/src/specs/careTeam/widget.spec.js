import * as tslib_1 from "tslib";
import { CareTeamPage, LoginPage, StickyNotePage } from '../../pages';
import { browser, ExpectedConditions } from 'protractor';
const careTeam = new CareTeamPage();
const loginPage = new LoginPage();
const stickyNotes = new StickyNotePage();
describe('Validate the Care Team widget no Care Team data', () => tslib_1.__awaiter(this, void 0, void 0, function* () {
    beforeAll(() => tslib_1.__awaiter(this, void 0, void 0, function* () {
        yield loginPage.login();
        yield browser.wait(ExpectedConditions.elementToBeClickable(stickyNotes.elements.selectPatient), 20000);
        yield stickyNotes.elements.selectPatient.click();
        yield browser.wait(ExpectedConditions.elementToBeClickable(careTeam.elements.abner), 20000);
        yield careTeam.elements.abner.click();
    }));
    afterAll(() => tslib_1.__awaiter(this, void 0, void 0, function* () {
        yield loginPage.logout();
    }));
    it('Verify if the message \'No Active Care Team\' is displayed for patient with no care Team data', () => tslib_1.__awaiter(this, void 0, void 0, function* () {
        expect(yield careTeam.elements.noActiveCareTeam.getText()).toBe('No Active Care Team');
    }));
}));
describe('Validate the Care Team widget with valid care Team data', () => tslib_1.__awaiter(this, void 0, void 0, function* () {
    beforeAll(() => tslib_1.__awaiter(this, void 0, void 0, function* () {
        yield loginPage.login();
        yield browser.wait(ExpectedConditions.elementToBeClickable(stickyNotes.elements.selectPatient), 20000);
        yield stickyNotes.elements.selectPatient.click();
        yield browser.wait(ExpectedConditions.elementToBeClickable(careTeam.elements.aliceAron), 20000);
        yield careTeam.elements.aliceAron.click();
    }));
    afterAll(() => tslib_1.__awaiter(this, void 0, void 0, function* () {
        yield loginPage.logout();
    }));
    it('Verify if the title \'Care Team\' is displayed', () => tslib_1.__awaiter(this, void 0, void 0, function* () {
        expect(yield careTeam.elements.careTeamTitle.getText()).toBe('Care Team');
    }));
    it('Verify if the list of the members are  displayed', () => tslib_1.__awaiter(this, void 0, void 0, function* () {
        expect(yield careTeam.elements.careTeamMember.isDisplayed()).toBe(true);
    }));
    it('Verify if the care Team icon is displayed', () => tslib_1.__awaiter(this, void 0, void 0, function* () {
        expect(yield careTeam.elements.careTeamIcon.isDisplayed()).toBe(true);
    }));
    it('Verify if the Provider Name is displayed', () => tslib_1.__awaiter(this, void 0, void 0, function* () {
        expect(yield careTeam.elements.providerNamesAll.get(0).isDisplayed()).toBe(true);
    }));
    it('Verify if the Provider practice  is displayed', () => tslib_1.__awaiter(this, void 0, void 0, function* () {
        expect(yield careTeam.elements.practicesAll.get(0).isDisplayed()).toBe(true);
    }));
    it('Verify if the Provider phone Number is displayed', () => tslib_1.__awaiter(this, void 0, void 0, function* () {
        expect(yield careTeam.elements.phoneNosAll.get(0).isDisplayed()).toBe(true);
    }));
}));
//# sourceMappingURL=widget.spec.js.map