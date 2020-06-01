import React from "react";

import { PostBasicInfo } from "../../interfaces";

import {
  PostContainer,
  PostCreatorSection,
  PostTitleSection,
  PostDescriptionSection,
  PostHeaderSection,
  PostInfoSection
} from "./styled";

interface IProps {
  post: PostBasicInfo;
}

const PostItem: React.FC<IProps> = ({ post }: IProps): JSX.Element => {
  return (
    <PostContainer>
      <PostHeaderSection>
        <PostInfoSection>
          <PostTitleSection>{post.title}</PostTitleSection>
          <PostCreatorSection>
            <p>{post.creator.name}</p>
          </PostCreatorSection>
        </PostInfoSection>
      </PostHeaderSection>
      <PostDescriptionSection>
        <p>{post.content}</p>
      </PostDescriptionSection>
    </PostContainer>
  );
};

export default React.memo(PostItem);
