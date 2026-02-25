import React, { useState } from 'react'
import styleForm from './fromadd.module.css'

function FormAddTask({AddTaches}) {
  
  const [tacheSaisi, setTacheSaisi] = useState('')
  

  const recuperviaInput = (e) =>{
    setTacheSaisi(e.target.value)   
  }

  // const recuperviaBut =()=>{
  //   console.log(tacheSaisi);
  // }


  const envoieTache = (e) =>{
    e.preventDefault();

    if (tacheSaisi.trim() !=="") {      
      AddTaches(tacheSaisi);
      setTacheSaisi('')
    }
    
  }
  return (
    <div>
        <div className={styleForm.contentForm}>
            <h3>Formulaire d'ajout de Tâche</h3>
            <form action="" onSubmit={envoieTache}>
                <input onChange={ recuperviaInput} type="text" name="" id="" placeholder='Rendre votre tache ici' value={tacheSaisi}/>
                <button className={styleForm.buttonInput} type="submit">+ Ajouter</button>
            </form>
        </div>
    </div>
  )
}

export default FormAddTask;