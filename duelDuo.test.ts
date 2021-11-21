
import { Builder, Capabilities, By } from "selenium-webdriver"

require('chromedriver')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

beforeEach(async () => {
    driver.get('http://localhost:3000/')
})

afterAll(async () => {
    driver.quit()
})

test('Title shows up when page loads', async () => {
    const title = await driver.findElement(By.id('title'))
    const displayed = await title.isDisplayed()
    expect(displayed).toBe(true)
})

test('choices show up when page loads', async () => {
    await driver.findElement(By.id('draw')).click()
    const choices = await driver.findElement(By.id('choices'))
    const displayed = await choices.isDisplayed()
    expect(displayed).toBe(true)
})

test('add to duo displays player-id', async () => {
    await driver.findElement(By.id('draw')).click()
    await driver.findElement(By.xpath(`//*[text()="Add to Duo"]`)).click()
    const firstDraft = await driver.findElement(By.id('player-duo'))
    const displayed = await firstDraft.isDisplayed()
    expect(displayed).toBe(true)
})

test('finished duel provides results', async () => {
    await driver.findElement(By.id('draw')).click()
    await driver.findElement(By.xpath(`//*[text()="Add to Duo"]`)).click()
    await driver.findElement(By.xpath(`//*[text()="Add to Duo"]`)).click()
    await driver.findElement(By.id('duel')).click()
    const duelResults = await driver.findElement(By.id('results'))
    const displayed = await duelResults.isDisplayed()
    expect(displayed).toBe(true)
})
