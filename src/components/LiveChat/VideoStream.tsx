import React from 'react';

export const VideoStream = () => {
  return (
    <div className="">
      <iframe
        className="w-full h-[300px] lg:h-[600px]"
        src="https://www.youtube.com/embed/4xDzrJKXOOY?si=GC4yRwBjKDaji8Jm"
        title="YouTube video player"
        allow="autoplay; encrypted-media; picture-in-picture"
        sandbox="allow-scripts allow-same-origin allow-popups allow-presentation"
      ></iframe>
    </div>
  );
};
