import {HomePage} from "../../src/pages/home.page";
import {expect, test} from "@playwright/test";
import {ArticlesPage} from "../../src/pages/articles.pages";
import {CommentsPages} from "../../src/pages/comments.pages";
import {MainMenuComponent} from "../../src/components/main-menu.component";

test.describe('Verify menu main buttons', () => {
    test('comments button navigates to comments page', {
        tag: '@GAD',
    }, async ({page}) => {
        //Arrange
        const articlesPage = new ArticlesPage(page);

        //Act
        await articlesPage.goto();
        const commentsPage = new CommentsPages(page);
        await commentsPage.mainMenu.commentsButton.click();
        const title = await commentsPage.title();

        //Assert
        expect(title).toContain('Comments');
    });

    test('articles button navigates to articles page', {
        tag: '@GAD',
    }, async ({page}) => {
        //Arrange
        const commentsPage = new CommentsPages(page);

        //Act
        await commentsPage.goto();
        await commentsPage.mainMenu.articlesButton.click();
        const articlesPage = new ArticlesPage(page);
        const title = await articlesPage.title();

        //Assert
        expect(title).toContain('Articles');
    });

    test('home page button navigates to home page', {
        tag: '@GAD',
    }, async ({page}) => {
        //Arrange
        const articlesPage = new ArticlesPage(page);

        //Act
        await articlesPage.goto();
        await articlesPage.mainMenu.homePage.click();
        const homePage = new HomePage(page);
        const title = await homePage.title();

        //Assert
        expect(title).toContain('GAD');
    });
});