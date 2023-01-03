import React from 'react';
import { useSelector } from 'react-redux';
import CollectionPreview from '../collection-preview/collection-preview.component';
import { selectCollectionForPreview } from "../../redux/shop/shop.selectors";
import { CollectionsOverviewContainer } from "./collections-overview.styles";



const CollectionsOverview = () => {
    // Retrieve props from store
    // Caching - Memoization
    // If state.shop doesn't change, memoize collections
    const collections = useSelector(selectCollectionForPreview);


    return (
        <CollectionsOverviewContainer>
            {/* Object destructing */}
            {/* ...otherProps - remaining properties in collection with the same name passed through */}
            {collections.map(({ id, ...otherProps }) => (
                <CollectionPreview key={id} {...otherProps} />
            ))}
        </CollectionsOverviewContainer>
    );
};


export default CollectionsOverview;