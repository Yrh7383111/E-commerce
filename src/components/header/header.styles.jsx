import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';



// Option Container Style
const OptionContainerStyles = css`
  padding: 10px 15px;
  cursor: pointer;
`


// Header Container
export const HeaderContainer = styled.div`
  height: 70px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 25px;
`

// Logo Container
export const LogoContainer = styled(Link)`
  height: 100%;
  width: 70px;
  padding: 25px;
`

// Options Container
export const OptionsContainer = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`

// Option Link Container
export const OptionLinkContainer = styled(Link)`
    ${OptionContainerStyles}
`

// Option Link Container
export const OptionDivContainer = styled.div`
    ${OptionContainerStyles}
`