interface IUser {
  _id: string;
  username: string;
  email: string;
  following: [string];
  totalFollowing: number;
  totalPost: number;
  createdAt: Date;
  updatedAt: Date;
  follower: [string];
  totalFollower: number;
  profile: {
    imageProfile: string;
    bio: string;
    link: string;
    fullName: string;
  };
  alreadyFollow: boolean;
}

interface IReplies {
  text: string;
  user: {
    _id: string;
    profile: {
      fullName: string;
      imageProfile: string;
      bio: string;
      link: string;
    };
    username: string;
  };
  _id: string;
  createdAt: Date;
}

interface IComment {
  _id: string;
  text: string;
  post: IPost;
  user: {
    _id: string;
    profile: {
      fullName: string;
      imageProfile: string;
      bio: string;
      link: string;
    };
    username: string;
  };
  replies: [IReplies] | [{}];
  createdAt: Date;
}

interface IPost {
  _id: string;
  userId: {
    _id: string;
    profile: {
      fullName: string;
      imageProfile: string;
      bio: string;
      link: string;
    };
    username: string;
  };
  caption: string;
  media: string;
  likedBy: [string];
  totalLike: number;
  totalComment: number;
  type: string;
  alreadyLike: boolean;
  createdAt: Date;
  updatedAt: Date;
}

interface IHistory {
  _id: string;
  userId: {
    profile: {
      imageProfile: string;
      bio: string;
      fullName: string;
      link: string;
    };
    _id: string;
    username: string;
  };
  savedUser: {
    profile: {
      imageProfile: string;
      bio: string;
      fullName: string;
      link: string;
    };
    _id: string;
    username: string;
  };
  createdAt: Date;
  updatedAt: Date;
}

interface ILikes {
  _id: string;
  profile: {
    imageProfile: string;
    bio: string;
    link: string;
    fullName: string;
  };
  username: string;
  follower: [string];
  alreadyFollow: boolean;
}
