import {expect, test} from "@playwright/test";
import {LoginPage} from "../../src/pages/login.page";
import {WelcomePage} from "../../src/pages/welcome.page";

test.describe('Verify menu main buttons', () => {
    test('comments button navigates to comments page', {
        tag: '@GAD',
    }, async ({page}) => {
        //Arrange
        const email = 'Moses.Armstrong@Feest.ca';
        const password = 'test1';

        const loginPage = new LoginPage(page);

        //Act
        await loginPage.goto();
        await loginPage.login(email, password);

        const welcomePage = new WelcomePage(page);
        const welcomePageTitle = await welcomePage.title();

        //Assert
        expect(welcomePageTitle).toContain('Welcome');
    });
});
