import styled from 'styled-components';

export const ItemContainer = styled.div`
  width: 100%;
  min-width: 320px;
  height: 200px;
  padding: 2.5%;
  border-radius: 5px;
  background: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;

  margin-bottom: 30px;
  box-shadow: 0px 2px 12px 5px #f1f1f7;
`;

export const ItemHeaderSection = styled.div`
  width: 100%;
  height: 50%;
  display: flex;
  justify-content: flex-start;
  align-self: flex-end;
`;

export const ItemArtSection = styled.div`
  width: 84px;
  height: 84px;
  display: flex;
  justify-content: flex-start;
  align-content: flex-start;
`;

export const ItemArtImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: fill;
  border-radius: 2px;
`;

export const ItemInfoSection = styled.div`
  width: calc(100% - 84px);
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  padding-left: 15px;
  justify-content: flex-end;
`;

export const ItemTitleSection = styled.div`
  padding: 2px;
  width: 100%;
  font-size: 20px;
  font-weight: bold;
  font-family: 'Baloo Paaji 2', cursive;
  display: flex;
  justify-content: flex-start;
`;

export const ItemCreatorSection = styled.div`
  padding: 2px;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  display: flex;
  justify-content: flex-start;
  > p {
    padding: 4px 0;
    padding-right: 10px;
    font-size: 14px;
    margin: 0;
    font-family: 'Roboto', sans-serif;
    opacity: 0.8;
  }
`;

export const ItemDescriptionSection = styled.div`
  margin-top: 20px;
  padding: 2px;
  width: 100%;
  > p {
    padding: 4px 0;
    padding-right: 10px;
    font-size: 14px;
    margin: 0;
    font-family: 'Roboto', sans-serif;
    opacity: 0.8;
  }
`;

/**
 * Post Tile Style
 */

export const TileContainer = styled.div`
  width: 240px;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-right: 60px;
  cursor: pointer;
`;

export const TileArtSection = styled.div`
  width: 100%;
  height: 65%;
  margin-bottom: 2%;
`;

export const TileArt = styled.img`
  width: 100%;
  height: 100%;
  object-fit: fill;
`;

export const TileTitleSection = styled.div`
  height: 20%;
  width: 100%;
  font-size: 18px;
  font-weight: bold;
  font-family: 'Baloo Paaji 2';
  overflow: hidden;
  text-overflow: ellipsis;
  margin: 2% 0;
  word-break: break-all;
`;

export const TileSubTitleSection = styled.span`
  height: 10%;
  width: 100%;
  font-size: 14px;
  margin: 0;
  opacity: 0.8;
  font-family: 'Roboto';
  display: flex;
  align-content: flex-start;
`;
