import "./Nav.css"
import React from "react"
import Search from "../Search/Search"
import { useLocation } from "react-router-dom"


function Nav({handleNewsSearch}) {
  const location = useLocation()
  const {pathname} = location
  const renderSearch = !pathname.includes("article")

  return (
    <nav>
      <header>
      <h1>Pulse News</h1>
      </header>
      <section className="search-container">
       {renderSearch && <Search handleNewsSearch={handleNewsSearch}/>}
      </section>
    </nav>
  )
}

export default Nav