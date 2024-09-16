import React from 'react'

export const VideoStream = () => {
  return (
    <div className="">
      <iframe
        className="w-full h-[300px] lg:h-[600px]"
        src="https://www.youtube.com/embed/4xDzrJKXOOY?si=GC4yRwBjKDaji8Jm"
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>
    </div>
  )
}