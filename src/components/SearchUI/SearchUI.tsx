import React, { ChangeEvent, useEffect, useState } from 'react';

// const URL = 'https://www.google.com/complete/search?client=firefox&q=';
// const URL = 'https://api.themoviedb.org/3/search/movie';
const URL = 'https://en.wikipedia.org/w/api.php?action=opensearch&format=json&origin=*&search=';

export const SearchUI = () => {
  const [searchText, setSearchText] = useState('');
  const [searchResults, setSearchResults] = useState<string[]>([]);
  const [isResultsVisible, setIsResultsVisible] = useState(false);
  const [cache, setCache] = useState<{ [key: string]: string[] }>({});

  // Fetch data when searchText changes with debounce
  const fetchData = async () => {
    // If cache has the data, return the data from cache
    if (cache[searchText]) {
      setSearchResults(cache[searchText]);
    } else {
      try {
        const response = await fetch(
          `${URL}${searchText}`
        );
        const data = await response.json();
        console.log(data);
        setSearchResults(data[1] || []); // Assuming search results are in data[1]

        // Cache the results using a functional update to ensure consistency
        setCache((prevCache) => ({
          ...prevCache,
          [searchText]: data[1] || [],
        }));
      } catch (error) {
        console.error('Error fetching search data:', error);
      }
    }
  };

  // Debounce API call on searchText change
  useEffect(() => {
    const handler = setTimeout(() => {
      if (searchText.trim()) {
        fetchData();
      } else {
        setSearchResults([]); // Clear results when search text is empty
      }
    }, 500); // Debounce for 500ms

    return () => {
      clearTimeout(handler); // Clear timeout on unmount or before the next call
    };
  }, [searchText]);

  // Handle input change
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchText(e.target.value);
    setIsResultsVisible(true);
  };

  // Prevent the search results from disappearing when clicking on a result
  const handleResultClick = (result: string) => {
    setSearchText(result);
    setIsResultsVisible(false); // Hide the results after selecting one
  };

  return (
    <div className="max-w-lg mx-auto my-10">
      <h1 className="text-2xl font-bold pb-4 text-gray-800 text-center">Search for Wikipedia Articles</h1>
      <div className="relative">
        <input
          type="text"
          placeholder="Search..."
          className="p-3 w-full border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-200"
          value={searchText}
          onChange={handleChange}
          onFocus={() => setIsResultsVisible(true)}
          onBlur={() => setTimeout(() => setIsResultsVisible(false), 100)} // Delay to allow clicking results
        />

        {isResultsVisible && searchResults.length > 0 && (
          <ul className="absolute top-full mt-2 w-full bg-white shadow-lg border border-gray-200 z-10 max-h-64 overflow-y-auto rounded-lg">
            {searchResults.map((result, index) => (
              <li
                key={index}
                className="p-2 hover:bg-gray-100 cursor-pointer"
                onMouseDown={() => handleResultClick(result)} // onMouseDown to prevent blur issue
              >
                {result}
              </li>
            ))}
          </ul>
        )}

        {isResultsVisible && searchResults.length === 0 && searchText && (
          <ul className="absolute top-full mt-2 w-full bg-white shadow-lg border border-gray-200 z-10 rounded-lg">
            <li className="p-2 text-gray-500">No results found</li>
          </ul>
        )}
      </div>
    </div>
  );
};
