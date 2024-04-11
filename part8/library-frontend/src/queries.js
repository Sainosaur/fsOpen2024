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
        author {
            name
        }
        published
        genres
    }
}
`
export const GET_GENRE_BOOKS = gql`
query GenreBooks($Genre: String!) {
    allBooks(genre: $Genre) {
        title
        author {
            name
        }
        published
    }
}
`

export const GET_GENRE = gql`
query {
    me {
        favouriteGenre
    }
}
`

export const CREATE_BOOK = gql`
mutation CreateBook($Title: String!, $Author: String!, $Published: Int!, $Genres: [String]!) {
    addBook(title: $Title, author: $Author, published: $Published, genres: $Genres) {
        title
        author {
            name
        }
        published
        genres
    }
}
`

export const EDIT_AUTHOR = gql`
mutation EditAuthor($Name: String!, $SetBornYear:Int!) {
    editAuthor(name: $Name, setBornYear: $SetBornYear) {
        name
        born
    }
}
`
export const LOGIN = gql`
mutation($username: String!, $password: String!) {
    login(username: $username, password: $password) {
      value
    }
  }
`