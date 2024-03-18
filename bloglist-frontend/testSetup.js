import { afterEach, beforeEach } from 'vitest'
import { cleanup } from '@testing-library/react'
import '@testing-library/jest-dom/vitest'

beforeEach(() => {
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
})
afterEach(() => {
    cleanup()
})