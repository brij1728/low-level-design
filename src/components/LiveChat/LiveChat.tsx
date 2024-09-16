import { ChatWindow } from './ChatWindow'
import React from 'react'
import { VideoStream } from './VideoStream'

export const LiveChat = () => {
  return (
    <div className="flex flex-col lg:flex-row lg:space-x-4 m-5">
      <div className="lg:w-2/3 w-full">
        <VideoStream />
      </div>

      <div className="lg:w-1/3 w-full mt-5 mr-4 lg:mt-0">
        <ChatWindow />
      </div>
    </div>
  )
}