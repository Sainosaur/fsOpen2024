import { useQuery } from '@apollo/client'
import { GET_BOOKS, GET_GENRE_BOOKS } from '../queries'
import { useState } from 'react'

const Books = (props) => {
  const result = useQuery(GET_BOOKS)
  const [filter, setFilter]  = useState('')
  const filteredResult = useQuery(GET_GENRE_BOOKS, {
    variables: {
        Genre: filter
    }
})
  if (result.loading || filteredResult.loading) {
    return (
      <h1> Loading... </h1>
    )
  }
  const books = result.data.allBooks
  const filteredBooks = filteredResult.data.allBooks
  const renderedBooks = filter === '' ? books : filteredBooks
  const allGenres = [].concat(...books.map(book => book.genres)).filter((genre, index, array) => array.indexOf(genre) === index)
  return (
    <div>
      <h2>books</h2>

      <table>
        <tbody>
          <tr>
            <th></th>
            <th>author</th>
            <th>published</th>
          </tr>
          {renderedBooks.map((a) => (
            <tr key={a.title}>
              <td>{a.title}</td>
              <td>{a.author.name}</td>
              <td>{a.published}</td>
            </tr>
          ))}
        </tbody>
      </table>
      {allGenres.map(genre => <button onClick={() => setFilter(genre)}>{genre}</button>)}
      <button onClick={() => setFilter('')}>All Genres</button>
    </div>
  )
}

export default Books
