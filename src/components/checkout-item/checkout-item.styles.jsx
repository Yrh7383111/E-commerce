import styled from 'styled-components';



// Checkout Item Container
export const CheckoutItemContainer = styled.div`
  width: 100%;
  display: flex;
  min-height: 100px;
  border-bottom: 1px solid darkgrey;
  padding: 15px 0;
  font-size: 20px;
  align-items: center;
`;

// Checkout Item Image Container
export const ImageContainer = styled.div`
  width: 23%;
  padding-right: 15px;

  img {
    width: 100%;
    height: 100%;
  }
`;

// Checkout ItemInfo Container
export const InfoContainer = styled.span`
  width: 23%;
`;

// Checkout Item Quantity Container
export const QuantityContainer = styled(InfoContainer)`
  display: flex;

  div {
    cursor: pointer;
  }

  span {
    margin: 0 10px;
  }
`;

// Checkout Item Remove Button Container
export const RemoveButtonContainer = styled.div`
  padding-left: 12px;
  cursor: pointer;
`;