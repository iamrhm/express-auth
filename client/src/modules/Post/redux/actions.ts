import * as actionTypes from "./actionTypes";
import { PostState, Post, PostRequest } from "../interfaces";

export interface FetchPostInfo {
  type: typeof actionTypes.FETCH_POST_INFO;
}

export interface FetchingPostInfo {
  type: typeof actionTypes.FETCHING_POST_INFO;
}

export interface PopulatePostInfo {
  type: typeof actionTypes.POPULATE_POST_INFO;
  payload: { post: PostState };
}

export interface SubmitNewPost {
  type: typeof actionTypes.SUBMIT_NEW_POST;
  payload: { post: PostRequest };
}

export interface AddNewPost {
  type: typeof actionTypes.ADD_NEW_POST;
  payload: { post: Post };
}

export function fetchPostInfo(): FetchPostInfo {
  return {
    type: actionTypes.FETCH_POST_INFO
  };
}

export function fetchingPostInfo(): FetchingPostInfo {
  return {
    type: actionTypes.FETCHING_POST_INFO
  };
}

export function populatePostInfo(post: PostState): PopulatePostInfo {
  return {
    type: actionTypes.POPULATE_POST_INFO,
    payload: { post }
  };
}

export function submitNewPost(post: PostRequest): SubmitNewPost {
  return {
    type: actionTypes.SUBMIT_NEW_POST,
    payload: { post }
  };
}

export function addNewPostInfo(post: Post): AddNewPost {
  return {
    type: actionTypes.ADD_NEW_POST,
    payload: { post }
  };
}

export type PostAction =
  | FetchPostInfo
  | FetchingPostInfo
  | PopulatePostInfo
  | SubmitNewPost
  | AddNewPost;
