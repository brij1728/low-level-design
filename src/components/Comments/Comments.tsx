import { Comment } from '../../types/commentType';
import { CommentBox } from './CommentBox';
import React from 'react';
import { commentsData } from '../../data/comment'; // Assuming `commentsData` is an array of comments

export const Comments: React.FC = () => {
  return (
    <div className='p-4'>
      {commentsData.map((comment: Comment) => (
        <CommentBox key={comment.id} comment={comment} />
      ))}
    </div>
  );
};
