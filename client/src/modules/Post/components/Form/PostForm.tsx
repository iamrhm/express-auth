import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { State } from "interfaces/redux";

import { SubmitNewPost, submitNewPost } from "../../redux/actions";

import { AccountState } from "modules/Account/interfaces";

import {
  PostContainer,
  PostCreatorSection,
  PostTitleSection,
  PostDescriptionSection,
  PostHeaderSection,
  PostInfoSection,
  FormControl,
  FormLabel,
  TextInput,
  FormAction,
  ButtonInput,
  FormHeader
} from "./styled";

const UPDATE_INPUT_DATA: "UPDATE_INPUT_DATA" = "UPDATE_INPUT_DATA";
type IAction = UpdateInputAction;

interface PostSubmitData {
  title: string;
  content: string;
  creator: string;
}

interface IState {
  postData: PostSubmitData;
}

interface UpdateInputAction {
  type: typeof UPDATE_INPUT_DATA;
  payload: { postData: PostSubmitData };
}

const initialState: IState = {
  postData: {
    title: "",
    content: "",
    creator: ""
  }
};

function reducer(state: IState, { type, payload }: IAction): IState {
  switch (type) {
    case "UPDATE_INPUT_DATA":
      return { ...state, postData: payload.postData };
    default:
      return state;
  }
}

function isValid(key: string, value: any): boolean {
  return true;
}

const PostForm: React.FC = (): JSX.Element => {
  const dispatch = useDispatch();
  const [state, updateState] = React.useReducer(reducer, initialState);
  const { id } = useSelector(
    ({ account }: State): AccountState => account
  );

  const postNewData = React.useCallback((): SubmitNewPost => {
    const newPostData = { ...state.postData, creator: id };
    return dispatch(submitNewPost(newPostData));
  }, [dispatch]);

  function handleInputChange(e: React.ChangeEvent<HTMLInputElement>): void {
    const newPostData = state.postData;
    const name = e.target.name;
    const value = e.target.value;

    if (isValid(name, value)) {
      newPostData[name] = value.trim();
      updateState({
        type: "UPDATE_INPUT_DATA",
        payload: { postData: newPostData }
      });
    }
  }

  return (
    <PostContainer>
      <PostTitleSection>
        <FormHeader>Add Your New Post</FormHeader>
      </PostTitleSection>
      <PostHeaderSection>
        <PostInfoSection>
          <PostTitleSection>
            <FormControl>
              <FormLabel>Title</FormLabel>
              <TextInput
                name="title"
                required={true}
                type="text"
                placeholder="Enter Title"
                value={state.postData.title}
                onChange={(e: any): void => {
                  e.preventDefault();
                  handleInputChange(e);
                }}
              />
            </FormControl>
          </PostTitleSection>
          <PostCreatorSection>
            <FormControl>
              <FormLabel>Content</FormLabel>
              <TextInput
                name="content"
                required={true}
                type="text"
                placeholder="Write Your Post"
                value={state.postData.content}
                onChange={(e: any): void => {
                  e.preventDefault();
                  handleInputChange(e);
                }}
              />
            </FormControl>
          </PostCreatorSection>
        </PostInfoSection>
      </PostHeaderSection>
      <PostDescriptionSection>
        <FormAction>
          <ButtonInput
            onClick={(e: any): void => {
              e.preventDefault();
              postNewData();
            }}
          >
            Submit
          </ButtonInput>
        </FormAction>
      </PostDescriptionSection>
    </PostContainer>
  );
};

export default React.memo(PostForm);
