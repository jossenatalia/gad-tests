import {HomePage} from "../../pages/home.page";
import {expect, test} from "@playwright/test";
import {ArticlesPage} from "../../pages/articles.pages";

test.describe('Verify service main pages', () => {
    test('home page title', {
            tag: '@GAD',
        },
        async ({page}) => {
            // Arrange
            const homePage = new HomePage(page);
            // Act
            await homePage.goto();
            // Assert
            const title = await homePage.title();
            expect(title).toContain('GAD');
        });

    test('articles page title', {
            tag: '@GAD',
        },
        async ({page}) => {
            // Arrange
            const articlesPage = new ArticlesPage(page);
            // Act
            await articlesPage.goto();
            // Assert
            const title = await articlesPage.title();
            expect(title).toContain('Articles');
        })
});