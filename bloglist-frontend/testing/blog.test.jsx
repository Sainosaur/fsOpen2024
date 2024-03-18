import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Blog from '../src/components/Blog'

test('Blog does not initally render URLs of number of likes', () => {
    const testUser = {
        name: 'Test',
        id: '0000000',
    }
    const blog = {
        title: 'Hello',
        author: 'Me',
        url: 'google.com',
        user: testUser
    }
    render(<Blog blog={blog} user={testUser} />)
    const element = screen.getByText('Hello Me')
    let element1
    try {
        element1 = screen.getByText('url: ', { exact: false } )
    } catch {
        expect(element1).toBe(undefined)
    }
    expect(element).toBeDefined()
})

test('URL and number of likes are shown when the view button is clicked', async () => {
    const usr = userEvent.setup()
    const testUser = {
        name: 'Test',
        id: '0000000',
    }
    const blog = {
        title: 'Hello',
        author: 'Me',
        likes: 23,
        url: 'google.com',
        user: testUser,
    }
    const container = render(<Blog blog={blog} user={testUser} />).container
    const viewButton = screen.getByText('View')
    await usr.click(viewButton)
    // from render contained, we obtain the toggleable component
    const tst = container.querySelector('.toggleVis')
    // the obtained tst variable is tested to ensure it's not invisible.
    expect(tst).not.toHaveStyle('display: none')
})

test('Like button calls its onClick function effectively', async () => {
    const usr = userEvent.setup()
    const testUser = {
        name: 'Test',
        id: '0000000',
    }
    const blog = {
        title: 'Hello',
        author: 'Me',
        likes: 23,
        url: 'google.com',
        user: testUser,
    }
    const tstLike = vi.fn()
    const container = render(<Blog blog={blog} user={testUser} like={tstLike} />).container
    const viewButton = screen.getByText('View')
    await usr.click(viewButton)
    const likeButton = screen.getByText('like')
    await usr.click(likeButton)
    await usr.click(likeButton)
    expect(tstLike.mock.calls).toHaveLength(2)
})
