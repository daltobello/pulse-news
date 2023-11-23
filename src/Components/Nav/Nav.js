import "./Nav.css"
import Search from "../Search/Search"

function Nav({handleNewsSearch}) {

  return (
    <nav>
      <header>
      <h1>Pulse News</h1>
      </header>
      <div>
        <Search handleNewsSearch={handleNewsSearch}/>
      </div>
    </nav>
  )
}

export default Nav