import { useState } from 'react'
import api from './assets/Lookup'
import { useEffect } from 'react'

const Results = ({search, countryList}) => {
  let searchRslt = []
  console.log(countryList)
  for (elem in countryList) {
    if (country.includes(search)){
      searchRslt.push(country)
    }
  }
  for (elem in searchRslt) {
    <>
      <p>{searchRslt[elem]}</p>
    </>
  }
}

const App = () => {
  const [countryList, setCountryList] = useState([])
  const [country, setCountry] = useState('')
  const editCountry = (event) => {setCountry(event.target.value)}
  const hook = () => {
    api.nameData().then(resp => {
      let newArr = resp.data
      let processedArr = []
      for (let elem in newArr) {
        processedArr[elem] = newArr[elem].name.common
      }
      setCountryList(processedArr)
    })
  }
  useEffect(hook, [])
  return (
    <>
    <p>find countries: <input value={country} onChange={event => editCountry(event)}></input></p>
    <Results search={country} countryLists={countryList} />
    </>
  )
}

export default App
