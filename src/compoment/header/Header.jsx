import React from 'react'
import styleHeader from "./header.module.css"

function Header() {
  return (
    <div className={styleHeader.contentHeader}>
        <div className={styleHeader.infHeader} >
            <h2>AM-Kanban</h2>
            <i>Application de gestion de tachê pro</i>
        </div>
        <code>V-A.00.1</code>
    </div>
  )
}

export default Header