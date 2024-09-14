import React, { useEffect, useState } from 'react';

import { MemeCard } from '../MemeCard';
import { MemeCardShimmer } from '../MemeCardShimmer';
import axios from 'axios';

interface Meme {
  id: string;
  title: string;
  url: string;
}

export const MemeList: React.FC = () => {
  const [memes, setMemes] = useState<Meme[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchMemes();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Fetch meme data
  const fetchMemes = async () => {
    try {
      setLoading(true);
      const response = await axios.get('https://meme-api.com/gimme/20');
      const memes = response.data.memes;
      console.log('Fetched memes:', memes);
      setLoading(false);
      setMemes((currentMemes) => [...currentMemes, ...memes]);
    } catch (error) {
      console.error('Error fetching memes:', error);
      setLoading(false);
    }
  };

  

  // Infinite scrolling
  const handleScroll = () => {
    // Fetch more memes when user reaches the bottom of the page
    // innerHeight - Height of the browser window
    // scrollY - Current scroll position
    // scrollHeight - Height of the entire page
    if (
      window.innerHeight + window.scrollY >= document.body.scrollHeight){
      console.log('Fetching more memes...');
       fetchMemes();
      }
     
   
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      {loading ? (
        // Render shimmer cards while data is loading
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          <MemeCardShimmer />
        </div>
      ) : memes.length > 0 ? (
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {memes.map((meme) => (
            <MemeCard key={meme.id} id={meme.id} name={meme.title} url={meme.url} />
          ))}
        </div>
      ) : (
        <p className="text-gray-600 text-center">No memes found</p>
      )}
    </div>
  );
};
