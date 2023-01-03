import styled from 'styled-components';


// Collection Preview Container
export const CollectionPreviewContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;

  @media screen and (max-width: 800px) {
    align-items: center;
  }
`;

// Title Container
export const TitleContainer = styled.h1`
  font-size: 28px;
  margin-bottom: 25px;

  &:hover {
    color: grey;
    cursor: pointer;
  }
`;
TitleContainer.displayName = 'TitleContainer';

// Title Container
export const PreviewContainer = styled.div`
  display: flex;
  justify-content: space-between;

  @media screen and (max-width: 800px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 15px;
  }
`;