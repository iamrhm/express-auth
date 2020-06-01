import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { fetchPostInfo, FetchPostInfo } from "../redux/actions";
import { State } from "interfaces/redux";
import { PostState, Post as IPost } from "../interfaces";

import { Wrapper, Container } from "./styled";

import PostItem from "../components/Item";
import PostForm from "../components/Form/PostForm";

const Post = (): JSX.Element => {
  const dispatch = useDispatch();

  const { post, isLoading } = useSelector(
    (state: State): PostState => state.post
  );

  const fetchPostDetails = React.useCallback(
    (): FetchPostInfo => dispatch(fetchPostInfo()),
    [dispatch]
  );

  React.useEffect((): void => {
    fetchPostDetails();
  }, [fetchPostDetails]);

  if (!isLoading) {
    return (
      <Wrapper>
        <Container>
          {post.map((data: IPost, index: number): any => {
            return <PostItem key={index} post={data} />;
          })}
          <PostForm />
        </Container>
      </Wrapper>
    );
  } else {
    return <></>;
  }
};

export default Post;
