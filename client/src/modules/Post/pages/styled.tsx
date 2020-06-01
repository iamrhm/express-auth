import styled from "styled-components";

export const Wrapper = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 32px;
  background-color: #f8f8ff;
`;

export const MenuSection = styled.div`
  width: 15%;
  display: flex;
  height: 100%;
  justify-content: center;
`;

export const Container = styled.div`
  width: 60%;
  height: 100%;
  padding: 0 5%;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media only screen and (min-device-width: 320px) and (max-device-width: 480px) {
    width: 100%;
  }
`;

export const MediaListContainer = styled.div`
  width: 70%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const HeadingSection = styled.div`
  width: 100%;
  height: 32%;
  display: flex;
`;

export const ArtSection = styled.div`
  width: 25%;
  height: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  max-width: 220px;
  border-radius: 2px;
  align-items: flex-end;
`;

export const ArtBanner = styled.img`
  width: 90%;
  object-fit: cover;
  border-radius: 2px;
  box-shadow: 0 2.8px 2.2px rgba(0, 0, 0, 0.034),
    0 6.7px 5.3px rgba(0, 0, 0, 0.038), 0 12.5px 10px rgba(0, 0, 0, 0.06),
    0 22.3px 17.9px rgba(0, 0, 0, 0.062), 0 41.8px 33.4px rgba(0, 0, 0, 0.07),
    0 100px 80px rgba(0, 0, 0, 0.12);
`;

export const InfoSection = styled.div`
  width: 75%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  align-self: flex-end;
  justify-content: flex-end;
  padding-left: 4px;
`;

export const Title = styled.div`
  text-align: left;
  font-size: 32px;
  font-weight: bold;
  font-family: "Baloo Paaji 2", cursive;
`;

export const CreatorsInfo = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  display: flex;
  justify-content: flex-start;
  > p {
    padding: 4px 0;
    padding-right: 10px;
    font-size: 16px;
    margin: 0;
    font-family: "Roboto", sans-serif;
    opacity: 0.8;
  }
`;

export const ActionSection = styled.div`
  width: 100%;
  margin-top: 2%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

export const ActionButton = styled.button`
  width: 120px;
  padding: 1.2%;
  margin-right: 2%;
  border-radius: 24px;
  font-size: 14px;
  cursor: pointer;
  border: 1px solid #1db954;
  background: #f8f8ff;
`;

export const BodySection = styled.div`
  width: 70%;
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  text-align: left;
  > p {
    font-size: 18px;
    margin: 0;
    font-family: "Baloo Paaji 2", cursive;
    font-weight: bold;
    line-height: 20px;
  }
`;

export const DescriptionContainer = styled.div`
  > p {
    font-size: 14px;
    opacity: 0.8;
    line-height: 20px;
  }
`;

export const GenresInfo = styled(CreatorsInfo)``;
