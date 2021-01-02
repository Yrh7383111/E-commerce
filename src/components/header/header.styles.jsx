import styled from 'styled-components';
import { Link } from 'react-router-dom';



// Header Container
export const HeaderContainer = styled.div`
  height: 70px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 25px;
`;

// Logo Container
export const LogoContainer = styled(Link)`
  height: 100%;
  width: 70px;
  padding: 25px;
`;

// Options Container
export const OptionsContainer = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

// Option Link Container
export const OptionLinkContainer = styled(Link)`
  padding: 10px 15px;
  cursor: pointer;
`;