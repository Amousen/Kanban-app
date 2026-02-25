import React, { useState } from 'react'
import Header from "./header/Header"
import FormAddTask from "./form/formAddTask.jsx"
import Column from "./column/Column.jsx"

function KanbanBoard() {

  const [listesTaches, setListesTaches] = useState([])

  const AddTaches = (titre) => {

    const newTaches = {
      id: Date.now(),
      titre: titre,
      statu: 'todo',
    }
    setListesTaches((prevTaches) => [...prevTaches, newTaches])
  }

  return (
    <div>
      <Header />
      <FormAddTask AddTaches={AddTaches} />
      <Column listesTaches={listesTaches}   setListesTaches={setListesTaches}  />
    </div>
  )
}

export default KanbanBoard