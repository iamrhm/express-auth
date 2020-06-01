import styled from "styled-components";

import {
  ItemContainer,
  ItemCreatorSection,
  ItemTitleSection,
  ItemDescriptionSection,
  ItemHeaderSection,
  ItemInfoSection
} from "../Shared";

export const PostContainer = styled(ItemContainer)`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const PostCreatorSection = styled(ItemCreatorSection)``;
export const PostTitleSection = styled(ItemTitleSection)``;
export const PostDescriptionSection = styled(ItemDescriptionSection)``;
export const PostHeaderSection = styled(ItemHeaderSection)``;
export const PostInfoSection = styled(ItemInfoSection)``;

export const FormControl = styled.div`
  width: 100%;
  padding: 2%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`;

export const FormLabel = styled.p`
  width: 100%;
  text-align: left;
`;

export const TextInput = styled.input`
  width: 100%;
  padding: 2px 0;
  border-bottom: 0.5px solid #2d2d2d40;
  min-height: 24px;
`;

export const FormAction = styled.div`
  width: 100%;
  padding: 20px 0;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`;

export const ButtonInput = styled.button`
  width: 80px;
  padding: 2% 2%;
  border: 0.5px solid #2d2d2d40;
  border-radius: 5px;
  background: #fff;
  cursor: pointer;
`;

export const FormHeader = styled.p`
  text-align: center;
  width: 100%;
`;
