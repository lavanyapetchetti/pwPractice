import {expect, type Locator, type Page} from '@playwright/test';

export class BeatlesPage {
    readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async navigateToBeatlesWiKiPage() {
        await this.page.goto('https://en.wikipedia.org/wiki/The_Beatles');
        await expect(this.page).toHaveTitle(/The Beatles/)
        await expect(this.page.getByRole('heading', { name: 'The Beatles', exact: true }).locator('span')).toBeVisible();
    }

    async selectSingerByName(name: string) {
        await this.page.locator(`a:has-text('${name}')`).first().click();
        await expect(this.page.getByRole('heading', { name: `${name}`, exact: true }).locator('span')).toBeVisible();
    }
}