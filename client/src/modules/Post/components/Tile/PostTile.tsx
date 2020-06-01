import React from "react";

import { PostShortInfo } from "../../interfaces";

import {
  PostContainer,
  PostTitleSection,
  PostCommentSection
} from "./styled";

const PostTile: React.FC<{ post: PostShortInfo }> = React.memo(
  ({ post }: { post: PostShortInfo }): JSX.Element => {
    const { title, comments, content } = post;

    return (
      <PostContainer>
        <PostTitleSection>{title}</PostTitleSection>
        <PostTitleSection>{content}</PostTitleSection>
        <PostCommentSection>{comments?.length}</PostCommentSection>
      </PostContainer>
    );
  }
);

export default PostTile;
