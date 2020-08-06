import React from 'react';
import SHOP_DATA from './shop.data.js';
import CollectionPreview from "../../components/collection-preview/collection-preview.component";



class ShopPage extends React.Component
{
    constructor(props)
    {
        super(props);

        this.state =  {
            collections: SHOP_DATA
        }
    }


    render()
    {
        // Object destructing
        const { collections } = this.state;

        return (
            <div className='shop-page'>
                {/* Object destructing */}
                {/* ...otherProps - remaining properties in collection with the same name passed through */}
                {collections.map(({ id, ...otherProps }) => (
                    <CollectionPreview key={id} {...otherProps} />
                ))}
            </div>
        );
    }
}



export default ShopPage;