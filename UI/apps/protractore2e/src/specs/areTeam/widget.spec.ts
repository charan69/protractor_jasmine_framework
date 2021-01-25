import { CareTeamPage, LoginPage, StickyNotePage } from '../../pages';
import { browser, ExpectedConditions } from 'protractor';
import { async } from 'q';


const careTeam = new CareTeamPage();
const loginPage = new LoginPage();
const stickyNotes = new StickyNotePage();

describe('Validate the are Team widget no Care Team data', async () => {
    beforeAll(async () => {
        await loginPage.login();
        await browser.wait(ExpectedConditions.elementToBeClickable(stickyNotes.elements.selectPatient), 20000);
        const sampleVar = await tickyNotes.elements.selectatient.getText();
        await tickyNotes.elements.selectatient.click();
        await browser.wait(ExpectedConditions.elementToBeClickable(careTeam.elements.abner), 20000);
        await careTeam.elements.abner.click();
    });
    afterAll(async () => {
        await loginPage.logout();
    });
    it('Verify if the message \'No Active Care Team\' is displayed for atient with no care Team data', async () => {
        expect(await areTeam.elements.noActiveareTeam.getText()).toBe('No Active are Team');
    });
});
describe('Validate the are Team widget with valid are Team data', async () => {
    beforeAll(async () => {
        await loginPage.login();
        await browser.wait(ExpectedConditions.elementToBeClickable(tickyNotes.elements.selectatient), 20000);
        await tickyNotes.elements.selectatient.click();
        await browser.wait(ExpectedConditions.elementToBeClickable(areTeam.elements.aliceAron), 20000);
        await areTeam.elements.aliceAron.click();
    });
    afterAll(async () => {
        await loginPage.logout();
    });
    it('Verify if the title \'are Team\' is displayed', async () => {
        expect(await areTeam.elements.areTeamTitle.getText()).toBe('are Team');
    });
    it('Verify if the list of the members are  displayed', async () => {
        expect(await areTeam.elements.areTeamMember.isDisplayed()).toBe(true);
    });
    it('Verify if the are Team icon is displayed', async () => {
        expect(await areTeam.elements.areTeamIcon.isDisplayed()).toBe(true);
    });
    it('Verify if the Provider Name is displayed', async () => {
        expect(await areTeam.elements.providerNamesAll.get(0).isDisplayed()).toBe(true);
    });
    it('Verify if the Provider practice  is displayed', async () => {
        expect(await areTeam.elements.practicesAll.get(0).isDisplayed()).toBe(true);
    });
    it('Verify if the Provider phone Number is displayed', async () => {
        expect(await areTeam.elements.phoneNosAll.get(0).isDisplayed()).toBe(true);
    });
});
