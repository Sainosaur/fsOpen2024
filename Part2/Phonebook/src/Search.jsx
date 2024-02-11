import {useState} from 'react'
import Person from './Person'

const Search = ({persons, setPersons, setMessage}) => {
    const [search, setSearch] = useState('')
    const updateSearch = (event) => {
      setSearch(event.target.value)
    }
    const searchResults = (Arr) => {
        return (
          <>
            {Arr.map(person => <Person key={person.name} person={person} persons={persons} setPersons={setPersons} setMessage={setMessage}/>)}
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