import React from 'react';
import { withRouter } from "react-router-dom";
import CollectionItem from "../collection-item/collection-item.component";
import { CollectionPreviewContainer, PreviewContainer, TitleContainer } from "./collection-preview.styles";



// Collection Preview component
// Object destructing
// this.props -> { title, items }
const CollectionPreview = ({ title, items, routeName, history, match }) => (
    <CollectionPreviewContainer>
        <TitleContainer onClick={() => history.push(`${match.path}/${routeName}`)}>{title.toUpperCase()}</TitleContainer>

        <PreviewContainer>
            {items.filter((item, index) => index < 4)
                .map(item => (
                    <CollectionItem key={item.id} item={item} />
                ))}
        </PreviewContainer>
    </CollectionPreviewContainer>
);



export default withRouter(CollectionPreview);