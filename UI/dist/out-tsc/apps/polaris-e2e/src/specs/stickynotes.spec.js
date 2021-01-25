import * as tslib_1 from "tslib";
import { LoginPage, StickyNotePage } from '../pages';
import { Helpers } from '../utils/Helpers';
import { browser, ExpectedConditions } from 'protractor';
import { DbParams } from 'apps/polaris-e2e/config/params';
let editRandomText;
let value;
let randomText;
let result;
let pgClient;
const dbparams = new DbParams();
const stickyNotes = new StickyNotePage();
const loginPage = new LoginPage();
const username = dbparams.parameters.postgreUserName;
const password = dbparams.parameters.postgrePassword;
const server = dbparams.parameters.postgreServer;
const port = dbparams.parameters.postgrePort;
const dbname = dbparams.parameters.postgreDatabaseName;
describe('Verify if the user is able to add a new sticky note', () => tslib_1.__awaiter(this, void 0, void 0, function* () {
    const pg = require('pg');
    const connectionString = 'postgres://' + username + ':' + password + '@' + server + ':' + port + '/' + dbname;
    pgClient = new pg.Client(connectionString);
    it('Validate if user is able to Login to polaris', () => tslib_1.__awaiter(this, void 0, void 0, function* () {
        yield loginPage.login();
        expect(yield stickyNotes.elements.patientHeader.getText()).toBe(stickyNotes.constants.headers.label);
    }));
    it('Verify if user is able to see Sticky Notes label', () => tslib_1.__awaiter(this, void 0, void 0, function* () {
        yield browser.wait(ExpectedConditions.elementToBeClickable(stickyNotes.elements.selectPatient), 20000);
        yield stickyNotes.elements.selectPatient.click();
        yield browser.wait(ExpectedConditions.elementToBeClickable(stickyNotes.elements.patientsAll.get(0)), 20000);
        yield stickyNotes.elements.patientsAll.get(0).click();
        expect(yield stickyNotes.elements.stickyHeader.getText()).toBe(stickyNotes.constants.headers.text);
    }));
    it('Verify if user is able to see + icon', () => tslib_1.__awaiter(this, void 0, void 0, function* () {
        expect(yield stickyNotes.elements.add.plusButton.isDisplayed()).toBe(true);
    }));
    it('Verify if the user is able to see cancel button', () => tslib_1.__awaiter(this, void 0, void 0, function* () {
        randomText = 'Sticky body' + Helpers.randomString(3, 'numerals');
        yield stickyNotes.elements.add.plusButton.click();
        yield browser.wait(ExpectedConditions.visibilityOf(stickyNotes.elements.add.addTextArea), 45000);
        yield stickyNotes.elements.add.addTextArea.clear();
        yield stickyNotes.elements.add.addTextArea.sendKeys(randomText);
        expect(yield stickyNotes.elements.add.cancelButton.isDisplayed()).toBe(true);
    }));
    it('Verify if the user is able to see Save button', () => tslib_1.__awaiter(this, void 0, void 0, function* () {
        expect(yield stickyNotes.elements.add.saveButton.isDisplayed()).toBe(true);
    }));
    it('Verify user is able to add a sticky note', () => tslib_1.__awaiter(this, void 0, void 0, function* () {
        yield stickyNotes.elements.add.saveButton.click();
        expect(yield stickyNotes.elements.stickyBodyAll.get(0).getText()).toBe(randomText);
    }));
    it('Verify if user is able to see the created sticky note in the stored data base', () => tslib_1.__awaiter(this, void 0, void 0, function* () {
        yield pgClient.connect();
        result = yield pgClient.query('select * from patientnote order by note_sid desc');
        value = result.rows[0].body;
        value = value.toString().trim();
        expect(value).toBe(randomText);
    }));
}));
describe('Validate if the user is able to edit the sticky note', () => tslib_1.__awaiter(this, void 0, void 0, function* () {
    it('Verify if the edit button is displayed', () => tslib_1.__awaiter(this, void 0, void 0, function* () {
        expect(yield stickyNotes.elements.edit.editButtonsAll.get(0).isDisplayed()).toBe(true);
    }));
    it('verify if user is able to see cancel button while editing ', () => tslib_1.__awaiter(this, void 0, void 0, function* () {
        editRandomText = 'Sticky body Edit' + Helpers.randomString(3, 'numerals');
        yield stickyNotes.elements.edit.editButtonsAll.get(0).click();
        yield browser.wait(ExpectedConditions.elementToBeClickable(stickyNotes.elements.edit.editTextArea), 45000);
        yield stickyNotes.elements.edit.editTextArea.clear();
        yield stickyNotes.elements.edit.editTextArea.sendKeys(editRandomText);
        expect(yield stickyNotes.elements.edit.editCancel.isDisplayed()).toBe(true);
    }));
    it('Verify if the user is able to see Save button', () => tslib_1.__awaiter(this, void 0, void 0, function* () {
        expect(yield stickyNotes.elements.edit.editSave.isDisplayed()).toBe(true);
    }));
    it('Verify user is able to edit sticky note', () => tslib_1.__awaiter(this, void 0, void 0, function* () {
        yield stickyNotes.elements.edit.editSave.click();
        expect(yield stickyNotes.elements.stickyBodyAll.get(0).getText()).toBe(editRandomText);
    }));
    it('Verify if user is able to see the edited sticky note is stored in the data base', () => tslib_1.__awaiter(this, void 0, void 0, function* () {
        result = yield pgClient.query('select * from patientnote order by note_sid desc');
        value = result.rows[0].body;
        value = value.toString().trim();
        expect(value).toBe(editRandomText);
    }));
}));
describe('Validate if user is able to delete the sticky Note', () => tslib_1.__awaiter(this, void 0, void 0, function* () {
    afterAll(() => tslib_1.__awaiter(this, void 0, void 0, function* () {
        yield pgClient.end();
        yield loginPage.logout();
    }));
    it('Verify if the user is able to see delete button', () => tslib_1.__awaiter(this, void 0, void 0, function* () {
        yield stickyNotes.elements.edit.editButtonsAll.get(0).click();
        expect(yield stickyNotes.elements.edit.deleteButton.isDisplayed()).toBe(true);
    }));
    it('Verify if user is able to delete the sticky note', () => tslib_1.__awaiter(this, void 0, void 0, function* () {
        yield stickyNotes.elements.edit.deleteButton.click();
        expect(yield stickyNotes.elements.stickyBodyAll.get(0).getText()).not.toBe(editRandomText);
    }));
    it('Verify if user is not able to see the sticky note  in the data base', () => tslib_1.__awaiter(this, void 0, void 0, function* () {
        result = yield pgClient.query('select * from patientnote order by note_sid desc');
        value = result.rows[0].body;
        value = value.toString().trim();
        expect(value).not.toBe(editRandomText);
    }));
}));
//# sourceMappingURL=stickynotes.spec.js.map