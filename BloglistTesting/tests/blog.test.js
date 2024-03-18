const {test, expect, beforeEach, describe} = require('@playwright/test')
const helper = require('../helper')

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
describe('Blog app functionality', () => {
    test('New blogs can be created', async ({page}) => {
        helper.testLogin(page)
        await page.getByText('new blog').click()
        await page.locator('.Title').fill('Testing blogs...')
        await page.locator('.Author').fill('Test-dude')
        await page.locator('.Url').fill('http://www.example.com')
        await page.getByRole('button', { name: 'create' }).click()
        await page.getByText('a new blog Testing blogs... by Test-dude added!').waitFor()
        // Checks to ensure notfication stating blog has been created is visible. 
        expect(page.getByText('a new blog Testing blogs... by Test-dude added!')).toBeVisible()
    }),
    test('blogs can be liked', async ({page}) => {
        helper.testLogin(page)
        await page.getByText('new blog').click()
        await page.locator('.Title').fill('Testing blogs...')
        await page.locator('.Author').fill('Test-dude')
        await page.locator('.Url').fill('http://www.example.com')
        await page.getByRole('button', { name: 'create' }).click()
        await page.getByText('a new blog Testing blogs... by Test-dude added!').waitFor()
        // Reloads page such that the test blog added shows up
        await page.reload()
        await page.getByText('View').click()
        await page.getByRole('button', { name: 'like'}).click()
        await page.getByText('likes: 1').waitFor()
        // After the process is completed the number of likes must be 1
        expect(page.getByText('likes: 1')).toBeVisible()
    }),
    test('blogs can be deleted by the user who created them', async ({page}) => {
        testLogin(page)
    })
})