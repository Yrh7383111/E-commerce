import React from 'react';
import { withRouter } from 'react-router-dom';
import {
    BackgroundImageContainer,
    ContentContainer,
    MenuItemContainer,
    SubtitleContainer,
    TitleContainer
} from "./menu-item.styles";



// Menu Item component
// Destructing
// props -> { title, imageUrl, size, linkUrl }
const MenuItem = ({ title, imageUrl, size, linkUrl, history, match }) => (
    <MenuItemContainer size={size} onClick={() => history.push(`${match.url}${linkUrl}`)} >
        <BackgroundImageContainer className='background-image' imageUrl={imageUrl} />

        <ContentContainer>
            <TitleContainer>{title.toUpperCase()}</TitleContainer>
            <SubtitleContainer>SHOP NOW</SubtitleContainer>
        </ContentContainer>
    </MenuItemContainer>
);


// withRouter - avoids props tunneling
// by providing access the props: history, location, match
export default withRouter(MenuItem);