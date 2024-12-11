import {Page} from "@playwright/test";
import {BasePage} from "./base.page";

export class CommentsPages extends BasePage {
    url = '/comments.html';

    constructor(page: Page) {
        super(page);
    }
}