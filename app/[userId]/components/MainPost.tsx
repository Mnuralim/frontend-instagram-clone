import { useSearchParams } from 'next/navigation';
import React from 'react';
import PostProfile from './PostProfile';
import ReelProfile from './ReelProfile';
import TaggedProfile from './TaggedProfile';
import EditProfile from './EditProfile';

interface Props {
  posts: IPost[];
}

const MainPost = ({ posts }: Props) => {
  const searchParams = useSearchParams();

  return (
    <div>
      {searchParams?.get('tab') === 'post' && <PostProfile posts={posts} />}
      {searchParams?.get('tab') === 'reels' && <ReelProfile posts={posts} />}
      {searchParams?.get('tab') === 'tagged' && <TaggedProfile />}
      {searchParams?.get('tab') === 'edit' && <EditProfile />}
    </div>
  );
};

export default MainPost;
