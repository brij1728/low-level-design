import { Comment } from '../../types/commentType';
import { FaUser } from 'react-icons/fa';
import React from 'react';

interface CommentBoxProps {
  comment: Comment;
}

export const CommentBox: React.FC<CommentBoxProps> = ({ comment }) => {
  const { id, userName, content, replies } = comment;

  return (
    <div key={id} className=' pl-4 flex flex-col gap-2 relative border-l-2'>
	<div className='flex'>
      <div className='flex items-center gap-2'>
        <FaUser />
        <h2 className='font-semibold'>{userName}</h2>
      </div>
      <p className='ml-8'>{content}</p>
	  </div>
      {replies.length > 0 && (
        <div className='ml-8 pl-4'>
          {replies.map((reply) => (
            <CommentBox key={reply.id} comment={reply} />
          ))}
        </div>
      )}
    </div>
  );
};
