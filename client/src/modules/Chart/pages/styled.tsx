import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  background-color: #121212;
`;

export const Container = styled.div`
  width: 80%;
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 10px 0 0 40px;
  background-color: #212121;
  color: #ffffff;
`;

export const PlaceholderPanel = styled.div`
  width: 20%;
  height: 100%;
  display: flex;
  background-color: #121212;
  padding-top: 10px;
  flex-direction: column;
  padding: 50px;
  > P {
    margin: 8px 0;
    font-family: "Baloo Paaji 2", cursive;
    color: #ffffff;
    font-size: 24px;
  }
`;

export const WelcomeHeader = styled.h1`
  width: 100%;
  height: 40px;
  text-align: left;
  font-size: 32px;
  font-weight: bold;
  font-family: "Baloo Paaji 2", cursive;
  margin: 40px 0 60px 0;
`;

export const SectionWrapper = styled.div`
  width: 100%;
  height: 450px;
  display: flex;
  flex-direction: column;
  margin-bottom: 40px;
`;

export const SectionHeader = styled.div`
  width: 100%;
  height: 40px;
  text-align: left;
  font-size: 24px;
  font-weight: bold;
  font-family: "Baloo Paaji 2", cursive;
  margin-bottom: 10px;
`;

export const SectionContainer = styled.div`
  width: 100%;
  height: 400px;
  display: flex;
  padding: 2% 0;
`;
