import * as actionTypes from "./actionTypes";
import { PostAction } from "./actions";
import { PostState } from "../interfaces";

export const initialPostState = {
  post: [
    {
      id: "",
      title: "",
      creator: {
        id: "",
        name: ""
      },
      content: "",
      comments: [],
      createdDate: new Date("1995-12-17T03:24:00")
    }
  ],
  isLoading: false
};

export default (
  state: PostState = initialPostState,
  action: PostAction
): PostState => {
  switch (action.type) {
    case actionTypes.FETCHING_POST_INFO:
      return {
        ...state,
        isLoading: true
      };
    case actionTypes.POPULATE_POST_INFO:
      return { ...state, ...action.payload.post };
    case actionTypes.ADD_NEW_POST:
      return { ...state, post: [...state.post, action.payload.post] };
    default:
      return state;
  }
};
