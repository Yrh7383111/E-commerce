import React from 'react';
import * as redux from 'react-redux';
import { shallow } from 'enzyme';
import CheckoutItem from './checkout-item.component';


describe('CheckoutItem component', () => {
    let wrapper;
    let useDispatch;

    let mockAddItem;
    let mockRemoveItem;
    let mockClearItem;
    const mockCartItem = {
        imageUrl: 'www.testImage.com',
        name: 'hats',
        quantity: 2,
        price: 10
    };


    beforeEach(() => {
        mockAddItem = jest.fn();
        mockRemoveItem = jest.fn();
        mockClearItem = jest.fn();

        useDispatch = jest.spyOn(redux, 'useDispatch').mockReturnValue(mockAddItem);
        wrapper = shallow(<CheckoutItem cartItem={mockCartItem} />);
    });

    afterEach(() => {
       useDispatch.mockClear();
    });

    test('should render CheckoutItem component', () => {
        expect(wrapper).toMatchSnapshot();
    });

    test('should call addItem when right arrow is clicked', () => {
        wrapper.find('QuantityContainer')
            .childAt(2)
            .simulate('click');
        expect(mockAddItem).toHaveBeenCalled();
    });

    test('should call removeItem when left arrow is clicked', () => {
        useDispatch = jest.spyOn(redux, 'useDispatch').mockReturnValue(mockRemoveItem);
        wrapper = shallow(<CheckoutItem cartItem={mockCartItem} />);
        wrapper.find('QuantityContainer')
            .childAt(0)
            .simulate('click');
        expect(mockRemoveItem).toHaveBeenCalled();
    });

    test('should call clearItem when remove button is clicked', () => {
        useDispatch = jest.spyOn(redux, 'useDispatch').mockReturnValue(mockClearItem);
        wrapper = shallow(<CheckoutItem cartItem={mockCartItem} />);
        wrapper.find('RemoveButtonContainer').simulate('click');
        expect(mockClearItem).toHaveBeenCalled();
    });
});
