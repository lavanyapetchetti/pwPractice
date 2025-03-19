import { Page } from 'playwright';

export class PaulMcCartneyPage {
    readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async getDOB(): Promise<string> {
        await this.page.screenshot({ path: 'paul.png' });
        return await this.page.$eval('.bday', el => el.textContent);
    }
}
