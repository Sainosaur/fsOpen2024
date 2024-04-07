import { gql } from '@apollo/client'

export const GET_AUTHORS = gql`
query {
    allAuthors {
        name
        born
        bookCount
    }
}
`

export const GET_BOOKS = gql`
query {
    allBooks {
        title
        author
        published
    }
}
`

export const CREATE_BOOK = gql`
mutation CreateBook($Title: String!, $Author: String!, $Published: Int!, $Genres: [String]!) {
    addBook(title: $Title, author: $Author, published: $Published, genres: $Genres) {
        title
        author
        published
        genres
    }
}
`