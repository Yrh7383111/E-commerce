import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import CollectionItem from '../../components/collection-item/collection-item.component';
import { selectCollection } from '../../redux/shop/shop.selectors';
import { CollectionPageContainer, ItemsContainer, TitleContainer } from './collection.styles';


const CollectionPage = () => {
    const { collectionId } = useParams();
    // Retrieve props from store
    // ownProps = this.props
    const collection = useSelector(selectCollection(collectionId));
    const { title, items } = collection;

    return (
        <CollectionPageContainer>
            <TitleContainer>{title}</TitleContainer>
            <ItemsContainer >
                {items.map(item => (
                    <CollectionItem key={item.id} item={item} />
                ))}
            </ItemsContainer>
        </CollectionPageContainer>
)};


export default CollectionPage;
