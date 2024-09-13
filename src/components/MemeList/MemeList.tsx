import React, { useEffect, useState } from 'react';

import { MemeCard } from '../MemeCard';
import { MemeCardShimmer } from '../MemeCardShimmer';
import axios from 'axios';

interface Meme {
  id: string;
  name: string;
  url: string;
}

export const MemeList: React.FC = () => {
  const [memes, setMemes] = useState<Meme[]>([]);
  const [loading, setLoading] = useState(true);

  // Fetch meme data
  const fetchMemes = async () => {
    try {
      const response = await axios.get('https://api.imgflip.com/get_memes');
      const memes = response.data.data.memes;
      setMemes(memes);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching memes:', error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMemes();
  }, []);

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
            <MemeCard key={meme.id} id={meme.id} name={meme.name} url={meme.url} />
          ))}
        </div>
      ) : (
        <p className="text-gray-600 text-center">No memes found</p>
      )}
    </div>
  );
};
