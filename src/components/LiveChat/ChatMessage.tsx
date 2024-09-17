import { ChatType } from '../../types/chatType';
import React from 'react';

export const ChatMessage: React.FC<ChatType> = ({
	id,
	name,
	userAvatar,
	message,

}) => {
  return (
	<div >
		<div className="flex items-center space-x-2 p-2" key={id}>
			<img
				className="w-5 h-5 rounded-full
				"
				src={userAvatar
				}
				alt={name}
			/>
			<p className='p-2'>
				<span className="font-semibold">{name} </span>
				<span className="text-sm text-gray-500">{message}</span>
			</p>
			
		</div>

	</div>
  )
}
