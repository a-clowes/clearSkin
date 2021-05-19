import React from 'react';

const SearchBar = () => {
  // const [query, setQuery] = useState('');

  const handleSearchBarChange = (e) => {
    setQuery(e.target.value);
  };

  // useEffect(() => {
  //   setRenderedQuestions(questions.filter((quest) => (
  //     quest.question_body.toLowerCase().includes(query.toLowerCase()))));
  // }, [query]);

  return (
    <div
      id="searchContainer"
    >
      <form id="searchForm">
        <label className="visually-hidden">
          Search for products
        </label>
        <input
          id="searchQuery"
          type="text"
          // value={query}
          onChange={handleSearchBarChange}
          placeholder="Search Products"
        />
        <i
          className="fas fa-search"
          id="searchAddIcon"
        />
      </form>
    </div>
  );
};

export default SearchBar;