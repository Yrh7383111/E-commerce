import React from 'react';
import CollectionItem from "../collection-item/collection-item.component";
import './collection-preview.styles.scss'



// Collection Preview component
// Destructing
// props -> { title, items }
const CollectionPreview = ({ title, items }) => (
    <div className='collection-preview'>
        <h1 className='title'>{title.toUpperCase()}</h1>

        <div className='preview'>
            {items.filter((item, index) => index < 4)
                // Object destructing
                .map(({ id, ...otherProps }) => (
                    // ...otherProps - remaining properties in item with the same name passed through
                    <CollectionItem key={id} {...otherProps} />
                ))}
        </div>
    </div>
);



export default CollectionPreview;