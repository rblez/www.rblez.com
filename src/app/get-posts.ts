import postsData from "./posts.json";

export type Post = {
  id: string;
  date: string;
  title: string;
  views?: number;
  viewsFormatted?: string;
};

export const getPosts = async (): Promise<Post[]> => {
  const posts = postsData.posts.map((post): Post => ({
    ...post,
    views: 0,
    viewsFormatted: "0",
  }));

  return posts;
};
