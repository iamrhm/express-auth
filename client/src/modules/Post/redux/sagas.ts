import { call, ForkEffect, put, takeLatest } from "redux-saga/effects";

import * as actionTypes from "./actionTypes";
import {
  FetchPostInfo,
  SubmitNewPost,
  fetchingPostInfo,
  populatePostInfo,
  addNewPostInfo
} from "./actions";
import { fetchPostDetail, submitPost } from "../apis";

function* fetchPostInfo(action: FetchPostInfo): any {
  try {
    yield put(fetchingPostInfo());
    const postInfo = yield call(fetchPostDetail);
    yield put(populatePostInfo({ post: postInfo.data, isLoading: false }));
  } catch (err) {
    throw new Error(err);
  }
}

function* submitPostInfo(action: SubmitNewPost): any {
  try {
    const newPost = yield call(submitPost, action.payload.post);
    yield put(addNewPostInfo(newPost.data));
  } catch (err) {
    throw new Error(err);
  }
}

function* postSagas(): Generator<ForkEffect<never>, void, unknown> {
  yield takeLatest(actionTypes.FETCH_POST_INFO, fetchPostInfo);
  yield takeLatest(actionTypes.SUBMIT_NEW_POST, submitPostInfo);
}

export default postSagas;
