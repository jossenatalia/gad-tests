import {HomePage} from "../../pages/home.page";
import {expect, test} from "@playwright/test";
import {ArticlesPage} from "../../pages/articles.pages";
import {CommentsPages} from "../../pages/comments.pages";

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
        });

    test('comments page title', {
            tag: '@GAD',
        },
        async ({page}) => {
            // Arrange
            const commentsPage = new CommentsPages(page);
            // Act
            await commentsPage.goto();
            // Assert
            const title = await commentsPage.title();
            expect(title).toContain('Comments');
        })
});