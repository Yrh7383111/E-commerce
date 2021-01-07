import React from 'react';
import { connect } from 'react-redux'
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
const CollectionItem = ({ item, addItem }) => {
    const { name, price, imageUrl } = item;

    return (
        <CollectionItemContainer>
            <ImageContainer className='background-image' imageUrl={imageUrl} />

            <CollectionFooterContainer>
                <NameContainer>{name}</NameContainer>
                <PriceContainer>{price}</PriceContainer>
            </CollectionFooterContainer>

            <AddToCartContainer inverted onClick={() => addItem(item)}>Add to Cart</AddToCartContainer>
        </CollectionItemContainer>
)};


// Dispatch state to all Reducers
const mapDispatchToProps = dispatch => ({
    addItem: cartItem => dispatch(addItem(cartItem))
});


export default connect(null, mapDispatchToProps) (CollectionItem);