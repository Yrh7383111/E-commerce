import React from 'react';
import CollectionItem from "../collection-item/collection-item.component";
import './collection-preview.styles.scss'



// Collection Preview component
// Object destructing
// this.props -> { title, items }
const CollectionPreview = ({ title, items }) => (
    <div className='collection-preview'>
        <h1 className='title'>{title.toUpperCase()}</h1>

        <div className='preview'>
            {items.filter((item, index) => index < 4)
                // Object destructing
                .map(item => (
                    // ...otherProps - remaining properties in item with the same name passed through
                    <CollectionItem key={item.id} item={item} />
                ))}
        </div>
    </div>
);



export default CollectionPreview;