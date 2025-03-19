import { test, expect } from '@playwright/test';
import {BeatlesPage} from '../src/pages/beatles';
import {PaulMcCartneyPage} from '../src/pages/paulMcCartney';
import {JohnLennonPage} from '../src/pages/johnLennon';


test('Verify date of birth for Paul and John', async ({ page }) => {
    const beatlesPage = new BeatlesPage(page);
    const paulMcCartneyPage = new PaulMcCartneyPage(page);
    const johnLennonPage = new JohnLennonPage(page);
    let paulDOB: string;
    let johnDOB: string;

    await test.step('Navigate to the beatles page on wikipedia', async () => {
        await beatlesPage.navigateToBeatlesWiKiPage();
    });

    await test.step('Select singer paul', async () => {
        await beatlesPage.selectSingerByName('Paul McCartney');
    });

    await test.step('Get date of birth of paul' , async () => {
        paulDOB = await paulMcCartneyPage.getDOB();
    });

    await test.step('Select singer John', async () => {
        await beatlesPage.navigateToBeatlesWiKiPage();
        await beatlesPage.selectSingerByName('John Lennon');
    });

    await test.step('Get date of birth of john' , async () => {
        johnDOB = await johnLennonPage.getDOB();
    });

    await test.step('Assert that john was born before Paul McCartney', async () => {
        const paulDate = new Date(paulDOB);
        const johnDate = new Date(johnDOB);
        expect(johnDate.getFullYear()).toBeLessThan(paulDate.getFullYear());
    });
});