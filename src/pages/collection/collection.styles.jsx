import styled from 'styled-components';



// Collection Page Container
export const CollectionPageContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

// Title Container
export const TitleContainer = styled.h2`
  display: flex;
  flex-direction: column;
`;

// Items Container
export const ItemsContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 10px;

  & .collection-item {
    margin-bottom: 30px;
  }
`;