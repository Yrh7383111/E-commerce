import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import CollectionPreview from '../collection-preview/collection-preview.component';
import { selectCollectionForPreview } from "../../redux/shop/shop.selectors";
import './collections-overview.styles.scss';



const CollectionOverview = ({ collections }) => (
    <div className='collections-overview'>
        {/* Object destructing */}
        {/* ...otherProps - remaining properties in collection with the same name passed through */}
        {collections.map(({ id, ...otherProps }) => (
            <CollectionPreview key={id} {...otherProps} />
        ))}
    </div>
);


// Collections Overview component needs sections prop
// Retrieve props from store
const mapStateToProps = createStructuredSelector({
    // Caching - Memoization on Directory component

    // Same as sections: selectDirectorySections(state)
    collections: selectCollectionForPreview
});



export default connect(mapStateToProps)(CollectionOverview);