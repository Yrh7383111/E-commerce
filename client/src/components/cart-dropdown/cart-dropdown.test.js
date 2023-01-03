import React from 'react';
import * as redux from 'react-redux';
import Router from 'react-router-dom';
import { shallow } from 'enzyme';
import CartDropdown from './cart-dropdown.component';
import CartItem from '../cart-item/cart-item.component';
import { toggleCartHidden } from '../../redux/cart/cart.actions';


jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useHistory: jest.fn(),
}));

describe('CartDropdown component', () => {
    let wrapper;
    let useSelector;
    let useDispatch;
    let useHistory;

    let mockCartItems = [{ id: 1 }, { id: 2 }, { id: 3 }];
    const mockDispatch = jest.fn()
    const mockHistory = {
        push: jest.fn()
    };


    beforeEach(() => {
        useSelector = jest.spyOn(redux, 'useSelector').mockReturnValue(mockCartItems);
        useDispatch = jest.spyOn(redux, 'useDispatch').mockReturnValue(mockDispatch);
        useHistory = jest.spyOn(Router, 'useHistory').mockReturnValue(mockHistory);
        wrapper = shallow(<CartDropdown />);
    });

    afterEach(() => {
       useSelector.mockClear();
       useDispatch.mockClear();
       useHistory.mockClear();
    });

    test('should render CartDropdown component', () => {
        expect(wrapper).toMatchSnapshot();
    });

    test('should call history.push when button is clicked', () => {
        wrapper.find('GoToCheckoutContainer').simulate('click');
        expect(mockHistory.push).toHaveBeenCalled();
        expect(mockDispatch).toHaveBeenCalledWith(toggleCartHidden());
    });

    test('should render an equal number of CartItem components as the cartItems prop', () => {
        expect(wrapper.find(CartItem).length).toEqual(mockCartItems.length);
    });

    test('should render EmptyMessageContainer if cartItems is empty', () => {
        mockCartItems = []
        useSelector = jest.spyOn(redux, 'useSelector').mockReturnValue(mockCartItems);
        wrapper = shallow(<CartDropdown />);
        expect(wrapper.exists('EmptyMessageContainer')).toBe(true);
    });
});
