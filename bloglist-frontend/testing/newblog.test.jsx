import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import NewBlog from '../src/components/NewBlog'

test('Creating a new Blog works effectively', async () => {
    const testUser = {
        name: 'Test',
        id: '000000',
    }
    const testToggle ={
        current: {
            toggleVisibility: 'Fake Toggle For Testing purposes'
        }
    }
    const tstAddBlog = vi.fn()
    const usr = userEvent.setup()
    const container = render(<NewBlog user={testUser} addBlog={tstAddBlog} selfToggle={testToggle} />).container
    const crtButton = screen.getByText('create')
    const titleField = container.querySelector('.Title')
    const authorField = container.querySelector('.Author')
    const urlField = container.querySelector('.Url')
    await usr.type(titleField, 'Test title')
    await usr.type(authorField, 'Test author')
    await usr.type(urlField, 'Test url')
    await usr.click(crtButton)

    expect(tstAddBlog.mock.calls).toHaveLength(1)
})
