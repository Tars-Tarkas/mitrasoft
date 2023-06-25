export type initialStateType = {
  posts: PostsType[];
  comments: CommentsType[];
  users: UsersType[];
  query: PostsType[];
  userComments: [];
  loadingPosts: boolean;
  loadingComments: boolean;
  loadingUsers: boolean;
  loadingUserCommets: boolean;
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
  address: AddressType;
  phone: string;
  company: CompanyType;
};

export type AddressType = {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: GeoType;
};

export type GeoType = {
  lat: string;
  lng: string;
};
export type CompanyType = {
  name: string;
  catchPhrase: string;
  bs: string;
};
