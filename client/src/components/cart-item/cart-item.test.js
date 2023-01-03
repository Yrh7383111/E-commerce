import React from 'react';
import { shallow } from 'enzyme';
import CartItem from './cart-item.component';


test('should render CartItem component', () => {
    const mockCartItem = {
        imageUrl: 'www.testImage.com',
        price: 10,
        name: 'hats',
        quantity: 2
    };

    expect(shallow(<CartItem cartItem={mockCartItem} />)).toMatchSnapshot();
});
