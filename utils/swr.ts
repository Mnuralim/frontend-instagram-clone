import useSWR from "swr";
import { fetcher } from "./fetcher";

interface IUserQuery {
  suggestion?: string;
  username?: string;
}

interface IPostQuery {
  author?: string;
  limit?: string;
}

export const useUser = (token: string, id?: string, query?: IUserQuery) => {
  let usernameQuery = "";
  let suggestionQuery = "";
  if (query?.username) {
    usernameQuery = query.username;
  }
  if (query?.suggestion) {
    suggestionQuery = query.suggestion;
  }

  const { data, isLoading, mutate } = useSWR(token ? (id ? [`${process.env.API_URL}/users/${id}`, token] : [`${process.env.API_URL}/users/?suggestion=${suggestionQuery}&username=${usernameQuery}`, token]) : null, ([url, token]) =>
    fetcher(url, token)
  );
  return {
    user: id ? data?.data?.user : data?.data?.users,
    isLoading,
    mutate,
  };
};

export const usePost = (token: string, id?: string, query?: IPostQuery) => {
  let authorQuery = "";
  if (query?.author) {
    authorQuery = query.author;
  }
  let limitQuery = "";
  if (query?.limit) {
    limitQuery = query.limit;
  }
  const { data, isLoading, mutate } = useSWR(token ? (id ? [`${process.env.API_URL}/posts/${id}`, token] : [`${process.env.API_URL}/posts/?author=${authorQuery}&limit=${limitQuery}`, token]) : null, ([url, token]) => fetcher(url, token));
  return {
    post: id ? data?.data?.post : data?.data?.posts,
    isLoading,
    mutate,
  };
};

export const useHistory = (token: string) => {
  const { data, isLoading, mutate } = useSWR(token ? [`${process.env.API_URL}/histories/`, token] : null, ([url, token]) => fetcher(url, token));
  return {
    histories: data?.data?.histories,
    isLoading,
    mutate,
  };
};

export const useComment = (token: string, postId: string) => {
  const { data, isLoading, mutate } = useSWR(token ? [`${process.env.API_URL}/comments/${postId}`, token] : null, ([url, token]) => fetcher(url, token));
  return {
    comments: data?.data?.comments,
    isLoading,
    mutate,
  };
};

export const useLikes = (token: string, id: string) => {
  const { data, isLoading, mutate } = useSWR(token ? [`${process.env.API_URL}/posts/likes/${id}`, token] : null, ([url, token]) => fetcher(url, token));
  return {
    likes: data?.allLikes,
    isLoading,
    mutate,
  };
};
