import React from 'react';
import * as redux from 'react-redux';
import { shallow } from 'enzyme';
import CheckoutPage from './checkout.component';
import CheckoutItem from '../../components/checkout-item/checkout-item.component';


describe('CheckoutPage component', () => {
    let useSelector
    let wrapper;

    const mockCartItems = [
            {
                id: 1,
                name: 'Brown Brim',
                imageUrl: 'https://i.ibb.co/ZYW3VTp/brown-brim.png',
                price: 25
            },
            {
                id: 2,
                name: 'Blue Beanie',
                imageUrl: 'https://i.ibb.co/ypkgK0X/blue-beanie.png',
                price: 18
            }
        ];
    const mockTotal = 100;


    beforeEach(() => {
        useSelector = jest.spyOn(redux, 'useSelector')
            .mockReturnValueOnce(mockCartItems)
            .mockReturnValueOnce(mockTotal);
        wrapper = shallow(<CheckoutPage />);
    });

    afterEach(() => {
        useSelector.mockClear();
    });

    test('should render CheckoutPage component', () => {
        expect(wrapper).toMatchSnapshot();
    });

    test('should render the same number of CheckoutItem as mockCartItems', () => {
        expect(wrapper.find(CheckoutItem).length).toBe(mockCartItems.length);
    });

    test('should render the same amount of total as mockTotal', () => {
        expect(wrapper.find('TotalContainer').text()).toBe('TOTAL: $' + mockTotal);
    });
});
