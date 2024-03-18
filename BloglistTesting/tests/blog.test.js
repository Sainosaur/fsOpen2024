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
    await page.getByText('blogs').waitFor()
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
    beforeEach(async ({page}) => {
        await page.locator('.UserField').fill('test')
        await page.locator('.PwdField').fill('testing')
        await page.getByRole('Button').click()
        await page.getByText('Test-dude logged in').waitFor()
    }),
    test('New blogs can be created', async ({page}) => {
        await page.getByText('new blog').click()
        await page.locator('.Title').fill('Testing blogs...')
        await page.locator('.Author').fill('Test-dude')
        await page.locator('.Url').fill('http://www.example.com')
        await page.getByRole('button', { name: 'create' }).click()
        await page.getByText('a new blog Testing blogs... by Test-dude added!').waitFor()
        // Checks to ensure notfication stating blog has been created is visible. 
        expect(page.getByText('a new blog Testing blogs... by Test-dude added!')).toBeVisible()
    }), describe('Existing Blogs', () => {
            beforeEach(async ({page}) => {
                await page.getByText('new blog').click()
                await page.locator('.Title').fill('Testing blogs...')
                await page.locator('.Author').fill('Test-dude')
                await page.locator('.Url').fill('http://www.example.com')
                await page.getByRole('button', { name: 'create' }).click()
                await page.getByText('a new blog Testing blogs... by Test-dude added!').waitFor()
                // Reloads page such that the test blog added shows up
                await page.reload()
            })
            test('blogs can be liked', async ({page}) => {
                await page.getByText('View').click()
                await page.getByRole('button', { name: 'like'}).click()
                await page.getByText('likes: 1').waitFor()
                // After the process is completed the number of likes must be
                expect(page.getByText('likes: 1')).toBeVisible()
            }),
            test('blog can be deleted by user who created', async ({page}) => {
                await page.getByRole('Button', { name: 'view'}).click()
                await page.getByRole('Button', { name: 'remove'}).click()
                
                expect(page.getByText('Testing blogs...')).not.toBeVisible()
            }),
            test('Blog cannot be deleted by another user', async ({page, request}) => {
                await request.post('http://localhost:3003/api/users', {
                    data:{
                        name: 'Test-test-dude',
                        username: 'testtest',
                        password: 'testingg',
                    }
                })
                await page.getByRole('Button', { name: 'Log Out'}).click()
                await page.locator('.UserField').fill('testtest')
                await page.locator('.PwdField').fill('testingg')
                await page.getByRole('Button').click()
                await page.getByRole('Button', { name: 'View'}).click()
                
                expect(page.getByRole('Button', { name: 'remove'})).not.toBeVisible()
            }),
            test('Blogs are ordered by likes', async ({page}) => {
                // for loop used to create 25 blogs entires and like all of them
                for(let i = 1; i <= 25; i++){
                    await page.getByText('new blog').click()
                    await page.locator('.Title').fill(`Testing blog ${i}...`)
                    await page.locator('.Author').fill('Test-dude')
                    await page.locator('.Url').fill('http://www.example.com')
                    await page.getByRole('button', { name: 'create' }).click()
                    // Reloads page so new blog is added to the list ready to like
                    page.reload()
                    await page.getByText(`Testing blog ${i}...`).getByRole('Button', { name: 'View' }).click()
                    let likes = 0;
                    // Iteratively likes the blog a set number of times.
                    while (likes !== i) {
                        await page.getByRole('Button', { name: 'like' }).click()
                        likes++
                    }
                }
                // reloads page to ensure sorting takes place correctly. 
                page.reload()
                // gets all of the blogs in an array in order of rendering
                const blogs = await page.getByText('Testing blog').all()
                console.log(blogs)
                let likes = 25;
                let i = 0;
                // Iterates through each of 25 blogs to check they have the correct number of likes (in order)
                while (likes >= 0) {
                    await blogs[i].getByRole('Button', 'View');
                    // like in this case accounts for the like button to ensure the checking is strict (i.e likes: 2 doesn't match with likes: 25)
                    expect(page.getByText(`likes: ${likes}like`)).toBeVisible()
                    await blogs[i].getByRole('Button', 'Hide').click()
                    likes--
                    i++
                }
            })
    })
})