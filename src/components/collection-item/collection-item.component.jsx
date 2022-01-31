import React from 'react';
import { useDispatch } from 'react-redux'
import { addItem } from "../../redux/cart/cart.actions";
import {
    AddToCartContainer,
    CollectionFooterContainer,
    CollectionItemContainer,
    ImageContainer,
    NameContainer, PriceContainer
} from "./collection-styles.styles";



// Collection Item component
// Destructing
const CollectionItem = ({ item }) => {
    const { name, price, imageUrl } = item;
    // Dispatch Actions to all Reducers
    const dispatch = useDispatch();


    return (
        <CollectionItemContainer>
            <ImageContainer className='background-image' imageUrl={imageUrl} />

            <CollectionFooterContainer>
                <NameContainer>{name}</NameContainer>
                <PriceContainer>{price}</PriceContainer>
            </CollectionFooterContainer>

            <AddToCartContainer inverted onClick={() => dispatch(addItem(item))}>Add to Cart</AddToCartContainer>
        </CollectionItemContainer>
)};


export default CollectionItem;