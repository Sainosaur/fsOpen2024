const {test, expect, beforeEach, describe} = require('@playwright/test')


beforeEach(async ({page, request}) => {
    await request.post('http://localhost:3003/api/testing/reset')
    await request.post('http://localhost:3003/api/users', {
        data:{
            name: 'Test-dude',
            username: 'test',
            password: 'testing',
        }
    })
    await page.goto('http://localhost:5173')
})
test('Login form is shown', ({page}) => {
    expect(page.getByText('username')).toBeDefined()
    expect(page.getByText('password')).toBeDefined()
})
describe('Login functionality', () => {
    test('Correct credentials results in sucessful login', async ({page}) => {
        await page.locator('.UserField').fill('test')
        await page.locator('.PwdField').fill('testing')
        await page.getByRole('Button').click()
        await page.getByText('Test-dude logged in').waitFor()
        // checks to ensure the user has successfully logged in to the application.
        expect(page.getByText('Test-dude logged in')).toBeVisible()
    }),
    test('Incorrect credentials results in an error message', async ({page}) => {
        await page.locator('.UserField').fill('test')
        await page.locator('.PwdField').fill('wrong')
        await page.getByRole('Button').click()
        await page.getByText('wrong username or password').waitFor()
        // Checks to ensure error is present and the user has not been logged in to the system
        expect(page.getByText('wrong username or password')).toBeVisible()
        expect(page.getByText('Test-dude logged in')).not.toBeVisible()
    })
})