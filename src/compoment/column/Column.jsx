import React from "react";
import styleCol from "./column.module.css";
import DelImg from "./../../assets/del.png";

function Column({ listesTaches, setListesTaches }) {
  // Filtrer les tâches par statut
  const filterByStatu = (statu) =>
    listesTaches.filter((task) => task.statu === statu);

  // Supprimer une tâche
  const deleteTask = (id) => {
    setListesTaches(listesTaches.filter((task) => task.id !== id));
  };

  const changeStatus = (id, newStatus) => {
    setListesTaches(
      listesTaches.map((task) =>
        task.id === id ? { ...task, statu: newStatus } : task
      )
    );
  };
  
  // Créer une colonne pour un statut
  const renderColumn = (title, statu) => (
    <div className={styleCol.column}>
      <div className={styleCol.title}>
        <h2>{title}</h2>
      </div>
      <div>
        {filterByStatu(statu).length === 0 && <p>Aucune tâche</p>}

        {filterByStatu(statu).map((task) => (
          <div className={styleCol.tashe} key={task.id}>
            <span></span>
            <p>{task.titre}</p>
            <div className={styleCol.buttons}>
              {statu !== "todo" && (
                <button onClick={() => changeStatus(task.id, "todo")}>Todo</button>
              )}
              {statu !== "doing" && (
                <button onClick={() => changeStatus(task.id, "doing")}>Doing</button>
              )}
              {statu !== "done" && (
                <button onClick={() => changeStatus(task.id, "done")}>Done</button>
              )}
              <button onClick={() => deleteTask(task.id)}>
                <img src={DelImg} alt="Supprimer" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div>
      <div className={styleCol.contentColumns}>
        {renderColumn("Todo", "todo")}
        {renderColumn("En cours", "doing")}
        {renderColumn("Accomplis", "done")}
      </div>
    </div>
  );
}

export default Column;