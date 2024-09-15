// import { CommentsList } from "../types/commentType";


// export const commentsData: CommentsList = {
//   commentList: [
//     {
//       id: 1,
//       userName: "John Doe",
//       content: "Hello, this is a sample comment!",
//       replies: [
//         {
//           id: 2,
//           userName: "Jane Smith",
//           content: "Thank you for the feedback!",
//           replies: [
//             {
//               id: 3,
//               userName: "Alice Johnson",
//               content: "I agree with Jane, great point!",
//               replies: []
//             },
//             {
//               id: 4,
//               userName: "Bob Lee",
//               content: "This is a follow-up reply.",
//               replies: []
//             }
//           ]
//         }
//       ]
//     },
//     {
//       id: 5,
//       userName: "Michael Brown",
//       content: "This is another top-level comment.",
//       replies: [
//         {
//           id: 6,
//           userName: "Sarah Davis",
//           content: "Nice comment, Michael!",
//           replies: [
//             {
//               id: 7,
//               userName: "Chris White",
//               content: "I second Sarah's comment!",
//               replies: []
//             }
//           ]
//         }
//       ]
//     },
//     {
//       id: 8,
//       userName: "Emily Clark",
//       content: "Interesting discussion going on here!",
//       replies: []
//     }
//   ]
// };

import { Comment } from '../types/commentType';

export const commentsData: Comment[] = [
  {
    id: 1,
    userName: "John Doe",
    content: "This is a top-level comment!",
    replies: [
      {
        id: 2,
        userName: "Jane Smith",
        content: "This is a reply to the top-level comment.",
        replies: [
          {
            id: 3,
            userName: "Alice Johnson",
            content: "This is a nested reply.",
            replies: []
          }
        ]
      }
    ]
  },
  {
    id: 4,
    userName: "Michael Brown",
    content: "Another top-level comment.",
    replies: [
      {
        id: 5,
        userName: "Sarah Davis",
        content: "This is a reply to the second top-level comment.",
        replies: []
      }
    ]
  },
  {
    id: 6,
    userName: "Emily Clark",
    content: "Interesting discussion going on here!",
    replies: []
  }
];
