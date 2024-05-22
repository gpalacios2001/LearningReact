import { useState } from 'react'
import Note from './components/Note'

const Form = (props) => {
  return (
    <form onSubmit={props.addName}>      
        <div>
          name: <input
          value = {props.newName}
          onChange = {props.handleNameChange}/>
        </div>
        <div>
          number: <input 
          value = {props.newNumber}
          onChange = {props.handleNumberChange}/>
          </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
  )

}
const Person = ({person}) => {
  console.log(person.name, "y")
  return (
    <li>{person.name} {person.number}</li>
  )
}

const People = ({persons}) => {
  console.log(persons, "w")
  return (
    <div>
      {persons.map(person => 
      <Person key={person.id} person={person} />
    )}

    </div>
    
  )
  
}

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')


  const addName = (event) => {
    if (persons.map(person => 
      person.name).includes(newName)) {
      alert(`${newName} is already added to phonebook`)
    }
    else {
      event.preventDefault()
    const personObject = {
      name: newName,
      id: persons.length + 1,
      number: newNumber
    }
    setPersons(persons.concat(personObject))
    setNewName('')
    setNewNumber('')
    }
  }

    const handleNameChange = (event) => {
      setNewName(event.target.value)
    }
    const handleNumberChange = (event) => {
      setNewNumber(event.target.value)
    }

  return (
    <div>
      <h2>Phonebook</h2>
      <Form addName = {addName} newName = {newName}
      handleNameChange = {handleNameChange} newNumber = {newNumber}
      handleNumberChange = {handleNumberChange}></Form>
      <h2>Numbers</h2>
      <People persons={persons}></People>
      
      
      
    </div>
  )
}

export default App