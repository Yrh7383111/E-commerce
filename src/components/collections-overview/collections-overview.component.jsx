import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import CollectionPreview from '../collection-preview/collection-preview.component';
import { selectCollectionForPreview } from "../../redux/shop/shop.selectors";
import { CollectionsOverviewContainer } from "./collections-overview.styles";



const CollectionsOverview = ({ collections }) => (
    <CollectionsOverviewContainer>
        {/* Object destructing */}
        {/* ...otherProps - remaining properties in collection with the same name passed through */}
        {collections.map(({ id, ...otherProps }) => (
            <CollectionPreview key={id} {...otherProps} />
        ))}
    </CollectionsOverviewContainer>
);


// Retrieve props from store
const mapStateToProps = createStructuredSelector({
    // Caching - Memoization

    // If state.shop doesn't change, memoize collections
    collections: state => selectCollectionForPreview(state)
});



export default connect(mapStateToProps)(CollectionsOverview);