import { useQuery, useMutation } from '@apollo/client'
import { GET_AUTHORS, EDIT_AUTHOR } from '../queries'
import { useState } from 'react'
import Select from 'react-select'

const Authors = (props) => {
  const [selectedName, setSelectedName ] = useState({value: null, label: null})
  const [year, setYear] = useState('')
  
  const [ EditAuthor ] = useMutation(EDIT_AUTHOR,  {
    variables: {
      Name: selectedName.value,
      SetBornYear: Number(year)
    }, refetchQueries: [ {query: GET_AUTHORS}]
  })
  const result = useQuery(GET_AUTHORS)
  const submit = async (event) => {
    event.preventDefault()
    EditAuthor()
  }
  if (result.loading) {
    return (
      <div>
        <h1>Loading...</h1>
      </div>
    )
  }
  const authors = result.data.allAuthors
  const options = authors.map(author => {
    return { value: author.name, label: author.name }
  })

  return (
    <div>
      <h2>authors</h2>
      <table>
        <tbody>
          <tr>
            <th></th>
            <th>born</th>
            <th>books</th>
          </tr>
          {authors.map((a) => (
            <tr key={a.name}>
              <td>{a.name}</td>
              <td>{a.born}</td>
              <td>{a.bookCount}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <h2>Set birthyear </h2>
      <form onSubmit={(event) => submit(event)}>
        <p>Name: </p> <Select defaultValue={selectedName} onChange={setSelectedName} options={options} />
        <p>Year: <input type='number' value={year} onChange={(event) => setYear(event.target.value)} /></p>
        <button type='submit' >Submit</button>
      </form>
    </div>
  )
}

export default Authors
