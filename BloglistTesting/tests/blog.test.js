const {test, expect, beforeEach, describe} = require('@playwright/test')

describe('Upon inital render', () => {
    beforeEach(async ({page, request}) => {
        await request.post('http://localhost:3003/api/testing/reset')
        await request.post('http://localhost:3003/api/users', {
            data:{
                name: 'Test-dude',
                username: 'test',
                password: 'testing',
            }
        })
        await page.goto('http://localhost:5173');
    })
    test('Login form is shown', ({page}) => {
        expect(page.getByText('username')).toBeDefined()
        expect(page.getByText('password')).toBeDefined()
    })
})