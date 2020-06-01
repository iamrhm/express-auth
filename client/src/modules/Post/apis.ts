import api from "helpers/api";

import { Post, PostRequest } from "./interfaces";
import { getToken } from "modules/Auth/apis";

const postApis = {
  data: {
    allPost: (): string => `auth/post/`,
    getPostById: (postId: string): string => `auth/post/${postId}`,
    token: () => getToken()
  }
};

export const fetchPostDetail = async (): Promise<Post> => {
  return api({
    url: postApis.data.allPost(),
    headers: { Authorization: `Bearer ${postApis.data.token()}` }
  });
};

export const submitPost = async (newPost: PostRequest): Promise<Post> => {
  return api({
    url: postApis.data.allPost(),
    headers: { Authorization: `Bearer ${postApis.data.token()}` },
    data: { ...newPost },
    method: "post"
  });
};
