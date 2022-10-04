import React, {useState} from 'react'

const Search = ({setSearchSubmit}) => {
  const [search, setSearch] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    setSearchSubmit(search);
    setSearch("");
  }

  return (
    <form className="searchbar" onSubmit={handleSubmit}>
      <label htmlFor="search">Search Recipes:</label>
      <input
        type="text"
        id="search"
        placeholder="Type a keyword to search..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <button type="submit">🔍</button>
    </form>
  )
}

export default Search