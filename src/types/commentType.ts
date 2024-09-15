export interface Comment {
  id: number;
  userName: string;
  content: string;
  replies: Comment[]; 
}



export interface CommentsList {
  commentList: Comment[]; 
}