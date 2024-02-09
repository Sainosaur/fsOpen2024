import {useState} from 'react'

const Search = ({persons}) => {
    const [search, setSearch] = useState('')
    const updateSearch = (event) => {
      setSearch(event.target.value)
    }
    const searchResults = (Arr) => {
        return (
          <>
            {Arr.map(person => <p key={person.name}> {person.name} {person.number}</p>)}
          </>
        )
      }
    return (
        <>
        <div>
        Search: <input value={search} onChange={updateSearch}/>
        </div>
        <div>
        {searchResults(persons.filter(person => person.name.toUpperCase().includes(search.toUpperCase())))}
      </div>
      </>
    )
}

export default Search