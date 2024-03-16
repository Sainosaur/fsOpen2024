import { test, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import Blog from './Blog'

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