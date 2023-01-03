import React from 'react';
import * as redux from 'react-redux';
import { shallow } from 'enzyme';
import Header from './header.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';


describe('Header component', () => {
    let wrapper;
    let useSelector;
    let useDispatch;

    let mockHidden = true;
    let mockCurrentUser = {
        uid: '123'
    };
    const mockSignOutStart = jest.fn();


    beforeEach(() => {
        useSelector = jest.spyOn(redux, 'useSelector')
            .mockReturnValueOnce(mockCurrentUser)
            .mockReturnValueOnce(mockHidden);
        useDispatch = jest.spyOn(redux, 'useDispatch').mockReturnValue(mockSignOutStart)
        wrapper = shallow(<Header />);
    });
    
    afterEach(() => {
        useSelector.mockClear();
        useDispatch.mockClear();
    });

    test('should render Header component', () => {
        expect(wrapper).toMatchSnapshot();
    });

    describe('if currentUser is present', () => {
        test('should render sign out link', () => {
            expect(wrapper.find('OptionLinkContainer').at(2).text()).toBe('SIGN OUT');
        });

        test('should call signOutStart method when link is clicked', () => {
            wrapper.find('OptionLinkContainer').at(2).simulate('click');
            expect(mockSignOutStart).toHaveBeenCalled();
        });
    });

    describe('if currentUser is null', () => {
        test('should render sign in link', () => {
            mockCurrentUser = null;
            useSelector = jest.spyOn(redux, 'useSelector')
                .mockReturnValueOnce(mockCurrentUser)
                .mockReturnValueOnce(mockHidden);
            wrapper = shallow(<Header />);
            expect(wrapper.find('OptionLinkContainer').at(2).text()).toBe('SIGN IN');
        });
    });

    describe('if hidden is true', () => {
        test('should not render CartDropdown', () => {
            expect(wrapper.exists(CartDropdown)).toBe(false);
        });
    });

    describe('if currentUser is null', () => {
        test('should render CartDropdown', () => {
            mockHidden = false;
            mockCurrentUser = null;
            useSelector = jest.spyOn(redux, 'useSelector')
                .mockReturnValueOnce(mockCurrentUser)
                .mockReturnValueOnce(mockHidden);
            wrapper = shallow(<Header />);
            expect(wrapper.exists(CartDropdown)).toBe(true);
        });
    });
});
