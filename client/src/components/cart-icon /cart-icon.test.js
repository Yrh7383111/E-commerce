import React from 'react';
import { shallow } from 'enzyme';
import CartIcon from './cart-icon.component';
import * as redux from 'react-redux';

describe('CartIcon component', () => {
    let wrapper;
    let useSelector;
    let useDispatch;

    const mockItemCount = 0;
    const mockToggleCartHidden = jest.fn();

    
    beforeEach(() => {
        useSelector = jest.spyOn(redux, 'useSelector').mockReturnValue(mockItemCount);
        useDispatch = jest.spyOn(redux, 'useDispatch').mockReturnValue(mockToggleCartHidden);
        wrapper = shallow(<CartIcon />);
    });
    
    afterEach(() => {
        useSelector.mockClear();
        useDispatch.mockClear();
    });

    test('should render CartIcon component', () => {
        expect(wrapper).toMatchSnapshot();
    });

    test('should call toggleCartHidden when icon is clicked', () => {
        wrapper.find('CartIconContainer').simulate('click');
        expect(mockToggleCartHidden).toHaveBeenCalled();
    });

    test('should render the itemCount as the text', () => {
        expect(parseInt(wrapper.find('ItemCountContainer').text())).toBe(0);
    });
});
