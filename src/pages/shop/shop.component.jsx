import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import CollectionPreview from "../../components/collection-preview/collection-preview.component";
import { selectCollections } from "../../redux/shop/shop.selectors";



const ShopPage = ({ collections }) => (
    <div className='shop-page'>
        {/* Object destructing */}
        {/* ...otherProps - remaining properties in collection with the same name passed through */}
        {collections.map(({ id, ...otherProps }) => (
            <CollectionPreview key={id} {...otherProps} />
        ))}
    </div>
);


// Shop Page component needs sections prop
// Retrieve props from store
const mapStateToProps = createStructuredSelector({
    // Caching - Memoization on Directory component

    // Same as sections: selectDirectorySections(state)
    collections: selectCollections
});



export default connect(mapStateToProps)(ShopPage);