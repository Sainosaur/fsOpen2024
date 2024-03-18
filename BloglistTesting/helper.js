const testLogin = async (page) => {
    await page.locator('.UserField').fill('test')
    await page.locator('.PwdField').fill('testing')
    await page.getByRole('Button').click()
    await page.getByText('Test-dude logged in').waitFor()
}

module.exports = { testLogin }