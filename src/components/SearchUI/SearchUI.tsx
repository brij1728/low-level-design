import React, { ChangeEvent, useEffect, useState } from 'react';

export const SearchUI = () => {
  const [searchText, setSearchText] = useState('');
  const [searchResults, setSearchResults] = useState<string[]>([]);
  const [debouncedText, setDebouncedText] = useState(searchText);

  // Debounce function to delay API calls when typing
  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedText(searchText);
    }, 500); 
    return () => {
      clearTimeout(handler);
    };
  }, [searchText]);

  // Fetch data when the debounced search text changes
  const fetchData = async () => {
    if (debouncedText) {
      try {
        const response = await fetch(
          `https://www.google.com/complete/search?client=firefox&q=${debouncedText}`
        );
        const data = await response.json();
        console.log(data);
        setSearchResults(data[1]); 
      } catch (error) {
        console.error('Error fetching search data:', error);
      }
    }
  };

  useEffect(() => {
    fetchData();
  }, [debouncedText]);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchText(e.target.value);
  };

  return (
    <div className='m-10'>
      <input
        type='text'
        placeholder='Search...'
        className='p-2 w-96 border border-gray-300 rounded-lg'
        value={searchText}
        onChange={handleChange}
      />
      <ul className='flex flex-col border border-black'>
        {searchResults.length > 0 ? (
          searchResults.map((result, index) => (
            <li key={index} className='p-2 border border-gray-300 rounded-lg m-2'>
              {result}
            </li>
          ))
        ) : (
          <li className='p-2 border border-gray-300 rounded-lg m-2'>No results found</li>
        )}
      </ul>
    </div>
  );
};
