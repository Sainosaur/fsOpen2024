import { useQuery } from '@apollo/client'
import { GET_BOOKS } from '../queries'
import { useState } from 'react'

const Books = (props) => {
  const result = useQuery(GET_BOOKS)
  const [filter, setFilter]  = useState('')
  if (result.loading) {
    return (
      <h1> Loading... </h1>
    )
  }
  const books = result.data.allBooks
  const renderedBooks = books.filter(book => {
    if (filter !== '') {
      return book.genres.includes(filter)
    } else {
      return true
    }

    })
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
