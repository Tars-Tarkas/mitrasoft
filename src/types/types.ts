export type initialStateType = {
  posts: PostsType[];
  comments: CommentsType[];
  users: UsersType[];
  loadingPosts: boolean;
  loadingComments: boolean;
  loadingUsers: boolean;
  error: boolean;
};

export type PostsType = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

export type CommentsType = {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
};

export type UsersType = {
  id: number;
  name: string;
  username: string;
  email: string;
};
