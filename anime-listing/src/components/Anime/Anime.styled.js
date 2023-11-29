import styled from 'styled-components';

export const StyledContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  border: 1px white solid;
`;

export const StyledContent = styled.div`
  flex: 1;

  font-size: ${({ theme }) => theme.fontSizes[5]}px;

  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  gap: 1rem;

  padding: 1rem;
`;

export const StyledCoverArt = styled.div`
  width: 75px;
  height: 75px;
  overflow: hidden;

  img {
    width: 100%;
  }
`;

export const StyledTitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 1rem;
  height: 32px;
  flex: 1;
`;

export const StyledTitle = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 1rem;

  flex: 1;

  span {
    text-align: left;
  }
`;

export const StyledFavourite = styled.div`
  display: flex;
  flex-direction: row;
`;

export const StyledNicknakeWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1rem;
`;

export const StyledNickname = styled.div`
  padding: 0.3rem 0.5rem;
  background: white;
  color: black;
  border-radius: 5px;
  overflow: hidden;

  font-size: ${({ theme }) => theme.fontSizes[1]}px;
  width: max-content;
`;

export const StyledActions = styled.div`
  display: grid;
  place-items: center;
  width: 100px;
  border-left: 1px solid white;
`;
