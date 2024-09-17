import React, { ChangeEvent, useEffect, useState } from 'react';

export const SearchUI = () => {
  const [searchText, setSearchText] = useState('');
  const [searchResults, setSearchResults] = useState<string[]>([]);
  const [isResultsVisible, setIsResultsVisible] = useState(false);

  // Fetch data when searchText changes with debounce
  const fetchData = async () => {
    if (searchText.trim()) {
      try {
        const response = await fetch(
          `https://www.google.com/complete/search?client=firefox&q=${searchText}`
        );
        const data = await response.json();
        console.log(data);
        setSearchResults(data[1] || []); // Assuming search results are in data[1]
      } catch (error) {
        console.error('Error fetching search data:', error);
      }
    } else {
      setSearchResults([]); // Clear results when the searchText is empty
    }
  };

  // Debounce API call on searchText change
  useEffect(() => {
    const handler = setTimeout(() => {
      fetchData();
    }, 500); 

    return () => {
      clearTimeout(handler); // Clear timeout on unmount or before the next call
    };
  }, [searchText]);

  // Handle input change
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchText(e.target.value);
    setIsResultsVisible(true);
  };

  return (
    <div className='m-10 relative'>
      <input
        type='text'
        placeholder='Search...'
        className='p-2 w-96 border border-gray-300 rounded-lg'
        value={searchText}
        onChange={handleChange}
        onFocus={() => setIsResultsVisible(true)}
        onBlur={() => setTimeout(() => setIsResultsVisible(false), 100)} // Delay to allow clicking results
      />

      {isResultsVisible && searchResults.length > 0 && (
        <ul className='absolute top-12 w-96 bg-white shadow-lg border border-gray-200'>
          {searchResults.map((result, index) => (
            <li
              key={index}
              className='p-2 hover:bg-gray-200 cursor-pointer rounded-lg'
              onClick={() => setSearchText(result)}
            >
              {result}
            </li>
          ))}
        </ul>
      )}

      {isResultsVisible && searchResults.length === 0 && searchText && (
        <ul className='absolute top-12 w-96 bg-white shadow-lg border border-gray-200'>
          <li className='p-2 text-gray-500'>No results found</li>
        </ul>
      )}
    </div>
  );
};
