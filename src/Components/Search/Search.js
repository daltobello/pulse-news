// Search.js
import "./Search.css";
import { useState, useEffect } from "react"
import PropTypes from "prop-types"

function Search({ handleNewsSearch }) {
  const [query, setQuery] = useState("")
  const [queryEntered, setQueryEntered] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault();
    if (queryEntered) {
      handleNewsSearch(query)
    }
    setQueryEntered(false)
  };

  const clearInput = () => {
    setQuery("");
    setQueryEntered(false)
    handleNewsSearch("")
  };

  const handleInputChange = (e) => {
    setQuery(e.target.value)
    setQueryEntered(true)
  }

  useEffect(() => {
    if (!query) {
      handleNewsSearch(query)
    }
  }, [query, handleNewsSearch])

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="search"
        placeholder="Search..."
        name="search"
        value={query}
        onChange={handleInputChange}
      />
      {query && (
        <>
          <button type="submit" className="submit-btn">Submit</button>
          <button type="button" className="clear-btn" onClick={clearInput}>Clear</button>
        </>
      )}
    </form>
  );
}

export default Search;

Search.propTypes = { 
  handleNewsSearch: PropTypes.func.isRequired,
}